import { type ReactNode } from 'react';
import { Home, BarChart2, LayoutGrid, Calendar, MessageCircle, Headphones, Bell, Users, Settings, ChevronDown } from 'lucide-react';
import svgPaths from "../../../imports/Iconosquare-2-1/svg-q50ckweg68";
import { NAV_TREE, getEffectiveSubPages, type L1MenuItem } from '../../navigation/navConfig';

const L1_ICONS: Record<L1MenuItem, ReactNode> = {
  home: <Home size={14} />,
  analytics: <BarChart2 size={14} />,
  allposts: <LayoutGrid size={14} />,
  publishing: <Calendar size={14} />,
  conversations: <MessageCircle size={14} />,
  listening: <Headphones size={14} />,
};

interface UnifiedSidebarProps {
  activeMenuItem: L1MenuItem;
  onMenuItemChange: (item: L1MenuItem) => void;
  activeSubMenuItem: string;
  onSubMenuItemChange: (sub: string) => void;
  isSettingsActive: boolean;
  onSettingsClick: () => void;
}

export function UnifiedSidebar({
  activeMenuItem,
  onMenuItemChange,
  activeSubMenuItem,
  onSubMenuItemChange,
  isSettingsActive,
  onSettingsClick,
}: UnifiedSidebarProps) {
  const handleL1Click = (l1Id: L1MenuItem) => {
    // Navigate to first sub-page; if already active, do nothing special
    onMenuItemChange(l1Id);
  };

  const handleSubClick = (l1Id: L1MenuItem, subId: string) => {
    if (l1Id !== activeMenuItem) {
      onMenuItemChange(l1Id);
    }
    onSubMenuItemChange(subId);
  };

  return (
    <div
      className="flex flex-col h-full shrink-0 border-r border-[rgba(0,0,0,0.06)]"
      style={{ width: '200px' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-[12px] px-[16px] py-[20px] shrink-0 border-b border-[rgba(0,0,0,0.06)]">
        <div className="aspect-[24.0009765625/24] h-[24px] relative shrink-0">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.001 24">
            <path d={svgPaths.p23951e00} fill="#76869A" />
          </svg>
        </div>
        <div className="aspect-[85.63534545898438/14.494268417358398] flex-[1_0_0] min-w-px relative">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.6353 14.4934">
            <path d={svgPaths.p2d4abaf0} fill="#1D1D1B" />
          </svg>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex flex-col gap-[4px] flex-1 min-h-0 overflow-y-auto px-[12px] py-[12px]">
        {NAV_TREE.map((l1) => {
          const isActive = l1.id === activeMenuItem;
          const subPages = getEffectiveSubPages(l1.id);
          const hasChildren = l1.subPages.length > 0;

          return (
            <div key={l1.id}>
              {/* L1 row */}
              <div
                className={`flex items-center justify-between px-[4px] pr-[8px] py-[6px] rounded-[8px] cursor-pointer transition-colors ${
                  isActive && !isSettingsActive ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.04)]'
                }`}
                onClick={() => handleL1Click(l1.id)}
              >
                <div className="flex items-center gap-[8px]">
                  <div className={`shrink-0 ${isActive && !isSettingsActive ? 'text-[#76869a]' : 'text-[#97acbd]'}`}>
                    {L1_ICONS[l1.id]}
                  </div>
                  <span className={`font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.072px] whitespace-nowrap ${
                    isActive && !isSettingsActive ? 'text-[#1d1d1b]' : 'text-[#76869a]'
                  }`}>
                    {l1.label}
                  </span>
                </div>
                {hasChildren && (
                  <ChevronDown
                    size={12}
                    className={`shrink-0 text-[#97acbd] transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {/* Sub-pages (visible when L1 is active) */}
              {isActive && !isSettingsActive && hasChildren && (
                <div className="flex flex-col gap-[2px] mt-[2px] pl-[22px]">
                  {subPages.map((sub) => {
                    const isSubActive = sub.id === activeSubMenuItem;
                    return (
                      <div
                        key={sub.id}
                        className={`px-[8px] py-[5px] rounded-[6px] cursor-pointer transition-colors ${
                          isSubActive ? 'bg-[rgba(255,255,255,0.6)]' : 'hover:bg-[rgba(0,0,0,0.03)]'
                        }`}
                        onClick={() => handleSubClick(l1.id, sub.id)}
                      >
                        <span className={`font-['Gilroy:Medium',sans-serif] text-[12px] tracking-[-0.072px] whitespace-nowrap ${
                          isSubActive ? 'text-[#76869a]' : 'text-[#97acbd]'
                        }`}>
                          {sub.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-[4px] px-[12px] py-[12px] border-t border-[rgba(0,0,0,0.06)] shrink-0">
        {/* Notifications */}
        <div className="flex items-center justify-between px-[4px] pr-[8px] py-[6px] rounded-[8px] cursor-pointer hover:bg-[rgba(0,0,0,0.04)] transition-colors">
          <div className="flex items-center gap-[8px]">
            <Bell size={14} className="text-[#97acbd] shrink-0" />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#76869a] tracking-[-0.072px]">Notifications</span>
          </div>
          <div className="bg-[#76869a] rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-[4px]">
            <span className="font-['Gilroy:Bold',sans-serif] text-[9px] text-white leading-none">2</span>
          </div>
        </div>

        {/* Social profiles */}
        <div className="flex items-center gap-[8px] px-[4px] pr-[8px] py-[6px] rounded-[8px] cursor-pointer hover:bg-[rgba(0,0,0,0.04)] transition-colors">
          <Users size={14} className="text-[#97acbd] shrink-0" />
          <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#76869a] tracking-[-0.072px]">Social profiles</span>
        </div>

        {/* Settings */}
        <div
          className={`flex items-center gap-[8px] px-[4px] pr-[8px] py-[6px] rounded-[8px] cursor-pointer transition-colors ${
            isSettingsActive ? 'bg-[#d5dcdf]' : 'hover:bg-[rgba(0,0,0,0.04)]'
          }`}
          onClick={onSettingsClick}
        >
          <Settings size={14} className={`shrink-0 ${isSettingsActive ? 'text-[#76869a]' : 'text-[#97acbd]'}`} />
          <span className={`font-['Gilroy:Semibold',sans-serif] text-[12px] tracking-[-0.072px] ${
            isSettingsActive ? 'text-[#1d1d1b]' : 'text-[#76869a]'
          }`}>Settings</span>
        </div>
      </div>
    </div>
  );
}
