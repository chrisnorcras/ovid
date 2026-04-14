import type { Metadata } from 'next'
import { getVideos } from '@/lib/content/adapter'
import { BrowsePageClient } from '@/components/browse/BrowsePageClient'

export const metadata: Metadata = {
  title: 'Browse Safety Fails',
  description:
    'Browse our full library of workplace safety fails, OSHA violations, and compliance nightmares. Filter by category, platform, or search by topic.',
}

export default async function BrowsePage() {
  const allVideos = await getVideos()

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

      {/* Client component handles all filtering and display */}
      <BrowsePageClient allVideos={allVideos} />
    </div>
  )
}
