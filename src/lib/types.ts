// ─── Platform ─────────────────────────────────────────────────────────────────

export type Platform = 'youtube' | 'youtube-shorts' | 'tiktok' | 'instagram-reels' | 'other'

// ─── Alert Level ──────────────────────────────────────────────────────────────

export type AlertLevel = 'info' | 'low' | 'medium' | 'high' | 'critical'

// ─── Categories ───────────────────────────────────────────────────────────────

export type VideoCategory =
  | 'osha-fails'
  | 'ppe-problems'
  | 'ladder-logic'
  | 'forklift-fails'
  | 'hazcom-headaches'
  | 'training-moments'
  | 'compliance-updates'
  | 'industry-alerts'

export type UpdateCategory =
  | 'standard-change'
  | 'enforcement-update'
  | 'penalty-update'
  | 'guidance-release'
  | 'industry-alert'
  | 'study-release'

// ─── Content Models ───────────────────────────────────────────────────────────

export interface VideoItem {
  id: string
  slug: string
  title: string
  sourcePlatform: Platform
  sourceUrl: string
  /** Full iframe embed URL — available for YouTube/YouTube Shorts */
  embedUrl?: string
  thumbnailUrl: string
  publishedAt: string
  category: VideoCategory
  tags: string[]
  summary: string
  whatWentWrong: string
  complianceTakeaway: string
  /** OSHA standard or reference, e.g. "29 CFR 1910.178" */
  oshaReference?: string
  featured: boolean
  trendingScore: number
}

export interface UpdateItem {
  id: string
  slug: string
  title: string
  summary: string
  body: string
  publishedAt: string
  category: UpdateCategory
  tags: string[]
  featured: boolean
  alertLevel: AlertLevel
  sourceLinks: Array<{ label: string; url: string }>
}

// ─── UI Metadata ──────────────────────────────────────────────────────────────

export interface CategoryMeta {
  id: VideoCategory
  label: string
  description: string
  /** Lucide icon name */
  icon: string
  badgeBg: string
  badgeText: string
  borderColor: string
}

// ─── Filter / Query ───────────────────────────────────────────────────────────

export interface ContentFilters {
  category?: VideoCategory | 'all'
  platform?: Platform | 'all'
  tag?: string
  search?: string
  sort?: 'newest' | 'trending' | 'featured'
  page?: number
}
