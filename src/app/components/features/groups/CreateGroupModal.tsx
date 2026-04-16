import { useState, useRef } from 'react';
import svgPaths from "../../../../assets/icons/svg-1n0u1wm83b";

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (groupName: string, avatar: File | null) => void;
  canCreateGroups?: boolean; // For Launch cohort restriction
}

function CloseCircleSolid({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-80 transition-opacity" onClick={onClick}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close-Circle-Solid">
          <path clipRule="evenodd" d={svgPaths.p32a76400} fill="var(--fill-0, #A0A0A0)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

export function CreateGroupModal({ isOpen, onClose, onConfirm, canCreateGroups = true }: CreateGroupModalProps) {
  const [groupName, setGroupName] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Show upsell for Launch cohort
  if (!canCreateGroups) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(29,29,27,0.9)]">
        <div className="bg-white content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[480px] min-w-[480px] pb-[40px] pt-[40px] px-[40px] relative rounded-[16px] shrink-0 w-[480px] shadow-[0px_10px_40px_rgba(0,0,0,0.2)]">
          {/* Close button */}
          <div className="absolute right-[20px] top-[20px]">
            <CloseCircleSolid onClick={onClose} />
          </div>

          {/* Upsell content */}
          <div className="content-stretch flex flex-col gap-[24px] items-center text-center relative shrink-0 w-full">
            <div className="font-['Gilroy:Bold',sans-serif] leading-[32px] not-italic text-[#606060] text-[28px] tracking-[-1px]">
              Unlock the power of groups
            </div>
            <div className="font-['Gilroy:Medium',sans-serif] leading-[22px] not-italic text-[#808080] text-[15px] tracking-[-0.3px]">
              Use groups to organize social profiles, collaborate with others and build campaigns.
            </div>
            <button
              onClick={() => console.log('Upgrade plan clicked')}
              className="bg-[#505050] hover:bg-[#606060] transition-colors rounded-[8px] px-[28px] py-[14px] font-['Gilroy:Semibold',sans-serif] text-white text-[14px] tracking-[-0.3px] cursor-pointer mt-[8px]"
            >
              Upgrade my plan
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatar(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(29,29,27,0.9)]">
      <div className="bg-white content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[600px] min-w-[600px] pb-[32px] pt-[60px] px-[60px] relative rounded-[16px] shrink-0 w-[600px] shadow-[0px_10px_40px_rgba(0,0,0,0.2)]">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          <p className="font-['Gilroy:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#606060] text-[32px] tracking-[-1px] w-full">Create a group</p>
          
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] w-full">
                <p className="leading-[20px]">Group name</p>
              </div>
              <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full focus-within:ring-2 focus-within:ring-[#0089ff] transition-all">
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[16px] relative size-full">
                    <input 
                      type="text"
                      className="w-full font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.4px] outline-none placeholder-[#c0c0c0]"
                      placeholder="e.g. Restaurants SushiPalace"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] w-full">
                <p className="leading-[20px]">Group avatar</p>
              </div>
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="bg-[#f0f0f0] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[72px] overflow-hidden">
                  <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  {avatar ? (
                    <img src={URL.createObjectURL(avatar)} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[32px] tracking-[-1px] whitespace-nowrap uppercase">
                      <p className="leading-[32px]">{groupName.trim() ? groupName.trim().substring(0, 2) : ""}</p>
                    </div>
                  )}
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[228px]">
                  <input 
                    type="file" 
                    accept="image/png, image/jpeg" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <button 
                    onClick={handleUploadClick}
                    className="bg-[#f0f0f0] hover:bg-[#e0e0e0] transition-colors cursor-pointer content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[3px] shrink-0"
                  >
                    <div className="relative shrink-0 size-[12px]">
                      <div className="absolute inset-[3.53%_0]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.1522">
                          <path d={svgPaths.p2aa92d80} fill="var(--fill-0, #606060)" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
                      <p className="leading-[14px]">Upload image</p>
                    </div>
                  </button>
                  <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#c0c0c0] text-[12px] tracking-[-0.3px] w-[min-content]">
                    <p className="leading-[14px]">{`Your photo must be at least 200×200px & weigh maximum 1MB. (png, jpg accepted)`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
          <button 
            onClick={onClose}
            className="h-[48px] min-w-[150px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
          >
            <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
                <p className="leading-[16px]">Cancel</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e6ecf4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </button>
          
          <button 
            onClick={() => {
              if (groupName.trim()) {
                onConfirm(groupName, avatar);
              }
            }}
            disabled={!groupName.trim()}
            className={`${groupName.trim() ? 'bg-[#606060] hover:bg-[#505050] cursor-pointer' : 'bg-[#a0a0a0] cursor-not-allowed'} transition-colors content-stretch flex h-[48px] items-center justify-center min-w-[150px] overflow-clip px-[32px] py-[12px] relative rounded-[6px] shrink-0`}
          >
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.4px] whitespace-nowrap">
              <p className="leading-[16px]">Confirm</p>
            </div>
          </button>
        </div>

        <div className="absolute right-[20px] top-[20px]">
          <CloseCircleSolid onClick={onClose} />
        </div>
      </div>
    </div>
  );
}