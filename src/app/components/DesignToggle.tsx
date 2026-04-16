import { Settings } from 'lucide-react';
import { useState } from 'react';
import { TestSettingsModal } from './TestSettingsModal';

interface DesignToggleProps {
  userCohort: 'launch' | 'excel' | 'trial';
  onToggleUserCohort: (cohort: 'launch' | 'excel' | 'trial') => void;
}

export function DesignToggle({
  userCohort,
  onToggleUserCohort
}: DesignToggleProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-[8px] left-1/2 -translate-x-1/2 z-[100] flex items-center gap-[6px] bg-[#1a1a1a] rounded-[8px] shadow-lg border border-[#333333] p-[4px]">
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
      />
    </>
  );
}
