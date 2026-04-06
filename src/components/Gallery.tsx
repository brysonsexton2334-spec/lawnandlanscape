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
      className="ba-slider rounded-2xl aspect-[4/3] select-none overflow-hidden shadow-lg bg-gray-100"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      {/* Before (full background) */}
      <img src={before} alt="Before" className="w-full h-full object-cover" draggable={false} loading="lazy" />
      <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-bold px-3 py-1 rounded-md z-20 shadow-sm">Before</span>

      {/* After (clipped from right) */}
      <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={after} alt="After" className="w-full h-full object-cover" draggable={false} loading="lazy" />
        <span className="absolute top-3 right-3 bg-brand-green text-white text-[11px] font-bold px-3 py-1 rounded-md z-20 shadow-sm">After</span>
      </div>

      {/* Divider line */}
      <div className="ba-divider" style={{ left: `${position}%` }} />

      {/* Blue handle */}
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <div className="w-7 h-7 rounded-full bg-blue-500 shadow-lg flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
            <path d="M4 3L1 7L4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 3L13 7L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const pairs = [
  { before: '/images/before-overgrown.jpg', after: '/images/IMG_1590.jpg' },
  { before: '/images/after-landscaping.jpg', after: '/images/after-mulch.jpg' },
  { before: '/images/gallery-hedges.jpg', after: '/images/gallery-shrubs.jpg' },
]

export default function Gallery() {
  const ref = useReveal()

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-3">
            Before &amp; After
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            See the transformation we bring to every property
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pairs.map((pair, i) => (
            <BeforeAfterSlider key={i} before={pair.before} after={pair.after} />
          ))}
        </div>
      </div>
    </section>
  )
}
