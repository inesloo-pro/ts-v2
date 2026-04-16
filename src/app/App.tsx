import { useState } from 'react';
import { LeftSidebar } from './components/features/groups/LeftSidebar';
import { TopBar } from './components/TopBar';
import { AnalyticsOverview } from './components/features/views/AnalyticsOverview';
import { DesignToggle } from './components/DesignToggle';

export default function App() {
  // User Cohort
  const [userCohort, setUserCohort] = useState<'launch' | 'excel' | 'trial'>('excel');

  // Navigation state - tracks which menu item is active
  const [activeMenuItem, setActiveMenuItem] = useState<'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening'>('analytics');

  const handleMenuItemChange = (menuItem: 'home' | 'dashboard' | 'analytics' | 'reports' | 'allposts' | 'campaigns' | 'publishing' | 'conversations' | 'listening') => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "linear-gradient(116.156deg, rgba(226, 226, 226, 0.1) 0%, rgba(170, 167, 172, 0.15) 50%, rgba(125, 125, 125, 0.15) 80%, rgba(228, 228, 228, 0.15) 100%), linear-gradient(90deg, rgb(235, 238, 238) 0%, rgb(235, 238, 238) 100%)"
      }}
    >
      {/* Design Toggle */}
      <DesignToggle
        userCohort={userCohort}
        onToggleUserCohort={setUserCohort}
      />

      {/* Left Sidebar */}
      <LeftSidebar
        activeMenuItem={activeMenuItem}
        onMenuItemChange={handleMenuItemChange}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden pt-[12px] pl-[20px] pr-[12px]">
        {/* Top Bar */}
        <TopBar />

        {/* White rounded content container */}
        <div className="bg-[rgba(255,255,255,0.4)] flex-1 relative rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <div className="overflow-clip rounded-[inherit] size-full">
            <AnalyticsOverview userCohort={userCohort} />
          </div>
        </div>
      </div>
    </div>
  );
}
