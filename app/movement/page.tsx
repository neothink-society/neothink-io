import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Movement | Neothink+",
  description: "The Neothink Movement represents the collective force of integrated thinkers working to advance human consciousness and civilization.",
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
                The collective force of integrated thinkers advancing human consciousness, value creation, and civilization itself.
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
                  The Neothink Movement is the dynamic expression of integrated thinkers in action. While the Revolution represents the internal shift and the Fellowship represents the community, the Movement represents the external impact—the actual advancement of human potential and civilization.
                </p>
                <p className="text-white/70">
                  Every civilization-advancing breakthrough in history came from individuals who thought integratively—who could see connections others missed and create values others couldn&apos;t imagine. The Movement channels this capability toward the challenges and opportunities of our time.
                </p>
                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">Movement Principles</h2>
                <ul className="space-y-3 text-white/70">
                  <li><strong className="text-white">Action Over Theory</strong> — Ideas matter, but creation matters more</li>
                  <li><strong className="text-white">Individual Sovereignty</strong> — Each person owns their life and choices</li>
                  <li><strong className="text-white">Value-Based Progress</strong> — Advancement through creation, not destruction</li>
                  <li><strong className="text-white">Long-Term Vision</strong> — Building for generations, not just quarters</li>
                </ul>
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
