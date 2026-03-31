// Placeholder gallery using Unsplash lawn/landscape images
const images = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Fresh mowed lawn' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Beautiful garden beds' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', alt: 'Landscape design' },
  { src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&q=80', alt: 'Lawn care service' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Garden trimming' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Finished yard' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A look at some of the yards we've transformed across the area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
