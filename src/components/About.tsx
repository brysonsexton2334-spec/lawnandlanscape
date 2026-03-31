const reasons = [
  { icon: '🏆', title: 'Locally Owned', desc: 'Born and raised in Northwest Arkansas — we care about this community.' },
  { icon: '✅', title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind on every job.' },
  { icon: '⚡', title: 'Reliable & On Time', desc: 'We show up when we say we will, every single time.' },
  { icon: '💬', title: 'Clear Communication', desc: 'Easy to reach, honest quotes, no surprises on your bill.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-6 leading-tight">
              We Take Pride In<br />Every Yard We Touch
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bryson's Lawn & Landscape has been serving homeowners and businesses across Northwest Arkansas with reliable, quality lawn care and landscaping. We're not a big corporation — we're your neighbors, and we treat your property like it's our own.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you need weekly mowing or a full landscape overhaul, we bring the same level of dedication and attention to detail to every job.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-lime transition-colors"
            >
              Work With Us
            </a>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
