import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Neothink+",
    }
  }

  return {
    title: `${post.title} | Neothink+`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Ascenders: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  Neothinkers: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  Immortals: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  Superachievers: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const colors = categoryColors[post.category] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-28 xl:py-32">
              {/* Back Link */}
              <Link
                href="/blog"
                className="group mb-8 inline-flex items-center gap-2 text-base font-medium text-white/60 transition-colors hover:text-primary sm:mb-10"
              >
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
                  className="transition-transform group-hover:-translate-x-1"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to Blog
              </Link>

              {/* Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">
                <span className={`rounded-full border ${colors.border} ${colors.bg} px-4 py-1.5 text-sm font-bold ${colors.text} sm:px-5 sm:py-2 sm:text-base`}>
                  {post.category}
                </span>
                <span className="text-base text-white/50 sm:text-lg">{post.readTime}</span>
                <span className="hidden text-white/30 sm:inline">•</span>
                <time dateTime={post.date} className="text-base text-white/50 sm:text-lg">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              {/* Title */}
              <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="mb-8 text-lg leading-relaxed text-white/70 sm:mb-10 sm:text-xl lg:text-2xl">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} font-serif text-xl font-bold ${colors.text} sm:h-14 sm:w-14 sm:text-2xl`}>
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white sm:text-xl">{post.author}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose-article mx-auto max-w-4xl">
              <div
                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
              />
            </article>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-primary/20 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-16 sm:py-20 lg:py-28">
              <h2 className="mb-10 text-center font-serif text-2xl font-bold text-white sm:mb-12 sm:text-3xl lg:text-4xl">
                Continue Reading
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {getAllPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((relatedPost) => {
                    const relatedColors = categoryColors[relatedPost.category] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" }
                    return (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-zinc-900 sm:p-8"
                      >
                        <span className={`mb-4 inline-block self-start rounded-full border ${relatedColors.border} ${relatedColors.bg} px-3 py-1 text-sm font-bold ${relatedColors.text}`}>
                          {relatedPost.category}
                        </span>
                        <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-white transition-colors group-hover:text-primary sm:text-2xl">
                          {relatedPost.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 flex-grow text-base text-white/60 sm:text-lg">
                          {relatedPost.excerpt}
                        </p>
                        <span className="text-sm font-medium text-primary sm:text-base">
                          Read more →
                        </span>
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-primary/20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-16 text-center sm:py-20 lg:py-28">
              <h2 className="mb-4 font-serif text-2xl font-bold text-white sm:mb-6 sm:text-3xl lg:text-4xl">
                Ready to Advance Your Path?
              </h2>
              <p className="mb-8 text-lg text-white/70 sm:mb-10 sm:text-xl">
                Connect with fellow value creators in the Neothink community.
              </p>
              <Link
                href="https://community.neothink.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FFED4E] to-[#FFD700] px-8 py-4 text-lg font-bold text-black transition-all hover:from-[#FFD700] hover:to-[#D4AF37] sm:px-10 sm:py-5 sm:text-xl"
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

function formatMarkdown(content: string): string {
  // Enhanced markdown to HTML conversion
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists - handle numbered lists
    .replace(/^(\d+)\. (.*$)/gm, '<li data-num="$1">$2</li>')
    // Lists - handle bullet points
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .split('\n\n')
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (block.startsWith('<h') || block.startsWith('<li') || block.startsWith('<ul') || block.startsWith('<ol')) {
        return block
      }
      return `<p>${block}</p>`
    })
    .join('\n')

  // Wrap consecutive list items in ul
  html = html.replace(/(<li[^>]*>.*?<\/li>\n?)+/g, (match) => {
    if (match.includes('data-num')) {
      return `<ol>${match.replace(/ data-num="\d+"/g, '')}</ol>`
    }
    return `<ul>${match}</ul>`
  })

  return html
}
