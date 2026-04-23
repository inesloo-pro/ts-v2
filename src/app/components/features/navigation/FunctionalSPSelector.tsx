import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../../../assets/icons/svg-lx8i39d8oo";
import svgPathsUnsaved from "../../../../assets/icons/svg-8i2va09s2v";
import svgPathsSearch from "../../../../assets/icons/svg-mp92e0ek8o";
import type { SocialProfile } from '../../../data/profiles';
import { getPlatformColor, getProfileInitials } from '../../../utils/platformHelpers';
import { SmartRedirectionTooltip } from '../profiles/SmartRedirectionTooltip';
import { UnsupportedProfileTooltip } from '../profiles/UnsupportedProfileTooltip';
import { useSmartRedirectionTooltip } from '../../../hooks/useSmartRedirectionTooltip';
import { SocialBadge, BadTokenBadge } from '../profiles/ProfileBadges';
import { SelectorProfileAvatar } from '../profiles/SelectorProfileAvatar';

interface FunctionalSPSelectorProps {
  currentGroup: string;
  groupBadge: string;
  groupAvatar?: string;
  profilesInGroup: SocialProfile[];
  selectedItem: string | null;
  onSelectItem: (item: string | null) => void;
  onOpenGroupSelector: () => void;
  isUnsavedSelection?: boolean;
  onSaveSelection?: () => void;
  currentView?: 'calendar' | 'allposts';
  firstProfileRef?: React.RefObject<HTMLDivElement>;
  pendingRedirection?: boolean;
  isLoading?: boolean;
  onRedirectionComplete?: () => void;
  limitTo50SPsPerGroup?: boolean;
  groupSelectionStage?: 'stage01' | 'stage02' | 'stage03';
  hasGroups?: boolean;
}

function OverflowPopover({ profiles, onSelect, onClose, currentView }: { profiles: SocialProfile[]; onSelect: (profile: SocialProfile) => void; onClose: () => void; currentView?: 'calendar' | 'allposts' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredUnsupportedProfile, setHoveredUnsupportedProfile] = useState<string | null>(null);
  const profileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when popover opens
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(profile => {
    const query = searchQuery.toLowerCase();
    return (
      profile.name.toLowerCase().includes(query) ||
      profile.handle.toLowerCase().includes(query)
    );
  });

  return (
    <div className="absolute top-full right-0 mt-[8px] bg-white rounded-[8px] border border-[#e0e0e0] shadow-lg z-50 w-[280px]">
      {/* Search Input */}
      <div className="p-[12px] border-b border-[#f0f0f0]">
        <div className="bg-[#f0f0f0] rounded-[4px] px-[8px] py-[6px] flex items-center gap-[8px]">
          <div className="relative shrink-0 size-[14px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPathsSearch.p2ecd0600} fill="#a0a0a0" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="bg-transparent border-none outline-none font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px] placeholder:text-[#a0a0a0] flex-1"
          />
        </div>
      </div>

      {/* Profile List */}
      <div className="max-h-[320px] overflow-y-auto">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => {
            const isUnsupported = currentView === 'calendar' && profile.platform === 'youtube';
            const platformColor = getPlatformColor(profile.platform);
            const initials = getProfileInitials(profile.name);
            
            return (
              <button
                key={profile.id}
                ref={(el) => profileRefs.current.set(profile.id, el!)}
                onClick={() => {
                  onSelect(profile);
                  onClose();
                }}
                onMouseEnter={() => setHoveredUnsupportedProfile(isUnsupported ? profile.id : null)}
                onMouseLeave={() => setHoveredUnsupportedProfile(null)}
                className={`w-full flex items-center gap-[8px] px-[12px] py-[10px] hover:bg-[#f8f8f8] transition-colors cursor-pointer border-none bg-transparent text-left ${
                  isUnsupported ? 'opacity-60' : ''
                }`}
              >
                {/* Avatar with Badge */}
                <div className="relative shrink-0">
                  <div 
                    className="size-[32px] rounded-full flex items-center justify-center border border-white"
                    style={{ backgroundColor: profile.avatar ? 'transparent' : platformColor }}
                  >
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                    {/* Light gray border for transparent avatars */}
                    <div className="absolute inset-0 border border-[#e0e0e0] rounded-full pointer-events-none" />
                    {profile.avatar ? (
                      <img src={profile.avatar} alt={profile.name} className="absolute inset-0 size-[32px] rounded-[999px] object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic text-[#606060] text-[8px] whitespace-nowrap tracking-[-0.3px]">
                          <p className="leading-[12px]">{initials}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <SocialBadge platform={profile.platform} />
                  {profile.hasBadToken && <BadTokenBadge />}
                </div>

                {/* Profile Info */}
                <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px] truncate">
                    {profile.name}
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[10px] tracking-[-0.3px] truncate">
                    {isUnsupported ? 'Not supported in this view' : `@${profile.handle}`}
                  </div>
                </div>
              </button>
            );
          })
        ) : (
          <div className="px-[12px] py-[20px] text-center">
            <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[12px] tracking-[-0.3px]">
              No profiles found
            </div>
          </div>
        )}
      </div>
      {/* Unsupported Profile Tooltip */}
      {hoveredUnsupportedProfile && (() => {
        const profile = filteredProfiles.find(p => p.id === hoveredUnsupportedProfile);
        const profileRef = { current: profileRefs.current.get(hoveredUnsupportedProfile) || null };
        return profile ? (
          <UnsupportedProfileTooltip 
            anchorRef={profileRef as React.RefObject<HTMLElement>}
            profileName={profile.name}
            currentView={currentView}
          />
        ) : null;
      })()}
    </div>
  );
}

export function FunctionalSPSelector({
  currentGroup,
  groupBadge,
  groupAvatar,
  profilesInGroup,
  selectedItem,
  onSelectItem,
  onOpenGroupSelector,
  isUnsavedSelection,
  onSaveSelection,
  currentView,
  firstProfileRef,
  pendingRedirection,
  isLoading,
  onRedirectionComplete,
  limitTo50SPsPerGroup,
  groupSelectionStage,
  hasGroups = true
}: FunctionalSPSelectorProps) {
  const [showOverflowPopover, setShowOverflowPopover] = useState(false);
  const [maxVisibleProfiles, setMaxVisibleProfiles] = useState(5);
  const [hoveredUnsupportedProfile, setHoveredUnsupportedProfile] = useState<string | null>(null);
  const profileRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const overflowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use shared tooltip hook with extra delay for layout animations
  const { showTooltip, handleTooltipDismiss } = useSmartRedirectionTooltip({
    pendingRedirection,
    isLoading,
    firstProfileRef,
    onRedirectionComplete,
    extraDelay: 500 // Extra delay for layout animations in Design A
  });
  
  const visibleProfiles = profilesInGroup.slice(0, maxVisibleProfiles);
  const overflowProfiles = profilesInGroup.slice(maxVisibleProfiles);
  const hasOverflow = overflowProfiles.length > 0;
  const isGroupSelected = selectedItem === 'group';

  // Calculate how many profiles can fit based on available width
  useEffect(() => {
    if (!containerRef.current) return;

    const calculateVisibleProfiles = () => {
      if (!containerRef.current) return;

      const parentWidth = containerRef.current.parentElement?.parentElement?.offsetWidth || 0;
      
      // Width breakdown:
      // - Arrow button: 22px (outside container)
      // - Group wrapper padding: 12px * 2 = 24px
      // - Group item: 44px
      // - Divider: 0px
      // - Gap before profiles: 16px
      // - Each profile: 42px
      // - Gap between profiles: 16px each
      // - Overflow button (if needed): 42px + 16px gap = 58px
      // - Container right padding: 8px
      
      const arrowButton = 22;
      const groupWrapperPadding = 24;
      const groupItemWidth = 44;
      const gapBeforeProfiles = 16;
      const profileWidth = 42;
      const gapBetweenProfiles = 16;
      const overflowButtonWidth = 58; // 42px button + 16px gap
      const containerRightPadding = 8;
      
      const fixedWidth = arrowButton + groupWrapperPadding + groupItemWidth + gapBeforeProfiles + containerRightPadding;
      const availableWidth = parentWidth - fixedWidth;
      
      // Try to fit profiles without overflow button first
      let maxProfiles = Math.floor((availableWidth + gapBetweenProfiles) / (profileWidth + gapBetweenProfiles));
      
      // If we can't fit all profiles, reserve space for overflow button
      if (maxProfiles < profilesInGroup.length) {
        const availableForProfiles = availableWidth - overflowButtonWidth;
        maxProfiles = Math.floor((availableForProfiles + gapBetweenProfiles) / (profileWidth + gapBetweenProfiles));
      }
      
      // Ensure at least 1 profile is visible
      maxProfiles = Math.max(1, maxProfiles);
      
      // Don't show more profiles than we have
      maxProfiles = Math.min(maxProfiles, profilesInGroup.length);
      
      setMaxVisibleProfiles(maxProfiles);
    };

    // Calculate on mount and after a brief delay to ensure layout is settled
    setTimeout(calculateVisibleProfiles, 0);

    // Recalculate on window resize
    const resizeObserver = new ResizeObserver(calculateVisibleProfiles);
    const availableContainer = containerRef.current.parentElement?.parentElement;
    if (availableContainer) {
      resizeObserver.observe(availableContainer);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [profilesInGroup.length]);

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
    <div className="relative rounded-[12px] inline-flex h-full max-w-full">
      <div ref={containerRef} className="content-stretch flex gap-[16px] items-center px-[16px] relative rounded-[inherit] h-full">
        {/* Dropdown arrow button */}
        <button
          onClick={onOpenGroupSelector}
          className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[6px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3.69231">
                <path clipRule="evenodd" d={svgPaths.p1e626700} fill="#1D1D1B" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </button>

        {/* Group item */}
        <div className="content-stretch flex items-center justify-center py-[12px] relative shrink-0">
          <button
            onClick={() => {
              if (groupSelectionStage === 'stage02' && isUnsavedSelection) {
                onSaveSelection?.();
              } else {
                onSelectItem('group');
              }
            }}
            className={`cursor-pointer transition-opacity ${currentView === 'allposts' ? 'opacity-60' : ''}`}
          >
            <div className={`${isUnsavedSelection ? 'bg-[#f0f0f0]' : 'bg-[#ebf2f4]'} relative rounded-[6px] shrink-0 size-[40px]`}>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                {!isUnsavedSelection && groupAvatar ? (
                  <img src={groupAvatar} alt="Group" className="w-full h-full object-cover" />
                ) : (
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#76869a] text-[16px] text-center top-1/2 tracking-[-0.08px]">
                    <p className="leading-[24px]">{isUnsavedSelection ? 'US' : groupBadge}</p>
                  </div>
                )}
              </div>
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] pointer-events-none rounded-[7px]" />
              {isUnsavedSelection && !(limitTo50SPsPerGroup && profilesInGroup.length > 50) && (
                <div
                  className="absolute bg-[#606060] content-stretch flex items-center justify-center right-[-4px] p-px rounded-[999px] size-[16px] bottom-[-4px] cursor-pointer hover:bg-[#505050] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSaveSelection?.();
                  }}
                >
                  <div className="relative shrink-0 size-[8px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                      <path clipRule="evenodd" d={svgPathsUnsaved.p107a7800} fill="white" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Vertical separator */}
        <div className="bg-[#c0cfd8] h-[40px] shrink-0 w-px" />

        {/* Social profile items - animated with layout animations */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <AnimatePresence mode="popLayout">
            {visibleProfiles.map((profile) => {
              const isSelected = selectedItem === profile.id;
              const isUnsupported = currentView === 'calendar' && profile.platform === 'youtube';
              const platformColor = getPlatformColor(profile.platform);
              const initials = getProfileInitials(profile.name);

              return (
                <motion.div
                  key={profile.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 }
                  }}
                  className="content-stretch flex items-center justify-center py-[12px] relative shrink-0"
                  ref={isSelected ? firstProfileRef : undefined}
                >
                  {/* Selected underline */}
                  {isSelected && (
                    <div aria-hidden="true" className="absolute border-[#76869a] border-b-2 border-solid inset-0 pointer-events-none" />
                  )}

                  <button
                    ref={(el) => el && profileRefs.current.set(profile.id, el)}
                    onClick={() => onSelectItem(profile.id)}
                    onMouseEnter={() => isUnsupported ? setHoveredUnsupportedProfile(profile.id) : null}
                    onMouseLeave={() => setHoveredUnsupportedProfile(null)}
                    className={`content-stretch flex flex-col items-start relative shrink-0 cursor-pointer ${isUnsupported ? 'opacity-50' : ''}`}
                  >
                    {/* Avatar */}
                    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]">
                      {profile.avatar ? (
                        <img alt={profile.name} className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={profile.avatar} />
                      ) : (
                        <div
                          className="absolute inset-0 rounded-[9999px] flex items-center justify-center"
                          style={{ backgroundColor: platformColor }}
                        >
                          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic text-[#606060] text-[9px] whitespace-nowrap z-[1]">
                            <p className="leading-[10px]">{initials}</p>
                          </div>
                        </div>
                      )}
                      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-1px] rounded-[10000px]" />
                    </div>

                    {/* Platform badge */}
                    <SocialBadge platform={profile.platform} />

                    {/* Bad token badge */}
                    {profile.hasBadToken && <BadTokenBadge />}
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Overflow button */}
        {hasOverflow && (
          <div className="content-stretch flex items-center justify-center py-[12px] relative shrink-0" ref={overflowRef}>
            <button
              onClick={() => setShowOverflowPopover(!showOverflowPopover)}
              className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="font-['Gilroy:Bold',sans-serif] leading-[12px] min-w-full not-italic relative shrink-0 text-[#1d1d1b] text-[10px] text-center tracking-[0.1px] uppercase w-[min-content]">{overflowProfiles.length}+</p>
              {showOverflowPopover && (
                <div className="-translate-y-1/2 absolute aspect-[24/24] left-[-2px] right-[-2px] rounded-[9999px] top-1/2">
                  <div aria-hidden="true" className="absolute border border-[#76869a] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                </div>
              )}
            </button>
            {showOverflowPopover && (
              <OverflowPopover
                profiles={overflowProfiles}
                onSelect={(profile) => onSelectItem(profile.id)}
                onClose={() => setShowOverflowPopover(false)}
                currentView={currentView}
              />
            )}
          </div>
        )}
      </div>
      {/* Border around entire navbar */}
      <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      {/* Smart Redirection Tooltip */}
      {showTooltip && firstProfileRef?.current && (
        <SmartRedirectionTooltip
          anchorRef={firstProfileRef as React.RefObject<HTMLDivElement>}
          onDismiss={handleTooltipDismiss}
        />
      )}
      {/* Unsupported Profile Tooltip for visible profiles */}
      {hoveredUnsupportedProfile && (() => {
        const profile = visibleProfiles.find(p => p.id === hoveredUnsupportedProfile);
        const profileRef = { current: profileRefs.current.get(hoveredUnsupportedProfile) || null };
        return profile ? (
          <UnsupportedProfileTooltip 
            anchorRef={profileRef as React.RefObject<HTMLElement>}
            profileName={profile.name}
            currentView={currentView}
          />
        ) : null;
      })()}
    </div>
  );
}