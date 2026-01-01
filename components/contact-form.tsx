"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions"

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
)

const CheckCircle2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-auto mb-6 text-primary"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    const newErrors: Record<string, string> = {}
    if (!name || name.length < 2) newErrors.name = "Name must be at least 2 characters"
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email"
    if (!phone || !/^[\d\s\-+()]{10,}$/.test(phone)) newErrors.phone = "Please enter a valid phone number"
    if (!message || message.length < 10) newErrors.message = "Message must be at least 10 characters"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    const result = await submitContactForm(formData)
    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      e.currentTarget.reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } else if (result.error) {
      setErrors({ server: result.error })
    }
  }

  return (
    <section id="contact" className="scroll-mt-8 border-b border-primary/20 bg-black py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border-2 border-primary/30 bg-primary/10 px-5 py-3 text-base font-bold text-primary sm:mb-8 sm:px-6 sm:py-3.5 sm:text-lg">
              <MailIcon />
              Get in Touch
            </div>
            <h2 className="mb-4 text-balance font-serif text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl">
              Questions or Feedback?
            </h2>
            <p className="text-pretty text-lg text-white/80 sm:text-xl lg:text-2xl">Reach out to the administrators.</p>
          </div>
          <Card className="border-l-4 border-l-primary border-y border-r border-zinc-700 bg-zinc-900/50 p-6 sm:p-8 lg:p-12 rounded-2xl">
            {isSuccess ? (
              <div className="py-12 text-center sm:py-16" role="status" aria-live="polite">
                <CheckCircle2Icon />
                <h3 className="mb-3 font-serif text-2xl font-bold text-white sm:text-3xl">Thank You!</h3>
                <p className="text-pretty text-lg text-white/80 sm:text-xl">
                  Your message has been received. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                {errors.server && (
                  <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
                    <p className="text-base font-semibold text-red-400">{errors.server}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-bold text-white sm:text-lg">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className="bg-black/50 text-lg text-white h-14 border-2 border-zinc-600 rounded-xl transition-all duration-200 focus-visible:ring-primary focus-visible:border-primary sm:h-16 sm:text-xl placeholder:text-white/50"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-base font-semibold text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-bold text-white sm:text-lg">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="bg-black/50 text-lg text-white h-14 border-2 border-zinc-600 rounded-xl transition-all duration-200 focus-visible:ring-primary focus-visible:border-primary sm:h-16 sm:text-xl placeholder:text-white/50"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-base font-semibold text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-bold text-white sm:text-lg">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    autoComplete="tel"
                    className="bg-black/50 text-lg text-white h-14 border-2 border-zinc-600 rounded-xl transition-all duration-200 focus-visible:ring-primary focus-visible:border-primary sm:h-16 sm:text-xl placeholder:text-white/50"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-base font-semibold text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-bold text-white sm:text-lg">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    rows={5}
                    className="resize-none bg-black/50 text-lg text-white border-2 border-zinc-600 rounded-xl transition-all duration-200 focus-visible:ring-primary focus-visible:border-primary sm:text-xl placeholder:text-white/50"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-base font-semibold text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg font-bold h-14 bg-gradient-to-r from-[#FFED4E] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37] rounded-xl transition-all duration-300 sm:text-xl sm:h-16"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendIcon />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
