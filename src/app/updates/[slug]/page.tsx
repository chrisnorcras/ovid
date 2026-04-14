import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, ExternalLink, Tag } from 'lucide-react'
import { getUpdateBySlug, getUpdates } from '@/lib/content/adapter'
import { getAlertConfig, formatDate } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const UPDATE_CATEGORY_LABELS: Record<string, string> = {
  'standard-change': 'Standard Change',
  'enforcement-update': 'Enforcement Update',
  'penalty-update': 'Penalty Update',
  'guidance-release': 'Guidance Release',
  'industry-alert': 'Industry Alert',
  'study-release': 'Study Release',
}

interface UpdateDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const updates = await getUpdates()
  return updates.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: UpdateDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const update = await getUpdateBySlug(slug)

  if (!update) return { title: 'Update Not Found' }

  return {
    title: update.title,
    description: update.summary,
    keywords: [...update.tags, 'OSHA', 'compliance update', 'workplace safety regulation'],
    openGraph: {
      title: update.title,
      description: update.summary,
      url: `${siteConfig.url}/updates/${update.slug}`,
    },
  }
}

export default async function UpdateDetailPage({ params }: UpdateDetailPageProps) {
  const { slug } = await params
  const update = await getUpdateBySlug(slug)

  if (!update) notFound()

  const alertConfig = getAlertConfig(update.alertLevel)
  const categoryLabel = UPDATE_CATEGORY_LABELS[update.category] ?? update.category

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Back link */}
      <Link
        href="/updates"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Updates
      </Link>

      {/* Header */}
      <article>
        <header className="mb-8">
          {/* Alert badge + category */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${alertConfig.bg} ${alertConfig.text}`}
            >
              <span className={`h-2 w-2 rounded-full ${alertConfig.dot}`} />
              {alertConfig.label} Priority
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">
              {categoryLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-black leading-tight text-gray-900 sm:text-3xl">
            {update.title}
          </h1>

          {/* Summary */}
          <p className="mt-3 text-base leading-relaxed text-gray-600">{update.summary}</p>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(update.publishedAt)}
            </span>
          </div>
        </header>

        {/* Body — rendered as structured content */}
        <div
          className="prose-update"
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(update.body),
          }}
        />

        {/* Source links */}
        {update.sourceLinks.length > 0 && (
          <aside className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-sm font-bold text-gray-700 mb-3">Sources & References</h2>
            <ul className="flex flex-col gap-2">
              {update.sourceLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-brand-600 hover:text-brand-700 hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Tags */}
        {update.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4 text-gray-400 shrink-0" />
            {update.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400">
            ⚠️ This content is informational only and does not constitute legal advice. For
            compliance guidance specific to your workplace, consult a qualified EHS professional
            or attorney.
          </p>
        </div>
      </article>
    </div>
  )
}

/**
 * Minimal Markdown-to-HTML converter for update body content.
 * For production, replace with a proper Markdown library (e.g., remark/rehype or marked).
 * This handles the specific patterns used in mock update bodies.
 */
function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (_m, header, rows) => {
      const th = header
        .split('|')
        .filter(Boolean)
        .map((h: string) => `<th>${h.trim()}</th>`)
        .join('')
      const trs = rows
        .trim()
        .split('\n')
        .map((row: string) => {
          const tds = row
            .split('|')
            .filter(Boolean)
            .map((d: string) => `<td>${d.trim()}</td>`)
            .join('')
          return `<tr>${tds}</tr>`
        })
        .join('')
      return `<table><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table>`
    })
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hpuolt])(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
}
