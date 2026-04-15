import { AlertTriangle, CheckCircle2, Scale, ExternalLink } from 'lucide-react'
import type { VideoItem } from '@/lib/types'

interface ComplianceSectionsProps {
  video: VideoItem
}

export function ComplianceSections({ video }: ComplianceSectionsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* What went wrong */}
      <div className="rounded-2xl border border-hazard bg-hazard-muted p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-hazard/20">
            <AlertTriangle className="h-5 w-5 text-hazard-dark" />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-hazard-dark">
              What Went Wrong
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{video.whatWentWrong}</p>
          </div>
        </div>
      </div>

      {/* Compliance takeaway */}
      <div className="rounded-2xl border border-safe bg-safe-muted p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-safe/20">
            <CheckCircle2 className="h-5 w-5 text-safe-dark" />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-safe-dark">
              Compliance Takeaway
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{video.complianceTakeaway}</p>
          </div>
        </div>
      </div>

      {/* OSHA reference */}
      {video.oshaReference && (
        <div className="flex items-start gap-3 rounded-xl border border-info bg-info-muted p-4">
          <Scale className="mt-0.5 h-4 w-4 shrink-0 text-info-dark" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-info-dark">
              Applicable Standard
            </p>
            <p className="mt-0.5 text-sm text-gray-700">{video.oshaReference}</p>
            <a
              href={`https://www.osha.gov/laws-regs/regulations/standardnumber/${video.oshaReference.split(' ')[2]?.replace('§', '').replace('–', '').trim() ?? ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-info-dark hover:underline"
            >
              View on OSHA.gov <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}

      {/* Editorial disclaimer */}
      <p className="text-xs text-gray-400">
        Commentary is provided for informational and educational purposes only. This is not legal
        advice. For compliance guidance specific to your workplace, consult a qualified safety
        professional or attorney.
      </p>
    </div>
  )
}
