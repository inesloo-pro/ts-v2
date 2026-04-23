import { type ReactNode } from 'react';

interface IcoInputProps {
  label?: string;
  helpText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
  size?: 'lg' | 'md';
  disabled?: boolean;
}

export function IcoInput({
  label,
  helpText,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
  buttonLabel,
  onButtonClick,
  size = 'md',
  disabled = false,
}: IcoInputProps) {
  const isLg = size === 'lg';
  const height = isLg ? 'h-[40px]' : 'h-[32px]';
  const px = isLg ? 'px-[16px]' : 'px-[12px]';
  const textSize = isLg ? 'text-[14px]' : 'text-[12px]';
  const tracking = isLg ? 'tracking-[-0.112px]' : 'tracking-[-0.072px]';

  return (
    <div className="flex flex-col gap-[6px]">
      {label && (
        <p className={`font-['Gilroy:Semibold',sans-serif] ${textSize} text-[#1d1d1b] ${tracking}`}>
          {label}
        </p>
      )}
      <div className="flex items-center gap-[8px]">
        <div
          className={`flex items-center gap-[8px] flex-1 min-w-0 ${height} border border-[#c0cfd8] rounded-[6px] ${px} focus-within:border-[#76869a] transition-colors ${
            disabled ? 'bg-[#f0f4f6] opacity-50' : 'bg-white'
          }`}
        >
          {leftIcon && <div className="text-[#97acbd] shrink-0">{leftIcon}</div>}
          <input
            type="text"
            value={value}
            onChange={e => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={`flex-1 font-['Gilroy:Medium',sans-serif] ${textSize} text-[#1d1d1b] placeholder-[#c0cfd8] ${tracking} outline-none bg-transparent`}
          />
          {rightIcon && <div className="text-[#97acbd] shrink-0">{rightIcon}</div>}
        </div>
        {buttonLabel && (
          <button
            onClick={onButtonClick}
            disabled={disabled}
            className={`flex items-center justify-center ${height} px-[16px] bg-[#76869a] rounded-[6px] hover:opacity-80 transition-opacity shrink-0 disabled:opacity-50`}
          >
            <span className={`font-['Gilroy:Semibold',sans-serif] ${textSize} text-white ${tracking}`}>
              {buttonLabel}
            </span>
          </button>
        )}
      </div>
      {helpText && (
        <p className="font-['Gilroy:Medium',sans-serif] text-[11px] text-[#97acbd] tracking-[-0.044px]">
          {helpText}
        </p>
      )}
    </div>
  );
}
