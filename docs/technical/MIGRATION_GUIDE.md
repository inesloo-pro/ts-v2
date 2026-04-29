# Migration Guide - Project Restructure 2026-04-15

This guide helps you navigate the new project structure after the major reorganization.

## What Changed?

### Documentation
**Before:**
```
/ATTRIBUTIONS.md
/USER_STORIES.md
/specifications.md
/GLOBAL_SEARCH_SPECIFICATIONS.md
/GROUP_SELECTION_STAGES_SPECIFICATION.md
/IMPLEMENTATION_SUMMARY.md
/LOADING_ANIMATION_FIX.md
/TOOLTIP_ARCHITECTURE.md
/TOOLTIP_FLOW_DIAGRAM.md
/TOUCHPAD_SCROLL_FIX.md
```

**After:**
```
/docs/
├── ATTRIBUTIONS.md
├── USER_STORIES.md
├── specifications/
│   ├── specifications.md
│   ├── GLOBAL_SEARCH_SPECIFICATIONS.md
│   └── GROUP_SELECTION_STAGES_SPECIFICATION.md
└── technical/
    ├── IMPLEMENTATION_SUMMARY.md
    ├── LOADING_ANIMATION_FIX.md
    ├── TOOLTIP_ARCHITECTURE.md
    ├── TOOLTIP_FLOW_DIAGRAM.md
    └── TOUCHPAD_SCROLL_FIX.md
```

### Component Structure
**Before:**
```
/src/app/components/
├── CreateGroupModal.tsx
├── GroupSelectionModal.tsx
├── LeftSidebar.tsx
├── ProfileManager.tsx
├── ProfileBadges.tsx
├── SPSelectorNavbar.tsx
├── SPSearchModal.tsx
├── FunctionalSPSelector.tsx
├── FunctionalSPSelectorOptionB.tsx
├── AllPostsView.tsx
├── CalendarView.tsx
├── EmptyState.tsx
├── LoadingState.tsx
├── ui/
└── figma/
```

**After:**
```
/src/app/components/
├── features/
│   ├── groups/
│   │   ├── CreateGroupModal.tsx
│   │   ├── GroupSelectionModal.tsx
│   │   └── LeftSidebar.tsx
│   ├── navigation/
│   │   ├── FunctionalPageTitle.tsx
│   │   ├── FunctionalSPSelector.tsx
│   │   ├── FunctionalSPSelectorOptionB.tsx
│   │   ├── SPSearchModal.tsx
│   │   └── SPSelectorNavbar.tsx
│   ├── profiles/
│   │   ├── ProfileBadges.tsx
│   │   ├── ProfileManager.tsx
│   │   ├── SelectorProfileAvatar.tsx
│   │   ├── SmartRedirectionTooltip.tsx
│   │   └── UnsupportedProfileTooltip.tsx
│   └── views/
│       ├── AllPostsView.tsx
│       └── CalendarView.tsx
├── common/
│   ├── EmptyState.tsx
│   └── LoadingState.tsx
├── ui/
└── figma/
```

### Assets & Icons
**Before:**
```
/src/imports/svg-*.ts (53 SVG files mixed with other imports)
```

**After:**
```
/src/assets/icons/svg-*.ts (all 53 SVG files centralized)
```

### Hooks & Utils
**Before:**
```
/src/app/utils/
├── useSmartRedirectionTooltip.ts (hook mixed with utils)
├── platformHelpers.ts
└── sortProfiles.ts
```

**After:**
```
/src/app/hooks/
└── useSmartRedirectionTooltip.ts

/src/app/utils/
├── platformHelpers.ts
└── sortProfiles.ts
```

## Import Path Changes

### For App.tsx
**Before:**
```typescript
import { LeftSidebar } from './components/LeftSidebar';
import { ProfileManager } from './components/ProfileManager';
import { AllPostsView } from './components/AllPostsView';
```

**After:**
```typescript
import { LeftSidebar } from './components/features/groups/LeftSidebar';
import { ProfileManager } from './components/features/profiles/ProfileManager';
import { AllPostsView } from './components/features/views/AllPostsView';
```

### For SVG Imports
**Before:**
```typescript
import svgPaths from "../../imports/svg-woycytmen9";
```

**After:**
```typescript
// From components root
import svgPaths from "../../assets/icons/svg-woycytmen9";

// From features subdirectories
import svgPaths from "../../../../assets/icons/svg-woycytmen9";
```

### For Cross-Feature Imports
**Example: GroupSelectionModal importing ProfileManager**

**Before:**
```typescript
import { ProfileManager } from './ProfileManager';
```

**After:**
```typescript
import { ProfileManager } from '../profiles/ProfileManager';
```

### For Data/Utils Imports from Features
**Before (from /src/app/components/):**
```typescript
import { SocialProfile } from '../data/profiles';
import { sortProfiles } from '../utils/sortProfiles';
```

**After (from /src/app/components/features/\*/):**
```typescript
import { SocialProfile } from '../../../data/profiles';
import { sortProfiles } from '../../../utils/sortProfiles';
import { useSmartRedirectionTooltip } from '../../../hooks/useSmartRedirectionTooltip';
```

## Using the Features Index

For cleaner imports in App.tsx and other top-level files, you can now use:

```typescript
// Instead of multiple imports
import { CreateGroupModal } from './components/features/groups/CreateGroupModal';
import { LeftSidebar } from './components/features/groups/LeftSidebar';
import { ProfileManager } from './components/features/profiles/ProfileManager';

// Use the index (optional, for cleaner imports)
import { 
  CreateGroupModal, 
  LeftSidebar,
  ProfileManager 
} from './components/features';
```

## Benefits of New Structure

1. **Clear Separation of Concerns**: Components organized by feature domain
2. **Better Scalability**: Easy to add new features without cluttering
3. **Improved Discoverability**: Related components are grouped together
4. **Centralized Assets**: All SVG icons in one place
5. **Type Safety**: Dedicated types folder for shared TypeScript types
6. **Clean Documentation**: All docs organized in `/docs/` with clear categories

## Next Steps

1. Review the new structure in `/README.md`
2. Check the `/docs/` folder for all specifications and technical docs
3. Use the feature-based imports in your code
4. Consider adding more shared types to `/src/app/types/` as the project grows
