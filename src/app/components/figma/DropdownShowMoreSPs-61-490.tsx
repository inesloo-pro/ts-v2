import svgPaths from "../../../assets/icons/svg-mp92e0ek8o";
type SelectBarSpItemProps = {
  className?: string;
  context?: "navbar" | "dropdown-list";
  hasError?: boolean;
  hasLabel?: "false";
  isActive?: boolean;
  isLongListContainer?: boolean;
  isPinned?: "false";
  isSupported?: boolean;
};

function SelectBarSpItem({ className, context = "navbar", hasError = false, hasLabel = "false", isActive = true, isLongListContainer = false, isPinned = "false", isSupported = true }: SelectBarSpItemProps) {
  const isNotIsActiveAndHasErrorAndIsSupportedAndNotIsLongListContainer = !isActive && hasError && isSupported && !isLongListContainer && context === "dropdown-list" && hasLabel === "false" && isPinned === "false";
  const isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndDropdown = !isActive && isSupported && !isLongListContainer && context === "dropdown-list" && hasLabel === "false" && isPinned === "false" && [false, true].includes(hasError);
  const isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndFalseAnd = !isActive && isSupported && !isLongListContainer && hasLabel === "false" && isPinned === "false" && ((!hasError && context === "navbar") || (hasError && context === "navbar") || (!hasError && context === "dropdown-list") || (hasError && context === "dropdown-list"));
  const isNotIsActiveAndNotHasErrorAndIsSupportedAndIsLongListContainer = !isActive && !hasError && isSupported && isLongListContainer && context === "navbar" && hasLabel === "false" && isPinned === "false";
  const isNotIsActiveAndNotHasErrorAndIsSupportedAndNotIsLongList = !isActive && !hasError && isSupported && !isLongListContainer && context === "dropdown-list" && hasLabel === "false" && isPinned === "false";
  const isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList = !isActive && !hasError && !isSupported && !isLongListContainer && context === "navbar" && hasLabel === "false" && isPinned === "false";
  const isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 = !isActive && !hasError && !isSupported && !isLongListContainer && context === "dropdown-list" && hasLabel === "false" && isPinned === "false";
  return (
    <div className={className || `bg-[#c4c4c4] content-stretch flex items-center justify-center relative rounded-[999px] ${isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "gap-[12px] opacity-60 size-[32px]" : isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndDropdown ? "gap-[12px] size-[32px]" : isNotIsActiveAndNotHasErrorAndIsSupportedAndIsLongListContainer ? "size-[42px]" : isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList ? "gap-[12px] opacity-60 size-[42px]" : "gap-[12px] size-[42px]"}`}>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      {hasLabel === "false" && isPinned === "false" && ((isActive && !hasError && isSupported && !isLongListContainer && context === "navbar") || (!isActive && !hasError && isSupported && !isLongListContainer && context === "navbar") || (isActive && hasError && !isSupported && !isLongListContainer && context === "navbar") || (isActive && !hasError && !isSupported && !isLongListContainer && context === "navbar") || (isActive && hasError && isSupported && !isLongListContainer && context === "navbar") || (!isActive && hasError && isSupported && !isLongListContainer && context === "navbar") || (!isActive && !hasError && isSupported && isLongListContainer && context === "navbar") || (!isActive && !hasError && isSupported && !isLongListContainer && context === "dropdown-list") || (!isActive && !hasError && !isSupported && !isLongListContainer && context === "dropdown-list") || (!isActive && hasError && isSupported && !isLongListContainer && context === "dropdown-list")) && (
        <div className={isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? '-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-["Gilroy:Medium",sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap' : isNotIsActiveAndNotHasErrorAndIsSupportedAndIsLongListContainer ? 'flex flex-col font-["Gilroy:Medium",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[9px] text-center whitespace-nowrap' : "relative shrink-0 size-[44px]"}>
          {!isLongListContainer && hasLabel === "false" && isPinned === "false" && ((isActive && !hasError && isSupported && context === "navbar") || (!isActive && !hasError && isSupported && context === "navbar") || (isActive && hasError && !isSupported && context === "navbar") || (isActive && !hasError && !isSupported && context === "navbar") || (isActive && hasError && isSupported && context === "navbar") || (!isActive && hasError && isSupported && context === "navbar") || (!isActive && !hasError && isSupported && context === "dropdown-list") || (!isActive && hasError && isSupported && context === "dropdown-list")) && (
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndFalseAnd ? "0 0 32 32" : "0 0 44 44"}>
              <circle cx="22" cy="22" id="Ellipse 50" opacity={isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndFalseAnd ? "0" : undefined} r="21.5" stroke="var(--stroke-0, #606060)" />
            </svg>
          )}
          {!isActive && !hasError && hasLabel === "false" && isPinned === "false" && ((isSupported && isLongListContainer && context === "navbar") || (!isSupported && !isLongListContainer && context === "dropdown-list")) && <p className={isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "leading-[12px]" : "leading-[10px]"}>{isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "AC" : isNotIsActiveAndNotHasErrorAndIsSupportedAndIsLongListContainer ? "6+" : ""}</p>}
        </div>
      )}
      {!isLongListContainer && hasLabel === "false" && isPinned === "false" && ((isActive && !hasError && isSupported && context === "navbar") || (!isActive && !hasError && isSupported && context === "navbar") || (isActive && hasError && !isSupported && context === "navbar") || (isActive && !hasError && !isSupported && context === "navbar") || (!isActive && !hasError && !isSupported && context === "navbar") || (isActive && hasError && isSupported && context === "navbar") || (!isActive && hasError && isSupported && context === "navbar") || (!isActive && !hasError && !isSupported && context === "dropdown-list")) && (
        <div className={`absolute bg-white content-stretch flex items-center justify-center p-px rounded-[6px] ${isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "bottom-[2px] h-[14px] right-[-5px]" : "bottom-[-3px] h-[20px] right-[-7px]"}`} data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <div className={`h-full relative shrink-0 ${isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "w-[12px]" : "w-[18px]"}`} data-name="04-Logos/Social/Instagram">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? "0 0 12.0002 12.0002" : "0 0 18.0002 18.0002"}>
              <g id="04-Logos/Social/Instagram">
                <path d={isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList1 ? svgPaths.p1f631200 : svgPaths.p16154a40} fill="var(--fill-0, #606060)" id="Combined Shape" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {!isLongListContainer && hasLabel === "false" && isPinned === "false" && ((isActive && !hasError && isSupported && context === "navbar") || (!isActive && !hasError && isSupported && context === "navbar") || (isActive && hasError && !isSupported && context === "navbar") || (isActive && !hasError && !isSupported && context === "navbar") || (isActive && hasError && isSupported && context === "navbar") || (!isActive && !hasError && isSupported && context === "dropdown-list")) && <div className={`-translate-x-1/2 absolute ${isNotIsActiveAndNotHasErrorAndIsSupportedAndNotIsLongList ? '-translate-y-1/2 flex flex-col font-["Gilroy:Medium",sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap' : !isActive && !hasError && isSupported && !isLongListContainer && context === "navbar" && hasLabel === "false" && isPinned === "false" ? '-translate-y-1/2 flex flex-col font-["Gilroy:Medium",sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[9px] text-center top-1/2 whitespace-nowrap' : "bg-[#606060] h-px left-1/2 rounded-[1px] top-[50px] w-[42px]"}`}>{!isActive && !hasError && isSupported && !isLongListContainer && hasLabel === "false" && isPinned === "false" && ["navbar", "dropdown-list"].includes(context) && <p className={isNotIsActiveAndNotHasErrorAndIsSupportedAndNotIsLongList ? "leading-[12px]" : "leading-[10px]"}>AC</p>}</div>}
      {hasError && !isLongListContainer && hasLabel === "false" && isPinned === "false" && ((isActive && !isSupported && context === "navbar") || (isActive && isSupported && context === "navbar") || (!isActive && isSupported && context === "navbar") || (!isActive && isSupported && context === "dropdown-list")) && (
        <div className="absolute left-[-2px] size-[14px] top-0" data-name="Frame">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Frame">
              <rect fill="var(--fill-0, #E0E0E0)" height="14" rx="7" width="14" />
              <path d={svgPaths.p33523640} fill="var(--fill-0, #606060)" id="Vector" />
            </g>
          </svg>
        </div>
      )}
      {isActive && !isLongListContainer && context === "navbar" && hasLabel === "false" && isPinned === "false" && ((!hasError && isSupported) || (hasError && !isSupported) || (!hasError && !isSupported) || (hasError && isSupported)) && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[9px] text-center top-1/2 whitespace-nowrap">
          <p className="leading-[10px]">AC</p>
        </div>
      )}
      {!isActive && hasError && isSupported && !isLongListContainer && hasLabel === "false" && isPinned === "false" && ["navbar", "dropdown-list"].includes(context) && (
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-["Gilroy:Medium",sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-center top-1/2 whitespace-nowrap ${isNotIsActiveAndHasErrorAndIsSupportedAndNotIsLongListContainer ? "text-[8px] tracking-[-0.3px]" : "text-[9px]"}`}>
          <p className={isNotIsActiveAndHasErrorAndIsSupportedAndNotIsLongListContainer ? "leading-[12px]" : "leading-[10px]"}>AC</p>
        </div>
      )}
      {isNotIsActiveAndIsSupportedAndNotIsLongListContainerAndDropdown && (
        <div className={`absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] ${!isActive && hasError && isSupported && !isLongListContainer && hasLabel === "false" && isPinned === "false" ? "h-[14px]" : "size-[14px]"}`} data-name="Socials (UX)">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
          <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
              <g id="04-Logos/Social/Instagram">
                <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {isNotIsActiveAndNotHasErrorAndNotIsSupportedAndNotIsLongList && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[9px] text-center top-1/2 whitespace-nowrap">
          <p className="leading-[10px]">AC</p>
        </div>
      )}
    </div>
  );
}
type ListsSpItemProps = {
  className?: string;
  isChecked?: boolean;
  isHovered?: boolean;
  isPinned?: boolean;
  isSupported?: boolean;
  showControls?: boolean;
  showPin?: boolean;
};

function ListsSpItem({ className, isChecked = false, isHovered = false, isPinned = false, isSupported = true, showControls = true, showPin = true }: ListsSpItemProps) {
  const isNotIsPinnedAndNotIsCheckedAndIsHoveredAndNotShowControlsAndNot = !isPinned && !isChecked && isHovered && !showControls && !isSupported && showPin;
  const isNotIsSupportedAndShowPinAndIsNotIsPinnedAndNotIsCheckedAndNot = !isSupported && showPin && ((!isPinned && !isChecked && !isHovered && showControls) || (!isPinned && !isChecked && !isHovered && !showControls) || (!isPinned && !isChecked && isHovered && showControls) || (!isPinned && !isChecked && isHovered && !showControls) || (isPinned && !isChecked && !isHovered && showControls) || (isPinned && !isChecked && isHovered && showControls) || (!isPinned && isChecked && !isHovered && showControls) || (!isPinned && isChecked && isHovered && showControls) || (isPinned && isChecked && !isHovered && showControls) || (isPinned && isChecked && isHovered && showControls));
  return (
    <div className={className || `content-stretch flex items-center px-[12px] relative w-[280px] ${!isPinned && !isChecked && isHovered && !showControls && isSupported && showPin ? "bg-[#f0f0f0]" : isHovered && ((!isPinned && !isChecked && showControls && isSupported && showPin) || (!isPinned && !isChecked && showControls && !isSupported && showPin) || (!isPinned && !isChecked && !showControls && !isSupported && showPin) || (isPinned && !isChecked && showControls && isSupported && showPin) || (isPinned && !isChecked && showControls && !isSupported && showPin) || (!isPinned && isChecked && showControls && isSupported && showPin) || (!isPinned && isChecked && showControls && !isSupported && showPin) || (isPinned && isChecked && showControls && isSupported && showPin) || (isPinned && isChecked && showControls && !isSupported && showPin) || (!isPinned && !isChecked && showControls && isSupported && !showPin) || (!isPinned && isChecked && showControls && isSupported && !showPin)) ? "bg-[#f0f0f0] gap-[12px]" : !isPinned && !isChecked && !isHovered && !showControls && showPin && [true, false].includes(isSupported) ? "" : "gap-[12px]"}`}>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
        <SelectBarSpItem className={`bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px] ${isNotIsSupportedAndShowPinAndIsNotIsPinnedAndNotIsCheckedAndNot ? "opacity-60" : ""}`} context="dropdown-list" isActive={false} isSupported={isNotIsSupportedAndShowPinAndIsNotIsPinnedAndNotIsCheckedAndNot ? false : undefined} />
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
            <p className="leading-[14px]">My brand 2</p>
          </div>
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
            <p className="leading-[12px]">@mybrand3</p>
          </div>
        </div>
      </div>
      {((!isPinned && !isChecked && !isHovered && showControls && isSupported && showPin) || (!isPinned && !isChecked && !isHovered && showControls && !isSupported && showPin) || (!isPinned && !isChecked && isHovered && showControls && isSupported && showPin) || (!isPinned && !isChecked && isHovered && showControls && !isSupported && showPin) || isNotIsPinnedAndNotIsCheckedAndIsHoveredAndNotShowControlsAndNot || (isPinned && !isChecked && !isHovered && showControls && isSupported && showPin) || (isPinned && !isChecked && !isHovered && showControls && !isSupported && showPin) || (isPinned && !isChecked && isHovered && showControls && isSupported && showPin) || (isPinned && !isChecked && isHovered && showControls && !isSupported && showPin) || (!isPinned && isChecked && !isHovered && showControls && isSupported && showPin) || (!isPinned && isChecked && !isHovered && showControls && !isSupported && showPin) || (!isPinned && isChecked && isHovered && showControls && isSupported && showPin) || (!isPinned && isChecked && isHovered && showControls && !isSupported && showPin) || (isPinned && isChecked && !isHovered && showControls && isSupported && showPin) || (isPinned && isChecked && !isHovered && showControls && !isSupported && showPin) || (isPinned && isChecked && isHovered && showControls && isSupported && showPin) || (isPinned && isChecked && isHovered && showControls && !isSupported && showPin) || (!isPinned && !isChecked && !isHovered && showControls && isSupported && !showPin) || (!isPinned && !isChecked && isHovered && showControls && isSupported && !showPin) || (!isPinned && isChecked && !isHovered && showControls && isSupported && !showPin) || (!isPinned && isChecked && isHovered && showControls && isSupported && !showPin)) && (
        <div className={`content-stretch flex items-center ${isNotIsPinnedAndNotIsCheckedAndIsHoveredAndNotShowControlsAndNot ? "-translate-y-1/2 absolute left-[52px] top-1/2 w-[163px]" : "gap-[2px] relative shrink-0"}`}>
          {!isPinned && showControls && showPin && ((!isChecked && !isHovered && isSupported) || (!isChecked && !isHovered && !isSupported) || (!isChecked && isHovered && isSupported) || (!isChecked && isHovered && !isSupported) || (isChecked && !isHovered && isSupported) || (isChecked && !isHovered && !isSupported) || (isChecked && isHovered && isSupported) || (isChecked && isHovered && !isSupported)) && (
            <div className="content-stretch flex items-center relative shrink-0 size-[20px]" data-name="Notpin">
              <div className="relative shrink-0 size-[20px]" data-name="Frame">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Frame">
                    <path d={svgPaths.p1429e180} fill="var(--fill-0, #C0C0C0)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          )}
          {isPinned && showControls && showPin && ((!isChecked && !isHovered && isSupported) || (!isChecked && !isHovered && !isSupported) || (!isChecked && isHovered && isSupported) || (!isChecked && isHovered && !isSupported) || (isChecked && !isHovered && isSupported) || (isChecked && !isHovered && !isSupported) || (isChecked && isHovered && isSupported) || (isChecked && isHovered && !isSupported)) && (
            <div className="relative shrink-0 size-[20px]" data-name="Pin">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Pin">
                  <path d={svgPaths.p3dd5f880} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
              </svg>
            </div>
          )}
          {!isChecked && showControls && ((!isPinned && !isHovered && isSupported && showPin) || (!isPinned && !isHovered && !isSupported && showPin) || (!isPinned && isHovered && isSupported && showPin) || (!isPinned && isHovered && !isSupported && showPin) || (isPinned && !isHovered && isSupported && showPin) || (isPinned && !isHovered && !isSupported && showPin) || (isPinned && isHovered && isSupported && showPin) || (isPinned && isHovered && !isSupported && showPin) || (!isPinned && !isHovered && isSupported && !showPin) || (!isPinned && isHovered && isSupported && !showPin)) && (
            <div className="relative shrink-0 size-[20px]" data-name="Uncheck">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Uncheck">
                  <path d={svgPaths.p2f772f00} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
              </svg>
            </div>
          )}
          {isChecked && showControls && ((!isPinned && !isHovered && isSupported && showPin) || (!isPinned && !isHovered && !isSupported && showPin) || (!isPinned && isHovered && isSupported && showPin) || (!isPinned && isHovered && !isSupported && showPin) || (isPinned && !isHovered && isSupported && showPin) || (isPinned && !isHovered && !isSupported && showPin) || (isPinned && isHovered && isSupported && showPin) || (isPinned && isHovered && !isSupported && showPin) || (!isPinned && !isHovered && isSupported && !showPin) || (!isPinned && isHovered && isSupported && !showPin)) && (
            <div className="relative shrink-0 size-[20px]" data-name="Checked">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Checked">
                  <path d={svgPaths.p162d9a80} fill="var(--fill-0, #606060)" id="Vector" />
                </g>
              </svg>
            </div>
          )}
          {isNotIsPinnedAndNotIsCheckedAndIsHoveredAndNotShowControlsAndNot && (
            <>
              <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[7px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="-rotate-90 flex-none">
                  <div className="h-[7px] relative w-[10px]">
                    <div className="absolute inset-[20.58%_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.55907">
                        <path d={svgPaths.p1a0874f0} fill="var(--fill-0, #606060)" id="Polygon 1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#606060] content-stretch flex flex-col items-center max-w-[250px] p-[6px] relative rounded-[2px] shrink-0 w-[154px]" data-name="01-UI_Light/Popovers/Tooltip">
                <div className="font-['Gilroy:Semibold',sans-serif] leading-[10px] not-italic relative shrink-0 text-[9px] text-center text-white w-full">
                  <p className="mb-0">This Social Profile is not supported</p>
                  <p>on the current page.</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {isHovered && showControls && !isSupported && showPin && ((!isPinned && !isChecked) || (isPinned && !isChecked) || (!isPinned && isChecked) || (isPinned && isChecked)) && (
        <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[52px] top-1/2 w-[163px]">
          <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[7px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="h-[7px] relative w-[10px]">
                <div className="absolute inset-[20.58%_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.55907">
                    <path d={svgPaths.p1a0874f0} fill="var(--fill-0, #606060)" id="Polygon 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#606060] content-stretch flex flex-col items-center max-w-[250px] p-[6px] relative rounded-[2px] shrink-0 w-[154px]" data-name="01-UI_Light/Popovers/Tooltip">
            <div className="font-['Gilroy:Semibold',sans-serif] leading-[10px] not-italic relative shrink-0 text-[9px] text-center text-white w-full">
              <p className="mb-0">This Social Profile is not supported</p>
              <p>on the current page.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DropdownShowMoreSPs({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[273px] relative rounded-[8px] w-[230px]"} data-name="Dropdown : Show more SPs">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pt-[12px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end px-[12px] relative w-full">
              <div className="bg-[#f0f0f0] flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[8px] relative size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[20px]" data-name="Frame">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Frame">
                            <path d={svgPaths.p2ecd0600} fill="var(--fill-0, #606060)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[12px] tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[14px]">Search</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AD</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">Your brand 4</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@yourbrand5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ListsSpItem className="relative shrink-0 w-full" showControls={false} />
            <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AE</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">Our brand 6</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@ourbrand7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AF</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">Their brand 8</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@theirbrand9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AG</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">This brand 10</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@thisbrand11</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AH</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">That brand 12</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@thatbrand13</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Lists - SP Item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Group Item">
                    <div className="bg-[#c4c4c4] content-stretch flex gap-[12px] items-center justify-center relative rounded-[999px] shrink-0 size-[32px]" data-name="Select Bar - SP Item">
                      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
                      <div className="relative shrink-0 size-[44px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="22" cy="22" id="Ellipse 50" opacity="0" r="21.5" stroke="var(--stroke-0, #606060)" />
                        </svg>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#606060] text-[8px] text-center top-1/2 tracking-[-0.3px] whitespace-nowrap">
                        <p className="leading-[12px]">AI</p>
                      </div>
                      <div className="absolute bg-white bottom-[2px] content-stretch flex items-center justify-center p-px right-[-5px] rounded-[6px] size-[14px]" data-name="Socials (UX)">
                        <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                        <div className="h-full relative shrink-0 w-[12px]" data-name="04-Logos/Social/Instagram">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 12.0002">
                            <g id="04-Logos/Social/Instagram">
                              <path d={svgPaths.p1f631200} fill="var(--fill-0, #606060)" id="Combined Shape" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#606060] tracking-[-0.3px] whitespace-nowrap">
                      <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center relative shrink-0 text-[12px]">
                        <p className="leading-[14px]">Another brand 14</p>
                      </div>
                      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-center relative shrink-0 text-[10px]">
                        <p className="leading-[12px]">@anotherbrand15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#e0e0e0] h-full relative rounded-[20000px] shrink-0 w-[4px]" data-name="01-UI_Light/General/Scrollbar">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center pb-[140px] relative size-full">
                <div className="bg-[#606060] flex-[1_0_0] min-h-px min-w-px rounded-[2000px] w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}