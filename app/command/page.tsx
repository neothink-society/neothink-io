import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Command | Neothink+",
  description: "The ecosystem of ventures, enterprises, and industries built by Neothink members—where individual mastery and collective movement create lasting economic value.",
  alternates: {
    canonical: "https://neothink.io/command",
  },
}

export default function CommandPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-20 text-center sm:py-28 lg:py-36">
              <p className="mb-4 text-base font-bold uppercase tracking-[0.2em] text-primary sm:text-lg">
                General Path
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Neothink Command
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                The ecosystem of ventures, enterprises, and industries—where value creation becomes economic reality.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-invert mx-auto">
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">What is Command?</h2>
                <p className="text-white/70">
                  Neothink Command is the economic expression of everything we build. While Fellowship develops individuals and Movement builds collective structures, Command is where value creation becomes tangible—an ecosystem of ventures, enterprises, and industries created by and for integrated thinkers.
                </p>
                <p className="text-white/70">
                  This isn&apos;t about traditional business for its own sake. Command represents the economic engine that funds our Movement and rewards our Fellowship members for their growth and contributions.
                </p>

                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">The Three Layers</h2>

                <div className="mt-6 space-y-8">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Ventures</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Early-Stage Value Creation</p>
                    <p className="mt-3 text-white/70">
                      New ideas becoming reality. Ventures are the startups and projects launched by Fellowship members—experiments in value creation backed by the knowledge and network of the Neothink ecosystem. Some will grow, some will pivot, all will teach.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Enterprises</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Scaled Value Creation</p>
                    <p className="mt-3 text-white/70">
                      Proven ventures that have found their market. Enterprises are established businesses with sustainable revenue, growing teams, and meaningful impact. They provide employment, opportunity, and resources for the broader Movement.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Industries</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Systemic Value Creation</p>
                    <p className="mt-3 text-white/70">
                      Entire sectors shaped by Neothink enterprises. When enough ventures become enterprises in related domains, they form industries—complete ecosystems of value creation that can rival or replace existing structures. This is where real transformation happens.
                    </p>
                  </div>
                </div>

                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">How It Connects</h2>
                <p className="text-white/70">
                  Command doesn&apos;t exist in isolation. Fellowship members start ventures. Movement communities support enterprises. Industries fund the growth of both. It&apos;s a self-reinforcing cycle: better people build better businesses, better businesses fund better development, better development creates better people.
                </p>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to take Command?
                </p>
                <Link
                  href="https://community.neothink.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-10 py-5 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37] sm:text-xl"
                >
                  Enter the Community
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
