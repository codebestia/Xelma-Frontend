import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PredictionCard from './PredictionCard';
import type { PredictionData } from './PredictionControls';

// Mock PredictionControls component
vi.mock('./PredictionControls', () => ({
  default: ({ 
    isWalletConnected, 
    isRoundActive, 
    isConnecting, 
    isSubmittingPrediction, 
    onPrediction 
  }: {
    isWalletConnected: boolean;
    isRoundActive: boolean;
    isConnecting: boolean;
    isSubmittingPrediction: boolean;
    onPrediction?: (prediction: PredictionData) => void;
  }) => (
    <div 
      data-testid="prediction-controls"
      data-wallet-connected={isWalletConnected}
      data-round-active={isRoundActive}
      data-connecting={isConnecting}
      data-submitting={isSubmittingPrediction}
    >
      <button 
        onClick={() => onPrediction?.({ 
          direction: 'UP', 
          stake: '10', 
          exactPrice: '100', 
          isLegend: false 
        })}
        data-testid="mock-submit"
      >
        Submit Prediction
      </button>
    </div>
  ),
}));

describe('PredictionCard', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('rendering', () => {
    it('renders with default props', () => {
      render(<PredictionCard />);

      expect(screen.getByTestId('prediction-card')).toBeInTheDocument();
      expect(screen.getByTestId('prediction-controls')).toBeInTheDocument();
    });

    it('has correct test id', () => {
      render(<PredictionCard />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toBeInTheDocument();
    });

    it('applies base CSS classes', () => {
      render(<PredictionCard />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card');
    });
  });

  describe('disabled state', () => {
    it('applies disabled class when wallet not connected', () => {
      render(<PredictionCard isWalletConnected={false} />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card--disabled');
    });

    it('applies disabled class when round not active', () => {
      render(<PredictionCard isWalletConnected={true} isRoundActive={false} />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card--disabled');
    });

    it('applies disabled class when connecting', () => {
      render(<PredictionCard isWalletConnected={true} isRoundActive={true} isConnecting={true} />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card--disabled');
    });

    it('applies disabled class when submitting prediction', () => {
      render(<PredictionCard isWalletConnected={true} isRoundActive={true} isSubmittingPrediction={true} />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card--disabled');
    });

    it('does not apply disabled class when all conditions are met', () => {
      render(
        <PredictionCard 
          isWalletConnected={true} 
          isRoundActive={true} 
          isConnecting={false} 
          isSubmittingPrediction={false} 
        />
      );

      const card = screen.getByTestId('prediction-card');
      expect(card).not.toHaveClass('prediction-card--disabled');
      expect(card).toHaveClass('prediction-card');
    });
  });

  describe('prop forwarding to PredictionControls', () => {
    it('forwards isWalletConnected prop', () => {
      render(<PredictionCard isWalletConnected={true} />);

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-wallet-connected', 'true');
    });

    it('forwards isRoundActive prop', () => {
      render(<PredictionCard isRoundActive={false} />);

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-round-active', 'false');
    });

    it('forwards isConnecting prop', () => {
      render(<PredictionCard isConnecting={true} />);

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-connecting', 'true');
    });

    it('forwards isSubmittingPrediction prop', () => {
      render(<PredictionCard isSubmittingPrediction={true} />);

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-submitting', 'true');
    });

    it('forwards all props correctly', () => {
      render(
        <PredictionCard 
          isWalletConnected={true}
          isRoundActive={false}
          isConnecting={false}
          isSubmittingPrediction={true}
        />
      );

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-wallet-connected', 'true');
      expect(controls).toHaveAttribute('data-round-active', 'false');
      expect(controls).toHaveAttribute('data-connecting', 'false');
      expect(controls).toHaveAttribute('data-submitting', 'true');
    });
  });

  describe('default prop values', () => {
    it('uses correct default values', () => {
      render(<PredictionCard />);

      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toHaveAttribute('data-wallet-connected', 'false');
      expect(controls).toHaveAttribute('data-round-active', 'true');
      expect(controls).toHaveAttribute('data-connecting', 'false');
      expect(controls).toHaveAttribute('data-submitting', 'false');
    });

    it('applies disabled class with default props', () => {
      render(<PredictionCard />);

      const card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card--disabled');
    });
  });

  describe('onPrediction callback', () => {
    it('forwards onPrediction callback to PredictionControls', () => {
      const mockOnPrediction = vi.fn();
      render(<PredictionCard onPrediction={mockOnPrediction} />);

      const submitButton = screen.getByTestId('mock-submit');
      fireEvent.click(submitButton);

      expect(mockOnPrediction).toHaveBeenCalledWith({
        direction: 'UP',
        stake: '10',
        exactPrice: '100',
        isLegend: false,
      });
    });

    it('handles undefined onPrediction callback', () => {
      render(<PredictionCard />);

      const submitButton = screen.getByTestId('mock-submit');
      
      // Should not throw error
      expect(() => {
        fireEvent.click(submitButton);
      }).not.toThrow();
    });
  });

  describe('state combinations', () => {
    const testCases = [
      {
        name: 'wallet disconnected, round active',
        props: { isWalletConnected: false, isRoundActive: true },
        expectedDisabled: true,
      },
      {
        name: 'wallet connected, round inactive',
        props: { isWalletConnected: true, isRoundActive: false },
        expectedDisabled: true,
      },
      {
        name: 'wallet connected, round active, connecting',
        props: { isWalletConnected: true, isRoundActive: true, isConnecting: true },
        expectedDisabled: true,
      },
      {
        name: 'wallet connected, round active, submitting',
        props: { isWalletConnected: true, isRoundActive: true, isSubmittingPrediction: true },
        expectedDisabled: true,
      },
      {
        name: 'all conditions met',
        props: { isWalletConnected: true, isRoundActive: true, isConnecting: false, isSubmittingPrediction: false },
        expectedDisabled: false,
      },
      {
        name: 'multiple disabling conditions',
        props: { isWalletConnected: false, isRoundActive: false, isConnecting: true },
        expectedDisabled: true,
      },
    ];

    testCases.forEach(({ name, props, expectedDisabled }) => {
      it(`handles ${name}`, () => {
        render(<PredictionCard {...props} />);

        const card = screen.getByTestId('prediction-card');
        if (expectedDisabled) {
          expect(card).toHaveClass('prediction-card--disabled');
        } else {
          expect(card).not.toHaveClass('prediction-card--disabled');
        }
      });
    });
  });

  describe('accessibility', () => {
    it('maintains accessibility through prop forwarding', () => {
      const mockOnPrediction = vi.fn();
      render(
        <PredictionCard 
          isWalletConnected={true}
          isRoundActive={true}
          onPrediction={mockOnPrediction}
        />
      );

      // The component should forward all accessibility concerns to PredictionControls
      const controls = screen.getByTestId('prediction-controls');
      expect(controls).toBeInTheDocument();
      
      // Test that interaction still works
      const submitButton = screen.getByTestId('mock-submit');
      fireEvent.click(submitButton);
      expect(mockOnPrediction).toHaveBeenCalled();
    });
  });

  describe('CSS class management', () => {
    it('always includes base prediction-card class', () => {
      const testProps = [
        {},
        { isWalletConnected: true },
        { isRoundActive: false },
        { isConnecting: true },
        { isSubmittingPrediction: true },
      ];

      testProps.forEach((props) => {
        const { unmount } = render(<PredictionCard {...props} />);
        const card = screen.getByTestId('prediction-card');
        expect(card).toHaveClass('prediction-card');
        unmount();
      });
    });

    it('conditionally applies disabled modifier class', () => {
      // Test enabled state
      const { rerender } = render(
        <PredictionCard 
          isWalletConnected={true} 
          isRoundActive={true} 
          isConnecting={false} 
          isSubmittingPrediction={false} 
        />
      );
      
      let card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card');
      expect(card).not.toHaveClass('prediction-card--disabled');

      // Test disabled state
      rerender(
        <PredictionCard 
          isWalletConnected={false} 
          isRoundActive={true} 
          isConnecting={false} 
          isSubmittingPrediction={false} 
        />
      );

      card = screen.getByTestId('prediction-card');
      expect(card).toHaveClass('prediction-card', 'prediction-card--disabled');
    });
  });

  describe('component integration', () => {
    it('integrates properly with PredictionControls', () => {
      const mockOnPrediction = vi.fn();
      
      render(
        <PredictionCard 
          isWalletConnected={true}
          isRoundActive={true}
          isConnecting={false}
          isSubmittingPrediction={false}
          onPrediction={mockOnPrediction}
        />
      );

      // Verify the component structure
      const card = screen.getByTestId('prediction-card');
      const controls = screen.getByTestId('prediction-controls');
      
      expect(card).toContainElement(controls);
      
      // Verify interaction works
      const submitButton = screen.getByTestId('mock-submit');
      fireEvent.click(submitButton);
      
      expect(mockOnPrediction).toHaveBeenCalledTimes(1);
    });
  });
});