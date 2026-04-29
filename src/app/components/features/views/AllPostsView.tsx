import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FunctionalSPSelector } from '../navigation/FunctionalSPSelector';
import { EmptyState, emptyStates } from '../../common/EmptyState';
import { LoadingState } from '../../common/LoadingState';
import type { SocialProfile } from '../../../data/profiles';

interface Post {
  id: string;
  image: string;
  platform: 'instagram' | 'youtube';
  views: number;
  likes: number;
}

interface AllPostsViewProps {
  currentGroup: string;
  groupBadge: string;
  groupAvatar?: string;
  profilesInGroup: SocialProfile[];
  selectedItem: string | null;
  onSelectItem: (item: string | null) => void;
  onOpenGroupSelector: () => void;
  isUnsavedSelection?: boolean;
  onSaveSelection?: () => void;
  firstProfileRef?: React.RefObject<HTMLDivElement>;
  selectorRef?: React.RefObject<HTMLDivElement>;
  isLoading?: boolean;
  loadingKey?: number;
  pendingRedirection?: boolean;
  onRedirectionComplete?: () => void;
  limitTo50SPsPerGroup?: boolean;
}

const mockPosts: Post[] = Array.from({ length: 8 }, (_, i) => ({
  id: `post-${i + 1}`,
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=400&fit=crop',
  platform: i % 2 === 0 ? 'instagram' : 'youtube',
  views: 4591,
  likes: 4591,
}));

export function AllPostsView({ 
  currentGroup,
  groupBadge,
  groupAvatar,
  profilesInGroup,
  selectedItem,
  onSelectItem,
  onOpenGroupSelector,
  isUnsavedSelection,
  onSaveSelection,
  firstProfileRef,
  selectorRef,
  spSelectorOption,
  isLoading,
  loadingKey,
  sortByAvailability,
  pendingRedirection,
  onRedirectionComplete,
  limitTo50SPsPerGroup,
  groupSelectionStage
}: AllPostsViewProps) {
  // Check if group is selected (unsupported in All Posts view)
  const isGroupSelected = selectedItem === 'group';

  // If group is selected, show empty state
  if (isGroupSelected) {
    return (
      <div className="flex-1 bg-white overflow-auto flex flex-col">
        {/* Page Title with SP Selector */}
        <div className="content-stretch flex items-center justify-between relative w-full px-[20px] py-[20px] bg-white border-b border-[#e0e0e0]">
          <div className="content-stretch flex gap-[28px] items-center relative flex-1 min-w-0">
            <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[32px] whitespace-nowrap">
              <p className="leading-[normal]">All posts</p>
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
                currentView="allposts"
              />
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="size-[40px] flex items-center justify-center border border-[#e0e0e0] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="size-[40px] flex items-center justify-center border border-[#e0e0e0] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4H14M2 8H14M2 12H14" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Empty State */}
        <EmptyState {...emptyStates.groupContentDisplay} />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white overflow-auto flex flex-col relative">
      {/* Page Title with SP Selector */}
      <div className="content-stretch flex items-center justify-between relative w-full px-[20px] py-[20px] bg-white border-b border-[#e0e0e0]">
        <div className="content-stretch flex gap-[28px] items-center relative flex-1 min-w-0">
          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#606060] text-[32px] whitespace-nowrap">
            <p className="leading-[normal]">All posts</p>
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
              currentView="allposts"
              firstProfileRef={firstProfileRef}
              pendingRedirection={pendingRedirection}
              isLoading={isLoading}
              onRedirectionComplete={onRedirectionComplete}
              limitTo50SPsPerGroup={limitTo50SPsPerGroup}
            />
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <button className="size-[40px] flex items-center justify-center border border-[#e0e0e0] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="size-[40px] flex items-center justify-center border border-[#e0e0e0] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4H14M2 8H14M2 12H14" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Show loading state or content */}
      <div className="flex-1 relative overflow-hidden">
        <>
          {/* Header */}
          <div className="px-[20px] py-[20px] border-b border-[#e0e0e0]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[20px]">Recent Posts</h2>
              <div className="flex items-center gap-[8px]">
                <button className="px-[12px] py-[6px] bg-white border border-[#e0e0e0] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                  Filter
                </button>
                <button className="px-[12px] py-[6px] bg-white border border-[#e0e0e0] rounded-[4px] font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                  Sort
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-[24px] border-b border-[#e0e0e0]">
              <button className="pb-[12px] font-['Gilroy:Semibold',sans-serif] text-[14px] text-[#606060] border-b-2 border-[#606060] -mb-px">
                📄 Posts
              </button>
              <button className="pb-[12px] font-['Gilroy:Semibold',sans-serif] text-[14px] text-[#a0a0a0] hover:text-[#606060] transition-colors">
                📱 Stories
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="px-[20px] py-[20px]">
            <div className="mb-[20px] flex items-center justify-between">
              <div className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#a0a0a0] tracking-[-0.3px]">
                MAR 2024
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#606060] tracking-[-0.3px]">
                  Sort by most recent ▾
                </div>
                <button className="flex items-center gap-[8px] px-[12px] py-[8px] border border-[#e0e0e0] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#606060] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4H14M4 8H12M6 12H10" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Filters
                </button>
                <button className="size-[40px] flex items-center justify-center border border-[#e0e0e0] rounded-[6px] hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5" stroke="#606060" strokeWidth="1.5"/>
                    <path d="M12 12L14 14" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-[16px]">
              {mockPosts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="relative aspect-[3/4] bg-[#f0f0f0] rounded-[8px] overflow-hidden mb-[12px] cursor-pointer">
                    <ImageWithFallback 
                      src={post.image}
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-[8px] left-[8px] bg-[rgba(0,0,0,0.5)] rounded-full size-[24px] flex items-center justify-center">
                      {post.platform === 'instagram' ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <rect width="12" height="12" rx="2" fill="white"/>
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 2L10 6L2 10V2Z" fill="white"/>
                        </svg>
                      )}
                    </div>
                    <div className="absolute top-[8px] right-[8px]">
                      <button className="bg-[rgba(0,0,0,0.5)] rounded-[4px] size-[24px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.7)] transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 3V6L8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-[8px] right-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white rounded-[4px] size-[24px] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="3" r="1" fill="#606060"/>
                          <circle cx="6" cy="6" r="1" fill="#606060"/>
                          <circle cx="6" cy="9" r="1" fill="#606060"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px] text-[#606060] font-['Gilroy:Medium',sans-serif] text-[10px]">
                    <div className="flex items-center gap-[4px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2C3.5 2 1.5 4 1 6C1.5 8 3.5 10 6 10C8.5 10 10.5 8 11 6C10.5 4 8.5 2 6 2Z" stroke="#606060" strokeWidth="1"/>
                        <circle cx="6" cy="6" r="1.5" stroke="#606060" strokeWidth="1"/>
                      </svg>
                      <span>Views: {post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2L7.5 5L11 5.5L8.5 8L9 11L6 9.5L3 11L3.5 8L1 5.5L4.5 5L6 2Z" stroke="#606060" strokeWidth="1"/>
                      </svg>
                      <span>Likes: {post.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
        {isLoading && <LoadingState key={loadingKey} />}
      </div>
    </div>
  );
}