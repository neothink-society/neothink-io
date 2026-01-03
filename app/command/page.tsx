import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Neothink Command | Neothink+",
  description: "Neothink Command represents the mastery of self-leadership—taking full command of your life, work, and destiny through integrated thinking.",
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
                The mastery of self-leadership—taking full command of your life, work, and destiny through integrated thinking.
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
                  Neothink Command is the state of complete self-leadership. It&apos;s not about commanding others—it&apos;s about taking command of yourself. Your mind. Your work. Your direction. Your destiny.
                </p>
                <p className="text-white/70">
                  Most people drift through life reacting to circumstances, following others&apos; agendas, hoping things work out. Someone in Command has eliminated this passive approach. They&apos;ve become the captain of their ship—setting the course, adjusting for conditions, and reaching destinations of their own choosing.
                </p>
                <h2 className="mt-12 font-serif text-2xl font-bold text-white sm:text-3xl">Command Attributes</h2>
                <ul className="space-y-3 text-white/70">
                  <li><strong className="text-white">Self-Authority</strong> — You are the final decision-maker in your life</li>
                  <li><strong className="text-white">Directional Clarity</strong> — You know where you&apos;re going and why</li>
                  <li><strong className="text-white">Execution Power</strong> — You convert decisions into reality</li>
                  <li><strong className="text-white">Adaptive Mastery</strong> — You adjust to conditions without losing course</li>
                </ul>
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
