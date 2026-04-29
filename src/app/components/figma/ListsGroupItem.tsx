import svgPaths from "../../../assets/icons/svg-b4hzrq7qh7";

export default function ListsGroupItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full" data-name="Lists - Group Item">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
            <p className="leading-[14px]">All Social Profiles</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
            <p className="leading-[12px]">95 Social profiles</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[20px]" data-name="Pin">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Pin">
              <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
            </g>
          </svg>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="Frame">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Frame">
              <path d={svgPaths.p1ce00} fill="var(--fill-0, #606060)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}