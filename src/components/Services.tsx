const services = [
  {
    icon: '🌿',
    title: 'Lawn Mowing & Maintenance',
    description: 'Weekly or bi-weekly mowing, edging, and trimming to keep your lawn looking crisp and healthy all season long.',
  },
  {
    icon: '🌳',
    title: 'Landscaping Design',
    description: 'Custom landscape designs that enhance your property\'s curb appeal with plants, beds, and features tailored to your vision.',
  },
  {
    icon: '🌸',
    title: 'Mulching & Bed Care',
    description: 'Fresh mulch installation and bed cleanup to suppress weeds, retain moisture, and give your yard a polished look.',
  },
  {
    icon: '✂️',
    title: 'Tree & Shrub Trimming',
    description: 'Expert pruning and shaping of trees and shrubs to promote healthy growth and keep your property looking its best.',
  },
  {
    icon: '🍂',
    title: 'Leaf Removal',
    description: 'Thorough fall cleanup services to clear leaves, debris, and prepare your lawn for winter and spring growth.',
  },
  {
    icon: '🌱',
    title: 'Sod & Seeding',
    description: 'Professional sod installation and overseeding to repair bare patches or establish a brand-new lush green lawn.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
            Services We Offer
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From routine maintenance to full landscape transformations — we do it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-brand-light rounded-2xl p-8 hover:bg-brand-green hover:text-white transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-display font-bold text-xl text-brand-dark group-hover:text-white mb-3 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-lime transition-colors"
          >
            Request a Service →
          </a>
        </div>
      </div>
    </section>
  )
}
