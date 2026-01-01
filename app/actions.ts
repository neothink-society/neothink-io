"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Validation helpers
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  return /^[\d\s\-+()]{10,}$/.test(phone)
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000) // Limit length and trim
}

interface FormResult {
  success: boolean
  error?: string
}

export async function submitContactForm(formData: FormData): Promise<FormResult> {
  const name = sanitizeInput(formData.get("name") as string || "")
  const email = sanitizeInput(formData.get("email") as string || "")
  const phone = sanitizeInput(formData.get("phone") as string || "")
  const message = sanitizeInput(formData.get("message") as string || "")

  // Server-side validation
  if (!name || name.length < 2) {
    return { success: false, error: "Name must be at least 2 characters" }
  }
  if (!email || !validateEmail(email)) {
    return { success: false, error: "Please provide a valid email address" }
  }
  if (!phone || !validatePhone(phone)) {
    return { success: false, error: "Please provide a valid phone number" }
  }
  if (!message || message.length < 10) {
    return { success: false, error: "Message must be at least 10 characters" }
  }

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.log("[DEV] Contact form submission (no RESEND_API_KEY):", { name, email, phone, message })
    return { success: true } // Allow in development
  }

  try {
    await resend.emails.send({
      from: "Neothink+ <noreply@neothink.io>",
      to: process.env.ADMIN_EMAIL || "admin@neothink.io",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted via neothink.io contact form
        </p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}

export async function submitPathInterest(formData: FormData): Promise<FormResult> {
  const name = sanitizeInput(formData.get("name") as string || "")
  const email = sanitizeInput(formData.get("email") as string || "")
  const phone = sanitizeInput(formData.get("phone") as string || "")
  const message = sanitizeInput(formData.get("message") as string || "")
  const path = sanitizeInput(formData.get("path") as string || "")
  const pathEmail = sanitizeInput(formData.get("pathEmail") as string || "")

  // Server-side validation
  if (!name || name.length < 2) {
    return { success: false, error: "Name must be at least 2 characters" }
  }
  if (!email || !validateEmail(email)) {
    return { success: false, error: "Please provide a valid email address" }
  }
  if (!phone || !validatePhone(phone)) {
    return { success: false, error: "Please provide a valid phone number" }
  }
  if (!path) {
    return { success: false, error: "Path selection is required" }
  }

  // Path-specific email mapping
  const pathEmails: Record<string, string> = {
    Ascenders: process.env.ASCENDERS_EMAIL || "ascenders@neothink.io",
    Neothinkers: process.env.NEOTHINKERS_EMAIL || "neothinkers@neothink.io",
    Immortals: process.env.IMMORTALS_EMAIL || "immortals@neothink.io",
    Superachievers: process.env.SUPERACHIEVERS_EMAIL || "superachievers@neothink.io",
  }

  const recipientEmail = pathEmails[path] || pathEmail || "admin@neothink.io"

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.log(`[DEV] Path interest submission to ${recipientEmail}:`, { name, email, phone, message, path })
    return { success: true } // Allow in development
  }

  try {
    await resend.emails.send({
      from: "Neothink+ <noreply@neothink.io>",
      to: recipientEmail,
      replyTo: email,
      subject: `New ${path} Path Interest from ${name}`,
      html: `
        <h2>New ${path} Path Interest</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Path:</strong> ${path}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted via neothink.io ${path} path interest form
        </p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error(`Failed to send ${path} interest email:`, error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
