# Tooltip Architecture Compliance Test

This file serves as a manual checklist to verify the tooltip architecture is maintained.

## Manual Verification Steps

### 1. Check Hook Usage

Run this search command to verify both components import the hook:

```bash
grep -n "useSmartRedirectionTooltip" src/app/components/FunctionalSPSelector.tsx
grep -n "useSmartRedirectionTooltip" src/app/components/FunctionalSPSelectorOptionB.tsx
```

**Expected**: Both files should have the import and usage.

### 2. Check No Duplicate Logic

Search for any standalone tooltip state in the components:

```bash
grep -n "useState.*showTooltip" src/app/components/FunctionalSPSelector.tsx
grep -n "useState.*showTooltip" src/app/components/FunctionalSPSelectorOptionB.tsx
```

**Expected**: No results (tooltip state should only be in the hook).

### 3. Check Ref Pattern

Verify ref assignment pattern:

```bash
grep -n "ref={isSelected ? firstProfileRef" src/app/components/FunctionalSPSelector.tsx
grep -n "ref={isSelected ? firstProfileRef" src/app/components/FunctionalSPSelectorOptionB.tsx
```

**Expected**: Both should have this pattern.

### 4. Check Props Flow

Verify all required props are defined in interfaces:

```bash
grep -n "pendingRedirection\|isLoading\|firstProfileRef\|onRedirectionComplete" src/app/components/FunctionalSPSelector.tsx | head -20
grep -n "pendingRedirection\|isLoading\|firstProfileRef\|onRedirectionComplete" src/app/components/FunctionalSPSelectorOptionB.tsx | head -20
```

**Expected**: All four props should appear in both interface definitions.

### 5. Visual Verification

1. Start the app
2. Toggle to Design A
3. Switch from Calendar view to All Posts view
4. Verify tooltip appears under the selected profile badge
5. Toggle to Design B
6. Switch from Calendar view to All Posts view
7. Verify tooltip appears under the selected profile badge

## Architecture Invariants

These must ALWAYS be true:

- ✅ Both `FunctionalSPSelector` and `FunctionalSPSelectorOptionB` import and use `useSmartRedirectionTooltip`
- ✅ No `useState` for `showTooltip` exists in either component
- ✅ No `useEffect` for tooltip timing exists in either component
- ✅ Both components pass all 4 required props to the hook
- ✅ `SmartRedirectionTooltip` is rendered conditionally based on `showTooltip` from the hook
- ✅ Ref is assigned with pattern: `ref={isSelected ? firstProfileRef : undefined}`

## Breaking Changes Detection

If any of these patterns appear in the component files, the architecture has been violated:

❌ `setShowTooltip` (outside of the hook)
❌ `setTimeout` for tooltip timing (outside of the hook)
❌ Duplicate tooltip rendering logic
❌ Missing props in component interfaces
❌ Ref assigned to motion.div directly (Design A specific)

## Last Verified

- Date: 2026-03-05
- Verified By: Initial Implementation
- Status: ✅ All checks passing
