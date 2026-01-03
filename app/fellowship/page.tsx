import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Fellowship | Neothink+",
  description: "Progress as an individual through the Neothink Fellowship—from Academy to University to Institute, transforming from member to mentee to mentor to master.",
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
                Your individual progression through the levels of mastery—from member to mentee to mentor to master.
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
                  The Neothink Fellowship is your path of individual progression. While the Revolution shows you the overview and the Movement focuses on collective advancement, Fellowship is about your personal transformation—growing from a new member into a master of integrated thinking.
                </p>
                <p className="text-white/70">
                  This isn&apos;t passive learning. Each stage represents a deepening commitment to value creation and a growing capacity to help others on their journey.
                </p>

                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">The Three Stages</h2>

                <div className="mt-6 space-y-8">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Academy</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Member → Mentee</p>
                    <p className="mt-3 text-white/70">
                      Your foundation. In the Academy, you absorb the core principles of Neothink—integrated thinking, value creation, self-leadership. You begin as a member and through study and practice, you become a mentee ready to receive deeper guidance.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">University</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Mentee → Mentor</p>
                    <p className="mt-3 text-white/70">
                      Your expansion. In the University, you deepen your understanding and begin applying Neothink principles to create real value. As you grow from mentee to mentor, you gain the ability to guide others through their Academy journey.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Institute</h3>
                    <p className="mt-2 text-sm uppercase tracking-wider text-white/40">Mentor → Master</p>
                    <p className="mt-3 text-white/70">
                      Your mastery. In the Institute, you refine your capabilities to their highest expression. You transition from mentor to master—someone who not only creates value and guides others but helps shape the direction of the entire Fellowship.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="mb-8 text-lg text-white/60">
                  Ready to begin your Fellowship?
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
