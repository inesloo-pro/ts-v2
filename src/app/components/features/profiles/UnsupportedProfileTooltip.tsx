import { useState, useEffect } from 'react';

interface UnsupportedProfileTooltipProps {
  anchorRef: React.RefObject<HTMLElement>;
  platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x';
  currentView?: 'calendar' | 'allposts';
}

export function UnsupportedProfileTooltip({ anchorRef, platform, currentView }: UnsupportedProfileTooltipProps) {
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);

  // Calculate position from anchor ref
  useEffect(() => {
    if (!anchorRef.current) return;

    const updatePosition = () => {
      if (!anchorRef.current) return;
      
      const rect = anchorRef.current.getBoundingClientRect();
      const tooltipWidth = 160;
      setPosition({
        left: rect.left + rect.width / 2 - tooltipWidth / 2,
        top: rect.bottom + 10,
      });
    };

    updatePosition();

    // Update on scroll or resize
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [anchorRef]);

  if (!position) return null;

  // Get platform name
  const platformName = platform === 'instagram' ? 'Instagram' 
    : platform === 'linkedin' ? 'LinkedIn' 
    : platform === 'youtube' ? 'YouTube' 
    : platform === 'tiktok' ? 'TikTok' 
    : 'X';

  return (
    <div
      className="fixed z-[150] pointer-events-none"
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
    >
      <div className="flex flex-col items-center animate-[fadeIn_0.15s_ease-out]">
        {/* Arrow */}
        <div className="h-[7px] mt-[-1px] relative shrink-0 w-[10px]">
          <div className="absolute inset-[0_0_20.58%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.55907">
              <path d="M 5 0 L 10 5.559 L 0 5.559 L 5 0 Z" fill="#606060" />
            </svg>
          </div>
        </div>
        {/* Tooltip Content */}
        <div className="bg-[#606060] content-stretch flex items-center max-w-[250px] mt-[-1px] min-w-[160px] p-[8px] relative rounded-[2px] shrink-0 w-[160px]">
          <div className="flex-[1_0_0] font-['Gilroy:Semibold',sans-serif] leading-[11px] min-h-px min-w-px not-italic relative text-[9px] text-left text-white whitespace-pre-wrap">
            <p className="mb-0">{platformName} Scheduling is not supported yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}