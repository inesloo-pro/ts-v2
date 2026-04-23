import { ArrowLeft, Clock, User, SlidersHorizontal, Unlock, Shield, Palette, Users, Sparkles, Plug, CreditCard, Rocket, Ticket, Lightbulb, HelpCircle, LogOut } from 'lucide-react';

export interface SettingsNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SettingsNavGroup {
  group: string;
  items: SettingsNavItem[];
}

export const SETTINGS_NAV: SettingsNavGroup[] = [
  {
    group: 'Workspace',
    items: [
      { id: 'profile', label: 'Profile', icon: <User size={12} strokeWidth={1.75} /> },
      { id: 'preferences', label: 'Preferences', icon: <SlidersHorizontal size={12} strokeWidth={1.75} /> },
      { id: 'data-access', label: 'Data Access', icon: <Unlock size={12} strokeWidth={1.75} /> },
      { id: 'security', label: 'Security', icon: <Shield size={12} strokeWidth={1.75} /> },
      { id: 'themes', label: 'Themes', icon: <Palette size={12} strokeWidth={1.75} /> },
      { id: 'history', label: 'History', icon: <Clock size={12} strokeWidth={1.75} /> },
    ],
  },
  {
    group: 'Access & billing',
    items: [
      { id: 'users-roles', label: 'Users & Roles', icon: <Users size={12} strokeWidth={1.75} /> },
      { id: 'sparks-ai', label: 'Sparks AI', icon: <Sparkles size={12} strokeWidth={1.75} /> },
      { id: 'integrations', label: 'Integrations', icon: <Plug size={12} strokeWidth={1.75} /> },
      { id: 'subscription', label: 'Subscription & Invoices', icon: <CreditCard size={12} strokeWidth={1.75} /> },
    ],
  },
  {
    group: 'Iconosquare & you',
    items: [
      { id: 'product-updates', label: 'Product updates', icon: <Rocket size={12} strokeWidth={1.75} /> },
      { id: 'referral', label: 'Referral program', icon: <Ticket size={12} strokeWidth={1.75} /> },
      { id: 'suggest-idea', label: 'Suggest an idea', icon: <Lightbulb size={12} strokeWidth={1.75} /> },
      { id: 'help', label: 'Help center', icon: <HelpCircle size={12} strokeWidth={1.75} /> },
    ],
  },
];

interface SettingsSidebarProps {
  activeItem: string;
  onItemChange: (id: string) => void;
  onBack: () => void;
}

export function SettingsSidebar({ activeItem, onItemChange, onBack }: SettingsSidebarProps) {
  return (
    <div className="flex flex-col h-full shrink-0" style={{ width: '196px' }}>

      {/* Header */}
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[20px] relative shrink-0">
        <button
          onClick={onBack}
          className="flex items-center justify-center size-[24px] rounded-[6px] hover:bg-[rgba(0,0,0,0.05)] transition-colors text-[#76869a] hover:text-[#1d1d1b] shrink-0"
          title="Back to app"
        >
          <ArrowLeft size={14} />
        </button>
        <p className="font-['Gilroy:Bold',sans-serif] text-[14px] leading-[16px] text-[#1d1d1b] tracking-[-0.112px] whitespace-nowrap">
          Settings
        </p>
      </div>

      {/* Nav groups */}
      <div className="flex flex-col gap-[20px] flex-1 min-h-0 overflow-y-auto pl-[20px] pr-[8px]">
        {SETTINGS_NAV.map(({ group, items }) => (
          <div key={group} className="flex flex-col gap-[12px]">
            {/* Group label */}
            <div className="px-[6px]">
              <p className="font-['Gilroy:Semibold',sans-serif] text-[10px] leading-[12px] text-[#97acbd] tracking-[-0.03px] whitespace-nowrap">
                {group}
              </p>
            </div>
            {/* Items */}
            <div className="flex flex-col gap-[3px]">
              {items.map(item => {
                const isActive = item.id === activeItem;
                return (
                  <div
                    key={item.id}
                    onClick={() => onItemChange(item.id)}
                    className={`h-[32px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
                      isActive ? 'bg-[rgba(0,0,0,0.05)]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                    }`}
                  >
                    <div className="flex items-center gap-[6px] size-full px-[12px] py-[8px]">
                      {item.icon && (
                        <span className={isActive ? 'text-[#1d1d1b]' : 'text-[#76869a]'}>
                          {item.icon}
                        </span>
                      )}
                      <p className={`font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] tracking-[-0.072px] whitespace-nowrap ${
                        isActive ? 'text-[#1d1d1b]' : 'text-[#76869a]'
                      }`}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: Logout */}
      <div className="border-t border-[#c0cfd8] px-[20px] py-[16px] shrink-0">
        <div className="h-[32px] relative rounded-[8px] w-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors">
          <div className="flex items-center gap-[6px] size-full px-[12px] py-[8px]">
            <LogOut size={12} strokeWidth={1.75} className="text-[#76869a] shrink-0" />
            <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.072px] whitespace-nowrap">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
