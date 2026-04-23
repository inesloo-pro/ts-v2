import { useState, useRef, useMemo } from 'react';
import { Search, Plus, Heart, MessageCircle, Eye } from 'lucide-react';
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

interface CampaignMetric {
  icon: React.ReactNode;
  value: string;
}

interface Campaign {
  id: string;
  title: string;
  type: 'Stories' | 'Posts' | 'Reels';
  mode: 'Auto' | 'Manual';
  count: number;
  countLabel: string;
  metrics: CampaignMetric[];
  imageCols: number;
  imageRows: number;
}

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Summer Stories — Lumina Co.',
    type: 'Stories',
    mode: 'Auto',
    count: 500,
    countLabel: 'stories',
    metrics: [
      { icon: <Eye size={10} />, value: '187.1' },
      { icon: <MessageCircle size={10} />, value: '158.2' },
      { icon: <Heart size={10} />, value: '2.87%' },
    ],
    imageCols: 2,
    imageRows: 2,
  },
  {
    id: '2',
    title: 'Q4 Posts — Velora Studio',
    type: 'Posts',
    mode: 'Auto',
    count: 103,
    countLabel: 'posts',
    metrics: [
      { icon: <Heart size={10} />, value: '3.9K' },
      { icon: <MessageCircle size={10} />, value: '164' },
      { icon: <Eye size={10} />, value: '1%' },
    ],
    imageCols: 2,
    imageRows: 2,
  },
];

function CampaignCardImages({ cols, rows }: { cols: number; rows: number }) {
  const cells = cols * rows;
  return (
    <div
      className="w-full rounded-t-[8px] overflow-hidden bg-[#e8edf0]"
      style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, aspectRatio: '1' }}
    >
      {Array.from({ length: cells }).map((_, i) => (
        <div key={i} className="bg-[#d4dde3] border border-[#e8edf0]" />
      ))}
    </div>
  );
}

function TypeBadge({ type }: { type: Campaign['type'] }) {
  return (
    <div className="absolute top-[8px] left-[8px] flex items-center gap-[4px] bg-white rounded-[4px] px-[6px] py-[3px]">
      <div className="size-[8px] rounded-full bg-[#97acbd] shrink-0" />
      <span className="font-['Gilroy:Semibold',sans-serif] text-[10px] text-[#1d1d1b] tracking-[-0.03px]">{type}</span>
    </div>
  );
}

function ModeBadge({ mode }: { mode: Campaign['mode'] }) {
  return (
    <div className="absolute top-[8px] right-[8px] bg-white rounded-[4px] px-[6px] py-[3px]">
      <span className="font-['Gilroy:Semibold',sans-serif] text-[10px] text-[#76869a] tracking-[-0.03px]">{mode}</span>
    </div>
  );
}

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="bg-white rounded-[8px] border border-[#e6ecf4] overflow-hidden cursor-pointer hover:shadow-sm transition-shadow">
      <div className="relative">
        <CampaignCardImages cols={campaign.imageCols} rows={campaign.imageRows} />
        <TypeBadge type={campaign.type} />
        <ModeBadge mode={campaign.mode} />
      </div>
      <div className="p-[16px] flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Gilroy:Semibold',sans-serif] text-[13px] leading-[16px] text-[#1d1d1b] tracking-[-0.052px] truncate">
            {campaign.title}
          </p>
          <p className="font-['Gilroy:Medium',sans-serif] text-[11px] leading-[14px] text-[#97acbd] tracking-[-0.044px]">
            {campaign.count} {campaign.countLabel}
          </p>
        </div>
        <div className="flex items-center gap-[12px] pt-[8px] border-t border-[#f0f4f6]">
          {campaign.metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-[4px] text-[#76869a]">
              <div className="size-[14px] rounded-full bg-[#e8edf0] flex items-center justify-center shrink-0 text-[#97acbd]">
                {m.icon}
              </div>
              <span className="font-['Gilroy:Semibold',sans-serif] text-[11px] leading-[14px] text-[#1d1d1b] tracking-[-0.044px]">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CampaignsPageProps {
  userCohort: 'launch' | 'excel' | 'trial';
}

export function CampaignsPage({ userCohort }: CampaignsPageProps) {
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
  const [search, setSearch] = useState('');
  const selectorRef = useRef<HTMLDivElement>(null);

  const profilesInGroup = profiles.filter(p => currentProfileIds.includes(p.id));
  const currentGroupData = groups.find(g => g.id === currentGroup) ?? {
    id: 'all',
    name: 'All',
    profileCount: profiles.length,
    badge: '...',
    avatar: undefined,
  };

  const filteredCampaigns = MOCK_CAMPAIGNS.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-[32px] items-start p-[32px] size-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-[16px] shrink-0 w-full">
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px] whitespace-nowrap">
          My campaigns
        </p>
        <div ref={selectorRef} className="relative h-[64px] flex-1 min-w-0">
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
        <button className="flex items-center gap-[8px] h-[40px] px-[16px] bg-[#76869a] rounded-[6px] hover:opacity-80 transition-opacity shrink-0">
          <Plus size={16} color="white" strokeWidth={2} />
          <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-white tracking-[-0.112px]">
            Track a campaign
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-[8px] h-[36px] border border-[#e6ecf4] rounded-[6px] bg-white px-[12px] w-full max-w-[320px] shrink-0">
        <Search size={12} className="text-[#97acbd] shrink-0" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search a campaign"
          className="flex-1 font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] placeholder-[#c0cfd8] tracking-[-0.072px] outline-none bg-transparent"
        />
      </div>

      {/* Campaign grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,240px))] gap-[16px] w-full">
        {filteredCampaigns.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
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
