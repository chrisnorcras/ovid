/**
 * Content Adapter Layer
 *
 * This module abstracts data access so that mock data can later be replaced
 * with real API calls (YouTube Data API, TikTok Research API, a CMS, etc.)
 * without changing any component code.
 *
 * All functions are async to be drop-in compatible with real async data sources.
 */

import type { ContentFilters, UpdateItem, VideoItem } from '../types'
import { mockVideos } from './mock-videos'
import { mockUpdates } from './mock-updates'

// ─── Video Queries ────────────────────────────────────────────────────────────

export async function getVideos(filters: ContentFilters = {}): Promise<VideoItem[]> {
  let videos = [...mockVideos]

  if (filters.category && filters.category !== 'all') {
    videos = videos.filter((v) => v.category === filters.category)
  }

  if (filters.platform && filters.platform !== 'all') {
    videos = videos.filter((v) => v.sourcePlatform === filters.platform)
  }

  if (filters.tag) {
    videos = videos.filter((v) =>
      v.tags.some((t) => t.toLowerCase().includes(filters.tag!.toLowerCase()))
    )
  }

  if (filters.search) {
    const q = filters.search.toLowerCase()
    videos = videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.summary.toLowerCase().includes(q) ||
        v.tags.some((t) => t.toLowerCase().includes(q)) ||
        v.complianceTakeaway.toLowerCase().includes(q)
    )
  }

  // Sorting
  switch (filters.sort) {
    case 'trending':
      videos.sort((a, b) => b.trendingScore - a.trendingScore)
      break
    case 'featured':
      videos.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
    case 'newest':
    default:
      videos.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
  }

  return videos
}

export async function getVideoBySlug(slug: string): Promise<VideoItem | null> {
  return mockVideos.find((v) => v.slug === slug) ?? null
}

export async function getFeaturedVideos(limit = 4): Promise<VideoItem[]> {
  return mockVideos
    .filter((v) => v.featured)
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit)
}

export async function getTrendingVideos(limit = 6): Promise<VideoItem[]> {
  return [...mockVideos]
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit)
}

export async function getRelatedVideos(video: VideoItem, limit = 3): Promise<VideoItem[]> {
  return mockVideos
    .filter((v) => v.id !== video.id && v.category === video.category)
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, limit)
}

// ─── Update Queries ───────────────────────────────────────────────────────────

export async function getUpdates(
  filters: Pick<ContentFilters, 'search' | 'sort'> & {
    alertLevel?: string
    category?: string
  } = {}
): Promise<UpdateItem[]> {
  let updates = [...mockUpdates]

  if (filters.alertLevel && filters.alertLevel !== 'all') {
    updates = updates.filter((u) => u.alertLevel === filters.alertLevel)
  }

  if (filters.category && filters.category !== 'all') {
    updates = updates.filter((u) => u.category === filters.category)
  }

  if (filters.search) {
    const q = filters.search.toLowerCase()
    updates = updates.filter(
      (u) =>
        u.title.toLowerCase().includes(q) ||
        u.summary.toLowerCase().includes(q) ||
        u.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  // Most updates sorted newest first
  updates.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return updates
}

export async function getUpdateBySlug(slug: string): Promise<UpdateItem | null> {
  return mockUpdates.find((u) => u.slug === slug) ?? null
}

export async function getFeaturedUpdates(limit = 3): Promise<UpdateItem[]> {
  return [...mockUpdates]
    .filter((u) => u.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export async function getLatestUpdates(limit = 4): Promise<UpdateItem[]> {
  return [...mockUpdates]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function getContentStats() {
  return {
    videoCount: mockVideos.length,
    updateCount: mockUpdates.length,
    categoryCount: 8,
  }
}
