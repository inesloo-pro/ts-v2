# Specifications — Stage 01 · Design A · Sort by Last Used

> **Scope:** Stage 01 only. Pin and Favorites modes are out of scope (pinOrFavoriteMode = `none`). SP Navbar = Design A. Navbar sort = Last Used.

---

## Table of contents

1. [User scenarios & cohorts](#1-user-scenarios--cohorts)
2. [SP Navbar — structure & sort logic](#2-sp-navbar--structure--sort-logic)
3. [SP Navbar — item animations](#3-sp-navbar--item-animations)
4. [Unsaved Selection state](#4-unsaved-selection-state)
5. [Group dropdown — opening behavior](#5-group-dropdown--opening-behavior)
6. [Clicking a group item](#6-clicking-a-group-item)
7. [Clicking "All profiles"](#7-clicking-all-profiles)
8. [Save Selection as a Group button](#8-save-selection-as-a-group-button)
9. [Unified search](#9-unified-search)

---

## 1. User scenarios & cohorts

### Scenario A — User who has no groups yet but CAN create them

**Example cohorts:** Trial (4 SPs, groups allowed), or any plan that has `canCreateGroups = true` but `groups.length === 0`.

**Navbar initial state:**
- Because no groups exist, `currentGroup` is initialized to `''` (empty string), which is normalized to `unsaved` internally.
- All SPs are pre-selected in an **Unsaved Selection** state (`isUnsavedSelection = true`).
- The group badge in the navbar shows `US` (Unsaved Selection indicator).
- The small `+` save-badge is visible on the group thumbnail, inviting the user to save.

**Group dropdown left panel:**
- Groups list is empty.
- The empty state shown is **"Create your first group"**: a gray circle illustration, the italic serif heading "Create your first group", a short description ("Create your first group to organize social profiles, collaborate with others and build campaigns."), and a `Create a new group` button (bordered, full-width) which triggers the Create Group modal.

---

### Scenario B — User who has groups AND can create more

**Example cohorts:** Excel (220 SPs, 110 groups), Trial once a group has been created.

**Navbar initial state:**
- `currentGroup` is set to the first available group (e.g., `campaign`).
- `profileIds` is populated with that group's profile IDs.
- `selectedItem = 'group'` — the group badge is focused/selected in the navbar.
- Smart Redirection fires on mount: `selectedItem` is immediately changed to the first SP in the sorted profile list.

**Group dropdown left panel:**
- Groups are listed A-Z (Stage 01, no pin mode).
- Each group row shows: group thumbnail (avatar or 2-letter badge), group name (Semibold 12px), profile count (Medium 12px), and a radio button (on/off) on the right.
- The currently active group shows a filled `RadioOnIcon`; all others show `RadioOffIcon`.
- "All profiles" is always the first item, separated from the group list by a bottom border.

---

### Scenario C — User who CANNOT create groups (upsell)

**Example cohort:** Launch (5 SPs, `canCreateGroups = false`).

**Navbar initial state:**
- Launch has no pre-existing groups (`launchGroups = []`).
- Same as Scenario A: `currentGroup = ''`, `isUnsavedSelection = true`, all SPs pre-selected, `US` badge shown.
- The `+` save-badge is visible but clicking it (or "Save selection as a group") opens an **upsell modal** — the Create Group modal is blocked behind the plan wall.

**Group dropdown left panel:**
- Groups list is empty.
- The empty state shown is **"Unlock the power of groups"**: same gray circle illustration, the italic serif heading "Unlock the power of groups", a short description ("Use groups to organize social profiles, collaborate with others and build campaigns."), and an `Upgrade my plan` button which fires `onOpenCreateGroupModal` (the upsell flow, not the actual group-creation modal).
- There is no "Create a new group" button; the only CTA is the upgrade prompt.

---

## 2. SP Navbar — structure & sort logic

### Visual structure (Design A)

The SP Selector navbar is embedded inside `FunctionalPageTitle`, rendered as a horizontal bar inside the page header row.

```
[ ▾ arrow ] [ GROUP BADGE | group name ] [ ─── ] [ SP₁ ] [ SP₂ ] [ SP₃ ] … [ N+ ]
```

| Element | Description |
|---|---|
| **▾ arrow button** | Left-most element, 22 × 24 px rounded-left pill, `bg-[#e0e0e0]`. Clicking it opens the group dropdown. |
| **Group badge** | 44 × 44 px square inside the selector bar. Shows the group's 2-letter abbreviation or avatar image. If `isUnsavedSelection`, background is `#f0f0f0` and badge text is `US`. |
| **Vertical divider** | A 44 px rotated `<line>` in `#C0C0C0`, acting as a visual separator between the group area and the profile area. |
| **SP avatars** | Circular avatars, 42 × 42 px. Each has a platform badge (bottom-right corner) and a white 1px ring. Selected SP gets `ring-2 ring-[#0089FF]`. |
| **Overflow button** | Shown if profiles exceed the dynamically calculated `maxVisibleProfiles`. Gray circle showing `N+`. Clicking opens a popover with the remaining SPs and a search input. |

### "Last Used" sort logic (Design A, Stage 01)

Sorting is handled by `sortProfiles()` with `navbarSortMode = 'lastUsed'` and `spSelectorOption = 'A'`.

1. **First render of a group** (no last-used history yet): profiles are sorted A-Z.
2. **After the user selects an SP**: that SP is moved to position 0 in the `lastUsedOrder` array for `currentGroup`. All subsequent renders of that group lead with the most recently selected SP, followed by the others in their previous last-used order, with any brand-new profiles appended A-Z.
3. **Selected SP is always visually first**: even before `lastUsedOrder` is recorded, once `selectedItem` is set to a specific profile ID, that profile is moved to index 0 in the sorted array (the `selectedProfile` bubble-to-front logic in `sortProfiles`).
4. **Unsaved Selection group** (`currentGroup = 'unsaved'`): last-used order is initialized immediately with the current `profileIds` insertion order to prevent a flash on first render.

### Dynamic width calculation

`maxVisibleProfiles` is computed by a `ResizeObserver` watching the parent container. The formula reserves space for the arrow button, group wrapper padding, group item, gap, and (if overflow is needed) the overflow button. It ensures at least 1 profile is always visible, and never more profiles than exist.

---

## 3. SP Navbar — item animations

SP items are wrapped in `<motion.div>` from **Motion** (`motion/react`), inside an `<AnimatePresence mode="popLayout">` container.

### Enter animation
```
initial:  { opacity: 0, scale: 0.8 }
animate:  { opacity: 1, scale: 1 }
```
Duration: `opacity` and `scale` both resolve in **0.3 s**.

### Exit animation
```
exit: { opacity: 0, scale: 0.8 }
```
Duration: **0.3 s**.

### Layout animation (reordering)
Each `<motion.div>` has the `layout` prop. When the order of SPs changes (e.g., after selecting a new SP which moves to position 0), all items smoothly slide to their new position.

```
transition.layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
```
This is the standard Material Design "emphasized easing" curve. The layout shift takes **0.5 s**.

### Combined effect
When a new SP is selected and jumps to first position:
- The newly selected SP enters with fade-in + scale-up (0.3 s).
- All other SP items slide left or right to their new positions (0.5 s).
- When an SP is removed from a group, it fades out + scales down (0.3 s) before the others reposition.

The `popLayout` mode ensures exiting elements are removed from the layout flow immediately, allowing the enter/reorder animations to use the final positions rather than accounting for the outgoing element's space.

---

## 4. Unsaved Selection state

### Definition

An **Unsaved Selection** is a custom set of SPs that the user has manually assembled but has not yet saved as a named group. It is ephemeral — it exists only in the current session and is lost on page refresh unless saved.

### How this state is created

**Trigger A — App initializes with no groups (Scenarios A & C):**
- `currentGroup` is set to `''`, normalized to `unsaved`.
- All SPs are pre-selected (`profileIds = allSocialProfiles.map(p => p.id)`).
- `isUnsavedSelection = true` from the start.

**Trigger B — User manually checks/unchecks SPs in the right panel (while `viewingGroup === 'all'`):**
1. User opens the group dropdown → "All profiles" is visible in the left panel.
2. User clicks "All profiles" → right panel switches to selectable mode with no SPs pre-checked (Stage 01 behavior).
3. User checks one or more SPs → `toggleProfile()` is called.
4. The Smart Group Detection algorithm runs: if the selected set exactly matches any existing group's profile IDs (same profiles, same count), the matching group becomes `activeGroup` and `onGroupChange` fires. This is **not** an Unsaved Selection.
5. If no existing group matches the selection → `onUnsavedSelection(profileIds)` fires → App sets `currentGroup = 'unsaved'`, `groupName = 'Unsaved Selection'`, `isUnsavedSelection = true`.

**Trigger C — User clicks "Select all" or "Unselect all" in the right panel header:**
- Same Smart Group Detection logic applies.
- "Unselect all" always leaves the **first** profile in `filteredProfiles` checked (minimum 1 SP rule).

### Visual appearance of the Unsaved Selection in the navbar

| Element | Normal group | Unsaved Selection |
|---|---|---|
| Group badge background | `bg-[#e0e0e0]` (dark gray) | `bg-[#f0f0f0]` (lighter gray) |
| Badge text | 2-letter group abbreviation | `US` |
| Save `+` badge | Hidden | Visible — dark circle `bg-[#606060]` with a `+` icon, positioned at bottom-right of the group thumbnail (offset: `left-[34px] top-[27px]`) |
| SP items shown | Group's saved profiles | The user's current hand-picked selection |

The `+` save-badge is only shown when `isUnsavedSelection = true` AND the selection does not exceed 50 SPs (the group size limit in Stage 01, `limitTo50SPsPerGroup` guard).

Clicking the `+` badge calls `onSaveSelection()` → opens the Create Group modal.

---

## 5. Group dropdown — opening behavior

### How the dropdown opens

The dropdown (`GroupSelectionModal`) is a `position: fixed` overlay, positioned 8 px below the SP selector bar using `selectorRef.getBoundingClientRect()`. It opens when:
- The **▾ arrow button** is clicked (left side of the SP selector).
- The **group badge button** is clicked (only if not in `stage02` unsaved-selection flow).

It closes when:
- The user clicks outside the modal (`mousedown` outside `modalRef`).
- The user presses `Escape`.
- The user selects a group (closes automatically after `onGroupChange` or `onUnsavedSelection` fires, but only if the parent explicitly calls `onClose` — in this implementation the modal stays open until the user closes it or clicks outside).

### Layout on open

The dropdown is a two-panel layout:

```
┌─────────────────────────────────────────────────────────┐
│  🔍  Start typing ...                             [×]   │  ← Unified search header (always visible)
├──────────────────────────┬──────────────────────────────┤
│  Manage profiles & groups│  [Select all] / [Unselect All]│  ← Left & right panel headers (32px)
│  ─────────────────────── │  ──────────────────────────── │
│  All profiles            │                               │
│  N profiles          [→] │   (right panel content)       │
│  ─────────────────────── │                               │
│  Group A              ◎  │                               │
│  Group B              ○  │                               │
│  …                       │                               │
│                          │                               │
│  (320px wide)            │  (320px wide)                 │
│                          │                               │
│  h: 364px + 32px header  │  h: 364px + 32px header       │
└──────────────────────────┴──────────────────────────────┘
```

Total dropdown width: **640 px** (320 px left + 320 px right).
Total dropdown height: **396 px** (32 px header + 364 px scrollable content per panel) + the unified search header at the top (44 px approx).

### Focus on open

The **unified search input** is auto-focused on mount via a `useEffect` that calls `leftSearchInputRef.current.focus()` with an empty dependency array (fires once). The cursor is immediately placed in the search field — the user can start typing immediately without clicking.

### Which element is active / selected on open

In Stage 01, `activeGroup` is initialized from `currentGroup` (the group currently displayed in the navbar). The corresponding group row in the left panel shows `RadioOnIcon` (filled). All other rows show `RadioOffIcon` (outline).

The **right panel** reflects the `viewingGroup` (which group's profiles are being shown). On open, `viewingGroup = activeGroup`. Because the user is viewing a saved group (not "All profiles"), `canFilter = false`, meaning:
- Checkboxes are **not shown** next to profiles.
- The right panel header shows the group name (left) and an "Edit group" button (right).
- Profiles are non-interactive (clicking a profile does nothing in the context of selection — in Stage 01 the click does nothing, as `handleProfileClick` requires `canFilter = false` AND `onProfileFocus` to be set).
- Background color of right panel is `bg-[#f0f0f0]` (not white, indicating read-only/group view).

---

## 6. Clicking a group item

### What happens internally

`handleGroupChange(group.id)` is called. It:

1. Sets `viewingGroup = group.id`.
2. Sets `activeGroup = group.id`.
3. Clears `leftSearchMode` and `leftSearchQuery` (exits any active search).
4. Resets `duplicateGroupWarned = false`.
5. Sets `selectedProfiles = new Set()` (clears any prior SP selection).
6. Sets `isSelectionMode = false`.
7. Calls `onGroupChange(groupId, groupName, profileIds)` — the parent (`App.tsx`) immediately:
   - Sets `currentGroup = groupId`.
   - Sets `groupName = group.name`.
   - Sets `profileIds` to the group's saved profile IDs.
   - Sets `isUnsavedSelection = false`.
   - Sets `selectedItem = 'group'` in the navbar.

### Impact on the SP Navbar

- The group badge updates immediately: the 2-letter abbreviation (or avatar image) changes to the new group's badge.
- `isUnsavedSelection` becomes `false` → badge background returns to `bg-[#e0e0e0]`, `US` text disappears, `+` save-badge disappears.
- `profilesInGroup` in the navbar is replaced with the new group's SP list.
- The SP items animate in/out using `AnimatePresence` (fade + scale, 0.3 s; layout shift, 0.5 s).
- `selectedItem = 'group'` → the group badge gets its active border (`border-[#606060]`), and no SP is highlighted.
- Sort resets to Last Used order for the new group (starts at A-Z if no last-used history exists for this group).

### Impact on the right panel

- `viewingGroup ≠ 'all'` → `canFilter = false`.
- Background switches to `bg-[#f0f0f0]`.
- Header shows the group name on the left and "Edit group" on the right.
- Profiles displayed are the group's saved profiles, rendered as a read-only list (no checkboxes).
- "Select all / Unselect all" disappears from the header.
- The "Save selection as a group" button disappears (it only shows when `canFilter = true` and `selectedProfiles.size > 1`).

---

## 7. Clicking "All profiles"

### What happens internally (Stage 01 specific)

`handleGroupChange('all')` is called. Because `groupSelectionStage === 'stage01'`:

1. `viewingGroup = 'all'`.
2. `selectedProfiles = new Set()` — **no SPs are pre-checked**. This is the key Stage 01 distinction from Stage 02 (which would auto-select all SPs).
3. `isSelectionMode = false`.
4. `leftSearchQuery` is cleared.
5. `activeGroup` is **NOT** changed at this point — it keeps whatever value it had before (e.g., the last saved group). This is intentional: switching to "All profiles" view in Stage 01 doesn't commit a selection change to the navbar.
6. `onGroupChange` is **NOT** called (only called for saved groups). The navbar is therefore not updated.

### Impact on the SP Navbar — no immediate change

Because `onGroupChange` is not called and `onUnsavedSelection` is not called (nothing is selected yet), the navbar remains exactly as it was:
- Same group badge, same group name, same SP items.
- `selectedItem` is unchanged.
- `isUnsavedSelection` is unchanged.

The navbar only updates once the user **starts creating a selection** (checks at least one SP in the right panel).

### Impact on the right panel

- `viewingGroup = 'all'` → `canFilter = true`.
- Background switches to `bg-white`.
- Header shows "Select all" on the left (no "Unselect all" yet, since nothing is checked).
- All SPs from `allSocialProfiles` are listed.
- Each SP row shows a checkbox (unchecked) on the right.
- Profiles are sorted A-Z (no last-used history in "All profiles" view unless previously set).

### What triggers the navbar update from "All profiles"

Once the user checks their first SP:
- `toggleProfile(id)` is called.
- Smart Group Detection runs. If the single-SP selection matches no group → `onUnsavedSelection([id])` fires.
- Navbar updates: `currentGroup = 'unsaved'`, badge becomes `US`, `isUnsavedSelection = true`.

From this point, every additional check/uncheck re-runs Smart Group Detection and either resolves to a matching saved group or maintains the Unsaved Selection state.

---

## 8. Save Selection as a Group button

### Visibility conditions

The button (`bg-[#505050]`, full-width, pinned to the bottom of the right panel) appears only when **all** of the following are true:

| Condition | Value |
|---|---|
| `groupSelectionStage` is set | Not `undefined` |
| `canFilter` is `true` | i.e., `viewingGroup === 'all'` |
| `selectedProfiles.size > 1` | More than 1 SP checked |
| `rightSearchMode` is `false` | Right panel search is not active |

In Stage 01, when `selectedProfiles.size === 0` or `1`, the button is hidden.

### The 50-profile limit (Stage 01 only)

When `selectedProfiles.size > 50`:
- The button is replaced by a **disabled state**: `bg-[#e0e0e0]`, text color `#a0a0a0`, cursor `not-allowed`.
- Label: **"Groups are limited to 50 social profiles"**.
- The button is non-interactive (no `onClick`).

When `selectedProfiles.size` drops back to ≤ 50:
- The active button reappears immediately.

This limit only applies to Stage 01. In Stage 02 and Stage 03, there is no 50-profile cap.

### Normal active state

- Background: `bg-[#505050]`, text: white, Semibold 12px.
- Label: **"Save selection as a group"**.
- On hover: background shifts to `bg-[#606060]`.
- Clicking calls `handleSaveSelection()`.

### Duplicate group detection & "Group already exists, continue?" warning

**How duplicate detection works:**

`checkDuplicateGroup()` compares the current `selectedProfiles` set (as a sorted array) against every existing group's profile IDs (also sorted). If any group has the **exact same set** of profiles (same count, same IDs), it returns `true`.

**Two-step click flow:**

1. **First click — duplicate found:**
   - `duplicateGroupWarned` becomes `true`.
   - The button label changes to: **"Group already exists, continue ?"**.
   - The button remains active (same dark background).
   - No modal is opened yet.

2. **Second click (or first click if no duplicate):**
   - `onSaveSelection()` is called → opens the Create Group modal.
   - `duplicateGroupWarned` resets to `false`.

**When the warning resets automatically:**
- Any change to `selectedProfiles` (check, uncheck, select all, unselect all, or group change) resets `duplicateGroupWarned = false` and returns the label to "Save selection as a group".

**Edge case:** If the user changes their selection after the warning appears but the new selection still matches a group, the check runs again on the next click.

---

## 9. Unified search

### What it is

The unified search is a single `<input>` field pinned to the top of the entire dropdown (above both panels). It is always visible regardless of which group is selected or which panel is active.

It serves a **dual-panel search**: typing filters both the group list (left panel) and the profile list (right panel) simultaneously, searching all profiles regardless of which group is currently viewed.

### Auto-focus on open

The input is auto-focused when the dropdown mounts (`useEffect` with `[]` deps). The user can type immediately.

### What happens when the user starts typing (first character)

The `useEffect` watching `leftSearchQuery` fires. Since `leftSearchQuery` is now non-empty and `isGlobalSearchActive` is `false`:

1. **State snapshot is taken:** `savedViewingGroup`, `savedSelectedProfiles`, and `savedActiveGroup` are stored.
2. **Global search mode activates:** `isGlobalSearchActive = true`.
3. **`viewingGroup` is forced to `'all'`** — the right panel now shows all SPs from the entire profile pool, not just the current group.
4. **`selectedProfiles` is cleared** (`new Set()`).

The left panel filters groups by name. The right panel filters all SPs by name, handle, or platform matching the query.

### Exit strategy — clearing the query

The user can exit the search in two ways:

**A — Click the `×` button** (appears in the search header once `leftSearchQuery` is non-empty):
- Calls `exitLeftSearch()`: clears `leftSearchMode` and `leftSearchQuery`.
- The `useEffect` detects `leftSearchQuery = ''` and `isGlobalSearchActive = true`.
- If `selectedProfiles.size === 0` (user didn't check anything): **full state restore** — `viewingGroup`, `selectedProfiles`, and `activeGroup` are all restored from the saved snapshot.
- If `selectedProfiles.size > 0` (user checked SPs during the search): state is **not** restored. The search is cleared but the user keeps their selection in "All profiles" view, potentially in Unsaved Selection state.

**B — Press `Escape` key:**
- Calls `exitLeftSearch()` → same logic as above.

### What happens if the user starts checking SPs while searching

1. User types a query → global search activates → right panel shows all matching profiles.
2. User checks one or more profiles → `toggleProfile()` is called.
3. Smart Group Detection runs on each toggle.
4. If a match is found → that group becomes `activeGroup`, `onGroupChange` fires, navbar updates.
5. If no match → `onUnsavedSelection` fires, navbar enters Unsaved Selection state.
6. The search query remains active in the input field.

### What happens when the user then exits the search (after checking SPs)

- `leftSearchQuery` is cleared.
- `isGlobalSearchActive` remains `true` (because `selectedProfiles.size > 0`).
- `viewingGroup` stays as `'all'`.
- The right panel now shows **all** profiles (unfiltered) with the user's current selection preserved.
- The group list on the left returns to its full unfiltered state.
- The selection and navbar state remain as they were before exit.

### What happens when the user selects a group (while a search is active)

Clicking a group row calls `handleGroupChange(group.id)`, which:
1. Sets `viewingGroup = group.id`.
2. Clears `leftSearchQuery` and `leftSearchMode`.
3. Fires `onGroupChange` with the group's data.

The global search is aborted. Because `leftSearchQuery` becomes empty and `isGlobalSearchActive` was true: the restore logic checks `selectedProfiles.size`. Since `handleGroupChange` also resets `selectedProfiles = new Set()`, the size is `0` → **full state restore is attempted but immediately overwritten** by the group change (because `handleGroupChange` sets `viewingGroup` to the newly selected group, not the saved snapshot).

In practice: selecting a group while searching always commits to that group and clears the search, regardless of what the saved snapshot was.

### Empty states in search

**Left panel — no groups match:**
- Shows italic serif text "No groups found" + helper text "Try a different search term".

**Right panel — no profiles match:**
- Shows italic serif text "No social profiles found" + helper text "Try a different search term".

Both panels display their empty state independently — it is possible to have groups matching but no profiles matching (or vice versa) for the same query.
