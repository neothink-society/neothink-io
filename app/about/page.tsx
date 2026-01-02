import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Neothink+",
  description: "After 50+ years as an underground success network, Neothink is now public. Learn about our mission to create value creators, integrated thinkers, and self-leaders.",
}

const founders = [
  {
    name: "Dr. Frank R. Wallace",
    role: "Founder of Neo-Tech (1932-2006)",
    description: "Former Senior Research Chemist at DuPont who resigned in 1972 to dedicate his life to curing the \"disease of irrationality.\" Founded I & O Publishing in 1968 and developed the Neo-Tech framework for integrated honesty and value creation.",
    years: "1968-2006",
    initial: "FW",
    color: "amber",
  },
  {
    name: "Mark Hamilton",
    role: "Founder of Neothink Society",
    description: "Author of over 30 works including the 1,100-page Superpuzzle. Identified the Division of Essence and has spent 40+ years developing systems that transform minds to operate at genius level. Made the historic decision to go public in 2024.",
    years: "1986-Present",
    link: "https://markhamilton.co",
    initial: "MH",
    color: "primary",
  },
  {
    name: "Wallace Hamilton",
    role: "Director of Operations",
    description: "Third-generation leader applying integrated thinking to modern technology and the digital infrastructure powering Ascension, Neothink University, and Immortalis.",
    years: "2007-Present",
    initial: "WH",
    color: "orange",
  },
]

const timeline = [
  { year: "1968", event: "Dr. Frank R. Wallace founds I & O Publishing, beginning research into integrated thinking" },
  { year: "1980", event: "Neo-Tech brand formally emerges as a philosophy of integrated honesty" },
  { year: "1981", event: "Publication of 'The Neo-Tech Discovery' - foundational work" },
  { year: "1986", event: "Mark Hamilton joins the movement, beginning four decades of work" },
  { year: "2006", event: "Dr. Wallace passes, leadership transition to Mark Hamilton begins" },
  { year: "2007", event: "Mark Hamilton founds the Neothink Society and TVP movement" },
  { year: "2024", event: "Public launch of Ascension, Neothink University, and Immortalis platforms" },
  { year: "2025", event: "Neothink+ launches as the administrative gateway" },
]

const stats = [
  { value: "50+", label: "Years of Research" },
  { value: "30+", label: "Published Works" },
  { value: "140+", label: "Countries Reached" },
  { value: "3", label: "Generations of Leaders" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-20 text-center sm:py-28 lg:py-36 xl:py-40">
              <p className="mb-4 text-base font-bold uppercase tracking-[0.2em] text-primary sm:text-lg">
                Our Story
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:mb-8 sm:text-5xl lg:text-6xl xl:text-7xl">
                Building the Future of Human Potential
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                After 50+ years operating as an underground success network, we are passing the keys
                to the kingdom to a new generation of value creators, integrated thinkers, and self-leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-zinc-800/50 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-12 sm:py-16">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60 sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center sm:mb-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                  Our Mission
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Preserving Human Consciousness
                </h2>
              </div>
              <div className="space-y-8 text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
                <p>
                  We are the architects of a self-evolutionary movement focused on preserving the ultimate
                  value in the universe: <span className="font-semibold text-white">human consciousness</span>.
                </p>
                <p>
                  Our mission is to transform individuals from the "following mode" into self-leaders who
                  create value, think integratively, and control their own destiny.
                </p>
                <p>
                  Through four integrated platforms—<span className="font-bold text-orange-400">Ascension</span> for prosperity,{" "}
                  <span className="font-bold text-amber-400">Neothink University</span> for happiness,{" "}
                  <span className="font-bold text-red-400">Immortalis</span> for longevity, and{" "}
                  <span className="font-bold text-yellow-400">Prime Literature</span> for foundational knowledge—we
                  provide the education, tools, and community to help you prosper happily forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="border-y border-zinc-800/50 bg-zinc-950/50 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center sm:mb-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                  Leadership
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Three Generations of Vision
                </h2>
              </div>
              <div className="space-y-6 sm:space-y-8">
                {founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 transition-all duration-300 hover:border-primary/30 sm:p-10 lg:p-12"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                      <div className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl ${
                        founder.color === 'primary' ? 'bg-primary/10' :
                        founder.color === 'amber' ? 'bg-amber-500/10' : 'bg-orange-500/10'
                      }`}>
                        <span className={`font-serif text-2xl font-bold ${
                          founder.color === 'primary' ? 'text-primary' :
                          founder.color === 'amber' ? 'text-amber-400' : 'text-orange-400'
                        }`}>
                          {founder.initial}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                          <div>
                            <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                              {founder.link ? (
                                <Link
                                  href={founder.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="transition-colors hover:text-primary"
                                >
                                  {founder.name}
                                </Link>
                              ) : (
                                founder.name
                              )}
                            </h3>
                            <p className={`mt-1 text-base font-semibold sm:text-lg ${
                              founder.color === 'primary' ? 'text-primary' :
                              founder.color === 'amber' ? 'text-amber-400' : 'text-orange-400'
                            }`}>
                              {founder.role}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-white/50 sm:text-base">{founder.years}</p>
                        </div>
                        <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                          {founder.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center sm:mb-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                  Our Journey
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  50+ Years of Innovation
                </h2>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 sm:left-1/2 sm:-translate-x-px" />

                <div className="space-y-10 sm:space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className={`relative flex items-start ${
                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-6 top-1.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-primary sm:left-1/2" />

                      {/* Content */}
                      <div className={`ml-14 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:ml-[calc(50%+2rem)] sm:pl-8"
                      }`}>
                        <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-primary/30 sm:p-8 ${
                          index % 2 === 0 ? "" : ""
                        }`}>
                          <p className="mb-2 font-serif text-3xl font-bold text-primary sm:text-4xl">
                            {item.year}
                          </p>
                          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                            {item.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-primary/20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-20 text-center sm:py-24 lg:py-32">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Begin Your Path Today
              </h2>
              <p className="mb-10 text-lg text-white/70 sm:text-xl lg:text-2xl">
                Discover which path aligns with your goals and connect with fellow value creators.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="https://community.neothink.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-10 py-5 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37] sm:w-auto sm:text-xl"
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary/50 px-10 py-5 text-lg font-bold text-white transition-all hover:border-primary hover:bg-primary/10 sm:w-auto sm:text-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
