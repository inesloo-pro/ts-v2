import svgPaths from "../../../assets/icons/svg-tggjm3qjo9";

function Frame() {
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

function Frame77() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame77 />
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Search ...</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame81 />
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">{`Manage profiles & groups`}</p>
      </div>
    </div>
  );
}

function GroupDropdownHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
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
      <Frame20 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
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
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">AL</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">All</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">28 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame40 />
      <Frame21 />
    </div>
  );
}

function Pin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Pin">
          <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
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
          <path d={svgPaths.p1ce00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Pin />
      <Frame1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame22() {
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
      <Frame41 />
      <Frame22 />
    </div>
  );
}

function Pin1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Pin">
          <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
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

function Frame44() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Pin1 />
      <RadioOff />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame23() {
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
      <Frame45 />
      <Frame23 />
    </div>
  );
}

function Pin2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Pin">
          <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
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

function Frame46() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Pin2 />
      <RadioOff1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame24() {
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
      <Frame47 />
      <Frame24 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame2 />
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

function Frame48() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin />
      <RadioOff2 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame25() {
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
      <Frame49 />
      <Frame25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame3 />
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

function Frame50() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin1 />
      <RadioOff3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap">
        <p className="leading-[10px]">BA</p>
      </div>
    </div>
  );
}

function Frame26() {
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
      <Frame51 />
      <Frame26 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame4 />
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

function Frame52() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin2 />
      <RadioOff4 />
    </div>
  );
}

function Frame53() {
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
      <Frame53 />
      <Frame27 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame5 />
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

function Frame54() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin3 />
      <RadioOff5 />
    </div>
  );
}

function Frame55() {
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
      <Frame55 />
      <Frame28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame6 />
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

function Frame56() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin4 />
      <RadioOff6 />
    </div>
  );
}

function Frame57() {
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
      <Frame57 />
      <Frame29 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame7 />
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

function Frame58() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin5 />
      <RadioOff7 />
    </div>
  );
}

function Frame59() {
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
      <Frame59 />
      <Frame30 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame8 />
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

function Frame60() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin6 />
      <RadioOff8 />
    </div>
  );
}

function Frame61() {
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
      <Frame61 />
      <Frame31 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame9 />
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin7 />
      <RadioOff9 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <ListsGroupItem />
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem1 />
            <Frame43 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem2 />
            <Frame44 />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Lists - Group Item">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem3 />
            <Frame46 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem4 />
            <Frame48 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem5 />
            <Frame50 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem6 />
            <Frame52 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem7 />
            <Frame54 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem8 />
            <Frame56 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem9 />
            <Frame58 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem10 />
            <Frame60 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - Group Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem11 />
            <Frame62 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />;
}

function Component01UiLightGeneralScrollbar() {
  return (
    <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame72 />
      <Component01UiLightGeneralScrollbar />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <GroupDropdownHeader />
      <Frame76 />
    </div>
  );
}

function DropdownUpdateSpSelection() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame74 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
    </div>
  );
}

function Frame80() {
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

function Frame10() {
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

function Frame79() {
  return (
    <button className="content-stretch cursor-pointer flex items-center opacity-0 relative shrink-0">
      <Frame10 />
    </button>
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

function Frame32() {
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
      <Frame32 />
    </div>
  );
}

function Pin3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Pin">
          <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
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

function Frame63() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Pin3 />
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

function Frame33() {
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
      <Frame33 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame11 />
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

function Frame64() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin8 />
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

function Frame34() {
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
      <Frame34 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame12 />
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

function Frame65() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin9 />
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

function Frame35() {
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
      <Frame35 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame13 />
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

function Frame66() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin10 />
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

function Frame36() {
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
      <Frame36 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame14 />
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

function Frame67() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin11 />
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
      <Frame37 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame15 />
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

function Frame68() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin12 />
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
      <Frame38 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame16 />
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

function Frame69() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin13 />
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
      <Frame39 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Notpin14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
      <Frame17 />
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

function Frame70() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Notpin14 />
      <Checked7 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem12 />
            <Frame63 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem13 />
            <Frame64 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem14 />
            <Frame65 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem15 />
            <Frame66 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem16 />
            <Frame67 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem17 />
            <Frame68 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem18 />
            <Frame69 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
            <GroupItem19 />
            <Frame70 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />;
}

function Component01UiLightGeneralScrollbar1() {
  return (
    <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame71 />
      <Component01UiLightGeneralScrollbar1 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
            <Frame80 />
            <Frame79 />
          </div>
        </div>
      </div>
      <Frame73 />
    </div>
  );
}

function DropdownUpdateSpSelection1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame75 />
        <div className="bg-[#606060] h-[32px] relative rounded-[3px] shrink-0 w-full" data-name="01-UI_Light/Buttons">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f0f0f0] text-[12px] tracking-[-0.3px] whitespace-nowrap">
                <p className="leading-[14px]">Save selection as a group</p>
              </div>
            </div>
          </div>
        </div>
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

export default function Stage01Step() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="STAGE 01 - Step 1">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RevampedComponent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[10px_4px_60px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}