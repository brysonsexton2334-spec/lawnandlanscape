import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '100+', label: 'Happy Clients' },
  { value: '500+', label: 'Lawns Serviced' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div ref={ref} className="reveal max-w-5xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: Headshot */}
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto md:mx-0">
            <img
              src="/images/bryson-headshot.jpg"
              alt="Bryson — owner of Bryson's Lawn and Landscape"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Text + stats */}
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-dark mb-5">
              About Me
            </h2>
            <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-8">
              Locally owned lawn care and landscaping business serving Northwest Arkansas, including Fayetteville, Springdale, Rogers, and Bentonville. Operated by a University of Arkansas student with over 5 years of experience, we provide reliable lawn mowing, lawn maintenance, landscaping, mulch installation, trimming, and yard cleanups.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green">{s.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm italic mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
