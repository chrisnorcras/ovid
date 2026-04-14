'use client'

import { Suspense } from 'react'
import { FilterBar } from './FilterBar'
import { VideoCard } from './VideoCard'
import type { VideoItem } from '@/lib/types'

interface BrowsePageClientProps {
  videos: VideoItem[]
  total: number
}

export function BrowsePageClient({ videos, total }: BrowsePageClientProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Filters — needs Suspense because it reads searchParams via useSearchParams */}
      <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-gray-100" />}>
        <FilterBar />
      </Suspense>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        {total === 0 ? 'No results' : `Showing ${total} clip${total !== 1 ? 's' : ''}`}
      </p>

      {/* Grid */}
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
