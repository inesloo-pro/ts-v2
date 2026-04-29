import svgPaths from "../../../../assets/icons/svg-a3gzjn07m9";
import { FunctionalSPSelector } from "./FunctionalSPSelector";
import type { SocialProfile } from '../../../data/profiles';

interface FunctionalPageTitleProps {
  currentGroup: string;
  groupBadge: string;
  groupAvatar?: string;
  profilesInGroup: SocialProfile[];
  selectedItem: string | null;
  onSelectItem: (item: string | null) => void;
  onOpenGroupSelector: () => void;
  isUnsavedSelection?: boolean;
  onSaveSelection?: () => void;
  currentView?: 'calendar' | 'allposts';
  selectorRef?: React.RefObject<HTMLDivElement>;
  firstProfileRef?: React.RefObject<HTMLDivElement>;
  pendingRedirection?: boolean;
  isLoading?: boolean;
  onRedirectionComplete?: () => void;
  limitTo50SPsPerGroup?: boolean;
}

export function FunctionalPageTitle({
  currentGroup,
  groupBadge,
  groupAvatar,
  profilesInGroup,
  selectedItem,
  onSelectItem,
  onOpenGroupSelector,
  isUnsavedSelection,
  onSaveSelection,
  currentView = 'calendar',
  selectorRef,
  firstProfileRef,
  pendingRedirection,
  isLoading,
  onRedirectionComplete,
  limitTo50SPsPerGroup
}: FunctionalPageTitleProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full px-[20px] py-[20px] bg-white border-b border-[#e0e0e0]">
      <div className="content-stretch flex gap-[28px] items-center relative flex-1 min-w-0">
        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[32px] whitespace-nowrap">
          <p className="leading-[normal]">{currentView === 'calendar' ? 'Calendar View' : 'All Posts'}</p>
        </div>
        <div className={`content-stretch flex items-center relative rounded-[4px] mr-[20px] overflow-visible flex-1 min-w-0`} ref={selectorRef}>
          <FunctionalSPSelector
            currentGroup={currentGroup}
            groupBadge={groupBadge}
            groupAvatar={groupAvatar}
            profilesInGroup={profilesInGroup}
            selectedItem={selectedItem}
            onSelectItem={onSelectItem}
            onOpenGroupSelector={onOpenGroupSelector}
            isUnsavedSelection={isUnsavedSelection}
            onSaveSelection={onSaveSelection}
            currentView={currentView}
            firstProfileRef={firstProfileRef}
            pendingRedirection={pendingRedirection}
            isLoading={isLoading}
            onRedirectionComplete={onRedirectionComplete}
            limitTo50SPsPerGroup={limitTo50SPsPerGroup}
          />
        </div>
      </div>
      <div className="bg-[#606060] content-stretch flex h-[48px] items-center justify-center min-w-[217px] overflow-clip relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#505050] transition-colors">
        <div className="content-stretch flex gap-[12px] h-full items-center justify-center min-w-[160px] overflow-clip px-[20px] relative shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <div className="absolute inset-[20%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6">
                <path clipRule="evenodd" d={svgPaths.p126c5f00} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.4px] whitespace-nowrap">
            <p className="leading-[16px]">Schedule a new post</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] h-full items-center min-w-[57px] overflow-clip pr-[20px] relative shrink-0">
          <div className="bg-white h-full opacity-40 shrink-0 w-px" />
          <div className="relative shrink-0 size-[16px]">
            <div className="absolute inset-[31.54%_20%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.90769">
                <path clipRule="evenodd" d={svgPaths.p22a90300} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}