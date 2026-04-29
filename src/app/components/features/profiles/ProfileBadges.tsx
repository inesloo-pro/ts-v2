import { useState } from 'react';
import svgPaths from "../../../../assets/icons/svg-lx8i39d8oo";
import svgPathsDefault from "../../../../assets/icons/svg-jcr8y89wfj";

export function SocialBadge({ platform }: { platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' | 'facebook' | 'threads' }) {
  if (platform === 'instagram') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[7px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20.0001">
            <path d={svgPaths.p16154a40} fill="#76869A" />
          </svg>
        </div>
      </div>
    );
  } else if (platform === 'linkedin') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[7px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d="M17.0391 17.0434H14.0775V12.4025C14.0775 11.2959 14.055 9.87167 12.5341 9.87167C10.99 9.87167 10.7541 11.0758 10.7541 12.3209V17.0434H7.7925V7.5H10.635V8.80084H10.6758C11.0733 8.05084 12.04 7.25917 13.4841 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805V17.0434H17.0391ZM4.4475 6.19417C3.49417 6.19417 2.72834 5.4225 2.72834 4.47334C2.72834 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47334C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0434H2.9625V7.5H5.9325V17.0434ZM18.5209 0H1.47584C0.66 0 0 0.645 0 1.44084V18.5592C0 19.3559 0.66 20 1.47584 20H18.5184C19.3334 20 20 19.3559 20 18.5592V1.44084C20 0.645 19.3334 0 18.5184 0H18.5209Z" fill="#76869A" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  } else if (platform === 'tiktok') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[9999px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[0_6.56%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3758 20.0003">
              <path d={svgPaths.p19ceed00} fill="black" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (platform === 'x') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[3px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[0_1.07%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.57 20">
              <path d={svgPaths.p25c5e880} fill="black" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (platform === 'facebook') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[9999px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[0.18%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9267">
              <path d="M20 9.9635c0-5.5225-4.4774-10-10-10S0 4.441 0 9.9635c0 4.9915 3.657 9.1285 8.4376 9.878v-6.9875H5.8984v-2.8905h2.5392v-2.2035c0-2.5055 1.493-3.8905 3.7775-3.8905 1.094 0 2.238.196 2.238.196v2.461h-1.261c-1.2425 0-1.6305.77-1.6305 1.562v1.875h2.773l-.443 2.8905h-2.33v6.9875C16.343 19.092 20 14.955 20 9.9635z" fill="#76869A" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else if (platform === 'threads') {
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col items-start overflow-clip p-[2px] right-[-6px] rounded-[7px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[0_6.13%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5475 20">
              <path d="M10.1552 20h-.0058c-2.9841-.02-5.2782-1.0042-6.8199-2.9242C1.9583 15.3667 1.2499 12.9883 1.2266 10.0083v-.0142c.025-2.9825.7325-5.3583 2.1042-7.0691C4.8708 1.0042 7.1658.02 10.15 0h.0117c2.2883.0167 4.2025.6042 5.6883 1.7483 1.3975 1.075 2.3817 2.6083 2.9242 4.5558l-1.7-.4742c-.92-3.3-.325-4.9866-6.92-5.0133-2.425.0184-4.2583.78-5.45 2.2642C3.5892 5.42 2.9891 7.4283 2.9658 10c.0225 2.5716.5983 4.58 1.7141 5.97 1.1917 1.485 3.0259 2.2483 5.45 2.2641 2.186-.0166 3.6316-.5258 4.8333-1.7041 1.3725-1.3442 1.3483-2.9942.9083-3.9984-.2583-.5916-.7275-1.0833-1.3617-1.4583-.16 1.1266-.5183 2.0383-1.07 2.7266-.7383.9184-1.7833 1.42-3.1083 1.4917-1.0017.0542-1.9675-.1817-2.7158-.6675-.8859-.5741-1.4042-1.45-1.46-2.47-.0541-.9916.34-1.9041 1.1083-2.5683.7334-.6333 1.7659-1.0058 2.9859-1.0758.7933-.0442 1.5908.0083 2.5166.1183l-.105.6183c-.5716-.0783-1.15-.1166-1.7191-.1166h-.0042c-1.0067.0575-1.8483.3541-2.4375.8566-.5283.45-.8.1042-.7625 1.6709.0383.7008.3367 1.2791.8617 1.6716.5225.3909 1.2308.5834 1.9941.5409 1.0084-.0534 1.79-.4525 2.325-1.1859.5383-.7383.8133-1.6941.8133-2.8475 0-.1241-.0025-.2475-.0075-.37l-.1125-1.7316.1166-.0892c1.0617-.8083 2.4667-1.0883 4.1859-.8341.8858.1308 1.6533.4808 2.2833 1.04.83.7383 1.3442 1.8166 1.5283 3.2058.2175 1.6392-.07 3.125-.8566 4.4192-1.0034 1.6483-2.6259 2.6341-4.8225 2.9333-.6808.0933-1.3808.14-2.0783.14l-.02-.0008z" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else { // youtube
    return (
      <div className="absolute bg-white bottom-[-2px] content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip p-[2px] right-[-6px] rounded-[7px]">
        <div className="overflow-clip relative shrink-0 size-[28.39px]">
          <div className="absolute inset-[14.77%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.39 20.0031">
              <path d="M27.7918 3.1236C27.6315 2.51955 27.3152 1.96822 26.8747 1.52484C26.4342 1.08147 25.8853 0.761614 25.2821 0.597281C23.0692 1.40992e-07 14.1928 0 14.1928 0C14.1928 0 5.31636 1.40992e-07 3.10229 0.597281C2.4996 0.76189 1.95119 1.08188 1.51043 1.52523C1.06967 1.96858 0.7541 2.51972 0.593732 3.1236C0 5.35186 0 10 0 10C0 10 0 14.6481 0.593732 16.8764C0.753995 17.4805 1.07035 18.0318 1.51081 18.4751C1.95128 18.9185 2.50051 19.2384 3.10348 19.4027C5.31636 20 14.1928 20 14.1928 20C14.1928 20 23.0692 20 25.2833 19.4027C25.8863 19.2384 26.4355 18.9186 26.8761 18.4753C27.3166 18.0319 27.6331 17.4805 27.793 16.8764C28.3856 14.6481 28.3856 10 28.3856 10C28.3856 10 28.3856 5.35186 27.7918 3.1236ZM11.2892 14.22V5.78001L18.7085 10L11.2892 14.22Z" fill="#76869A" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export function BadTokenBadge() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="absolute bg-[#76869a] content-stretch flex gap-[2px] items-center justify-center left-0 p-[2px] rounded-[9999px] top-0"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="relative shrink-0 size-[12px]">
        <svg className="absolute block size-full cursor-help" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g>
            <path d={svgPathsDefault.p33523640} fill="white" />
          </g>
        </svg>
      </div>
      {showTooltip && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#303030] text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none">
          Refresh social profile credentials
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#303030]" />
        </div>
      )}
    </div>
  );
}
