export interface SocialProfile {
  id: string;
  name: string;
  handle: string;
  platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' | 'facebook' | 'threads';
  hasBadToken?: boolean;
  avatar?: string;
}

export interface GroupItem {
  id: string;
  name: string;
  profileCount: number;
  badge: string;
  avatar?: string;
}

// 20 brands with their logos from Google Favicons API (highly reliable)
const brands = [
  { name: 'Apple', logo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=256' },
  { name: 'Amazon', logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=256' },
  { name: 'Microsoft', logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=256' },
  { name: 'Google', logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=256' },
  { name: 'Nike', logo: 'https://www.google.com/s2/favicons?domain=nike.com&sz=256' },
  { name: 'Coca-Cola', logo: 'https://www.google.com/s2/favicons?domain=coca-cola.com&sz=256' },
  { name: 'Samsung', logo: 'https://www.google.com/s2/favicons?domain=samsung.com&sz=256' },
  { name: 'Tesla', logo: 'https://www.google.com/s2/favicons?domain=tesla.com&sz=256' },
  { name: 'McDonald\'s', logo: 'https://www.google.com/s2/favicons?domain=mcdonalds.com&sz=256' },
  { name: 'Starbucks', logo: 'https://www.google.com/s2/favicons?domain=starbucks.com&sz=256' },
  { name: 'Netflix', logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=256' },
  { name: 'Adidas', logo: 'https://www.google.com/s2/favicons?domain=adidas.com&sz=256' },
  { name: 'BMW', logo: 'https://www.google.com/s2/favicons?domain=bmw.com&sz=256' },
  { name: 'Disney', logo: 'https://www.google.com/s2/favicons?domain=disney.com&sz=256' },
  { name: 'Spotify', logo: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=256' },
  { name: 'Airbnb', logo: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=256' },
  { name: 'Uber', logo: 'https://www.google.com/s2/favicons?domain=uber.com&sz=256' },
  { name: 'Intel', logo: 'https://www.google.com/s2/favicons?domain=intel.com&sz=256' },
  { name: 'Sony', logo: 'https://www.google.com/s2/favicons?domain=sony.com&sz=256' },
  { name: 'L\'Oréal', logo: 'https://www.google.com/s2/favicons?domain=loreal.com&sz=256' },
];

// Social networks
const platforms: Array<'facebook' | 'instagram' | 'linkedin' | 'x' | 'youtube' | 'threads' | 'tiktok'> = 
  ['facebook', 'instagram', 'linkedin', 'x', 'youtube', 'threads', 'tiktok'];

// Generate 140 social profiles (20 brands × 7 platforms)
export const allSocialProfiles: SocialProfile[] = brands.flatMap((brand, brandIndex) => {
  return platforms.map((platform, platformIndex) => {
    const profileId = brandIndex * platforms.length + platformIndex + 1;
    const handle = '@' + brand.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const hasBadToken = Math.random() < 0.08; // ~8% have bad tokens
    
    return {
      id: String(profileId),
      name: brand.name,
      handle,
      platform,
      avatar: brand.logo,
      hasBadToken: hasBadToken || undefined,
    };
  });
});

// Generate 110 groups with realistic social media manager names
const groupNames = [
  // Campaign Groups (15)
  'Q1 2026 Campaign', 'Q2 2026 Campaign', 'Q3 2026 Campaign', 'Q4 2026 Campaign',
  'Spring Launch 2026', 'Summer Promo', 'Fall Campaign', 'Winter Holiday Push',
  'Black Friday Blitz', 'Cyber Monday Special', 'Valentine\'s Day', 'Back to School',
  'New Year Campaign', 'Easter Collection', 'Pride Month Initiative',
  
  // Client Groups (20)
  'Client: Acme Corp', 'Client: Global Brands', 'Client: TechStart Inc', 'Client: Fashion House',
  'Client: FoodCo', 'Client: AutoGroup', 'Client: BeautyBrands', 'Client: SportsCo',
  'Client: MediaGroup', 'Client: RetailChain', 'Client: HealthPlus', 'Client: EduTech',
  'Client: FinanceHub', 'Client: TravelCo', 'Client: RealEstate Pro', 'Client: GreenEnergy',
  'Client: PetCare Plus', 'Client: HomeGoods', 'Client: LuxuryLifestyle', 'Client: StartupVentures',
  
  // Regional Groups (15)
  'North America Accounts', 'Europe Accounts', 'Asia Pacific', 'Latin America',
  'Middle East', 'Africa Accounts', 'UK Accounts', 'France Accounts', 'Germany Accounts',
  'Spain & Italy', 'Nordic Countries', 'Australia & NZ', 'Canada Accounts', 'Japan Accounts',
  'South Korea Accounts',
  
  // Industry Groups (15)
  'Fashion & Apparel', 'Tech & Electronics', 'Food & Beverage', 'Automotive Brands',
  'Beauty & Cosmetics', 'Sports & Fitness', 'Entertainment', 'Travel & Tourism',
  'Retail & E-commerce', 'Healthcare', 'Finance & Banking', 'Education', 'Real Estate',
  'Energy & Utilities', 'Non-Profits',
  
  // Platform-Specific Groups (10)
  'Instagram Power Users', 'LinkedIn B2B Accounts', 'YouTube Content Creators', 'TikTok Viral Strategy',
  'X (Twitter) Engagement', 'Multi-Platform Stars', 'Instagram Stories Focus', 'LinkedIn Thought Leaders',
  'YouTube Shorts Campaign', 'TikTok Influencers',
  
  // Performance Groups (10)
  'High Performers', 'Top Engagement', 'Growth Opportunities', 'Needs Attention',
  'New Accounts 2026', 'VIP Clients', 'Premium Tier', 'Standard Tier', 'Trial Accounts',
  'At Risk Accounts',
  
  // Content Type Groups (10)
  'Video Content Focus', 'Image-First Strategy', 'Story Specialists', 'Live Streaming',
  'User Generated Content', 'Influencer Partnerships', 'Brand Awareness', 'Conversion Focus',
  'Community Building', 'Educational Content',
  
  // Team Groups (10)
  'Sarah\'s Team', 'Mike\'s Clients', 'Jessica\'s Portfolio', 'David\'s Accounts',
  'Creative Team A', 'Creative Team B', 'Analytics Team', 'Growth Team', 'Content Team',
  'Strategy Team',
  
  // Special Groups (5)
  'Holiday Season 2026', 'Product Launches', 'Crisis Management', 'Urgent Reviews', 'Weekly Reporting',
];

// First, add the core groups that match the normal mode (for compatibility with pins)
const coreGroups: GroupItem[] = [
  { id: 'campaign', name: 'Campaign 2026 Insta', profileCount: 12, badge: 'CA' },
  { id: 'big3', name: 'Detected Group', profileCount: 3, badge: 'DG' },
  { id: 'custom1', name: 'Fashion Forward', profileCount: 11, badge: 'FA' },
  { id: 'custom2', name: 'Tech Innovators', profileCount: 13, badge: 'TE' },
];

// Then generate the additional groups
const generatedGroups: GroupItem[] = groupNames.map((name, index) => {
  const id = `group${index + 1}`;
  // Generate badge from first letters of words or first 2 chars
  const words = name.split(' ');
  const badge = words.length > 1 
    ? words.slice(0, 2).map(w => w[0].toUpperCase()).join('')
    : name.substring(0, 2).toUpperCase();
  
  // Random profile count between 5 and 40
  const profileCount = Math.floor(Math.random() * 36) + 5;
  
  return {
    id,
    name,
    profileCount,
    badge,
  };
});

// Combine core groups with generated groups
export const groups: GroupItem[] = [...coreGroups, ...generatedGroups];

// Generate group profile assignments
export const groupProfiles: Record<string, string[]> = {
  all: allSocialProfiles.map(p => p.id),
};

// Apple profiles: IDs 1-7 (brand index 0)
// Amazon profiles: IDs 8-14 (brand index 1)
// Microsoft profiles: IDs 15-21 (brand index 2)

// Detected Group: Apple Instagram, Amazon Instagram, Microsoft Instagram
// Apple Instagram = ID 2 (0*7 + 1 + 1)
// Amazon Instagram = ID 9 (1*7 + 1 + 1)
// Microsoft Instagram = ID 16 (2*7 + 1 + 1)
groupProfiles['big3'] = ['2', '9', '16']; // Apple Instagram, Amazon Instagram, Microsoft Instagram

// Campaign: Mix of brands Instagram profiles (12 profiles)
groupProfiles['campaign'] = ['2', '9', '16', '23', '30', '37', '44', '51', '58', '65', '72', '79']; 

// Fashion Forward: Nike + Adidas profiles (11 profiles) 
// Nike is brand index 4 (IDs 29-35), Adidas is brand index 11 (IDs 78-84)
groupProfiles['custom1'] = ['29', '30', '31', '32', '33', '78', '79', '80', '81', '82', '83']; 

// Tech Innovators: Apple, Microsoft, Google, Samsung, Intel, Sony (all platforms mix) (13 profiles)
groupProfiles['custom2'] = ['1', '2', '3', '15', '16', '17', '22', '23', '24', '43', '44', '122', '123']; 

// Assign profiles to remaining groups with some overlap
groups.forEach((group, groupIndex) => {
  // Skip core groups that we've already assigned
  if (['campaign', 'big3', 'custom1', 'custom2'].includes(group.id)) {
    return;
  }
  
  const numProfiles = group.profileCount;
  const profileIds: string[] = [];
  
  // Use deterministic selection based on group index
  const startIndex = (groupIndex * 17) % allSocialProfiles.length; // 17 for variety
  
  for (let i = 0; i < numProfiles; i++) {
    const profileIndex = (startIndex + i * 3) % allSocialProfiles.length;
    const profileId = allSocialProfiles[profileIndex].id;
    if (!profileIds.includes(profileId)) {
      profileIds.push(profileId);
    }
  }
  
  // Fill up to the required count if needed
  let fillIndex = 0;
  while (profileIds.length < numProfiles && fillIndex < allSocialProfiles.length) {
    const profileId = allSocialProfiles[fillIndex].id;
    if (!profileIds.includes(profileId)) {
      profileIds.push(profileId);
    }
    fillIndex++;
  }
  
  groupProfiles[group.id] = profileIds.slice(0, numProfiles);
});

// Helper functions
export function getProfilesForGroup(groupId: string): SocialProfile[] {
  if (groupId === 'all') {
    return allSocialProfiles;
  }
  const profileIds = groupProfiles[groupId] || [];
  return profileIds
    .map(id => allSocialProfiles.find(p => p.id === id))
    .filter((p): p is SocialProfile => p !== undefined);
}

export function getGroupById(groupId: string): GroupItem | undefined {
  return groups.find(g => g.id === groupId);
}

export function addGroup(group: GroupItem, profileIds: string[]): void {
  groups.push(group);
  groupProfiles[group.id] = profileIds;
}