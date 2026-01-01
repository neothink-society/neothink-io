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
  },
  {
    name: "Mark Hamilton",
    role: "Founder of Neothink Society",
    description: "Author of over 30 works including the 1,100-page Superpuzzle. Identified the Division of Essence and has spent 40+ years developing systems that transform minds to operate at genius level. Made the historic decision to go public in 2024.",
    years: "1986-Present",
    link: "https://markhamilton.co",
  },
  {
    name: "Wallace Hamilton",
    role: "Director of Operations",
    description: "Third-generation leader applying integrated thinking to modern technology and the digital infrastructure powering Ascension, Neothink University, and Immortalis.",
    years: "2007-Present",
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black py-20 sm:py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-base font-bold uppercase tracking-wider text-primary sm:text-lg">About</p>
              <h1 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Neothink+
              </h1>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
                After 50+ years operating as an underground success network, we are passing the keys
                to the kingdom to a new generation of value creators, integrated thinkers, and self-leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="border-b border-primary/20 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 font-serif text-3xl font-bold text-white sm:text-4xl">Our Mission</h2>
              <div className="space-y-6 text-lg leading-relaxed text-white/80">
                <p>
                  We are the architects of a self-evolutionary movement focused on preserving the ultimate
                  value in the universe: human consciousness. Our mission is to transform individuals from
                  the "following mode" into self-leaders who create value, think integratively, and control
                  their own destiny.
                </p>
                <p>
                  Through four integrated platforms—<span className="font-bold text-orange-400">Ascension</span> for business,
                  <span className="font-bold text-amber-400"> Neothink University</span> for the mind,
                  <span className="font-bold text-red-400"> Immortalis</span> for longevity, and the
                  <span className="font-bold text-yellow-400"> Prime Literature</span> for foundational knowledge—we
                  provide the education, tools, and community to help you prosper happily forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="border-b border-primary/20 bg-zinc-950 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white sm:text-4xl">
                Three Generations of Leadership
              </h2>
              <div className="space-y-8">
                {founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                          {founder.link ? (
                            <Link
                              href={founder.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary"
                            >
                              {founder.name}
                            </Link>
                          ) : (
                            founder.name
                          )}
                        </h3>
                        <p className="mt-1 text-base font-medium text-primary">{founder.role}</p>
                      </div>
                      <p className="text-sm text-white/60">{founder.years}</p>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                      {founder.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-primary/20 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white sm:text-4xl">
                Our History
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-primary/30 sm:left-1/2" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className={`relative flex items-start gap-6 sm:gap-8 ${
                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary sm:left-1/2" />
                      <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                        <p className="text-2xl font-bold text-primary">{item.year}</p>
                        <p className="mt-2 text-base text-white/80">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl">
                Advance Your Path
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Discover which path aligns with your goals and deepen your practice.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#paths"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-8 py-4 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37]"
                >
                  Explore Paths
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-primary/50 px-8 py-4 text-lg font-bold text-white transition-all hover:border-primary hover:bg-primary/10"
                >
                  Get in Touch
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
