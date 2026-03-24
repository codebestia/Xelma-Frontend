import { useEffect } from 'react';
import { useWalletStore } from '../store/useWalletStore';
import { useAuthStore } from '../store/useAuthStore';
import { Loader2, AlertCircle, LogOut, Wallet, ShieldCheck, RefreshCw } from 'lucide-react';
import clsx from 'clsx';

const WalletConnect = () => {
  const {
    publicKey,
    balance,
    status,
    errorMessage,
    networkMismatch,
    connect,
    disconnect,
    checkConnection,
    clearError,
  } = useWalletStore();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    void checkConnection();
  }, [checkConnection]);

  const shortAddress = publicKey
    ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
    : '';

  if (publicKey && status === 'connected') {
    return (
      <div className="flex items-center gap-3">
        {networkMismatch && (
          <div
            className="hidden md:flex items-center text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded"
            role="status"
          >
            <AlertCircle className="w-4 h-4 mr-1 shrink-0" aria-hidden />
            Switch to Testnet in Freighter
          </div>
        )}

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-[#BEC7FE] dark:border-gray-700 rounded-lg shadow-sm">
          <span className="text-sm font-semibold text-[#4D4D4D] dark:text-gray-300">
            {balance ?? '—'}
          </span>
        </div>

        <div className="flex items-center gap-2 p-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg pr-3 relative group">
          <div
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs"
            aria-hidden
          >
            <Wallet className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{shortAddress}</span>
          {isAuthenticated && (
            <ShieldCheck className="w-4 h-4 text-green-500" aria-label="Authenticated with backend" />
          )}

          <button
            type="button"
            onClick={disconnect}
            className="absolute top-full right-0 mt-2 w-full min-w-[120px] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg py-2 px-3 flex items-center gap-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50"
            aria-label="Disconnect wallet"
          >
            <LogOut className="w-4 h-4 shrink-0" aria-hidden />
            <span className="text-sm">Disconnect</span>
          </button>
        </div>
      </div>
    );
  }

  if (status === 'error' && errorMessage) {
    return (
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-3">
        <p className="text-xs sm:text-sm text-red-600 dark:text-red-400 max-w-[220px] sm:max-w-xs text-right sm:text-left">
          {errorMessage}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              clearError();
              void connect();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold bg-[#2C4BFD] text-white hover:bg-[#1a3bf0]"
          >
            <RefreshCw className="w-4 h-4" aria-hidden />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => void connect()}
      disabled={status === 'connecting' || status === 'checking'}
      className={clsx(
        'flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200',
        'bg-[#2C4BFD] hover:bg-[#1a3bf0] text-white shadow-lg shadow-blue-500/20',
        'disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C4BFD]'
      )}
      aria-busy={status === 'connecting' || status === 'checking'}
    >
      {status === 'connecting' ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
          <span>Connecting…</span>
        </>
      ) : status === 'checking' ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
          <span>Checking wallet…</span>
        </>
      ) : (
        <>
          <Wallet className="w-4 h-4" aria-hidden />
          <span>Connect Wallet</span>
        </>
      )}
    </button>
  );
};

export default WalletConnect;
