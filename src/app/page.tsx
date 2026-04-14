import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { FeaturedVideos } from '@/components/home/FeaturedVideos'
import { TrendingFails } from '@/components/home/TrendingFails'
import { LatestUpdates } from '@/components/home/LatestUpdates'
import { BrowseByCategory } from '@/components/home/BrowseByCategory'
import { WhyItMatters } from '@/components/home/WhyItMatters'
import {
  getFeaturedVideos,
  getTrendingVideos,
  getLatestUpdates,
  getContentStats,
} from '@/lib/content/adapter'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

export default async function HomePage() {
  const [featuredVideos, trendingVideos, latestUpdates, stats] = await Promise.all([
    getFeaturedVideos(4),
    getTrendingVideos(6),
    getLatestUpdates(4),
    getContentStats(),
  ])

  return (
    <>
      <Hero videoCount={stats.videoCount} updateCount={stats.updateCount} />
      <FeaturedVideos videos={featuredVideos} />
      <TrendingFails videos={trendingVideos} />
      <LatestUpdates updates={latestUpdates} />
      <BrowseByCategory />
      <WhyItMatters />
    </>
  )
}
