import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Movement | Neothink+",
  description: "Progress as a collective through the Neothink Movement—from Company to Community to Country, evolving from startup society to network union to network archipelago to network state.",
  alternates: {
    canonical: "https://neothink.io/movement",
  },
}

export default function MovementPage() {
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
                Neothink Movement
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                Our collective progression—from startup society to network state, building new structures for human flourishing.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-invert mx-auto">
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">What is the Movement?</h2>
                <p className="text-white/70">
                  The Neothink Movement is our path of collective progression. While Fellowship tracks your individual growth from member to master, Movement tracks our shared evolution from a small group of value creators into something far more significant—a new kind of society.
                </p>
                <p className="text-white/70">
                  This isn&apos;t about politics or ideology. It&apos;s about building real structures that support prosperity, happiness, and longevity for integrated thinkers worldwide.
                </p>

                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">The Three Stages</h2>

                <div className="mt-6 space-y-8">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Company</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Startup Society → Network Union</p>
                    <p className="mt-3 text-white/70">
                      Our foundation. We begin as a startup society—a small group united by shared principles and purpose. Through collaboration and value creation, we grow into a network union: a connected web of individuals and ventures working toward common goals.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Community</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Network Union → Network Archipelago</p>
                    <p className="mt-3 text-white/70">
                      Our expansion. The network union grows into a network archipelago—multiple interconnected communities across geographies, each with its own character but all sharing the Neothink foundation. We develop shared resources, governance, and identity.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Country</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Network Archipelago → Network State</p>
                    <p className="mt-3 text-white/70">
                      Our destination. The network archipelago consolidates into a network state—a recognized entity with its own territory, governance, and international standing. A new kind of country built by and for integrated thinkers and value creators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to join the Movement?
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
