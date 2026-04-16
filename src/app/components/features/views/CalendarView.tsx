import { EmptyState, emptyStates } from '../../common/EmptyState';

interface SocialProfile {
  id: string;
  name: string;
  handle: string;
  platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x';
}

interface CalendarViewProps {
  selectedItem: string | null;
  profilesInGroup: SocialProfile[];
}

export function CalendarView({ selectedItem, profilesInGroup }: CalendarViewProps) {
  // Check if a YouTube profile is selected
  const selectedProfile = profilesInGroup.find(p => p.id === selectedItem);
  const isYoutubeSelected = selectedProfile?.platform === 'youtube';

  // If YouTube is selected, show empty state
  if (isYoutubeSelected) {
    return <EmptyState {...emptyStates.youtubeScheduling} />;
  }

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const currentWeek = [
    { date: 10, day: 'Sun', events: [] },
    { date: 11, day: 'Mon', events: ['International Day of Awesomeness'] },
    { date: 12, day: 'Tue', events: [] },
    { date: 13, day: 'Wed', events: ['Shopping Day'] },
    { date: 14, day: 'Thu', events: ['Potato Chip Day'] },
    { date: 15, day: 'Fri', events: ['World Sleep Day'] },
    { date: 16, day: 'Sat', events: ['No Selfies Day'] },
  ];

  return (
    <div className="flex-1 bg-white overflow-auto">
      {/* Calendar Header */}
      <div className="sticky top-0 bg-white border-b border-[#e0e0e0] z-10">
        <div className="flex items-center justify-between px-[24px] py-[12px]">
          <div className="flex items-center gap-[12px]">
            <button className="px-[12px] py-[6px] bg-white border border-[#e0e0e0] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
              Today
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="size-[24px] flex items-center justify-center hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="size-[24px] flex items-center justify-center hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[16px]">
              March 2024
            </div>
          </div>
          
          <div className="flex items-center gap-[12px]">
            <select className="px-[12px] py-[6px] bg-white border border-[#e0e0e0] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] cursor-pointer">
              <option>Week</option>
              <option>Day</option>
              <option>Month</option>
            </select>
            
            <select className="px-[12px] py-[6px] bg-white border border-[#e0e0e0] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] cursor-pointer">
              <option>All status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>

            <button className="px-[16px] py-[8px] bg-[#606060] text-white rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[12px] hover:bg-[#505050] cursor-pointer transition-colors flex items-center gap-[8px]">
              <span>+</span>
              Schedule a new post
            </button>
          </div>
        </div>

        {/* Week Days Header */}
        <div className="grid grid-cols-[80px_repeat(7,1fr)] border-t border-[#e0e0e0]">
          <div className="px-[12px] py-[8px] border-r border-[#e0e0e0]">
            <div className="font-['Gilroy:Semibold',sans-serif] text-[#a0a0a0] text-[10px]">
              UTC-05:00
            </div>
          </div>
          {currentWeek.map((day, i) => (
            <div key={i} className={`px-[12px] py-[8px] ${i < 6 ? 'border-r border-[#e0e0e0]' : ''}`}>
              <div className="flex flex-col gap-[2px]">
                <div className="font-['Gilroy:Semibold',sans-serif] text-[#a0a0a0] text-[10px]">
                  {day.day} {day.date}
                </div>
                {day.events.length > 0 && (
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[9px] truncate">
                    {day.events[0]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="relative">
        {hours.map((hour, i) => (
          <div key={hour} className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-[#e0e0e0] h-[60px]">
            <div className="px-[12px] py-[8px] border-r border-[#e0e0e0] bg-[#fafafa]">
              <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[10px]">
                {hour === 0 ? '12:00 AM' : hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`}
              </div>
            </div>
            {currentWeek.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`relative hover:bg-[#f9f9f9] cursor-pointer transition-colors ${dayIndex < 6 ? 'border-r border-[#e0e0e0]' : ''}`}
              >
                {/* Example event on Sunday at 12 PM */}
                {day.date === 10 && hour === 12 && (
                  <div className="absolute inset-x-[4px] top-[4px] bottom-[4px] bg-[#e0e0e0] rounded-[4px] p-[8px] overflow-hidden">
                    <div className="flex items-center gap-[4px]">
                      <div className="flex gap-[2px]">
                        <div className="bg-[#c4c4c4] size-[16px] rounded-full border border-white" />
                        <div className="bg-[#c4c4c4] size-[16px] rounded-full border border-white" />
                      </div>
                      <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[10px]">
                        Cali Zuma
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Example events on Wed */}
                {day.date === 13 && hour === 15 && (
                  <div className="absolute inset-x-[4px] top-[4px] h-[80px] bg-[#e0e0e0] rounded-[4px]" />
                )}
                
                {/* Example events on Thu */}
                {day.date === 14 && hour === 10 && (
                  <div className="absolute inset-x-[4px] top-[4px] h-[100px] bg-[#e0e0e0] rounded-[4px]" />
                )}
                
                {/* Example events on Fri */}
                {day.date === 15 && hour === 11 && (
                  <div className="absolute inset-x-[4px] top-[4px] h-[90px] bg-[#e0e0e0] rounded-[4px]" />
                )}
                
                {/* Example events on Sat */}
                {day.date === 16 && hour === 13 && (
                  <div className="absolute inset-x-[4px] top-[4px] h-[110px] bg-[#e0e0e0] rounded-[4px]" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}