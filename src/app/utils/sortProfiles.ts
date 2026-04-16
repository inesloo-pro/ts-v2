import type { SocialProfile } from '../data/profiles';

interface SortProfilesOptions {
  profiles: SocialProfile[];
  currentView: 'calendar' | 'allposts';
  spSelectorOption: 'A' | 'B';
  navbarSortMode: 'availability' | 'lastUsed';
  sortProfilesByAvailability: boolean;
  groupLastUsedOrder?: string[];
  selectedItem?: string | null;
}

export function sortProfiles({
  profiles,
  currentView,
  spSelectorOption,
  navbarSortMode,
  sortProfilesByAvailability,
  groupLastUsedOrder = [],
  selectedItem
}: SortProfilesOptions): SocialProfile[] {
  let sorted = [...profiles];

  // Scenario A with "Last Used" mode
  if (navbarSortMode === 'lastUsed' && spSelectorOption === 'A') {
    if (groupLastUsedOrder && groupLastUsedOrder.length > 0) {
      // Sort by last used order
      const ordered = groupLastUsedOrder
        .map(id => profiles.find(p => p.id === id))
        .filter((p): p is SocialProfile => p !== undefined);
      
      // Add any new profiles that aren't in the last used list yet (sorted A-Z)
      const remaining = profiles
        .filter(p => !groupLastUsedOrder.includes(p.id))
        .sort((a, b) => a.name.localeCompare(b.name));
        
      sorted = [...ordered, ...remaining];
    } else {
      // First time - initialize with A-Z only (no availability sorting)
      sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  } 
  // Scenario A with "Availability" mode OR Scenario B (always uses availability toggle + A-Z)
  else if (sortProfilesByAvailability) {
    // Sort by availability first (supported platforms), then alphabetically
    sorted = sorted.sort((a, b) => {
      // In calendar view, YouTube profiles are not supported
      const aSupported = currentView === 'calendar' ? a.platform !== 'youtube' : true;
      const bSupported = currentView === 'calendar' ? b.platform !== 'youtube' : true;
      
      // Supported profiles come first
      if (aSupported !== bSupported) {
        return aSupported ? -1 : 1;
      }
      
      // Then sort alphabetically
      return a.name.localeCompare(b.name);
    });
  } else {
    // Just alphabetical sorting (always as base sorting)
    sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Move selected profile to first position if a specific profile is selected (only for Option A)
  if (spSelectorOption === 'A' && selectedItem && selectedItem !== 'group') {
    const selectedProfile = sorted.find(p => p.id === selectedItem);
    if (selectedProfile) {
      sorted = [
        selectedProfile,
        ...sorted.filter(p => p.id !== selectedItem)
      ];
    }
  }

  return sorted;
}