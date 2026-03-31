export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A2E1A 0%, #2D6A2D 60%, #7CB518 100%)',
      }}
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium">
          <span>🌱</span> Serving Northwest Arkansas
        </div>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight mb-6">
          Your Lawn,<br />
          <span className="text-brand-lime">Our Passion.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional lawn care and landscaping services that transform your outdoor space into something you're proud of.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-brand-lime text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-brand-lime/30"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/20 pt-10">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '10+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl md:text-4xl text-brand-lime">{s.value}</div>
              <div className="text-white/70 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1200 0 960 80 720 40C480 0 240 80 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
