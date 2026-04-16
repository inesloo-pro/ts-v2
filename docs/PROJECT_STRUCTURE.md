# Project Structure Overview

## Directory Tree

```
/workspaces/default/code/
├── docs/                           # 📚 All documentation
│   ├── specifications/             # Feature specs and requirements
│   ├── technical/                  # Technical docs and implementation notes
│   ├── USER_STORIES.md            # User scenarios
│   └── ATTRIBUTIONS.md            # Third-party credits
│
├── src/
│   ├── app/
│   │   ├── App.tsx                # 🏠 Main application entry point
│   │   │
│   │   ├── components/
│   │   │   ├── features/          # 🎯 Feature-specific components
│   │   │   │   ├── groups/        # Group management
│   │   │   │   ├── navigation/    # Navigation & SP selector
│   │   │   │   ├── profiles/      # Profile management
│   │   │   │   └── views/         # Page views
│   │   │   │
│   │   │   ├── common/            # 🔄 Shared components
│   │   │   ├── ui/                # 🎨 Shadcn UI components
│   │   │   └── figma/             # 📐 Figma imports (reference)
│   │   │
│   │   ├── hooks/                 # 🪝 Custom React hooks
│   │   ├── types/                 # 📝 TypeScript type definitions
│   │   ├── data/                  # 💾 Mock data and profiles
│   │   └── utils/                 # 🛠️ Utility functions
│   │
│   ├── assets/
│   │   └── icons/                 # 🎭 SVG icons (53 files)
│   │
│   └── styles/                    # 💅 Global styles
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
│
├── README.md                      # Main project documentation
├── CHANGELOG.md                   # Version history
├── package.json                   # Dependencies
└── vite.config.ts                # Build configuration
```

## Component Organization

### Features (`/src/app/components/features/`)

#### 👥 Groups (`features/groups/`)
- `CreateGroupModal.tsx` - Modal for creating new groups
- `GroupSelectionModal.tsx` - Group picker with search
- `LeftSidebar.tsx` - Navigation sidebar

#### 🧭 Navigation (`features/navigation/`)
- `FunctionalPageTitle.tsx` - Page title with SP selector
- `FunctionalSPSelector.tsx` - Design A SP selector
- `FunctionalSPSelectorOptionB.tsx` - Design B SP selector  
- `SPSearchModal.tsx` - Search modal for social profiles
- `SPSelectorNavbar.tsx` - Navigation bar for SPs

#### 👤 Profiles (`features/profiles/`)
- `ProfileBadges.tsx` - Profile badge components
- `ProfileManager.tsx` - Main profile management logic
- `SelectorProfileAvatar.tsx` - Avatar for profile selector
- `SmartRedirectionTooltip.tsx` - Tooltip for redirections
- `UnsupportedProfileTooltip.tsx` - Tooltip for unsupported profiles

#### 📄 Views (`features/views/`)
- `AllPostsView.tsx` - All posts page view
- `CalendarView.tsx` - Calendar page view

### Common (`/src/app/components/common/`)
- `EmptyState.tsx` - Empty state component
- `LoadingState.tsx` - Loading animation

### UI (`/src/app/components/ui/`)
Shadcn UI components (accordion, alert, badge, button, card, etc.)

### Figma (`/src/app/components/figma/`)
Archived Figma component imports for reference

## Data Layer (`/src/app/data/`)
- `profiles.ts` - Standard profile data
- `largeProfiles.ts` - Large dataset (Excel cohort)
- `cohortProfiles.ts` - Launch and Trial cohort data

## Utilities (`/src/app/utils/`)
- `platformHelpers.ts` - Platform-specific helpers
- `sortProfiles.ts` - Profile sorting logic

## Hooks (`/src/app/hooks/`)
- `useSmartRedirectionTooltip.ts` - Smart redirection tooltip hook

## Assets (`/src/assets/`)
- `icons/` - 53 SVG icon files from Figma

## Documentation (`/docs/`)

### Specifications
- `specifications.md` - Main feature specifications (Stage 01)
- `GLOBAL_SEARCH_SPECIFICATIONS.md` - Global search feature
- `GROUP_SELECTION_STAGES_SPECIFICATION.md` - Group selection stages

### Technical
- `IMPLEMENTATION_SUMMARY.md` - Implementation overview
- `LOADING_ANIMATION_FIX.md` - Loading animation implementation
- `TOOLTIP_ARCHITECTURE.md` - Tooltip system architecture
- `TOOLTIP_FLOW_DIAGRAM.md` - Tooltip flow diagrams
- `TOUCHPAD_SCROLL_FIX.md` - Touchpad scroll behavior
- `MIGRATION_GUIDE.md` - Guide for navigating new structure

## Key Principles

1. **Feature-First Organization**: Components grouped by domain/feature
2. **Centralized Assets**: Icons and shared resources in dedicated folders
3. **Clear Separation**: Hooks, utils, types, data all separated
4. **Documentation**: All docs in `/docs/` with clear categorization
5. **Scalability**: Easy to add new features without cluttering

## Import Examples

```typescript
// App.tsx importing features
import { LeftSidebar } from './components/features/groups/LeftSidebar';
import { ProfileManager } from './components/features/profiles/ProfileManager';
import { AllPostsView } from './components/features/views/AllPostsView';

// Feature component importing from data/utils
import { SocialProfile } from '../../../data/profiles';
import { sortProfiles } from '../../../utils/sortProfiles';

// Feature component importing assets
import svgPaths from '../../../../assets/icons/svg-woycytmen9';

// Cross-feature imports
import { ProfileManager } from '../profiles/ProfileManager';
```
