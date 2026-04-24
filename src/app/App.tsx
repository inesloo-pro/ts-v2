import { useState } from 'react';
import { LeftSidebar } from './components/features/groups/LeftSidebar';
import { SettingsSidebar } from './components/features/groups/SettingsSidebar';
import { TopBar } from './components/TopBar';
import { PageRouter } from './components/PageRouter';
import { SettingsView } from './components/features/views/SettingsView';
import { DesignToggle } from './components/DesignToggle';
import { UnifiedSidebar } from './components/navigation/UnifiedSidebar';
import { type L1MenuItem, getFirstSubPage } from './navigation/navConfig';

export default function App() {
  const [userCohort, setUserCohort] = useState<'launch' | 'excel' | 'trial'>('excel');
  const [navMode, setNavMode] = useState<'topbar' | 'sidebar'>('topbar');

  const [activeMenuItem, setActiveMenuItem] = useState<L1MenuItem>('home');
  const [activeSubMenuItem, setActiveSubMenuItem] = useState<string>('home');
  const [activeView, setActiveView] = useState<'main' | 'settings'>('main');
  const [activeSettingsItem, setActiveSettingsItem] = useState('sparks-ai');

  const handleMenuItemChange = (item: L1MenuItem) => {
    setActiveMenuItem(item);
    setActiveSubMenuItem(getFirstSubPage(item));
    setActiveView('main');
  };

  const handleSettingsClick = () => {
    setActiveView(v => v === 'settings' ? 'main' : 'settings');
  };

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "linear-gradient(116.156deg, rgba(226, 226, 226, 0.1) 0%, rgba(170, 167, 172, 0.15) 50%, rgba(125, 125, 125, 0.15) 80%, rgba(228, 228, 228, 0.15) 100%), linear-gradient(90deg, rgb(235, 238, 238) 0%, rgb(235, 238, 238) 100%)"
      }}
    >
      <DesignToggle
        userCohort={userCohort}
        onToggleUserCohort={setUserCohort}
        navMode={navMode}
        onNavModeChange={setNavMode}
      />

      {/* Sidebar — changes based on navMode */}
      {navMode === 'sidebar' ? (
        <UnifiedSidebar
          activeMenuItem={activeMenuItem}
          onMenuItemChange={handleMenuItemChange}
          activeSubMenuItem={activeSubMenuItem}
          onSubMenuItemChange={setActiveSubMenuItem}
          isSettingsActive={activeView === 'settings'}
          onSettingsClick={handleSettingsClick}
        />
      ) : activeView === 'settings' ? (
        <SettingsSidebar
          activeItem={activeSettingsItem}
          onItemChange={setActiveSettingsItem}
          onBack={() => setActiveView('main')}
        />
      ) : (
        <LeftSidebar
          activeMenuItem={activeMenuItem}
          onMenuItemChange={handleMenuItemChange}
          activeSubMenuItem={activeSubMenuItem}
          onSubMenuItemChange={setActiveSubMenuItem}
        />
      )}

      <div className={`flex flex-col flex-1 overflow-hidden pr-[12px] ${navMode === 'topbar' ? 'pt-[12px] pl-[20px]' : 'pt-[12px] pl-[12px]'}`}>
        {/* TopBar only visible in topbar mode */}
        {navMode === 'topbar' && (
          <TopBar
            activeMenuItem={activeMenuItem}
            onMenuItemChange={handleMenuItemChange}
            isSettingsActive={activeView === 'settings'}
            onSettingsClick={handleSettingsClick}
          />
        )}

        <div className={`bg-[rgba(255,255,255,0.4)] flex-1 relative overflow-hidden ${navMode === 'topbar' ? 'rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-[16px]'}`}>
          <div className="overflow-clip rounded-[inherit] size-full">
            {activeView === 'settings' ? (
              <SettingsView activeItem={activeSettingsItem} />
            ) : (
              <PageRouter
                activeL1={activeMenuItem}
                activeL2={activeSubMenuItem}
                userCohort={userCohort}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
