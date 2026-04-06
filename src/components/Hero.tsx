import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(7, 'Phone number is required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(5, 'Property address is required'),
  service: z.string().min(1, 'Please select a service'),
})

type FormData = z.infer<typeof schema>

export default function Hero({ location }: { location?: string }) {
  const [loaded, setLoaded] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
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

      <div className={`relative w-full max-w-6xl mx-auto px-5 sm:px-6 py-32 sm:py-36 transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Hero text */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-7 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              Student-Owned &amp; Locally Operated
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-6">
              Reliable Lawn Care
              <br />
              <span className="bg-gradient-to-r from-brand-lime to-emerald-300 bg-clip-text text-transparent">
                &amp; Landscaping
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90">
                in {location || 'Northwest Arkansas'}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/75 max-w-xl mb-10 leading-relaxed">
              Student-owned and operated. 5+ years of experience delivering clean, professional lawns.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="bg-brand-lime text-brand-dark px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:brightness-110 transition-all duration-300 shadow-xl shadow-brand-lime/25 active:scale-95 text-center"
              >
                Get a Free Quote
              </a>
              <a
                href="sms:+18173002215"
                className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 active:scale-95 text-center"
              >
                📱 Text for Fast Service
              </a>
            </div>
          </div>

          {/* Right: Estimate form */}
          <div className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-brand-light rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl shadow-black/20"
            >
              <h3 className="font-display font-bold text-lg text-brand-dark mb-1">
                Request Free Estimate
              </h3>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Name *</label>
                <input
                  {...register('name')}
                  placeholder="Your full name"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-gray-300"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">Phone *</label>
                  <input
                    {...register('phone')}
                    placeholder="(555) 123-4567"
                    type="tel"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-gray-300"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">Email *</label>
                  <input
                    {...register('email')}
                    placeholder="you@email.com"
                    type="email"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-gray-300"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Address *</label>
                <input
                  {...register('address')}
                  placeholder="Your property address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-gray-300"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Service Needed *</label>
                <select
                  {...register('service')}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                >
                  <option value="">Select a service...</option>
                  <option>Lawn Mowing &amp; Maintenance</option>
                  <option>Mulch &amp; Rock Installation</option>
                  <option>Yard Cleanups</option>
                  <option>Hedge &amp; Bush Trimming</option>
                  <option>Landscape Refreshes</option>
                  <option>Seasonal Property Maintenance</option>
                  <option>Other / Not Sure</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-brand-green text-white py-3.5 rounded-xl font-bold text-sm hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 disabled:opacity-60 active:scale-[0.98] shadow-md shadow-brand-green/20 mt-2"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" /></svg>
                    Sending...
                  </span>
                ) : 'Request Free Estimate'}
              </button>

              {status === 'success' && (
                <div className="text-center bg-green-50 text-green-700 rounded-xl py-3 px-4 text-sm font-medium">
                  ✅ Request sent! We'll be in touch within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="text-center bg-red-50 text-red-600 rounded-xl py-3 px-4 text-sm font-medium">
                  Something went wrong. Please text us directly at (817) 300-2215.
                </div>
              )}
            </form>
          </div>
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
