import { useEffect, useRef, useState, useCallback } from 'react';
import { ProfileManager } from '../profiles/ProfileManager';
import type { SocialProfile, GroupItem } from '../../../data/profiles';

interface GroupSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGroupChange: (groupId: string, name: string, profileIds: string[], autoDetected?: boolean) => void;
  onUnsavedSelection: (profileIds: string[]) => void;
  onProfileFocus: (profileId: string) => void;
  onSaveSelection: () => void;
  onOpenManageModal: () => void;
  currentGroup: string;
  currentProfileIds: string[];
  selectorRef: React.RefObject<HTMLDivElement>;
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
  allSocialProfiles: SocialProfile[];
  groups: GroupItem[];
  groupProfiles: Record<string, string[]>;
  groupSelectionStage?: 'stage01' | 'stage02' | 'stage03';
  globalSearchMode?: boolean;
  canCreateGroups?: boolean;
  onOpenCreateGroupModal?: () => void;
}

export function GroupSelectionModal({ 
  isOpen, 
  onClose, 
  onGroupChange, 
  onUnsavedSelection,
  onProfileFocus,
  onSaveSelection,
  onOpenManageModal,
  currentGroup, 
  currentProfileIds, 
  selectorRef,
  currentView,
  sortProfilesByAvailability,
  pinOrFavoriteMode = 'pin',
  pinnedGroups,
  pinnedProfiles,
  favoriteGroups,
  favoriteProfiles,
  onTogglePinGroup,
  onTogglePinProfile,
  onToggleFavoriteGroup,
  onToggleFavoriteProfile,
  // Data props
  allSocialProfiles,
  groups,
  groupProfiles,
  groupSelectionStage,
  globalSearchMode,
  canCreateGroups,
  onOpenCreateGroupModal
}: GroupSelectionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Calculate position relative to SP selector
  useEffect(() => {
    if (isOpen && selectorRef?.current) {
      const rect = selectorRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8, // 8px gap below the selector
        left: rect.left
      });
    }
  }, [isOpen, selectorRef]);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleGroupChange = useCallback((groupId: string, name: string, profileIds: string[], autoDetected?: boolean) => {
    onGroupChange(groupId, name, profileIds, autoDetected);
  }, [onGroupChange]);

  const handleUnsavedSelection = useCallback((profileIds: string[]) => {
    onUnsavedSelection(profileIds);
  }, [onUnsavedSelection]);

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

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-50"
      ref={modalRef}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      <div className="shadow-[0px_8px_40px_0px_rgba(29,29,27,0.16)] rounded-[12px]">
        <ProfileManager 
          onGroupChange={handleGroupChange}
          onUnsavedSelection={handleUnsavedSelection}
          onProfileFocus={onProfileFocus}
          onSaveSelection={onSaveSelection}
          initialGroup={currentGroup}
          initialProfileIds={currentProfileIds}
          onClose={onClose}
          currentView={currentView}
          sortProfilesByAvailability={sortProfilesByAvailability}
          pinOrFavoriteMode={pinOrFavoriteMode}
          pinnedGroups={pinnedGroups}
          pinnedProfiles={pinnedProfiles}
          favoriteGroups={favoriteGroups}
          favoriteProfiles={favoriteProfiles}
          onTogglePinGroup={onTogglePinGroup}
          onTogglePinProfile={onTogglePinProfile}
          onToggleFavoriteGroup={onToggleFavoriteGroup}
          onToggleFavoriteProfile={onToggleFavoriteProfile}
          onOpenManageModal={onOpenManageModal}
          onOpenCreateGroupModal={onOpenCreateGroupModal}
          // Data props
          allSocialProfiles={allSocialProfiles}
          groups={groups}
          groupProfiles={groupProfiles}
          groupSelectionStage={groupSelectionStage}
          globalSearchMode={globalSearchMode}
          canCreateGroups={canCreateGroups}
        />
      </div>
    </div>
  );
}