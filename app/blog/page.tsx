import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Neothink+",
  description: "Explore articles on integrated thinking, value creation, and the Neothink philosophy. Discover insights for Ascenders, Neothinkers, Immortals, and Superachievers.",
}

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Ascenders: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  Neothinkers: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  Immortals: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  Superachievers: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featuredPost, ...otherPosts] = posts

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
                The Neothink Blog
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Wisdom That Works
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
                Explore the paths of integrated thinking, value creation, and self-leadership
                that guide Ascenders, Neothinkers, Immortals, and Superachievers.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <p className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/50 sm:mb-10 sm:text-base">
                  Featured Article
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all duration-300 hover:border-primary/50"
                >
                  <div className="p-8 sm:p-10 lg:p-14">
                    {(() => {
                      const colors = categoryColors[featuredPost.category] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" }
                      return (
                        <>
                          <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
                            <span className={`rounded-full border ${colors.border} ${colors.bg} px-4 py-1.5 text-sm font-bold ${colors.text} sm:px-5 sm:py-2`}>
                              {featuredPost.category}
                            </span>
                            <span className="text-base text-white/50">{featuredPost.readTime}</span>
                            <span className="hidden text-white/30 sm:inline">•</span>
                            <time dateTime={featuredPost.date} className="text-base text-white/50">
                              {new Date(featuredPost.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          </div>
                          <h2 className="mb-4 font-serif text-2xl font-bold leading-tight text-white transition-colors group-hover:text-primary sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
                            {featuredPost.title}
                          </h2>
                          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/70 sm:mb-8 sm:text-xl lg:text-2xl">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} font-serif text-lg font-bold ${colors.text}`}>
                              {featuredPost.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-base font-semibold text-white sm:text-lg">{featuredPost.author}</p>
                            </div>
                          </div>
                        </>
                      )
                    })()}
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Other Posts Grid */}
        {otherPosts.length > 0 && (
          <section className="border-t border-zinc-800/50 bg-zinc-950/50 py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <p className="mb-10 text-center text-sm font-bold uppercase tracking-[0.2em] text-white/50 sm:mb-12 sm:text-base">
                  More Articles
                </p>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {otherPosts.map((post) => {
                    const colors = categoryColors[post.category] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" }
                    return (
                      <article
                        key={post.slug}
                        className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-zinc-900 sm:p-8"
                      >
                        <div className="mb-4 flex items-center gap-3">
                          <span className={`rounded-full border ${colors.border} ${colors.bg} px-3 py-1 text-sm font-bold ${colors.text}`}>
                            {post.category}
                          </span>
                          <span className="text-sm text-white/50">{post.readTime}</span>
                        </div>
                        <h2 className="mb-3 font-serif text-xl font-bold leading-snug text-white transition-colors group-hover:text-primary sm:text-2xl">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mb-6 line-clamp-3 flex-grow text-base leading-relaxed text-white/60 sm:text-lg">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-4">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.bg} text-sm font-bold ${colors.text}`}>
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm text-white/60">{post.author}</span>
                          </div>
                          <time dateTime={post.date} className="text-sm text-white/50">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-primary/20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-20 text-center sm:py-24 lg:py-32">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your Thinking?
              </h2>
              <p className="mb-10 text-lg text-white/70 sm:text-xl lg:text-2xl">
                Connect with fellow value creators in the Neothink community.
              </p>
              <Link
                href="https://community.neothink.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-10 py-5 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37] sm:text-xl"
              >
                Login
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
