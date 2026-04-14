import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Legal & Disclaimer',
  description: 'OccTok legal disclaimer, terms of use, and editorial policy.',
}

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-black text-gray-900">Legal &amp; Disclaimer</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-gray-700">
        <Section title="Not Legal Advice">
          <p>
            OccTok is an informational content hub. <strong>Nothing on this site constitutes
            legal advice, official regulatory guidance, or a professional safety recommendation.</strong>
          </p>
          <p className="mt-3">
            The content on OccTok — including video summaries, compliance takeaways, regulatory
            update articles, and all editorial commentary — is provided for informational and
            educational purposes only. It does not create an attorney-client relationship, an
            employer-employee relationship, or any professional advisory relationship of any kind.
          </p>
          <p className="mt-3">
            For compliance questions specific to your workplace, your industry, or your
            situation, please consult a qualified Environmental Health and Safety (EHS)
            professional, a licensed attorney, or contact OSHA directly at osha.gov.
          </p>
        </Section>

        <Section title="Content Accuracy">
          <p>
            OccTok makes reasonable efforts to provide accurate, current information about
            workplace safety standards and regulatory changes. However, regulations change
            frequently, enforcement interpretations evolve, and state-level programs may
            differ significantly from federal standards.
          </p>
          <p className="mt-3">
            We do not warrant the accuracy, completeness, or timeliness of any content on this
            site. Always verify information against official OSHA, NIOSH, EPA, or applicable
            state agency sources before making compliance decisions.
          </p>
        </Section>

        <Section title="Third-Party Content">
          <p>
            OccTok links to and embeds short-form video content from third-party platforms
            including YouTube, TikTok, and others. We do not control, endorse, or take
            responsibility for the accuracy or safety of content hosted on those platforms.
          </p>
          <p className="mt-3">
            Embedded content and outbound links are provided for reference and educational
            illustration only. Presence of a link or embed does not constitute endorsement of
            the platform, the content creator, or the behavior depicted.
          </p>
          <p className="mt-3">
            Third-party platform terms of service govern how their content may be accessed and
            used. YouTube content is subject to YouTube&apos;s Terms of Service. TikTok content
            is subject to TikTok&apos;s Terms of Service.
          </p>
        </Section>

        <Section title="No Endorsement of Unsafe Behavior">
          <p>
            The depiction of unsafe workplace behavior on this site is presented exclusively for
            educational critique and compliance illustration. <strong>OccTok does not endorse,
            encourage, or celebrate unsafe behavior.</strong> All content showing violations is
            accompanied by analysis explaining what went wrong and what the applicable standard
            requires.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            OccTok&apos;s original editorial content — including summaries, compliance analyses,
            and original text — is the property of OccTok and may not be reproduced without
            permission.
          </p>
          <p className="mt-3">
            Third-party video content, logos, and brand names are the property of their
            respective owners. OccTok makes no claim of ownership over embedded content.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, OccTok, its operators, and
            contributors shall not be liable for any direct, indirect, incidental, consequential,
            or punitive damages arising from your use of this site or reliance on its content.
          </p>
        </Section>

        <Section title="Jurisdiction">
          <p>
            This site is operated in the United States. By accessing it, you agree that any
            disputes shall be governed by the laws of the United States and the state in which
            OccTok operates.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For questions about this disclaimer or content on the site, please refer to the
            About page or contact us through the information provided there.
          </p>
        </Section>

        <div className="rounded-xl bg-gray-50 border border-gray-200 p-5 text-xs text-gray-500">
          <strong className="text-gray-700">Summary in plain English:</strong>{' '}
          {siteConfig.disclaimer}
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-bold text-gray-900 mb-2">{title}</h2>
      {children}
    </section>
  )
}
