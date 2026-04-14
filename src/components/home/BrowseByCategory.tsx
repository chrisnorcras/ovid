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
import { SectionHeader } from './FeaturedVideos'
import type { CategoryMeta } from '@/lib/types'

// Map icon names to Lucide components
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

export function BrowseByCategory() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Categories"
          title="Pick Your Hazard"
          description="Eight ways workplace safety can go sideways. We cover all of them."
          href="/categories"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category }: { category: CategoryMeta }) {
  const Icon = iconMap[category.icon] ?? AlertTriangle

  return (
    <Link
      href={`/browse?category=${category.id}`}
      className={`group flex flex-col gap-3 rounded-xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${category.badgeBg} ${category.borderColor}`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.badgeBg}`}
      >
        <Icon className={`h-5 w-5 ${category.badgeText}`} strokeWidth={2} />
      </div>
      <div>
        <h3 className={`text-sm font-bold ${category.badgeText}`}>{category.label}</h3>
        <p className="mt-1 text-xs leading-relaxed text-gray-500">{category.description}</p>
      </div>
    </Link>
  )
}
