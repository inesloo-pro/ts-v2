import { useState } from 'react';
import svgPaths from "../../../../imports/Iconosquare-4-1/svg-cr9mbv1gr2";

interface LeftSidebarProps {
  activeMenuItem: 'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening';
  onMenuItemChange: (menuItem: 'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening') => void;
}

export function LeftSidebar({ activeMenuItem, onMenuItemChange }: LeftSidebarProps) {
  const [analyticsExpanded, setAnalyticsExpanded] = useState(true);

  const handleMenuClick = (menuItem: 'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening') => {
    onMenuItemChange(menuItem);
  };

  return (
    <div className="bg-[#ebeef0] flex flex-col h-full w-[200px] shrink-0">
      {/* Top Bar with Logo and Toggle */}
      <div className="content-stretch flex gap-[24px] items-center py-[20px] px-[16px] relative shrink-0 border-b border-[#c0cfd8]">
        <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-[121.636px]">
          <div className="aspect-[24.0009765625/24] h-full relative shrink-0">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.001 24">
              <path d={svgPaths.p23951e00} fill="#76869A" />
            </svg>
          </div>
          <div className="aspect-[85.63534545898438/14.494268417358398] flex-[1_0_0] min-h-px min-w-px relative">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.6354 14.4934">
              <path d={svgPaths.p2bd9b500} fill="#1D1D1B" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70 transition-opacity">
          <div className="absolute inset-[7.5%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.6">
              <path clipRule="evenodd" d={svgPaths.p18e33600} fill="#76869A" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full px-[16px] pt-[20px]">
        {/* Main Navigation */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {/* Home */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'home' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('home')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[1.89%_5%_0_5%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.698">
                        <g>
                          <path d={svgPaths.p2d967100} fill="#76869A" />
                          <path clipRule="evenodd" d={svgPaths.p3e14aa80} fill="#76869A" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Home</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'dashboard' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('dashboard')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path clipRule="evenodd" d={svgPaths.p14702780} fill="#76869A" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3ee93d00} fill="#76869A" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3ed08100} fill="#76869A" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p349f0570} fill="#76869A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics with Submenu */}
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[4px] relative shrink-0 w-full">
            <div
              className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-full cursor-pointer ${
                activeMenuItem === 'analytics' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
              }`}
              onClick={() => {
                handleMenuClick('analytics');
                setAnalyticsExpanded(!analyticsExpanded);
              }}
            >
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[16px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path clipRule="evenodd" d={svgPaths.pe15dd80} fill="#76869A" fillRule="evenodd" />
                  </svg>
                </div>
                <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Analytics</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[12px]">
                  <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                      <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {analyticsExpanded && (
              <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Overview</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#97acbd] text-[12px] tracking-[-0.072px] whitespace-nowrap">Engagement</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#97acbd] text-[12px] tracking-[-0.072px] whitespace-nowrap">Community</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#97acbd] text-[12px] tracking-[-0.072px] whitespace-nowrap">Reach / Impressions</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#97acbd] text-[12px] tracking-[-0.072px] whitespace-nowrap">Content</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#97acbd] text-[12px] tracking-[-0.072px] whitespace-nowrap">Mentions</p>
                </div>
              </div>
            )}
          </div>

          {/* Reports */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'reports' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('reports')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[0_7.5%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6 16">
                        <g>
                          <path d={svgPaths.p15f82840} fill="#76869A" />
                          <path d={svgPaths.p1809c880} fill="#76869A" />
                          <path clipRule="evenodd" d={svgPaths.p204a5f00} fill="#76869A" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Reports</p>
                </div>
              </div>
            </div>
          </div>

          {/* All posts */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'allposts' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('allposts')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path clipRule="evenodd" d={svgPaths.p34831400} fill="#76869A" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p1ac21900} fill="#76869A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">All posts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'campaigns' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('campaigns')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[0.74%_1.25%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 15.7635">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.pe7a7a70} fill="#76869A" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Campaigns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Publishing */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'publishing' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('publishing')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPaths.p2ed40680} fill="#76869A" />
                        <path clipRule="evenodd" d={svgPaths.p3597b600} fill="#76869A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Publishing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conversations */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'conversations' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('conversations')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPaths.p6a6e680} fill="#76869A" />
                        <path d={svgPaths.p4fc0f00} fill="#76869A" />
                        <path d={svgPaths.p23fc1080} fill="#76869A" />
                        <path clipRule="evenodd" d={svgPaths.p368568c0} fill="#76869A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Conversations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Listening */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div
                className={`content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer transition-colors rounded-[8px] ${
                  activeMenuItem === 'listening' ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                }`}
                onClick={() => handleMenuClick('listening')}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[0_0_1.25%_0]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.8">
                        <g>
                          <path d={svgPaths.p16eae900} fill="#76869A" />
                          <path clipRule="evenodd" d={svgPaths.p4d3acf2} fill="#76869A" fillRule="evenodd" />
                          <path d={svgPaths.p319d1600} fill="#76869A" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Listening</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="content-stretch flex flex-col gap-[12px] items-start py-[20px] relative shrink-0 w-full border-t border-[#c0cfd8]">
          {/* Notifications */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors rounded-[8px]">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[5%_10%_3.13%_10%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 14.6988">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p21e92480} fill="#76869A" fillRule="evenodd" />
                          <path d={svgPaths.p38917800} fill="#76869A" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Notifications</p>
                  <div className="absolute bg-[#76869a] content-stretch flex flex-col items-center justify-center left-[8px] px-[4px] py-[2px] rounded-[9999px] top-[-5px]">
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-center text-white tracking-[0.08px] uppercase whitespace-nowrap">
                      <p className="leading-[10px]">2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social profiles */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors rounded-[8px]">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPaths.p1cb8fc80} fill="#76869A" />
                        <path clipRule="evenodd" d={svgPaths.pad0ab80} fill="#76869A" fillRule="evenodd" />
                        <path d={svgPaths.p285c4f00} fill="#76869A" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Social profiles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors rounded-[8px]">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[0_2.5%_2.5%_5%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8 15.6">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p265b5c00} fill="#76869A" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2441c100} fill="#76869A" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
