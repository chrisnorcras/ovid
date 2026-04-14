import type { Metadata } from 'next'
import { HardHat, AlertTriangle, BookOpen, Globe } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'About OccTok',
  description:
    'OccTok is a content hub curating short-form workplace safety videos, OSHA fails, and compliance updates with educational context. Learn about our mission and editorial approach.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 shadow-lg">
          <HardHat className="h-8 w-8 text-white" strokeWidth={2} />
        </div>
        <h1 className="text-4xl font-black text-gray-900">About OccTok</h1>
        <p className="mt-3 text-lg text-gray-500">
          {siteConfig.tagline} Short-form safety content, compliance updates, and the context
          that makes it stick.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-gray-900 mb-4">What We Do</h2>
        <div className="prose text-gray-600 text-base leading-relaxed flex flex-col gap-4">
          <p>
            OccTok is a content hub that curates short-form video content and regulatory updates
            related to OSHA, workplace safety, and compliance. We pull from publicly available
            short-form video platforms and pair every clip with editorial context: what went wrong,
            which standard was violated, and what the practical takeaway is.
          </p>
          <p>
            Workplace safety culture has a problem: most safety training is either boring,
            inaccessible, or both. Short-form video has made it genuinely viral — but without
            context, a forklift fail is just entertainment. With context, it is a teachable moment
            far more memorable than Chapter 4 of the safety manual.
          </p>
          <p>
            OccTok exists in the space between. We treat the content seriously, we treat the
            compliance context seriously, and we permit ourselves to acknowledge that some of
            these situations are objectively absurd.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="text-xl font-black text-gray-900 mb-5">Editorial Principles</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: AlertTriangle,
              title: 'Safety First, Context Always',
              body: "Every clip showing unsafe behavior comes with a compliance analysis. We don't post violations without explaining why they're violations.",
              color: 'text-hazard-dark',
              bg: 'bg-hazard-muted',
            },
            {
              icon: BookOpen,
              title: 'Plain English, Not Legalese',
              body: 'Regulatory updates are written for lawyers. We translate them for the people they actually affect.',
              color: 'text-info-dark',
              bg: 'bg-info-muted',
            },
            {
              icon: Globe,
              title: 'Informational Only',
              body: 'Everything on OccTok is for educational purposes. None of it constitutes legal advice. We say this sincerely and often.',
              color: 'text-safe-dark',
              bg: 'bg-safe-muted',
            },
            {
              icon: HardHat,
              title: "Humor With Guardrails",
              body: "Yes, some of these clips are funny. We're allowed to acknowledge that while still being clear about the real hazards and real consequences.",
              color: 'text-brand-700',
              bg: 'bg-brand-100',
            },
          ].map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${p.bg}`}>
                  <Icon className={`h-5 w-5 ${p.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* What we're not */}
      <section className="mb-12 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">What OccTok Is Not</h2>
        <ul className="grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
          {[
            'A social platform or community',
            'A legal or regulatory advice service',
            'An OSHA-affiliated or government resource',
            'A safety consulting firm',
            'A content submission platform',
            'A moderated community forum',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-gray-400">×</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="rounded-xl border border-gray-200 bg-white p-5 text-center">
        <p className="text-sm text-gray-500">
          <strong className="text-gray-700">Important Disclaimer:</strong>{' '}
          {siteConfig.disclaimer}
        </p>
      </section>
    </div>
  )
}
