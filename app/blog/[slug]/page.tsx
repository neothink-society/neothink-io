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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-black">
        {/* Hero */}
        <section className="relative border-b border-primary/20 bg-black py-16 sm:py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to Insights
              </Link>
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span className="text-white/50">{post.readTime}</span>
                <time dateTime={post.date} className="text-white/50">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <h1 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-serif text-lg font-bold text-primary">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white">{post.author}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-lg mx-auto max-w-3xl prose-headings:font-serif prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-li:text-white/80">
              <div
                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
              />
            </article>
          </div>
        </section>

        {/* Related Posts */}
        <section className="border-t border-primary/20 bg-zinc-950 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center font-serif text-2xl font-bold text-white sm:text-3xl">
                Continue Reading
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {getAllPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-primary/50"
                    >
                      <span className="mb-2 inline-block text-sm text-primary">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function formatMarkdown(content: string): string {
  // Simple markdown to HTML conversion
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
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
  html = html.replace(/(<li>.*?<\/li>\n?)+/g, '<ul>$&</ul>')

  return html
}
