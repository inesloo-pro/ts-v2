function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[80px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #D9D9D9)" id="Ellipse 50" r="40" />
        </svg>
      </div>
      <div className="flex flex-col font-['Times_New_Roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[20px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Unlock the power of groups</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[12px] not-italic relative shrink-0 text-[#606060] text-[10px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Use groups to organize social profiles,</p>
        <p>collaborate with others and build campaigns.</p>
      </div>
      <div className="h-[32px] relative rounded-[3px] shrink-0 w-full" data-name="01-UI_Light/Buttons">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">Upgrade my plan</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full">
      <Frame1 />
    </div>
  );
}