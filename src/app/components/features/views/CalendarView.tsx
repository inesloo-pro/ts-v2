import { useState, useRef, useMemo } from 'react';
import {
  ChevronLeft, ChevronRight, Plus, ChevronDown,
  LayoutGrid, AlignJustify, Users, SlidersHorizontal,
  FolderOpen, X, Star, Send,
} from 'lucide-react';
import { FunctionalSPSelector } from '../navigation/FunctionalSPSelector';
import { GroupSelectionModal } from '../groups/GroupSelectionModal';
import {
  allSocialProfiles as excelProfiles,
  groups as excelGroups,
  groupProfiles as excelGroupProfiles,
} from '../../../data/profiles';
import {
  launchProfiles, launchGroups, launchGroupProfiles,
  trialProfiles, trialGroups, trialGroupProfiles,
} from '../../../data/cohortProfiles';

// ─── Constants ────────────────────────────────────────────────────────────────

const SLOT_H = 56;       // px per hour slot
const TIME_W  = 72;      // px for the time label column

const WEEK = [
  { day: 'Sun', date: 19, isToday: false, isWeekend: true  },
  { day: 'Mon', date: 20, isToday: false, isWeekend: false },
  { day: 'Tue', date: 21, isToday: false, isWeekend: false },
  { day: 'Wed', date: 22, isToday: false, isWeekend: false },
  { day: 'Thu', date: 23, isToday: true,  isWeekend: false },
  { day: 'Fri', date: 24, isToday: false, isWeekend: false },
  { day: 'Sat', date: 25, isToday: false, isWeekend: true  },
];

const HOLIDAYS: Record<number, string[]> = {
  19: ['Coachella'],
  20: ['Chinese Language Day'],
  21: ['Creativity and Innovation Day'],
  22: ['Earth Day'],
  23: ['English Language Day', 'Spanish Language Day'],
  25: ['Anzac Day'],
};

const HOURS = [
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM',
];

const MOCK_POSTS = [
  { date: 20, hourIdx: 7, type: 'star' as const },
  { date: 20, hourIdx: 8, type: 'send' as const },
  { date: 23, hourIdx: 2, type: 'star' as const },
];

// Current time: Thu 23 at ~5:05 PM = hour index 4 + 5/60
const NOW_DAY = 23;
const NOW_Y   = (4 + 5 / 60) * SLOT_H;

const MEDIA_SHADES = [
  '#d4dde3', '#c0cfd8', '#e0e6ea',
  '#c8d4da', '#b8c8d0', '#dce3e8',
  '#cad3d8', '#e8edf0', '#c4cdd3',
];

const COL_TEMPLATE = `${TIME_W}px repeat(7, 1fr)`;

// ─── Small sub-components ─────────────────────────────────────────────────────

function DropdownBtn({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-[6px] h-[32px] px-[12px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors shrink-0">
      <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px] whitespace-nowrap">{label}</span>
      <ChevronDown size={11} className="text-[#76869a] shrink-0" />
    </button>
  );
}

function ViewIconBtn({ icon, active = false, onClick }: { icon: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] flex items-center justify-center rounded-[6px] transition-colors ${
        active ? 'bg-[#e8edf0] text-[#1d1d1b]' : 'text-[#97acbd] hover:bg-[#f0f4f6] hover:text-[#76869a]'
      }`}
    >
      {icon}
    </button>
  );
}

function HolidayChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[4px] bg-[#f0f4f6] rounded-[3px] px-[5px] py-[2px] min-w-0 overflow-hidden">
      <div className="size-[5px] rounded-full bg-[#c0cfd8] shrink-0" />
      <span className="font-['Gilroy:Medium',sans-serif] text-[10px] leading-[14px] text-[#76869a] tracking-[-0.03px] truncate">
        {label}
      </span>
    </div>
  );
}

function PostChip({ type }: { type: 'star' | 'send' }) {
  return (
    <div className="mx-[3px] mt-[3px] flex items-center gap-[5px] bg-[#f0f4f6] border border-[#e0e6ea] rounded-[4px] px-[6px] py-[5px]">
      <div className="size-[18px] rounded-full bg-[#d4dde3] shrink-0 flex items-center justify-center text-[#97acbd]">
        {type === 'star' ? <Star size={8} /> : <Send size={8} />}
      </div>
      <div className="flex flex-col gap-[3px] flex-1 min-w-0">
        <div className="h-[5px] rounded-full bg-[#c0cfd8] w-[40px]" />
        <div className="h-[4px] rounded-full bg-[#dce3e8] w-[28px]" />
      </div>
    </div>
  );
}

function MediaLibraryPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-[220px] shrink-0 flex flex-col border border-[#e6ecf4] rounded-[8px] bg-white overflow-hidden">
      <div className="flex items-center gap-[8px] px-[12px] py-[10px] border-b border-[#e6ecf4] shrink-0 bg-white">
        <FolderOpen size={13} className="text-[#76869a] shrink-0" />
        <span className="font-['Gilroy:Semibold',sans-serif] text-[13px] text-[#1d1d1b] tracking-[-0.052px] flex-1">
          Media Library
        </span>
        <button className="text-[#97acbd] hover:text-[#76869a] transition-colors">
          <SlidersHorizontal size={12} />
        </button>
        <button onClick={onClose} className="text-[#97acbd] hover:text-[#76869a] transition-colors ml-[2px]">
          <X size={12} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-[8px]">
        <div className="grid grid-cols-3 gap-[4px]">
          {MEDIA_SHADES.map((shade, i) => (
            <div
              key={i}
              className="rounded-[4px] cursor-pointer hover:opacity-75 transition-opacity"
              style={{ backgroundColor: shade, aspectRatio: i % 4 === 1 ? '3/4' : '1' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface CalendarViewProps {
  userCohort: 'launch' | 'excel' | 'trial';
}

export function CalendarView({ userCohort }: CalendarViewProps) {
  const { profiles, groups, groupProfiles } = useMemo(() => {
    switch (userCohort) {
      case 'launch': return { profiles: launchProfiles, groups: launchGroups, groupProfiles: launchGroupProfiles };
      case 'trial':  return { profiles: trialProfiles,  groups: trialGroups,  groupProfiles: trialGroupProfiles  };
      default:       return { profiles: excelProfiles,  groups: excelGroups,  groupProfiles: excelGroupProfiles  };
    }
  }, [userCohort]);

  const initialGroup      = groups.length > 0 ? groups[0].id : 'all';
  const initialProfileIds = groups.length > 0 ? (groupProfiles[initialGroup] || []) : profiles.map(p => p.id);

  const [selectedItem,       setSelectedItem]       = useState<string | null>(groups.length > 0 ? 'group' : (profiles[0]?.id || null));
  const [isGroupSelectorOpen, setIsGroupSelectorOpen] = useState(false);
  const [currentGroup,       setCurrentGroup]       = useState(initialGroup);
  const [currentProfileIds,  setCurrentProfileIds]  = useState(initialProfileIds);
  const [isUnsavedSelection, setIsUnsavedSelection] = useState(false);
  const [mediaLibraryOpen,   setMediaLibraryOpen]   = useState(true);
  const selectorRef = useRef<HTMLDivElement>(null);

  const profilesInGroup  = profiles.filter(p => currentProfileIds.includes(p.id));
  const currentGroupData = groups.find(g => g.id === currentGroup) ?? {
    id: 'all', name: 'All', profileCount: profiles.length, badge: '...', avatar: undefined,
  };

  return (
    <div className="flex flex-col size-full overflow-hidden">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-[16px] px-[32px] pt-[32px] pb-[20px] shrink-0">
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px] whitespace-nowrap">
          Calendar view
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
        {/* Split CTA */}
        <div className="flex shrink-0">
          <button className="flex items-center gap-[8px] h-[40px] pl-[16px] pr-[14px] bg-[#76869a] rounded-l-[6px] hover:opacity-80 transition-opacity">
            <Plus size={15} color="white" strokeWidth={2.5} />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] text-white tracking-[-0.112px]">
              Schedule a new post
            </span>
          </button>
          <div className="w-px h-[40px] bg-[rgba(255,255,255,0.25)]" />
          <button className="flex items-center justify-center w-[34px] h-[40px] bg-[#76869a] rounded-r-[6px] hover:opacity-80 transition-opacity">
            <ChevronDown size={13} color="white" />
          </button>
        </div>
      </div>

      {/* ── Toolbar ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-[8px] px-[32px] pb-[16px] shrink-0">
        {/* Left group */}
        <button className="h-[32px] px-[14px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px] shrink-0">
          Today
        </button>
        <div className="flex items-center border border-[#e6ecf4] rounded-[6px] overflow-hidden shrink-0">
          <button className="h-[32px] w-[30px] flex items-center justify-center text-[#76869a] hover:bg-[#f0f4f6] transition-colors border-r border-[#e6ecf4]">
            <ChevronLeft size={13} />
          </button>
          <button className="h-[32px] w-[30px] flex items-center justify-center text-[#76869a] hover:bg-[#f0f4f6] transition-colors">
            <ChevronRight size={13} />
          </button>
        </div>
        <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] text-[#1d1d1b] tracking-[-0.084px] whitespace-nowrap">
          Apr 19 – 25
        </span>
        <div className="flex-1" />
        {/* Right group */}
        <DropdownBtn label="Week" />
        <DropdownBtn label="All posts" />
        <div className="flex items-center gap-[2px]">
          <ViewIconBtn icon={<LayoutGrid size={13} />} active />
          <ViewIconBtn icon={<AlignJustify size={13} />} />
          <ViewIconBtn icon={<Users size={13} />} />
          <ViewIconBtn icon={<SlidersHorizontal size={13} />} />
          <ViewIconBtn
            icon={<FolderOpen size={13} />}
            active={mediaLibraryOpen}
            onClick={() => setMediaLibraryOpen(v => !v)}
          />
        </div>
      </div>

      {/* ── Main body ───────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0 gap-[12px] px-[32px] pb-[32px]">

        {/* ── Calendar panel ─────────────────────────────────────── */}
        <div className="flex flex-col flex-1 min-w-0 border border-[#e6ecf4] rounded-[8px] overflow-hidden bg-white">

          {/* Day header — outside scroll, always visible */}
          <div
            className="grid shrink-0 border-b border-[#e6ecf4] bg-white"
            style={{ gridTemplateColumns: COL_TEMPLATE }}
          >
            {/* UTC label */}
            <div className="flex items-end justify-center pb-[8px] pt-[10px] border-r border-[#e6ecf4]">
              <span className="font-['Gilroy:Medium',sans-serif] text-[10px] text-[#97acbd] tracking-[0]">
                UTC +02:00
              </span>
            </div>
            {/* Day columns */}
            {WEEK.map(col => (
              <div
                key={col.date}
                className={`flex flex-col items-center gap-[4px] pt-[10px] pb-[8px] border-r border-[#e6ecf4] last:border-r-0 ${col.isWeekend ? 'bg-[#fafbfc]' : ''}`}
              >
                <span className={`font-['Gilroy:Medium',sans-serif] text-[10px] uppercase tracking-[0.5px] ${col.isToday ? 'text-[#1d1d1b]' : 'text-[#97acbd]'}`}>
                  {col.day}
                </span>
                <div className={`size-[28px] rounded-full flex items-center justify-center ${col.isToday ? 'bg-[#1d1d1b]' : ''}`}>
                  <span className={`font-['Gilroy:Bold',sans-serif] text-[14px] tracking-[-0.084px] ${col.isToday ? 'text-white' : 'text-[#1d1d1b]'}`}>
                    {col.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Events row — outside scroll */}
          <div
            className="grid shrink-0 border-b border-[#e6ecf4] bg-white"
            style={{ gridTemplateColumns: COL_TEMPLATE }}
          >
            <div className="border-r border-[#e6ecf4]" />
            {WEEK.map(col => (
              <div
                key={col.date}
                className={`flex flex-col gap-[3px] p-[4px] border-r border-[#e6ecf4] last:border-r-0 min-h-[32px] ${col.isWeekend ? 'bg-[#fafbfc]' : ''}`}
              >
                {(HOLIDAYS[col.date] ?? []).map((h, i) => (
                  <HolidayChip key={i} label={h} />
                ))}
              </div>
            ))}
          </div>

          {/* Scrollable time grid */}
          <div className="flex-1 overflow-y-auto relative">

            {/* Current time indicator — positioned within scroll body */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{ top: NOW_Y, left: 0, right: 0 }}
            >
              <div className="flex items-center" style={{ paddingLeft: TIME_W - 4 }}>
                <div className="size-[8px] rounded-full bg-[#97acbd] shrink-0" />
                <div className="flex-1 h-px bg-[#97acbd]" />
              </div>
            </div>

            {/* Hour rows */}
            {HOURS.map((hour, rowIdx) => (
              <div
                key={rowIdx}
                className="grid border-b border-[#f0f4f6] last:border-b-0"
                style={{ gridTemplateColumns: COL_TEMPLATE, height: SLOT_H }}
              >
                {/* Time label — positioned so it sits on the top grid line */}
                <div className="relative border-r border-[#e6ecf4]">
                  <span
                    className="absolute right-[10px] font-['Gilroy:Medium',sans-serif] text-[11px] text-[#b0bec9] tracking-[0] whitespace-nowrap select-none"
                    style={{ top: -8 }}
                  >
                    {hour}
                  </span>
                </div>

                {/* Day cells */}
                {WEEK.map(col => {
                  const posts = MOCK_POSTS.filter(p => p.date === col.date && p.hourIdx === rowIdx);
                  return (
                    <div
                      key={col.date}
                      className={`border-r border-[#f0f4f6] last:border-r-0 relative cursor-pointer ${
                        col.isToday ? 'bg-[#fafeff]' : col.isWeekend ? 'bg-[#fafbfc]' : 'bg-white'
                      } hover:bg-[#f5f7f9] transition-colors`}
                    >
                      {posts.map((p, i) => <PostChip key={i} type={p.type} />)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Media Library */}
        {mediaLibraryOpen && (
          <MediaLibraryPanel onClose={() => setMediaLibraryOpen(false)} />
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
