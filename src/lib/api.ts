import { useAuthStore } from '../store/useAuthStore';

const API_BASE = import.meta.env.VITE_API_URL ?? '';
const DEFAULT_TIMEOUT_MS = 15000;

export interface ApiErrorShape {
  message: string;
  status: number;
  code?: string;
  details?: unknown;
}

export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  endpoint?: string;

  constructor(message: string, status: number, code?: string, details?: unknown, endpoint?: string) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
    this.endpoint = endpoint;
    this.name = 'ApiError';
  }
}

export interface ApiFetchOptions extends RequestInit {
  timeoutMs?: number;
}

interface ErrorPayload {
  message?: unknown;
  error?: unknown;
  code?: unknown;
  details?: unknown;
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value : null;
}

async function parseErrorPayload(response: Response): Promise<ErrorPayload | null> {
  try {
    const clone = response.clone();
    const json = await clone.json();
    return (json && typeof json === 'object') ? (json as ErrorPayload) : null;
  } catch {
    return null;
  }
}

function defaultMessageForStatus(status: number, endpoint: string): string {
  if (status === 400) return 'Invalid request. Please check your input and try again.';
  if (status === 401) return 'Your session has expired. Please reconnect and try again.';
  if (status === 403) return 'You do not have permission to perform this action.';
  if (status === 404) return 'Requested resource was not found.';
  if (status >= 500) return 'Server error. Please try again shortly.';
  return `Request failed: ${endpoint}`;
}

function createApiError(endpoint: string, status: number, payload: ErrorPayload | null): ApiError {
  const message =
    asString(payload?.message) ??
    asString(payload?.error) ??
    defaultMessageForStatus(status, endpoint);
  const code = asString(payload?.code) ?? undefined;
  const details = payload?.details;
  return new ApiError(message, status, code, details, endpoint);
}

export function normalizeApiError(error: unknown, fallbackMessage = 'Something went wrong. Please try again.'): ApiError {
  if (error instanceof ApiError) {
    return error;
  }
  if (error instanceof Error) {
    return new ApiError(error.message || fallbackMessage, 0, 'UNKNOWN', undefined);
  }
  return new ApiError(fallbackMessage, 0, 'UNKNOWN', undefined);
}

export async function apiFetch<T>(endpoint: string, options: ApiFetchOptions = {}): Promise<T> {
  const { jwt, clearAuth } = useAuthStore.getState();
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (jwt) {
    headers['Authorization'] = `Bearer ${jwt}`;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const requestOptions: RequestInit = { ...options };
  delete (requestOptions as Record<string, unknown>).timeoutMs;

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...requestOptions,
      headers,
      signal: requestOptions.signal ?? controller.signal,
    });

    if (response.status === 401) {
      clearAuth();
    }

    if (!response.ok) {
      const payload = await parseErrorPayload(response);
      const apiError = createApiError(endpoint, response.status, payload);
      if (import.meta.env.DEV) {
        console.debug('[apiFetch:error]', {
          endpoint,
          status: apiError.status,
          code: apiError.code,
          message: apiError.message,
        });
      }
      throw apiError;
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError('Request timed out. Please try again.', 0, 'TIMEOUT', undefined, endpoint);
    }
    throw normalizeApiError(error, 'Network error. Please check your connection and try again.');
  } finally {
    clearTimeout(timeout);
  }
}
