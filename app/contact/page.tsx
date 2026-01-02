import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Neothink+",
  description: "Get in touch with the Neothink+ team. Questions about Ascenders, Neothinkers, Immortals, or Superachievers? We're here to help.",
  alternates: {
    canonical: "https://neothink.io/contact",
  },
}

const pathLinks = [
  {
    name: "Ascenders",
    description: "Business & Prosperity",
    color: "orange",
    href: "/blog/the-ascender-path",
  },
  {
    name: "Neothinkers",
    description: "Mind & Happiness",
    color: "amber",
    href: "/blog/the-neothinker-path",
  },
  {
    name: "Immortals",
    description: "Longevity & Health",
    color: "red",
    href: "/blog/the-immortal-path",
  },
  {
    name: "Superachievers",
    description: "Mastery & Integration",
    color: "yellow",
    href: "/blog/the-superachiever-path",
  },
]

export default function ContactPage() {
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
                Contact Us
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:mb-8 sm:text-5xl lg:text-6xl xl:text-7xl">
                We're Here to Help
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                Have questions about the Neothink paths or want to learn more about
                becoming a value creator? Reach out and we'll guide you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Path Links */}
        <section className="border-t border-zinc-800/50 bg-zinc-950/50 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center sm:mb-16">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary sm:text-base">
                  Explore the Paths
                </p>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Which Path Calls to You?
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {pathLinks.map((path) => (
                  <Link
                    key={path.name}
                    href={path.href}
                    className={`group flex flex-col items-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all duration-300 hover:bg-zinc-900 sm:p-8 ${
                      path.color === 'orange' ? 'hover:border-orange-500/50' :
                      path.color === 'amber' ? 'hover:border-amber-500/50' :
                      path.color === 'red' ? 'hover:border-red-500/50' : 'hover:border-yellow-500/50'
                    }`}
                  >
                    <h3 className={`mb-2 font-serif text-xl font-bold transition-colors sm:text-2xl ${
                      path.color === 'orange' ? 'text-orange-400 group-hover:text-orange-300' :
                      path.color === 'amber' ? 'text-amber-400 group-hover:text-amber-300' :
                      path.color === 'red' ? 'text-red-400 group-hover:text-red-300' : 'text-yellow-400 group-hover:text-yellow-300'
                    }`}>
                      {path.name}
                    </h3>
                    <p className="text-sm text-white/60 sm:text-base">{path.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-primary/20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-20 text-center sm:py-24 lg:py-32">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Begin?
              </h2>
              <p className="mb-10 text-lg text-white/70 sm:text-xl lg:text-2xl">
                Learn about our 50+ year history and connect with fellow value creators.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-10 py-5 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37] sm:w-auto sm:text-xl"
                >
                  Our Story
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex w-full items-center justify-center rounded-xl border-2 border-primary/50 px-10 py-5 text-lg font-bold text-white transition-all hover:border-primary hover:bg-primary/10 sm:w-auto sm:text-xl"
                >
                  Read the Blog
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
