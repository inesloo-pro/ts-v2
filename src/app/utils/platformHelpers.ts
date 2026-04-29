// Platform-specific color tints (subtle pastel colors)
export function getPlatformColor(platform: 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'x' | 'facebook' | 'threads'): string {
  switch (platform) {
    case 'instagram':
      return '#FFE5F0'; // Light pink (Instagram gradient colors)
    case 'linkedin':
      return '#E0F0FF'; // Light blue (LinkedIn brand color)
    case 'youtube':
      return '#FFE5E5'; // Light red (YouTube brand color)
    case 'tiktok':
      return '#E5F5FF'; // Light cyan (TikTok brand color)
    case 'x':
      return '#F0E5FF'; // Light purple (X/Twitter alternative color)
    case 'facebook':
      return '#E5F0FF'; // Light blue (Facebook brand color)
    case 'threads':
      return '#F5E5FF'; // Light lavender (Threads brand color)
    default:
      return '#FFE5E5'; // Light red as fallback
  }
}

// Get first 2 letters of profile name as initials
export function getProfileInitials(name: string | undefined): string {
  if (!name) return '??';
  return name.substring(0, 2).toUpperCase();
}