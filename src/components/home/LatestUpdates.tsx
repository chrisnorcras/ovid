import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAlertConfig, formatDate } from '@/lib/utils'
import { SectionHeader } from './FeaturedVideos'
import type { UpdateItem } from '@/lib/types'

interface LatestUpdatesProps {
  updates: UpdateItem[]
}

export function LatestUpdates({ updates }: LatestUpdatesProps) {
  if (updates.length === 0) return null

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Compliance"
          title="What's Changed Lately"
          description="Regulatory updates that actually affect what happens on the floor. No fluff."
          href="/updates"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {updates.map((update) => (
            <UpdatePreviewCard key={update.id} update={update} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all compliance updates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function UpdatePreviewCard({ update }: { update: UpdateItem }) {
  const alertConfig = getAlertConfig(update.alertLevel)
  const isHighAlert = update.alertLevel === 'high' || update.alertLevel === 'critical'

  return (
    <Link
      href={`/updates/${update.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      {/* Alert badge + date */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${alertConfig.bg} ${alertConfig.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${alertConfig.dot}`} />
          {alertConfig.label} Alert
        </span>
        <span className="text-xs text-gray-400">{formatDate(update.publishedAt)}</span>
      </div>

      {/* Title */}
      <h3
        className={`text-sm font-semibold leading-snug text-gray-900 group-hover:text-brand-600 transition-colors ${
          isHighAlert ? 'text-base' : ''
        }`}
      >
        {update.title}
      </h3>

      {/* Summary */}
      <p className="text-sm leading-relaxed text-gray-500 line-clamp-2">
        {update.summary}
      </p>

      <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-brand-600">
        Read update <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  )
}
