import { useState, useRef, useMemo } from 'react';
import svgPaths from "../../../../imports/Iconosquare-4-1/svg-cr9mbv1gr2";
import { FunctionalSPSelector } from "../navigation/FunctionalSPSelector";
import { GroupSelectionModal } from "../groups/GroupSelectionModal";
import {
  allSocialProfiles as excelProfiles,
  groups as excelGroups,
  groupProfiles as excelGroupProfiles
} from '../../../data/profiles';
import {
  launchProfiles,
  launchGroups,
  launchGroupProfiles,
  trialProfiles,
  trialGroups,
  trialGroupProfiles
} from '../../../data/cohortProfiles';

interface AnalyticsOverviewProps {
  userCohort: 'launch' | 'excel' | 'trial';
}

export function AnalyticsOverview({ userCohort }: AnalyticsOverviewProps) {
  // Get cohort-specific data
  const { profiles, groups, groupProfiles } = useMemo(() => {
    switch (userCohort) {
      case 'launch':
        return {
          profiles: launchProfiles,
          groups: launchGroups,
          groupProfiles: launchGroupProfiles
        };
      case 'trial':
        return {
          profiles: trialProfiles,
          groups: trialGroups,
          groupProfiles: trialGroupProfiles
        };
      case 'excel':
      default:
        return {
          profiles: excelProfiles,
          groups: excelGroups,
          groupProfiles: excelGroupProfiles
        };
    }
  }, [userCohort]);

  // For launch/trial with no groups, start with first profile selected
  // For excel with groups, start with first group selected
  const initialGroup = groups.length > 0 ? groups[0].id : 'all';
  const initialProfileIds = groups.length > 0
    ? (groupProfiles[initialGroup] || [])
    : profiles.map(p => p.id);

  const [selectedItem, setSelectedItem] = useState<string | null>(
    groups.length > 0 ? 'group' : (profiles[0]?.id || null)
  );
  const [isGroupSelectorOpen, setIsGroupSelectorOpen] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(initialGroup);
  const [currentProfileIds, setCurrentProfileIds] = useState(initialProfileIds);
  const [isUnsavedSelection, setIsUnsavedSelection] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const handleGroupChange = (groupId: string, name: string, profileIds: string[]) => {
    setCurrentGroup(groupId);
    setCurrentProfileIds(profileIds);
    setSelectedItem('group');
    setIsUnsavedSelection(false);
    setIsGroupSelectorOpen(false);
  };

  const handleUnsavedSelection = (profileIds: string[]) => {
    setCurrentProfileIds(profileIds);
    setIsUnsavedSelection(true);
    setSelectedItem('group');
  };

  // Handle profile selection with repositioning
  const handleSelectItem = (item: string | null) => {
    setSelectedItem(item);

    // If a profile is selected (not 'group'), move it to first position
    if (item && item !== 'group') {
      const selectedIndex = currentProfileIds.indexOf(item);
      if (selectedIndex > 0) {
        // Reorder: move selected profile to first position
        const newOrder = [
          item,
          ...currentProfileIds.filter(id => id !== item)
        ];
        setCurrentProfileIds(newOrder);
      }
    }
  };

  // Get current group badge
  const currentGroupBadge = groups.find(g => g.id === currentGroup)?.badge ||
    (userCohort === 'launch' ? 'LA' : userCohort === 'trial' ? 'TR' : 'ALL');

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative size-full">
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] tracking-[-0.32px] whitespace-nowrap">
          <p className="leading-[32px]">Overview</p>
        </div>
        <div ref={selectorRef} className="relative shrink-0 h-[64px] w-full">
          <FunctionalSPSelector
            currentGroup={currentGroup}
            groupBadge={currentGroupBadge}
            profilesInGroup={profiles.filter(p => currentProfileIds.includes(p.id)).sort((a, b) => {
              // Sort to match currentProfileIds order
              return currentProfileIds.indexOf(a.id) - currentProfileIds.indexOf(b.id);
            })}
            selectedItem={selectedItem}
            onSelectItem={handleSelectItem}
            onOpenGroupSelector={() => setIsGroupSelectorOpen(true)}
            groupSelectionStage="stage01"
            hasGroups={groups.length > 0}
            isUnsavedSelection={isUnsavedSelection}
            onSaveSelection={() => console.log('Save unsaved selection as new group')}
          />
        </div>
      </div>

      {/* Group Selection Modal - always available for all cohorts */}
      <GroupSelectionModal
        isOpen={isGroupSelectorOpen}
        onClose={() => setIsGroupSelectorOpen(false)}
        onGroupChange={handleGroupChange}
        onUnsavedSelection={handleUnsavedSelection}
        onProfileFocus={(profileId) => setSelectedItem(profileId)}
        onSaveSelection={() => console.log('Save unsaved selection as new group')}
        onOpenManageModal={() => console.log('Open manage modal')}
        currentGroup={currentGroup}
        currentProfileIds={currentProfileIds}
        selectorRef={selectorRef}
        allSocialProfiles={profiles}
        groups={groups}
        groupProfiles={groupProfiles}
        groupSelectionStage="stage01"
        canCreateGroups={userCohort !== 'launch'}
      />

      {/* Date Filters and KPI Cards */}
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
          <div className="bg-white content-stretch flex gap-[8px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] tracking-[-0.072px] whitespace-nowrap">Custom time</p>
            <div className="relative shrink-0 size-[12px]">
              <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                  <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#76869A" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Last 7 days</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Last 30 days</p>
            <div className="-translate-y-1/2 absolute h-[26px] left-[-1px] right-[-1px] rounded-[9999px] top-1/2">
              <div aria-hidden="true" className="absolute border border-[#76869a] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
            </div>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Last 3 months</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Previous week</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Previous month</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">Previous year</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">This year</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-start pl-[8px] relative shrink-0">
            <div className="bg-[#c0cfd8] h-[24px] shrink-0 w-px" />
            <div className="bg-white content-stretch flex gap-[8px] h-[24px] items-center px-[8px] py-[6px] relative rounded-[9999px] shrink-0">
              <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] gap-[2px] items-center leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">
                <p className="relative shrink-0 text-[#97acbd]">Compare to</p>
                <p className="relative shrink-0 text-[#1d1d1b]">Previous period</p>
              </div>
              <div className="relative shrink-0 size-[12px]">
                <div className="absolute inset-[33.75%_21.25%_34.79%_21.25%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.9 3.77574">
                    <path clipRule="evenodd" d={svgPaths.p3e9db600} fill="#1D1D1B" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards Row 1 */}
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {/* Followers Card */}
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-[220px] min-w-[220px] pb-[32px] relative rounded-[6px]">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g>
                          <path d={svgPaths.p169da270} fill="#97ACBD" />
                          <path d={svgPaths.p161d8e80} fill="#97ACBD" />
                          <path clipRule="evenodd" d={svgPaths.p369f5df0} fill="#97ACBD" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center px-[32px] relative size-full">
                  <div className="bg-[#ebf2f4] relative rounded-[9999px] shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 size-[24px]">
                        <div className="absolute inset-[1.25%]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4 23.4">
                            <g>
                              <path d={svgPaths.p35557100} fill="#76869A" />
                              <path d={svgPaths.p311b3980} fill="#76869A" />
                              <path d={svgPaths.p34995c40} fill="#76869A" />
                              <path d={svgPaths.p30bdf230} fill="#76869A" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                          <p className="leading-[32px]">625.3</p>
                        </div>
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                            <p className="leading-[32px]">K</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
                      <p className="leading-[20px]">Followers</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf2f4] content-stretch flex gap-[2px] items-center overflow-clip px-[6px] py-[4px] relative rounded-[9999px] shrink-0">
                    <div className="relative shrink-0 size-[14px]">
                      <div className="absolute inset-[28.57%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99975 5.99975">
                          <path d={svgPaths.p21e7ff40} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] items-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">+</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">100.00</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Likes Card */}
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-[220px] min-w-[220px] pb-[32px] relative rounded-[6px]">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g>
                          <path d={svgPaths.p169da270} fill="#97ACBD" />
                          <path d={svgPaths.p161d8e80} fill="#97ACBD" />
                          <path clipRule="evenodd" d={svgPaths.p369f5df0} fill="#97ACBD" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center px-[32px] relative size-full">
                  <div className="bg-[#ebf2f4] relative rounded-[9999px] shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p1e9e3700} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                          <p className="leading-[32px]">983</p>
                        </div>
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                            <p className="leading-[32px]">K</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
                      <p className="leading-[20px]">Likes</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf2f4] content-stretch flex gap-[2px] items-center overflow-clip px-[6px] py-[4px] relative rounded-[9999px] shrink-0">
                    <div className="relative shrink-0 size-[14px]">
                      <div className="absolute inset-[28.57%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99975 5.99975">
                          <path d={svgPaths.p21e7ff40} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] items-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">+</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">100.00</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Card */}
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-[220px] min-w-[220px] pb-[32px] relative rounded-[6px]">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g>
                          <path d={svgPaths.p169da270} fill="#97ACBD" />
                          <path d={svgPaths.p161d8e80} fill="#97ACBD" />
                          <path clipRule="evenodd" d={svgPaths.p369f5df0} fill="#97ACBD" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center px-[32px] relative size-full">
                  <div className="bg-[#ebf2f4] relative rounded-[9999px] shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p20db2c80} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                          <p className="leading-[32px]">453.2</p>
                        </div>
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                          <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                            <p className="leading-[32px]">K</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
                      <p className="leading-[20px]">Comments</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf2f4] content-stretch flex gap-[2px] items-center overflow-clip px-[6px] py-[4px] relative rounded-[9999px] shrink-0">
                    <div className="relative shrink-0 size-[14px]">
                      <div className="absolute inset-[28.57%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99975 5.99975">
                          <path d={svgPaths.p21e7ff40} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] items-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">+</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">100.00</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Card */}
          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-[220px] min-w-[220px] pb-[32px] relative rounded-[6px]">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[12px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g>
                          <path d={svgPaths.p169da270} fill="#97ACBD" />
                          <path d={svgPaths.p161d8e80} fill="#97ACBD" />
                          <path clipRule="evenodd" d={svgPaths.p369f5df0} fill="#97ACBD" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-center px-[32px] relative size-full">
                  <div className="bg-[#ebf2f4] relative rounded-[9999px] shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path clipRule="evenodd" d={svgPaths.p2e5ecf00} fill="#76869A" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#c0cfd8] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1d1b] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
                        <p className="leading-[32px]">835</p>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
                      <p className="leading-[20px]">Posts</p>
                    </div>
                  </div>
                  <div className="bg-[#ebf2f4] content-stretch flex gap-[2px] items-center overflow-clip px-[6px] py-[4px] relative rounded-[9999px] shrink-0">
                    <div className="relative shrink-0 size-[14px]">
                      <div className="absolute inset-[28.57%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99975 5.99975">
                          <path d={svgPaths.p21e7ff40} fill="#76869A" />
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex font-['Gilroy:Semibold',sans-serif] items-center leading-[0] not-italic relative shrink-0 text-[#76869a] text-[12px] text-center tracking-[-0.072px] whitespace-nowrap">
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">+</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">100.00</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0">
                        <p className="leading-[14px]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
