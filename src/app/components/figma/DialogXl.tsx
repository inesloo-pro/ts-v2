import svgPaths from "../../../assets/icons/svg-jr3jqyum7b";
import imgImg from "figma:asset/588b45a045022c9fb8306bf26d83f725e744532a.png";

function CloseCircleSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Close-Circle-Solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close-Circle-Solid">
          <path clipRule="evenodd" d={svgPaths.p32a76400} fill="var(--fill-0, #AEB9C6)" fillRule="evenodd" id="Subtract" />
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

function BackIfNeeded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Back (If needed)">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Back (If needed)">
          <g id="Union">
            <path d={svgPaths.p266c1480} fill="var(--fill-0, #AEB9C6)" />
            <path clipRule="evenodd" d={svgPaths.p3038b80} fill="var(--fill-0, #AEB9C6)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title">
      <BackIfNeeded />
      <p className="font-['Gilroy:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] tracking-[-1px] whitespace-nowrap">Manage groups and profiles</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Groups">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p36f50880} fill="var(--fill-0, #A0A0A0)" id="Union" />
        </svg>
      </div>
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[20px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px]">Groups</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="03-Icons/Interface/SocialProfile-Filled">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p49a7c80} fill="var(--fill-0, #606060)" id="Vector" />
        </svg>
        <div className="absolute inset-[72.5%_0_0_72.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.4 4.4">
            <path d={svgPaths.pc2f1400} fill="var(--fill-0, #606060)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[20px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[25px]">Social profiles</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#606060] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[32px] h-[32px] items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <div className="bg-[#606060] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Buttons">
        <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/AddFiles">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p7c55ff0} fill="var(--fill-0, white)" id="Combined Shape" />
          </svg>
        </div>
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Add social profile(s)</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[150px] relative rounded-[6px] w-full">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center min-w-[inherit] p-[20px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Search">
            <div className="absolute inset-[0_0_0.01%_0]" data-name="Fill 1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.9991">
                <path clipRule="evenodd" d={svgPaths.p137a4484} fill="var(--fill-0, #A0A0A0)" fillRule="evenodd" id="Fill 1" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#a0a0a0] text-[14px] tracking-[-0.4px]">
            <p className="leading-[16px]">Search social profiles</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start min-h-px min-w-[150px] relative" data-name="01-UI_Light/Inputs">
        <Frame />
      </div>
      <div className="bg-white h-[48px] relative rounded-[6px] shrink-0" data-name="01-UI_Light/Dropdowns">
        <div className="content-stretch flex gap-[12px] h-full items-center justify-center overflow-clip p-[20px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Disconect">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p4ec0280} fill="var(--fill-0, #606060)" id="Combined Shape" />
            </svg>
          </div>
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
            <p className="leading-[16px]">Sort by: Disconnected</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Chevron-Bot">
            <div className="absolute inset-[31.54%_20%]" data-name="Fill 1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.90769">
                <path clipRule="evenodd" d={svgPaths.p22a90300} fill="var(--fill-0, #606060)" fillRule="evenodd" id="Fill 1" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] gap-[20px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] w-[374px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[14px]">Delete selected profiles</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[14px]">Select All</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#e0e0e0] content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Buttons">
        <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/AddFiles">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p7c55ff0} fill="var(--fill-0, #C0C0C0)" id="Combined Shape" />
          </svg>
        </div>
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c0c0c0] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Add these social profile to groups</p>
        </div>
      </div>
      <Frame70 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[7px] size-[24px]">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="04-Logos/Social/Instagram">
        <div className="absolute inset-[0_0_0.02%_0]" data-name="Combined Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961">
            <path d={svgPaths.p56e1c80} fill="var(--fill-0, #606060)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">ProfileNumberThree</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">Profile 3</p>
      </div>
      <div className="bg-[#f0f0f0] content-stretch flex items-center overflow-clip p-[6px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[10px]">instagram business/creator profile</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 size-[42px]" data-name="01-UI_Light/Profiles">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-[-2.38%]">
            <img alt="" className="block max-w-none size-full" height="44" src={imgImg} width="44" />
          </div>
        </div>
        <Frame1 />
      </div>
      <Frame26 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[16px] items-end justify-center overflow-clip p-[3px] relative rounded-[200px] shrink-0 w-[26px]" data-name="01-UI_Light/Toggles">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #606060)" id="Ellipse 8" r="5" />
          </svg>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function Uncheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Uncheck">
          <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p526d700} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
      <div className="bg-[#e0e0e0] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Disconnected</p>
        </div>
      </div>
      <Uncheck />
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame29 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[66px] pr-[20px] py-[12px] relative w-full">
          <div className="bg-[#f0f0f0] content-stretch flex gap-[5px] items-center overflow-clip p-[8px] relative rounded-[20px] shrink-0" data-name="01-UI_Light/Tags">
            <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Groups">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p211fcc00} fill="var(--fill-0, #606060)" id="Union" />
              </svg>
            </div>
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">GroupNumberOne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[14px]">We cannot connect to this profile. Please ask a Facebook Page Admin to give you a role on the Page. #21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame25 />
        <Frame30 />
        <Frame31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[50px] size-[24px]">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="04-Logos/Social/Tiktok">
        <div className="absolute inset-[0_6.56%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3755 20">
            <path d={svgPaths.p2db3c870} fill="var(--fill-0, #606060)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">ProfileNumberOne</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">Profile 1</p>
      </div>
      <div className="bg-[#f0f0f0] content-stretch flex items-center overflow-clip p-[6px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[10px]">TIKTOK PROFILE</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 size-[42px]" data-name="01-UI_Light/Profiles">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-[-2.38%]">
            <img alt="" className="block max-w-none size-full" height="44" src={imgImg} width="44" />
          </div>
        </div>
        <Frame2 />
      </div>
      <Frame38 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[16px] items-end justify-center overflow-clip p-[3px] relative rounded-[200px] shrink-0 w-[26px]" data-name="01-UI_Light/Toggles">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #606060)" id="Ellipse 8" r="5" />
          </svg>
        </div>
      </div>
      <Frame37 />
    </div>
  );
}

function Uncheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Uncheck">
          <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p526d700} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
      <div className="bg-[#e0e0e0] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Re-authenticate</p>
        </div>
      </div>
      <Uncheck1 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame36 />
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[66px] pr-[20px] py-[12px] relative w-full">
          <div className="bg-[#f0f0f0] content-stretch flex gap-[5px] items-center overflow-clip p-[8px] relative rounded-[20px] shrink-0" data-name="01-UI_Light/Tags">
            <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Groups">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p211fcc00} fill="var(--fill-0, #606060)" id="Union" />
              </svg>
            </div>
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">GroupNumberOne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[14px]">Please refresh your data access. #16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame35 />
        <Frame40 />
        <Frame41 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[50px] size-[24px]">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="04-Logos/Social/Tiktok">
        <div className="absolute inset-[0_6.56%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3755 20">
            <path d={svgPaths.p2db3c870} fill="var(--fill-0, #606060)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">ProfileNumberOne</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">Profile 1</p>
      </div>
      <div className="bg-[#f0f0f0] content-stretch flex items-center overflow-clip p-[6px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[10px]">TIKTOK PROFILE</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 size-[42px]" data-name="01-UI_Light/Profiles">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-[-2.38%]">
            <img alt="" className="block max-w-none size-full" height="44" src={imgImg} width="44" />
          </div>
        </div>
        <Frame3 />
      </div>
      <Frame46 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[16px] items-end justify-center overflow-clip p-[3px] relative rounded-[200px] shrink-0 w-[26px]" data-name="01-UI_Light/Toggles">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #606060)" id="Ellipse 8" r="5" />
          </svg>
        </div>
      </div>
      <Frame45 />
    </div>
  );
}

function Uncheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Uncheck">
          <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p526d700} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
      <div className="bg-[#e0e0e0] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Re-authenticate</p>
        </div>
      </div>
      <Uncheck2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame44 />
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[66px] pr-[20px] py-[12px] relative w-full">
          <div className="bg-[#f0f0f0] content-stretch flex gap-[5px] items-center overflow-clip p-[8px] relative rounded-[20px] shrink-0" data-name="01-UI_Light/Tags">
            <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Groups">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p211fcc00} fill="var(--fill-0, #606060)" id="Union" />
              </svg>
            </div>
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">GroupNumberOne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[14px]">Please refresh your data access. #16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame43 />
        <Frame48 />
        <Frame49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[50px] size-[24px]">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="04-Logos/Social/Tiktok">
        <div className="absolute inset-[0_6.56%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3755 20">
            <path d={svgPaths.p2db3c870} fill="var(--fill-0, #606060)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">ProfileNumberOne</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">Profile 1</p>
      </div>
      <div className="bg-[#f0f0f0] content-stretch flex items-center overflow-clip p-[6px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[10px]">TIKTOK PROFILE</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 size-[42px]" data-name="01-UI_Light/Profiles">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-[-2.38%]">
            <img alt="" className="block max-w-none size-full" height="44" src={imgImg} width="44" />
          </div>
        </div>
        <Frame4 />
      </div>
      <Frame54 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[16px] items-end justify-center overflow-clip p-[3px] relative rounded-[200px] shrink-0 w-[26px]" data-name="01-UI_Light/Toggles">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #606060)" id="Ellipse 8" r="5" />
          </svg>
        </div>
      </div>
      <Frame53 />
    </div>
  );
}

function Uncheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Uncheck">
          <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p526d700} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
      <div className="bg-[#e0e0e0] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Re-authenticate</p>
        </div>
      </div>
      <Uncheck3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame52 />
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[66px] pr-[20px] py-[12px] relative w-full">
          <div className="bg-[#f0f0f0] content-stretch flex gap-[5px] items-center overflow-clip p-[8px] relative rounded-[20px] shrink-0" data-name="01-UI_Light/Tags">
            <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Groups">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p211fcc00} fill="var(--fill-0, #606060)" id="Union" />
              </svg>
            </div>
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">GroupNumberOne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[14px]">Please refresh your data access. #16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame51 />
        <Frame56 />
        <Frame57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white bottom-[-2px] content-stretch flex items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[50px] size-[24px]">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="04-Logos/Social/Tiktok">
        <div className="absolute inset-[0_6.56%]" data-name="Path">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3755 20">
            <path d={svgPaths.p2db3c870} fill="var(--fill-0, #606060)" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">ProfileNumberOne</p>
      </div>
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">Profile 1</p>
      </div>
      <div className="bg-[#f0f0f0] content-stretch flex items-center overflow-clip p-[6px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
          <p className="leading-[10px]">TIKTOK PROFILE</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 size-[42px]" data-name="01-UI_Light/Profiles">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Img">
          <div className="absolute inset-[-2.38%]">
            <img alt="" className="block max-w-none size-full" height="44" src={imgImg} width="44" />
          </div>
        </div>
        <Frame5 />
      </div>
      <Frame62 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[16px] items-end justify-center overflow-clip p-[3px] relative rounded-[200px] shrink-0 w-[26px]" data-name="01-UI_Light/Toggles">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #606060)" id="Ellipse 8" r="5" />
          </svg>
        </div>
      </div>
      <Frame61 />
    </div>
  );
}

function Uncheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Uncheck">
          <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p526d700} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
      <div className="bg-[#e0e0e0] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[3px] shrink-0" data-name="01-UI_Light/Tags">
        <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
          <p className="leading-[14px]">Re-authenticate</p>
        </div>
      </div>
      <Uncheck4 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Frame60 />
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[66px] pr-[20px] py-[12px] relative w-full">
          <div className="bg-[#f0f0f0] content-stretch flex gap-[5px] items-center overflow-clip p-[8px] relative rounded-[20px] shrink-0" data-name="01-UI_Light/Tags">
            <div className="relative shrink-0 size-[12px]" data-name="03-Icons/Interface/Groups">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={svgPaths.p211fcc00} fill="var(--fill-0, #606060)" id="Union" />
              </svg>
            </div>
            <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[14px]">GroupNumberOne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
            <p className="leading-[14px]">Please refresh your data access. #16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame59 />
        <Frame64 />
        <Frame65 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
      <Frame42 />
      <Frame50 />
      <Frame58 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <Frame68 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px overflow-clip relative">
      <Frame24 />
      <Frame69 />
      <Frame32 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[20px]">Data access</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Disconect">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p4ec0280} fill="var(--fill-0, #606060)" id="Combined Shape" />
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] w-[min-content]">
        <p className="leading-[14px]">Click below to see data access status of your different social media accounts.</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c0c0c0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative w-full">
        <Frame22 />
        <div className="bg-[#f0f0f0] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="01-UI_Light/Buttons">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative size-full">
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
                <p className="leading-[16px]">Go to Data access page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#606060] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[14px]">3/10</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[16px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[20px]">Slots available</p>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame19 />
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[12px] tracking-[-0.3px] w-full">
        <p className="leading-[14px]">You can add more social profiles by upgrading your plan.</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[16px]">Enterprise yearly</p>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="03-Icons/Interface/Chevron-Right">
        <div className="absolute flex inset-[20%_31.54%] items-center justify-center">
          <div className="-rotate-90 flex-none h-[7.385px] w-[12px]">
            <div className="relative size-full" data-name="Fill 1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 5.16923">
                <path clipRule="evenodd" d={svgPaths.p5ba7d00} fill="var(--fill-0, #A0A0A0)" fillRule="evenodd" id="Fill 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[6px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative w-full">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[8px] tracking-[0.5px] uppercase whitespace-nowrap">
            <p className="leading-[10px]">Your plan</p>
          </div>
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative w-full">
        <Frame21 />
        <div className="bg-[#f0f0f0] h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="01-UI_Light/Buttons">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[12px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="03-Icons/Interface/Arrow-Top">
                <div className="absolute flex inset-[20%_21.3%] items-center justify-center">
                  <div className="flex-none h-[12px] rotate-180 w-[11.478px]">
                    <div className="relative size-full" data-name="Combined Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1824 9.59999">
                        <path clipRule="evenodd" d={svgPaths.p246cd380} fill="var(--fill-0, #606060)" fillRule="evenodd" id="Combined Shape" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[14px] tracking-[-0.4px] whitespace-nowrap">
                <p className="leading-[16px]">Change your plan</p>
              </div>
            </div>
          </div>
        </div>
        <Frame66 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[320px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame17 />
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c0c0c0] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-start p-[20px] relative size-full">
          <Frame23 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px overflow-clip relative">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <Frame7 />
    </div>
  );
}

export default function DialogXl() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[32px] pt-[60px] px-[60px] relative rounded-[16px] size-full" data-name="dialog-XL">
      <Close />
      <Title />
      <Frame6 />
    </div>
  );
}