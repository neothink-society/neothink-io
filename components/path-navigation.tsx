"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const paths = [
  { name: "Revolution", href: "/revolution" },
  { name: "Fellowship", href: "/fellowship" },
  { name: "Movement", href: "/movement" },
  { name: "Command", href: "/command" },
]

export function PathNavigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-primary/20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-4 sm:gap-2">
            {paths.map((path) => {
              const isActive = pathname === path.href
              return (
                <Link
                  key={path.href}
                  href={path.href}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-6 sm:text-base ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {path.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
