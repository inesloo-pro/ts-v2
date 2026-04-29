# SP Selector — User Stories
**Scope:** Stage 01 · No Pin/Favorite · Navbar Design A · Sort by Last Used

---

## User Profiles

| Profile | Groups | Can create groups |
|---|---|---|
| **No-group creator** | 0 | ✅ |
| **Group owner** | ≥ 1 | ✅ |
| **Free plan** | 0 | ❌ (upsell) |

---

## US-01 · SP Navbar — Structure & Item Roles

The SP Navbar is a persistent bar that always reflects the currently active group or selection.

- It contains two types of entities: the **group entity** (leftmost) and **SP entities** (one per social profile in the active group/selection).
- Both entity types are independently focusable/selectable.
- The group entity and SP entities are mutually exclusive in focus: only one item can be focused at a time.
- When a new group is loaded, the group entity is automatically focused (not the first SP).
- When the user clicks an SP entity in the navbar, that SP becomes focused and the group entity loses focus.
- When the user clicks the group entity in the navbar, the group entity is focused.
- If there are more SPs than can fit, the excess SPs are hidden behind an overflow control. Clicking it reveals the hidden SPs in a popover with its own search. Selecting an SP from the popover focuses it in the navbar.
- **Sort by Last Used:** within a given group, the SP most recently focused by the user appears first, followed by the rest in A-Z order. This order is maintained per group throughout the session.

---

## US-02 · SP Navbar — SP Item Animations

SP items in the navbar animate when the active group or selection changes.

- When SPs are added to the navbar (new group loaded, or SP checked): each new SP animates in.
- When SPs are removed from the navbar (group switched, or SP unchecked): each removed SP animates out.
- When the set of SPs changes partially (e.g. switch from group A to group B with some shared SPs): shared SPs smoothly reorder to their new position; removed SPs exit; added SPs enter.
- Each SP is tracked by its unique profile ID so it retains its animation identity across changes.

---

## US-03 · Unsaved Selection

An Unsaved Selection is a temporary SP set that has not yet been saved as a named group.

**How to create one (Stage 01):**
1. Open the group dropdown.
2. Click "All profiles" → the right panel shows all SPs with checkboxes; the SP navbar is not updated yet.
3. Check at least two SPs.
4. After each toggle, **Smart Detection** runs: if the current checked set exactly matches any existing saved group (same IDs, same count), the navbar snaps to that group and the Unsaved Selection is discarded. If no match is found, an Unsaved Selection is created/updated.

**Effect on the SP Navbar:**
- The group entity switches to an "Unsaved Selection" identity (distinct from any named group).
- The SP entities update to reflect the currently checked set.
- A save affordance appears on the group entity (only when ≤ 50 SPs are checked). Clicking it opens the Create Group Modal directly.

**Invariant:** the last checked SP cannot be unchecked. The selection can never reach zero SPs.

**"Select all" / "Unselect all" (right panel header):**
- "Select all" checks all currently visible (filtered) profiles, then runs Smart Detection.
- "Unselect all" reduces the selection to the first profile only (never zero), then creates an Unsaved Selection.

---

## US-04 · Group Dropdown — Opening & Initial State

**On open:**
- The unified search input is auto-focused.
- The **left panel** shows: an "All profiles" entry at the top, then the list of saved groups sorted A-Z.
- The **right panel** shows the SP list of the group that is currently active in the navbar (read-only).
- The currently active group has its radio state set to ON. All other groups have their radio OFF.
- The currently viewed group (highlighted in the left panel) is the same as the active group on open.

**Left panel by user profile:**
- *No-group creator:* an empty state with a CTA to create the first group.
- *Group owner:* full group list.
- *Free plan:* an empty state with an "Upgrade my plan" CTA (no group creation afforded).

**"All profiles" entry (Stage 01):**
- Has a navigation indicator (not a radio), meaning it opens a view rather than selecting a group entity.
- Clicking it switches the right panel to the full SP list with checkboxes, without touching the SP navbar.

---

## US-05 · Group Dropdown — Clicking a Group Item

1. The clicked group becomes the active group: its radio turns ON; the previously active group's radio turns OFF.
2. The right panel switches to that group's SP list in **read-only mode** (no checkboxes). The header shows the group name and an "Edit group" action.
3. The SP navbar immediately updates: group entity changes to the new group, SP entities change to the new group's SPs.
4. The focused entity in the navbar is the **group entity** (not an SP).
5. Any active search query is cleared.
6. Any previously checked SPs (from an All Profiles session) are discarded.

**Clicking an SP in the right panel (read-only mode):**
- The dropdown closes.
- That specific SP becomes the focused entity in the navbar.
- The group entity remains active (the group does not change).

---

## US-06 · Group Dropdown — Clicking "All Profiles" (Stage 01)

"All profiles" is an entry point to build a selection — it is not itself a selectable group.

**On click:**
- The "All profiles" entry is highlighted in the left panel.
- The right panel switches to the full SP list with checkboxes. All checkboxes start **unchecked**, regardless of what was previously active.
- The SP navbar is **not updated**. It keeps the previous group or Unsaved Selection until the user checks at least one SP.
- No radio state changes anywhere (no group has been selected).

**The SP navbar only updates once the user:**
- Checks at least one SP → Unsaved Selection forms and the navbar reflects the checked set.
- Or if the checked set matches an existing group → Smart Detection activates that group on the navbar.

---

## US-07 · Save Selection — Button Visibility & States (Stage 01)

The "Save selection as a group" button appears at the bottom of the right panel when:
- Currently viewing "All profiles" (`canFilter = true`), AND
- At least **2** SPs are checked, AND
- The right panel is not in local search mode.

**Two states:**

| Condition | Behaviour |
|---|---|
| ≤ 50 SPs checked | Button is active. Clicking it triggers the duplicate check (see US-08), then opens the Create Group Modal. |
| > 50 SPs checked | Button is disabled. Label communicates the 50-profile limit. The save affordance on the navbar group entity (the `+` button) is also hidden. |

**Create Group Modal (for users who can create groups):**
- Fields: group name (required, auto-focused) + optional avatar upload.
- The confirm action is disabled until the name field is non-empty.
- On confirm: the group is created, added to the group list, the SP navbar updates to the new group, and the dropdown closes.
- On cancel or dismiss: no changes, the dropdown stays open.

**Upsell Modal (Free plan users):**
- Shown instead of the Create Group Modal whenever a group-creation action is triggered.
- Contains an "Upgrade my plan" action only (no creation form).

---

## US-08 · Save Selection — Duplicate Group Warning

A duplicate is defined as: the currently checked SP set has exactly the same profile IDs as an already saved group.

**Flow:**
1. User clicks the save button while a duplicate exists.
2. **First click:** the button label changes to "Group already exists, continue?" The button remains active and clickable.
3. **Second click:** the duplicate warning is bypassed and the Create Group Modal opens normally.

**Warning is reset automatically when:**
- The user toggles any SP (selection changes).
- The user navigates to a different group in the left panel.

---

## US-09 · Unified Search — Filtering & Global Search Mode

The unified search field filters both panels simultaneously.

**Filtering rules:**
- Left panel groups: filtered by group name (case-insensitive substring).
- "All profiles" entry: hidden unless the query is a substring of "all profiles".
- Right panel SPs: filtered by profile name, handle, or platform (case-insensitive substring).

**Global Search mode (activated on first keystroke):**
- The current `viewingGroup`, `activeGroup`, and `selectedProfiles` are saved internally.
- The right panel immediately switches to All Profiles view.
- All checkboxes are cleared (the saved `selectedProfiles` is preserved in memory, not in the UI).
- The user can now search across all groups and all SPs simultaneously, and check SPs to build a new selection.

**Empty states:**
- Left panel: "No groups found" if no groups match the query.
- Right panel: "No social profiles found" if no SPs match the query.

---

## US-10 · Unified Search — Exit Strategies

| Trigger | SPs checked during this search session? | Outcome |
|---|---|---|
| Click × | No | Query cleared → saved state restored (previous group + previous selection) |
| Click × | Yes | Query cleared → stays in All Profiles view with the checked SPs as Unsaved Selection |
| Press Escape | No | Same as × with nothing checked |
| Press Escape | Yes | Same as × with SPs checked |
| Backspace to empty | No | Same as × with nothing checked |
| Backspace to empty | Yes | Same as × with SPs checked |
| Click a group item | — | Query cleared → switches to that group; saved state is discarded |

**Core rule:** clearing the query only restores the pre-search state if the user made no new selection during the search. If at least one SP was checked, the search exit commits that selection as an Unsaved Selection instead of restoring.
