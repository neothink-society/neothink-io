import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2">
          <p className="font-mono text-6xl font-bold text-primary">404</p>
          <h1 className="font-serif text-3xl font-bold text-white">Page Not Found</h1>
          <p className="text-lg text-white/70">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="bg-gradient-to-r from-[#FFED4E] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#D4AF37]">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
