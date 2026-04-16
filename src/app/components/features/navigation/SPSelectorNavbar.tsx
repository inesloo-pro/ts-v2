import { useState, useRef, useEffect } from 'react';
import svgPathsDefault from "../../../../assets/icons/svg-fanuza5511";
import svgPathsU1vn from "../../../../assets/icons/svg-u1vn3e2ld9";
import { getPlatformColor, getProfileInitials } from '../../../utils/platformHelpers';

interface SocialProfile {
  id: string;
  name: string;
  handle: string;
  platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x';
  avatar?: string;
}

interface SPSelectorNavbarProps {
  currentGroup: string;
  groupName: string;
  profilesInGroup: SocialProfile[];
  selectedItem: string | null; // null, 'group', or profile id
  onSelectItem: (item: string | null) => void;
  onOpenGroupSelector: () => void;
  firstProfileRef?: React.RefObject<HTMLDivElement>;
}

function ChevronDownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d="M11.0606 6.06066L8 9.12132L4.93934 6.06066C4.65829 5.77961 4.20338 5.77961 3.92233 6.06066C3.64128 6.34171 3.64128 6.79662 3.92233 7.07767L7.49144 10.6468C7.77249 10.9278 8.22751 10.9278 8.50856 10.6468L12.0777 7.07767C12.3587 6.79662 12.3587 6.34171 12.0777 6.06066C11.7966 5.77961 11.3417 5.77961 11.0606 6.06066Z" fill="#606060" />
      </svg>
    </div>
  );
}

function InstagramIcon() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <path d={svgPathsDefault.p1f631200} fill="#606060" />
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="h-full relative shrink-0 w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <path clipRule="evenodd" d={svgPathsDefault.p1b8d9d40} fill="#606060" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
      <div className="h-[10px] relative shrink-0 w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
          <path d={svgPathsDefault.p9316600} fill="#606060" />
        </svg>
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <div className="h-full relative shrink-0 w-[10px]">
      <div className="absolute inset-[0_6.56%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68777 10">
          <path d="M4.56282 0.00833323C5.10865 0 5.6503 0.00416661 6.19196 0C6.2253 0.637492 6.45446 1.28748 6.92112 1.73748C7.38778 2.19997 8.04611 2.41247 8.68777 2.4833V4.16245C8.08777 4.14161 7.48362 4.01662 6.93779 3.75829C6.70029 3.64995 6.47946 3.51246 6.2628 3.37079C6.25863 4.58744 6.26696 5.80409 6.25446 7.01658C6.22113 7.5999 6.02947 8.17906 5.69197 8.65823C5.14614 9.45822 4.20032 9.97904 3.2295 9.99571C2.63368 10.029 2.03785 9.86654 1.52952 9.56655C0.687867 9.07072 0.0962078 8.1624 0.00870893 7.18741C0.000375704 6.97908 -0.00379091 6.77075 0.00454232 6.56658C0.0795414 5.77493 0.471203 5.0166 1.07953 4.49994C1.77119 3.89995 2.73784 3.61245 3.642 3.78329C3.65033 4.39994 3.62533 5.0166 3.62533 5.63326C3.21284 5.49993 2.72951 5.53743 2.36701 5.78743C2.10452 5.95826 1.90452 6.22076 1.80035 6.51658C1.71285 6.72908 1.73785 6.96241 1.74202 7.18741C1.84202 7.87073 2.50034 8.44573 3.20034 8.38323C3.667 8.37906 4.11282 8.10823 4.35449 7.7124C4.43365 7.57491 4.52115 7.43324 4.52532 7.27074C4.56699 6.52492 4.55032 5.78326 4.55449 5.03744C4.55865 3.35829 4.55032 1.68331 4.56282 0.00833323V0.00833323Z" fill="#606060" />
        </svg>
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <div className="h-full relative shrink-0 w-[10px]">
      <div className="absolute inset-[4.8%_0_4.81%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.03875">
          <path d="M7.87542 0H9.40875L6.05875 3.82917L10 9.03875H6.91417L4.4975 5.87875L1.73167 9.03875H0.1975L3.78083 4.94292L0 0.000416686H3.16417L5.34875 2.88875L7.87542 0ZM7.3375 8.12125H8.18708L2.7025 0.869583H1.79083L7.3375 8.12125Z" fill="#606060" />
        </svg>
      </div>
    </div>
  );
}

function SocialBadge({ platform }: { platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' }) {
  const Icon = platform === 'instagram' ? InstagramIcon : 
               platform === 'linkedin' ? LinkedInIcon : 
               platform === 'youtube' ? YouTubeIcon :
               platform === 'tiktok' ? TikTokIcon : XIcon;
  
  const radiusClass = platform === 'tiktok' ? 'rounded-[50px]' : 
                      platform === 'linkedin' || platform === 'x' ? 'rounded-[3px]' : 
                      'rounded-[6px]';
  
  return (
    <div className={`absolute bg-white bottom-[2px] content-stretch flex h-[14px] items-center justify-center p-px right-[-5px] ${radiusClass}`}>
      <div aria-hidden="true" className={`absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none ${radiusClass}`} />
      <Icon />
    </div>
  );
}

function ProfileAvatar({ 
  profile, 
  isSelected, 
  onClick,
  avatarRef 
}: { 
  profile: SocialProfile; 
  isSelected: boolean; 
  onClick: () => void;
  avatarRef?: React.RefObject<HTMLDivElement>;
}) {
  const platformColor = getPlatformColor(profile.platform);
  const initials = getProfileInitials(profile.name);
  
  return (
    <div ref={avatarRef}>
      <button
        onClick={onClick}
        className={`content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px] cursor-pointer transition-all ${
          isSelected ? 'ring-2 ring-[#0089FF]' : ''
        }`}
        style={{ backgroundColor: profile.avatar ? 'transparent' : platformColor }}
      >
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        {/* Light gray border for transparent avatars */}
        <div className="absolute inset-0 border border-[#e0e0e0] rounded-full pointer-events-none" />
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className="absolute inset-0 size-[40px] rounded-[999px] object-cover" />
        ) : (
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] whitespace-nowrap z-[1]">
            <p className="leading-[12px]">{initials}</p>
          </div>
        )}
        <SocialBadge platform={profile.platform} />
      </button>
    </div>
  );
}

function OverflowButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[40px] cursor-pointer hover:bg-[#b0b0b0] transition-colors"
    >
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px]">
        +{count}
      </div>
    </button>
  );
}

function OverflowPopover({ profiles, onSelect, onClose }: { profiles: SocialProfile[]; onSelect: (profile: SocialProfile) => void; onClose: () => void }) {
  return (
    <div className="absolute top-full right-0 mt-[8px] bg-white rounded-[8px] border border-[#e0e0e0] shadow-lg z-50 w-[240px]">
      <div className="flex flex-col gap-[8px] p-[12px] max-h-[300px] overflow-y-auto">
        {profiles.map((profile) => {
          const platformColor = getPlatformColor(profile.platform);
          const initials = getProfileInitials(profile.name);
          
          return (
            <button
              key={profile.id}
              onClick={() => {
                onSelect(profile);
                onClose();
              }}
              className="flex items-center gap-[8px] p-[8px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer transition-colors"
            >
              <div 
                className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]"
                style={{ backgroundColor: profile.avatar ? 'transparent' : platformColor }}
              >
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                {/* Light gray border for transparent avatars */}
                <div className="absolute inset-0 border border-[#e0e0e0] rounded-full pointer-events-none" />
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="absolute inset-0 size-[32px] rounded-[999px] object-cover" />
                ) : (
                  <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] whitespace-nowrap z-[1]">
                    <p className="leading-[10px]">{initials}</p>
                  </div>
                )}
                <SocialBadge platform={profile.platform} />
              </div>
              <div className="flex flex-col gap-[4px] items-start">
                <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px]">
                  {profile.name}
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[10px]">
                  {profile.handle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SPSelectorNavbar({ 
  currentGroup, 
  groupName, 
  profilesInGroup, 
  selectedItem, 
  onSelectItem,
  onOpenGroupSelector,
  firstProfileRef
}: SPSelectorNavbarProps) {
  const [showOverflowPopover, setShowOverflowPopover] = useState(false);
  const overflowRef = useRef<HTMLDivElement>(null);
  
  const maxVisibleProfiles = 6;
  const visibleProfiles = profilesInGroup.slice(0, maxVisibleProfiles);
  const overflowProfiles = profilesInGroup.slice(maxVisibleProfiles);
  const hasOverflow = overflowProfiles.length > 0;

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overflowRef.current && !overflowRef.current.contains(event.target as Node)) {
        setShowOverflowPopover(false);
      }
    };

    if (showOverflowPopover) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showOverflowPopover]);

  return (
    <div className="bg-[#f5f5f5] border-b border-[#e0e0e0] px-[24px] py-[12px]">
      <div className="flex items-center gap-[12px]">
        {/* Group/All Button with Dropdown */}
        <button
          onClick={onOpenGroupSelector}
          className={`flex items-center gap-[8px] px-[12px] py-[8px] rounded-[4px] cursor-pointer transition-all ${
            selectedItem === 'group' 
              ? 'bg-white border border-[#0089FF] ring-2 ring-[#0089FF]/20' 
              : 'bg-white border border-[#e0e0e0] hover:border-[#c0c0c0]'
          }`}
        >
          <div className="flex items-center gap-[8px]">
            {currentGroup === 'all' ? (
              <div className="bg-[#c4c4c4] flex items-center justify-center rounded-[6px] size-[32px] border border-white">
                <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px]">
                  ALL
                </div>
              </div>
            ) : (
              <div className="bg-[#c4c4c4] flex items-center justify-center rounded-[6px] size-[32px] border border-white">
                <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px]">
                  {groupName.substring(0, 2).toUpperCase()}
                </div>
              </div>
            )}
            <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px]">
              {currentGroup === 'all' ? 'All profiles' : groupName}
            </div>
          </div>
          <ChevronDownIcon />
        </button>

        {/* Vertical Divider */}
        <div className="h-[32px] w-[1px] bg-[#e0e0e0]" />

        {/* Social Profiles */}
        <div className="flex items-center gap-[8px]">
          {visibleProfiles.map((profile, index) => (
            <ProfileAvatar
              key={profile.id}
              profile={profile}
              isSelected={selectedItem === profile.id}
              onClick={() => onSelectItem(profile.id)}
              avatarRef={index === 0 ? firstProfileRef : undefined}
            />
          ))}
          
          {hasOverflow && (
            <div className="relative" ref={overflowRef}>
              <OverflowButton 
                count={overflowProfiles.length} 
                onClick={() => setShowOverflowPopover(!showOverflowPopover)}
              />
              {showOverflowPopover && (
                <OverflowPopover
                  profiles={overflowProfiles}
                  onSelect={(profile) => onSelectItem(profile.id)}
                  onClose={() => setShowOverflowPopover(false)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}