import svgPaths from "../../../../imports/Iconosquare-2-1/svg-q50ckweg68";

type MenuItem = 'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening';
type SubMenuItem = 'overview' | 'engagement' | 'community' | 'reach' | 'competitors' | 'industry';

interface LeftSidebarProps {
  activeMenuItem: MenuItem;
  onMenuItemChange: (menuItem: MenuItem) => void;
}

export function LeftSidebar({ activeMenuItem, onMenuItemChange }: LeftSidebarProps) {
  const activeSubItem: SubMenuItem = 'overview';
  const isAnalyticsSection = activeMenuItem === 'analytics' || activeMenuItem === 'dashboard' || activeMenuItem === 'reports';

  const subMenuItems: { id: SubMenuItem; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'community', label: 'Community' },
    { id: 'reach', label: 'Reach & Impressions' },
    { id: 'competitors', label: 'Competitors' },
    { id: 'industry', label: 'Industry Benchmark' },
  ];

  return (
    <div
      className="flex flex-col h-full shrink-0"
      style={{ width: '196px' }}
    >
      {/* Logo area — Frame112 */}
      <div className="content-stretch flex gap-[24px] items-center px-[12px] py-[20px] relative shrink-0">
        {/* Logo */}
        <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0" style={{ width: '121.636px' }}>
          {/* Icon mark */}
          <div className="aspect-[24.0009765625/24] h-full relative shrink-0">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.001 24">
              <path d={svgPaths.p23951e00} fill="#76869A" />
            </svg>
          </div>
          {/* Wordmark */}
          <div className="aspect-[85.63534545898438/14.494268417358398] flex-[1_0_0] min-w-px relative">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.6353 14.4934">
              <path d={svgPaths.p2d4abaf0} fill="#1D1D1B" />
            </svg>
          </div>
        </div>
        {/* Sidebar toggle */}
        <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70 transition-opacity">
          <div className="absolute inset-[7.5%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.6">
              <path clipRule="evenodd" d={svgPaths.p18e33600} fill="#76869A" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Content — Frame130 */}
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full pl-[20px]">

        {/* Profile entry header — PrimitiveEntry */}
        <div className="relative rounded-[8px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div
              className="content-stretch flex items-center justify-between pb-[8px] pl-[12px] pr-[8px] pt-[4px] relative size-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors rounded-[8px]"
              onClick={() => onMenuItemChange('analytics')}
            >
              {/* Icon + Label — Frame103 */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[12px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g>
                      <path d={svgPaths.p3dcb8000} fill="#76869A" />
                      <path d={svgPaths.p2bf998f0} fill="#76869A" />
                      <path d={svgPaths.pe248a00} fill="#76869A" />
                      <path clipRule="evenodd" d={svgPaths.p2744ae80} fill="#76869A" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                  Profile
                </p>
              </div>

              {/* Actions: More + Plus — Frame139 */}
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                {/* More ••• */}
                <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g>
                      <path d={svgPaths.p27bff300} fill="#76869A" />
                      <path d={svgPaths.p3f726870} fill="#76869A" />
                      <path d={svgPaths.p19f89780} fill="#76869A" />
                    </g>
                  </svg>
                </div>
                {/* Plus */}
                <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70">
                  <div className="absolute inset-[21.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2 9.2">
                      <path d={svgPaths.p2dc41580} fill="#76869A" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-menu items — Frame131 */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          {subMenuItems.map((item) => {
            const isActive = item.id === activeSubItem && isAnalyticsSection;
            return (
              <div
                key={item.id}
                className={`h-[32px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-[rgba(255,255,255,0.4)]'
                    : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => onMenuItemChange('analytics')}
              >
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* + Create a board — Frame138 */}
          <div className="h-[32px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative size-full">
                <div className="relative shrink-0 size-[16px]">
                  <div className="absolute inset-[21.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2 9.2">
                      <path d={svgPaths.p2dc41580} fill="#76869A" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                  Create a board
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px w-full" />
      </div>
    </div>
  );
}
