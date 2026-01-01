export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
}

// Static blog posts - can be replaced with CMS or database later
export const blogPosts: BlogPost[] = [
  {
    slug: "introduction-to-integrated-thinking",
    title: "Introduction to Integrated Thinking",
    excerpt: "Discover how integrated thinking can transform your approach to problem-solving and decision-making in both personal and professional contexts.",
    content: `
# Introduction to Integrated Thinking

Integrated thinking is the foundation of the Neothink philosophy. It represents a systematic approach to understanding reality through honest observation, logical analysis, and practical application.

## What is Integrated Thinking?

At its core, integrated thinking is the process of connecting disparate pieces of knowledge into a coherent whole. Unlike compartmentalized thinking, which treats each area of life as separate, integrated thinking recognizes the interconnected nature of all human endeavors.

## The Three Pillars

1. **Integrated Honesty** - The commitment to perceiving and communicating reality as it actually exists
2. **Value Creation** - The focus on producing more value than you consume
3. **Self-Leadership** - Taking responsibility for your own life and decisions

## Practical Applications

Integrated thinking can be applied to:
- Business and entrepreneurship
- Personal relationships
- Health and wellness
- Financial decisions
- Creative pursuits

By adopting integrated thinking, you gain the ability to see through complexity and identify the core principles that govern success in any field.
    `,
    date: "2025-01-01",
    author: "Neothink Editorial",
    category: "Philosophy",
    readTime: "5 min read",
  },
  {
    slug: "four-paths-to-fulfillment",
    title: "The Four Paths to Fulfillment",
    excerpt: "Explore the four distinct paths offered by Neothink.io: Ascenders, Neothinkers, Immortals, and Superachievers.",
    content: `
# The Four Paths to Fulfillment

Neothink.io offers four distinct paths, each designed to address different aspects of human potential and fulfillment.

## Ascenders (LIVE - Prosperity)

The Ascenders path focuses on value creation and wealth building. Through Ascension, FLOW, and the Ascenders community, members learn to create genuine value in the marketplace and achieve financial independence.

## Neothinkers (LOVE - Happiness)

The Neothinkers path emphasizes integrated thinking and deep happiness. With access to Neothink principles, Mark Hamilton's content, and the Neothinkers community, members develop the mental tools for lasting fulfillment.

## Immortals (LIFE - Longevity)

The Immortals path concentrates on self-leadership and biological advancement. Through Immortalis, Project Life, and the Immortals community, members explore the frontiers of human longevity and health optimization.

## Superachievers (LUCK - Achievement)

The Superachievers path represents mastery of all paths. With complete access to all platforms and communities, Superachievers pursue excellence across every dimension of life.

## Finding Your Path

Each path is valuable on its own, and many members eventually explore multiple paths as their journey progresses. The key is to start where your current interests and needs align most strongly.
    `,
    date: "2024-12-28",
    author: "Mark Hamilton",
    category: "Paths",
    readTime: "4 min read",
  },
  {
    slug: "value-creation-fundamentals",
    title: "Value Creation Fundamentals",
    excerpt: "Learn the essential principles of value creation that form the economic foundation of the Neothink philosophy.",
    content: `
# Value Creation Fundamentals

Value creation is the ethical and practical foundation of prosperity within the Neothink framework.

## The Value Creation Principle

The fundamental principle is simple: create more value than you consume. This is not merely an economic calculation but a philosophical orientation toward life.

## Types of Value

1. **Economic Value** - Products and services that improve people's lives
2. **Intellectual Value** - Ideas and knowledge that advance understanding
3. **Social Value** - Relationships and community that support human flourishing
4. **Aesthetic Value** - Beauty and art that enrich experience

## The Anti-Civilization vs. Civilization

Neothink distinguishes between:
- **Anti-civilization**: Systems that extract value without creating it
- **Civilization of the Universe**: Systems based on mutual value creation

## Practical Steps

To become a value creator:
1. Identify genuine needs in the world
2. Develop skills to address those needs
3. Deliver value consistently and honestly
4. Reinvest in expanding your capacity to create

Value creation is not just about financial success—it's about contributing meaningfully to the world while achieving your own fulfillment.
    `,
    date: "2024-12-20",
    author: "Neothink Editorial",
    category: "Principles",
    readTime: "6 min read",
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
