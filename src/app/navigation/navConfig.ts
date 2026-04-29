export type L1MenuItem = 'home' | 'analytics' | 'allposts' | 'publishing' | 'conversations' | 'listening';

export interface SubPage {
  id: string;
  label: string;
}

export interface L1Page {
  id: L1MenuItem;
  label: string;
  subPages: SubPage[];
}

export const NAV_TREE: L1Page[] = [
  {
    id: 'home',
    label: 'Home',
    subPages: [],
  },
  {
    id: 'analytics',
    label: 'Profile',
    subPages: [
      { id: 'overview', label: 'Overview' },
      { id: 'engagement', label: 'Engagement' },
      { id: 'community', label: 'Community' },
      { id: 'reach', label: 'Reach & Impressions' },
      { id: 'competitors', label: 'Competitors' },
      { id: 'industry-benchmark', label: 'Industry Benchmark' },
      { id: 'my-dashboards', label: 'My Dashboards' },
    ],
  },
  {
    id: 'allposts',
    label: 'Content',
    subPages: [
      { id: 'all-posts', label: 'All Posts' },
      { id: 'campaigns', label: 'Campaigns' },
    ],
  },
  {
    id: 'publishing',
    label: 'Publishing',
    subPages: [
      { id: 'calendar', label: 'Calendar' },
      { id: 'feed-view', label: 'Feed View' },
      { id: 'media-library', label: 'Media Library' },
      { id: 'caption-templates', label: 'Caption Templates' },
      { id: 'ai-content-inspiration', label: 'AI Content Inspiration' },
    ],
  },
  {
    id: 'conversations',
    label: 'Conversations',
    subPages: [],
  },
  {
    id: 'listening',
    label: 'Listening',
    subPages: [
      { id: 'competitors', label: 'Competitors' },
      { id: 'industry-benchmark', label: 'Industry Benchmark' },
      { id: 'hashtags', label: 'Hashtags' },
      { id: 'feeds', label: 'Feeds' },
    ],
  },
];

export function getFirstSubPage(l1Id: L1MenuItem): string {
  const l1 = NAV_TREE.find(p => p.id === l1Id);
  if (!l1) return '';
  return l1.subPages[0]?.id ?? l1Id;
}

export function getL1Page(l1Id: L1MenuItem): L1Page | undefined {
  return NAV_TREE.find(p => p.id === l1Id);
}

/** Returns sub-pages, or a single default page named after the pillar when empty. */
export function getEffectiveSubPages(l1Id: L1MenuItem): SubPage[] {
  const l1 = NAV_TREE.find(p => p.id === l1Id);
  if (!l1) return [];
  if (l1.subPages.length > 0) return l1.subPages;
  return [{ id: l1Id, label: l1.label }];
}
