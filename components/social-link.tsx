"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type Platform = "github" | "twitter" | "discord" | "linkedin" | "email" | "leetcode";

interface GitHubData {
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

interface LeetCodeData {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  solved: { all: number; easy: number; medium: number; hard: number };
}

interface StaticProfile {
  name: string;
  handle: string;
  avatarUrl?: string;    // real platform avatar (if publicly available)
  avatarBg: string;      // gradient for avatar placeholder background
  avatarLabel: string;   // text shown in avatar placeholder
  bio: string;
  badge: string;
  badgeColor: string;
  banner: string;        // CSS background for the card banner
  href: string;
}

// ─── Static profile data ───────────────────────────────────────────────────────

const PROFILES: Record<Exclude<Platform, "github" | "leetcode">, StaticProfile> = {
  twitter: {
    name: "Piyush Kumar",
    handle: "@heypiyyu",
    avatarUrl: "https://unavatar.io/x/heypiyyu",
    avatarBg: "linear-gradient(135deg, #1a1a1a, #3a3a3a)",
    avatarLabel: "✿",
    bio: "Building things on the internet.",
    badge: "X / Twitter",
    badgeColor: "#e2e2e2",
    banner: "linear-gradient(135deg, #000000 0%, #001a2e 40%, #0066cc 100%)",
    href: "https://x.com/heypiyyu",
  },
  discord: {
    name: "heypiyyu",
    handle: "@heypiyyu",
    // no public avatar API — placeholder
    avatarBg: "linear-gradient(135deg, #404EED, #7289da)",
    avatarLabel: "D",
    bio: "Discord — DM me anytime.",
    badge: "Discord",
    badgeColor: "#5865F2",
    banner: "linear-gradient(135deg, #0a0014 0%, #2d0060 40%, #7c3aed 100%)",
    href: "https://discordapp.com/users/heypiyyu",
  },
  linkedin: {
    name: "Piyush Kumar",
    handle: "in/piyush446",
    // no public avatar API — placeholder
    avatarBg: "linear-gradient(135deg, #004182, #0A66C2)",
    avatarLabel: "in",
    bio: "Full Stack Engineer · Open to work.",
    badge: "LinkedIn",
    badgeColor: "#0A66C2",
    banner: "linear-gradient(135deg, #001428 0%, #003d7a 40%, #0ea5e9 100%)",
    href: "https://linkedin.com/in/piyush446",
  },
  email: {
    name: "Piyush Kumar",
    handle: "piyushkr446@gmail.com",
    // no pfp concept — placeholder
    avatarBg: "linear-gradient(135deg, #b31412, #EA4335)",
    avatarLabel: "@",
    bio: "Drop me a message anytime.",
    badge: "Email",
    badgeColor: "#EA4335",
    banner: "linear-gradient(135deg, #1a0010 0%, #7a0030 40%, #f0006e 100%)",
    href: "mailto:piyushkr446@gmail.com",
  },
};

// ─── Avatar with onError fallback to styled placeholder ──────────────────────

function SocialAvatar({
  src,
  alt,
  bg,
  label,
}: {
  src?: string;
  alt: string;
  bg: string;
  label: string;
}) {
  const [failedSrc, setFailedSrc] = useState(false);
  const [failedFallback, setFailedFallback] = useState(false);

  const currentSrc = !failedSrc && src ? src : !failedFallback ? "https://github.com/piyyu.png" : null;

  if (!currentSrc) {
    return (
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm select-none"
        style={{ background: bg }}
      >
        {label}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      width={56}
      height={56}
      className="w-14 h-14 rounded-full object-cover block"
      onError={() => {
        if (!failedSrc && src) {
          setFailedSrc(true);
        } else {
          setFailedFallback(true);
        }
      }}
    />
  );
}

// ─── Shared skeleton ──────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="w-72 rounded-xl overflow-hidden animate-pulse">
      <div className="h-20 bg-muted-dark" />
      <div className="px-4 pt-10 pb-4 space-y-3">
        <div className="space-y-1.5">
          <div className="h-3.5 w-32 bg-muted-dark rounded" />
          <div className="h-2.5 w-24 bg-muted-dark rounded" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2.5 w-full bg-muted-dark rounded" />
          <div className="h-2.5 w-3/4 bg-muted-dark rounded" />
        </div>
        <div className="flex gap-5 pt-3 border-t border-border">
          <div className="h-2.5 w-20 bg-muted-dark rounded" />
          <div className="h-2.5 w-16 bg-muted-dark rounded" />
          <div className="h-2.5 w-12 bg-muted-dark rounded" />
        </div>
      </div>
    </div>
  );
}

// ─── Base Twitter-style profile card ─────────────────────────────────────────

interface ProfileCardProps {
  banner: string;
  avatarEl: React.ReactNode;
  name: string;
  handle: string;
  bio?: string;
  stats?: { value: string | number; label: string }[];
  extra?: React.ReactNode;
  href: string;
  badge: string;
  badgeColor: string;
}

function ProfileCard({
  banner, avatarEl, name, handle, bio, stats, extra, href, badge, badgeColor,
}: ProfileCardProps) {
  return (
    <div className="w-72 rounded-2xl overflow-hidden">
      {/* Banner */}
      <div className="relative h-20" style={{ background: banner }}>
        {/* View button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 text-[11px] font-semibold px-3 py-1 rounded-full
                     bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-colors z-10"
        >
          View
        </a>

        {/* Avatar overlapping banner */}
        <div className="absolute -bottom-7 left-4 rounded-full ring-[3px] ring-background">
          {avatarEl}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-10 pb-4">
        {/* Platform badge */}
        <div className="flex justify-end -mt-1 mb-2">
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${badgeColor}22`, color: badgeColor }}
          >
            {badge}
          </span>
        </div>

        {/* Name & handle */}
        <p className="font-bold text-sm leading-snug">{name}</p>
        <p className="text-xs text-muted mt-0.5">{handle}</p>

        {/* Bio */}
        {bio && <p className="text-xs text-muted leading-relaxed mt-2">{bio}</p>}

        {/* Extra slot (pill badges etc.) */}
        {extra}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="flex gap-5 mt-3 pt-3 border-t border-border text-xs text-muted flex-wrap">
            {stats.map((s, i) => (
              <span key={i}>
                <strong className="text-foreground font-semibold">
                  {typeof s.value === "number" ? s.value.toLocaleString() : s.value}
                </strong>{" "}{s.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── GitHub Card (live data) ──────────────────────────────────────────────────

function GitHubCard() {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/piyyu")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <CardSkeleton />;

  return (
    <ProfileCard
      banner="linear-gradient(135deg, #001a0a 0%, #003d1f 40%, #00c851 100%)"
      avatarEl={
        <Image
          src={data.avatar_url}
          alt={data.name || data.login}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover block"
          unoptimized
        />
      }
      name={data.name || data.login}
      handle={`@${data.login}`}
      bio={data.bio ?? undefined}
      stats={[
        { value: data.followers, label: "followers" },
        { value: data.following, label: "following" },
        { value: data.public_repos, label: "repos" },
      ]}
      href="https://github.com/piyyu"
      badge="GitHub"
      badgeColor="#8b949e"
    />
  );
}

// ─── LeetCode Card (live data) ───────────────────────────────────────────────

function LeetCodeCard() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/social-preview/leetcode")
      .then((r) => r.json())
      .then((d) => (d.error ? setError(true) : setData(d)))
      .catch(() => setError(true));
  }, []);

  if (error)
    return (
      <div className="w-72 p-6 text-xs text-muted text-center">
        Could not load LeetCode data.
      </div>
    );

  if (!data) return <CardSkeleton />;

  return (
    <ProfileCard
      banner="linear-gradient(135deg, #1a0800 0%, #7a2e00 40%, #ff6a00 100%)"
      avatarEl={
        <SocialAvatar
          src={data.avatar}
          alt={data.name}
          bg="linear-gradient(135deg, #7a4000, #FFA116)"
          label="LC"
        />
      }
      name={data.name}
      handle={`@${data.username}`}
      extra={
        <div className="flex gap-1.5 mt-2.5">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">
            Easy {data.solved.easy}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">
            Med {data.solved.medium}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">
            Hard {data.solved.hard}
          </span>
        </div>
      }
      stats={[
        { value: data.solved.all, label: "solved" },
        { value: `#${data.ranking.toLocaleString()}`, label: "rank" },
      ]}
      href="https://leetcode.com/piyyu"
      badge="LeetCode"
      badgeColor="#FFA116"
    />
  );
}

// ─── Static Card ──────────────────────────────────────────────────────────────

function StaticCard({ profile }: { profile: StaticProfile }) {
  return (
    <ProfileCard
      banner={profile.banner}
      avatarEl={
        <SocialAvatar
          src={profile.avatarUrl}
          alt={profile.name}
          bg={profile.avatarBg}
          label={profile.avatarLabel}
        />
      }
      name={profile.name}
      handle={profile.handle}
      bio={profile.bio}
      href={profile.href}
      badge={profile.badge}
      badgeColor={profile.badgeColor}
    />
  );
}

// ─── SocialLink (exported) ────────────────────────────────────────────────────

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  platform: Platform;
  target?: string;
  rel?: string;
}

export function SocialLink({
  href,
  icon,
  platform,
  target,
  rel,
}: SocialLinkProps) {
  const [visible, setVisible] = useState(false);
  const [side, setSide] = useState<"above" | "below">("above");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(hideTimer.current);
    // Measure available space and pick side
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      // Card is ~340px tall; flip below if not enough room above
      setSide(rect.top < 340 ? "below" : "above");
    }
    setVisible(true);
  };

  const hide = () => {
    hideTimer.current = setTimeout(() => setVisible(false), 120);
  };

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      {/* The icon link */}
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className="text-muted/50 hover:text-foreground transition-colors block"
      >
        {icon}
      </a>

      {/* Hover card — pointer-events enabled so mouse can travel into it */}
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
        className={[
          "absolute left-1/2 -translate-x-1/2 z-50",
          "bg-background/80 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/5",
          "transition-all duration-300 ease-out",
          side === "above" ? "bottom-full mb-3 origin-bottom" : "top-full mt-3 origin-top",
          visible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : side === "above"
              ? "opacity-0 translate-y-1 scale-95 pointer-events-none"
              : "opacity-0 -translate-y-1 scale-95 pointer-events-none",
        ].join(" ")}
      >
        {/* Small arrow */}
        <span
          className={[
            "absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-background border-border rotate-45",
            side === "above"
              ? "border-b border-r -bottom-1.25"
              : "border-t border-l -top-1.25",
          ].join(" ")}
        />

        {platform === "github" ? (
          <GitHubCard />
        ) : platform === "leetcode" ? (
          <LeetCodeCard />
        ) : (
          <StaticCard profile={PROFILES[platform]} />
        )}
      </div>
    </div>
  );
}
