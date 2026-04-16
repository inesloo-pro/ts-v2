// Cohort-specific data for different user types
import type { SocialProfile, GroupItem } from './profiles';

// ============================================
// LAUNCH COHORT - 5 social profiles, no groups
// ============================================
export const launchProfiles: SocialProfile[] = [
  { id: '1', name: 'Nike', handle: '@nike', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/nike.com/w/400/h/400' },
  { id: '2', name: 'Adidas', handle: '@adidas', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/adidas.com/w/400/h/400' },
  { id: '3', name: 'Zara', handle: '@zara', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/zara.com/w/400/h/400' },
  { id: '4', name: 'H&M', handle: '@hm', platform: 'linkedin', avatar: 'https://cdn.brandfetch.io/hm.com/w/400/h/400' },
  { id: '5', name: 'Apple Tech', handle: '@appletech', platform: 'youtube', avatar: 'https://cdn.brandfetch.io/apple.com/w/400/h/400' },
];

export const launchGroups: GroupItem[] = [];

export const launchGroupProfiles: Record<string, string[]> = {
  all: launchProfiles.map(p => p.id),
};

// ============================================
// TRIAL COHORT - 4 social profiles, no groups yet
// ============================================
export const trialProfiles: SocialProfile[] = [
  { id: '1', name: 'Nike', handle: '@nike', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/nike.com/w/400/h/400' },
  { id: '2', name: 'Adidas', handle: '@adidas', platform: 'linkedin', avatar: 'https://cdn.brandfetch.io/adidas.com/w/400/h/400' },
  { id: '3', name: 'Gucci', handle: '@gucci', platform: 'instagram', avatar: 'https://cdn.brandfetch.io/gucci.com/w/400/h/400' },
  { id: '4', name: 'Puma', handle: '@puma', platform: 'tiktok', avatar: 'https://cdn.brandfetch.io/puma.com/w/400/h/400' },
];

export const trialGroups: GroupItem[] = [];

export const trialGroupProfiles: Record<string, string[]> = {
  all: trialProfiles.map(p => p.id),
};

// Helper functions for Launch cohort
export function getLaunchProfilesForGroup(groupId: string): SocialProfile[] {
  const profileIds = launchGroupProfiles[groupId] || [];
  return launchProfiles.filter(p => profileIds.includes(p.id));
}

export function getLaunchGroupById(groupId: string): GroupItem | undefined {
  return launchGroups.find(g => g.id === groupId);
}

export function addLaunchGroup(group: GroupItem, profileIds: string[]) {
  // Launch cohort cannot create groups - this should never be called
  console.warn('Launch cohort cannot create groups');
}

// Helper functions for Trial cohort
export function getTrialProfilesForGroup(groupId: string): SocialProfile[] {
  const profileIds = trialGroupProfiles[groupId] || [];
  return trialProfiles.filter(p => profileIds.includes(p.id));
}

export function getTrialGroupById(groupId: string): GroupItem | undefined {
  return trialGroups.find(g => g.id === groupId);
}

export function addTrialGroup(group: GroupItem, profileIds: string[]) {
  trialGroups.push(group);
  trialGroupProfiles[group.id] = profileIds;
}
