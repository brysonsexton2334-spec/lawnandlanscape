import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '100+', label: 'Happy Clients' },
  { value: '500+', label: 'Lawns Serviced' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-brand-lime font-semibold text-xs uppercase tracking-[0.2em] mb-3 bg-brand-lime/10 px-3 py-1 rounded-full">About Me</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] text-brand-dark mb-6 leading-tight">
              Locally owned. Student operated. Built on hard work.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
              Locally owned lawn care and landscaping business serving Northwest Arkansas, including Fayetteville, Springdale, Rogers, and Bentonville. Operated by a University of Arkansas student with over 5 years of experience, we provide reliable lawn mowing, lawn maintenance, landscaping, mulch installation, trimming, and yard cleanups.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 active:scale-95"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Stats + image */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-brand-green/10">
              <img
                src="/images/gallery-shrubs.jpg"
                alt="Professional landscaping by Bryson's Lawn and Landscape"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-brand-light rounded-2xl p-4 sm:p-6 text-center">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-brand-green">{s.value}</div>
                  <div className="text-gray-400 text-[11px] sm:text-xs font-medium mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
