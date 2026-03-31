const serviceAreas = ['Bentonville', 'Rogers', 'Fayetteville', 'Springdale', 'Lowell']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center text-base">🌿</div>
              <span className="font-display font-bold text-base">
                Bryson's Lawn<span className="text-brand-lime"> &amp; Landscape</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Student-owned and operated lawn care service serving Northwest Arkansas with pride and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-lime mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-white/50 text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-lime mb-4">Contact</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><a href="tel:+18173002215" className="hover:text-white transition-colors">📞 (817) 300-2215</a></li>
              <li><a href="mailto:brysonsexton2334@gmail.com" className="hover:text-white transition-colors">📧 brysonsexton2334@gmail.com</a></li>
              <li>📍 Northwest Arkansas</li>
              <li>🕐 Every Day · 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>

        {/* SEO service area links */}
        <div className="border-t border-white/[0.06] pt-8 mb-6">
          <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-[11px] text-white/25 justify-center leading-relaxed">
            {serviceAreas.map((area, i) => (
              <span key={area}>
                <a href="#contact" className="hover:text-white/50 transition-colors">
                  Reliable Lawn Care &amp; Landscaping in {area}
                </a>
                {i < serviceAreas.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
          <p>© {year} Bryson's Lawn and Landscape. All rights reserved. | Student-Owned and Locally Operated</p>
          <p>
            Built by{' '}
            <a href="https://sift-digital.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/60 transition-colors">
              Sift Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
