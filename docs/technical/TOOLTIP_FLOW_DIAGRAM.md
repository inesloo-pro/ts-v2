# Smart Redirection Tooltip - Flow Diagram

## Component Hierarchy & Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                           App.tsx                               │
│                                                                 │
│  State:                                                         │
│    - pendingRedirection: boolean                                │
│    - isLoading: boolean                                         │
│    - firstProfileRef: RefObject<HTMLDivElement>                 │
│                                                                 │
│  Callbacks:                                                     │
│    - handleRedirectionComplete()                                │
└────────────┬────────────────────────────┬───────────────────────┘
             │                            │
             │ Calendar View              │ All Posts View
             ▼                            ▼
┌────────────────────────┐   ┌────────────────────────────────────┐
│  FunctionalPageTitle   │   │       AllPostsView                 │
│                        │   │                                    │
│  Receives & passes:    │   │  Receives & passes:                │
│   - pendingRedirection │   │   - pendingRedirection             │
│   - isLoading          │   │   - isLoading                      │
│   - firstProfileRef    │   │   - firstProfileRef                │
│   - onRedirectionC...  │   │   - onRedirectionComplete          │
└────────┬───────────────┘   └────────┬───────────────────────────┘
         │                            │
         │ Both render one of:        │
         ▼                            ▼
┌─────────────────────────────────────────────────────────────────┐
│          Design A                    Design B                   │
│  ┌──────────────────────┐   ┌──────────────────────────────┐   │
│  │ FunctionalSPSelector │   │ FunctionalSPSelectorOptionB  │   │
│  │                      │   │                              │   │
│  │ Receives:            │   │ Receives:                    │   │
│  │  - pendingRedir...   │   │  - pendingRedirection        │   │
│  │  - isLoading         │   │  - isLoading                 │   │
│  │  - firstProfileRef   │   │  - firstProfileRef           │   │
│  │  - onRedirect...     │   │  - onRedirectionComplete     │   │
│  │                      │   │                              │   │
│  │ Uses Hook:           │   │ Uses Hook:                   │   │
│  │  extraDelay: 500ms   │   │  extraDelay: 0ms             │   │
│  └──────────┬───────────┘   └──────────┬───────────────────┘   │
│             │                          │                        │
│             └──────────┬───────────────┘                        │
│                        ▼                                        │
│          ┌──────────────────────────────────┐                  │
│          │  useSmartRedirectionTooltip      │                  │
│          │  (Shared Hook - Single Source)   │                  │
│          │                                   │                  │
│          │  Input:                           │                  │
│          │   - pendingRedirection            │                  │
│          │   - isLoading                     │                  │
│          │   - firstProfileRef               │                  │
│          │   - onRedirectionComplete         │                  │
│          │   - extraDelay (0ms or 500ms)     │                  │
│          │                                   │                  │
│          │  Logic:                           │                  │
│          │   1. Wait for !isLoading          │                  │
│          │   2. Wait for pendingRedirection  │                  │
│          │   3. Delay: 150ms + extraDelay    │                  │
│          │   4. Check ref is set             │                  │
│          │   5. Set showTooltip = true       │                  │
│          │                                   │                  │
│          │  Returns:                         │                  │
│          │   - showTooltip: boolean          │                  │
│          │   - handleTooltipDismiss()        │                  │
│          └──────────┬────────────────────────┘                  │
│                     │                                           │
│                     ▼                                           │
│          ┌──────────────────────────────────┐                  │
│          │  SmartRedirectionTooltip         │                  │
│          │  (UI Component - Stateless)      │                  │
│          │                                   │                  │
│          │  Props:                           │                  │
│          │   - anchorRef (from parent)       │                  │
│          │   - onDismiss (from hook)         │                  │
│          │                                   │                  │
│          │  Renders:                         │                  │
│          │   - Positioned tooltip            │                  │
│          │   - "Switched to this profile..." │                  │
│          │   - Auto-dismiss after 3s         │                  │
│          └───────────────────────────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

## Ref Assignment Pattern

### Design A (with Motion/Framer Motion)

```
┌─────────────────────────────────────┐
│ motion.div (animated)               │
│  ├─ key={profile.id}                │
│  ├─ layout (causes reordering)      │
│  └─ initial/animate/exit            │
│      │                               │
│      └─ div ← REF GOES HERE         │ ◄── Tooltip anchors here
│          │                           │
│          └─ button                   │
│              └─ Profile Badge        │
└─────────────────────────────────────┘

Why? motion.div doesn't forward refs reliably.
Delay: 500ms extra for layout animation to complete.
```

### Design B (no animations)

```
┌─────────────────────────────────────┐
│ div ← REF GOES HERE                 │ ◄── Tooltip anchors here
│  ├─ key={profile.id}                │
│  └─ button                           │
│      └─ Profile Badge                │
└─────────────────────────────────────┘

Why? Simple structure, no animation interference.
Delay: 0ms extra (base 150ms only).
```

## Timing Diagram

```
User Action: Select Group in "All Posts" view
│
├─ Smart Redirection Triggered
│   ├─ Switch to "All Profiles" context
│   ├─ Select first profile
│   ├─ setPendingRedirection(true)
│   └─ setIsLoading(true)
│
├─ Page Transition (1500ms)
│   ├─ Loading overlay visible
│   └─ Content switching
│
├─ setIsLoading(false)
│
├─ Design A Path:                   Design B Path:
│   ├─ Profile moves to position 1  ├─ Profile scrolls into view
│   ├─ Layout animation: 500ms      ├─ Scroll animation: ~100ms
│   ├─ Wait 150ms (base)            ├─ Wait 150ms (base)
│   ├─ Wait 500ms (extra)           ├─ Wait 0ms (extra)
│   ├─ Total: 650ms                 ├─ Total: 150ms
│   └─ Tooltip appears               └─ Tooltip appears
│
└─ Auto-dismiss after 3000ms
```

## Critical Decision Points

### Q: Where should the ref be assigned?
**A**: On a stable, non-animated wrapper element (regular `<div>`)

### Q: When should the tooltip show?
**A**: After loading completes + animations finish + base delay

### Q: Where should tooltip state live?
**A**: In the shared hook ONLY (never duplicated in components)

### Q: How to handle timing differences?
**A**: Use `extraDelay` parameter in the hook

## Error Scenarios

### Scenario: Tooltip doesn't show

```
Check 1: Are props passed?
   App → FunctionalPageTitle/AllPostsView → SP Selector
   
Check 2: Is ref set?
   Look for: ref={isSelected ? firstProfileRef : undefined}
   
Check 3: Is timing correct?
   Design A needs 500ms extra, Design B needs 0ms
   
Check 4: Is pendingRedirection true?
   Only shows when smart redirection occurs
```

### Scenario: Tooltip shows at wrong time

```
Issue: Shows during animation
   → Increase extraDelay
   
Issue: Shows too late
   → Decrease extraDelay
   
Issue: Shows before element is ready
   → Check ref is on stable element, not motion.div
```

## Maintenance Guidelines

### ✅ DO:
- Use `useSmartRedirectionTooltip` hook
- Set appropriate `extraDelay` per design
- Assign ref to stable wrapper element
- Pass all 4 props through the chain

### ❌ DON'T:
- Create tooltip state in components
- Duplicate timing logic
- Assign ref to motion.div
- Skip props in the chain

---

**Reference**: See `/TOOLTIP_ARCHITECTURE.md` for detailed rules
