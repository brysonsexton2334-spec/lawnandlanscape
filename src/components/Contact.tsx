import { useState } from 'react'
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

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-dark mt-3 mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ready to transform your lawn? Reach out today for a free quote!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-brand-dark mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-light rounded-full flex items-center justify-center text-lg flex-shrink-0">📞</div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Phone</div>
                    <a href="tel:+18173002215" className="text-brand-green font-medium hover:text-brand-lime transition-colors">(817) 300-2215</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-light rounded-full flex items-center justify-center text-lg flex-shrink-0">📍</div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Service Area</div>
                    <div className="text-gray-500 text-sm">Fayetteville, Bentonville, Rogers,<br />Springdale &amp; surrounding areas</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-light rounded-full flex items-center justify-center text-lg flex-shrink-0">🕐</div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Business Hours</div>
                    <div className="text-gray-500 text-sm">Every Day · 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-light rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚡</span>
                <span className="font-display font-bold text-brand-dark">Quick Response Guarantee</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent requests, text us for the fastest response!
              </p>
              <a
                href="sms:+18173002215"
                className="inline-block mt-4 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-lime transition-colors"
              >
                📱 Text Now for Faster Response
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-brand-light rounded-3xl p-8 space-y-5">
            <h3 className="font-display font-bold text-xl text-brand-dark">Request Free Estimate</h3>

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1">Name *</label>
              <input
                {...register('name')}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">Phone *</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  placeholder="(817) 300-2215"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  placeholder="you@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1">Address *</label>
              <input
                {...register('address')}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="Your property address"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1">Service Needed *</label>
              <select
                {...register('service')}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
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
              className="w-full bg-brand-green text-white py-4 rounded-xl font-bold hover:bg-brand-lime transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Request Free Estimate'}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-600 font-semibold text-sm">
                ✅ Request sent! We'll be in touch within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-500 font-semibold text-sm">
                Something went wrong. Please text us directly at (817) 300-2215.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
