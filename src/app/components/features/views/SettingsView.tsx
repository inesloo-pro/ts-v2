import { useEffect } from 'react';
import { SETTINGS_NAV } from '../groups/SettingsSidebar';
import { SettingsHistoryView } from './SettingsHistoryView';

interface SettingsViewProps {
  activeItem: string;
}

export function SettingsView({ activeItem }: SettingsViewProps) {
  let groupLabel = '';
  let itemLabel = '';

  for (const { group, items } of SETTINGS_NAV) {
    const found = items.find(i => i.id === activeItem);
    if (found) {
      groupLabel = group;
      itemLabel = found.label;
      break;
    }
  }

  useEffect(() => {
    document.title = `IcoLab - ${itemLabel} - Tree Structure V2`;
  }, [itemLabel]);

  if (activeItem === 'history') {
    return <SettingsHistoryView />;
  }

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
      {/* Header */}
      <div className="flex flex-col gap-[4px] shrink-0">
        <p className="font-['Gilroy:Semibold',sans-serif] text-[10px] leading-[12px] text-[#97acbd] tracking-[-0.03px] uppercase">
          {groupLabel}
        </p>
        <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px]">
          {itemLabel}
        </p>
      </div>

      {/* Placeholder */}
      <div className="flex items-center justify-center w-full flex-1">
        <div className="border-2 border-dashed border-[#c0cfd8] rounded-[16px] px-[48px] py-[40px] text-center max-w-[520px]">
          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center mb-[16px]">
            <p className="leading-[48px]">🚧</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[18px] text-center tracking-[-0.18px] mb-[10px]">
            <p className="leading-[24px]">{itemLabel}</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[13px] text-center tracking-[-0.052px] mb-[16px]">
            <p className="leading-[20px]">Content for this settings page needs to be implemented.</p>
          </div>
          <div className="inline-flex items-center gap-[6px] bg-[#ebeef0] rounded-[6px] px-[12px] py-[6px]">
            <p className="font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#97acbd] tracking-[0.3px] uppercase">{groupLabel}</p>
            <p className="text-[#c0cfd8] text-[11px]">›</p>
            <p className="font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#76869a] tracking-[0.3px] uppercase">{itemLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
