import Link from "next/link"

export function Footer() {
  const paths = [
    { name: "Unlock The Wealthy Ascender", color: "text-orange-400 hover:text-orange-300", href: "/blog/the-ascender-path" },
    { name: "Unlock The Happy Neothinker", color: "text-amber-400 hover:text-amber-300", href: "/blog/the-neothinker-path" },
    { name: "Unlock The Healthy Immortal", color: "text-red-400 hover:text-red-300", href: "/blog/the-immortal-path" },
    { name: "Unlock The Lucky Superachiever", color: "text-yellow-400 hover:text-yellow-300", href: "/blog/the-superachiever-path" },
  ]

  const explore = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="border-t-2 border-primary/30 bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block text-2xl font-bold text-primary sm:mb-5 sm:text-3xl lg:text-4xl">
              Neothink+
            </Link>
            <p className="mb-6 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:mb-8 sm:text-lg">
              The administrative gateway to the values provided by Mark Hamilton, Wallace Hamilton, and the Neothink Society.
            </p>
            <p className="text-sm text-white/60 sm:text-base">
              © {new Date().getFullYear()} Neothink. All rights reserved.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="mb-5 text-base font-bold text-primary sm:mb-6 sm:text-lg">Explore</h4>
            <ul className="space-y-4 text-base sm:space-y-5 sm:text-lg">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Paths column */}
          <div>
            <h4 className="mb-5 text-base font-bold text-primary sm:mb-6 sm:text-lg">Paths</h4>
            <ul className="space-y-4 text-base sm:space-y-5 sm:text-lg">
              {paths.map((path) => (
                <li key={path.name}>
                  <Link
                    href={path.href}
                    className={`transition-colors duration-300 ${path.color}`}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-primary/20 pt-8 text-center sm:mt-18 sm:pt-10">
          <p className="font-serif text-base italic text-white/80 sm:text-lg lg:text-xl">
            We make it possible. <span className="font-bold not-italic text-primary">Prosper Happily Forever.</span>
          </p>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            Go Further, Faster, Forever
          </p>
        </div>
      </div>
    </footer>
  )
}
