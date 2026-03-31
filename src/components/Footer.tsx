const serviceAreas = [
  'Bentonville',
  'Rogers',
  'Fayetteville',
  'Springdale',
  'Lowell',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold text-lg">
                Bryson's Lawn<span className="text-brand-lime"> & Landscape</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Student-owned and operated lawn care service serving Northwest Arkansas with pride and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-brand-lime text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-brand-lime text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="tel:+18173002215" className="hover:text-white transition-colors">📞 (817) 300-2215</a>
              </li>
              <li>
                <a href="mailto:brysonsexton2334@gmail.com" className="hover:text-white transition-colors">📧 brysonsexton2334@gmail.com</a>
              </li>
              <li>📍 Northwest Arkansas</li>
              <li>🕐 Every Day · 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* SEO service area links */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-white/30 justify-center">
            {serviceAreas.map((area, i) => (
              <span key={area}>
                <a href="#contact" className="hover:text-white/60 transition-colors">
                  Reliable Lawn Care &amp; Landscaping in {area}
                </a>
                {i < serviceAreas.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <p>© {year} Bryson's Lawn and Landscape. All rights reserved. | Student-Owned and Locally Operated</p>
          <p>Built by <a href="https://sift-digital.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Sift Digital</a></p>
        </div>
      </div>
    </footer>
  )
}
