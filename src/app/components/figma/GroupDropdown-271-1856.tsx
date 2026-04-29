import svgPaths from "../../../assets/icons/svg-tlmf0eh7es";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
        <p className="leading-[14px]">All Social Profiles</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
        <p className="leading-[12px]">95 Social profiles</p>
      </div>
    </div>
  );
}

function GroupItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
      <Frame2 />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <RadioOff />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[138px]">
      <div className="bg-[#d9d9d9] rounded-[8px] shrink-0 size-[64px]" />
      <div className="flex flex-col font-['Times_New_Roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[20px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">No group found ...</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Try again blabla</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[308px] items-center justify-center relative shrink-0 w-[336.5px]">
      <Frame12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Lists - Group Item">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[8px] relative size-full">
            <GroupItem />
            <Frame3 />
          </div>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />;
}

function Component01UiLightGeneralScrollbar() {
  return (
    <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame4 />
      <Component01UiLightGeneralScrollbar />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame7 />
    </div>
  );
}

function DropdownUpdateSpSelection() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
    </div>
  );
}

function Frame10() {
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

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[138px]">
      <div className="bg-[#d9d9d9] rounded-[999px] shrink-0 size-[64px]" />
      <div className="flex flex-col font-['Times_New_Roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[20px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">No profile found ...</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Try again blabla</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[308px] items-center justify-center relative shrink-0 w-[336.5px]">
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Group Dropdown Header">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
            <Frame10 />
          </div>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}

function DropdownUpdateSpSelection1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px]" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function RevampedComponent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-px relative w-full" data-name="Revamped Component">
      <DropdownUpdateSpSelection />
      <DropdownUpdateSpSelection1 />
    </div>
  );
}

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

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[335px]">
      <Frame8 />
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Ap</p>
      </div>
    </div>
  );
}

function CloseCircleSolid() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close-Circle-Solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close-Circle-Solid">
          <path clipRule="evenodd" d={svgPaths.p15763f80} fill="var(--fill-0, #A0A0A0)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <Frame15 />
      <CloseCircleSolid />
    </div>
  );
}

function GroupDropdownHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

export default function GroupDropdown() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="Group Dropdown">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <RevampedComponent />
        <GroupDropdownHeader />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[10px_4px_60px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}