import { X } from 'lucide-react';
import { useEffect } from 'react';

interface TestSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCohort: 'launch' | 'excel' | 'trial';
  onToggleUserCohort: (cohort: 'launch' | 'excel' | 'trial') => void;
}

export function TestSettingsModal({
  isOpen,
  onClose,
  userCohort,
  onToggleUserCohort
}: TestSettingsModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[80px]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[12px] shadow-2xl w-[600px] max-h-[80vh] overflow-hidden border border-[#e0e0e0]">
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#e0e0e0]">
          <div>
            <h2 className="font-['Gilroy:Bold',sans-serif] text-[20px] text-[#1a1a1a] tracking-[-0.4px]">
              Test Settings
            </h2>
            <p className="font-['Gilroy:Medium',sans-serif] text-[13px] text-[#888888] mt-[4px] tracking-[-0.2px]">
              Development and testing configuration
            </p>
          </div>
          <button
            onClick={onClose}
            className="size-[32px] flex items-center justify-center hover:bg-[#f5f5f5] rounded-[6px] transition-colors"
          >
            <X size={18} className="text-[#606060]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-[24px] overflow-y-auto max-h-[calc(80vh-140px)]">
          {/* User Cohort Section */}
          <div className="mb-[24px]">
            <div className="flex items-center justify-between mb-[12px]">
              <div>
                <h3 className="font-['Gilroy:Semibold',sans-serif] text-[14px] text-[#1a1a1a] tracking-[-0.3px]">
                  User Cohort
                </h3>
                <p className="font-['Gilroy:Regular',sans-serif] text-[12px] text-[#888888] mt-[2px] tracking-[-0.2px]">
                  Simulate different user plan experiences
                </p>
              </div>
            </div>

            <div className="flex gap-[8px]">
              <button
                onClick={() => onToggleUserCohort('launch')}
                className={`flex-1 px-[16px] py-[12px] rounded-[8px] font-['Gilroy:Semibold',sans-serif] text-[13px] tracking-[-0.3px] transition-all border ${
                  userCohort === 'launch'
                    ? 'bg-[#0089FF] text-white border-[#0089FF] shadow-sm'
                    : 'bg-white text-[#606060] border-[#e0e0e0] hover:border-[#c0c0c0]'
                }`}
              >
                <div className="text-left">
                  <div className="font-['Gilroy:Bold',sans-serif] text-[14px]">Launch</div>
                  <div className={`text-[11px] mt-[2px] ${userCohort === 'launch' ? 'text-white/80' : 'text-[#888888]'}`}>
                    5 SPs, No groups
                  </div>
                </div>
              </button>

              <button
                onClick={() => onToggleUserCohort('excel')}
                className={`flex-1 px-[16px] py-[12px] rounded-[8px] font-['Gilroy:Semibold',sans-serif] text-[13px] tracking-[-0.3px] transition-all border ${
                  userCohort === 'excel'
                    ? 'bg-[#0089FF] text-white border-[#0089FF] shadow-sm'
                    : 'bg-white text-[#606060] border-[#e0e0e0] hover:border-[#c0c0c0]'
                }`}
              >
                <div className="text-left">
                  <div className="font-['Gilroy:Bold',sans-serif] text-[14px]">Excel</div>
                  <div className={`text-[11px] mt-[2px] ${userCohort === 'excel' ? 'text-white/80' : 'text-[#888888]'}`}>
                    220 SPs, 110 groups
                  </div>
                </div>
              </button>

              <button
                onClick={() => onToggleUserCohort('trial')}
                className={`flex-1 px-[16px] py-[12px] rounded-[8px] font-['Gilroy:Semibold',sans-serif] text-[13px] tracking-[-0.3px] transition-all border ${
                  userCohort === 'trial'
                    ? 'bg-[#0089FF] text-white border-[#0089FF] shadow-sm'
                    : 'bg-white text-[#606060] border-[#e0e0e0] hover:border-[#c0c0c0]'
                }`}
              >
                <div className="text-left">
                  <div className="font-['Gilroy:Bold',sans-serif] text-[14px]">Trial</div>
                  <div className={`text-[11px] mt-[2px] ${userCohort === 'trial' ? 'text-white/80' : 'text-[#888888]'}`}>
                    4 SPs, Can create groups
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#f5f7fa] border border-[#d1d9e0] rounded-[8px] p-[16px]">
            <div className="flex gap-[12px]">
              <div className="shrink-0 mt-[2px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#0089FF" strokeWidth="1.5"/>
                  <path d="M10 6V10M10 13V14" stroke="#0089FF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-['Gilroy:Semibold',sans-serif] text-[13px] text-[#1a1a1a] tracking-[-0.3px] mb-[6px]">
                  Development Settings
                </h4>
                <p className="font-['Gilroy:Regular',sans-serif] text-[12px] text-[#606060] leading-[18px] tracking-[-0.2px]">
                  This modal contains testing and development configuration options.
                  The current implementation uses:
                </p>
                <ul className="mt-[8px] space-y-[4px] font-['Gilroy:Medium',sans-serif] text-[12px] text-[#606060] tracking-[-0.2px]">
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[#0089FF] shrink-0">•</span>
                    <span><strong>Design A</strong> (SP Selector unique)</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[#0089FF] shrink-0">•</span>
                    <span><strong>Stage 02</strong> (default behavior with "All" group)</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[#0089FF] shrink-0">•</span>
                    <span><strong>Last Used sorting</strong> (navbar always sorted by last used)</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[#0089FF] shrink-0">•</span>
                    <span><strong>Pins enabled</strong> (pin mode active, favorites disabled)</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[#0089FF] shrink-0">•</span>
                    <span><strong>Smart Redirection</strong> (always enabled)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] px-[24px] py-[16px] border-t border-[#e0e0e0] bg-[#fafafa]">
          <button
            onClick={onClose}
            className="px-[20px] py-[10px] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[13px] tracking-[-0.3px] bg-[#0089FF] text-white hover:bg-[#0077dd] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
