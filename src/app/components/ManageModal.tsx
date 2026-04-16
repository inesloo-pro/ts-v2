import { useEffect, useRef } from 'react';
import DialogXl from './figma/DialogXl';

interface ManageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManageModal({ isOpen, onClose }: ManageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="w-[95vw] h-[95vh] relative"
      >
        <DialogXl />
        {/* Clickable overlay for the close button */}
        <button
          onClick={onClose}
          className="absolute right-[20px] top-[20px] w-[20px] h-[20px] cursor-pointer z-10"
          aria-label="Close modal"
        />
      </div>
    </div>
  );
}