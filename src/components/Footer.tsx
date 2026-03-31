export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold text-lg">
                Bryson's Lawn<br />
                <span className="text-brand-lime">& Landscape</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional lawn care and landscaping services in Northwest Arkansas. Quality work, honest pricing.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-brand-lime">Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {['Lawn Mowing', 'Landscaping Design', 'Mulching & Beds', 'Tree Trimming', 'Leaf Removal', 'Sod & Seeding'].map(s => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-brand-lime">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="tel:+14795550000" className="hover:text-white transition-colors">📞 (479) 555-0000</a></li>
              <li><a href="mailto:info@brysonslawn.com" className="hover:text-white transition-colors">📧 info@brysonslawn.com</a></li>
              <li>📍 Northwest Arkansas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-sm">
          <p>© {year} Bryson's Lawn & Landscape. All rights reserved.</p>
          <p>Built by <a href="https://sift-digital.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Sift Digital</a></p>
        </div>
      </div>
    </footer>
  )
}
