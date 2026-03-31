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
  { icon: '🏠', title: 'Student-Owned Local Business', desc: 'Supporting local and student entrepreneurship' },
  { icon: '⭐', title: '5+ Years Experience', desc: 'Proven track record of quality service' },
  { icon: '✅', title: 'Reliable & Detail-Oriented', desc: 'Consistent quality you can count on' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Honest quotes with no hidden fees' },
  { icon: '📍', title: 'Serving Northwest Arkansas', desc: 'Proud to serve our local community' },
]

export default function Services() {
  return (
    <>
      <section id="services" className="py-24 bg-brand-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Comprehensive lawn care and landscaping solutions for every season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-8 hover:bg-brand-green hover:text-white transition-all duration-300 cursor-default shadow-sm"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display font-bold text-xl text-brand-dark group-hover:text-white mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors text-sm">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Dedicated to Delivering<br />Exceptional Lawn Care
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-display font-bold text-sm mb-2 leading-snug">{w.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
