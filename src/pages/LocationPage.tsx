import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const locations: Record<string, { city: string; state: string; nearby: string[] }> = {
  'bentonville': {
    city: 'Bentonville',
    state: 'AR',
    nearby: ['Rogers', 'Bella Vista', 'Centerton', 'Pea Ridge'],
  },
  'rogers': {
    city: 'Rogers',
    state: 'AR',
    nearby: ['Bentonville', 'Lowell', 'Springdale', 'Centerton'],
  },
  'fayetteville': {
    city: 'Fayetteville',
    state: 'AR',
    nearby: ['Springdale', 'Johnson', 'Farmington', 'Elkins'],
  },
  'springdale': {
    city: 'Springdale',
    state: 'AR',
    nearby: ['Fayetteville', 'Rogers', 'Lowell', 'Johnson'],
  },
  'lowell': {
    city: 'Lowell',
    state: 'AR',
    nearby: ['Springdale', 'Rogers', 'Bentonville', 'Cave Springs'],
  },
}

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = slug ? locations[slug] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location) {
      document.title = `Lawn Care & Landscaping in ${location.city}, ${location.state} | Bryson's Lawn & Landscape`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('content', `Professional lawn care, landscaping, mulch installation, and yard maintenance in ${location.city}, ${location.state}. Student-owned, 5+ years experience. Free quotes — call (817) 300-2215.`)
      }
    }
  }, [location])

  if (!location) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-extrabold text-4xl text-brand-dark mb-4">Page Not Found</h1>
          <Link to="/" className="text-brand-green hover:text-brand-lime font-semibold">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero location={`${location.city}, ${location.state}`} />

        {/* Location SEO banner */}
        <section className="bg-brand-dark text-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
              Reliable Lawn Care &amp; Landscaping
              <br />
              <span className="text-brand-lime">in {location.city}, {location.state}</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Bryson's Lawn &amp; Landscape proudly serves {location.city} and the surrounding areas including {location.nearby.join(', ')}. Student-owned and operated with 5+ years of experience delivering clean, professional lawns.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5">Lawn Mowing</span>
              <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5">Mulch &amp; Rock</span>
              <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5">Yard Cleanups</span>
              <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5">Hedge Trimming</span>
              <span className="bg-white/10 border border-white/10 rounded-full px-4 py-1.5">Landscaping</span>
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 bg-brand-lime text-brand-dark px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all active:scale-95"
            >
              Get a Free Quote in {location.city}
            </a>
          </div>
        </section>

        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
