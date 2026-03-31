const reviews = [
  {
    name: 'Sarah M.',
    location: 'Fayetteville, AR',
    rating: 5,
    text: 'Bryson does an amazing job every single time. My yard has never looked better. He shows up on time, works hard, and the price is very fair.',
  },
  {
    name: 'Mike T.',
    location: 'Bentonville, AR',
    rating: 5,
    text: 'Hired Bryson for a full yard cleanup and mulch installation. Couldn\'t be happier — professional work at a student-friendly price. Highly recommend.',
  },
  {
    name: 'Jennifer R.',
    location: 'Rogers, AR',
    rating: 5,
    text: 'Super reliable and detail-oriented. He goes above and beyond what I\'ve gotten from other lawn services. Texted him and got a response within the hour.',
  },
  {
    name: 'David K.',
    location: 'Springdale, AR',
    rating: 5,
    text: 'Great experience from start to finish. Honest quote, showed up when he said he would, and did a clean, thorough job. Will definitely use again.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Reviews</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
            What Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what our neighbors have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm">
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div>
                <div className="font-bold text-brand-dark text-sm">{r.name}</div>
                <div className="text-gray-400 text-xs">{r.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          ⭐⭐⭐⭐⭐ &nbsp; 5.0 average · 100+ satisfied customers
        </div>
      </div>
    </section>
  )
}
