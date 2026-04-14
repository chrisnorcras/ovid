import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getVideos } from '@/lib/content/adapter'
import { BrowsePageClient } from '@/components/browse/BrowsePageClient'
import type { ContentFilters, Platform, VideoCategory } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Browse Safety Fails',
  description:
    'Browse our full library of workplace safety fails, OSHA violations, and compliance nightmares. Filter by category, platform, or search by topic.',
}

interface BrowsePageProps {
  searchParams: Promise<{
    category?: string
    platform?: string
    sort?: string
    q?: string
  }>
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams

  const filters: ContentFilters = {
    category: (params.category as VideoCategory | 'all') ?? 'all',
    platform: (params.platform as Platform | 'all') ?? 'all',
    sort: (params.sort as ContentFilters['sort']) ?? 'newest',
    search: params.q ?? '',
  }

  const videos = await getVideos(filters)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Library</p>
        <h1 className="mt-1 text-3xl font-black text-gray-900 sm:text-4xl">Browse the Fails</h1>
        <p className="mt-2 text-gray-500">
          Short-form safety content with compliance context. Filter by category, platform, or
          search for specific topics and standards.
        </p>
      </div>

      {/* Client component handles filtering UI + display */}
      <Suspense fallback={<BrowseLoading />}>
        <BrowsePageClient videos={videos} total={videos.length} />
      </Suspense>
    </div>
  )
}

function BrowseLoading() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-[4/5] animate-pulse rounded-xl bg-gray-100" />
      ))}
    </div>
  )
}
