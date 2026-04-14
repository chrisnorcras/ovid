import { ExternalLink, Play } from 'lucide-react'
import type { VideoItem } from '@/lib/types'

interface VideoEmbedProps {
  video: VideoItem
}

export function VideoEmbed({ video }: VideoEmbedProps) {
  const isYouTube =
    video.sourcePlatform === 'youtube' || video.sourcePlatform === 'youtube-shorts'

  if (isYouTube && video.embedUrl) {
    return <YouTubeEmbed video={video} />
  }

  // Fallback for TikTok and other platforms: preview card with outbound link
  return <EmbedFallback video={video} />
}

function YouTubeEmbed({ video }: { video: VideoItem }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-lg">
      <div className="relative aspect-video">
        <iframe
          src={`${video.embedUrl}?rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function EmbedFallback({ video }: { video: VideoItem }) {
  const platformName =
    video.sourcePlatform === 'tiktok'
      ? 'TikTok'
      : video.sourcePlatform === 'instagram-reels'
        ? 'Instagram'
        : 'External Source'

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gray-950 shadow-lg"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Background thumbnail */}
      {video.thumbnailUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={video.thumbnailUrl}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Play className="h-7 w-7 text-white" fill="white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            Watch on {platformName}
          </p>
          <p className="mt-1 text-xs text-gray-400">
            {platformName} embeds require viewing on the source platform.
          </p>
        </div>
        <a
          href={video.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Watch on {platformName}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
