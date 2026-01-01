"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PathInterestModal } from "@/components/path-interest-modal"

const TrendingUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const InfinityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>
)

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
)

const memberTypes = [
  {
    icon: TrendingUpIcon,
    title: "Ascenders",
    focus: "Prosperity",
    tagline: "Value Creator",
    description:
      "Access the Ascension platform and proven business systems. Build and scale profitable ventures through the division of essence and mini-company frameworks.",
    cta: "Unlock Prosperity",
    color: "text-orange-400",
    bgGradient: "bg-gradient-to-br from-orange-950/50 via-zinc-900 to-black",
    borderColor: "border-l-4 border-l-orange-500 border-y border-r border-zinc-700",
    hoverBorder: "hover:border-orange-400/60",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    badgeBg: "bg-orange-500/20",
    badgeText: "text-orange-300",
    buttonClass: "bg-orange-500 hover:bg-orange-400 text-black font-bold",
    email: "ascenders@neothink.io",
  },
  {
    icon: HeartIcon,
    title: "Neothinkers",
    focus: "Happiness",
    tagline: "Integrated Thinker",
    description:
      "Develop Billionaire Consciousness through Neothink University. Master integrated thinking to see through illusions and solve complex life problems.",
    cta: "Experience Happiness",
    color: "text-amber-400",
    bgGradient: "bg-gradient-to-br from-amber-950/50 via-zinc-900 to-black",
    borderColor: "border-l-4 border-l-amber-500 border-y border-r border-zinc-700",
    hoverBorder: "hover:border-amber-400/60",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    badgeBg: "bg-amber-500/20",
    badgeText: "text-amber-300",
    buttonClass: "bg-amber-500 hover:bg-amber-400 text-black font-bold",
    email: "neothinkers@neothink.io",
  },
  {
    icon: InfinityIcon,
    title: "Immortals",
    focus: "Longevity",
    tagline: "Self-Leader",
    description:
      "Join the Immortalis movement and Project Life. Participate in cutting-edge longevity research and the mission to make aging optional.",
    cta: "Pursue Longevity",
    color: "text-red-400",
    bgGradient: "bg-gradient-to-br from-red-950/50 via-zinc-900 to-black",
    borderColor: "border-l-4 border-l-red-500 border-y border-r border-zinc-700",
    hoverBorder: "hover:border-red-400/60",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
    badgeBg: "bg-red-500/20",
    badgeText: "text-red-300",
    buttonClass: "bg-red-500 hover:bg-red-400 text-black font-bold",
    email: "immortals@neothink.io",
  },
  {
    icon: ZapIcon,
    title: "Superachievers",
    focus: "Intelligence",
    tagline: "Neothink Mentality",
    description:
      "Operate at the highest level with Ten-Second Miracles and the full Neothink toolkit. Build empires through integrated puzzles that shape the future.",
    cta: "Master Intelligence",
    color: "text-yellow-400",
    bgGradient: "bg-gradient-to-br from-yellow-950/50 via-zinc-900 to-black",
    borderColor: "border-l-4 border-l-yellow-500 border-y border-r border-zinc-700",
    hoverBorder: "hover:border-yellow-400/60",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    badgeBg: "bg-yellow-500/20",
    badgeText: "text-yellow-300",
    buttonClass: "bg-yellow-500 hover:bg-yellow-400 text-black font-bold",
    email: "superachievers@neothink.io",
  },
]

interface MemberTypesProps {
  selectedPath: string | null
  setSelectedPath: (path: string | null) => void
}

export function MemberTypes({ selectedPath, setSelectedPath }: MemberTypesProps) {
  return (
    <>
      <section id="main-content" className="border-b border-primary/20 bg-black py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <h2 className="mb-4 text-balance font-serif text-3xl font-bold tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl xl:text-6xl">
              Four Paths to <span className="text-primary">Transformation</span>
            </h2>
            <p className="text-pretty text-lg text-white/80 sm:text-xl lg:text-2xl">
              Deepen your practice. Advance your path.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {memberTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card
                  key={type.title}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl ${type.borderColor} ${type.bgGradient} ${type.hoverBorder} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
                >
                  <div className="mb-5 flex items-center gap-4 sm:mb-6">
                    <div className={`inline-flex rounded-xl ${type.iconBg} p-3.5 ${type.iconColor} sm:p-4`}>
                      <Icon />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className={`text-base font-bold ${type.badgeText} sm:text-lg`}>{type.focus}</span>
                      <span className="text-sm text-white/60 sm:text-base">{type.tagline}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl">
                    {type.title}
                  </h3>
                  <p className="mb-6 flex-grow text-base leading-relaxed text-white/80 sm:mb-8 sm:text-lg lg:text-xl">
                    {type.description}
                  </p>
                  <Button
                    size="lg"
                    className={`w-full rounded-xl text-base transition-all duration-300 h-14 sm:h-16 sm:text-lg ${type.buttonClass}`}
                    onClick={() => setSelectedPath(type.title)}
                  >
                    {type.cta}
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      {selectedPath && (
        <PathInterestModal
          path={memberTypes.find((t) => t.title === selectedPath)!}
          isOpen={!!selectedPath}
          onClose={() => setSelectedPath(null)}
        />
      )}
    </>
  )
}
