"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

export function NetworkBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-zinc-900 border-b-2 border-primary">
      <div className="container mx-auto px-4 py-3.5 sm:py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-base font-medium sm:gap-x-3 sm:text-lg">
            <span className="text-white">
              Looking for the <span className="font-bold text-primary">Neothink Network</span>?
            </span>
            <a
              href="https://community.neothink.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-primary underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80 sm:gap-2"
            >
              Visit community.neothink.io
              <ExternalLinkIcon />
            </a>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-10 w-10 shrink-0 p-0 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
            aria-label="Close banner"
          >
            <XIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
