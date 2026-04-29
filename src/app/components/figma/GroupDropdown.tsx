import svgPaths from "../../../assets/icons/svg-xemzwrvgtx";

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ecd0600} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <button className="content-stretch cursor-pointer flex items-center relative shrink-0">
      <Frame1 />
    </button>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[111.5px]">
      <Frame />
      <Frame82 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">{`Manage profiles & groups`}</p>
      </div>
      <Frame86 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">All profiles</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">20 profiles</p>
      </div>
    </div>
  );
}

function GroupItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame25 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="03-Icons/Interface/Chevron-Bot">
            <div className="absolute inset-[31.54%_20%]" data-name="Fill 1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.90769">
                <path clipRule="evenodd" d={svgPaths.p29af5a80} fill="var(--fill-0, #606060)" fillRule="evenodd" id="Fill 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListsGroupItem() {
  return (
    <div className="bg-[#f0f0f0] h-[48px] relative shrink-0 w-full" data-name="Lists - Group Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[8px] relative size-full">
          <GroupItem />
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">CA</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Campaign 2026 Insta</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">3 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame45 />
      <Frame26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame2 />
      <RadioOff />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Custom Selection 1</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame46 />
      <Frame27 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame3 />
      <RadioOff1 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Custom Selection 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame50 />
      <Frame28 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p144d3972} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame4 />
      <RadioOff2 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Custom Selection 3</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame52 />
      <Frame29 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame5 />
      <RadioOff3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Custom Selection 4</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame54 />
      <Frame30 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame6 />
      <RadioOff4 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Design Accounts</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame56 />
      <Frame31 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p144d3972} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame7 />
      <RadioOff5 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Pinterest Only</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame58 />
      <Frame32 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p144d3972} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame8 />
      <RadioOff6 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Design Accounts</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame60 />
      <Frame33 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p144d3972} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame9 />
      <RadioOff7 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Pinterest Only</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame62 />
      <Frame34 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame10 />
      <RadioOff8 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Design Accounts</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame64 />
      <Frame35 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame11 />
      <RadioOff9 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">Pinterest Only</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">2 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame66 />
      <Frame36 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RadioOff10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Radio-off">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Radio-off">
          <path d={svgPaths.p33167800} fill="var(--fill-0, #A0A0A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame12 />
      <RadioOff10 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <ListsGroupItem />
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem1 />
            <Frame48 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem2 />
            <Frame49 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem3 />
            <Frame51 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem4 />
            <Frame53 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem5 />
            <Frame55 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem6 />
            <Frame57 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem7 />
            <Frame59 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem8 />
            <Frame61 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem9 />
            <Frame63 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem10 />
            <Frame65 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem11 />
            <Frame67 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />;
}

function Component01UiLightGeneralScrollbar() {
  return (
    <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame77 />
      <Component01UiLightGeneralScrollbar />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative w-full">
            <Frame83 />
          </div>
        </div>
      </div>
      <Frame81 />
    </div>
  );
}

function DropdownUpdateSpSelection() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame79 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex font-['Gilroy:Bold',sans-serif] gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] w-[170px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[12px]">Select all</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[12px]">Unselect All</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ecd0600} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <button className="content-stretch cursor-pointer flex items-center relative shrink-0">
      <Frame14 />
    </button>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[111.5px]">
      <Frame13 />
      <Frame84 />
    </div>
  );
}

function Component04LogosSocialInstagram() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram />
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p144d3972} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame15 />
      <Checked />
    </div>
  );
}

function Component04LogosSocialInstagram1() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram1 />
        </div>
      </div>
      <Frame38 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame16 />
      <Checked1 />
    </div>
  );
}

function Component04LogosSocialInstagram2() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram2 />
        </div>
      </div>
      <Frame39 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame17 />
      <Checked2 />
    </div>
  );
}

function Component04LogosSocialInstagram3() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram3 />
        </div>
      </div>
      <Frame40 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame18 />
      <Checked3 />
    </div>
  );
}

function Component04LogosSocialInstagram4() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram4 />
        </div>
      </div>
      <Frame41 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame19 />
      <Checked4 />
    </div>
  );
}

function Component04LogosSocialInstagram5() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram5 />
        </div>
      </div>
      <Frame42 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame20 />
      <Checked5 />
    </div>
  );
}

function Component04LogosSocialInstagram6() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram6 />
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame21 />
      <Checked6 />
    </div>
  );
}

function Component04LogosSocialInstagram7() {
  return (
    <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
        <g id="04-Logos/Social/Instagram">
          <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">My brand 2</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">@mybrand3</p>
      </div>
    </div>
  );
}

function GroupItem19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
        <div className="relative shrink-0 size-[44px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[12px]">AC</p>
        </div>
        <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <Component04LogosSocialInstagram7 />
        </div>
      </div>
      <Frame44 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2ee83500} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checked7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checked">
          <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Frame22 />
      <Checked7 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem12 />
            <Frame68 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem13 />
            <Frame69 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem14 />
            <Frame70 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem15 />
            <Frame71 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem16 />
            <Frame72 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem17 />
            <Frame73 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem18 />
            <Frame74 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem19 />
            <Frame75 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />;
}

function Component01UiLightGeneralScrollbar1() {
  return (
    <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame76 />
      <Component01UiLightGeneralScrollbar1 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
            <Frame85 />
            <Frame87 />
          </div>
        </div>
      </div>
      <Frame78 />
    </div>
  );
}

function DropdownUpdateSpSelection1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame80 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function RevampedComponent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-px relative shadow-[10px_4px_60px_0px_rgba(0,0,0,0.25)] w-full" data-name="Revamped Component">
      <DropdownUpdateSpSelection />
      <DropdownUpdateSpSelection1 />
    </div>
  );
}

export default function GroupDropdown() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Group Dropdown">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <RevampedComponent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[10px_4px_60px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}