import { CheckCircle2, Eye, BookMarked, Lightbulb } from 'lucide-react'

const pillars = [
  {
    icon: Eye,
    title: "We Watch So You Don't Have To",
    body: 'Short-form content moves fast. Not every OSHA fail makes it onto an official investigation report. We hunt down the clips that illustrate real violations — and explain what the OSHA standard says about them.',
    color: 'text-brand-500',
    bg: 'bg-brand-50',
  },
  {
    icon: BookMarked,
    title: 'Compliance Without the Legalese',
    body: 'Regulatory updates are written for lawyers. We translate what changes mean for actual workplaces — which standards are affected, what the new requirements are, and what you should do about them.',
    color: 'text-info-dark',
    bg: 'bg-info-muted',
  },
  {
    icon: Lightbulb,
    title: 'The Context That Actually Sticks',
    body: "People remember stories, not statutes. Every fail comes with a 'What Went Wrong' analysis and a compliance takeaway — because understanding the why is the difference between real safety culture and checkbox theater.",
    color: 'text-safe-dark',
    bg: 'bg-safe-muted',
  },
  {
    icon: CheckCircle2,
    title: 'Not Your EHS Software Vendor',
    body: 'OccTok has nothing to sell you. No enterprise platforms, no upsells, no safety consultancy preferred partners. Just curated content, plain-English summaries, and a consistent reminder that OSHA is not messing around.',
    color: 'text-accent-dark',
    bg: 'bg-accent-muted',
  },
]

export function WhyItMatters() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Why OccTok
          </p>
          <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
            Safety Content That Respects Your Intelligence
          </h2>
          <p className="mt-3 text-gray-500">
            Workplace safety is serious. The content culture around it does not have to be boring.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${p.bg}`}
                >
                  <Icon className={`h-5 w-5 ${p.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer note */}
        <div className="mx-auto mt-10 max-w-xl rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
          <p className="text-sm text-gray-500">
            <strong className="text-gray-700">Important:</strong> OccTok content is informational
            and educational. None of it constitutes legal advice or official safety guidance. For
            specific compliance questions, consult a qualified EHS professional or attorney.
          </p>
        </div>
      </div>
    </section>
  )
}
