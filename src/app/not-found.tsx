import Link from 'next/link'
import { HardHat } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
        <HardHat className="h-8 w-8 text-brand-500" />
      </div>
      <h1 className="mt-5 text-5xl font-black text-gray-900">404</h1>
      <p className="mt-2 text-lg font-semibold text-gray-700">Page Not Found</p>
      <p className="mt-2 max-w-sm text-sm text-gray-500">
        This page does not exist. Unlike some safety violations we have documented, this one is
        genuinely unintentional.
      </p>
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/browse">Browse Fails</Link>
        </Button>
      </div>
    </div>
  )
}
