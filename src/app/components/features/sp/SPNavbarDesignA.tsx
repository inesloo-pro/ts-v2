import { useState, useRef, useEffect } from 'react';
import svgPathsMain from "../../../../imports/Iconosquare-4-1/svg-cr9mbv1gr2";
import svgPathsSocial from "../../../../assets/icons/svg-lx8i39d8oo";

interface SocialProfile {
  id: string;
  initials: string;
  network: 'instagram' | 'tiktok' | 'x' | 'youtube' | 'facebook';
  isSelected?: boolean;
}

const mockProfiles: SocialProfile[] = [
  { id: '1', initials: 'AA', network: 'instagram', isSelected: true },
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

export function SPNavbarDesignA() {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [selectedId, setSelectedId] = useState('1');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = (id: string) => {
    setSelectedId(id);

    // Scroll the selected profile into view
    const profileElement = document.getElementById(`profile-${id}`);
    if (profileElement && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const profileRect = profileElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollLeft = profileElement.offsetLeft - containerRect.width / 2 + profileRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const renderNetworkBadge = (network: string) => {
    if (network === 'instagram') {
      return (
        <div className="absolute bg-white bottom-[-3px] content-stretch flex h-[20px] items-center justify-center p-px right-[-7px] rounded-[6px]">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <div className="h-full relative shrink-0 w-[18px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 18.0002">
              <path d={svgPathsSocial.p16154a40} fill="#606060" />
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
                  <path d={svgPathsSocial.p25c5e880} fill="#606060" />
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
                  <path d={svgPathsSocial.p19ceed00} fill="#606060" />
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
                <path d={svgPathsSocial.p3581f680} fill="#606060" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="content-stretch flex items-center relative rounded-[4px] size-full">
      {/* Left dropdown chevron */}
      <div className="content-stretch flex items-center justify-center px-[6px] relative rounded-[4px] shrink-0 w-[22px]">
        <div className="bg-[#e0e0e0] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[6px] relative rounded-bl-[99px] rounded-tl-[99px] shrink-0 cursor-pointer hover:bg-[#d5d5d5] active:bg-[#cacaca] transition-colors">
          <div className="relative shrink-0 size-[10px]">
            <div className="absolute inset-[31.54%_20%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3.69231">
                <path clipRule="evenodd" d={svgPathsSocial.p1e626700} fill="#606060" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main container with scrollable profiles */}
      <div className="content-stretch flex gap-[20px] h-[60px] items-center p-[8px] relative rounded-[4px] shrink-0 flex-1 overflow-hidden">
        <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[4px]" />

        {/* Group selector BA */}
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[44px] cursor-pointer hover:border-[#606060] border border-transparent transition-all active:scale-95">
          <div className="bg-[#e0e0e0] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[2px] w-full">
            <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[2px]" />
            <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] whitespace-nowrap">
              <p className="leading-[10px]">BA</p>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-[#606060] h-px left-1/2 rounded-[1px] top-[51px] w-[42px]" />
        </div>

        {/* Vertical separator */}
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[44px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                  <line stroke="#C0C0C0" x2="44" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable profiles container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-[20px] overflow-x-auto scrollbar-hide flex-1"
          style={{ scrollBehavior: 'smooth' }}
        >
          {profiles.map((profile) => (
            <button
              key={profile.id}
              id={`profile-${profile.id}`}
              onClick={() => handleProfileClick(profile.id)}
              className={`bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[42px] cursor-pointer transition-all hover:scale-110 active:scale-95 ${
                selectedId === profile.id ? 'ring-2 ring-offset-1 ring-[#606060]' : ''
              }`}
            >
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
              <div className="relative shrink-0 size-[44px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <circle cx="22" cy="22" opacity="0" r="21.5" stroke="#606060" />
                </svg>
              </div>
              {renderNetworkBadge(profile.network)}
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[9px] text-center top-1/2 whitespace-nowrap">
                <p className="leading-[10px]">{profile.initials}</p>
              </div>
            </button>
          ))}

          {/* 10+ more profiles indicator */}
          <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center opacity-60 relative rounded-[999px] shrink-0 size-[42px] cursor-pointer hover:opacity-80 transition-opacity">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
            <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-black text-center whitespace-nowrap">
              <p className="leading-[10px]">10+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
