const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '100+', label: 'Happy Clients' },
  { value: '500+', label: 'Lawns Serviced' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">About Me</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-6 leading-tight">
              Your Neighbor,<br />Your Lawn Guy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Locally owned lawn care and landscaping business serving Northwest Arkansas, including Fayetteville, Springdale, Rogers, and Bentonville. Operated by a University of Arkansas student with over 5 years of experience, we provide reliable lawn mowing, lawn maintenance, landscaping, mulch installation, trimming, and yard cleanups.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-lime transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-brand-light rounded-2xl p-8 text-center"
              >
                <div className="font-display font-extrabold text-4xl text-brand-green mb-2">{s.value}</div>
                <div className="text-gray-500 text-sm font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
