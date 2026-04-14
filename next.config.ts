import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // On GitHub Pages the site lives at /occvid unless a custom domain is set.
  // Remove basePath (or set to '') after pointing a custom domain at the repo.
  basePath: process.env.GITHUB_ACTIONS ? '/occvid' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'p16-sign.tiktokcdn-us.com' },
      { protocol: 'https', hostname: 'p19-sign.tiktokcdn-us.com' },
    ],
  },
}

export default nextConfig

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
if (process.env.NODE_ENV === 'development') {
  initOpenNextCloudflareForDev()
}
