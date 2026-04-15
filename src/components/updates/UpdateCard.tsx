import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { getAlertConfig, formatDate, truncate } from '@/lib/utils'
import type { UpdateItem } from '@/lib/types'

const UPDATE_CATEGORY_LABELS: Record<UpdateItem['category'], string> = {
  'standard-change': 'Standard Change',
  'enforcement-update': 'Enforcement Update',
  'penalty-update': 'Penalty Update',
  'guidance-release': 'Guidance Release',
  'industry-alert': 'Industry Alert',
  'study-release': 'Study Release',
}

interface UpdateCardProps {
  update: UpdateItem
  featured?: boolean
}

export function UpdateCard({ update, featured = false }: UpdateCardProps) {
  const alertConfig = getAlertConfig(update.alertLevel)
  const categoryLabel = UPDATE_CATEGORY_LABELS[update.category] ?? update.category

  return (
    <Link
      href={`/updates/${update.slug}`}
      className={`group flex flex-col gap-3 rounded-xl border p-5 transition-shadow hover:shadow-md ${
        featured ? 'border-brand-200 bg-brand-50' : 'border-gray-200 bg-white'
      }`}
    >
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Alert level */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold ${alertConfig.bg} ${alertConfig.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${alertConfig.dot}`} />
          {alertConfig.label}
        </span>

        {/* Category */}
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">
          {categoryLabel}
        </span>

        {/* Date */}
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-400">
          <Calendar className="h-3 w-3" />
          {formatDate(update.publishedAt)}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-semibold leading-snug text-gray-900 transition-colors group-hover:text-brand-600 ${
          featured ? 'text-base' : 'text-sm'
        }`}
      >
        {update.title}
      </h3>

      {/* Summary */}
      <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
        {truncate(update.summary, 200)}
      </p>

      {/* Tags */}
      {update.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {update.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 text-xs font-semibold text-brand-600">
        Read full update <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  )
}
