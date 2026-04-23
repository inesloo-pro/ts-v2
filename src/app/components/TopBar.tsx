import svgPaths from "../../imports/Iconosquare-4-1/svg-cr9mbv1gr2";
import type { L1MenuItem } from '../navigation/navConfig';

interface TopBarProps {
  activeMenuItem: L1MenuItem;
  onMenuItemChange: (item: L1MenuItem) => void;
  isSettingsActive?: boolean;
  onSettingsClick?: () => void;
}

export function TopBar({ activeMenuItem, onMenuItemChange, isSettingsActive, onSettingsClick }: TopBarProps) {
  const isAnalyticsActive = activeMenuItem === 'analytics';

  const navItems = [
    {
      id: 'home' as L1MenuItem,
      label: 'Home',
      icon: (
        <div className="absolute inset-[1.89%_5%_0_5%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 15.698">
            <g>
              <path d={svgPaths.p2d967100} fill="#76869A" />
              <path clipRule="evenodd" d={svgPaths.p3e14aa80} fill="#76869A" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'analytics' as L1MenuItem,
      label: 'Profile',
      isActive: isAnalyticsActive,
      icon: (
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.pe15dd80} fill={isAnalyticsActive ? "#76869A" : "#76869A"} fillRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 'allposts' as L1MenuItem,
      label: 'Content',
      icon: (
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path clipRule="evenodd" d={svgPaths.p34831400} fill="#76869A" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1ac21900} fill="#76869A" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
    {
      id: 'publishing' as L1MenuItem,
      label: 'Publishing',
      icon: (
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p2ed40680} fill="#76869A" />
            <path clipRule="evenodd" d={svgPaths.p3597b600} fill="#76869A" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
    {
      id: 'conversations' as L1MenuItem,
      label: 'Conversations',
      icon: (
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p6a6e680} fill="#76869A" />
            <path d={svgPaths.p4fc0f00} fill="#76869A" />
            <path d={svgPaths.p23fc1080} fill="#76869A" />
            <path clipRule="evenodd" d={svgPaths.p368568c0} fill="#76869A" fillRule="evenodd" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[rgba(255,255,255,0.4)] h-[48px] relative rounded-[16px] shrink-0 w-full mb-[12px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          {/* Left: Navigation Tabs */}
          <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0">
            {navItems.map((item) => {
              const active = item.id === activeMenuItem || (item.id === 'analytics' && isAnalyticsActive);
              return (
                <button
                  key={item.id}
                  onClick={() => onMenuItemChange(item.id)}
                  className="h-full relative shrink-0 cursor-pointer bg-transparent border-none"
                >
                  {/* Active underline */}
                  {active && (
                    <div aria-hidden="true" className="absolute border-[#76869a] border-b border-solid inset-0 pointer-events-none" />
                  )}
                  <div className="content-stretch flex items-center justify-between pl-[4px] pr-[8px] py-[4px] relative size-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        {item.icon}
                      </div>
                      <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Icons + Action Dropdowns */}
          <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
            {/* Icon buttons */}
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              {/* Notification Bell */}
              <div className="content-stretch flex gap-[16px] items-center p-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)] transition-colors">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[5%_10%_3.13%_10%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 14.6988">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p21e92480} fill="#1D1D1B" fillRule="evenodd" />
                          <path d={svgPaths.p38917800} fill="#1D1D1B" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  {/* Notification badge */}
                  <div className="absolute bg-[#76869a] content-stretch flex flex-col items-center justify-center left-[8px] px-[4px] py-[2px] rounded-[9999px] top-[-5px]">
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-[9999.5px]" />
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-center text-white tracking-[0.08px] uppercase whitespace-nowrap">
                      <p className="leading-[10px]">2</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profile Icon */}
              <div className="content-stretch flex gap-[16px] items-center p-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.04)] transition-colors">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g>
                        <path d={svgPaths.p1cb8fc80} fill="#1D1D1B" />
                        <path clipRule="evenodd" d={svgPaths.pad0ab80} fill="#1D1D1B" fillRule="evenodd" />
                        <path d={svgPaths.p285c4f00} fill="#1D1D1B" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Settings Icon */}
              <div
                onClick={onSettingsClick}
                className={`content-stretch flex gap-[16px] items-center p-[4px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors ${
                  isSettingsActive ? 'bg-[rgba(0,0,0,0.08)]' : 'hover:bg-[rgba(0,0,0,0.04)]'
                }`}
              >
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[0_2.5%_2.5%_5%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8 15.6">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p265b5c00} fill="#1D1D1B" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2441c100} fill="#1D1D1B" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Dropdowns */}
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              {/* Go to... dropdown */}
              <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.6)] transition-colors">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] tracking-[-0.072px] whitespace-nowrap">🔍 Go to... (⌘+K)</p>
                </div>
                <div className="relative shrink-0 size-[12px]">
                  <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                      <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Get started dropdown */}
              <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.6)] transition-colors">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] tracking-[-0.072px] whitespace-nowrap">🚀 Get started</p>
                </div>
                <div className="relative shrink-0 size-[12px]">
                  <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                      <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
