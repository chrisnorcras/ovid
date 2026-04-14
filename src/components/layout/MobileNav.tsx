'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Dialog, SheetContent, DialogTitle } from '@/components/ui/Dialog'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Browse', href: '/browse' },
  { label: 'Categories', href: '/categories' },
  { label: 'Updates', href: '/updates' },
  { label: 'About', href: '/about' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 md:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          {/* Dark header strip for logo contrast */}
          <div className="bg-gray-950 px-6 py-4">
            <DialogTitle asChild>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block focus:outline-none"
                aria-label="OccTok home"
              >
                <Image
                  src="/images/occtok_logo.png"
                  alt="OccTok"
                  width={120}
                  height={38}
                  className="h-9 w-auto"
                />
              </Link>
            </DialogTitle>
          </div>

          <div className="flex h-full flex-col p-6">
            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Disclaimer */}
            <div className="mt-auto pt-6">
              <p className="rounded-lg bg-gray-50 p-3 text-xs leading-relaxed text-gray-400">
                Informational only. Not legal advice.
              </p>
            </div>
          </div>
        </SheetContent>
      </Dialog>
    </>
  )
}
