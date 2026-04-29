import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { SocialProfile } from '../../../data/profiles';
import { getPlatformColor, getProfileInitials } from '../../../utils/platformHelpers';
import { sortProfiles } from '../../../utils/sortProfiles';

interface SPSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: SocialProfile[];
  onSelectProfile: (profileId: string) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  currentView?: 'calendar' | 'allposts';
  sortByAvailability?: boolean;
}

export function SPSearchModal({
  isOpen,
  onClose,
  profiles,
  onSelectProfile,
  buttonRef,
  currentView,
  sortByAvailability
}: SPSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close modal when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(profile => {
    const query = searchQuery.toLowerCase();
    return (
      profile.name?.toLowerCase().includes(query) ||
      profile.handle?.toLowerCase().includes(query)
    );
  });

  // Sort profiles using shared utility
  const sortedProfiles = sortProfiles({
    profiles: filteredProfiles,
    currentView: currentView || 'calendar',
    spSelectorOption: 'B', // Search modal is primarily used in Design B
    navbarSortMode: 'availability', // Search modal always sorts by availability if enabled
    sortProfilesByAvailability: !!sortByAvailability,
  });

  const handleProfileClick = (profileId: string) => {
    onSelectProfile(profileId);
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  // Calculate position relative to button
  const buttonRect = buttonRef.current?.getBoundingClientRect();
  const top = buttonRect ? buttonRect.bottom + 8 : 0;
  const left = buttonRect ? buttonRect.left : 0;

  return (
    <div
      ref={modalRef}
      className="fixed bg-white rounded-[8px] shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-[#e0e0e0] z-[150] w-[280px]"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {/* Search Input */}
      <div className="p-[12px] border-b border-[#f0f0f0]">
        <div className="bg-[#f0f0f0] rounded-[4px] px-[8px] py-[6px] flex items-center gap-[8px]">
          <Search size={14} className="text-[#a0a0a0] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px] placeholder:text-[#a0a0a0] flex-1"
          />
        </div>
      </div>

      {/* Profile List */}
      <div className="max-h-[320px] overflow-y-auto">
        {sortedProfiles.length > 0 ? (
          sortedProfiles.map((profile) => {
            const initials = getProfileInitials(profile.name);
            const platformColor = getPlatformColor(profile.platform);
            const isUnsupported = currentView === 'calendar' && profile.platform === 'youtube';

            return (
              <button
                key={profile.id}
                onClick={() => handleProfileClick(profile.id)}
                className={`w-full flex items-center gap-[8px] px-[12px] py-[10px] hover:bg-[#f8f8f8] transition-colors cursor-pointer border-none bg-transparent text-left ${
                  isUnsupported ? 'opacity-60' : ''
                }`}
              >
                {/* Avatar with Badge */}
                <div className="relative shrink-0">
                  <div
                    className="size-[32px] rounded-full flex items-center justify-center border border-white relative"
                    style={{ backgroundColor: profile.avatar ? 'transparent' : platformColor }}
                  >
                    {/* Light gray border for transparent avatars */}
                    <div className="absolute inset-0 border border-[#e0e0e0] rounded-full pointer-events-none" />
                    {profile.avatar ? (
                      <img src={profile.avatar} alt={profile.name} className="absolute inset-0 size-[32px] rounded-full object-cover" />
                    ) : (
                      <span className="font-['Gilroy:Medium',sans-serif] text-[#606060] text-[8px] tracking-[-0.3px] relative z-[1]">
                        {initials}
                      </span>
                    )}
                  </div>
                  {/* Platform Badge */}
                  <div className="absolute bottom-[2px] right-[-5px] bg-white rounded-[6px] border border-[#f0f0f0] size-[14px] flex items-center justify-center">
                    {profile.platform === 'instagram' && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 0C7.5175 0 7.68425 0.00551719 8.24075 0.0291641C8.79625 0.0528 9.17525 0.13225 9.50625 0.251719C9.84975 0.375063 10.1397 0.541203 10.4297 0.831281C10.7161 1.11695 10.8826 1.40795 11.0063 1.74859C11.1228 2.07983 11.2056 2.45914 11.2293 3.01422C11.2529 3.57078 11.2586 3.73742 11.2586 5.25516C11.2586 6.77244 11.2529 6.93908 11.2293 7.49563C11.2056 8.05072 11.1262 8.43 11.0063 8.76141C10.8827 9.10495 10.7166 9.39498 10.4268 9.68512C10.1388 9.97527 9.84711 10.1414 9.50344 10.265C9.17211 10.3844 8.79284 10.4673 8.23741 10.491C7.68086 10.5146 7.51422 10.5203 5.99648 10.5203C4.4792 10.5203 4.31257 10.5146 3.75602 10.491C3.20109 10.4673 2.82148 10.3879 2.49062 10.265C2.14641 10.1414 1.85683 9.97531 1.56672 9.68512C1.27661 9.39504 1.10997 9.10495 0.986625 8.76141C0.870422 8.43008 0.78752 8.05078 0.76382 7.49563C0.740117 6.93908 0.734375 6.77245 0.734375 5.25516C0.734375 3.73742 0.740117 3.57078 0.76382 3.01422C0.787508 2.45909 0.866906 2.07977 0.986625 1.74859C1.1102 1.40788 1.27634 1.11695 1.56672 0.831281C1.85683 0.541203 2.14641 0.375 2.49062 0.251719C2.82148 0.13225 3.20062 0.0528 3.75602 0.0291641C4.31257 0.00546094 4.4792 0 5.99648 0H6ZM6 0.864583C4.50789 0.864583 4.35211 0.867891 3.80223 0.891563C3.28922 0.911953 3.00789 0.991406 2.82031 1.06328C2.56406 1.15734 2.38273 1.26891 2.19141 1.46016C1.99992 1.65164 1.88836 1.83328 1.7943 2.08953C1.72242 2.27711 1.64297 2.55844 1.62258 3.07145C1.60219 3.62133 1.59531 3.77711 1.59531 5.26922C1.59531 6.76129 1.59859 6.91717 1.62258 7.46704C1.64297 7.97999 1.72242 8.26139 1.7943 8.44891C1.88836 8.70516 2 8.88649 2.19141 9.07781C2.38289 9.26907 2.56422 9.38106 2.82031 9.47512C3.00789 9.54699 3.28922 9.62641 3.80223 9.6468C4.35211 9.66719 4.50789 9.67402 6 9.67402C7.49211 9.67402 7.64789 9.67059 8.19777 9.6468C8.71078 9.62641 8.99211 9.54699 9.17969 9.47512C9.43594 9.38106 9.61727 9.26907 9.80859 9.07781C10 8.88633 10.1116 8.70516 10.2057 8.44891C10.2776 8.26133 10.357 7.97999 10.3774 7.46704C10.3978 6.91717 10.4047 6.76129 10.4047 5.26922C10.4047 3.77711 10.4014 3.62133 10.3774 3.07145C10.357 2.55844 10.2776 2.27711 10.2057 2.08953C10.1116 1.83328 10.0001 1.65164 9.80859 1.46016C9.61711 1.26873 9.43594 1.15734 9.17969 1.06328C8.99211 0.991406 8.71078 0.911953 8.19777 0.891563C7.64789 0.871172 7.49211 0.864583 6 0.864583ZM6 2.59766C7.57688 2.59766 8.85566 3.87675 8.85602 5.45312C8.85602 7.03 7.57694 8.30908 6 8.30908C4.42313 8.30902 3.14404 7.02994 3.14404 5.45312C3.14416 3.87625 4.42325 2.59766 6 2.59766ZM6 3.46224C4.90031 3.46228 4.00864 4.35395 4.00864 5.45312C4.00864 6.55236 4.90027 7.44396 6 7.44402C7.09977 7.44402 7.99144 6.55239 7.99144 5.45312C7.99144 4.35386 7.09973 3.46224 6 3.46224ZM8.95688 1.89648C9.36088 1.89652 9.68848 2.22408 9.68848 2.62805C9.6884 3.03198 9.36083 3.35964 8.95688 3.35969C8.55289 3.35969 8.22533 3.03203 8.22527 2.62805C8.22527 2.22403 8.55284 1.89648 8.95688 1.89648Z" fill="#606060"/>
                      </svg>
                    )}
                    {profile.platform === 'linkedin' && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2235 10.2259H7.94699V7.44147C7.94699 6.65246 7.93298 5.67297 6.77046 5.67297C5.59399 5.67297 5.40249 6.49547 5.40249 7.38747V10.2259H3.17548V4.50003H5.30999V5.28003H5.33548C5.62148 4.69997 6.26098 4.10997 7.23198 4.10997C9.53348 4.10997 9.97399 5.54997 9.97399 7.43297V10.2259H10.2235ZM2.66848 3.71647C1.93446 3.71647 1.34448 3.12147 1.34448 2.39147C1.34448 1.66197 1.935 1.06747 2.66848 1.06747C3.40098 1.06747 3.99296 1.66197 3.99296 2.39147C3.99296 3.12147 3.40048 3.71647 2.66848 3.71647ZM3.80947 10.2259H1.52748V4.50003H3.80947V10.2259ZM11.1125 0.000976562H0.883483C0.395983 0.000976562 0 0.387473 0 0.864473V11.1352C0 11.613 0.395983 12.0002 0.883483 12.0002H11.1111C11.5986 12.0002 12 11.613 12 11.1352V0.864473C12 0.387473 11.5986 0.000976562 11.1111 0.000976562H11.1125Z" fill="#606060"/>
                      </svg>
                    )}
                    {profile.platform === 'youtube' && (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M13.6845 1.56094C13.5319 0.99625 13.0919 0.551875 12.5331 0.398438C11.4919 0.109375 7.05313 0.109375 7.05313 0.109375C7.05313 0.109375 2.61438 0.109375 1.57313 0.398438C1.01438 0.551875 0.574375 0.99625 0.421875 1.56094C0.136875 2.61094 0.136875 4.80781 0.136875 4.80781C0.136875 4.80781 0.136875 7.00469 0.421875 8.05469C0.574375 8.61937 1.01438 9.06375 1.57313 9.21719C2.61438 9.50625 7.05313 9.50625 7.05313 9.50625C7.05313 9.50625 11.4919 9.50625 12.5331 9.21719C13.0919 9.06375 13.5319 8.61937 13.6845 8.05469C13.9694 7.00469 13.9694 4.80781 13.9694 4.80781C13.9694 4.80781 13.9694 2.61094 13.6845 1.56094ZM5.65563 6.78094V2.83469L9.23063 4.80781L5.65563 6.78094Z" fill="#606060"/>
                      </svg>
                    )}
                    {profile.platform === 'tiktok' && (
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M5.75977 0.00195312C6.30514 0 6.84404 0.00488281 7.38326 0C7.41451 0.683789 7.64014 1.37695 8.09092 1.91895C8.54186 2.45459 9.17857 2.81746 9.85139 2.97998V5.00244C9.25545 4.97021 8.65299 4.82373 8.10061 4.55908C7.82545 4.42773 7.56326 4.27148 7.30811 4.10986C7.30475 5.31348 7.31295 6.51709 7.30076 7.71982C7.26217 8.31191 7.0851 8.89258 6.78264 9.40674C6.29467 10.2373 5.47357 10.8999 4.54264 11.1943C3.90561 11.3848 3.22061 11.4146 2.5652 11.2799C1.66904 11.1008 0.841231 10.6316 0.236544 9.95215C-0.142612 9.53271 -0.454299 9.02949 -0.645987 8.48496C-0.690143 8.35049 -0.72425 8.21221 -0.753831 8.07393C-0.758206 7.09521 -0.751269 6.11201 -0.756519 5.12881C-0.562174 5.42998 -0.330237 5.7084 -0.046237 5.94434C0.458388 6.40498 1.12905 6.69404 1.81014 6.71533C1.81014 6.04248 1.80545 5.37416 1.8127 4.70131C1.30951 4.59277 0.775232 4.37012 0.387856 3.96973C0.124512 3.71895 -0.073019 3.41309 -0.223957 3.08232C-0.402675 2.68799 -0.472237 2.2498 -0.550987 1.82539C-0.557456 1.2292 -0.551894 0.628516 -0.554456 0.0323567C-0.177394 0.0273633 0.203293 0.0273633 0.579917 0.0323567C0.584293 0.77373 0.774231 1.5251 1.18232 2.14473C1.59904 2.78623 2.26389 3.25342 3.00779 3.42285C3.19186 3.46875 3.37998 3.50977 3.57014 3.51904C3.57014 2.84619 3.56529 2.17217 3.57217 1.49932C3.62217 0.961719 3.81045 0.431836 4.12326 0.992383C4.31045 0.627734 4.5827 0.302539 4.92998 0.0810547C5.21045 -0.0992969 5.5427 -0.170898 5.86873 -0.218164C5.81826 0.184961 5.87139 0.594922 5.75961 0.989062L5.75977 0.00195312Z" fill="#606060"/>
                      </svg>
                    )}
                    {profile.platform === 'x' && (
                      <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                        <path d="M9.45056 0H11.2913L7.27051 4.59501L12 10.8465H8.2969L5.39698 7.0545L2.09048 10.8465H0.23719L4.50702 5.9565L0 0H3.77609L6.42857 3.4785L9.45056 0ZM8.80903 9.74799H9.82857L3.24361 1.03951H2.14286L8.80903 9.74799Z" fill="#606060"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                  <div className="font-['Gilroy:Semibold',sans-serif] text-[#606060] text-[12px] tracking-[-0.3px] truncate">
                    {profile.name}
                  </div>
                  <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[10px] tracking-[-0.3px] truncate">
                    {isUnsupported ? 'Not supported in this view' : `@${profile.handle}`}
                  </div>
                </div>
              </button>
            );
          })
        ) : (
          <div className="px-[12px] py-[20px] text-center">
            <div className="font-['Gilroy:Medium',sans-serif] text-[#a0a0a0] text-[12px] tracking-[-0.3px]">
              No profiles found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}