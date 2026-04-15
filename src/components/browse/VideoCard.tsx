import Link from 'next/link'
import Image from 'next/image'
import { TrendingUp, Star } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { getCategoryMeta, getPlatformLabel, formatRelativeDate, truncate } from '@/lib/utils'
import type { VideoItem } from '@/lib/types'

interface VideoCardProps {
  video: VideoItem
}

export function VideoCard({ video }: VideoCardProps) {
  const meta = getCategoryMeta(video.category)

  return (
    <Link
      href={`/videos/${video.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Platform tag */}
        <div className="absolute right-2 top-2">
          <Badge variant="platform" className="text-[11px]">
            {getPlatformLabel(video.sourcePlatform)}
          </Badge>
        </div>

        {/* Trending badge */}
        {video.trendingScore >= 90 && (
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-semibold text-white">
            <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
            Trending
          </div>
        )}

        {/* Featured star */}
        {video.featured && video.trendingScore < 90 && (
          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-gray-900">
            <Star className="h-3 w-3" strokeWidth={2.5} fill="currentColor" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category badge */}
        <Badge className={`${meta.badgeBg} ${meta.badgeText} w-fit text-[11px]`}>
          {meta.label}
        </Badge>

        {/* Title */}
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-brand-600">
          {video.title}
        </h3>

        {/* Summary */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {truncate(video.summary, 120)}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xs text-gray-400">{formatRelativeDate(video.publishedAt)}</span>
          <span className="text-xs font-medium text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}
