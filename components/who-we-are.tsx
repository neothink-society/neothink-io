import Link from "next/link"
import { Button } from "@/components/ui/button"

const LogInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-3"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" x2="3" y1="12" y2="12" />
  </svg>
)

export function WhoWeAre() {
  return (
    <section className="border-b border-primary/20 bg-gradient-to-b from-primary/5 via-black to-black">
      <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-balance font-serif text-2xl font-bold tracking-tight text-primary sm:mb-8 sm:text-3xl lg:text-4xl xl:text-5xl">
            Some people refuse to settle for an ordinary life.
          </h2>

          <p className="mx-auto mb-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/90 sm:mb-8 sm:text-xl lg:text-2xl">
            They become <span className="font-bold text-white">value creators</span> who build what others only dream about.{" "}
            <span className="font-bold text-white">Integrated thinkers</span> who see connections invisible to everyone else.{" "}
            <span className="font-bold text-white">Self-leaders</span> who answer to no authority but their own judgment.{" "}
            If that sounds like who you were meant to be—you&apos;re in the right place.
          </p>

          <div className="mx-auto mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 sm:gap-4">
            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold text-orange-400 sm:px-5 sm:py-2 sm:text-base">
              The Wealthy Ascender
            </span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-400 sm:px-5 sm:py-2 sm:text-base">
              The Happy Neothinker
            </span>
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-bold text-red-400 sm:px-5 sm:py-2 sm:text-base">
              The Healthy Immortal
            </span>
            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-bold text-yellow-400 sm:px-5 sm:py-2 sm:text-base">
              The Lucky Superachiever
            </span>
          </div>

          <Button
            size="lg"
            asChild
            className="group relative w-full max-w-[240px] overflow-hidden rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-10 py-7 text-lg font-bold tracking-wide text-black transition-all duration-300 hover:from-[#FFD700] hover:to-[#D4AF37] sm:py-8 sm:text-xl"
          >
            <Link href="https://community.neothink.io" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center">
                Sign In
                <LogInIcon />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
