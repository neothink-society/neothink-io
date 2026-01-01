"use client"

interface FooterProps {
  onPathClick: (path: string) => void
}

export function Footer({ onPathClick }: FooterProps) {
  const paths = [
    { name: "Ascenders", color: "decoration-orange-500 hover:text-orange-400" },
    { name: "Neothinkers", color: "decoration-amber-500 hover:text-amber-400" },
    { name: "Immortals", color: "decoration-red-500 hover:text-red-400" },
    { name: "Superachievers", color: "decoration-yellow-500 hover:text-yellow-400" },
  ]

  return (
    <footer className="border-t-2 border-primary/30 bg-black">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-serif text-2xl italic text-primary sm:mb-5 sm:text-3xl lg:text-4xl">
              Neothink.io
            </h3>
            <p className="mb-6 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:mb-8 sm:text-lg">
              Admin of the values provided by Mark Hamilton, Wallace Hamilton, and the Neothink Society.
            </p>
            <p className="text-sm text-white/60 sm:text-base">
              © {new Date().getFullYear()} Neothink. All rights reserved.
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4 className="mb-5 text-base font-bold text-primary sm:mb-6 sm:text-lg">Links</h4>
            <ul className="space-y-4 text-base sm:space-y-5 sm:text-lg">
              <li>
                <a
                  href="https://markhamilton.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors duration-300 hover:text-white"
                >
                  Mark Hamilton
                </a>
              </li>
              <li>
                <a
                  href="https://neothink.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors duration-300 hover:text-white"
                >
                  Neothink Society
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 transition-colors duration-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Paths column */}
          <div>
            <h4 className="mb-5 text-base font-bold text-primary sm:mb-6 sm:text-lg">Paths</h4>
            <ul className="space-y-4 text-base sm:space-y-5 sm:text-lg">
              {paths.map((path) => (
                <li key={path.name}>
                  <button
                    onClick={() => onPathClick(path.name)}
                    className={`text-left text-white/80 transition-colors duration-300 underline decoration-2 underline-offset-4 ${path.color}`}
                  >
                    {path.name}
                  </button>
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
