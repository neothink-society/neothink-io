import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Revolution | Neothink+",
  description: "The Neothink Revolution represents the fundamental shift in human consciousness—from follower-mode to self-leader, from consumer to creator, from passenger to driver.",
  alternates: {
    canonical: "https://neothink.io/revolution",
  },
}

export default function RevolutionPage() {
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
                Neothink Revolution
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                The fundamental shift in human consciousness—from follower-mode to self-leader, from consumer to creator, from passenger to driver.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-invert mx-auto">
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">What is the Revolution?</h2>
                <p className="text-white/70">
                  The Neothink Revolution isn&apos;t a political movement or social cause. It&apos;s something far more fundamental: the awakening of integrated thinking in individuals who refuse to accept the limitations imposed by external authorities.
                </p>
                <p className="text-white/70">
                  Throughout history, humanity has been trapped in a cycle of following—looking to leaders, institutions, and traditions for answers that can only come from within. The Revolution breaks this cycle by developing self-leaders who think for themselves, create values for society, and prosper through their own integrated efforts.
                </p>
                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">The Core Shift</h2>
                <ul className="space-y-3 text-white/70">
                  <li><strong className="text-white">From Following to Leading</strong> — Becoming the authority in your own life</li>
                  <li><strong className="text-white">From Consuming to Creating</strong> — Adding value instead of just extracting it</li>
                  <li><strong className="text-white">From Reacting to Integrating</strong> — Seeing the whole picture, not just fragments</li>
                  <li><strong className="text-white">From Stagnation to Growth</strong> — Continuous evolution through value creation</li>
                </ul>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to join the Revolution?
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
