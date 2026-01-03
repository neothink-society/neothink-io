import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Fellowship | Neothink+",
  description: "The Neothink Fellowship connects value creators, integrated thinkers, and self-leaders in a community of mutual growth and support.",
  alternates: {
    canonical: "https://neothink.io/fellowship",
  },
}

export default function FellowshipPage() {
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
                Neothink Fellowship
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                A community of value creators, integrated thinkers, and self-leaders united by the pursuit of prosperity, happiness, and longevity.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-invert mx-auto">
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">What is the Fellowship?</h2>
                <p className="text-white/70">
                  The Neothink Fellowship is more than a network—it&apos;s a living ecosystem of individuals committed to integrated thinking and value creation. Here, you&apos;ll find others who understand the journey from follower to self-leader.
                </p>
                <p className="text-white/70">
                  Unlike traditional communities built around shared consumption or complaint, the Fellowship is built around shared creation. Members support each other&apos;s growth while pursuing their own Friday-Night Essence—the productive passion that drives authentic prosperity.
                </p>
                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">Fellowship Values</h2>
                <ul className="space-y-3 text-white/70">
                  <li><strong className="text-white">Value Creation</strong> — Members contribute more than they take</li>
                  <li><strong className="text-white">Integrated Thinking</strong> — Wide-scope perspective over narrow specialization</li>
                  <li><strong className="text-white">Self-Leadership</strong> — Each member is the authority in their own life</li>
                  <li><strong className="text-white">Mutual Growth</strong> — Rising together through shared knowledge and support</li>
                </ul>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to join the Fellowship?
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
