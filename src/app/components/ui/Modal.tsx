import { useEffect } from 'react';
import { X, ArrowLeftCircle } from 'lucide-react';

export type ModalSize = 'S' | 'L' | 'XL';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: string;
  description?: string;
  tag?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  cancelLabel?: string;
  onCancel?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  primaryLabel?: string;
  onPrimary?: () => void;
  children?: React.ReactNode;
}

const sizeClasses: Record<ModalSize, string> = {
  S: 'w-[500px]',
  L: 'w-[1000px]',
  XL: 'w-[calc(100vw-80px)] h-[calc(100vh-80px)]',
};

export function Modal({
  isOpen,
  onClose,
  size = 'S',
  title,
  description,
  tag,
  showBackButton,
  onBack,
  cancelLabel,
  onCancel,
  secondaryLabel,
  onSecondary,
  primaryLabel,
  onPrimary,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isXL = size === 'XL';

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(29,29,27,0.9)]"
        onClick={onClose}
      />

      {/* Dialog panel */}
      <div
        className={`relative bg-white border border-[#c0cfd8] rounded-[16px] flex flex-col pt-[60px] pb-[40px] px-[60px] gap-[40px] ${sizeClasses[size]} ${!isXL ? 'max-h-[calc(100vh-80px)]' : ''}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] size-[24px] flex items-center justify-center rounded-full bg-[#e8edf0] hover:bg-[#d0d8de] transition-colors text-[#76869a] shrink-0"
        >
          <X size={12} strokeWidth={2.5} />
        </button>

        {/* Header + content */}
        <div className={`flex flex-col gap-[32px] ${isXL ? 'flex-1 min-h-0' : 'overflow-y-auto'}`}>
          {/* Title row */}
          {(title || showBackButton) && (
            <div className="flex flex-col gap-[20px] shrink-0">
              <div className="flex gap-[12px] items-center w-full">
                {showBackButton && (
                  <button
                    onClick={onBack}
                    className="shrink-0 size-[20px] flex items-center justify-center text-[#1d1d1b] hover:opacity-70 transition-opacity"
                  >
                    <ArrowLeftCircle size={20} strokeWidth={1.5} />
                  </button>
                )}
                {title && (
                  <p className="font-['Gilroy:Bold',sans-serif] text-[32px] leading-[32px] text-[#1d1d1b] tracking-[-0.32px] whitespace-nowrap shrink-0">
                    {title}
                  </p>
                )}
                {tag && (
                  <div className="border border-[#c0cfd8] rounded-[4px] h-[20px] flex items-center px-[8px] shrink-0">
                    <p className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#1d1d1b] tracking-[-0.072px]">
                      {tag}
                    </p>
                  </div>
                )}
              </div>
              {description && (
                <p className="font-['Gilroy:Medium',sans-serif] text-[14px] leading-[16px] text-[#76869a] tracking-[-0.112px]">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Content slot */}
          <div className={isXL ? 'flex-1 min-h-0 overflow-y-auto' : ''}>
            {children}
          </div>
        </div>

        {/* Footer */}
        {(cancelLabel || secondaryLabel || primaryLabel) && (
          <div className="flex items-center justify-between shrink-0">
            {cancelLabel ? (
              <button
                onClick={onCancel ?? onClose}
                className="font-['Gilroy:Medium',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.072px] underline hover:opacity-70 transition-opacity"
              >
                {cancelLabel}
              </button>
            ) : <div />}
            <div className="flex gap-[12px] items-center">
              {secondaryLabel && (
                <button
                  onClick={onSecondary}
                  className="h-[40px] w-[150px] flex items-center justify-center border border-[#c0cfd8] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-[#1d1d1b] tracking-[-0.112px] hover:opacity-70 transition-opacity"
                >
                  {secondaryLabel}
                </button>
              )}
              {primaryLabel && (
                <button
                  onClick={onPrimary}
                  className="h-[40px] w-[150px] flex items-center justify-center bg-[#0089ff] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-white tracking-[-0.112px] hover:opacity-90 transition-opacity"
                >
                  {primaryLabel}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
