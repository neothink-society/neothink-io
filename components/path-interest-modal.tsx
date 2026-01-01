"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitPathInterest } from "@/app/actions"

const CheckCircle2Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

interface PathInterestModalProps {
  path: {
    title: string
    focus: string
    email: string
    icon: any
    color: string
  }
  isOpen: boolean
  onClose: () => void
}

const pathDescriptions = {
  Ascenders: "LIVE — Enjoy greater prosperity as a value creator. Access Ascension, FLOW, and the Ascenders community.",
  Neothinkers: "LOVE — Discover deeper happiness through integrated thinking. Access Neothink, Mark Hamilton content, and Neothinkers community.",
  Immortals: "LIFE — Embrace longevity through self-leadership. Access Immortalis, Project Life, and the Immortals community.",
  Superachievers: "LUCK — Master all paths with complete access to prosperity, happiness, longevity, and achievement.",
}

export function PathInterestModal({ path, isOpen, onClose }: PathInterestModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false)
        setErrors({})
      }, 300)
    }
  }, [isOpen])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    const newErrors: Record<string, string> = {}
    if (!name || name.length < 2) newErrors.name = "Name must be at least 2 characters"
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email"
    if (!phone || !/^[\d\s\-+()]{10,}$/.test(phone)) newErrors.phone = "Please enter a valid phone number"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    formData.append("path", path.title)
    formData.append("pathEmail", path.email)

    setIsSubmitting(true)
    const result = await submitPathInterest(formData)
    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    } else if (result.error) {
      setErrors({ server: result.error })
    }
  }

  const colorStyles = {
    orange: {
      border: "border-orange-500",
      bg: "bg-zinc-950",
      headerBg: "bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600",
      text: "text-white",
      iconBg: "bg-white/20 backdrop-blur-sm",
      button: "bg-orange-500 hover:bg-orange-400 text-black font-bold",
      checkmark: "text-orange-500",
      checkmarkBg: "bg-orange-500/20",
      inputFocus: "focus-visible:ring-orange-500 focus-visible:border-orange-500",
    },
    amber: {
      border: "border-amber-500",
      bg: "bg-zinc-950",
      headerBg: "bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600",
      text: "text-white",
      iconBg: "bg-white/20 backdrop-blur-sm",
      button: "bg-amber-500 hover:bg-amber-400 text-black font-bold",
      checkmark: "text-amber-500",
      checkmarkBg: "bg-amber-500/20",
      inputFocus: "focus-visible:ring-amber-500 focus-visible:border-amber-500",
    },
    red: {
      border: "border-red-500",
      bg: "bg-zinc-950",
      headerBg: "bg-gradient-to-br from-red-600 via-red-500 to-red-600",
      text: "text-white",
      iconBg: "bg-white/20 backdrop-blur-sm",
      button: "bg-red-500 hover:bg-red-400 text-white font-bold",
      checkmark: "text-red-500",
      checkmarkBg: "bg-red-500/20",
      inputFocus: "focus-visible:ring-red-500 focus-visible:border-red-500",
    },
    yellow: {
      border: "border-yellow-500",
      bg: "bg-zinc-950",
      headerBg: "bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-600",
      text: "text-black",
      iconBg: "bg-white/20 backdrop-blur-sm",
      button: "bg-yellow-500 hover:bg-yellow-400 text-black font-bold",
      checkmark: "text-yellow-500",
      checkmarkBg: "bg-yellow-500/20",
      inputFocus: "focus-visible:ring-yellow-500 focus-visible:border-yellow-500",
    },
  }

  const pathColorKey = path.title.toLowerCase().includes("ascender")
    ? "orange"
    : path.title.toLowerCase().includes("neothinker")
      ? "amber"
      : path.title.toLowerCase().includes("immortal")
        ? "red"
        : "yellow"

  const styles = colorStyles[pathColorKey]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-lg ${styles.bg} ${styles.border} border-2 rounded-2xl overflow-hidden p-0`}>
        <div className={`${styles.headerBg} px-6 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12`}>
          <DialogHeader>
            <div
              className={`mb-5 inline-flex items-center justify-center rounded-2xl ${styles.iconBg} p-5 sm:mb-6 sm:p-6`}
            >
              <div className={`${styles.text}`}>
                <path.icon />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold mb-3 text-white sm:text-3xl lg:text-4xl">
              {path.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-white/90 sm:text-lg">
              {pathDescriptions[path.title as keyof typeof pathDescriptions] ||
                `Express your interest in the ${path.title} path.`}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-10 text-center sm:py-12" role="status" aria-live="polite">
              <div
                className={`mx-auto mb-5 inline-flex h-24 w-24 items-center justify-center rounded-full ${styles.checkmarkBg} animate-in zoom-in-50 duration-500 sm:mb-6 sm:h-28 sm:w-28`}
              >
                <CheckCircle2Icon className={`${styles.checkmark} animate-in zoom-in-75 duration-700 delay-150`} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 sm:text-3xl">
                Thank You!
              </h3>
              <p className="text-base text-white/80 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 sm:text-lg">
                We've received your interest in the {path.title} path and will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {errors.server && (
                <div className="rounded-xl border-2 border-red-500/30 bg-red-500/10 p-4 text-center">
                  <p className="text-base font-semibold text-red-400">{errors.server}</p>
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="modal-name" className="text-base font-bold text-white sm:text-lg">
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="modal-name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className={`border-2 border-zinc-600 bg-black/50 text-lg text-white h-14 rounded-xl ${styles.inputFocus} transition-all duration-200 sm:h-16 sm:text-xl placeholder:text-white/50`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "modal-name-error" : undefined}
                />
                {errors.name && (
                  <p id="modal-name-error" className="text-base font-semibold text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-email" className="text-base font-bold text-white sm:text-lg">
                  Email <span className="text-red-400">*</span>
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  className={`border-2 border-zinc-600 bg-black/50 text-lg text-white h-14 rounded-xl ${styles.inputFocus} transition-all duration-200 sm:h-16 sm:text-xl placeholder:text-white/50`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "modal-email-error" : undefined}
                />
                {errors.email && (
                  <p id="modal-email-error" className="text-base font-semibold text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-phone" className="text-base font-bold text-white sm:text-lg">
                  Phone <span className="text-red-400">*</span>
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  autoComplete="tel"
                  className={`border-2 border-zinc-600 bg-black/50 text-lg text-white h-14 rounded-xl ${styles.inputFocus} transition-all duration-200 sm:h-16 sm:text-xl placeholder:text-white/50`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "modal-phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="modal-phone-error" className="text-base font-semibold text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-message" className="text-base font-bold text-white sm:text-lg">
                  Message <span className="text-white/50 text-base font-normal">(Optional)</span>
                </label>
                <Textarea
                  id="modal-message"
                  name="message"
                  placeholder="Tell us about your interest..."
                  rows={4}
                  className={`resize-none border-2 border-zinc-600 bg-black/50 text-lg text-white rounded-xl ${styles.inputFocus} transition-all duration-200 sm:text-xl placeholder:text-white/50`}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className={`w-full text-lg h-14 rounded-xl ${styles.button} sm:text-xl sm:h-16`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  "Submit Interest"
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
