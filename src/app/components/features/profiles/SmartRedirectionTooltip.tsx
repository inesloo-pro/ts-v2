import { useState, useEffect } from 'react';

interface SmartRedirectionTooltipProps {
  anchorRef: React.RefObject<HTMLDivElement>;
  onDismiss: () => void;
}

export function SmartRedirectionTooltip({ anchorRef, onDismiss }: SmartRedirectionTooltipProps) {
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);

  // Calculate position from anchor ref on mount
  useEffect(() => {
    if (!anchorRef.current) return;

    const rect = anchorRef.current.getBoundingClientRect();
    const tooltipWidth = 130;
    setPosition({
      left: rect.left + rect.width / 2 - tooltipWidth / 2,
      top: rect.bottom + 10,
    });

    // Auto-dismiss after 3 seconds
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [anchorRef, onDismiss]);

  if (!position) return null;

  return (
    <div
      className="fixed z-[150] animate-[fadeIn_0.2s_ease-out]"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
    >
      <div className="flex flex-col items-center">
        <div className="h-[7px] mt-[-1px] relative shrink-0 w-[10px]">
          <div className="absolute inset-[0_0_20.58%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.55907">
              <path d="M 5 0 L 10 5.559 L 0 5.559 L 5 0 Z" fill="#606060" />
            </svg>
          </div>
        </div>
        <div className="bg-[#606060] content-stretch flex items-center max-w-[250px] mt-[-1px] min-w-[130px] p-[6px] relative rounded-[2px] shrink-0 w-[130px]">
          <div className="flex-[1_0_0] font-['Gilroy:Semibold',sans-serif] leading-[10px] min-h-px min-w-px not-italic relative text-[9px] text-center text-white whitespace-pre-wrap">
            <p className="mb-0">Switched to this profile,</p>
            <p>Group view is not supported</p>
          </div>
        </div>
      </div>
    </div>
  );
}