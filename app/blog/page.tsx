import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Insights | Neothink+",
  description: "Explore articles on integrated thinking, value creation, and the Neothink philosophy. Discover insights from Mark Hamilton and the Neothink Society.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black py-20 sm:py-28 lg:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-base font-bold uppercase tracking-wider text-primary sm:text-lg">Blog</p>
              <h1 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Insights
              </h1>
              <p className="text-lg leading-relaxed text-white/80 sm:text-xl lg:text-2xl">
                Explore articles on integrated thinking, value creation, and the principles
                that guide Ascenders, Neothinkers, Immortals, and Superachievers.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-primary/50 hover:bg-zinc-900"
                  >
                    <div className="mb-4 flex items-center gap-3 text-sm">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-white/50">{post.readTime}</span>
                    </div>
                    <h2 className="mb-3 font-serif text-xl font-bold text-white group-hover:text-primary sm:text-2xl">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mb-4 line-clamp-3 text-base text-white/70">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/50">
                      <span>{post.author}</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-primary/20 bg-zinc-950 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                Ready to Transform Your Thinking?
              </h2>
              <p className="mb-6 text-base text-white/70 sm:text-lg">
                Join the Neothink community and connect with fellow value creators.
              </p>
              <Link
                href="https://community.neothink.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-8 py-4 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37]"
              >
                Join Community
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
