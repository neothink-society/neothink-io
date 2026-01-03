import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PathNavigation } from "@/components/path-navigation"
import { BookOpen, GraduationCap, Crown } from "lucide-react"

export const metadata: Metadata = {
  title: "Neothink Fellowship | Neothink+",
  description: "Progress as an individual through the Neothink Fellowship—from Academy to University to Institute, transforming from member to mentee to mentor to master.",
  alternates: {
    canonical: "https://neothink.io/fellowship",
  },
}

const stageCards = [
  {
    icon: BookOpen,
    name: "Academy",
    progression: "Member → Mentee",
    description: "Your foundation in integrated thinking principles. Begin as a member and grow into a mentee ready for deeper guidance.",
    href: "/academy",
  },
  {
    icon: GraduationCap,
    name: "University",
    progression: "Mentee → Mentor",
    description: "Deepen understanding and apply Neothink principles. Grow from mentee to mentor, guiding others on their journey.",
    href: "/university",
  },
  {
    icon: Crown,
    name: "Institute",
    progression: "Mentor → Master",
    description: "Refine your capabilities to their highest expression. Become a master who shapes the direction of the Fellowship.",
    href: "/institute",
  },
]

export default function FellowshipPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-16 text-center sm:py-20 lg:py-24">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                General Path
              </p>
              <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Neothink Fellowship
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
                Your individual progression through the levels of mastery
              </p>
            </div>
          </div>
        </section>

        {/* Path Navigation */}
        <PathNavigation />

        {/* Overview */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                The Fellowship is your path of{" "}
                <span className="text-white">individual transformation</span>—growing
                from a new member into a master of integrated thinking through{" "}
                <span className="text-white">study</span>,{" "}
                <span className="text-white">practice</span>, and{" "}
                <span className="text-white">mentorship</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Stage Cards */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-10 text-center font-serif text-2xl font-bold text-white sm:mb-12 sm:text-3xl">
                The Three Stages
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {stageCards.map((card) => (
                  <Link
                    key={card.name}
                    href={card.href}
                    className="group relative overflow-hidden rounded-2xl border-l-4 border-primary bg-gradient-to-br from-zinc-900/80 via-zinc-900 to-black p-6 transition-all duration-300 hover:border-primary/80 hover:from-zinc-800/80 sm:p-8"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-1 font-serif text-xl font-bold text-primary sm:text-2xl">
                      {card.name}
                    </h3>
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
                      {card.progression}
                    </p>
                    <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span>Learn more</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-primary/20 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-6 text-lg text-white/60">
                Ready to begin your Fellowship?
              </p>
              <Link
                href="https://community.neothink.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:from-[#FFD700] hover:to-[#D4AF37] sm:px-10 sm:py-5"
              >
                Enter the Community
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
