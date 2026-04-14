import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, ExternalLink, Tag } from 'lucide-react'
import { getVideoBySlug, getRelatedVideos, getVideos } from '@/lib/content/adapter'
import { VideoEmbed } from '@/components/video/VideoEmbed'
import { ComplianceSections } from '@/components/video/ComplianceSections'
import { RelatedContent } from '@/components/video/RelatedContent'
import { Badge } from '@/components/ui/Badge'
import { getCategoryMeta, getPlatformLabel, formatDate } from '@/lib/utils'
import { siteConfig } from '@/config/site'

interface VideoDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const videos = await getVideos()
  return videos.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: VideoDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const video = await getVideoBySlug(slug)

  if (!video) return { title: 'Video Not Found' }

  const meta = getCategoryMeta(video.category)

  return {
    title: video.title,
    description: video.summary,
    keywords: [...video.tags, meta.label, 'OSHA', 'workplace safety', 'compliance'],
    openGraph: {
      title: video.title,
      description: video.summary,
      url: `${siteConfig.url}/videos/${video.slug}`,
      images: [{ url: video.thumbnailUrl, width: 640, height: 360, alt: video.title }],
    },
  }
}

export default async function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { slug } = await params
  const [video, related] = await Promise.all([
    getVideoBySlug(slug),
    getVideoBySlug(slug).then((v) => (v ? getRelatedVideos(v, 3) : [])),
  ])

  if (!video) notFound()

  const categoryMeta = getCategoryMeta(video.category)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Back link */}
      <Link
        href="/browse"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Browse
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <Badge className={`${categoryMeta.badgeBg} ${categoryMeta.badgeText}`}>
            {categoryMeta.label}
          </Badge>
          <Badge variant="platform">{getPlatformLabel(video.sourcePlatform)}</Badge>
          {video.featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <h1 className="text-2xl font-black leading-tight text-gray-900 sm:text-3xl">
          {video.title}
        </h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(video.publishedAt)}
          </span>
          <a
            href={video.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-brand-600 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View source
          </a>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Main content column */}
        <div className="flex flex-col gap-6 lg:col-span-3">
          {/* Video embed */}
          <VideoEmbed video={video} />

          {/* Summary */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Summary
            </h2>
            <p className="text-base leading-relaxed text-gray-700">{video.summary}</p>
          </div>
        </div>

        {/* Compliance sidebar */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <ComplianceSections video={video} />
        </div>
      </div>

      {/* Tags */}
      {video.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-gray-400 shrink-0" />
          {video.tags.map((tag) => (
            <Link
              key={tag}
              href={`/browse?q=${encodeURIComponent(tag)}`}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* Related content */}
      <RelatedContent videos={related} />
    </div>
  )
}
