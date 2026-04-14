import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { getCategoryMeta, getPlatformLabel } from '@/lib/utils'
import { SectionHeader } from './FeaturedVideos'
import type { VideoItem } from '@/lib/types'

interface TrendingFailsProps {
  videos: VideoItem[]
}

export function TrendingFails({ videos }: TrendingFailsProps) {
  if (videos.length === 0) return null

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trending"
          title="Currently Making Rounds"
          description="These clips are getting a lot of attention. Possibly from OSHA compliance officers."
          href="/browse?sort=trending"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, i) => (
            <TrendingCard key={video.id} video={video} rank={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrendingCard({ video, rank }: { video: VideoItem; rank: number }) {
  const meta = getCategoryMeta(video.category)

  return (
    <Link
      href={`/videos/${video.slug}`}
      className="group flex gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md border border-gray-200"
    >
      {/* Rank */}
      <div className="flex w-7 shrink-0 items-start pt-0.5">
        <span
          className={`text-2xl font-black leading-none ${
            rank <= 3 ? 'text-brand-500' : 'text-gray-300'
          }`}
        >
          {rank}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="128px"
        />
        {video.trendingScore > 90 && (
          <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500">
            <TrendingUp className="h-3 w-3 text-white" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Badge className={`${meta.badgeBg} ${meta.badgeText} text-[10px]`}>
          {meta.label}
        </Badge>
        <h3 className="mt-1.5 text-sm font-semibold leading-snug text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="mt-1 text-xs text-gray-400">{getPlatformLabel(video.sourcePlatform)}</p>
      </div>
    </Link>
  )
}
