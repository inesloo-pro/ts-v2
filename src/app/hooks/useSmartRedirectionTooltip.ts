import { useState, useEffect, useCallback } from 'react';

/**
 * Shared hook for managing smart redirection tooltip state.
 * 
 * This hook ensures Design A and Design B use the exact same tooltip logic,
 * preventing them from drifting apart. Both FunctionalSPSelector (Design A)
 * and FunctionalSPSelectorOptionB (Design B) MUST use this hook.
 * 
 * DO NOT duplicate this logic in the components directly!
 */

interface UseSmartRedirectionTooltipProps {
  pendingRedirection?: boolean;
  isLoading?: boolean;
  firstProfileRef?: React.RefObject<HTMLDivElement>;
  onRedirectionComplete?: () => void;
  /** Additional delay for animations (e.g., layout animations in Design A) */
  extraDelay?: number;
}

export function useSmartRedirectionTooltip({
  pendingRedirection,
  isLoading,
  firstProfileRef,
  onRedirectionComplete,
  extraDelay = 0
}: UseSmartRedirectionTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip when redirection completes and loading finishes
  useEffect(() => {
    if (!pendingRedirection || isLoading) return;
    
    // Base delay to ensure DOM is fully settled after loading overlay fades
    // Plus extra delay for any animations (e.g., layout animations)
    const totalDelay = 150 + extraDelay;
    
    const timer = setTimeout(() => {
      if (firstProfileRef?.current) {
        setShowTooltip(true);
      }
    }, totalDelay);
    
    return () => clearTimeout(timer);
  }, [pendingRedirection, isLoading, firstProfileRef, extraDelay]);

  const handleTooltipDismiss = useCallback(() => {
    setShowTooltip(false);
    onRedirectionComplete?.();
  }, [onRedirectionComplete]);

  return {
    showTooltip,
    handleTooltipDismiss
  };
}
