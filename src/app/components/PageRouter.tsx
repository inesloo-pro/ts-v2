import { useEffect } from 'react';
import { AnalyticsOverview } from './features/views/AnalyticsOverview';
import { AllPostsView } from './features/views/AllPostsView';
import { CampaignsPage } from './features/views/CampaignsPage';
import { CalendarView } from './features/views/CalendarView';
import { PlaceholderPage } from './features/views/PlaceholderPage';
import { getL1Page, getEffectiveSubPages, type L1MenuItem } from '../navigation/navConfig';

interface PageRouterProps {
  activeL1: L1MenuItem;
  activeL2: string;
  userCohort: 'launch' | 'excel' | 'trial';
}

export function PageRouter({ activeL1, activeL2, userCohort }: PageRouterProps) {
  const l1Page = getL1Page(activeL1);
  const l1Label = l1Page?.label ?? activeL1;
  const effectiveSubPages = getEffectiveSubPages(activeL1);
  // l2Label is undefined when the sub-page is the default (same as pillar name)
  const matchedSub = effectiveSubPages.find(p => p.id === activeL2);
  const l2Label = matchedSub && matchedSub.id !== activeL1 ? matchedSub.label : undefined;

  useEffect(() => {
    const pageName = l2Label ?? l1Label;
    document.title = `IcoLab - ${pageName} - Tree Structure V2`;
  }, [l1Label, l2Label]);

  if (activeL1 === 'analytics' && activeL2 === 'overview') {
    return <AnalyticsOverview userCohort={userCohort} />;
  }

  if (activeL1 === 'allposts' && activeL2 === 'all-posts') {
    return <AllPostsView userCohort={userCohort} />;
  }

  if (activeL1 === 'allposts' && activeL2 === 'campaigns') {
    return <CampaignsPage userCohort={userCohort} />;
  }

  if (activeL1 === 'publishing' && activeL2 === 'calendar') {
    return <CalendarView userCohort={userCohort} />;
  }

  return (
    <PlaceholderPage
      key={`${activeL1}-${activeL2}`}
      l1Label={l1Label}
      l2Label={l2Label}
      userCohort={userCohort}
    />
  );
}
