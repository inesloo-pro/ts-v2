import svgPaths from "../../../assets/icons/svg-jcr8y89wfj";

export default function SelectBarSpItem() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] size-full" data-name="Select Bar - SP Item">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <div className="relative shrink-0 size-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
        </svg>
      </div>
      <div className="absolute bg-white bottom-[-3px] content-stretch flex h-[20px] items-center justify-center p-px right-[-7px] rounded-[6px]" data-name="Socials (UX)">
        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="h-full relative shrink-0 w-[18px]" data-name="04-Logos/Social/Instagram">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 18.0002">
            <g id="04-Logos/Social/Instagram">
              <path d={svgPaths.p16154a40} fill="var(--fill-0, #606060)" id="Combined Shape" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute left-[-2px] size-[14px] top-0" data-name="Frame">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Frame">
            <rect fill="var(--fill-0, #E0E0E0)" height="14" rx="7" width="14" />
            <path d={svgPaths.p33523640} fill="var(--fill-0, #606060)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}