import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { getCategoryMeta, getPlatformLabel, formatRelativeDate } from '@/lib/utils'
import type { VideoItem } from '@/lib/types'

interface FeaturedVideosProps {
  videos: VideoItem[]
}

export function FeaturedVideos({ videos }: FeaturedVideosProps) {
  if (videos.length === 0) return null

  const [hero, ...rest] = videos

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured"
          title="Front and Center"
          description="The clips we can't stop talking about. With compliance context, obviously."
          href="/browse?sort=featured"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* Hero card */}
          {hero && (
            <Link
              href={`/videos/${hero.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-950 lg:col-span-3"
            >
              <Image
                src={hero.thumbnailUrl}
                alt={hero.title}
                width={640}
                height={360}
                className="aspect-video w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6">
                <div className="mb-2 flex items-center gap-2">
                  <CategoryBadge categoryId={hero.category} />
                  <PlatformBadge platform={hero.sourcePlatform} />
                </div>
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-300 sm:text-xl">
                  {hero.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-gray-300">{hero.summary}</p>
                <p className="mt-2 text-xs text-gray-500">{formatRelativeDate(hero.publishedAt)}</p>
              </div>
            </Link>
          )}

          {/* Side cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {rest.map((video) => (
              <Link
                key={video.id}
                href={`/videos/${video.slug}`}
                className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <CategoryBadge categoryId={video.category} />
                  <h4 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-brand-600">
                    {video.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {formatRelativeDate(video.publishedAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryBadge({ categoryId }: { categoryId: VideoItem['category'] }) {
  const meta = getCategoryMeta(categoryId)
  return <Badge className={`${meta.badgeBg} ${meta.badgeText}`}>{meta.label}</Badge>
}

function PlatformBadge({ platform }: { platform: VideoItem['sourcePlatform'] }) {
  return <Badge variant="platform">{getPlatformLabel(platform)}</Badge>
}

export function SectionHeader({
  label,
  title,
  description,
  href,
}: {
  label: string
  title: string
  description?: string
  href?: string
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">{label}</p>
        <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">{title}</h2>
        {description && <p className="mt-1.5 text-sm text-gray-500">{description}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:mt-0"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
