import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const footerLinks = {
  Browse: [
    { label: 'All Videos', href: '/browse' },
    { label: 'OSHA Fails', href: '/browse?category=osha-fails' },
    { label: 'Forklift Fails', href: '/browse?category=forklift-fails' },
    { label: 'PPE Problems', href: '/browse?category=ppe-problems' },
    { label: 'HazCom Headaches', href: '/browse?category=hazcom-headaches' },
  ],
  Updates: [
    { label: 'All Updates', href: '/updates' },
    { label: 'High Alerts', href: '/updates?alertLevel=high' },
    { label: 'Standard Changes', href: '/updates?category=standard-change' },
    { label: 'Penalty Updates', href: '/updates?category=penalty-update' },
  ],
  Site: [
    { label: 'Categories', href: '/categories' },
    { label: 'About OccTok', href: '/about' },
    { label: 'Legal & Disclaimer', href: '/legal' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950" aria-label="OccTok home">
              <Image
                src="/images/occtok_logo.png"
                alt="OccTok"
                width={130}
                height={41}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
              {siteConfig.tagline} Short-form safety content, compliance updates, and the context
              that makes it matter.
            </p>
            <p className="mt-4 rounded-lg border border-gray-700 bg-gray-900 p-3 text-xs leading-relaxed text-gray-500">
              ⚠️ {siteConfig.disclaimer}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-gray-800 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} OccTok. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for safety culture. Not a substitute for professional safety guidance.
          </p>
        </div>
      </div>
    </footer>
  )
}
