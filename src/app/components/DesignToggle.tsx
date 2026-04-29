import { Settings, GripHorizontal } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { TestSettingsModal } from './TestSettingsModal';

interface DesignToggleProps {
  userCohort: 'launch' | 'excel' | 'trial';
  onToggleUserCohort: (cohort: 'launch' | 'excel' | 'trial') => void;
  navMode: 'topbar' | 'sidebar';
  onNavModeChange: (mode: 'topbar' | 'sidebar') => void;
}

export function DesignToggle({
  userCohort,
  onToggleUserCohort,
  navMode,
  onNavModeChange,
}: DesignToggleProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const toolbarRef = useRef<HTMLDivElement>(null);

  // Initialize position at the bottom left
  useEffect(() => {
    if (toolbarRef.current) {
      const rect = toolbarRef.current.getBoundingClientRect();
      setPosition({
        x: 16,
        y: window.innerHeight - rect.height - 16,
      });
    }
  }, []);

  const handleGripMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    const rect = toolbarRef.current!.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    e.preventDefault();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !toolbarRef.current) return;
      const rect = toolbarRef.current.getBoundingClientRect();
      const newX = Math.max(0, Math.min(window.innerWidth - rect.width, e.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - rect.height, e.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={toolbarRef}
        className="fixed z-[100] flex items-center gap-[4px] bg-[#1a1a1a] rounded-[8px] shadow-lg border border-[#333333] p-[4px] select-none"
        style={{
          top: position ? position.y : 8,
          left: position ? position.x : '50%',
          transform: position ? 'none' : 'translateX(-50%)',
        }}
      >
        {/* Drag Handle */}
        <div
          onMouseDown={handleGripMouseDown}
          className="flex items-center justify-center px-[2px] cursor-grab active:cursor-grabbing text-[#555555] hover:text-[#888888] transition-colors"
          title="Drag to move"
        >
          <GripHorizontal size={12} />
        </div>

        {/* Segmented Control - Cohort Plans */}
        <div className="flex items-center gap-[3px] bg-[#2a2a2a] rounded-[6px] p-[3px]">
          <button
            onClick={() => onToggleUserCohort('launch')}
            className={`px-[12px] py-[4px] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[11px] tracking-[-0.3px] cursor-pointer transition-all ${
              userCohort === 'launch'
                ? 'bg-[#3a3a3a] text-[#ffffff] shadow-sm'
                : 'bg-transparent text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            Launch
          </button>
          <button
            onClick={() => onToggleUserCohort('excel')}
            className={`px-[12px] py-[4px] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[11px] tracking-[-0.3px] cursor-pointer transition-all ${
              userCohort === 'excel'
                ? 'bg-[#3a3a3a] text-[#ffffff] shadow-sm'
                : 'bg-transparent text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            Excel
          </button>
          <button
            onClick={() => onToggleUserCohort('trial')}
            className={`px-[12px] py-[4px] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[11px] tracking-[-0.3px] cursor-pointer transition-all ${
              userCohort === 'trial'
                ? 'bg-[#3a3a3a] text-[#ffffff] shadow-sm'
                : 'bg-transparent text-[#888888] hover:text-[#cccccc]'
            }`}
          >
            Trial
          </button>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="size-[24px] flex items-center justify-center hover:bg-[#2a2a2a] rounded-[4px] cursor-pointer transition-colors"
          title="Test Settings"
        >
          <Settings size={14} className="text-[#cccccc]" />
        </button>
      </div>

      {/* Test Settings Modal */}
      <TestSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        userCohort={userCohort}
        onToggleUserCohort={onToggleUserCohort}
        navMode={navMode}
        onNavModeChange={onNavModeChange}
      />
    </>
  );
}
