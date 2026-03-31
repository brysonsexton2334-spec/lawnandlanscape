import { useState, useEffect } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-green/75 to-brand-lime/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className={`relative max-w-5xl mx-auto px-5 sm:px-6 text-center py-32 sm:py-36 transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-7 text-xs sm:text-sm font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
          Student-Owned &amp; Locally Operated
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
          Reliable Lawn Care
          <br />
          <span className="bg-gradient-to-r from-brand-lime to-emerald-300 bg-clip-text text-transparent">
            &amp; Landscaping
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white/90">
            in Northwest Arkansas
          </span>
        </h1>

        <p className="text-base sm:text-xl text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
          Student-owned and operated. 5+ years of experience delivering clean, professional lawns.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <a
            href="#contact"
            className="bg-brand-lime text-brand-dark px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:brightness-110 transition-all duration-300 shadow-xl shadow-brand-lime/25 active:scale-95"
          >
            Get a Free Quote
          </a>
          <a
            href="sms:+18173002215"
            className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 active:scale-95"
          >
            📱 Text for Fast Service
          </a>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0 100H1440V50C1320 10 1200 80 1080 50C960 20 840 70 720 50C600 30 480 80 360 50C240 20 120 70 0 50V100Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
