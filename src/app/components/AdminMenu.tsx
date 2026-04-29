import { Settings, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AdminMenuProps {
  smartRedirectionEnabled: boolean;
  onToggleSmartRedirection: (enabled: boolean) => void;
  sortProfilesByAvailability: boolean;
  onToggleSortProfilesByAvailability: (enabled: boolean) => void;
  navbarSortMode: 'availability' | 'lastUsed';
  onToggleNavbarSortMode: (mode: 'availability' | 'lastUsed') => void;
  spSelectorOption: 'A' | 'B';
  onToggleSPSelectorOption: (option: 'A' | 'B') => void;
}

export function AdminMenu({ 
  smartRedirectionEnabled, 
  onToggleSmartRedirection,
  sortProfilesByAvailability,
  onToggleSortProfilesByAvailability,
  navbarSortMode,
  onToggleNavbarSortMode,
  spSelectorOption,
  onToggleSPSelectorOption
}: AdminMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<'features' | 'sorting' | null>('features');
  const [tempSelectedOption, setTempSelectedOption] = useState<'A' | 'B'>(spSelectorOption);
  
  // Temporary state for unsaved changes
  const [tempSmartRedirection, setTempSmartRedirection] = useState(smartRedirectionEnabled);
  const [tempSortByAvailability, setTempSortByAvailability] = useState(sortProfilesByAvailability);
  const [tempNavbarSortMode, setTempNavbarSortMode] = useState<'availability' | 'lastUsed'>(navbarSortMode);

  const handleOpen = () => {
    setIsOpen(true);
    // Reset temp values to current values
    setTempSelectedOption(spSelectorOption);
    setTempSmartRedirection(smartRedirectionEnabled);
    setTempSortByAvailability(sortProfilesByAvailability);
    setTempNavbarSortMode(navbarSortMode);
  };

  const handleSave = () => {
    // Save all changes
    onToggleSPSelectorOption(tempSelectedOption);
    onToggleSmartRedirection(tempSmartRedirection);
    onToggleSortProfilesByAvailability(tempSortByAvailability);
    onToggleNavbarSortMode(tempNavbarSortMode);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    // Revert temp values
    setTempSelectedOption(spSelectorOption);
    setTempSmartRedirection(smartRedirectionEnabled);
    setTempSortByAvailability(sortProfilesByAvailability);
    setTempNavbarSortMode(navbarSortMode);
  };

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        enabled ? 'bg-[#606060]' : 'bg-[#e0e0e0]'
      }`}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-[20px]' : 'translate-x-0'
        }`}
      />
    </button>
  );

  return (
    <>
      {/* Admin Button */}
      <button
        onClick={handleOpen}
        className="fixed top-[16px] right-[16px] z-[100] size-[40px] flex items-center justify-center bg-[#606060] hover:bg-[#505050] rounded-[8px] shadow-lg cursor-pointer transition-colors"
        title="Admin Settings"
      >
        <Settings size={20} className="text-white" />
      </button>

      {/* Admin Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 z-[200]"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-[16px] right-[16px] w-[400px] bg-white rounded-[12px] shadow-2xl z-[201] border border-[#e0e0e0] max-h-[calc(100vh-32px)] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-[24px] py-[16px] border-b border-[#e0e0e0] sticky top-0 bg-white z-10">
              <div className="flex items-center gap-[12px]">
                <Settings size={20} className="text-[#606060]" />
                <h2 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[18px] tracking-[-0.3px]">
                  Admin Settings
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="size-[32px] flex items-center justify-center hover:bg-[#f5f5f5] rounded-[6px] cursor-pointer transition-colors"
              >
                <X size={18} className="text-[#606060]" />
              </button>
            </div>

            {/* Content */}
            <div className="px-[24px] py-[20px]">
              {/* Segmented Control */}
              <div className="mb-[24px]">
                <div className="flex items-center gap-[8px] p-[4px] bg-[#f0f0f0] rounded-[8px]">
                  <button
                    onClick={() => setTempSelectedOption('A')}
                    className={`flex-1 py-[8px] px-[16px] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[14px] tracking-[-0.3px] cursor-pointer transition-all ${
                      tempSelectedOption === 'A' 
                        ? 'bg-white text-[#606060] shadow-sm' 
                        : 'bg-transparent text-[#a0a0a0] hover:text-[#606060]'
                    }`}
                  >
                    Option A
                  </button>
                  <button
                    onClick={() => setTempSelectedOption('B')}
                    className={`flex-1 py-[8px] px-[16px] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[14px] tracking-[-0.3px] cursor-pointer transition-all ${
                      tempSelectedOption === 'B' 
                        ? 'bg-white text-[#606060] shadow-sm' 
                        : 'bg-transparent text-[#a0a0a0] hover:text-[#606060]'
                    }`}
                  >
                    Option B
                  </button>
                </div>
              </div>

              {/* Feature Flags Section */}
              <div className="mb-[16px]">
                <button
                  onClick={() => setOpenSection(openSection === 'features' ? null : 'features')}
                  className="w-full flex items-center justify-between py-[12px] cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <h3 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px]">
                    Feature Flags
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#606060] transition-transform duration-200 ${
                      openSection === 'features' ? '' : '-rotate-90'
                    }`}
                  />
                </button>
                {openSection === 'features' && (
                  <div className="space-y-[16px] pt-[12px]">
                    {/* Smart Redirection Toggle */}
                    <div className="flex items-start justify-between gap-[16px]">
                      <div className="flex-1">
                        <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px] mb-[4px]">
                          Smart Group Redirection
                        </div>
                        <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[12px] leading-[16px] tracking-[-0.3px]">
                          Automatically switch to the first available profile when navigating to a feature that doesn't support group view
                        </div>
                      </div>
                      <ToggleSwitch 
                        enabled={tempSmartRedirection}
                        onChange={() => setTempSmartRedirection(!tempSmartRedirection)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Sorting Options Section */}
              <div className="mb-[16px]">
                <button
                  onClick={() => setOpenSection(openSection === 'sorting' ? null : 'sorting')}
                  className="w-full flex items-center justify-between py-[12px] cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <h3 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px]">
                    Sorting Options
                  </h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#606060] transition-transform duration-200 ${
                      openSection === 'sorting' ? '' : '-rotate-90'
                    }`}
                  />
                </button>
                {openSection === 'sorting' && (
                  <div className="space-y-[16px] pt-[12px]">
                    {/* Sort Profiles by Availability */}
                    <div className="flex items-start justify-between gap-[16px]">
                      <div className="flex-1">
                        <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px] mb-[4px]">
                          Sort by Availability & A-Z {tempSelectedOption === 'B' ? '' : 'in Navbar'}
                        </div>
                        <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[12px] leading-[16px] tracking-[-0.3px]">
                          {tempSelectedOption === 'B' 
                            ? 'Sort profiles by supported platforms first, then alphabetically. A-Z sorting is always active as the base.'
                            : 'When using "Availability" mode, sort profiles by supported platforms first, then alphabetically. When disabled, profiles are sorted alphabetically only.'
                          }
                        </div>
                      </div>
                      <ToggleSwitch 
                        enabled={tempSortByAvailability}
                        onChange={() => setTempSortByAvailability(!tempSortByAvailability)}
                      />
                    </div>

                    {/* Navbar Sort Mode - Only show for Scenario A */}
                    {tempSelectedOption === 'A' && (
                      <div className="flex items-start justify-between gap-[16px]">
                        <div className="flex-1">
                          <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px] mb-[4px]">
                            Navbar Sort Mode
                          </div>
                          <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[12px] leading-[16px] tracking-[-0.3px]">
                            "Availability": Uses A-Z sorting (optionally prioritizing supported platforms). "Last Used": Moves clicked profiles to the front with smooth animations.
                          </div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <button
                            onClick={() => setTempNavbarSortMode('availability')}
                            className={`px-[16px] py-[8px] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px] cursor-pointer transition-colors ${
                              tempNavbarSortMode === 'availability' ? 'bg-[#606060] text-white' : 'bg-[#e0e0e0] text-[#606060]'
                            }`}
                          >
                            Availability
                          </button>
                          <button
                            onClick={() => setTempNavbarSortMode('lastUsed')}
                            className={`px-[16px] py-[8px] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px] cursor-pointer transition-colors ${
                              tempNavbarSortMode === 'lastUsed' ? 'bg-[#606060] text-white' : 'bg-[#e0e0e0] text-[#606060]'
                            }`}
                          >
                            Last Used
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="bg-[#f5f5f5] rounded-[8px] p-[16px] mt-[24px]">
                <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px] mb-[4px]">
                  ℹ️ Admin Mode
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[11px] leading-[14px] tracking-[-0.3px]">
                  These settings control experimental features and behaviors. Changes take effect immediately.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-[24px] py-[16px] border-t border-[#e0e0e0] bg-[#fafafa] rounded-b-[12px] sticky bottom-0">
              <div className="flex items-center justify-between">
                <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[11px] tracking-[-0.3px]">
                  Version 1.0.0
                </div>
                <div className="flex gap-[8px]">
                  <button
                    onClick={handleCancel}
                    className="px-[16px] py-[8px] bg-[#e0e0e0] hover:bg-[#d0d0d0] text-[#606060] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px] cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-[16px] py-[8px] bg-[#606060] hover:bg-[#505050] text-white rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px] cursor-pointer transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}