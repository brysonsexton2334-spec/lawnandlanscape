import { useReveal } from '../hooks/useReveal'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Fayetteville, AR',
    text: 'Bryson does an amazing job every single time. My yard has never looked better. He shows up on time, works hard, and the price is very fair.',
  },
  {
    name: 'Mike T.',
    location: 'Bentonville, AR',
    text: "Hired Bryson for a full yard cleanup and mulch installation. Couldn't be happier — professional work at a student-friendly price. Highly recommend.",
  },
  {
    name: 'Jennifer R.',
    location: 'Rogers, AR',
    text: "Super reliable and detail-oriented. He goes above and beyond what I've gotten from other lawn services. Texted him and got a response within the hour.",
  },
  {
    name: 'David K.',
    location: 'Springdale, AR',
    text: 'Great experience from start to finish. Honest quote, showed up when he said he would, and did a clean, thorough job. Will definitely use again.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useReveal()

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-brand-light">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-3">
            What Customers Say
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            Don't just take our word for it — here's what our neighbors have to say.
          </p>
        </div>

        <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Stars />
              <p className="text-gray-500 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
