import svgPaths from "../../../assets/icons/svg-8n2x55edv1";

function Frame() {
  return (
    <button className="bg-white cursor-pointer h-[48px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] text-left tracking-[-0.4px] whitespace-nowrap">
            <p className="leading-[16px]">Custom selection 2</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] w-full">
        <p className="leading-[20px]">Group name</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[72px]">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[32px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[32px]">CS</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[228px]">
      <div className="bg-[#f0f0f0] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Buttons">
        <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Upload">
          <div className="absolute inset-[3.53%_0]" data-name="Combined Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.1522">
              <path d={svgPaths.p2aa92d80} fill="var(--fill-0, #606060)" id="Combined Shape" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Upload image</p>
        </div>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#c0c0c0] text-[12px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[14px]">{`Your photo must be at least 200×200px & weigh maximum 1MB. (png, jpg accepted)`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] w-full">
        <p className="leading-[20px]">Group avatar</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Gilroy:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#606060] text-[32px] tracking-[-1px] w-full">Create a group</p>
      <Frame6 />
    </div>
  );
}

function Secondary() {
  return (
    <div className="h-[48px] min-w-[150px] relative rounded-[6px] shrink-0" data-name="Secondary">
      <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[16px]">Cancel</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6ecf4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#606060] content-stretch flex h-[48px] items-center justify-center min-w-[150px] overflow-clip px-[32px] py-[12px] relative rounded-[6px] shrink-0" data-name="Primary">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">Confirm</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="Buttons">
      <Secondary />
      <Primary />
    </div>
  );
}

function ContentButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content + Buttons">
      <Content />
      <Buttons />
    </div>
  );
}

function CloseCircleSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close-Circle-Solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close-Circle-Solid">
          <path clipRule="evenodd" d={svgPaths.p32a76400} fill="var(--fill-0, #A0A0A0)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-[20px] top-[20px]" data-name="Close">
      <CloseCircleSolid />
    </div>
  );
}

function DialogM() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[600px] min-w-[600px] pb-[32px] pt-[60px] px-[60px] relative rounded-[16px] shrink-0 w-[600px]" data-name="dialog-M">
      <ContentButtons />
      <Close />
    </div>
  );
}

function OverlayPaddings() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(29,29,27,0.9)] content-stretch flex flex-col h-[920px] items-center justify-center left-1/2 overflow-clip p-[40px] top-0 w-[1440px]" data-name="overlay+paddings">
      <DialogM />
    </div>
  );
}

function DialogsM() {
  return (
    <div className="absolute h-[920px] left-0 overflow-clip top-0 w-[1440px]" data-name="dialogs/M">
      <OverlayPaddings />
    </div>
  );
}

export default function IEditMyGroupInfosForABetterProjectManagement() {
  return (
    <div className="content-stretch flex items-start pl-[24px] pr-[20px] pt-[12px] relative size-full" data-name="I edit my group infos for a better project management">
      <DialogsM />
    </div>
  );
}