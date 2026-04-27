import { useState, useRef, useEffect } from 'react';
import { Settings } from 'lucide-react';
import svgPathsDefault from "../../../../assets/icons/svg-fanuza5511";
import svgPathsSelected from "../../../../assets/icons/svg-5yrghbpk28";
import svgPathsMixed from "../../../../assets/icons/svg-x5851pzgjj";
import svgPathsBadToken from "../../../../assets/icons/svg-jcr8y89wfj";
import type { SocialProfile, GroupItem } from '../../../data/profiles';
import { getPlatformColor, getProfileInitials } from '../../../utils/platformHelpers';
import { UnsupportedProfileTooltip } from './UnsupportedProfileTooltip';

interface ProfileManagerProps {
  onGroupChange: (groupId: string, groupName: string, profileIds: string[], autoDetected?: boolean) => void;
  onUnsavedSelection?: (profileIds: string[]) => void;
  onProfileFocus?: (profileId: string) => void;
  initialGroup?: string;
  initialProfileIds?: string[];
  onClose?: () => void;
  currentView?: 'calendar' | 'allposts';
  sortProfilesByAvailability?: boolean;
  pinOrFavoriteMode?: 'pin' | 'favorite' | 'none';
  pinnedGroups?: Set<string>;
  pinnedProfiles?: Set<string>;
  favoriteGroups?: Set<string>;
  favoriteProfiles?: Set<string>;
  onTogglePinGroup?: (groupId: string) => void;
  onTogglePinProfile?: (profileId: string) => void;
  onToggleFavoriteGroup?: (groupId: string) => void;
  onToggleFavoriteProfile?: (profileId: string) => void;
  onSaveSelection?: () => void;
  onOpenManageModal?: () => void;
  onOpenCreateGroupModal?: () => void;
  // Data props
  allSocialProfiles: SocialProfile[];
  groups: GroupItem[];
  groupProfiles: Record<string, string[]>;
  groupSelectionStage?: 'stage01' | 'stage02' | 'stage03';
  globalSearchMode?: boolean;
  canCreateGroups?: boolean;
}

// ── Icons ──────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p2ecd0600} fill="#97acbd" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d="M15.625 5.44922L14.5508 4.375L10 8.92578L5.44922 4.375L4.375 5.44922L8.92578 10L4.375 14.5508L5.44922 15.625L10 11.0742L14.5508 15.625L15.625 14.5508L11.0742 10L15.625 5.44922Z" fill="#76869a" />
      </svg>
    </div>
  );
}

function RadioOffIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p33167800} fill="#c0cfd8" />
      </svg>
    </div>
  );
}

function RadioOnIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p1ce00} fill="#76869a" />
      </svg>
    </div>
  );
}

function CheckboxUncheckedIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsMixed.p2f772f00} fill="#c0cfd8" />
      </svg>
    </div>
  );
}

function CheckboxCheckedIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsSelected.p162d9a80} fill="#76869a" />
      </svg>
    </div>
  );
}

function PinIcon({ filled = false, onClick }: { filled?: boolean; onClick?: () => void }) {
  const pinPaths = {
    filled: "M12.8156 4.21708V10.1931L14.0969 11.464C14.1519 11.5216 14.1949 11.5864 14.2258 11.6583C14.2568 11.7301 14.2723 11.8039 14.2723 11.8796V12.2085C14.2723 12.3687 14.2144 12.5071 14.0987 12.6238C13.9831 12.7404 13.8447 12.7988 13.6835 12.7988H10.585V17.1779C10.585 17.3394 10.5278 17.4773 10.4135 17.5915C10.2994 17.7056 10.1615 17.7627 9.99979 17.7627C9.83812 17.7627 9.7009 17.7056 9.58813 17.5915C9.47549 17.4773 9.41917 17.3394 9.41917 17.1779V12.7988H6.32063C6.15674 12.7988 6.01694 12.7404 5.90125 12.6238C5.78556 12.5071 5.72771 12.3687 5.72771 12.2085V11.8796C5.72771 11.8039 5.74319 11.7301 5.77417 11.6583C5.80514 11.5864 5.84944 11.5216 5.90708 11.464L7.18437 10.1931V4.21708H6.93583C6.77431 4.21708 6.63646 4.16 6.52229 4.04583C6.40812 3.93153 6.35104 3.79354 6.35104 3.63188C6.35104 3.47299 6.40812 3.33646 6.52229 3.22229C6.63646 3.10826 6.77431 3.05125 6.93583 3.05125H13.0681C13.227 3.05125 13.3635 3.1084 13.4777 3.22271C13.5919 3.33688 13.649 3.47347 13.649 3.6325C13.649 3.79417 13.5919 3.93201 13.4777 4.04604C13.3635 4.16007 13.227 4.21708 13.0681 4.21708H12.8156Z",
    outline: "M12.8156 4.21708V10.1931L14.0969 11.464C14.1519 11.5205 14.1949 11.5849 14.2258 11.6573C14.2568 11.7298 14.2723 11.8039 14.2723 11.8796V12.2104C14.2723 12.3681 14.2144 12.5056 14.0985 12.6229C13.9826 12.7401 13.8442 12.7988 13.6835 12.7988H10.585V17.1779C10.585 17.3394 10.5278 17.4773 10.4135 17.5915C10.2994 17.7056 10.1615 17.7627 9.99979 17.7627C9.83812 17.7627 9.7009 17.7056 9.58813 17.5915C9.47549 17.4773 9.41917 17.3394 9.41917 17.1779V12.7988H6.32063C6.15674 12.7988 6.01694 12.7401 5.90125 12.6229C5.78556 12.5056 5.72771 12.3681 5.72771 12.2104V11.8796C5.72771 11.8029 5.74319 11.7289 5.77417 11.6575C5.80514 11.5861 5.84944 11.5216 5.90708 11.464L7.18437 10.1931V4.21708H6.93583C6.77431 4.21708 6.63646 4.16 6.52229 4.04583C6.40812 3.93153 6.35104 3.79424 6.35104 3.63396C6.35104 3.47368 6.40812 3.33646 6.52229 3.22229C6.63646 3.10826 6.77431 3.05125 6.93583 3.05125H13.0681C13.2266 3.05125 13.3631 3.10847 13.4775 3.22292C13.5918 3.33736 13.649 3.47389 13.649 3.6325C13.649 3.79417 13.5918 3.93201 13.4775 4.04604C13.3631 4.16007 13.2266 4.21708 13.0681 4.21708H12.8156ZM7.39187 11.6329H12.6081L11.6498 10.6929V4.21708H8.35021V10.6915L7.39187 11.6329Z"
  };
  return (
    <button onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={filled ? pinPaths.filled : pinPaths.outline} fill={filled ? "#76869a" : "#c0cfd8"} />
      </svg>
    </button>
  );
}

function StarIcon({ filled = false, onClick }: { filled?: boolean; onClick?: () => void }) {
  const starPaths = {
    filled: "M10 2.5L12.1225 7.95492L18 8.4635L13.82 12.2301L15.1329 17.9635L10 15.0451L4.86712 17.9635L6.18 12.2301L2 8.4635L7.8775 7.95492L10 2.5Z",
    outline: "M10 2.5L12.1225 7.95492L18 8.4635L13.82 12.2301L15.1329 17.9635L10 15.0451L4.86712 17.9635L6.18 12.2301L2 8.4635L7.8775 7.95492L10 2.5ZM10 5.14385L8.59025 8.99731L4.60212 9.33865L7.48425 11.9146L6.60738 15.8138L10 13.6962L13.3926 15.8138L12.5157 11.9146L15.3979 9.33865L11.4097 8.99731L10 5.14385Z"
  };
  return (
    <button onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={filled ? starPaths.filled : starPaths.outline} fill={filled ? "#76869a" : "#c0cfd8"} />
      </svg>
    </button>
  );
}

// ── Platform badge helpers ──────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <path d={svgPathsDefault.p1f631200} fill="#76869a" />
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="h-full relative shrink-0 w-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <path clipRule="evenodd" d={svgPathsDefault.p1b8d9d40} fill="#76869a" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
      <div className="h-[10px] relative shrink-0 w-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
          <path d={svgPathsDefault.p9316600} fill="#76869a" />
        </svg>
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPathsDefault.p1f631200} fill="#76869a" />
      </svg>
    </div>
  );
}

function XIcon() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPathsDefault.p1f631200} fill="#76869a" />
      </svg>
    </div>
  );
}

function SocialBadge({ platform }: { platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' }) {
  const Icon = platform === 'instagram' ? InstagramIcon
    : platform === 'linkedin' ? LinkedInIcon
    : platform === 'youtube' ? YouTubeIcon
    : platform === 'tiktok' ? TikTokIcon
    : XIcon;
  return (
    <div className="absolute bg-white bottom-[2px] content-stretch flex h-[14px] items-center justify-center p-px right-[-5px] rounded-[6px]">
      <div aria-hidden="true" className="absolute border border-[#ebf2f4] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <Icon />
    </div>
  );
}

function BadTokenBadge() {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="absolute left-[-2px] size-[14px] top-0 z-10"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
      <svg className="absolute block size-full cursor-help" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <rect fill="#d5dcdf" height="14" rx="7" width="14" />
        <path d={svgPathsBadToken.p33523640} fill="#76869a" />
      </svg>
      {showTooltip && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#1d1d1b] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none">
          Refresh social profile credentials
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#1d1d1b]" />
        </div>
      )}
    </div>
  );
}

function ProfileAvatar({ platform, hasBadToken, name, avatar }: {
  platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' | 'facebook' | 'threads';
  hasBadToken?: boolean;
  name: string;
  avatar?: string;
}) {
  const platformColor = getPlatformColor(platform);
  const initials = getProfileInitials(name);
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]"
      style={{ backgroundColor: avatar ? 'transparent' : platformColor }}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      {avatar ? (
        <img src={avatar} alt={name} className="absolute inset-0 size-[32px] rounded-[999px] object-cover" />
      ) : (
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[9px] whitespace-nowrap z-[1]">
          <p className="leading-[10px]">{initials}</p>
        </div>
      )}
      <SocialBadge platform={platform as 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x'} />
      {hasBadToken && <BadTokenBadge />}
    </div>
  );
}

// ── Group avatar/badge helper ──────────────────────────────────────────────

function GroupAvatar({ group }: { group: GroupItem }) {
  if (group.avatar) {
    return (
      <img src={group.avatar} alt={group.name}
        className="rounded-[6px] size-[32px] shrink-0 border border-[#c0cfd8] object-cover" />
    );
  }
  return (
    <div className="bg-[#d5dcdf] flex items-center justify-center rounded-[6px] size-[32px] shrink-0">
      <span className="font-['Gilroy:Bold',sans-serif] text-[#76869a] text-[9px] leading-[10px]">
        {group.badge}
      </span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export function ProfileManager({
  onGroupChange,
  onUnsavedSelection,
  onProfileFocus,
  onSaveSelection,
  initialGroup = 'all',
  initialProfileIds,
  onClose,
  currentView,
  sortProfilesByAvailability,
  pinOrFavoriteMode = 'none',
  pinnedGroups = new Set(),
  pinnedProfiles = new Set(),
  favoriteGroups = new Set(),
  favoriteProfiles = new Set(),
  onTogglePinGroup,
  onTogglePinProfile,
  onToggleFavoriteGroup,
  onToggleFavoriteProfile,
  onOpenManageModal,
  onOpenCreateGroupModal,
  allSocialProfiles,
  groups,
  groupProfiles,
  groupSelectionStage,
  globalSearchMode = true,
  canCreateGroups = true,
}: ProfileManagerProps) {
  const hasPinFavorites = pinOrFavoriteMode !== 'none';
  const [selectedProfiles, setSelectedProfiles] = useState<Set<string>>(new Set(initialProfileIds));
  const normalizedInitialGroup = (initialGroup === 'unsaved' || initialGroup === '') ? 'all' : initialGroup || 'campaign';
  const [activeGroup, setActiveGroup] = useState<string>(normalizedInitialGroup);
  const [viewingGroup, setViewingGroup] = useState<string>(normalizedInitialGroup);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const [leftSearchMode, setLeftSearchMode] = useState(false);
  const [rightSearchMode, setRightSearchMode] = useState(false);
  const [leftSearchQuery, setLeftSearchQuery] = useState('');
  const [rightSearchQuery, setRightSearchQuery] = useState('');

  const [isGlobalSearchActive, setIsGlobalSearchActive] = useState(false);
  const [savedViewingGroup, setSavedViewingGroup] = useState<string | null>(null);
  const [savedSelectedProfiles, setSavedSelectedProfiles] = useState<Set<string> | null>(null);
  const [savedActiveGroup, setSavedActiveGroup] = useState<string | null>(null);

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [hoveredUnsupportedProfile, setHoveredUnsupportedProfile] = useState<string | null>(null);
  const avatarRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [duplicateGroupWarned, setDuplicateGroupWarned] = useState(false);

  const leftSearchInputRef = useRef<HTMLInputElement>(null);
  const rightSearchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (leftSearchMode && leftSearchInputRef.current) leftSearchInputRef.current.focus();
  }, [leftSearchMode]);

  useEffect(() => {
    if (rightSearchMode && rightSearchInputRef.current) rightSearchInputRef.current.focus();
  }, [rightSearchMode]);

  useEffect(() => {
    if (leftSearchInputRef.current) leftSearchInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (leftSearchQuery && !isGlobalSearchActive) {
      setSavedViewingGroup(viewingGroup);
      setSavedSelectedProfiles(new Set(selectedProfiles));
      setSavedActiveGroup(activeGroup);
      setIsGlobalSearchActive(true);
      setViewingGroup('all');
    } else if (!leftSearchQuery && isGlobalSearchActive) {
      if (selectedProfiles.size === 0) {
        setIsGlobalSearchActive(false);
        setViewingGroup(savedViewingGroup || 'all');
        setSelectedProfiles(savedSelectedProfiles || new Set());
        setActiveGroup(savedActiveGroup || 'all');
        setSavedViewingGroup(null);
        setSavedSelectedProfiles(null);
        setSavedActiveGroup(null);
      } else {
        setIsGlobalSearchActive(false);
        setSavedViewingGroup(null);
        setSavedSelectedProfiles(null);
        setSavedActiveGroup(null);
      }
    }
  }, [leftSearchQuery]);

  // ── Derived data ─────────────────────────────────────────────────────────

  const currentGroupProfileIds = groupProfiles[viewingGroup as keyof typeof groupProfiles] || [];
  const displayedProfiles = allSocialProfiles.filter(p => currentGroupProfileIds.includes(p.id));

  const sortedDisplayedProfiles = [...displayedProfiles].sort((a, b) => {
    if (pinOrFavoriteMode === 'pin' && viewingGroup === 'all') {
      const aIsPinned = pinnedProfiles.has(a.id);
      const bIsPinned = pinnedProfiles.has(b.id);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
    }
    return a.name.localeCompare(b.name);
  });

  const filteredProfiles = sortedDisplayedProfiles.filter(profile => {
    const searchQuery = leftSearchQuery || rightSearchQuery;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = profile.name.toLowerCase().includes(query) ||
        profile.handle.toLowerCase().includes(query) ||
        profile.platform.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    if (pinOrFavoriteMode === 'favorite' && showFavoritesOnly) {
      return favoriteProfiles.has(profile.id);
    }
    return true;
  });

  const sortedGroups = [...groups].sort((a, b) => {
    if (pinOrFavoriteMode === 'pin') {
      const aIsPinned = pinnedGroups.has(a.id);
      const bIsPinned = pinnedGroups.has(b.id);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
    }
    return a.name.localeCompare(b.name);
  });

  const filteredGroups = sortedGroups.filter(group => {
    if (leftSearchQuery) {
      if (!group.name.toLowerCase().includes(leftSearchQuery.toLowerCase())) return false;
    }
    if (pinOrFavoriteMode === 'favorite' && showFavoritesOnly) {
      return favoriteGroups.has(group.id);
    }
    return true;
  });

  const canFilter = viewingGroup === 'all';
  const allSelected = canFilter && selectedProfiles.size === filteredProfiles.length && filteredProfiles.length > 0;

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleGroupChange = (group: string) => {
    setViewingGroup(group);
    setLeftSearchMode(false);
    setLeftSearchQuery('');
    setDuplicateGroupWarned(false);

    if (group === 'all') {
      if (groupSelectionStage === 'stage01') {
        setSelectedProfiles(new Set());
        setIsSelectionMode(false);
      } else {
        const allIds = allSocialProfiles.map(p => p.id);
        setSelectedProfiles(new Set(allIds));
        setIsSelectionMode(true);
        setActiveGroup('all');
        onGroupChange?.('all', 'All profiles', allIds);
      }
    } else {
      setSelectedProfiles(new Set());
      setIsSelectionMode(false);
      setActiveGroup(group);
      const groupData = groups.find(g => g.id === group);
      const profileIds = groupProfiles[group as keyof typeof groupProfiles] || [];
      onGroupChange?.(group, groupData?.name || '', profileIds);
    }
  };

  const toggleProfile = (id: string, skipSmartDetection = false) => {
    if (!canFilter) return;
    const newSelected = new Set(selectedProfiles);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedProfiles(newSelected);
    setIsSelectionMode(newSelected.size > 0);
    setDuplicateGroupWarned(false);

    if (!skipSmartDetection && newSelected.size > 0) {
      const selectedArray = Array.from(newSelected).sort();
      if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
        const allProfileIds = allSocialProfiles.map(p => p.id).sort();
        if (selectedArray.length === allProfileIds.length && selectedArray.every((id, i) => id === allProfileIds[i])) {
          setActiveGroup('all');
          onGroupChange?.('all', 'All profiles', Array.from(newSelected), true);
          return;
        }
      }
      let foundMatch = false;
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'all' || groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue;
        const groupProfilesSorted = [...profileIds].sort();
        if (selectedArray.length === groupProfilesSorted.length && selectedArray.every((id, i) => id === groupProfilesSorted[i])) {
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            return;
          }
        }
      }
      if (!foundMatch) {
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') setActiveGroup('all');
        else if (groupSelectionStage === 'stage01') setActiveGroup('');
        onUnsavedSelection?.(Array.from(newSelected));
      }
    } else {
      if (newSelected.size === 0) {
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') setActiveGroup('all');
      } else if (onUnsavedSelection) {
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') setActiveGroup('all');
        else if (groupSelectionStage === 'stage01') setActiveGroup('');
        onUnsavedSelection(Array.from(newSelected));
      }
    }
  };

  const selectAll = () => {
    if (!canFilter) return;
    const allIds = filteredProfiles.map(p => p.id);
    const newSelected = new Set(allIds);
    setSelectedProfiles(newSelected);
    setIsSelectionMode(true);
    setDuplicateGroupWarned(false);

    if (groupSelectionStage === 'stage01') {
      const selectedArray = Array.from(newSelected).sort();
      let foundMatch = false;
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue;
        const groupProfilesSorted = [...profileIds].sort();
        if (selectedArray.length === groupProfilesSorted.length && selectedArray.every((id, i) => id === groupProfilesSorted[i])) {
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            break;
          }
        }
      }
      if (!foundMatch) {
        setActiveGroup('');
        onUnsavedSelection?.(allIds);
      }
    } else {
      const selectedArray = Array.from(newSelected).sort();
      const allProfileIds = allSocialProfiles.map(p => p.id).sort();
      if (selectedArray.length === allProfileIds.length && selectedArray.every((id, i) => id === allProfileIds[i])) {
        setActiveGroup('all');
        onGroupChange?.('all', 'All profiles', allIds, true);
        return;
      }
      let foundMatch = false;
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'all' || groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue;
        const groupProfilesSorted = [...profileIds].sort();
        if (selectedArray.length === groupProfilesSorted.length && selectedArray.every((id, i) => id === groupProfilesSorted[i])) {
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            break;
          }
        }
      }
      if (!foundMatch) onUnsavedSelection?.(allIds);
    }
  };

  const unselectAll = () => {
    if (!canFilter || filteredProfiles.length === 0) return;
    const firstProfileId = filteredProfiles[0].id;
    const newSelected = new Set([firstProfileId]);
    setSelectedProfiles(newSelected);
    setIsSelectionMode(true);
    setDuplicateGroupWarned(false);
    if (groupSelectionStage === 'stage01') setActiveGroup('');
    onUnsavedSelection?.([firstProfileId]);
  };

  const handleProfileClick = (profileId: string) => {
    if (!canFilter && onProfileFocus) {
      onProfileFocus(profileId);
      onClose?.();
    }
  };

  const exitLeftSearch = () => { setLeftSearchMode(false); setLeftSearchQuery(''); };
  const exitRightSearch = () => { setRightSearchMode(false); setRightSearchQuery(''); };

  const checkDuplicateGroup = () => {
    const selectedArray = Array.from(selectedProfiles).sort();
    for (const group of groups) {
      if (group.id === 'all') continue;
      const groupArray = [...(groupProfiles[group.id] || [])].sort();
      if (selectedArray.length === groupArray.length && selectedArray.every((id, i) => id === groupArray[i])) return true;
    }
    return false;
  };

  const handleSaveSelection = () => {
    const hasDuplicate = checkDuplicateGroup();
    if (hasDuplicate && !duplicateGroupWarned) {
      setDuplicateGroupWarned(true);
    } else {
      onSaveSelection?.();
      if (duplicateGroupWarned) setDuplicateGroupWarned(false);
    }
  };

  const getGroupDisplayName = () => groups.find(g => g.id === activeGroup)?.name || '';

  // ── Pin/no-pin group lists ─────────────────────────────────────────────────

  const pinnedGroupsList = pinOrFavoriteMode === 'pin' ? filteredGroups.filter(g => pinnedGroups.has(g.id)) : [];
  const nonPinnedGroupsList = pinOrFavoriteMode === 'pin' ? filteredGroups.filter(g => !pinnedGroups.has(g.id)) : filteredGroups;

  // ── Group row renderer ────────────────────────────────────────────────────

  const renderGroupRow = (group: GroupItem, isPinned = false, noBorderBottom = false) => (
    <div
      key={group.id}
      className={`flex items-center gap-[12px] px-[16px] py-[10px] cursor-pointer transition-colors ${
        noBorderBottom ? '' : 'border-b border-[#ebf2f4]'
      } ${viewingGroup === group.id ? 'bg-[#f4f8f9]' : 'hover:bg-[#f4f8f9]'}`}
      onClick={() => handleGroupChange(group.id)}
    >
      <GroupAvatar group={group} />
      <div className="flex-1 flex flex-col gap-[3px] min-w-0">
        <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] truncate">
          {group.name}
        </span>
        <span className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[14px] tracking-[-0.12px]">
          {group.profileCount} Social profiles
        </span>
      </div>
      <div className="flex gap-[6px] items-center shrink-0">
        {pinOrFavoriteMode === 'pin' && (
          <PinIcon filled={pinnedGroups.has(group.id)} onClick={() => onTogglePinGroup?.(group.id)} />
        )}
        {pinOrFavoriteMode === 'favorite' && (
          <StarIcon filled={favoriteGroups.has(group.id)} onClick={() => onToggleFavoriteGroup?.(group.id)} />
        )}
        {activeGroup === group.id ? <RadioOnIcon /> : <RadioOffIcon />}
      </div>
    </div>
  );

  // ── Save button logic ─────────────────────────────────────────────────────

  const showSaveButton = groupSelectionStage && canFilter && selectedProfiles.size > 1 && !rightSearchMode && !(
    (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') &&
    selectedProfiles.size === allSocialProfiles.length
  );

  const saveButtonDisabled = groupSelectionStage === 'stage01' && selectedProfiles.size > 50;
  const saveButtonLabel = saveButtonDisabled
    ? 'Groups are limited to 50 social profiles'
    : duplicateGroupWarned
      ? 'Group already exists, continue ?'
      : 'Save this selection as a group';

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col w-[740px] rounded-[12px] border border-[#c0cfd8] bg-white overflow-hidden">

      {/* ── Search Bar ── */}
      <div className="flex items-center gap-[10px] h-[40px] px-[14px] border-b border-[#c0cfd8] shrink-0">
        <SearchIcon />
        <input
          ref={leftSearchInputRef}
          type="text"
          value={leftSearchQuery}
          onChange={(e) => {
            setLeftSearchQuery(e.target.value);
            if (e.target.value && !leftSearchMode) setLeftSearchMode(true);
          }}
          placeholder="Start typing ..."
          className="flex-1 font-['Gilroy:Medium',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] outline-none bg-transparent placeholder:text-[#97acbd]"
          onKeyDown={(e) => { if (e.key === 'Escape') exitLeftSearch(); }}
        />
        {leftSearchQuery && (
          <button onClick={exitLeftSearch} className="shrink-0 hover:opacity-70 transition-opacity cursor-pointer">
            <CloseIcon />
          </button>
        )}
        {pinOrFavoriteMode === 'favorite' && (
          <StarIcon filled={showFavoritesOnly} onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} />
        )}
        <div className="h-[16px] w-px bg-[#c0cfd8] shrink-0" />
        <button
          onClick={() => onOpenManageModal?.()}
          title="Manage profiles and groups"
          className="shrink-0 text-[#97acbd] hover:text-[#76869a] transition-colors cursor-pointer flex items-center justify-center"
        >
          <Settings size={15} />
        </button>
      </div>

      {/* ── Two-Panel Body ── */}
      <div className="flex h-[360px]">

        {/* ── Left Panel ── */}
        <div className="w-[370px] shrink-0 border-r border-[#c0cfd8] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">

            {/* "All profiles" row — always visible */}
            {(!leftSearchQuery || 'all profiles'.includes(leftSearchQuery.toLowerCase())) && (
              <div
                className={`flex items-center gap-[12px] px-[16px] h-[56px] shrink-0 cursor-pointer transition-colors border-b border-[#c0cfd8] ${
                  viewingGroup === 'all' ? 'bg-[#f4f8f9]' : 'hover:bg-[#f4f8f9]'
                }`}
                onClick={() => handleGroupChange('all')}
              >
                <div className="flex-1 flex flex-col gap-[3px]">
                  <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px]">
                    All profiles
                  </span>
                  <span className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[14px] tracking-[-0.12px]">
                    {allSocialProfiles.length} profiles
                  </span>
                </div>
                {(groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') && (
                  activeGroup === 'all' ? <RadioOnIcon /> : <RadioOffIcon />
                )}
              </div>
            )}

            {/* Groups or empty states */}
            {groups.length === 0 ? (
              /* ── Empty states ── */
              canCreateGroups ? (
                /* Trial: "Create your first group" */
                <div className="flex flex-col items-center justify-center h-full px-[32px] py-[40px] gap-[20px]">
                  <div className="relative shrink-0 size-[72px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="40" fill="#d5dcdf" />
                    </svg>
                  </div>
                  <div className="font-['Gilroy:Bold',sans-serif] text-[#1d1d1b] text-[16px] leading-[20px] tracking-[-0.16px] text-center italic">
                    Create your first group
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[17px] tracking-[-0.12px] text-center">
                    Create your first group to organize social<br />profiles, collaborate with others and<br />build campaigns.
                  </div>
                  <button
                    onClick={() => onOpenCreateGroupModal?.()}
                    className="h-[36px] w-full rounded-[6px] border border-[#76869a] flex items-center justify-center cursor-pointer hover:bg-[#f4f8f9] transition-colors"
                  >
                    <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px]">
                      Create a new group
                    </span>
                  </button>
                </div>
              ) : (
                /* Launch: "Unlock the power of groups" */
                <div className="flex flex-col items-center justify-center h-full px-[32px] py-[40px] gap-[20px]">
                  <div className="relative shrink-0 size-[72px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="40" fill="#d5dcdf" />
                    </svg>
                  </div>
                  <div className="font-['Gilroy:Bold',sans-serif] text-[#1d1d1b] text-[16px] leading-[20px] tracking-[-0.16px] text-center italic">
                    Unlock the power of groups
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[17px] tracking-[-0.12px] text-center">
                    Use groups to organize social profiles,<br />collaborate with others and<br />build campaigns.
                  </div>
                  <button
                    onClick={() => onOpenCreateGroupModal?.()}
                    className="h-[36px] w-full rounded-[6px] border border-[#76869a] flex items-center justify-center cursor-pointer hover:bg-[#f4f8f9] transition-colors"
                  >
                    <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px]">
                      Change my plan to Scale
                    </span>
                  </button>
                </div>
              )
            ) : (
              /* ── Groups list ── */
              <>
                {/* Pinned groups — bordered card */}
                {pinnedGroupsList.length > 0 && (
                  <div className="mx-[10px] mt-[10px] rounded-[8px] border border-[#c0cfd8] overflow-hidden">
                    {pinnedGroupsList.map((group, i) => (
                      <div key={group.id}
                        className={`flex items-center gap-[12px] px-[12px] py-[10px] cursor-pointer transition-colors ${
                          i > 0 ? 'border-t border-[#ebf2f4]' : ''
                        } ${viewingGroup === group.id ? 'bg-[#f4f8f9]' : 'hover:bg-[#f4f8f9]'}`}
                        onClick={() => handleGroupChange(group.id)}
                      >
                        <GroupAvatar group={group} />
                        <div className="flex-1 flex flex-col gap-[3px] min-w-0">
                          <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] truncate">
                            {group.name}
                          </span>
                          <span className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[14px] tracking-[-0.12px]">
                            {group.profileCount} Social profiles
                          </span>
                        </div>
                        <div className="flex gap-[6px] items-center shrink-0">
                          <PinIcon filled={true} onClick={() => onTogglePinGroup?.(group.id)} />
                          {activeGroup === group.id ? <RadioOnIcon /> : <RadioOffIcon />}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Non-pinned / regular groups */}
                {nonPinnedGroupsList.length > 0 && (
                  <div className={pinnedGroupsList.length > 0 ? 'mt-[10px]' : ''}>
                    {nonPinnedGroupsList.map((group, i) =>
                      renderGroupRow(group, false, i === nonPinnedGroupsList.length - 1)
                    )}
                  </div>
                )}

                {/* Search empty */}
                {leftSearchQuery && filteredGroups.length === 0 && (
                  <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                    <div className="font-['Gilroy:Medium',sans-serif] text-[#97acbd] text-[13px] italic leading-[18px]">
                      No groups found
                    </div>
                  </div>
                )}

                {/* Favorites filter empty */}
                {!leftSearchQuery && showFavoritesOnly && filteredGroups.length === 0 && (
                  <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                    <div className="font-['Gilroy:Medium',sans-serif] text-[#97acbd] text-[13px] italic leading-[18px]">
                      No favorite groups yet
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Right panel header */}
          <div className="h-[40px] border-b border-[#c0cfd8] flex items-center justify-between px-[16px] shrink-0">
            {canFilter ? (
              filteredProfiles.length > 0 ? (
                <div className="flex gap-[8px] items-center">
                  <button
                    onClick={allSelected ? unselectAll : selectAll}
                    className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] cursor-pointer hover:text-[#76869a] transition-colors"
                  >
                    Select all
                  </button>
                  {selectedProfiles.size > 0 && (
                    <>
                      <span className="text-[#c0cfd8] text-[13px]">/</span>
                      <button
                        onClick={unselectAll}
                        className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] cursor-pointer hover:text-[#76869a] transition-colors"
                      >
                        Unselect all
                      </button>
                    </>
                  )}
                </div>
              ) : null
            ) : (
              <>
                <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px]">
                  {getGroupDisplayName()}
                </span>
                <button className="font-['Gilroy:Semibold',sans-serif] text-[#76869a] text-[12px] leading-[14px] tracking-[-0.12px] cursor-pointer hover:text-[#1d1d1b] transition-colors">
                  Edit group
                </button>
              </>
            )}
          </div>

          {/* Profiles list */}
          <div className="flex-1 overflow-y-auto">
            {filteredProfiles.map((profile, i) => {
              const isSelected = selectedProfiles.has(profile.id);
              const isUnsupported = currentView === 'calendar' && profile.platform === 'youtube';
              const isCheckboxDisabled = canFilter && selectedProfiles.size === 1 && isSelected;
              const isLast = i === filteredProfiles.length - 1;

              return (
                <div
                  key={profile.id}
                  className={`flex items-center gap-[12px] px-[16px] py-[10px] transition-colors ${
                    isLast ? '' : 'border-b border-[#ebf2f4]'
                  } ${isCheckboxDisabled ? '' : 'cursor-pointer hover:bg-[#f4f8f9]'}`}
                  onClick={() => {
                    if (isCheckboxDisabled) return;
                    canFilter ? toggleProfile(profile.id) : handleProfileClick(profile.id);
                  }}
                >
                  <div className="flex-1 flex items-center gap-[12px] min-w-0">
                    <div
                      className={`shrink-0 ${isUnsupported ? 'opacity-40' : ''}`}
                      ref={el => avatarRefs.current.set(profile.id, el as HTMLDivElement)}
                      onMouseEnter={() => isUnsupported ? setHoveredUnsupportedProfile(profile.id) : null}
                      onMouseLeave={() => isUnsupported ? setHoveredUnsupportedProfile(null) : null}
                    >
                      <ProfileAvatar
                        platform={profile.platform}
                        hasBadToken={profile.hasBadToken}
                        name={profile.name}
                        avatar={profile.avatar}
                      />
                    </div>
                    <div className="flex flex-col gap-[3px] min-w-0">
                      <span className="font-['Gilroy:Semibold',sans-serif] text-[#1d1d1b] text-[13px] leading-[16px] tracking-[-0.13px] truncate">
                        {profile.name}
                      </span>
                      <span className="font-['Gilroy:Medium',sans-serif] text-[#76869a] text-[12px] leading-[14px] tracking-[-0.12px] truncate">
                        {profile.handle}
                      </span>
                    </div>
                  </div>
                  {canFilter && (
                    <div className={`shrink-0 ${isCheckboxDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}>
                      {isSelected ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Search empty */}
            {(leftSearchQuery || rightSearchQuery) && filteredProfiles.length === 0 && (
              <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                <div className="font-['Gilroy:Medium',sans-serif] text-[#97acbd] text-[13px] italic leading-[18px]">
                  No social profiles found
                </div>
              </div>
            )}

            {/* Favorites filter empty */}
            {!leftSearchQuery && !rightSearchQuery && showFavoritesOnly && filteredProfiles.length === 0 && (
              <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                <div className="font-['Gilroy:Medium',sans-serif] text-[#97acbd] text-[13px] italic leading-[18px]">
                  No favorite profiles yet
                </div>
              </div>
            )}

            {/* Unsupported tooltips */}
            {hoveredUnsupportedProfile && (() => {
              const profile = filteredProfiles.find(p => p.id === hoveredUnsupportedProfile);
              const profileRef = { current: avatarRefs.current.get(hoveredUnsupportedProfile) || null };
              return profile ? (
                <UnsupportedProfileTooltip
                  anchorRef={profileRef}
                  platform={profile.platform}
                  currentView={currentView}
                />
              ) : null;
            })()}
          </div>

          {/* Save button */}
          {showSaveButton && (
            <div
              className={`border-t border-[#c0cfd8] px-[16px] py-[10px] flex items-center justify-center shrink-0 ${
                saveButtonDisabled
                  ? 'bg-[#f4f8f9] cursor-not-allowed'
                  : 'bg-[#76869a] cursor-pointer hover:bg-[#6a7a8c] transition-colors'
              }`}
              onClick={saveButtonDisabled ? undefined : handleSaveSelection}
            >
              <span className={`font-['Gilroy:Semibold',sans-serif] text-[13px] leading-[16px] tracking-[-0.13px] ${
                saveButtonDisabled ? 'text-[#97acbd]' : 'text-white'
              }`}>
                {saveButtonLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
