import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Time-Tested Tools",
    description: "Proven techniques and technologies for transformation.",
  },
  {
    title: "Expert Guidance",
    description: "Learn from fellow members who have mastered Neothink.",
  },
  {
    title: "Comprehensive Support",
    description: "Ongoing mentorship throughout your journey.",
  },
  {
    title: "Optimal I/O Dynamics",
    description: "Perfectly balanced input and output for maximum growth.",
  },
]

export function Benefits() {
  return (
    <section className="border-b border-border bg-secondary/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Healthiest, Wealthiest & Happiest
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We provide the tools, techniques, and technologies to help you unlock your full potential.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-8">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-6 space-y-2">
                  <div className="text-sm font-semibold uppercase tracking-wide text-primary">Our Mission</div>
                  <h3 className="text-2xl font-bold text-foreground">Making It Possible</h3>
                </div>
                <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                  As administrators and fellow members of the Neothink ecosystem, we ensure the I/O dynamics are what
                  they are meant to be—every day, in every way.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-border pt-6">
                  <div>
                    <div className="mb-1 text-3xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">Transformation Paths</div>
                  </div>
                  <div>
                    <div className="mb-1 text-3xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
