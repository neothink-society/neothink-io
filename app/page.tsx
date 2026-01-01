"use client"

import { useState } from "react"
import { NetworkBanner } from "@/components/network-banner"
import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { MemberTypes } from "@/components/member-types"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  return (
    <main id="main-content" className="min-h-screen">
      <NetworkBanner />
      <Hero />
      <WhoWeAre />
      <MemberTypes selectedPath={selectedPath} setSelectedPath={setSelectedPath} />
      <ContactForm />
      <Footer onPathClick={setSelectedPath} />
    </main>
  )
}
