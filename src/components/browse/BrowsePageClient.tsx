'use client'

import { Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { FilterBar } from './FilterBar'
import { VideoCard } from './VideoCard'
import type { VideoItem } from '@/lib/types'

interface BrowsePageClientProps {
  allVideos: VideoItem[]
}

function BrowseInner({ allVideos }: BrowsePageClientProps) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? 'all'
  const platform = searchParams.get('platform') ?? 'all'
  const sort = searchParams.get('sort') ?? 'newest'
  const q = searchParams.get('q') ?? ''

  const videos = useMemo(() => {
    let result = [...allVideos]
    if (category !== 'all') {
      result = result.filter((v) => v.category === category)
    }
    if (platform !== 'all') {
      result = result.filter((v) => v.sourcePlatform === platform)
    }
    if (q) {
      const query = q.toLowerCase()
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(query) ||
          v.summary.toLowerCase().includes(query) ||
          v.tags.some((t) => t.toLowerCase().includes(query)) ||
          v.complianceTakeaway.toLowerCase().includes(query),
      )
    }
    switch (sort) {
      case 'trending':
        result.sort((a, b) => b.trendingScore - a.trendingScore)
        break
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      default:
        result.sort(
          (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
        )
    }
    return result
  }, [allVideos, category, platform, sort, q])

  return (
    <div className="flex flex-col gap-6">
      <FilterBar />
      <p className="text-sm text-gray-500">
        {videos.length === 0
          ? 'No results'
          : `Showing ${videos.length} clip${videos.length !== 1 ? 's' : ''}`}
      </p>
      {videos.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

export function BrowsePageClient({ allVideos }: BrowsePageClientProps) {
  return (
    <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-gray-100" />}>
      <BrowseInner allVideos={allVideos} />
    </Suspense>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-20 text-center">
      <span className="text-4xl" aria-hidden>
        🦺
      </span>
      <h3 className="mt-4 text-base font-semibold text-gray-900">No results found</h3>
      <p className="mt-1.5 max-w-xs text-sm text-gray-500">
        Try adjusting your filters or search terms. The violations are out there — we promise.
      </p>
    </div>
  )
}
