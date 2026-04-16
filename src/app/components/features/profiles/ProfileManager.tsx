import { useState, useRef, useEffect } from 'react';
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

function ChevronIcon() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <path clipRule="evenodd" d={svgPathsDefault.p24c3e800} fill="#A0A0A0" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p2ecd0600} fill="#606060" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d="M15.625 5.44922L14.5508 4.375L10 8.92578L5.44922 4.375L4.375 5.44922L8.92578 10L4.375 14.5508L5.44922 15.625L10 11.0742L14.5508 15.625L15.625 14.5508L11.0742 10L15.625 5.44922Z" fill="#606060" />
      </svg>
    </div>
  );
}

function EditIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9998">
        <path clipRule="evenodd" d={svgPathsDefault.p34898620} fill="#606060" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function PinIcon({ filled = false, onClick }: { filled?: boolean; onClick?: () => void }) {
  // Pin SVG paths - p3dd5f880 is filled, p1429e180 is outline
  const pinPaths = {
    filled: "M12.8156 4.21708V10.1931L14.0969 11.464C14.1519 11.5216 14.1949 11.5864 14.2258 11.6583C14.2568 11.7301 14.2723 11.8039 14.2723 11.8796V12.2085C14.2723 12.3687 14.2144 12.5071 14.0987 12.6238C13.9831 12.7404 13.8447 12.7988 13.6835 12.7988H10.585V17.1779C10.585 17.3394 10.5278 17.4773 10.4135 17.5915C10.2994 17.7056 10.1615 17.7627 9.99979 17.7627C9.83812 17.7627 9.7009 17.7056 9.58813 17.5915C9.47549 17.4773 9.41917 17.3394 9.41917 17.1779V12.7988H6.32063C6.15674 12.7988 6.01694 12.7404 5.90125 12.6238C5.78556 12.5071 5.72771 12.3687 5.72771 12.2085V11.8796C5.72771 11.8039 5.74319 11.7301 5.77417 11.6583C5.80514 11.5864 5.84944 11.5216 5.90708 11.464L7.18437 10.1931V4.21708H6.93583C6.77431 4.21708 6.63646 4.16 6.52229 4.04583C6.40812 3.93153 6.35104 3.79354 6.35104 3.63188C6.35104 3.47299 6.40812 3.33646 6.52229 3.22229C6.63646 3.10826 6.77431 3.05125 6.93583 3.05125H13.0681C13.227 3.05125 13.3635 3.1084 13.4777 3.22271C13.5919 3.33688 13.649 3.47347 13.649 3.6325C13.649 3.79417 13.5919 3.93201 13.4777 4.04604C13.3635 4.16007 13.227 4.21708 13.0681 4.21708H12.8156Z",
    outline: "M12.8156 4.21708V10.1931L14.0969 11.464C14.1519 11.5205 14.1949 11.5849 14.2258 11.6573C14.2568 11.7298 14.2723 11.8039 14.2723 11.8796V12.2104C14.2723 12.3681 14.2144 12.5056 14.0985 12.6229C13.9826 12.7401 13.8442 12.7988 13.6835 12.7988H10.585V17.1779C10.585 17.3394 10.5278 17.4773 10.4135 17.5915C10.2994 17.7056 10.1615 17.7627 9.99979 17.7627C9.83812 17.7627 9.7009 17.7056 9.58813 17.5915C9.47549 17.4773 9.41917 17.3394 9.41917 17.1779V12.7988H6.32063C6.15674 12.7988 6.01694 12.7401 5.90125 12.6229C5.78556 12.5056 5.72771 12.3681 5.72771 12.2104V11.8796C5.72771 11.8029 5.74319 11.7289 5.77417 11.6575C5.80514 11.5861 5.84944 11.5216 5.90708 11.464L7.18437 10.1931V4.21708H6.93583C6.77431 4.21708 6.63646 4.16 6.52229 4.04583C6.40812 3.93153 6.35104 3.79424 6.35104 3.63396C6.35104 3.47368 6.40812 3.33646 6.52229 3.22229C6.63646 3.10826 6.77431 3.05125 6.93583 3.05125H13.0681C13.2266 3.05125 13.3631 3.10847 13.4775 3.22292C13.5918 3.33736 13.649 3.47389 13.649 3.6325C13.649 3.79417 13.5918 3.93201 13.4775 4.04604C13.3631 4.16007 13.2266 4.21708 13.0681 4.21708H12.8156ZM7.39187 11.6329H12.6081L11.6498 10.6929V4.21708H8.35021V10.6915L7.39187 11.6329Z"
  };
  
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={filled ? pinPaths.filled : pinPaths.outline} fill={filled ? "#606060" : "#A0A0A0"} />
      </svg>
    </button>
  );
}

function StarIcon({ filled = false, onClick }: { filled?: boolean; onClick?: () => void }) {
  // Star SVG paths
  const starPaths = {
    filled: "M10 2.5L12.1225 7.95492L18 8.4635L13.82 12.2301L15.1329 17.9635L10 15.0451L4.86712 17.9635L6.18 12.2301L2 8.4635L7.8775 7.95492L10 2.5Z",
    outline: "M10 2.5L12.1225 7.95492L18 8.4635L13.82 12.2301L15.1329 17.9635L10 15.0451L4.86712 17.9635L6.18 12.2301L2 8.4635L7.8775 7.95492L10 2.5ZM10 5.14385L8.59025 8.99731L4.60212 9.33865L7.48425 11.9146L6.60738 15.8138L10 13.6962L13.3926 15.8138L12.5157 11.9146L15.3979 9.33865L11.4097 8.99731L10 5.14385Z"
  };
  
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={filled ? starPaths.filled : starPaths.outline} fill={filled ? "#606060" : "#C0C0C0"} />
      </svg>
    </button>
  );
}

function RadioOffIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p33167800} fill="#A0A0A0" />
      </svg>
    </div>
  );
}

function RadioOnIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsDefault.p1ce00} fill="#606060" />
      </svg>
    </div>
  );
}

function CheckboxUncheckedIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsMixed.p2f772f00} fill="#606060" />
      </svg>
    </div>
  );
}

function CheckboxCheckedIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPathsSelected.p162d9a80} fill="#606060" />
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
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPathsDefault.p1f631200} fill="#606060" />
      </svg>
    </div>
  );
}

function XIcon() {
  return (
    <div className="h-full relative shrink-0 w-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPathsDefault.p1f631200} fill="#606060" />
      </svg>
    </div>
  );
}

function SocialBadge({ platform }: { platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' }) {
  const Icon = platform === 'instagram' ? InstagramIcon : platform === 'linkedin' ? LinkedInIcon : platform === 'youtube' ? YouTubeIcon : platform === 'tiktok' ? TikTokIcon : XIcon;
  
  return (
    <div className="absolute bg-white bottom-[2px] content-stretch flex h-[14px] items-center justify-center p-px right-[-5px] rounded-[6px]">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <Icon />
    </div>
  );
}

function BadTokenBadge() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="absolute left-[-2px] size-[14px] top-0 z-10"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <svg className="absolute block size-full cursor-help" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <rect fill="#E0E0E0" height="14" rx="7" width="14" />
        <path d={svgPathsBadToken.p33523640} fill="#606060" />
      </svg>
      {showTooltip && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#303030] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none">
          Refresh social profile credentials
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#303030]" />
        </div>
      )}
    </div>
  );
}

function ProfileAvatar({ platform, hasBadToken, name, avatar }: { platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' | 'facebook' | 'threads'; hasBadToken?: boolean; name: string; avatar?: string }) {
  const platformColor = getPlatformColor(platform);
  const initials = getProfileInitials(name);
  
  return (
    <div 
      className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[32px]"
      style={{ backgroundColor: avatar ? 'transparent' : platformColor }}
    >
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      {avatar ? (
        <img src={avatar} alt={name} className="absolute inset-0 size-[32px] rounded-[999px] object-cover" />
      ) : (
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] whitespace-nowrap z-[1]">
          <p className="leading-[10px]">{initials}</p>
        </div>
      )}
      <SocialBadge platform={platform} />
      {hasBadToken && <BadTokenBadge />}
    </div>
  );
}

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
  // Data props
  allSocialProfiles,
  groups,
  groupProfiles,
  groupSelectionStage,
  globalSearchMode = true,
  canCreateGroups = true
}: ProfileManagerProps) {
  // Only show pin/favorite controls if mode is not 'none'
  const hasPinFavorites = pinOrFavoriteMode !== 'none';
  const [selectedProfiles, setSelectedProfiles] = useState<Set<string>>(new Set(initialProfileIds));
  // Treat empty string as 'all' for unsaved selections with all profiles
  const normalizedInitialGroup = (initialGroup === 'unsaved' || initialGroup === '') ? 'all' : initialGroup || 'campaign';
  const [activeGroup, setActiveGroup] = useState<string>(normalizedInitialGroup);
  const [viewingGroup, setViewingGroup] = useState<string>(normalizedInitialGroup);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  
  // Search states
  const [leftSearchMode, setLeftSearchMode] = useState(false);
  const [rightSearchMode, setRightSearchMode] = useState(false);
  const [leftSearchQuery, setLeftSearchQuery] = useState('');
  const [rightSearchQuery, setRightSearchQuery] = useState('');
  
  // Global search states (always enabled)
  const [isGlobalSearchActive, setIsGlobalSearchActive] = useState(false);
  const [savedViewingGroup, setSavedViewingGroup] = useState<string | null>(null);
  const [savedSelectedProfiles, setSavedSelectedProfiles] = useState<Set<string> | null>(null);
  const [savedActiveGroup, setSavedActiveGroup] = useState<string | null>(null);
  
  // Unified favorite filter state (applies to both groups and profiles)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  // Tooltip state
  const [hoveredUnsupportedProfile, setHoveredUnsupportedProfile] = useState<string | null>(null);
  const avatarRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  
  // State to track if user has been warned about duplicate group
  const [duplicateGroupWarned, setDuplicateGroupWarned] = useState(false);
  
  const leftSearchInputRef = useRef<HTMLInputElement>(null);
  const rightSearchInputRef = useRef<HTMLInputElement>(null);

  // Focus input when entering search mode
  useEffect(() => {
    if (leftSearchMode && leftSearchInputRef.current) {
      leftSearchInputRef.current.focus();
    }
  }, [leftSearchMode]);

  useEffect(() => {
    if (rightSearchMode && rightSearchInputRef.current) {
      rightSearchInputRef.current.focus();
    }
  }, [rightSearchMode]);

  // Focus on left search input when dropdown opens
  useEffect(() => {
    if (leftSearchInputRef.current) {
      leftSearchInputRef.current.focus();
    }
  }, []);
  
  // Global search: when starting to search in left panel, switch to "All profiles" mode
  useEffect(() => {
    if (leftSearchQuery && !isGlobalSearchActive) {
      // First character - save current state and switch to "All profiles"
      setSavedViewingGroup(viewingGroup);
      setSavedSelectedProfiles(new Set(selectedProfiles));
      setSavedActiveGroup(activeGroup);
      
      // Activate global search — show all SPs in right panel.
      // Do NOT reset selectedProfiles: any profiles already checked (unsaved selection)
      // must remain checked so the user can see and build upon their current selection.
      setIsGlobalSearchActive(true);
      setViewingGroup('all');
    } else if (!leftSearchQuery && isGlobalSearchActive) {
      // Query cleared — always exit global search mode.
      if (selectedProfiles.size === 0) {
        // Nothing selected: restore the full saved state (group, profiles, activeGroup).
        setIsGlobalSearchActive(false);
        setViewingGroup(savedViewingGroup || 'all');
        setSelectedProfiles(savedSelectedProfiles || new Set());
        setActiveGroup(savedActiveGroup || 'all');
        setSavedViewingGroup(null);
        setSavedSelectedProfiles(null);
        setSavedActiveGroup(null);
      } else {
        // Profiles are selected (unsaved selection): exit search mode but preserve the
        // current selection and stay in "all" view so the user can see all checked SPs.
        setIsGlobalSearchActive(false);
        setSavedViewingGroup(null);
        setSavedSelectedProfiles(null);
        setSavedActiveGroup(null);
      }
    }
  }, [leftSearchQuery]);

  // Get profiles for the viewing group (what's shown in right panel)
  const currentGroupProfileIds = groupProfiles[viewingGroup as keyof typeof groupProfiles] || [];
  const displayedProfiles = allSocialProfiles.filter(p => currentGroupProfileIds.includes(p.id));
  
  // Sort profiles based on mode and viewing context:
  // - pin mode + viewing "all profiles": pins first, then A-Z
  // - pin mode + viewing saved group: just A-Z (no pin sorting)
  // - favorite mode: maintain A-Z order always (favorites don't change position)
  // - none mode: just A-Z
  const sortedDisplayedProfiles = [...displayedProfiles].sort((a, b) => {
    if (pinOrFavoriteMode === 'pin' && viewingGroup === 'all') {
      const aIsPinned = pinnedProfiles.has(a.id);
      const bIsPinned = pinnedProfiles.has(b.id);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
    }
    // For all other cases, always sort A-Z
    return a.name.localeCompare(b.name);
  });
  
  // Filter profiles by search and favorites filter
  const filteredProfiles = sortedDisplayedProfiles.filter(profile => {
    // Search filter - check both left (global search) and right (local search) queries
    const searchQuery = leftSearchQuery || rightSearchQuery;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = profile.name.toLowerCase().includes(query) || 
                           profile.handle.toLowerCase().includes(query) ||
                           profile.platform.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    
    // Favorite filter (only in favorite mode)
    if (pinOrFavoriteMode === 'favorite' && showFavoritesOnly) {
      return favoriteProfiles.has(profile.id);
    }
    
    return true;
  });

  // Sort groups based on mode:
  // - pin mode: pins first, then A-Z
  // - favorite mode: maintain A-Z order always (favorites don't change position)
  // - none mode: just A-Z
  const sortedGroups = [...groups].sort((a, b) => {
    if (pinOrFavoriteMode === 'pin') {
      const aIsPinned = pinnedGroups.has(a.id);
      const bIsPinned = pinnedGroups.has(b.id);
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
    }
    // For favorite mode and none mode, always sort A-Z
    return a.name.localeCompare(b.name);
  });
  
  // Filter groups by search and favorites filter
  const filteredGroups = sortedGroups.filter(group => {
    // Search filter
    if (leftSearchQuery) {
      const query = leftSearchQuery.toLowerCase();
      const matchesSearch = group.name.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    
    // Favorite filter (only in favorite mode)
    if (pinOrFavoriteMode === 'favorite' && showFavoritesOnly) {
      return favoriteGroups.has(group.id);
    }
    
    return true;
  });
  
  // Can only filter when viewing "all profiles"
  const canFilter = viewingGroup === 'all';

  // Handle group change - differentiate between viewing "All profiles" and selecting a saved group
  const handleGroupChange = (group: string) => {
    setViewingGroup(group);
    setLeftSearchMode(false);
    setLeftSearchQuery('');
    
    // Reset duplicate group warning when changing groups
    setDuplicateGroupWarned(false);
    
    // Stage-specific behavior when clicking "All profiles"
    if (group === 'all') {
      if (groupSelectionStage === 'stage01') {
        // Stage 01: Open panel with NO SPs selected
        setSelectedProfiles(new Set());
        setIsSelectionMode(false);
      } else {
        // Stage 02 & 03: Open panel and activate "All" group with all SPs selected
        const allIds = allSocialProfiles.map(p => p.id);
        setSelectedProfiles(new Set(allIds));
        setIsSelectionMode(true);
        setActiveGroup('all');
        
        // Notify parent immediately
        if (onGroupChange) {
          onGroupChange('all', 'All profiles', allIds);
        }
      }
    } else {
      // Selecting a saved group
      setSelectedProfiles(new Set());
      setIsSelectionMode(false);
      setActiveGroup(group);
      
      // Notify parent component to update navbar
      if (onGroupChange) {
        const groupData = groups.find(g => g.id === group);
        const profileIds = groupProfiles[group as keyof typeof groupProfiles] || [];
        onGroupChange(group, groupData?.name || '', profileIds);
      }
    }
  };

  const toggleProfile = (id: string, skipSmartDetection = false) => {
    // Only allow selection when viewing "all profiles"
    if (!canFilter) return;
    
    const newSelected = new Set(selectedProfiles);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedProfiles(newSelected);
    setIsSelectionMode(newSelected.size > 0);
    
    // Reset duplicate group warning when selection changes
    setDuplicateGroupWarned(false);
    
    // Smart Group Detection: Check if selected profiles match an existing group
    if (!skipSmartDetection && newSelected.size > 0) {
      const selectedArray = Array.from(newSelected).sort();
      
      // In Stage 02 & 03, first check if "All profiles" is selected
      if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
        const allProfileIds = allSocialProfiles.map(p => p.id).sort();
        
        if (selectedArray.length === allProfileIds.length &&
            selectedArray.every((id, index) => id === allProfileIds[index])) {
          // All profiles selected! Activate "All" group
          if (onGroupChange) {
            setActiveGroup('all');
            onGroupChange('all', 'All profiles', Array.from(newSelected), true);
            return;
          }
        }
      }
      
      // Check each group (except 'all') to see if it matches the selection
      let foundMatch = false;
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'all' || groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue; // Skip if not an array
        
        const groupProfilesSorted = [...profileIds].sort();
        
        // Check if arrays are equal (same profiles, same count)
        if (selectedArray.length === groupProfilesSorted.length &&
            selectedArray.every((id, index) => id === groupProfilesSorted[index])) {
          // Found a matching group! Activate it instead of creating unsaved selection
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            return;
          }
        }
      }
      
      // No match found - set activeGroup and create unsaved selection
      if (!foundMatch) {
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
          setActiveGroup('all');
        } else if (groupSelectionStage === 'stage01') {
          // Stage 01: deselect the active group when building an unsaved selection
          setActiveGroup('');
        }
        if (onUnsavedSelection) {
          onUnsavedSelection(Array.from(newSelected));
        }
      }
    } else {
      // No selection or detection skipped
      if (newSelected.size === 0) {
        // Nothing selected - reset to 'all' in Stage 02/03
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
          setActiveGroup('all');
        }
      } else if (onUnsavedSelection) {
        // Create unsaved selection
        if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
          setActiveGroup('all');
        } else if (groupSelectionStage === 'stage01') {
          // Stage 01: deselect the active group when building an unsaved selection
          setActiveGroup('');
        }
        onUnsavedSelection(Array.from(newSelected));
      }
    }
  };

  const selectAll = () => {
    // Only allow when viewing "all profiles"
    if (!canFilter) return;
    
    const allIds = filteredProfiles.map(p => p.id);
    const newSelected = new Set(allIds);
    setSelectedProfiles(newSelected);
    setIsSelectionMode(true);
    
    // Reset duplicate group warning when selection changes
    setDuplicateGroupWarned(false);
    
    // Behavior depends on the group selection stage
    if (groupSelectionStage === 'stage01') {
      // STAGE 01: Check if selection matches any existing group (including one with all SPs)
      const selectedArray = Array.from(newSelected).sort();
      let foundMatch = false;
      
      // Check each group (including 'all' if it exists) to see if it matches the selection
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue; // Skip if not an array
        
        const groupProfilesSorted = [...profileIds].sort();
        
        // Check if arrays are equal (same profiles, same count)
        if (selectedArray.length === groupProfilesSorted.length &&
            selectedArray.every((id, index) => id === groupProfilesSorted[index])) {
          // Found a matching group! Activate it
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            break;
          }
        }
      }
      
      // No match found - create unsaved selection
      if (!foundMatch) {
        // Stage 01: deselect the active group when building an unsaved selection
        setActiveGroup('');
        if (onUnsavedSelection) {
          onUnsavedSelection(allIds);
        }
      }
    } else if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
      // STAGE 02 & 03: Try to detect "All" group first, then smart detection, then unsaved
      const selectedArray = Array.from(newSelected).sort();
      const allProfileIds = allSocialProfiles.map(p => p.id).sort();
      
      // Check if all profiles are selected (match "All" group)
      if (selectedArray.length === allProfileIds.length &&
          selectedArray.every((id, index) => id === allProfileIds[index])) {
        // All profiles selected! Activate "All" group
        if (onGroupChange) {
          setActiveGroup('all');
          onGroupChange('all', 'All profiles', allIds, true);
        }
        return;
      }
      
      // Not all profiles - check if it matches another existing group
      let foundMatch = false;
      for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
        if (groupKey === 'all' || groupKey === 'saved') continue;
        if (!Array.isArray(profileIds)) continue; // Skip if not an array
        
        const groupProfilesSorted = [...profileIds].sort();
        
        if (selectedArray.length === groupProfilesSorted.length &&
            selectedArray.every((id, index) => id === groupProfilesSorted[index])) {
          // Found a matching group!
          const matchedGroup = groups.find(g => g.id === groupKey);
          if (matchedGroup && onGroupChange) {
            setActiveGroup(groupKey);
            onGroupChange(groupKey, matchedGroup.name, profileIds, true);
            foundMatch = true;
            break;
          }
        }
      }
      
      // No match found - create unsaved selection
      if (!foundMatch && onUnsavedSelection) {
        onUnsavedSelection(allIds);
      }
    } else {
      // Fallback: Stage 02 behavior (for backward compatibility)
      const selectedArray = Array.from(newSelected).sort();
      const allProfileIds = allSocialProfiles.map(p => p.id).sort();
      
      if (selectedArray.length === allProfileIds.length &&
          selectedArray.every((id, index) => id === allProfileIds[index])) {
        if (onGroupChange) {
          setActiveGroup('all');
          onGroupChange('all', 'All profiles', allIds, true);
        }
      } else if (onUnsavedSelection) {
        onUnsavedSelection(allIds);
      }
    }
  };

  // Handle clicking on a profile to focus it in navbar
  const handleProfileClick = (profileId: string) => {
    // When clicking a profile (not in "All profiles" view), keep the group active 
    // but focus on the clicked profile in the navbar
    if (!canFilter && onProfileFocus) {
      onProfileFocus(profileId);
      onClose?.();
    }
  };

  const unselectAll = () => {
    // Keep at least the first profile selected
    if (!canFilter || filteredProfiles.length === 0) return;
    
    const firstProfileId = filteredProfiles[0].id;
    const newSelected = new Set([firstProfileId]);
    setSelectedProfiles(newSelected);
    setIsSelectionMode(true);
    
    // Reset duplicate group warning when selection changes
    setDuplicateGroupWarned(false);
    
    // Stage 01: deselect the active group when building an unsaved selection
    if (groupSelectionStage === 'stage01') {
      setActiveGroup('');
    }
    
    // Notify parent about unsaved selection with just the first profile
    if (onUnsavedSelection) {
      onUnsavedSelection([firstProfileId]);
    }
  };

  const allSelected = canFilter && selectedProfiles.size === filteredProfiles.length && filteredProfiles.length > 0;
  const someSelected = canFilter && selectedProfiles.size > 0 && selectedProfiles.size < filteredProfiles.length;

  // Get group display name
  const getGroupDisplayName = () => {
    const group = groups.find(g => g.id === activeGroup);
    return group ? group.name : '';
  };

  const exitLeftSearch = () => {
    setLeftSearchMode(false);
    setLeftSearchQuery('');
  };

  const exitRightSearch = () => {
    setRightSearchMode(false);
    setRightSearchQuery('');
  };

  const exitGlobalSearch = () => {
    if (!globalSearchMode) return;
    
    if (selectedProfiles.size === 0) {
      // Nothing selected: restore the full saved state.
      setIsGlobalSearchActive(false);
      setViewingGroup(savedViewingGroup || 'all');
      setSelectedProfiles(savedSelectedProfiles || new Set());
      setActiveGroup(savedActiveGroup || 'all');
      setSavedViewingGroup(null);
      setSavedSelectedProfiles(null);
      setSavedActiveGroup(null);
    } else {
      // Profiles selected (unsaved selection): exit search mode and preserve selection.
      // Stay in "all" view so the user can see all their checked SPs.
      setIsGlobalSearchActive(false);
      setSavedViewingGroup(null);
      setSavedSelectedProfiles(null);
      setSavedActiveGroup(null);
    }
  };

  // Check if a group exists with the exact same selection
  const checkDuplicateGroup = () => {
    const selectedArray = Array.from(selectedProfiles).sort();
    
    for (const group of groups) {
      // Skip "All" group
      if (group.id === 'all') continue;
      
      const groupProfileIds = groupProfiles[group.id] || [];
      const groupArray = [...groupProfileIds].sort();
      
      // Check if arrays are equal
      if (selectedArray.length === groupArray.length && 
          selectedArray.every((id, index) => id === groupArray[index])) {
        return true;
      }
    }
    
    return false;
  };

  // Handle save selection with duplicate check
  const handleSaveSelection = () => {
    const hasDuplicate = checkDuplicateGroup();
    
    if (hasDuplicate && !duplicateGroupWarned) {
      // First click - warn user (just change label)
      setDuplicateGroupWarned(true);
    } else {
      // Second click or no duplicate - proceed and reset
      onSaveSelection?.();
      if (duplicateGroupWarned) {
        setDuplicateGroupWarned(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-0 shadow-lg">
      {/* Unified Search Header - Top of entire dropdown */}
      <div className="bg-white mb-[-1px] relative shrink-0 w-full rounded-t-[4px]">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-t border-l border-r border-b border-solid inset-0 pointer-events-none rounded-t-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
            <div className="flex gap-[8px] items-center flex-1">
              <SearchIcon />
              <input
                ref={leftSearchInputRef}
                type="text"
                value={leftSearchQuery}
                onChange={(e) => {
                  setLeftSearchQuery(e.target.value);
                  if (e.target.value && !leftSearchMode) {
                    setLeftSearchMode(true);
                  }
                }}
                placeholder="Start typing ..."
                className="flex-1 font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] outline-none bg-transparent placeholder:text-[#a0a0a0]"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') exitLeftSearch();
                }}
              />
            </div>
            {leftSearchQuery && (
              <button
                onClick={exitLeftSearch}
                className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
              >
                <CloseIcon />
              </button>
            )}
            {pinOrFavoriteMode === 'favorite' && (
              <StarIcon 
                filled={showFavoritesOnly}
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-0">
        {/* Left Panel - Groups */}
        <div className="bg-white rounded-bl-[4px] border-t border-l border-r border-b border-[#e0e0e0] w-[320px]">
        <div className="flex flex-col h-[364px]">
          {/* Left Panel Header - 32px */}
          <div className="h-[32px] relative shrink-0 w-full border-b border-[#e0e0e0]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <button 
                  onClick={() => onOpenManageModal?.()} 
                  className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] cursor-pointer hover:text-[#404040] transition-colors whitespace-nowrap"
                >
                  Manage profiles & groups
                </button>
              </div>
            </div>
          </div>

          {/* Groups List */}
          <div className="flex-1 overflow-y-auto">
            
            {/* All Profiles */}
            {(!leftSearchQuery || 'all profiles'.includes(leftSearchQuery.toLowerCase())) && (
              <div 
                className={`flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f5f5f5] border-b border-[#e0e0e0] relative ${
                  viewingGroup === 'all' ? 'bg-[#f0f0f0]' : ''
                }`}
                onClick={() => handleGroupChange('all')}
              >
                <div className="flex-1 flex flex-col gap-[6px]">
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                    All profiles
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                    {allSocialProfiles.length} profiles
                  </div>
                </div>
                <div className="flex gap-[2px] items-center">
                  {(groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') && (
                    <>
                      {activeGroup === 'all' ? <RadioOnIcon /> : <RadioOffIcon />}
                    </>
                  )}
                  {groupSelectionStage === 'stage01' && (
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]">
                          <div className="absolute inset-[31.54%_20%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.90769">
                              <path clipRule="evenodd" d={svgPathsDefault.p29af5a80} fill="#606060" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Filtered Groups */}
            {(() => {
              // Separate pinned and non-pinned groups when in pin mode
              if (pinOrFavoriteMode === 'pin') {
                const pinnedGroupsList = filteredGroups.filter(g => pinnedGroups.has(g.id));
                const nonPinnedGroupsList = filteredGroups.filter(g => !pinnedGroups.has(g.id));
                
                return (
                  <>
                    {/* Pinned Groups */}
                    {pinnedGroupsList.map((group) => (
                      <div 
                        key={group.id}
                        className="flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => handleGroupChange(group.id)}
                      >
                        <div className="flex-1 flex items-center gap-[8px]">
                          {group.avatar ? (
                            <img src={group.avatar} alt={group.name} className="rounded-[6px] size-[32px] border border-[#e0e0e0] object-cover" />
                          ) : (
                            <div className="bg-[#c4c4c4] flex items-center justify-center rounded-[6px] size-[32px] border border-white">
                              <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px]">
                                {group.badge}
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col gap-[6px]">
                            <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                              {group.name}
                            </div>
                            <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                              {group.profileCount} Social profiles
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-[2px] items-center">
                          <PinIcon 
                            filled={pinnedGroups.has(group.id)}
                            onClick={() => onTogglePinGroup?.(group.id)}
                          />
                          {activeGroup === group.id ? <RadioOnIcon /> : <RadioOffIcon />}
                        </div>
                      </div>
                    ))}
                    
                    {/* Border after pinned groups */}
                    {pinnedGroupsList.length > 0 && nonPinnedGroupsList.length > 0 && (
                      <div className="border-b border-[#e0e0e0]" />
                    )}
                    
                    {/* Non-Pinned Groups */}
                    {nonPinnedGroupsList.map((group) => (
                      <div 
                        key={group.id}
                        className="flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => handleGroupChange(group.id)}
                      >
                        <div className="flex-1 flex items-center gap-[8px]">
                          {group.avatar ? (
                            <img src={group.avatar} alt={group.name} className="rounded-[6px] size-[32px] border border-[#e0e0e0] object-cover" />
                          ) : (
                            <div className="bg-[#c4c4c4] flex items-center justify-center rounded-[6px] size-[32px] border border-white">
                              <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px]">
                                {group.badge}
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col gap-[6px]">
                            <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                              {group.name}
                            </div>
                            <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                              {group.profileCount} Social profiles
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-[2px] items-center">
                          <PinIcon 
                            filled={pinnedGroups.has(group.id)}
                            onClick={() => onTogglePinGroup?.(group.id)}
                          />
                          {activeGroup === group.id ? <RadioOnIcon /> : <RadioOffIcon />}
                        </div>
                      </div>
                    ))}
                  </>
                );
              }
              
              // For favorite and none modes, render all groups normally
              return filteredGroups.map((group) => (
                <div 
                  key={group.id}
                  className="flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                  onClick={() => handleGroupChange(group.id)}
                >
                  <div className="flex-1 flex items-center gap-[8px]">
                    {group.avatar ? (
                      <img src={group.avatar} alt={group.name} className="rounded-[6px] size-[32px] border border-[#e0e0e0] object-cover" />
                    ) : (
                      <div className="bg-[#c4c4c4] flex items-center justify-center rounded-[6px] size-[32px] border border-white">
                        <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px]">
                          {group.badge}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-[6px]">
                      <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                        {group.name}
                      </div>
                      <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                        {group.profileCount} Social profiles
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    {pinOrFavoriteMode === 'pin' && (
                      <PinIcon 
                        filled={pinnedGroups.has(group.id)}
                        onClick={() => onTogglePinGroup?.(group.id)}
                      />
                    )}
                    {pinOrFavoriteMode === 'favorite' && (
                      <StarIcon 
                        filled={favoriteGroups.has(group.id)}
                        onClick={() => onToggleFavoriteGroup?.(group.id)}
                      />
                    )}
                    {activeGroup === group.id ? <RadioOnIcon /> : <RadioOffIcon />}
                  </div>
                </div>
              ));
            })()}

            {/* Empty state: Create your first group (cohorts that can create groups but have none) */}
            {!leftSearchQuery && !showFavoritesOnly && groups.length === 0 && canCreateGroups && (
              <div className="flex flex-col items-center justify-center px-[16px] py-[28px] gap-[16px]">
                <div className="relative shrink-0 size-[80px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" fill="#D9D9D9" r="40" />
                  </svg>
                </div>
                <div className="font-serif italic text-[#606060] text-[20px] leading-[12px] tracking-[-0.3px] text-center">
                  Create your first group
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] text-center">
                  <p className="mb-0">Create your first group to organize social profiles,</p>
                  <p>collaborate with others and build campaigns.</p>
                </div>
                <button 
                  onClick={() => onSaveSelection?.()} 
                  className="h-[32px] w-full rounded-[3px] border border-[#606060] flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                >
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[14px] tracking-[-0.3px]">
                    Create a new group
                  </div>
                </button>
              </div>
            )}

            {/* Empty state: Unlock the power of groups (cohorts that cannot create groups - Launch) */}
            {!leftSearchQuery && !showFavoritesOnly && groups.length === 0 && !canCreateGroups && (
              <div className="flex flex-col items-center justify-center px-[16px] py-[28px] gap-[16px]">
                <div className="relative shrink-0 size-[80px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" fill="#D9D9D9" r="40" />
                  </svg>
                </div>
                <div className="font-serif italic text-[#606060] text-[20px] leading-[12px] tracking-[-0.3px] text-center">
                  Unlock the power of groups
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] text-center">
                  <p className="mb-0">Use groups to organize social profiles,</p>
                  <p>collaborate with others and build campaigns.</p>
                </div>
                <button 
                  onClick={() => onOpenCreateGroupModal?.()} 
                  className="h-[32px] w-full rounded-[3px] border border-[#606060] flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] transition-colors"
                >
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[14px] tracking-[-0.3px]">
                    Upgrade my plan
                  </div>
                </button>
              </div>
            )}
            
            {/* Empty states */}
            {leftSearchQuery && filteredGroups.length === 0 && (
              <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                <div className="font-serif text-[#a0a0a0] text-[14px] italic leading-[20px]">
                  No groups found
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#c0c0c0] text-[12px] text-center">
                  Try a different search term
                </div>
              </div>
            )}
            
            {!leftSearchQuery && showFavoritesOnly && filteredGroups.length === 0 && (
              <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                <div className="font-serif text-[#a0a0a0] text-[14px] italic leading-[20px]">
                  No favorite groups yet
                </div>
                <div className="font-['Gilroy:Medium',sans-serif] text-[#c0c0c0] text-[12px] text-center">
                  Star groups to add them to favorites
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Social Profiles */}
      <div className={`rounded-br-[4px] border-t border-r border-b border-[#e0e0e0] w-[320px] relative ${
        viewingGroup === 'all' ? 'bg-white' : 'bg-[#f0f0f0]'
      }`}>
        <div className="flex flex-col h-[364px]">
          {/* Right Panel Header - 32px */}
          <div className="h-[32px] relative shrink-0 w-full border-b border-[#e0e0e0]">
            <div className="flex flex-row items-center justify-between size-full">
              <div className="content-stretch flex items-center p-[12px] relative">
                {canFilter ? (
                  filteredProfiles.length > 0 && (
                    <div className="flex gap-[8px] items-center">
                      <button
                        onClick={allSelected ? unselectAll : selectAll}
                        className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] hover:text-[#404040] transition-colors cursor-pointer"
                      >
                        Select all
                      </button>
                      {selectedProfiles.size > 0 && (
                        <>
                          <span className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px]">/</span>
                          <button
                            onClick={unselectAll}
                            className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] hover:text-[#404040] transition-colors cursor-pointer"
                          >
                            Unselect All
                          </button>
                        </>
                      )}
                    </div>
                  )
                ) : (
                  <div className="flex gap-[8px] items-center">
                    <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px]">
                      {getGroupDisplayName()}
                    </div>
                  </div>
                )}
              </div>
              {!canFilter && (
                <div className="content-stretch flex items-center p-[12px] relative">
                  <button className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[12px] leading-[12px] tracking-[-0.3px] cursor-pointer hover:text-[#404040] transition-colors">
                    Edit group
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profiles List */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col">
              {filteredProfiles.map((profile) => {
                const isSelected = selectedProfiles.has(profile.id);
                // Check if profile is unsupported in current view
                const isUnsupported = currentView === 'calendar' && profile.platform === 'youtube';
                // Disable checkbox if this is the only selected profile
                const isCheckboxDisabled = canFilter && selectedProfiles.size === 1 && isSelected;
                
                return (
                  <div
                    key={profile.id}
                    className={`flex items-center px-[12px] py-[8px] transition-colors ${
                      isCheckboxDisabled 
                        ? '' 
                        : viewingGroup === 'all' 
                          ? 'hover:bg-[#f5f5f5] cursor-pointer' 
                          : 'hover:bg-[#e5e5e5] cursor-pointer'
                    }`}
                    onClick={() => {
                      if (isCheckboxDisabled) return; // Prevent toggling if it's the last selected
                      canFilter ? toggleProfile(profile.id) : handleProfileClick(profile.id);
                    }}
                  >
                    <div className="flex-1 flex items-center gap-[8px]">
                      <div 
                        className={isUnsupported ? 'opacity-40' : ''}
                        ref={el => avatarRefs.current.set(profile.id, el as HTMLDivElement)}
                        onMouseEnter={() => isUnsupported ? setHoveredUnsupportedProfile(profile.id) : null}
                        onMouseLeave={() => isUnsupported ? setHoveredUnsupportedProfile(null) : null}
                      >
                        <ProfileAvatar platform={profile.platform} hasBadToken={profile.hasBadToken} name={profile.name} avatar={profile.avatar} />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                          {profile.name}
                        </div>
                        <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px]">
                          {profile.handle}
                        </div>
                      </div>
                    </div>
                    {canFilter && (
                      <div className="flex gap-[4px] items-center">
                        {pinOrFavoriteMode === 'pin' && (
                          <PinIcon 
                            filled={pinnedProfiles.has(profile.id)}
                            onClick={() => onTogglePinProfile?.(profile.id)}
                          />
                        )}
                        {pinOrFavoriteMode === 'favorite' && (
                          <StarIcon 
                            filled={favoriteProfiles.has(profile.id)}
                            onClick={() => onToggleFavoriteProfile?.(profile.id)}
                          />
                        )}
                        <div className={isCheckboxDisabled ? 'opacity-30 cursor-not-allowed' : ''}>
                          {isSelected ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Empty states */}
              {leftSearchQuery && filteredProfiles.length === 0 && (
                <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                  <div className="font-serif text-[#a0a0a0] text-[14px] italic leading-[20px]">
                    No social profiles found
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#c0c0c0] text-[12px] text-center">
                    Try a different search term
                  </div>
                </div>
              )}
              
              {!leftSearchQuery && !rightSearchQuery && showFavoritesOnly && filteredProfiles.length === 0 && (
                <div className="flex flex-col items-center justify-center p-[32px] gap-[8px]">
                  <div className="font-serif text-[#a0a0a0] text-[14px] italic leading-[20px]">
                    No favorite profiles yet
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#c0c0c0] text-[12px] text-center">
                    Star profiles to add them to favorites
                  </div>
                </div>
              )}

              {/* Unsupported Profile Tooltips */}
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
          </div>

          {/* Save Button */}
          {groupSelectionStage && canFilter && selectedProfiles.size > 1 && !rightSearchMode && (() => {
            // For Stage 02 & 03: hide button when all SPs are selected
            if ((groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') && 
                selectedProfiles.size === allSocialProfiles.length) {
              return null;
            }
            
            // For Stage 02 & 03: No 50-profile limit, always show active button
            if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
              const buttonLabel = duplicateGroupWarned 
                ? "Group already exists, continue ?" 
                : "Save selection as a group";
              
              return (
                <div 
                  className="bg-[#505050] text-white py-[10px] px-[12px] text-center cursor-pointer hover:bg-[#606060] transition-colors"
                  onClick={handleSaveSelection}
                >
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px]">
                    {buttonLabel}
                  </div>
                </div>
              );
            }
            
            // For Stage 01: Apply 50-profile limit
            return selectedProfiles.size > 50 ? (
              // Disabled state when more than 50 profiles
              <div className="bg-[#e0e0e0] text-[#a0a0a0] py-[10px] px-[12px] text-center cursor-not-allowed">
                <div className="font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px]">
                  Groups are limited to 50 social profiles
                </div>
              </div>
            ) : (
              // Active state when 50 or fewer profiles
              (() => {
                const buttonLabel = duplicateGroupWarned 
                  ? "Group already exists, continue ?" 
                  : "Save selection as a group";
                
                return (
                  <div 
                    className="bg-[#505050] text-white py-[10px] px-[12px] text-center cursor-pointer hover:bg-[#606060] transition-colors"
                    onClick={handleSaveSelection}
                  >
                    <div className="font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.3px]">
                      {buttonLabel}
                    </div>
                  </div>
                );
              })()
            );
          })()}
        </div>
      </div>
      </div>
    </div>
  );
}