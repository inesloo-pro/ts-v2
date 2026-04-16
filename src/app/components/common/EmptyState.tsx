import { ThumbsUp } from 'lucide-react';

interface EmptyStateProps {
  badge?: string;
  title: string;
  description: string;
  supportedPlatforms?: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  showInterestSection?: {
    title: string;
    description: string;
  };
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2H6.5C4.01472 2 2 4.01472 2 6.5V17.5C2 19.9853 4.01472 22 6.5 22H17.5C19.9853 22 22 19.9853 22 17.5V6.5C22 4.01472 19.9853 2 17.5 2Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5923C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 6.5H17.51" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9H2V21H6V9Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 12C9 10.3431 10.3431 9 12 9V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18V15C10.3431 15 9 13.6569 9 12Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9C15 7.34315 16.3431 6 18 6V3C14.6863 3 12 5.68629 12 9V21H15V9Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.237 4.636 19.855 8.356 21.312C8.288 20.584 8.227 19.466 8.404 18.666L9.418 14.368C9.418 14.368 9.127 13.785 9.127 12.897C9.127 11.488 9.953 10.444 10.988 10.444C11.865 10.444 12.291 11.107 12.291 11.902C12.291 12.791 11.717 14.115 11.423 15.342C11.177 16.364 11.927 17.196 12.936 17.196C14.754 17.196 16.156 15.279 16.156 12.465C16.156 9.966 14.366 8.216 11.955 8.216C9.151 8.216 7.523 10.319 7.523 12.754C7.523 13.644 7.862 14.599 8.28 15.116C8.37 15.227 8.383 15.326 8.357 15.437L8.081 16.608C8.041 16.79 7.94 16.829 7.751 16.736C6.511 16.16 5.749 14.343 5.749 12.715C5.749 9.407 8.188 6.377 12.244 6.377C15.482 6.377 17.988 8.681 17.988 12.418C17.988 16.301 15.869 19.425 12.777 19.425C11.728 19.425 10.738 18.878 10.398 18.227L9.779 20.487C9.524 21.486 8.837 22.718 8.385 23.444C9.544 23.807 10.758 24 12.001 24C17.524 24 22.001 19.523 22.001 12C22 6.477 17.523 2 12 2Z" fill="#606060"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16137 5.19941C1.82075 5.55057 1.57881 5.98541 1.46 6.46C1.14522 8.20556 0.991228 9.97631 1 11.75C0.988771 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17818 18.2945C2.51805 18.6309 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.3001 23.0064 13.5789 23 11.85C23.0112 10.063 22.8572 8.27867 22.54 6.52V6.42Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function EmptyState({ 
  badge,
  title, 
  description, 
  supportedPlatforms,
  showInterestSection 
}: EmptyStateProps) {
  return (
    <div className="flex-1 flex items-start justify-start px-[32px] py-[40px] overflow-auto">
      <div className="max-w-[600px]">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-[4px] mb-[24px]">
            <div className="bg-[#FEE2E2] size-[6px] rounded-full" />
            <span className="font-['Gilroy:Semibold',sans-serif] text-[12px] text-[#DC2626] tracking-[-0.3px]">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[42px] leading-[48px] tracking-[-1px] mb-[16px]">
          {title}
        </h1>

        {/* Description */}
        <p className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[16px] leading-[24px] tracking-[-0.3px] mb-[32px]">
          {description}
        </p>

        {/* Supported Platforms */}
        {supportedPlatforms && supportedPlatforms.length > 0 && (
          <div className="mb-[32px]">
            <p className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px] mb-[16px]">
              Supported social networks:
            </p>
            <div className="flex items-center gap-[16px]">
              {supportedPlatforms.map((platform, index) => (
                <div key={index} className="opacity-80 hover:opacity-100 transition-opacity">
                  {platform.icon}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show Interest Section */}
        {showInterestSection && (
          <div className="bg-[#F5F5F5] rounded-[12px] p-[24px]">
            <h3 className="font-['Gilroy:Bold',sans-serif] text-[#606060] text-[18px] tracking-[-0.3px] mb-[8px]">
              {showInterestSection.title}
            </h3>
            <p className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[14px] leading-[20px] tracking-[-0.3px] mb-[16px]">
              {showInterestSection.description}
            </p>
            <button className="flex items-center gap-[8px] px-[16px] py-[10px] bg-white border border-[#e0e0e0] rounded-[8px] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
              <ThumbsUp size={16} className="text-[#606060]" />
              <span className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[14px] tracking-[-0.3px]">
                I'm interested
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Pre-configured empty states for common scenarios
export const emptyStates = {
  youtubeScheduling: {
    badge: 'Not yet available',
    title: 'Interested in YouTube Scheduling?',
    description: 'YouTube scheduling is coming soon to Iconosquare. This feature will allow you to plan, schedule, and publish your YouTube videos directly from your content calendar, helping you maintain a consistent upload schedule and maximize your channel\'s engagement.',
    supportedPlatforms: [
      { name: 'Instagram', icon: <InstagramIcon /> },
      { name: 'Facebook', icon: <FacebookIcon /> },
      { name: 'LinkedIn', icon: <LinkedInIcon /> },
      { name: 'TikTok', icon: <TikTokIcon /> },
      { name: 'Pinterest', icon: <PinterestIcon /> },
    ],
    showInterestSection: {
      title: 'Show your interest!',
      description: 'This feature isn\'t yet available for now, but if you\'d be interested in seeing it implemented, let us know by leaving a vote!',
    },
  },
  groupContentDisplay: {
    badge: 'Not yet available',
    title: 'Group Content View Coming Soon',
    description: 'Viewing content at the group level isn\'t available yet in All Posts. This feature will allow you to see aggregated content and performance metrics across all social profiles within a group, making it easier to analyze your group\'s overall social media presence and engagement patterns.',
    supportedPlatforms: [
      { name: 'Instagram', icon: <InstagramIcon /> },
      { name: 'Facebook', icon: <FacebookIcon /> },
      { name: 'LinkedIn', icon: <LinkedInIcon /> },
      { name: 'TikTok', icon: <TikTokIcon /> },
      { name: 'Pinterest', icon: <PinterestIcon /> },
      { name: 'YouTube', icon: <YoutubeIcon /> },
    ],
    showInterestSection: {
      title: 'Show your interest!',
      description: 'This feature isn\'t available yet, but if you\'d be interested in seeing it implemented, let us know by leaving a vote!',
    },
  },
};