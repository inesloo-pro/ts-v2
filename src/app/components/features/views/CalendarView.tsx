import { useState } from 'react';
import {
  ChevronLeft, ChevronRight, Plus, ChevronDown,
  LayoutGrid, AlignJustify, Users, SlidersHorizontal,
  FolderOpen, X, Star, Send,
} from 'lucide-react';

// ─── Constants ────────────────────────────────────────────────────────────────

const SLOT_H = 56;
const TIME_COL_W = 80;

const WEEK = [
  { day: 'Sun', date: 19, isToday: false, isWeekend: true },
  { day: 'Mon', date: 20, isToday: false, isWeekend: false },
  { day: 'Tue', date: 21, isToday: false, isWeekend: false },
  { day: 'Wed', date: 22, isToday: false, isWeekend: false },
  { day: 'Thu', date: 23, isToday: true,  isWeekend: false },
  { day: 'Fri', date: 24, isToday: false, isWeekend: false },
  { day: 'Sat', date: 25, isToday: false, isWeekend: true },
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

const NOW_DAY = 23;
const NOW_Y = (4 + 5 / 60) * SLOT_H;

const MEDIA_SHADES = [
  '#d4dde3', '#c0cfd8', '#e0e6ea',
  '#c8d4da', '#b8c8d0', '#dce3e8',
  '#cad3d8', '#e8edf0', '#c4cdd3',
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function DropdownBtn({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-[6px] h-[32px] px-[12px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors">
      <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px] whitespace-nowrap">{label}</span>
      <ChevronDown size={11} className="text-[#76869a]" />
    </button>
  );
}

function IconBtn({ icon, active = false, onClick }: { icon: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] flex items-center justify-center rounded-[6px] transition-colors ${
        active ? 'bg-[#f0f4f6] text-[#1d1d1b]' : 'text-[#97acbd] hover:bg-[#f0f4f6] hover:text-[#76869a]'
      }`}
    >
      {icon}
    </button>
  );
}

function HolidayChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[4px] bg-[#f0f4f6] rounded-[4px] px-[6px] py-[3px] min-w-0">
      <div className="size-[6px] rounded-full bg-[#c0cfd8] shrink-0" />
      <span className="font-['Gilroy:Medium',sans-serif] text-[10px] text-[#76869a] tracking-[-0.03px] truncate">
        {label}
      </span>
    </div>
  );
}

function PostChip({ type }: { type: 'star' | 'send' }) {
  return (
    <div className="mx-[4px] mt-[4px] flex items-center gap-[5px] bg-[#f0f4f6] border border-[#e6ecf4] rounded-[4px] px-[6px] py-[5px]">
      <div className="size-[20px] rounded-full bg-[#d4dde3] shrink-0 flex items-center justify-center text-[#97acbd]">
        {type === 'star' ? <Star size={9} /> : <Send size={9} />}
      </div>
      <div className="flex flex-col gap-[3px] min-w-0">
        <div className="h-[5px] rounded-full bg-[#c0cfd8] w-[48px]" />
        <div className="h-[4px] rounded-full bg-[#dce3e8] w-[32px]" />
      </div>
    </div>
  );
}

function MediaLibraryPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-[232px] shrink-0 flex flex-col border border-[#e6ecf4] rounded-[8px] bg-white overflow-hidden">
      <div className="flex items-center gap-[8px] px-[12px] py-[10px] border-b border-[#e6ecf4] shrink-0">
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
              style={{
                backgroundColor: shade,
                aspectRatio: i % 4 === 1 ? '3 / 4' : '1',
              }}
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

export function CalendarView({ userCohort: _userCohort }: CalendarViewProps) {
  const [mediaLibraryOpen, setMediaLibraryOpen] = useState(true);

  return (
    <div className="flex flex-col size-full overflow-hidden">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-[16px] px-[32px] pt-[32px] pb-[20px] shrink-0">
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px] whitespace-nowrap">
          Calendar view
        </p>
        {/* Profile avatar row (simplified) */}
        <div className="flex items-center">
          {[44, 30, 30, 30].map((sz, i) => (
            <div
              key={i}
              className="rounded-full bg-[#d4dde3] border-2 border-white relative shrink-0"
              style={{ width: sz, height: sz, marginLeft: i > 0 ? -8 : 0 }}
            >
              {i === 0 && (
                <div className="absolute bottom-0 right-0 size-[13px] rounded-full bg-[#c0cfd8] border-2 border-white" />
              )}
            </div>
          ))}
          <button className="ml-[4px] h-[28px] px-[10px] rounded-full border border-[#e6ecf4] bg-white font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#76869a] tracking-[-0.044px] hover:border-[#c0cfd8] transition-colors shrink-0">
            +9
          </button>
        </div>
        <div className="flex-1" />
        {/* CTA button split */}
        <div className="flex shrink-0">
          <button className="flex items-center gap-[8px] h-[40px] pl-[16px] pr-[14px] bg-[#76869a] rounded-l-[6px] hover:opacity-80 transition-opacity">
            <Plus size={16} color="white" strokeWidth={2} />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] text-white tracking-[-0.112px]">
              Schedule a new post
            </span>
          </button>
          <button className="flex items-center justify-center w-[36px] h-[40px] bg-[#76869a] rounded-r-[6px] border-l border-[rgba(255,255,255,0.25)] hover:opacity-80 transition-opacity">
            <ChevronDown size={13} color="white" />
          </button>
        </div>
      </div>

      {/* ── Toolbar ─────────────────────────────────────────────── */}
      <div className="flex items-center gap-[8px] px-[32px] pb-[16px] shrink-0">
        <button className="h-[32px] px-[12px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px] shrink-0">
          Today
        </button>
        <div className="flex items-center border border-[#e6ecf4] rounded-[6px] overflow-hidden">
          <button className="h-[32px] w-[32px] flex items-center justify-center text-[#76869a] hover:bg-[#f0f4f6] transition-colors border-r border-[#e6ecf4]">
            <ChevronLeft size={14} />
          </button>
          <button className="h-[32px] w-[32px] flex items-center justify-center text-[#76869a] hover:bg-[#f0f4f6] transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
        <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] text-[#1d1d1b] tracking-[-0.084px] whitespace-nowrap">
          Apr 19 – 25
        </span>
        <div className="flex-1" />
        <DropdownBtn label="Week" />
        <DropdownBtn label="All posts" />
        <div className="flex items-center gap-[2px]">
          <IconBtn icon={<LayoutGrid size={13} />} active />
          <IconBtn icon={<AlignJustify size={13} />} />
          <IconBtn icon={<Users size={13} />} />
          <IconBtn icon={<SlidersHorizontal size={13} />} />
          <IconBtn
            icon={<FolderOpen size={13} />}
            active={mediaLibraryOpen}
            onClick={() => setMediaLibraryOpen(v => !v)}
          />
        </div>
      </div>

      {/* ── Calendar + Media Library ─────────────────────────────── */}
      <div className="flex flex-1 min-h-0 gap-[12px] px-[32px] pb-[32px]">

        {/* Calendar panel */}
        <div className="flex flex-col flex-1 min-w-0 border border-[#e6ecf4] rounded-[8px] bg-white overflow-hidden">

          {/* Day header row */}
          <div
            className="grid shrink-0 border-b border-[#e6ecf4]"
            style={{ gridTemplateColumns: `${TIME_COL_W}px repeat(7, 1fr)` }}
          >
            <div className="flex items-end justify-center pb-[8px] pt-[10px] border-r border-[#e6ecf4]">
              <span className="font-['Gilroy:Medium',sans-serif] text-[10px] text-[#97acbd] tracking-[-0.03px]">
                UTC +02:00
              </span>
            </div>
            {WEEK.map(col => (
              <div
                key={col.date}
                className={`flex flex-col items-center gap-[4px] py-[10px] border-r border-[#e6ecf4] last:border-r-0 ${col.isWeekend ? 'bg-[#fafbfc]' : ''}`}
              >
                <span className={`font-['Gilroy:Medium',sans-serif] text-[11px] tracking-[-0.044px] uppercase ${col.isToday ? 'text-[#1d1d1b]' : 'text-[#97acbd]'}`}>
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

          {/* Holiday events row */}
          <div
            className="grid shrink-0 border-b border-[#e6ecf4]"
            style={{ gridTemplateColumns: `${TIME_COL_W}px repeat(7, 1fr)` }}
          >
            <div className="border-r border-[#e6ecf4]" />
            {WEEK.map(col => (
              <div
                key={col.date}
                className={`flex flex-col gap-[3px] p-[4px] border-r border-[#e6ecf4] last:border-r-0 min-h-[38px] ${col.isWeekend ? 'bg-[#fafbfc]' : ''}`}
              >
                {(HOLIDAYS[col.date] ?? []).map((h, i) => (
                  <HolidayChip key={i} label={h} />
                ))}
              </div>
            ))}
          </div>

          {/* Scrollable time grid */}
          <div className="flex-1 overflow-y-auto relative">
            {/* Current time indicator */}
            <div
              className="absolute z-10 pointer-events-none flex items-center"
              style={{ top: NOW_Y, left: TIME_COL_W, right: 0 }}
            >
              <div className="size-[8px] rounded-full bg-[#97acbd] shrink-0 -ml-[4px]" />
              <div className="flex-1 h-px bg-[#97acbd]" />
            </div>

            {/* Hour rows */}
            {HOURS.map((hour, rowIdx) => (
              <div
                key={rowIdx}
                className="grid border-b border-[#f0f4f6] last:border-b-0"
                style={{ gridTemplateColumns: `${TIME_COL_W}px repeat(7, 1fr)`, height: SLOT_H }}
              >
                {/* Time label */}
                <div className="flex items-start justify-end pr-[10px] border-r border-[#e6ecf4]">
                  <span
                    className="font-['Gilroy:Medium',sans-serif] text-[11px] text-[#97acbd] tracking-[-0.044px] whitespace-nowrap"
                    style={{ marginTop: -8 }}
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
                      className={`border-r border-[#f0f4f6] last:border-r-0 relative group cursor-pointer ${col.isWeekend ? 'bg-[#fafbfc] hover:bg-[#f4f6f8]' : 'bg-white hover:bg-[#f8f9fb]'} transition-colors`}
                    >
                      {posts.map((p, i) => <PostChip key={i} type={p.type} />)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Media Library panel */}
        {mediaLibraryOpen && (
          <MediaLibraryPanel onClose={() => setMediaLibraryOpen(false)} />
        )}
      </div>
    </div>
  );
}
