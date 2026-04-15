import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow } from 'date-fns'
import type { AlertLevel, CategoryMeta, Platform, VideoCategory } from './types'

// ─── Tailwind ─────────────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Date helpers ─────────────────────────────────────────────────────────────

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'MMM d, yyyy')
}

export function formatRelativeDate(dateString: string): string {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true })
}

// ─── String helpers ───────────────────────────────────────────────────────────

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trimEnd() + '…'
}

// ─── Categories ───────────────────────────────────────────────────────────────

// Use complete Tailwind class strings (not interpolated) so JIT can detect them.
export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'osha-fails',
    label: 'OSHA Fails',
    description: 'Classic violations that made OSHA inspectors weep.',
    icon: 'AlertTriangle',
    badgeBg: 'bg-hazard-muted',
    badgeText: 'text-hazard-dark',
    borderColor: 'border-hazard',
  },
  {
    id: 'ppe-problems',
    label: 'PPE Problems',
    description: 'When personal protective equipment becomes personally optional.',
    icon: 'ShieldOff',
    badgeBg: 'bg-brand-100',
    badgeText: 'text-brand-700',
    borderColor: 'border-brand-400',
  },
  {
    id: 'ladder-logic',
    label: 'Ladder Logic Gone Wrong',
    description: 'A vertical journey with questionable decision-making.',
    icon: 'MoveUp',
    badgeBg: 'bg-accent-muted',
    badgeText: 'text-accent-dark',
    borderColor: 'border-accent',
  },
  {
    id: 'forklift-fails',
    label: 'Forklift Fails',
    description: 'Industrial vehicles doing things they were not designed to do.',
    icon: 'Truck',
    badgeBg: 'bg-info-muted',
    badgeText: 'text-info-dark',
    borderColor: 'border-info',
  },
  {
    id: 'hazcom-headaches',
    label: 'HazCom Headaches',
    description: 'Chemical labeling and storage situations that have us concerned.',
    icon: 'FlaskConical',
    badgeBg: 'bg-safe-muted',
    badgeText: 'text-safe-dark',
    borderColor: 'border-safe',
  },
  {
    id: 'training-moments',
    label: 'Training Moments',
    description: 'Content so educational it hurts. Sometimes literally.',
    icon: 'BookOpen',
    badgeBg: 'bg-info-muted',
    badgeText: 'text-info-dark',
    borderColor: 'border-info',
  },
  {
    id: 'compliance-updates',
    label: 'Compliance Updates',
    description: 'The regulatory changes that will keep your legal team awake.',
    icon: 'ClipboardList',
    badgeBg: 'bg-safe-muted',
    badgeText: 'text-safe-dark',
    borderColor: 'border-safe',
  },
  {
    id: 'industry-alerts',
    label: 'Industry Alerts',
    description: 'Heads up, hard hats on.',
    icon: 'Bell',
    badgeBg: 'bg-hazard-muted',
    badgeText: 'text-hazard-dark',
    borderColor: 'border-hazard',
  },
]

export function getCategoryMeta(id: VideoCategory): CategoryMeta {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0]
}

// ─── Platform ─────────────────────────────────────────────────────────────────

export const PLATFORM_LABELS: Record<Platform, string> = {
  youtube: 'YouTube',
  'youtube-shorts': 'YouTube Shorts',
  tiktok: 'TikTok',
  'instagram-reels': 'Instagram Reels',
  other: 'Video',
}

export function getPlatformLabel(platform: Platform): string {
  return PLATFORM_LABELS[platform] ?? 'Video'
}

// ─── Alert level ──────────────────────────────────────────────────────────────

export const ALERT_LEVEL_CONFIG: Record<
  AlertLevel,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  info: {
    label: 'Info',
    bg: 'bg-info-muted',
    text: 'text-info-dark',
    border: 'border-info',
    dot: 'bg-info',
  },
  low: {
    label: 'Low',
    bg: 'bg-safe-muted',
    text: 'text-safe-dark',
    border: 'border-safe',
    dot: 'bg-safe',
  },
  medium: {
    label: 'Medium',
    bg: 'bg-accent-muted',
    text: 'text-accent-dark',
    border: 'border-accent',
    dot: 'bg-accent',
  },
  high: {
    label: 'High',
    bg: 'bg-brand-100',
    text: 'text-brand-700',
    border: 'border-brand-400',
    dot: 'bg-brand-500',
  },
  critical: {
    label: 'Critical',
    bg: 'bg-hazard-muted',
    text: 'text-hazard-dark',
    border: 'border-hazard',
    dot: 'bg-hazard',
  },
}

export function getAlertConfig(level: AlertLevel) {
  return ALERT_LEVEL_CONFIG[level] ?? ALERT_LEVEL_CONFIG.info
}
