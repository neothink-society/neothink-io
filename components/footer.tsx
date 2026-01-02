import Link from "next/link"

export function Footer() {
  const specialPaths = [
    { name: "The Wealthy Ascender", color: "text-orange-400 hover:text-orange-300", href: "/blog/the-ascender-path" },
    { name: "The Happy Neothinker", color: "text-amber-400 hover:text-amber-300", href: "/blog/the-neothinker-path" },
    { name: "The Healthy Immortal", color: "text-red-400 hover:text-red-300", href: "/blog/the-immortal-path" },
    { name: "The Lucky Superachiever", color: "text-yellow-400 hover:text-yellow-300", href: "/blog/the-superachiever-path" },
  ]

  const generalPaths = [
    { name: "Neothink Revolution", href: "#" },
    { name: "Neothink Fellowship", href: "#" },
    { name: "Neothink Movement", href: "#" },
    { name: "Neothink Command", href: "#" },
  ]

  const explore = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const external = [
    { name: "Mark Hamilton", href: "https://markhamilton.co" },
    { name: "Neothink Society", href: "https://neothink.com" },
  ]

  return (
    <footer className="relative border-t border-primary/20 bg-black" role="contentinfo" aria-label="Site footer">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Main footer grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-block">
              <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                <span className="bg-gradient-to-r from-[#FFED4E] via-[#FFD700] to-[#FFA500] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#FFA500] group-hover:via-[#FFD700] group-hover:to-[#FFED4E]">
                  Neothink
                </span>
                <span className="text-white/90">+</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base sm:leading-relaxed">
              The administrative gateway to the values provided by Mark Hamilton, Wallace Hamilton, and the Neothink Society.
            </p>

            {/* External links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {external.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary sm:text-sm"
                >
                  {item.name}
                  <svg className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8 lg:gap-6">

            {/* Explore column */}
            <div>
              <h4 id="footer-explore" className="text-xs font-semibold uppercase tracking-wider text-white/40 sm:text-sm">
                Explore
              </h4>
              <ul aria-labelledby="footer-explore" className="mt-4 space-y-3">
                {explore.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      <span className="mr-2 h-px w-0 bg-primary transition-all duration-200 group-hover:w-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Paths column */}
            <div>
              <h4 id="footer-general-paths" className="text-xs font-semibold uppercase tracking-wider text-white/40 sm:text-sm">
                General Paths
              </h4>
              <ul aria-labelledby="footer-general-paths" className="mt-4 space-y-3">
                {generalPaths.map((path) => (
                  <li key={path.name}>
                    <Link
                      href={path.href}
                      className="group inline-flex items-center text-sm text-white/70 transition-colors duration-200 hover:text-primary"
                    >
                      <span className="mr-2 h-px w-0 bg-primary transition-all duration-200 group-hover:w-3" />
                      {path.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Paths column */}
            <div>
              <h4 id="footer-special-paths" className="text-xs font-semibold uppercase tracking-wider text-white/40 sm:text-sm">
                Special Paths
              </h4>
              <ul aria-labelledby="footer-special-paths" className="mt-4 space-y-3">
                {specialPaths.map((path) => (
                  <li key={path.name}>
                    <Link
                      href={path.href}
                      className={`group inline-flex items-center text-sm transition-all duration-200 ${path.color}`}
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:scale-125" />
                      {path.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40 sm:text-sm">
            © {new Date().getFullYear()} Neothink. All rights reserved.
          </p>
          <p className="text-center font-serif text-sm italic text-white/60 sm:text-base">
            We make it possible.{" "}
            <span className="font-semibold not-italic text-primary">
              Prosper Happily Forever.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
