function Frame() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-[2px] w-full">
      <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[0px] whitespace-nowrap">
        <p className="font-['Gilroy:Bold',sans-serif] leading-[10px] text-[9px]">ALL</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-center justify-center relative size-full">
      <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[4px] shrink-0 size-[44px]" data-name="Select Bar - Group item">
        <div aria-hidden="true" className="absolute border border-[rgba(96,96,96,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame />
      </div>
    </div>
  );
}