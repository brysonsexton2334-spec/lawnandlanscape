import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: '🌿',
    title: 'Lawn Mowing & Maintenance',
    description: 'Regular mowing and edging to keep your lawn looking sharp and healthy.',
  },
  {
    icon: '🪨',
    title: 'Mulch & Rock Installation',
    description: 'Professional installation of mulch and decorative rock for beautiful landscaping.',
  },
  {
    icon: '🍂',
    title: 'Yard Cleanups',
    description: 'Thorough yard cleanup services including leaf removal and debris clearing.',
  },
  {
    icon: '✂️',
    title: 'Hedge & Bush Trimming',
    description: 'Expert trimming and shaping of hedges, bushes, and shrubs.',
  },
  {
    icon: '🌸',
    title: 'Landscape Refreshes',
    description: 'Revitalize your outdoor space with fresh plantings and design updates.',
  },
  {
    icon: '📅',
    title: 'Seasonal Property Maintenance',
    description: 'Year-round care including spring cleanups and fall preparation.',
  },
]

const whyUs = [
  { icon: '🎓', title: 'Student-Owned Local Business', desc: 'Supporting local and student entrepreneurship' },
  { icon: '⭐', title: '5+ Years Experience', desc: 'Proven track record of quality service' },
  { icon: '✅', title: 'Reliable & Detail-Oriented', desc: 'Consistent quality you can count on' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Honest quotes with no hidden fees' },
  { icon: '📍', title: 'Serving Northwest Arkansas', desc: 'Proud to serve our local community' },
]

export default function Services() {
  const servicesRef = useReveal()
  const whyRef = useReveal()

  return (
    <>
      <section id="services" className="py-20 sm:py-24 bg-brand-light">
        <div ref={servicesRef} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-3">
              Our Services
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
              Comprehensive lawn care and landscaping solutions for every season
            </p>
          </div>

          <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-6 sm:p-7 hover:bg-brand-green transition-all duration-400 cursor-default shadow-sm hover:shadow-xl hover:shadow-brand-green/15 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-brand-light group-hover:bg-white/15 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">{s.icon}</div>
                <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-white mb-2 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white/75 leading-relaxed text-sm transition-colors">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-brand-dark text-white">
        <div ref={whyRef} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3">
              Why Choose Us
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-lg mx-auto">
              Dedicated to delivering exceptional lawn care with a personal touch
            </p>
          </div>

          <div className="stagger grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-lime/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3">{w.icon}</div>
                <h3 className="font-display font-bold text-xs sm:text-sm mb-1.5 leading-snug">{w.title}</h3>
                <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
