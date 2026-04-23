import { useState } from 'react';
import { Search, ChevronDown, Download, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const MOCK_HISTORY = [
  {
    id: '1',
    type: 'dashboard',
    title: 'Monthly Dashboard',
    content: 'Monthly Dashboard · 4 social profiles',
    format: 'XLS',
    period: '11/01/2025\n11/30/2025',
    createdAt: '12/10/2025',
    recipient: 'hello@lumina-co.com',
  },
  {
    id: '2',
    type: 'profile',
    title: 'Social profile report',
    content: 'lumina_co · Lumina Co., The Modern Coll...',
    format: 'XLS',
    period: '01/01/2025\n11/20/2025',
    createdAt: '11/20/2025',
    recipient: 'hello@lumina-co.com',
  },
  {
    id: '3',
    type: 'profile',
    title: 'Social profile report',
    content: 'lumina_co · Lumina Co., The Modern Coll...',
    format: 'XLS',
    period: '07/01/2025\n09/30/2025',
    createdAt: '11/13/2025',
    recipient: '',
  },
  {
    id: '4',
    type: 'profile',
    title: 'Social profile report',
    content: 'velora_studio · Velora Studio, Creative Ag...',
    format: 'PDF',
    period: '01/01/2025\n11/13/2025',
    createdAt: '11/13/2025',
    recipient: 'contact@velora-studio.com',
  },
  {
    id: '5',
    type: 'profile',
    title: 'Q3 Performance Report',
    content: 'velora_studio · Velora Studio, Creative Ag...',
    format: 'XLS',
    period: '01/01/2025\n11/13/2025',
    createdAt: '11/13/2025',
    recipient: 'contact@velora-studio.com',
  },
];

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-[6px] h-[36px] px-[12px] border border-[#e6ecf4] rounded-[6px] bg-white hover:border-[#c0cfd8] transition-colors">
      <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] tracking-[-0.072px] whitespace-nowrap">{label}</span>
      <ChevronDown size={12} className="text-[#76869a] shrink-0" />
    </button>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <div className="size-[32px] rounded-[6px] bg-[#f0f2f4] flex items-center justify-center shrink-0">
      <div className="size-[14px] rounded-[3px] bg-[#c0cfd8]" />
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center gap-[2px] shrink-0">
      <div className="size-[20px] rounded-full bg-[#d4dde3] border border-white shrink-0" />
      <div className="size-[20px] rounded-full bg-[#c0cfd8] border border-white shrink-0 -ml-[6px]" />
    </div>
  );
}

export function SettingsHistoryView() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <div className="flex flex-col gap-[32px] p-[32px] size-full overflow-y-auto">

      {/* Page header */}
      <div className="flex items-center justify-between shrink-0">
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px]">
          Reports
        </p>
        <button className="flex items-center gap-[8px] h-[40px] px-[16px] bg-[#76869a] rounded-[6px] hover:opacity-80 transition-opacity shrink-0">
          <span className="font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-white tracking-[-0.112px]">+ New report</span>
        </button>
      </div>

      {/* Scheduled reports section */}
      <div className="flex flex-col gap-[16px] shrink-0">
        <div className="flex items-center gap-[6px]">
          <p className="font-['Gilroy:Bold',sans-serif] text-[16px] leading-[20px] text-[#1d1d1b] tracking-[-0.5px]">
            Scheduled reports
          </p>
          <div className="size-[14px] rounded-full bg-[#e8edf0] flex items-center justify-center">
            <span className="font-['Gilroy:Semibold',sans-serif] text-[8px] text-[#97acbd]">i</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] flex-1 min-w-0 h-[36px] border border-[#e6ecf4] rounded-[6px] bg-white px-[12px]">
            <Search size={12} className="text-[#97acbd] shrink-0" />
            <input
              type="text"
              placeholder="Search for reports"
              className="flex-1 font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] placeholder-[#c0cfd8] tracking-[-0.072px] outline-none bg-transparent"
            />
          </div>
          <FilterDropdown label="All social profiles" />
          <FilterDropdown label="All groups" />
          <FilterDropdown label="All reports" />
          <FilterDropdown label="Show 5" />
        </div>

        {/* Empty state */}
        <div className="border border-[#e6ecf4] rounded-[8px] bg-white flex flex-col items-center justify-center py-[60px] gap-[12px]">
          <p className="text-[40px] leading-none">🌙</p>
          <p className="font-['Gilroy:Medium',sans-serif] text-[13px] leading-[20px] text-[#76869a] tracking-[-0.052px]">
            You haven't scheduled any reports yet
          </p>
        </div>
      </div>

      {/* Reports history section */}
      <div className="flex flex-col gap-[16px] shrink-0">
        <div className="flex items-center gap-[6px]">
          <p className="font-['Gilroy:Bold',sans-serif] text-[16px] leading-[20px] text-[#1d1d1b] tracking-[-0.5px]">
            Reports history
          </p>
          <div className="size-[14px] rounded-full bg-[#e8edf0] flex items-center justify-center">
            <span className="font-['Gilroy:Semibold',sans-serif] text-[8px] text-[#97acbd]">i</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] flex-1 min-w-0 h-[36px] border border-[#e6ecf4] rounded-[6px] bg-white px-[12px]">
            <Search size={12} className="text-[#97acbd] shrink-0" />
            <input
              type="text"
              placeholder="Search for reports"
              className="flex-1 font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#1d1d1b] placeholder-[#c0cfd8] tracking-[-0.072px] outline-none bg-transparent"
            />
          </div>
          <FilterDropdown label="All social profiles" />
          <FilterDropdown label="All groups" />
          <FilterDropdown label="All reports" />
          <FilterDropdown label="Show 5" />
        </div>

        {/* Download all link */}
        <div className="flex justify-end">
          <button className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#76869a] tracking-[-0.072px] underline hover:opacity-70 transition-opacity">
            Download all visible reports
          </button>
        </div>

        {/* Table */}
        <div className="border border-[#e6ecf4] rounded-[8px] bg-white overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[48px_160px_1fr_72px_120px_100px_1fr_36px] items-center px-[16px] py-[10px] border-b border-[#e6ecf4]">
            {['Type', 'Title', 'Content', 'Format', 'Period', 'Creation date', 'Recipient(s)', ''].map((h, i) => (
              <p key={i} className="font-['Gilroy:Semibold',sans-serif] text-[11px] leading-[14px] text-[#97acbd] tracking-[-0.044px]">{h}</p>
            ))}
          </div>

          {/* Rows */}
          {MOCK_HISTORY.map((row, idx) => (
            <div
              key={row.id}
              className={`grid grid-cols-[48px_160px_1fr_72px_120px_100px_1fr_36px] items-center px-[16px] py-[14px] gap-y-0 ${
                idx < MOCK_HISTORY.length - 1 ? 'border-b border-[#f0f4f6]' : ''
              }`}
            >
              {/* Type */}
              <TypeBadge type={row.type} />

              {/* Title */}
              <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#1d1d1b] tracking-[-0.072px] truncate pr-[8px]">
                {row.title}
              </p>

              {/* Content */}
              <div className="flex items-center gap-[8px] min-w-0 pr-[8px]">
                <AvatarStack />
                <p className="font-['Gilroy:Medium',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.072px] truncate">
                  {row.content}
                </p>
              </div>

              {/* Format */}
              <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.072px]">
                {row.format}
              </p>

              {/* Period */}
              <div className="flex flex-col">
                {row.period.split('\n').map((d, i) => (
                  <p key={i} className="font-['Gilroy:Medium',sans-serif] text-[12px] leading-[16px] text-[#76869a] tracking-[-0.072px]">{d}</p>
                ))}
              </div>

              {/* Creation date */}
              <p className="font-['Gilroy:Medium',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.072px]">
                {row.createdAt}
              </p>

              {/* Recipient */}
              <div className="min-w-0 pr-[8px]">
                {row.recipient && (
                  <span className="inline-block font-['Gilroy:Medium',sans-serif] text-[11px] text-[#76869a] tracking-[-0.044px] bg-[#f0f4f6] rounded-[4px] px-[6px] py-[3px] truncate max-w-full">
                    {row.recipient}
                  </span>
                )}
              </div>

              {/* Download */}
              <button className="flex items-center justify-center size-[28px] rounded-[4px] hover:bg-[#f0f4f6] transition-colors text-[#97acbd] hover:text-[#76869a]">
                <Download size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-[4px]">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="size-[28px] flex items-center justify-center rounded-[4px] text-[#97acbd] hover:bg-[#f0f4f6] disabled:opacity-30 transition-colors">
            <ChevronsLeft size={12} />
          </button>
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="size-[28px] flex items-center justify-center rounded-[4px] text-[#97acbd] hover:bg-[#f0f4f6] disabled:opacity-30 transition-colors">
            <ChevronLeft size={12} />
          </button>
          {[1, 2].map(p => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`size-[28px] flex items-center justify-center rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.072px] transition-colors ${
                currentPage === p ? 'bg-[#1d1d1b] text-white' : 'text-[#76869a] hover:bg-[#f0f4f6]'
              }`}
            >
              {p}
            </button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="size-[28px] flex items-center justify-center rounded-[4px] text-[#97acbd] hover:bg-[#f0f4f6] disabled:opacity-30 transition-colors">
            <ChevronRight size={12} />
          </button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="size-[28px] flex items-center justify-center rounded-[4px] text-[#97acbd] hover:bg-[#f0f4f6] disabled:opacity-30 transition-colors">
            <ChevronsRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
