'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/DropdownMenu'
import { Button } from '@/components/ui/Button'
import { CATEGORIES } from '@/lib/utils'
import type { Platform } from '@/lib/types'

const PLATFORMS: Array<{ value: Platform | 'all'; label: string }> = [
  { value: 'all', label: 'All Platforms' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'youtube-shorts', label: 'YouTube Shorts' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'instagram-reels', label: 'Instagram Reels' },
]

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'trending', label: 'Trending' },
  { value: 'featured', label: 'Featured' },
]

export function FilterBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const category = searchParams.get('category') ?? 'all'
  const platform = searchParams.get('platform') ?? 'all'
  const sort = searchParams.get('sort') ?? 'newest'
  const q = searchParams.get('q') ?? ''

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value && value !== 'all' && value !== 'newest') {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      // Reset page on filter change
      params.delete('page')
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`)
      })
    },
    [searchParams, router, pathname]
  )

  const clearAll = () => {
    startTransition(() => {
      router.push(pathname)
    })
  }

  const hasFilters = category !== 'all' || platform !== 'all' || sort !== 'newest' || q !== ''

  const currentCategory = CATEGORIES.find((c) => c.id === category)
  const currentSortLabel = SORT_OPTIONS.find((s) => s.value === sort)?.label ?? 'Newest First'
  const currentPlatformLabel =
    PLATFORMS.find((p) => p.value === platform)?.label ?? 'All Platforms'

  return (
    <div className="flex flex-col gap-3">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Search safety fails, topics, standards…"
          defaultValue={q}
          onChange={(e) => {
            // Debounced update
            const timer = setTimeout(() => updateParam('q', e.target.value), 400)
            return () => clearTimeout(timer)
          }}
          className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/20"
        />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2">
        <SlidersHorizontal className="h-4 w-4 text-gray-400" aria-hidden />
        <span className="text-xs font-medium text-gray-500">Filter:</span>

        {/* Category filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-400">
              {currentCategory ? currentCategory.label : 'All Categories'}
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => updateParam('category', 'all')}>
              All Categories
            </DropdownMenuItem>
            {CATEGORIES.map((cat) => (
              <DropdownMenuItem key={cat.id} onClick={() => updateParam('category', cat.id)}>
                {cat.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Platform filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-400">
              {currentPlatformLabel}
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Platform</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {PLATFORMS.map((p) => (
              <DropdownMenuItem key={p.value} onClick={() => updateParam('platform', p.value)}>
                {p.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-400">
              {currentSortLabel}
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {SORT_OPTIONS.map((opt) => (
              <DropdownMenuItem key={opt.value} onClick={() => updateParam('sort', opt.value)}>
                {opt.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clear filters */}
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={clearAll} className="gap-1 text-gray-500">
            <X className="h-3.5 w-3.5" />
            Clear
          </Button>
        )}

        {/* Loading indicator */}
        {isPending && (
          <span className="text-xs text-gray-400 animate-pulse">Filtering…</span>
        )}
      </div>
    </div>
  )
}
