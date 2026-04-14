import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { getCategoryMeta, formatRelativeDate } from '@/lib/utils'
import type { VideoItem } from '@/lib/types'

interface RelatedContentProps {
  videos: VideoItem[]
}

export function RelatedContent({ videos }: RelatedContentProps) {
  if (videos.length === 0) return null

  return (
    <section className="mt-10 border-t border-gray-200 pt-10">
      <h2 className="text-lg font-bold text-gray-900">More Like This</h2>
      <p className="mt-0.5 text-sm text-gray-500">Other clips in the same category</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const meta = getCategoryMeta(video.category)
          return (
            <Link
              key={video.id}
              href={`/videos/${video.slug}`}
              className="group flex gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-shadow hover:shadow-md"
            >
              <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="112px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Badge className={`${meta.badgeBg} ${meta.badgeText} text-[10px]`}>
                  {meta.label}
                </Badge>
                <h3 className="mt-1 text-xs font-semibold leading-snug text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="mt-1 text-[11px] text-gray-400">
                  {formatRelativeDate(video.publishedAt)}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
