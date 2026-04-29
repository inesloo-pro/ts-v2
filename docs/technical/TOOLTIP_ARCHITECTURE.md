# Smart Redirection Tooltip Architecture

## Overview

The smart redirection tooltip system is designed to display a notification when the system automatically redirects the user to a supported profile view. This document outlines the architecture to prevent Design A and Design B from drifting apart.

## Critical Architecture Rules

### ⚠️ DO NOT MODIFY WITHOUT READING THIS ⚠️

1. **Shared Hook is the Single Source of Truth**
   - Both `FunctionalSPSelector` (Design A) and `FunctionalSPSelectorOptionB` (Design B) MUST use `useSmartRedirectionTooltip` hook
   - NEVER duplicate tooltip logic directly in the components
   - All tooltip timing and state management logic belongs in the hook

2. **Ref Assignment Pattern**
   - Design A: Ref must be on a wrapper `<div>` inside `motion.div` (motion components don't forward refs reliably)
   - Design B: Ref is on a regular `<div>` wrapper around the button
   - Pattern: `ref={isSelected ? firstProfileRef : undefined}`

3. **Timing Differences**
   - Design A needs `extraDelay: 500` to account for layout animations (profiles reorder on selection)
   - Design B needs `extraDelay: 0` (no layout animations, scrolling only)
   - These delays are configured in the component, not the hook

## File Structure

```
/src/app/utils/useSmartRedirectionTooltip.ts  ← Single source of truth
/src/app/components/FunctionalSPSelector.tsx   ← Design A (uses hook with 500ms delay)
/src/app/components/FunctionalSPSelectorOptionB.tsx ← Design B (uses hook with 0ms delay)
/src/app/components/SmartRedirectionTooltip.tsx ← UI component (stateless)
```

## Data Flow

```
App.tsx (pendingRedirection state)
  ↓
FunctionalPageTitle / AllPostsView (passes props)
  ↓
FunctionalSPSelector[OptionB] (uses hook)
  ↓
useSmartRedirectionTooltip (manages state & timing)
  ↓
SmartRedirectionTooltip (renders UI)
```

## Props Chain

The following props MUST be passed through the component hierarchy:

1. `pendingRedirection` - Flag indicating a redirection occurred
2. `isLoading` - Loading state (tooltip waits for loading to finish)
3. `firstProfileRef` - Ref to the selected profile badge (for positioning)
4. `onRedirectionComplete` - Callback to clear the redirection flag

### Complete Props Chain:

```typescript
App.tsx
  → FunctionalPageTitle (calendar view)
  → AllPostsView (all posts view)
    → FunctionalSPSelector | FunctionalSPSelectorOptionB
```

**If any component in this chain doesn't pass these props, the tooltip will not work!**

## Design A vs Design B Differences

### Design A (FunctionalSPSelector)
- Uses Motion/Framer Motion for layout animations
- Selected profile moves to first position
- Ref structure: `motion.div > div[ref] > button`
- Extra delay: 500ms (for layout animation to complete)

### Design B (FunctionalSPSelectorOptionB)
- Uses scrollIntoView for navigation
- Profiles don't reorder, selected item scrolls into view
- Ref structure: `div[ref] > button`
- Extra delay: 0ms (no animations to wait for)

## Testing Checklist

When modifying the tooltip system, verify:

- [ ] Tooltip shows in Design A (Calendar view)
- [ ] Tooltip shows in Design A (All Posts view)
- [ ] Tooltip shows in Design B (Calendar view)
- [ ] Tooltip shows in Design B (All Posts view)
- [ ] Tooltip auto-dismisses after 3 seconds
- [ ] Tooltip positions correctly under the selected badge
- [ ] Both designs use `useSmartRedirectionTooltip` hook
- [ ] No duplicate tooltip logic exists in components

## Common Issues & Solutions

### Issue: Tooltip not showing
- **Check 1**: Are all props passed through the entire chain?
- **Check 2**: Is `firstProfileRef` correctly assigned to the selected profile?
- **Check 3**: Is the component using `useSmartRedirectionTooltip` hook?
- **Check 4**: Check browser console for errors

### Issue: Tooltip shows too early (during animation)
- **Solution**: Increase `extraDelay` in the component's hook call

### Issue: Tooltip positioned incorrectly
- **Solution**: Verify `firstProfileRef` is on the correct DOM element (not motion.div)

### Issue: Design A and B behaving differently
- **Solution**: Check both are using the same hook with appropriate `extraDelay` values

## Making Changes

### To modify tooltip timing:
✅ **CORRECT**: Update timing in `useSmartRedirectionTooltip.ts`
❌ **WRONG**: Add separate timing logic in components

### To add new tooltip features:
✅ **CORRECT**: Add to `useSmartRedirectionTooltip` hook and `SmartRedirectionTooltip` component
❌ **WRONG**: Duplicate features in both Design A and B

### To fix Design A or B specific issues:
✅ **CORRECT**: Use `extraDelay` parameter or ref structure adjustments
❌ **WRONG**: Create separate tooltip logic for that design

## Code Review Checklist

When reviewing PRs that touch tooltip code:

- [ ] Does it use `useSmartRedirectionTooltip` hook?
- [ ] Are changes made to the hook (not duplicated in components)?
- [ ] Are both Design A and B tested?
- [ ] Is the ref assignment pattern correct?
- [ ] Are all required props passed through the component chain?

---

**Last Updated**: 2026-03-05
**Maintained By**: Development Team
