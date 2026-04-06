import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Bryson's Lawn & Landscape"
            className={`rounded-full object-cover border-2 transition-all duration-300 ${
              scrolled
                ? 'w-10 h-10 sm:w-11 sm:h-11 border-brand-green/20'
                : 'w-11 h-11 sm:w-12 sm:h-12 border-white/30'
            }`}
          />
          <span
            className={`font-display font-bold text-[15px] sm:text-lg leading-tight transition-colors ${
              scrolled ? 'text-brand-dark' : 'text-white'
            }`}
          >
            Bryson's Lawn<span className="text-brand-lime"> & Landscape</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative font-medium text-sm transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-lime after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-gray-600 hover:text-brand-dark' : 'text-white/85 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 shadow-md shadow-brand-green/25"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 -mr-2 ${scrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          <button
            className="absolute top-5 right-5 p-2 text-brand-dark"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-brand-dark font-display font-bold text-2xl hover:text-brand-lime transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-green text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-brand-lime hover:text-brand-dark transition-colors mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
          <a href="tel:+18173002215" className="text-gray-400 text-sm mt-2 hover:text-brand-green transition-colors">
            📞 (817) 300-2215
          </a>
        </div>
      </div>
    </header>
  )
}
