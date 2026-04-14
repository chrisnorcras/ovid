# OccTok

> Where OSHA Meets Oh No. Short-form workplace safety fails, compliance updates, and the context that makes it matter.

A production-ready Next.js content hub for workplace safety culture — curating short-form video fails, compliance updates, and editorial context around occupational safety and OSHA compliance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| UI Primitives | Radix UI |
| Icons | Lucide React |
| Variants | class-variance-authority |
| Utilities | clsx, tailwind-merge, date-fns |
| Code Quality | ESLint (next/typescript) + Prettier |

---

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, pnpm, or yarn

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your site URL (defaults work fine for local dev):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=OccTok
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout: fonts, metadata, providers
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind directives + base styles
│   ├── error.tsx               # Global error boundary
│   ├── not-found.tsx           # 404 page
│   ├── browse/page.tsx         # Video browse/filter page
│   ├── categories/page.tsx     # Category directory
│   ├── videos/[slug]/page.tsx  # Individual video detail
│   ├── updates/page.tsx        # Compliance updates feed
│   ├── updates/[slug]/page.tsx # Individual update detail
│   ├── about/page.tsx          # About page
│   └── legal/page.tsx          # Legal disclaimer
│
├── components/
│   ├── layout/                 # Header, Footer, MobileNav
│   ├── ui/                     # Radix UI based primitives
│   │   ├── Badge.tsx           # CVA-based badge variants
│   │   ├── Button.tsx          # CVA-based button (asChild support)
│   │   ├── Card.tsx            # Card container components
│   │   ├── Tabs.tsx            # Radix Tabs
│   │   ├── Dialog.tsx          # Radix Dialog + SheetContent (drawer)
│   │   ├── Accordion.tsx       # Radix Accordion
│   │   ├── DropdownMenu.tsx    # Radix Dropdown Menu (used for filters)
│   │   ├── Tooltip.tsx         # Radix Tooltip
│   │   └── Toast.tsx           # Radix Toast + useToast hook
│   ├── home/                   # Home page sections
│   ├── browse/                 # Browse/filter components
│   ├── video/                  # Video detail components
│   └── updates/                # Compliance update components
│
├── lib/
│   ├── types.ts                # All TypeScript interfaces
│   ├── utils.ts                # cn(), date helpers, category config
│   └── content/
│       ├── adapter.ts          # Content access layer (swap for real APIs)
│       ├── mock-videos.ts      # 12 seed video items
│       └── mock-updates.ts     # 8 seed compliance updates
│
└── config/
    └── site.ts                 # Site-wide metadata config
```

---

## Content Architecture

### Content Adapter Pattern

All data access goes through `src/lib/content/adapter.ts`. This is the integration boundary — swap out mock data sources for real APIs without changing any component code.

```typescript
// Current: mock data
import { mockVideos } from './mock-videos'

// Future: real API
const response = await fetch(`https://api.example.com/videos?category=${category}`)
```

The adapter exports typed async functions:
- `getVideos(filters)` — filtered, sorted video list
- `getVideoBySlug(slug)` — single video by slug
- `getFeaturedVideos(limit)` — featured videos
- `getTrendingVideos(limit)` — highest trending score
- `getRelatedVideos(video, limit)` — same category, different video
- `getUpdates(filters)` — filtered updates list
- `getUpdateBySlug(slug)` — single update by slug
- `getFeaturedUpdates(limit)` — featured/high-priority updates
- `getLatestUpdates(limit)` — most recent updates

---

## Future Integration: Real Data Sources

### YouTube Data API v3

The YouTube Data API v3 can return video metadata (title, description, thumbnailUrl, publishedAt) for specific videos or playlists.

1. Create a project at [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the YouTube Data API v3
3. Create an API key (restrict to your domain in production)
4. Add `YOUTUBE_API_KEY` to your `.env.local`

In `adapter.ts`, replace the mock video fetch with:
```typescript
const res = await fetch(
  `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet,statistics`
)
```

For a curated playlist approach, maintain a list of approved video IDs in a CMS or a simple JSON config file.

### TikTok Embed Support

TikTok does not have a public search/metadata API suitable for content aggregation. The TikTok Research API requires application approval and has usage restrictions.

**Recommended approach for TikTok content:**
1. Curate TikTok URLs manually and store metadata in your CMS
2. Use TikTok's oEmbed endpoint (`https://www.tiktok.com/oembed?url=VIDEO_URL`) for embed HTML
3. Since oEmbed embeds require their JS script to activate, consider using the `thumbnailUrl` fallback card (already implemented in `VideoEmbed.tsx`)

### Headless CMS Integration

For a full editorial workflow, connect a CMS like Contentful, Sanity, or Notion:

```typescript
// Example: Contentful
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CMS_SPACE_ID!,
  accessToken: process.env.CMS_API_TOKEN!,
})

export async function getVideos(): Promise<VideoItem[]> {
  const entries = await client.getEntries({ content_type: 'videoItem' })
  return entries.items.map(mapEntryToVideoItem)
}
```

---

## Embed Support & Fallbacks

| Platform | Embed Support | Fallback |
|---|---|---|
| YouTube | ✅ Full iframe embed via `youtube-nocookie.com` | N/A |
| YouTube Shorts | ✅ Same embed as YouTube | N/A |
| TikTok | ⚠️ oEmbed available (JS activation required) | Thumbnail card + outbound link |
| Instagram Reels | ❌ Embeds require meta approval | Thumbnail card + outbound link |
| Other | ❌ Varies | Thumbnail card + outbound link |

The `VideoEmbed` component in `src/components/video/VideoEmbed.tsx` handles these cases automatically based on `sourcePlatform` and the presence of `embedUrl`.

---

## Adding Public Assets

The following assets should be added to `/public/`:

| File | Purpose |
|---|---|
| `favicon.ico` | Browser tab icon |
| `favicon.svg` | SVG favicon (modern browsers) |
| `apple-touch-icon.png` | iOS home screen icon (180×180) |
| `og-image.png` | Open Graph preview image (1200×630) |
| `site.webmanifest` | PWA manifest (optional) |

For the OG image, consider using [Next.js OpenGraph Image generation](https://nextjs.org/docs/app/api-reference/file-conventions/opengraph-image) via `src/app/opengraph-image.tsx`.

---

## SEO Implementation

- **Page metadata**: Each page exports a `generateMetadata` function or static `metadata` object
- **Dynamic OG**: Video and update detail pages include video/article-specific OG metadata
- **Structured URLs**: Clean slugs (`/videos/forklift-operator-vs-laws-of-physics`)
- **robots**: `robots.txt` can be added at `src/app/robots.ts`
- **sitemap**: Can be auto-generated at `src/app/sitemap.ts`

---

## Code Quality

```bash
# Lint
npm run lint

# Fix lint issues
npm run lint:fix

# Format with Prettier
npm run format

# Check formatting
npm run format:check
```

---

## Accessibility

- All interactive elements have keyboard focus support
- Radix UI primitives handle ARIA attributes, keyboard navigation, and focus management
- Focus visible styles are defined globally in `globals.css`
- Screen reader text via `sr-only` class on icon-only buttons
- Semantic HTML: proper heading hierarchy, `<nav>`, `<main>`, `<article>`, `<aside>`

---

## License

All original code: MIT  
Third-party content, referenced standards, and regulation text belong to their respective copyright holders.

OSHA standards and federal regulatory text are in the public domain.

---

*OccTok — informational only, not legal advice.*
