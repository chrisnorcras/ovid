'use client'

import Link from 'next/link'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hazard-muted">
        <AlertTriangle className="h-8 w-8 text-hazard-dark" />
      </div>
      <h1 className="mt-5 text-xl font-bold text-gray-900">Something Went Wrong</h1>
      <p className="mt-2 max-w-sm text-sm text-gray-500">
        An unexpected error occurred. Unlike OSHA violations, this one was not entirely avoidable.
        {error.digest && (
          <span className="mt-1 block text-xs text-gray-400">Error ID: {error.digest}</span>
        )}
      </p>
      <div className="mt-6 flex gap-3">
        <Button onClick={reset} variant="outline">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
