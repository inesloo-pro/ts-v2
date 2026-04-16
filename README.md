# SP Selector Project

Interactive profile management system based on Figma wireframes with group selection dropdown and navigation bar.

## Project Structure

```
/
├── docs/                          # All documentation
│   ├── specifications/            # Feature specifications
│   │   ├── specifications.md      # Main specifications
│   │   ├── global-search.md       # Global search specifications
│   │   └── group-selection-stages.md
│   ├── technical/                 # Technical documentation
│   │   ├── implementation-summary.md
│   │   ├── loading-animation-fix.md
│   │   ├── tooltip-architecture.md
│   │   ├── tooltip-flow-diagram.md
│   │   └── touchpad-scroll-fix.md
│   ├── user-stories.md           # User stories and scenarios
│   └── attributions.md           # Third-party attributions
│
├── src/
│   ├── app/
│   │   ├── App.tsx               # Main application component
│   │   ├── components/
│   │   │   ├── features/         # Feature-specific components
│   │   │   │   ├── groups/       # Group management components
│   │   │   │   │   ├── CreateGroupModal.tsx
│   │   │   │   │   ├── GroupSelectionModal.tsx
│   │   │   │   │   └── LeftSidebar.tsx
│   │   │   │   ├── navigation/   # Navigation components
│   │   │   │   │   ├── FunctionalPageTitle.tsx
│   │   │   │   │   ├── FunctionalSPSelector.tsx
│   │   │   │   │   ├── FunctionalSPSelectorOptionB.tsx
│   │   │   │   │   ├── SPSearchModal.tsx
│   │   │   │   │   └── SPSelectorNavbar.tsx
│   │   │   │   ├── profiles/     # Profile management components
│   │   │   │   │   ├── ProfileBadges.tsx
│   │   │   │   │   ├── ProfileManager.tsx
│   │   │   │   │   ├── SelectorProfileAvatar.tsx
│   │   │   │   │   ├── SmartRedirectionTooltip.tsx
│   │   │   │   │   └── UnsupportedProfileTooltip.tsx
│   │   │   │   └── views/        # Page/view components
│   │   │   │       ├── AllPostsView.tsx
│   │   │   │       └── CalendarView.tsx
│   │   │   ├── common/           # Shared/common components
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   └── LoadingState.tsx
│   │   │   ├── ui/               # Shadcn UI components
│   │   │   └── figma/            # Figma imported components
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useSmartRedirectionTooltip.ts
│   │   ├── types/                # TypeScript type definitions
│   │   ├── data/                 # Data files and mock data
│   │   │   ├── profiles.ts
│   │   │   ├── largeProfiles.ts
│   │   │   └── cohortProfiles.ts
│   │   └── utils/                # Utility functions
│   │       ├── platformHelpers.ts
│   │       └── sortProfiles.ts
│   ├── assets/                   # Static assets
│   │   └── icons/                # SVG icons from Figma
│   └── styles/                   # Global styles
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
│
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## Key Features

- **Feature-based Architecture**: Components organized by feature (groups, profiles, navigation, views)
- **Centralized Assets**: SVG icons in `/src/assets/icons/`
- **Organized Documentation**: All docs in `/docs/` with clear categorization
- **Type Safety**: TypeScript throughout with dedicated types folder
- **Custom Hooks**: Reusable hooks in `/src/app/hooks/`

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## Component Organization

### Features
- **Groups**: Group creation, selection, and sidebar navigation
- **Navigation**: SP selector, page title, search
- **Profiles**: Profile management, badges, tooltips
- **Views**: Calendar and All Posts views

### Common
Shared components used across features (EmptyState, LoadingState)

### UI
Shadcn UI components for consistent design system

### Figma
Imported Figma components (archived/reference)

## Import Paths

Components should use relative imports:
```typescript
// From a feature component to data
import { SocialProfile } from '../../../data/profiles';

// From a feature component to another feature
import { ProfileManager } from '../profiles/ProfileManager';

// From a feature component to common
import { LoadingState } from '../../common/LoadingState';

// From a feature component to hooks
import { useSmartRedirectionTooltip } from '../../../hooks/useSmartRedirectionTooltip';
```
