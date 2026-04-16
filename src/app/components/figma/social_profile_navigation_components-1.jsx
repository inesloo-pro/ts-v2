import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Instagram, Youtube, Music2, X } from "lucide-react";

/**
 * Social Profile Navigation (atom → molecule → organism)
 * - Atom: SocialProfileCard
 * - Atom: GroupCard
 * - Organism: SocialProfileNav (sticky group item + horizontally scrollable profiles)
 *
 * Notes
 * - Styling is intentionally neutral (greys) to match the provided mocks.
 * - The scrollable row supports mouse/trackpad, touch, and keyboard.
 */

// ---------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------

function cn(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

type Platform = "instagram" | "x" | "tiktok" | "youtube";

function PlatformIcon({ platform }: { platform: Platform }) {
  const cls = "h-3.5 w-3.5";
  switch (platform) {
    case "instagram":
      return <Instagram className={cls} aria-hidden />;
    case "x":
      return <X className={cls} aria-hidden />;
    case "tiktok":
      // Lucide doesn't ship a TikTok mark; use a music glyph as a neutral substitute.
      return <Music2 className={cls} aria-hidden />;
    case "youtube":
      return <Youtube className={cls} aria-hidden />;
    default:
      return null;
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

// ---------------------------------------------------------------------------
// Atom: SocialProfileCard
// ---------------------------------------------------------------------------

type SocialProfileCardProps = {
  id: string;
  initials: string;
  platform: Platform;
  /** Default vs Active (selected) */
  active?: boolean;
  /** Optional visual state for hover/pressed */
  disabled?: boolean;
  onClick?: (id: string) => void;
  ariaLabel?: string;
};

export function SocialProfileCard({
  id,
  initials,
  platform,
  active,
  disabled,
  onClick,
  ariaLabel,
}: SocialProfileCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick?.(id)}
      aria-label={ariaLabel ?? `Social profile ${initials} on ${platform}`}
      aria-pressed={!!active}
      className={cn(
        "relative inline-flex select-none items-center justify-center",
        "h-12 w-12 rounded-full",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
        // Base ring
        active ? "ring-2 ring-neutral-600" : "ring-2 ring-neutral-200"
      )}
    >
      {/* Inner disc */}
      <div
        className={cn(
          "h-full w-full rounded-full bg-neutral-200",
          "flex items-center justify-center",
          "text-sm font-medium tracking-wide text-neutral-600"
        )}
      >
        {initials}
      </div>

      {/* Platform badge */}
      <div
        className={cn(
          "absolute -bottom-1 -right-1",
          "h-6 w-6 rounded-lg",
          "bg-white shadow-sm",
          "flex items-center justify-center",
          "ring-1 ring-neutral-200"
        )}
        aria-hidden
      >
        <PlatformIcon platform={platform} />
      </div>

      {/* Active underline (as in the mock where the active item has a small baseline) */}
      {active && (
        <motion.div
          layoutId="sp-active-underline"
          className={cn(
            "absolute -bottom-3",
            "h-0.5 w-10 rounded-full",
            "bg-neutral-600"
          )}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          aria-hidden
        />
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Atom: GroupCard
// ---------------------------------------------------------------------------

type GroupCardProps = {
  id: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (id: string) => void;
  ariaLabel?: string;
};

export function GroupCard({
  id,
  label,
  active,
  disabled,
  onClick,
  ariaLabel,
}: GroupCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick?.(id)}
      aria-label={ariaLabel ?? `Group ${label}`}
      aria-pressed={!!active}
      className={cn(
        "relative inline-flex select-none items-center justify-center",
        "h-12 w-12 rounded-md",
        "bg-neutral-200 text-sm font-medium tracking-wide text-neutral-600",
        "ring-1",
        active ? "ring-neutral-600" : "ring-neutral-300",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
      )}
    >
      {label}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Organism: SocialProfileNav
// ---------------------------------------------------------------------------

type SocialProfile = {
  id: string;
  initials: string;
  platform: Platform;
};

type SocialProfileNavProps = {
  profiles: SocialProfile[];
  activeProfileId?: string;
  onActiveProfileChange?: (id: string) => void;

  /** Sticky group selector (e.g., ALL) */
  groupId?: string;
  groupLabel?: string;
  groupActive?: boolean;
  onGroupClick?: (id: string) => void;

  /** Optional left dropdown control (the chevron pill in the mock) */
  onOpenGroups?: () => void;

  /** Infinite scroll hook (triggered when near the end) */
  onRequestMore?: () => void;

  /**
   * When true, vertical mousewheel gestures over the scroller are translated to horizontal scroll.
   * Defaults to true (matches the requested behavior).
   */
  wheelToHorizontal?: boolean;
};

export function SocialProfileNav({
  profiles,
  activeProfileId,
  onActiveProfileChange,
  groupId = "all",
  groupLabel = "ALL",
  groupActive,
  onGroupClick,
  onOpenGroups,
  onRequestMore,
  wheelToHorizontal = true,
}: SocialProfileNavProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Keyboard navigation between items
  const ids = useMemo(() => profiles.map((p) => p.id), [profiles]);

  // Infinite scroll hook (triggered when near the end)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !onRequestMore) return;

    const onScroll = () => {
      const remaining = el.scrollWidth - el.scrollLeft - el.clientWidth;
      if (remaining < 240) onRequestMore();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onRequestMore]);

  // Mousewheel → horizontal scroll (no Shift needed)
  useEffect(() => {
    if (!wheelToHorizontal) return;

    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Keep native horizontal trackpad gestures working.
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      // Only hijack when there's horizontal overflow.
      if (el.scrollWidth <= el.clientWidth) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [wheelToHorizontal]);

  const scrollItemIntoView = (id: string) => {
    const root = scrollerRef.current;
    if (!root) return;
    const target = root.querySelector<HTMLElement>(`[data-spid="${id}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!ids.length) return;

    const currentIndex = activeProfileId ? ids.indexOf(activeProfileId) : -1;
    const key = e.key;

    if (key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = clamp((currentIndex === -1 ? 0 : currentIndex) + 1, 0, ids.length - 1);
      const next = ids[nextIndex] ?? ids[0];
      onActiveProfileChange?.(next);
      scrollItemIntoView(next);
    }

    if (key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = clamp((currentIndex === -1 ? 0 : currentIndex) - 1, 0, ids.length - 1);
      const prev = ids[prevIndex] ?? ids[0];
      onActiveProfileChange?.(prev);
      scrollItemIntoView(prev);
    }

    if (key === "Home") {
      e.preventDefault();
      const first = ids[0];
      if (!first) return;
      onActiveProfileChange?.(first);
      scrollItemIntoView(first);
    }

    if (key === "End") {
      e.preventDefault();
      const last = ids[ids.length - 1];
      if (!last) return;
      onActiveProfileChange?.(last);
      scrollItemIntoView(last);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {/* Left dropdown control (optional) */}
        <button
          type="button"
          onClick={onOpenGroups}
          className={cn(
            "h-10 w-10 rounded-full",
            "bg-neutral-100 ring-1 ring-neutral-200",
            "flex items-center justify-center",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          )}
          aria-label="Open groups"
        >
          <ChevronDown className="h-4 w-4 text-neutral-600" aria-hidden />
        </button>

        {/* Sticky group item */}
        <div className="shrink-0">
          <GroupCard
            id={groupId}
            label={groupLabel}
            active={groupActive}
            onClick={onGroupClick}
            ariaLabel={`Select group ${groupLabel}`}
          />
        </div>

        {/* Scrollable profiles */}
        <div
          ref={scrollerRef}
          role="tablist"
          aria-label="Social profiles"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className={cn(
            "flex-1",
            "overflow-x-auto",
            "py-3",
            "scroll-smooth",
            // Visual container similar to the mock
            "rounded-full ring-1 ring-neutral-200 bg-neutral-50",
            // Hide scrollbars (best-effort)
            "[scrollbar-width:none] [-ms-overflow-style:none]",
            "[&::-webkit-scrollbar]:hidden"
          )}
        >
          <div className="flex items-center gap-4 px-4">
            {profiles.map((p) => (
              <div key={p.id} data-spid={p.id} className="shrink-0">
                <SocialProfileCard
                  id={p.id}
                  initials={p.initials}
                  platform={p.platform}
                  active={p.id === activeProfileId}
                  onClick={(id) => {
                    onActiveProfileChange?.(id);
                    scrollItemIntoView(id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Demo / playground
// ---------------------------------------------------------------------------

const seedProfiles: SocialProfile[] = [
  { id: "aa", initials: "AA", platform: "instagram" },
  { id: "ab", initials: "AB", platform: "instagram" },
  { id: "ac", initials: "AC", platform: "instagram" },
  { id: "ad", initials: "AD", platform: "instagram" },
  { id: "be", initials: "BE", platform: "instagram" },
  { id: "de", initials: "DE", platform: "x" },
  { id: "gz-y", initials: "GZ", platform: "youtube" },
  { id: "gz-x", initials: "GZ", platform: "x" },
  { id: "kl", initials: "KL", platform: "tiktok" },
  { id: "la", initials: "LA", platform: "x" },
];

// 30+ items so the horizontal scroller is immediately meaningful.
const demoProfiles: SocialProfile[] = [
  ...seedProfiles,
  ...Array.from({ length: 26 }).map((_, i) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const a = letters[(i * 2) % 26];
    const b = letters[(i * 2 + 13) % 26];
    const initials = `${a}${b}`;
    const platform = (["instagram", "x", "tiktok", "youtube"][i % 4] as Platform) ?? "instagram";
    return { id: `p-${i + 1}`, initials, platform };
  }),
];

// ---------------------------------------------------------------------------
// Lightweight self-tests (no test runner required)
// ---------------------------------------------------------------------------

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(`Self-test failed: ${message}`);
}

function runSelfTests() {
  // Test 1: demo dataset has 30+ profiles
  assert(demoProfiles.length >= 30, "demoProfiles should contain at least 30 profiles");

  // Test 2: ids are unique
  const ids = demoProfiles.map((p) => p.id);
  const unique = new Set(ids);
  assert(unique.size === ids.length, "demoProfiles ids should be unique");

  // Test 3: platforms are in the allowed set
  const allowed: Platform[] = ["instagram", "x", "tiktok", "youtube"];
  assert(demoProfiles.every((p) => allowed.includes(p.platform)), "all platforms should be valid");
}

if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
  runSelfTests();
}

export default function SocialProfileNavDemo() {
  const [activeId, setActiveId] = useState<string>("ac");
  const [profiles, setProfiles] = useState<SocialProfile[]>(demoProfiles);

  const requestMore = () => {
    // Demo: append a few items. Replace with your real pagination.
    if (profiles.length > 72) return;
    const base = profiles.length;
    const extra: SocialProfile[] = Array.from({ length: 6 }).map((_, i) => {
      const n = base + i + 1;
      const initials =
        String.fromCharCode(64 + ((n % 26) || 26)) + String.fromCharCode(65 + (n % 26));
      const platform: Platform = (["instagram", "x", "tiktok", "youtube"][n % 4] as Platform) ?? "instagram";
      return { id: `p-${n}`, initials, platform };
    });
    setProfiles((p) => [...p, ...extra]);
  };

  return (
    <div className="p-6">
      <div className="max-w-5xl">
        <SocialProfileNav
          profiles={profiles}
          activeProfileId={activeId}
          onActiveProfileChange={setActiveId}
          groupId="all"
          groupLabel="ALL"
          groupActive
          onGroupClick={() => {
            // Example: clicking group could reset active selection
            setActiveId(profiles[0]?.id ?? "");
          }}
          onOpenGroups={() => {
            // Placeholder for group dropdown
            // eslint-disable-next-line no-alert
            alert("Open groups dropdown");
          }}
          onRequestMore={requestMore}
          wheelToHorizontal
        />

        <div className="mt-6 text-sm text-neutral-600">
          <div>Keyboard: focus the scroll row and use ← → Home End.</div>
          <div>
            Active profile: <span className="font-medium text-neutral-800">{activeId}</span>
          </div>
        </div>

        {/* Atom previews */}
        <div className="mt-10 flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <SocialProfileCard id="atom-default" initials="AC" platform="instagram" />
            <div className="text-xs text-neutral-600">Default</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SocialProfileCard id="atom-active" initials="AC" platform="instagram" active />
            <div className="text-xs text-neutral-600">Active</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GroupCard id="group" label="BA" />
            <div className="text-xs text-neutral-600">Group card</div>
          </div>
        </div>
      </div>
    </div>
  );
}
