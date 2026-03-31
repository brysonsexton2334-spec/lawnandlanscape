import { useRef, useState, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    const el = containerRef.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }, [updatePosition])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current?.hasPointerCapture(e.pointerId)) return
    updatePosition(e.clientX)
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className="ba-slider rounded-2xl aspect-[4/3] select-none overflow-hidden shadow-lg"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      {/* Before (full width background) */}
      <img src={before} alt="Before" className="w-full h-full object-cover" draggable={false} loading="lazy" />
      <span className="absolute top-3 left-3 bg-gray-900/70 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full z-20">BEFORE</span>

      {/* After (clipped from right) */}
      <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={after} alt="After" className="w-full h-full object-cover" draggable={false} loading="lazy" />
        <span className="absolute top-3 right-3 bg-brand-green/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full z-20">AFTER</span>
      </div>

      {/* Divider line + handle */}
      <div className="ba-divider" style={{ left: `${position}%` }} />
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-green">
          <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

const showcaseImages = [
  { src: '/images/gallery-hedges.jpg', alt: 'Expert hedge trimming and flower bed maintenance' },
  { src: '/images/gallery-shrubs.jpg', alt: 'Professional shrub shaping and mulch installation' },
  { src: '/images/after-mulch.jpg', alt: 'Complete landscape refresh with mulch and plantings' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-lime font-semibold text-xs uppercase tracking-[0.2em] mb-3 bg-brand-lime/10 px-3 py-1 rounded-full">Our Work</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4">
            Before &amp; After
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            See the transformation we bring to every property
          </p>
        </div>

        {/* Interactive Before/After slider */}
        <div className="max-w-2xl mx-auto mb-16">
          <BeforeAfterSlider
            before="/images/before-overgrown.jpg"
            after="/images/after-landscaping.jpg"
          />
          <p className="text-center text-gray-400 text-xs mt-3">Drag the slider to compare</p>
        </div>

        {/* Photo grid */}
        <div className="stagger grid grid-cols-1 sm:grid-cols-3 gap-4">
          {showcaseImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
