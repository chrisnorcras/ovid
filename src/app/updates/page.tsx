import type { Metadata } from 'next'
import { getUpdates, getFeaturedUpdates } from '@/lib/content/adapter'
import { UpdateCard } from '@/components/updates/UpdateCard'
import { FeaturedAlert } from '@/components/updates/FeaturedAlert'

export const metadata: Metadata = {
  title: 'Compliance Updates',
  description:
    'Latest OSHA standard changes, penalty updates, enforcement guidance, and industry alerts. Plain-English summaries of regulatory changes that affect your workplace.',
}

export default async function UpdatesPage() {
  const [allUpdates, featuredUpdates] = await Promise.all([
    getUpdates(),
    getFeaturedUpdates(2),
  ])

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
          Regulatory
        </p>
        <h1 className="mt-1 text-3xl font-black text-gray-900 sm:text-4xl">
          Compliance Updates
        </h1>
        <p className="mt-2 text-gray-500">
          OSHA standard changes, enforcement guidance, penalty updates, and industry alerts —
          translated into plain English.
        </p>
      </div>

      {/* Featured alerts */}
      {featuredUpdates.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
            Featured Alerts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredUpdates.map((u) => (
              <FeaturedAlert key={u.id} update={u} />
            ))}
          </div>
        </div>
      )}

      {/* All updates */}
      <div>
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          All Updates
        </h2>

        {allUpdates.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {allUpdates.map((u) => (
              <UpdateCard key={u.id} update={u} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-20 text-center">
      <span className="text-4xl" aria-hidden>
        📋
      </span>
      <h3 className="mt-4 text-base font-semibold text-gray-900">No updates found</h3>
      <p className="mt-1.5 text-sm text-gray-500">
        Try adjusting your filters. OSHA is always busy — something will match.
      </p>
    </div>
  )
}
