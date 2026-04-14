import Link from 'next/link'
import { AlertTriangle, ArrowRight } from 'lucide-react'
import { getAlertConfig, formatDate } from '@/lib/utils'
import type { UpdateItem } from '@/lib/types'

interface FeaturedAlertProps {
  update: UpdateItem
}

export function FeaturedAlert({ update }: FeaturedAlertProps) {
  const alertConfig = getAlertConfig(update.alertLevel)
  const isHighSeverity = update.alertLevel === 'high' || update.alertLevel === 'critical'

  return (
    <Link
      href={`/updates/${update.slug}`}
      className={`group relative overflow-hidden rounded-2xl border-2 p-6 transition-shadow hover:shadow-lg ${alertConfig.border} ${alertConfig.bg}`}
    >
      {/* Background decoration */}
      {isHighSeverity && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-hazard/10"
        />
      )}

      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${alertConfig.bg}`}
        >
          <AlertTriangle className={`h-6 w-6 ${alertConfig.text}`} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Badge + date */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${alertConfig.bg} ${alertConfig.text}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${alertConfig.dot}`} />
              {alertConfig.label} Priority
            </span>
            <span className="text-xs text-gray-500">{formatDate(update.publishedAt)}</span>
          </div>

          {/* Title */}
          <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 group-hover:text-brand-700 transition-colors sm:text-lg">
            {update.title}
          </h3>

          {/* Summary */}
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {update.summary}
          </p>

          <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand-600">
            Read full update <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
