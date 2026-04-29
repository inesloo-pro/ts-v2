import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Modal } from '../../ui/Modal';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-[20px] items-center">
      {options.map(opt => (
        <label key={opt.value} className="flex gap-[8px] items-center cursor-pointer">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-[#0089ff] w-[14px] h-[14px] cursor-pointer shrink-0"
          />
          <span
            className={`font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] tracking-[-0.3px] ${
              value === opt.value ? 'text-[#1d1d1b]' : 'text-[#76869a]'
            }`}
          >
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-[#e6ecf4] pb-[12px] w-full">
      <p className="font-['Gilroy:Bold',sans-serif] text-[16px] leading-[20px] text-[#1d1d1b] tracking-[-0.5px]">
        {children}
      </p>
    </div>
  );
}

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="flex items-center">
      <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#76869a] tracking-[-0.3px]">
        {children}
      </span>
      {required && (
        <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] leading-[14px] text-[#0089ff] tracking-[-0.3px]">*</span>
      )}
    </div>
  );
}

export function ExportReportModal({ isOpen, onClose }: ExportReportModalProps) {
  const [title, setTitle] = useState('Dashboard report');
  const [format, setFormat] = useState('pdf');
  const [sendByEmail, setSendByEmail] = useState('yes');
  const [scheduleRecurring, setScheduleRecurring] = useState('yes');
  const [period] = useState('06/12/2024 - 07/12/2024');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Export"
      size="S"
      cancelLabel="Cancel"
      onCancel={onClose}
      secondaryLabel="Save draft"
      onSecondary={() => {}}
      primaryLabel="Export"
      onPrimary={() => {}}
    >
      <div className="flex flex-col gap-[32px]">

        {/* Section 1: Report title and format */}
        <div className="flex flex-col gap-[32px]">
          <SectionHeader>Report title and format</SectionHeader>

          {/* Title input */}
          <div className="flex flex-col gap-[8px]">
            <FieldLabel required>Title</FieldLabel>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="border border-[#e6ecf4] rounded-[6px] px-[20px] py-[18px] w-full font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-[#1d1d1b] tracking-[-0.4px] outline-none focus:border-[#0089ff] transition-colors"
            />
          </div>

          {/* Format */}
          <div className="flex flex-col gap-[12px]">
            <FieldLabel>Format</FieldLabel>
            <RadioGroup
              name="format"
              value={format}
              onChange={setFormat}
              options={[
                { value: 'pdf', label: 'PDF (Customizable)' },
                { value: 'xls', label: 'XLS' },
              ]}
            />
          </div>
        </div>

        {/* Section 2: Report settings */}
        <div className="flex flex-col gap-[32px]">
          <SectionHeader>Report settings</SectionHeader>

          {/* Send by email */}
          <div className="flex flex-col gap-[12px]">
            <FieldLabel>Send your report by email</FieldLabel>
            <RadioGroup
              name="sendByEmail"
              value={sendByEmail}
              onChange={setSendByEmail}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
          </div>

          {/* Schedule recurring */}
          <div className="flex flex-col gap-[12px]">
            <FieldLabel>Schedule your recurring report</FieldLabel>
            <RadioGroup
              name="scheduleRecurring"
              value={scheduleRecurring}
              onChange={setScheduleRecurring}
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
          </div>

          {/* Period */}
          <div className="flex flex-col gap-[8px]">
            <FieldLabel>Period</FieldLabel>
            <button className="border border-[#e6ecf4] rounded-[6px] px-[20px] py-[16px] w-full flex items-center gap-[10px] text-left hover:border-[#0089ff] transition-colors">
              <span className="flex-1 font-['Gilroy:Semibold',sans-serif] text-[14px] leading-[16px] text-[#1d1d1b] tracking-[-0.4px]">
                {period}
              </span>
              <ChevronDown size={16} className="shrink-0 text-[#76869a]" />
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
}
