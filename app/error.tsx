"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development, could integrate with error tracking service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-bold text-white">Something went wrong</h1>
          <p className="text-lg text-white/70">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        {error.digest && (
          <p className="font-mono text-sm text-white/70">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-[#FFED4E] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37]"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = "/"}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Return home
          </Button>
        </div>
      </div>
    </div>
  )
}
