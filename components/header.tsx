"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-200"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-200"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/20 bg-black/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-transparent bg-black/80 backdrop-blur-md"
      }`}
      role="banner"
    >
      <nav aria-label="Main navigation" className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative text-xl font-bold tracking-tight sm:text-2xl">
            <span className="bg-gradient-to-r from-[#FFED4E] via-[#FFD700] to-[#FFA500] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#FFA500] group-hover:via-[#FFD700] group-hover:to-[#FFED4E]">
              Neothink
            </span>
            <span className="text-white/90">+</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.name}
              <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-6 py-2 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Link href="https://community.neothink.io" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Login</span>
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
            <MenuIcon />
          </span>
          <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}>
            <XIcon />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-primary/10 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="container mx-auto px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-2" role="menu">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition-all duration-200 group-hover:bg-primary group-hover:scale-125" />
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] py-4 text-base font-bold text-black transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                <Link href="https://community.neothink.io" target="_blank" rel="noopener noreferrer">
                  Login to Community
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
