import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Neothink+",
  description: "Get in touch with the Neothink+ team. Questions about Ascenders, Neothinkers, Immortals, or Superachievers? We're here to help.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-base font-bold uppercase tracking-wider text-primary sm:text-lg">Contact</p>
              <h1 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
                Have questions about the Neothink paths or want to learn more?
                We're here to help you on your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* CTA */}
        <section className="border-t border-primary/20 bg-zinc-950 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                Looking for More Information?
              </h2>
              <p className="mb-8 text-base text-white/70 sm:text-lg">
                Learn about our history, the Neothink philosophy, and the four paths to fulfillment.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-6 py-3 text-base font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37]"
                >
                  About Neothink+
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-primary/50 px-6 py-3 text-base font-bold text-white transition-all hover:border-primary hover:bg-primary/10"
                >
                  Read Insights
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
