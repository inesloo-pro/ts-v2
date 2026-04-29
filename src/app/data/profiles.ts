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

export const allSocialProfiles: SocialProfile[] = [
  { id: '1', name: 'Nike', handle: '@nike', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/nike.com/w/400/h/400' },
  { id: '2', name: 'Adidas', handle: '@adidas', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/adidas.com/w/400/h/400' },
  { id: '3', name: 'Zara', handle: '@zara', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/zara.com/w/400/h/400' },
  { id: '4', name: 'H&M', handle: '@hm', platform: 'linkedin', hasBadToken: true, avatar: 'https://cdn.brandfetch.io/hm.com/w/400/h/400' },
  { id: '5', name: 'Apple Tech', handle: '@appletech', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/apple.com/w/400/h/400' },
  { id: '6', name: 'Samsung Electronics', handle: '@samsungelec', platform: 'youtube', hasBadToken: true, avatar: 'https://cdn.brandfetch.io/samsung.com/w/400/h/400' },
  { id: '7', name: 'Tesla Motors', handle: '@teslamotors', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/tesla.com/w/400/h/400' },
  { id: '8', name: 'Gucci', handle: '@gucci', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/gucci.com/w/400/h/400' },
  { id: '9', name: 'Puma', handle: '@puma', platform: 'tiktok', avatar: 'https://cdn.brandfetch.io/puma.com/w/400/h/400' },
  { id: '10', name: 'Reebok', handle: '@reebok', platform: 'x', avatar: 'https://cdn.brandfetch.io/reebok.com/w/400/h/400' },
  { id: '11', name: 'Louis Vuitton', handle: '@louisvuitton', platform: 'instagram', hasBadToken: true, avatar: 'https://cdn.brandfetch.io/louisvuitton.com/w/400/h/400' },
  { id: '12', name: 'Microsoft', handle: '@microsoft', platform: 'linkedin', avatar: 'https://cdn.brandfetch.io/microsoft.com/w/400/h/400' },
  { id: '13', name: 'Google Tech', handle: '@googletech', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/google.com/w/400/h/400' },
  { id: '14', name: 'Under Armour', handle: '@underarmour', platform: 'tiktok', avatar: 'https://cdn.brandfetch.io/underarmour.com/w/400/h/400' },
  { id: '15', name: 'Amazon', handle: '@amazon', platform: 'x', avatar: 'https://cdn.brandfetch.io/amazon.com/w/400/h/400' },
  { id: '16', name: 'Prada', handle: '@prada', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/prada.com/w/400/h/400' },
  { id: '17', name: 'Intel', handle: '@intel', platform: 'linkedin', avatar: 'https://cdn.brandfetch.io/intel.com/w/400/h/400' },
  { id: '18', name: 'Netflix', handle: '@netflix', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/netflix.com/w/400/h/400' },
  { id: '19', name: 'Gymshark', handle: '@gymshark', platform: 'tiktok', hasBadToken: true, avatar: 'https://cdn.brandfetch.io/gymshark.com/w/400/h/400' },
  { id: '20', name: 'SpaceX', handle: '@spacex', platform: 'x', avatar: 'https://cdn.brandfetch.io/spacex.com/w/400/h/400' },
  { id: '21', name: 'Chanel', handle: '@chanel', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/chanel.com/w/400/h/400' },
  { id: '22', name: 'Adobe', handle: '@adobe', platform: 'linkedin', avatar: 'https://cdn.brandfetch.io/adobe.com/w/400/h/400' },
  { id: '23', name: 'Sony Pictures', handle: '@sonypictures', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/sony.com/w/400/h/400' },
  { id: '24', name: 'Lululemon', handle: '@lululemon', platform: 'tiktok', avatar: 'https://cdn.brandfetch.io/lululemon.com/w/400/h/400' },
];

export const groups: GroupItem[] = [
  { id: 'campaign', name: 'Campaign 2026 Insta', profileCount: 12, badge: 'CA' },
  { id: 'big3', name: 'Detected Group', profileCount: 3, badge: 'DG' },
  { id: 'custom1', name: 'Fashion Forward', profileCount: 11, badge: 'FA' },
  { id: 'custom2', name: 'Tech Innovators', profileCount: 13, badge: 'TE' },
  { id: 'custom3', name: 'Lifestyle Brands', profileCount: 10, badge: 'LI' },
  { id: 'custom4', name: 'Sports & Fitness', profileCount: 14, badge: 'SP' },
  { id: 'design', name: 'Design Accounts', profileCount: 15, badge: 'DE' },
];

// Define which profiles belong to each group (profiles can appear in multiple groups)
export const groupProfiles: Record<string, string[]> = {
  all: allSocialProfiles.map(p => p.id),
  campaign: ['1', '3', '4', '8', '9', '14', '19', '24', '5', '6', '7', '13'], // 12 profiles - Nike, Zara, H&M, Gucci, Puma, Under Armour, Gymshark, Lululemon + YouTube: Apple Tech, Samsung, Tesla, Google
  big3: ['5', '12', '15'], // 3 profiles - Detected Group: Apple Tech, Microsoft, Amazon
  saved: ['4', '5', '6', '7', '12', '13', '15', '17', '18', '20', '22'], // 11 profiles - Saved selection
  custom1: ['3', '4', '8', '11', '16', '21', '1', '2', '9', '14', '24'], // 11 profiles - Fashion brands (Nike, Adidas, Zara, H&M, Gucci, Louis Vuitton, Prada, Chanel, Puma, Under Armour, Lululemon)
  custom2: ['5', '6', '7', '12', '13', '15', '17', '20', '22', '18', '23', '10', '19'], // 13 profiles - Tech brands (Apple, Samsung, Tesla, Microsoft, Google, Amazon, Intel, SpaceX, Adobe, Netflix, Sony, Reebok, Gymshark)
  custom3: ['3', '4', '8', '11', '16', '18', '21', '23', '1', '2'], // 10 profiles - Lifestyle brands
  custom4: ['1', '2', '9', '10', '14', '19', '24', '5', '6', '7', '12', '13', '15', '20'], // 14 profiles - Sports & Fitness brands (Nike, Adidas, Puma, Reebok, Under Armour, Gymshark, Lululemon + some tech for wearables)
  design: ['8', '11', '16', '21', '3', '4', '22', '18', '23', '5', '6', '7', '12', '13', '17'], // 15 profiles - Design-focused accounts
};

// Helper function to get profiles for a group
export function getProfilesForGroup(groupId: string): SocialProfile[] {
  const profileIds = groupProfiles[groupId] || [];
  return allSocialProfiles.filter(p => profileIds.includes(p.id));
}

// Helper function to get group by ID
export function getGroupById(groupId: string): GroupItem | undefined {
  return groups.find(g => g.id === groupId);
}

// Helper function to add a new group
export function addGroup(group: GroupItem, profileIds: string[]) {
  groups.push(group);
  groupProfiles[group.id] = profileIds;
}