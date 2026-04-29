import { useState, useRef, useMemo } from 'react';
import { FunctionalSPSelector } from '../navigation/FunctionalSPSelector';
import { GroupSelectionModal } from '../groups/GroupSelectionModal';
import {
  allSocialProfiles as excelProfiles,
  groups as excelGroups,
  groupProfiles as excelGroupProfiles,
} from '../../../data/profiles';
import {
  launchProfiles,
  launchGroups,
  launchGroupProfiles,
  trialProfiles,
  trialGroups,
  trialGroupProfiles,
} from '../../../data/cohortProfiles';

interface PlaceholderPageProps {
  l1Label: string;
  l2Label?: string;
  userCohort: 'launch' | 'excel' | 'trial';
}

export function PlaceholderPage({ l1Label, l2Label, userCohort }: PlaceholderPageProps) {
  const { profiles, groups, groupProfiles } = useMemo(() => {
    switch (userCohort) {
      case 'launch':
        return { profiles: launchProfiles, groups: launchGroups, groupProfiles: launchGroupProfiles };
      case 'trial':
        return { profiles: trialProfiles, groups: trialGroups, groupProfiles: trialGroupProfiles };
      default:
        return { profiles: excelProfiles, groups: excelGroups, groupProfiles: excelGroupProfiles };
    }
  }, [userCohort]);

  const initialGroup = groups.length > 0 ? groups[0].id : 'all';
  const initialProfileIds = groups.length > 0
    ? (groupProfiles[initialGroup] || [])
    : profiles.map(p => p.id);

  const [selectedItem, setSelectedItem] = useState<string | null>(
    groups.length > 0 ? 'group' : (profiles[0]?.id || null)
  );
  const [isGroupSelectorOpen, setIsGroupSelectorOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(initialGroup);
  const [currentProfileIds, setCurrentProfileIds] = useState(initialProfileIds);
  const [isUnsavedSelection, setIsUnsavedSelection] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const profilesInGroup = profiles.filter(p => currentProfileIds.includes(p.id));
  const currentGroupData = groups.find(g => g.id === currentGroup) ?? {
    id: 'all',
    name: 'All',
    profileCount: profiles.length,
    badge: '...',
    avatar: undefined,
  };

  const pageTitle = l2Label ?? l1Label;

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
      {/* Header */}
      <div className="content-stretch flex items-center gap-[16px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] tracking-[-0.32px] whitespace-nowrap">
          <p className="leading-[32px]">{pageTitle}</p>
        </div>
        <div ref={selectorRef} className="relative shrink-0 h-[64px] flex-1 min-w-0">
          <FunctionalSPSelector
            currentGroup={currentGroup}
            groupBadge={currentGroupData.badge}
            groupAvatar={currentGroupData.avatar}
            profilesInGroup={profilesInGroup}
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
            onOpenGroupSelector={() => setIsGroupSelectorOpen(true)}
            isUnsavedSelection={isUnsavedSelection}
            onSaveSelection={() => {}}
            groupSelectionStage="stage01"
            hasGroups={groups.length > 0}
          />
        </div>
      </div>

      {/* Placeholder block */}
      <div className="flex items-center justify-center w-full flex-1">
        <div className="border-2 border-dashed border-[#c0cfd8] rounded-[16px] px-[48px] py-[40px] text-center max-w-[520px]">
          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center mb-[16px]">
            <p className="leading-[48px]">🚧</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[18px] text-center tracking-[-0.18px] mb-[10px]">
            <p className="leading-[24px]">{pageTitle}</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[13px] text-center tracking-[-0.052px] mb-[16px]">
            <p className="leading-[20px]">Content for this page needs to be implemented.</p>
          </div>
          <div className="inline-flex items-center gap-[6px] bg-[#ebeef0] rounded-[6px] px-[12px] py-[6px]">
            <p className="font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#97acbd] tracking-[0.3px] uppercase">{l1Label}</p>
            {l2Label && (
              <>
                <p className="text-[#c0cfd8] text-[11px]">›</p>
                <p className="font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#76869a] tracking-[0.3px] uppercase">{l2Label}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <GroupSelectionModal
        isOpen={isGroupSelectorOpen}
        onClose={() => setIsGroupSelectorOpen(false)}
        onGroupChange={(groupId, _name, profileIds) => {
          setCurrentGroup(groupId);
          setCurrentProfileIds(profileIds);
          setSelectedItem('group');
          setIsUnsavedSelection(false);
          setIsGroupSelectorOpen(false);
        }}
        onUnsavedSelection={(profileIds) => {
          setCurrentProfileIds(profileIds);
          setIsUnsavedSelection(true);
          setSelectedItem('group');
        }}
        onProfileFocus={(profileId) => setSelectedItem(profileId)}
        onSaveSelection={() => {}}
        onOpenManageModal={() => {}}
        currentGroup={currentGroup}
        currentProfileIds={currentProfileIds}
        selectorRef={selectorRef}
        allSocialProfiles={profiles}
        groups={groups}
        groupProfiles={groupProfiles}
        canCreateGroups={userCohort !== 'launch'}
      />
    </div>
  );
}
