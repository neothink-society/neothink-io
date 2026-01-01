export function AuthorityBar() {
  const stats = [
    { value: "50+", label: "Years of Research" },
    { value: "30+", label: "Published Works" },
    { value: "140+", label: "Countries Reached" },
    { value: "3", label: "Generations" },
  ]

  return (
    <section className="border-b border-primary/20 bg-zinc-950 py-10 sm:py-12 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/70 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
