import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../../../imports/Iconosquare-4-1/svg-cr9mbv1gr2";
import socialIcons from "../../../../assets/icons/svg-7igdgbpys5";

interface SocialProfile {
  id: string;
  initials: string;
  network: 'instagram' | 'tiktok' | 'x' | 'youtube';
  avatar?: string;
}

interface SPNavbarProps {
  profiles?: SocialProfile[];
  selectedProfileId?: string;
  onProfileSelect?: (profileId: string) => void;
}

const defaultProfiles: SocialProfile[] = [
  { id: '1', initials: 'AA', network: 'instagram' },
  { id: '2', initials: 'AB', network: 'instagram' },
  { id: '3', initials: 'AC', network: 'instagram' },
  { id: '4', initials: 'BE', network: 'instagram' },
  { id: '5', initials: 'DE', network: 'x' },
  { id: '6', initials: 'GZ', network: 'youtube' },
  { id: '7', initials: 'KL', network: 'tiktok' },
  { id: '8', initials: 'LA', network: 'x' },
  { id: '9', initials: 'ME', network: 'youtube' },
  { id: '10', initials: 'NI', network: 'x' },
];

function NetworkBadge({ network }: { network: string }) {
  if (network === 'instagram') {
    return (
      <div className="absolute bg-white bottom-[-3px] content-stretch flex h-[20px] items-center justify-center p-px right-[-7px] rounded-[6px]">
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="h-full relative shrink-0 w-[18px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 18.0002">
            <path d={socialIcons.p16154a40} fill="#606060" />
          </svg>
        </div>
      </div>
    );
  }

  if (network === 'x') {
    return (
      <div className="absolute bg-white bottom-[-3px] h-[20px] right-[-7px] rounded-[3px]">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[2px] relative rounded-[inherit]">
          <div className="h-full relative shrink-0 w-[16px]">
            <div className="absolute inset-[4.8%_0_4.81%_0]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.462">
                <path d={socialIcons.p25c5e880} fill="#606060" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      </div>
    );
  }

  if (network === 'tiktok') {
    return (
      <div className="absolute bg-white bottom-[-3px] h-[20px] right-[-7px] rounded-[50px]">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[2px] relative rounded-[inherit]">
          <div className="h-full relative shrink-0 w-[16px]">
            <div className="absolute inset-[0_6.56%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9004 16">
                <path d={socialIcons.p19ceed00} fill="#606060" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
    );
  }

  if (network === 'youtube') {
    return (
      <div className="absolute bg-white bottom-[-3px] content-stretch flex h-[20px] items-center justify-center p-[2px] right-[-7px] rounded-[7px]">
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
          <div className="h-[16px] relative shrink-0 w-[22.708px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7085 16">
              <path d={socialIcons.p3581f680} fill="#606060" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function SPNavbar({ profiles = defaultProfiles, selectedProfileId, onProfileSelect }: SPNavbarProps) {
  const [activeId, setActiveId] = useState(selectedProfileId || profiles[0]?.id);

  const handleProfileClick = (profileId: string) => {
    setActiveId(profileId);
    onProfileSelect?.(profileId);
  };

  return (
    <div className="content-stretch flex items-center relative rounded-[4px] w-full h-[59px]">
      {/* Left dropdown chevron */}
      <div className="content-stretch flex items-center justify-center px-[6px] relative rounded-[4px] shrink-0 w-[22px] h-full">
        <div className="bg-[#e0e0e0] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[6px] relative rounded-bl-[99px] rounded-tl-[99px] shrink-0 cursor-pointer hover:bg-[#d0d0d0] transition-colors">
          <div className="relative shrink-0 size-[10px]">
            <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#606060" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable profiles container */}
      <div className="flex-1 h-full relative rounded-[4px] overflow-hidden">
        <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[4px]" />

        <div className="bg-[#f6f6f6] absolute inset-0 flex items-center">
          {/* ALL group selector */}
          <div className="content-stretch flex gap-[16px] items-center pl-[16px] shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[44px] cursor-pointer hover:border-[#606060] border border-transparent transition-colors">
                <div className="bg-[#e0e0e0] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[2px] w-full">
                  <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] whitespace-nowrap">
                    <p className="leading-[10px]">ALL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0">
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[59px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 1">
                      <line stroke="#C0C0C0" x2="59" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable profile list */}
          <div className="flex items-center gap-0 overflow-x-auto px-[12px] py-[10px] scrollbar-hide flex-1">
            <div className="flex items-center gap-0 mr-[-1px]">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="content-stretch flex h-[56px] items-center justify-center mr-[-1px] shrink-0 sticky top-0 w-[68px]"
                >
                  <button
                    onClick={() => handleProfileClick(profile.id)}
                    className={`bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[42px] cursor-pointer transition-all hover:scale-105 ${
                      activeId === profile.id ? 'ring-2 ring-[#606060]' : ''
                    }`}
                  >
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                    <div className="relative shrink-0 size-[44px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="21.5" stroke={activeId === profile.id ? '#606060' : 'transparent'} />
                      </svg>
                    </div>
                    <NetworkBadge network={profile.network} />
                    {activeId === profile.id && (
                      <div className="-translate-x-1/2 absolute bg-[#606060] h-px left-1/2 rounded-[1px] top-[50px] w-[42px]" />
                    )}
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[9px] text-center top-1/2 whitespace-nowrap">
                      <p className="leading-[10px]">{profile.initials}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Search button */}
          <div className="absolute right-[12px] top-1/2 -translate-y-1/2">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] relative rounded-[4px] shrink-0 size-[24px] cursor-pointer hover:bg-[#e0e0e0] transition-colors">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[10px]">
                <div className="absolute inset-[0_0_0.01%_0]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.99941">
                    <path clipRule="evenodd" d={socialIcons.p48025d0} fill="#606060" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
