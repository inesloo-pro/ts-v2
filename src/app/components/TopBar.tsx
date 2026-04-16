import svgPaths from "../../imports/Iconosquare-1/svg-k0eyddu7lt";

export function TopBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[12px]">
      {/* Go to... dropdown */}
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.6)] transition-colors">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] tracking-[-0.072px] whitespace-nowrap">🔍 Go to... (⌘+K)</p>
        </div>
        <div className="relative shrink-0 size-[12px]">
          <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
              <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Get started dropdown */}
      <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.6)] transition-colors">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] tracking-[-0.072px] whitespace-nowrap">🚀 Get started</p>
        </div>
        <div className="relative shrink-0 size-[12px]">
          <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
              <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
