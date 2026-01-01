import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Neothink.io",
  description: "Get in touch with the Neothink.io team. Questions about Ascenders, Neothinkers, Immortals, or Superachievers? We're here to help.",
}

const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "admin@neothink.io",
    href: "mailto:admin@neothink.io",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    label: "GitHub",
    value: "neothink-society",
    href: "https://github.com/neothink-society",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    label: "Facebook",
    value: "Neothink",
    href: "https://www.facebook.com/neothink",
  },
]

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

        {/* Contact Methods */}
        <section className="border-b border-primary/20 bg-zinc-950 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-3">
                {contactMethods.map((method) => (
                  <Link
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-primary/50 hover:bg-zinc-900"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{method.label}</p>
                      <p className="font-medium text-white">{method.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* FAQ Preview */}
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
                  About Neothink.io
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
