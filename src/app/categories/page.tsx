import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AlertTriangle,
  ShieldOff,
  MoveUp,
  Truck,
  FlaskConical,
  BookOpen,
  ClipboardList,
  Bell,
} from 'lucide-react'
import { CATEGORIES } from '@/lib/utils'
import { getVideos } from '@/lib/content/adapter'
import { Badge } from '@/components/ui/Badge'
import type { CategoryMeta } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Safety Fail Categories',
  description:
    'Browse workplace safety content by category: OSHA Fails, Forklift Fails, PPE Problems, HazCom Headaches, and more.',
}

const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  ShieldOff,
  MoveUp,
  Truck,
  FlaskConical,
  BookOpen,
  ClipboardList,
  Bell,
}

export default async function CategoriesPage() {
  // Get video counts per category
  const allVideos = await getVideos()
  const countsByCategory = allVideos.reduce<Record<string, number>>((acc, v) => {
    acc[v.category] = (acc[v.category] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Directory</p>
        <h1 className="mt-1 text-3xl font-black text-gray-900 sm:text-4xl">Pick Your Hazard</h1>
        <p className="mt-2 text-gray-500">
          Eight categories of workplace safety content. Every one of them represents a real OSHA
          standard someone, somewhere, decided was optional.
        </p>
      </div>

      {/* Category grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {CATEGORIES.map((cat) => {
          const Icon = iconMap[cat.icon] ?? AlertTriangle
          const count = countsByCategory[cat.id] ?? 0

          return <CategoryDetailCard key={cat.id} category={cat} videoCount={count} Icon={Icon} />
        })}
      </div>
    </div>
  )
}

function CategoryDetailCard({
  category,
  videoCount,
  Icon,
}: {
  category: CategoryMeta
  videoCount: number
  Icon: React.ElementType
}) {
  return (
    <Link
      href={`/browse?category=${category.id}`}
      className={`group flex gap-5 rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg ${category.badgeBg} ${category.borderColor}`}
    >
      {/* Icon */}
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/60`}>
        <Icon className={`h-6 w-6 ${category.badgeText}`} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className={`text-base font-bold ${category.badgeText}`}>{category.label}</h2>
          <Badge className="shrink-0 bg-white/70 text-[11px] text-gray-600">
            {videoCount} {videoCount === 1 ? 'clip' : 'clips'}
          </Badge>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{category.description}</p>
        <span
          className={`mt-3 inline-flex text-sm font-semibold ${category.badgeText} group-hover:underline`}
        >
          Browse →
        </span>
      </div>
    </Link>
  )
}
