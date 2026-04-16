import { forwardRef } from 'react';
import type { SocialProfile } from '../../../data/profiles';
import { getPlatformColor, getProfileInitials } from '../../../utils/platformHelpers';
import { SocialBadge, BadTokenBadge } from './ProfileBadges';

interface SelectorProfileAvatarProps {
  profile: SocialProfile;
  isSelected: boolean;
  isUnsupported: boolean;
  onSelect: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const SelectorProfileAvatar = forwardRef<HTMLButtonElement, SelectorProfileAvatarProps>(({
  profile,
  isSelected,
  isUnsupported,
  onSelect,
  onMouseEnter,
  onMouseLeave
}, ref) => {
  const platformColor = getPlatformColor(profile.platform);
  const initials = getProfileInitials(profile.name);

  return (
    <button
      ref={ref}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[42px] cursor-pointer transition-all ${
        isUnsupported ? 'opacity-60' : ''
      }`}
      style={{ backgroundColor: profile.avatar ? 'transparent' : platformColor }}
      data-profile-id={profile.id}
    >
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      {/* Light gray border for transparent avatars */}
      <div className="absolute inset-0 border border-[#e0e0e0] rounded-full pointer-events-none" />
      {profile.avatar ? (
        <img src={profile.avatar} alt={profile.name} className="absolute inset-0 size-[42px] rounded-[999px] object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic text-[#606060] text-[9px] whitespace-nowrap">
            <p className="leading-[10px]">{initials}</p>
          </div>
        </div>
      )}
      <div className="relative shrink-0 size-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="21.5" stroke={isSelected ? '#606060' : 'transparent'} />
        </svg>
      </div>
      <SocialBadge platform={profile.platform} />
      {profile.hasBadToken && <BadTokenBadge />}
      {isSelected && (
        <div className="-translate-x-1/2 absolute bg-[#606060] h-px left-1/2 rounded-[1px] -bottom-2 w-[42px]" />
      )}
    </button>
  );
});