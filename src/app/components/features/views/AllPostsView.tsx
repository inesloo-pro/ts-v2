import { useState, useRef, useMemo } from 'react';
import { Download, SlidersHorizontal, X, ChevronDown, Eye, Heart, MessageCircle, Bookmark, RotateCcw, Camera, Film, LayoutGrid, Play, DollarSign, Users } from 'lucide-react';
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

// ─── Types ───────────────────────────────────────────────────────────────────

type PostTab = 'posts' | 'stories';
type PostType = 'all' | 'photo' | 'video' | 'carousel' | 'reel';
type PromoType = 'all' | 'promoted' | 'non-promoted';

interface Post {
  id: string;
  month: string;
  type: Exclude<PostType, 'all'>;
  metrics: { views: number; likes: number; comments: number; bookmarks: number };
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_POSTS: Post[] = [
  { id: 'p1', month: 'APR. 2026', type: 'photo',    metrics: { views: 0,    likes: 14,   comments: 0, bookmarks: 14  } },
  { id: 'p2', month: 'APR. 2026', type: 'video',    metrics: { views: 7700, likes: 279,  comments: 0, bookmarks: 311 } },
  { id: 'p3', month: 'APR. 2026', type: 'carousel', metrics: { views: 0,    likes: 79,   comments: 2, bookmarks: 84  } },
  { id: 'p4', month: 'APR. 2026', type: 'photo',    metrics: { views: 0,    likes: 26,   comments: 1, bookmarks: 29  } },
  { id: 'p5', month: 'APR. 2026', type: 'reel',     metrics: { views: 2300, likes: 95,   comments: 0, bookmarks: 103 } },
  { id: 'p6', month: 'APR. 2026', type: 'photo',    metrics: { views: 0,    likes: 22,   comments: 0, bookmarks: 22  } },
  { id: 'p7', month: 'APR. 2026', type: 'carousel', metrics: { views: 0,    likes: 22,   comments: 0, bookmarks: 22  } },
  { id: 'p8', month: 'APR. 2026', type: 'photo',    metrics: { views: 985,  likes: 26,   comments: 2, bookmarks: 29  } },
  { id: 'p9',  month: 'MAR. 2026', type: 'photo',    metrics: { views: 0,    likes: 0,    comments: 0, bookmarks: 0   } },
  { id: 'p10', month: 'MAR. 2026', type: 'photo',    metrics: { views: 0,    likes: 24,   comments: 6, bookmarks: 30  } },
  { id: 'p11', month: 'MAR. 2026', type: 'carousel', metrics: { views: 0,    likes: 73,   comments: 7, bookmarks: 87  } },
  { id: 'p12', month: 'MAR. 2026', type: 'reel',     metrics: { views: 2200, likes: 78,   comments: 12,bookmarks: 98  } },
  { id: 'p13', month: 'MAR. 2026', type: 'video',    metrics: { views: 0,    likes: 68,   comments: 2, bookmarks: 73  } },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatMetric(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace('.0', '')}K`;
  return String(n);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const TYPE_ICONS: Record<Post['type'], React.ReactNode> = {
  photo: <Camera size={12} />,
  video: <Film size={12} />,
  carousel: <LayoutGrid size={12} />,
  reel: <Play size={12} />,
};

function MediaTypeBadge({ type }: { type: Post['type'] }) {
  return (
    <div className="absolute top-[6px] left-[6px] bg-[#1d1d1b] rounded-[4px] p-[5px] text-white">
      {TYPE_ICONS[type]}
    </div>
  );
}

function MetricItem({ icon, value }: { icon: React.ReactNode; value: number }) {
  return (
    <div className="flex items-center gap-[3px]">
      <div className="size-[14px] rounded-full bg-[#e8edf0] flex items-center justify-center shrink-0 text-[#97acbd]">
        {icon}
      </div>
      <span className="font-['Gilroy:Semibold',sans-serif] text-[11px] leading-[14px] text-[#1d1d1b] tracking-[-0.044px]">
        {formatMetric(value)}
      </span>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-[8px] cursor-pointer group">
      <div className="relative aspect-square bg-[#d4dde3] rounded-[6px] overflow-hidden">
        <MediaTypeBadge type={post.type} />
        {/* Bottom gradient overlay with tags */}
        <div className="absolute bottom-0 left-0 right-0 h-[48px] bg-gradient-to-t from-[rgba(29,29,27,0.55)] to-transparent flex items-end gap-[4px] px-[6px] pb-[6px]">
          <div className="flex items-center gap-[3px] bg-[rgba(255,255,255,0.2)] rounded-[3px] px-[5px] py-[2px]">
            <DollarSign size={8} className="text-white" />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[8px] text-white uppercase tracking-[0.2px]">Paid</span>
          </div>
          <div className="flex items-center gap-[3px] bg-[rgba(255,255,255,0.2)] rounded-[3px] px-[5px] py-[2px]">
            <Users size={8} className="text-white" />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[8px] text-white uppercase tracking-[0.2px]">Collab</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[4px]">
        <MetricItem icon={<Eye size={8} />} value={post.metrics.views} />
        <MetricItem icon={<Heart size={8} />} value={post.metrics.likes} />
        <MetricItem icon={<MessageCircle size={8} />} value={post.metrics.comments} />
        <MetricItem icon={<Bookmark size={8} />} value={post.metrics.bookmarks} />
      </div>
    </div>
  );
}

function CheckboxRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer group">
      <div
        onClick={onChange}
        className={`size-[14px] rounded-[3px] border shrink-0 flex items-center justify-center transition-colors ${
          checked ? 'bg-[#76869a] border-[#76869a]' : 'border-[#c0cfd8] bg-white group-hover:border-[#97acbd]'
        }`}
      >
        {checked && <div className="size-[6px] rounded-[1px] bg-white" />}
      </div>
      <span className="font-['Gilroy:Medium',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px]">{label}</span>
    </label>
  );
}

function RadioRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer group" onClick={onChange}>
      <div className={`size-[14px] rounded-full border shrink-0 flex items-center justify-center transition-colors ${
        checked ? 'border-[#76869a]' : 'border-[#c0cfd8] group-hover:border-[#97acbd]'
      }`}>
        {checked && <div className="size-[7px] rounded-full bg-[#76869a]" />}
      </div>
      <span className="font-['Gilroy:Medium',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px]">{label}</span>
    </label>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px]">{title}</p>
      <div className="flex flex-col gap-[8px]">{children}</div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface AllPostsViewProps {
  userCohort: 'launch' | 'excel' | 'trial';
}

export function AllPostsView({ userCohort }: AllPostsViewProps) {
  const { profiles, groups, groupProfiles } = useMemo(() => {
    switch (userCohort) {
      case 'launch': return { profiles: launchProfiles, groups: launchGroups, groupProfiles: launchGroupProfiles };
      case 'trial':  return { profiles: trialProfiles,  groups: trialGroups,  groupProfiles: trialGroupProfiles  };
      default:       return { profiles: excelProfiles,  groups: excelGroups,  groupProfiles: excelGroupProfiles  };
    }
  }, [userCohort]);

  const initialGroup = groups.length > 0 ? groups[0].id : 'all';
  const initialProfileIds = groups.length > 0 ? (groupProfiles[initialGroup] || []) : profiles.map(p => p.id);

  const [selectedItem, setSelectedItem] = useState<string | null>(groups.length > 0 ? 'group' : (profiles[0]?.id || null));
  const [isGroupSelectorOpen, setIsGroupSelectorOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(initialGroup);
  const [currentProfileIds, setCurrentProfileIds] = useState(initialProfileIds);
  const [isUnsavedSelection, setIsUnsavedSelection] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<PostTab>('posts');
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [postTypes, setPostTypes] = useState<Record<Exclude<PostType,'all'>, boolean>>({ photo: false, video: false, carousel: false, reel: false });
  const [promoType, setPromoType] = useState<PromoType>('all');
  const [collaborationOnly, setCollaborationOnly] = useState(false);

  const profilesInGroup = profiles.filter(p => currentProfileIds.includes(p.id));
  const currentGroupData = groups.find(g => g.id === currentGroup) ?? { id: 'all', name: 'All', profileCount: profiles.length, badge: '...', avatar: undefined };

  // Group posts by month
  const months = [...new Set(MOCK_POSTS.map(p => p.month))];

  const resetFilters = () => {
    setPostTypes({ photo: false, video: false, carousel: false, reel: false });
    setPromoType('all');
    setCollaborationOnly(false);
  };

  const hasActiveFilters = Object.values(postTypes).some(Boolean) || promoType !== 'all' || collaborationOnly;
  const allPostTypesUnchecked = !Object.values(postTypes).some(Boolean);

  return (
    <div className="flex flex-col size-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-[16px] px-[32px] pt-[32px] pb-[20px] shrink-0">
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px] whitespace-nowrap">
          All posts
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
        <div className="flex items-center gap-[8px] shrink-0">
          <button className="size-[32px] flex items-center justify-center rounded-[6px] text-[#97acbd] hover:bg-[rgba(0,0,0,0.04)] transition-colors">
            <Download size={14} />
          </button>
          <button
            onClick={() => setFiltersOpen(v => !v)}
            className={`size-[32px] flex items-center justify-center rounded-[6px] transition-colors ${filtersOpen ? 'bg-[rgba(0,0,0,0.06)] text-[#1d1d1b]' : 'text-[#97acbd] hover:bg-[rgba(0,0,0,0.04)]'}`}
          >
            <SlidersHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-[24px] px-[32px] border-b border-[#e6ecf4] shrink-0">
        {(['posts', 'stories'] as PostTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-[6px] pb-[10px] border-b-2 transition-colors ${
              activeTab === tab ? 'border-[#1d1d1b] text-[#1d1d1b]' : 'border-transparent text-[#97acbd] hover:text-[#76869a]'
            }`}
          >
            <div className={`size-[14px] rounded-[3px] border shrink-0 ${activeTab === tab ? 'border-[#1d1d1b]' : 'border-[#c0cfd8]'}`} />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] tracking-[-0.072px] capitalize">{tab}</span>
          </button>
        ))}
      </div>

      {/* Body: grid + optional filters panel */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Posts area */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[20px]">

          {/* Sort row */}
          <div className="flex justify-end mb-[20px]">
            <button className="flex items-center gap-[6px] h-[32px] px-[12px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors">
              <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px]">Sort by most recent</span>
              <ChevronDown size={12} className="text-[#76869a]" />
            </button>
          </div>

          {/* Grid sections by month */}
          <div className="flex flex-col gap-[28px]">
            {months.map(month => {
              const posts = MOCK_POSTS.filter(p => p.month === month);
              return (
                <div key={month} className="flex flex-col gap-[12px]">
                  <p className="font-['Gilroy:Semibold',sans-serif] text-[11px] leading-[14px] text-[#97acbd] tracking-[0.3px] uppercase">
                    {month}
                  </p>
                  <div className="grid grid-cols-4 gap-[12px]">
                    {posts.map(post => <PostCard key={post.id} post={post} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filters panel */}
        {filtersOpen && (
          <div className="w-[220px] shrink-0 border-l border-[#e6ecf4] overflow-y-auto py-[20px] px-[20px] flex flex-col gap-[20px]">
            {/* Panel header */}
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center gap-[6px]">
                <SlidersHorizontal size={12} className="text-[#76869a]" />
                <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px]">Filters</p>
              </div>
              <div className="flex items-center gap-[6px]">
                {hasActiveFilters && (
                  <button onClick={resetFilters} className="text-[#97acbd] hover:text-[#76869a] transition-colors">
                    <RotateCcw size={12} />
                  </button>
                )}
                <button onClick={() => setFiltersOpen(false)} className="text-[#97acbd] hover:text-[#76869a] transition-colors">
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Post type */}
            <FilterSection title="Post type">
              <CheckboxRow label="All" checked={allPostTypesUnchecked} onChange={resetFilters} />
              {(['photo', 'video', 'carousel', 'reel'] as const).map(t => (
                <CheckboxRow
                  key={t}
                  label={t.charAt(0).toUpperCase() + t.slice(1)}
                  checked={postTypes[t]}
                  onChange={() => setPostTypes(prev => ({ ...prev, [t]: !prev[t] }))}
                />
              ))}
            </FilterSection>

            {/* Promotion type */}
            <FilterSection title="Promotion type">
              <RadioRow label="All" checked={promoType === 'all'} onChange={() => setPromoType('all')} />
              <RadioRow label="Promoted posts only" checked={promoType === 'promoted'} onChange={() => setPromoType('promoted')} />
              <RadioRow label="Non promoted posts" checked={promoType === 'non-promoted'} onChange={() => setPromoType('non-promoted')} />
            </FilterSection>

            {/* Collaboration */}
            <FilterSection title="Collaboration">
              <CheckboxRow label="Only posts with collaborators" checked={collaborationOnly} onChange={() => setCollaborationOnly(v => !v)} />
            </FilterSection>

            {/* Labels */}
            <FilterSection title="Labels">
              <button className="flex items-center justify-between h-[32px] px-[10px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors w-full">
                <span className="font-['Gilroy:Medium',sans-serif] text-[12px] text-[#97acbd] tracking-[-0.072px]">Select label</span>
                <ChevronDown size={12} className="text-[#97acbd]" />
              </button>
            </FilterSection>
          </div>
        )}
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
