import { type ReactNode } from 'react';

interface KpiCardProps {
  icon: ReactNode;
  value: string | number;
  unit?: string;
  name: string;
  evolution?: string;
  size?: 'lg' | 'md';
}

export function KpiCard({ icon, value, unit, name, evolution, size = 'lg' }: KpiCardProps) {
  const isLg = size === 'lg';

  return (
    <div className="flex flex-col items-center gap-[12px] bg-white rounded-[8px] border border-[#e6ecf4] p-[24px]">
      <div
        className={`${isLg ? 'size-[64px]' : 'size-[48px]'} rounded-full bg-[#f0f4f6] border border-[#d4dde3] flex items-center justify-center text-[#97acbd] shrink-0`}
      >
        {icon}
      </div>
      <div className="flex items-baseline gap-[4px]">
        <p
          className={`font-['Gilroy:Bold',sans-serif] ${isLg ? 'text-[32px] leading-[36px]' : 'text-[24px] leading-[28px]'} text-[#1d1d1b] tracking-[-0.5px]`}
        >
          {value}
        </p>
        {unit && (
          <p
            className={`font-['Gilroy:Semibold',sans-serif] ${isLg ? 'text-[18px]' : 'text-[14px]'} text-[#76869a] tracking-[-0.3px]`}
          >
            {unit}
          </p>
        )}
      </div>
      <p
        className={`font-['Gilroy:Semibold',sans-serif] ${isLg ? 'text-[16px]' : 'text-[13px]'} text-[#76869a] tracking-[-0.3px] text-center`}
      >
        {name}
      </p>
      {evolution && (
        <div className="flex items-center gap-[4px] bg-[#e8edf0] rounded-full px-[8px] py-[4px]">
          <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#76869a] tracking-[-0.072px]">
            {evolution}
          </span>
        </div>
      )}
    </div>
  );
}
