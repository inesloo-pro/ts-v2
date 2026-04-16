import svgPaths from "../../../assets/icons/svg-x6lzkpcmag";

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

function Frame7() {
  return (
    <button className="content-stretch cursor-pointer flex items-center relative shrink-0">
      <Frame />
    </button>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[10px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">{`Manage profiles & groups`}</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Frame3() {
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[80px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <circle cx="40" cy="40" fill="var(--fill-0, #D9D9D9)" id="Ellipse 50" r="40" />
        </svg>
      </div>
      <div className="flex flex-col font-['Times_New_Roman:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[20px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[12px]">Create your first group</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[12px] not-italic relative shrink-0 text-[#606060] text-[10px] text-center tracking-[-0.3px] whitespace-nowrap">
        <p className="mb-0">Create your first group to organize social profiles,</p>
        <p>collaborate with others and build campaigns.</p>
      </div>
      <div className="h-[32px] relative rounded-[3px] shrink-0 w-full" data-name="01-UI_Light/Buttons">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">Create a new group</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[308px] items-center justify-center relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <ListsGroupItem />
      <Frame9 />
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

function Frame6() {
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
      <div className="relative shrink-0 w-full" data-name="Group Dropdown Header">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative w-full">
            <Frame8 />
          </div>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

export default function DropdownUpdateSpSelection() {
  return (
    <div className="relative rounded-bl-[4px] rounded-tl-[4px] size-full" data-name="Dropdown : Update SP Selection">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
    </div>
  );
}