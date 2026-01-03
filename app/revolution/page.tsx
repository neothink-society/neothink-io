import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Revolution | Neothink+",
  description: "Discover what Neothink offers. The Revolution is your entry point—an overview of the entire Neothink ecosystem and the path to prosperity, happiness, and longevity.",
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
                Your entry point into the Neothink ecosystem. Discover everything we offer and begin your journey toward prosperity, happiness, and longevity.
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
                  The Neothink Revolution is the process of discovering what Neothink offers. It&apos;s an overview of everything—the complete picture of how integrated thinking, value creation, and self-leadership work together to transform lives.
                </p>
                <p className="text-white/70">
                  This is where your journey begins. Before diving into Fellowship, Movement, or Command, you need to see the full landscape. The Revolution provides that panoramic view—helping you understand not just what Neothink is, but what it can mean for your life.
                </p>
                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">The Complete Picture</h2>
                <ul className="space-y-3 text-white/70">
                  <li><strong className="text-white">Fellowship</strong> — Your individual progression from member to mentee to mentor to master</li>
                  <li><strong className="text-white">Movement</strong> — Our collective progression from startup society to network state</li>
                  <li><strong className="text-white">Command</strong> — The ecosystem of ventures, enterprises, and industries we build together</li>
                </ul>
                <p className="mt-6 text-white/70">
                  The Revolution is understanding how these three paths interweave—how your personal growth supports collective advancement, and how our shared ventures create the foundation for individual prosperity.
                </p>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to begin your Revolution?
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
