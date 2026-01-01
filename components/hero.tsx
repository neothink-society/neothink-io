import Link from "next/link"
import { Button } from "@/components/ui/button"

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

const UserCircleIcon = () => (
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
    className="mr-3"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
  </svg>
)

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-primary/20 bg-black">
      {/* Radial gradient for section highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border-2 border-primary/50 bg-primary/10 px-5 py-3 text-base font-bold text-primary sm:mb-10 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-lg">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-primary" />
            </span>
            Admin of Neothink
          </div>

          <h1 className="mb-6 text-balance font-serif text-4xl font-bold tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-6xl xl:text-7xl">
            We Make It <span className="text-primary">Possible</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/90 sm:mb-12 sm:text-xl lg:text-2xl">
            Members, mentees, mentors, and masters of the secrets, visions, and powers offered by{" "}
            <span className="font-bold text-white">Neothink</span>. Bringing the integrated thinking of{" "}
            <span className="font-bold text-white">Mark Hamilton</span> and the{" "}
            <span className="font-bold text-white">Neothink Society</span> directly to you.
          </p>

          <p className="mx-auto mb-10 text-xl font-bold text-primary sm:mb-12 sm:text-2xl">
            Prosper Happily Forever — Go Further, Faster, Forever
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:gap-6">
            <Button
              size="lg"
              asChild
              className="group relative w-full max-w-[320px] overflow-hidden rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-8 py-7 text-lg font-bold tracking-wide text-black transition-all duration-300 hover:from-[#FFD700] hover:to-[#D4AF37] sm:px-10 sm:py-8 sm:text-xl"
            >
              <Link href="https://community.neothink.io" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center justify-center">
                  <UserCircleIcon />
                  Login to Community
                </span>
              </Link>
            </Button>

            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group w-full max-w-[200px] rounded-xl border-2 border-primary/50 bg-transparent px-6 py-6 text-base font-bold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 sm:w-auto sm:px-8 sm:py-7 sm:text-lg"
              >
                <Link href="https://markhamilton.co" target="_blank" rel="noopener noreferrer">
                  Mark Hamilton
                  <ExternalLinkIcon />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="group w-full max-w-[200px] rounded-xl bg-primary px-6 py-6 text-base font-bold text-black transition-all duration-300 hover:bg-primary/90 sm:w-auto sm:px-8 sm:py-7 sm:text-lg"
              >
                <Link href="https://neothink.com" target="_blank" rel="noopener noreferrer">
                  Neothink Society
                  <ExternalLinkIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
