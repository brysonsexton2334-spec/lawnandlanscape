// Before/after pairs — replace src values with real photos
const pairs = [
  {
    before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
  },
  {
    before: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&q=80',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
            Before &amp; After
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            See the transformation we bring to every property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pairs.map((pair, i) => (
            <div key={i} className="space-y-3">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <img
                  src={pair.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-gray-900/70 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Before
                </span>
              </div>
              <div className="flex items-center justify-center text-brand-lime font-bold text-2xl">↓</div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <img
                  src={pair.after}
                  alt="After"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-brand-green/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
