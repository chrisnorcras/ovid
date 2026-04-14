import Link from 'next/link'
import { ArrowRight, Play, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  videoCount: number
  updateCount: number
}

export function Hero({ videoCount, updateCount }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-28">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,53,0.25),transparent)]"
      />
      {/* Safety stripe accent at top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-[repeating-linear-gradient(90deg,#FF6B35_0px,#FF6B35_20px,#FFD166_20px,#FFD166_40px)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400">
            <ShieldAlert className="h-3.5 w-3.5" />
            Safety content with actual context
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where OSHA Meets{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-brand-500">Oh No.</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-lg leading-relaxed text-gray-400 sm:text-xl">
            Short-form workplace safety fails, compliance updates, and the context that makes it
            matter. Learn from other people&apos;s mistakes — preferably before someone gets an OSHA
            citation.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/browse">
                Browse the Fails
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white">
              <Link href="/updates">
                <Play className="h-4 w-4" />
                Latest Compliance Updates
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-800 pt-8">
            <Stat value={`${videoCount}+`} label="Safety fails catalogued" />
            <div className="h-8 w-px bg-gray-800" aria-hidden />
            <Stat value={`${updateCount}+`} label="Compliance updates" />
            <div className="h-8 w-px bg-gray-800" aria-hidden />
            <Stat value="8" label="Categories covered" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-black text-white sm:text-3xl">{value}</div>
      <div className="mt-0.5 text-xs text-gray-500">{label}</div>
    </div>
  )
}
