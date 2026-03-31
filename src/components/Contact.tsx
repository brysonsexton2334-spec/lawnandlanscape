import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useReveal } from '../hooks/useReveal'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(7, 'Phone number is required'),
  email: z.string().email('Valid email required'),
  address: z.string().min(5, 'Property address is required'),
  service: z.string().min(1, 'Please select a service'),
})

type FormData = z.infer<typeof schema>

function Input({ label, error, ...props }: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-dark mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-gray-300"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const ref = useReveal()

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
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-lime font-semibold text-xs uppercase tracking-[0.2em] mb-3 bg-brand-lime/10 px-3 py-1 rounded-full">Contact</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-dark mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto">
            Ready to transform your lawn? Reach out today for a free quote!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Left: contact info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-display font-bold text-lg text-brand-dark">Contact Information</h3>

            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Phone', value: '(817) 300-2215', href: 'tel:+18173002215' },
                { icon: '📍', label: 'Service Area', value: 'Fayetteville, Bentonville, Rogers, Springdale & surrounding areas' },
                { icon: '🕐', label: 'Business Hours', value: 'Every Day · 9:00 AM – 7:00 PM' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center text-base flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-brand-green text-sm font-medium hover:text-brand-lime transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-gray-400 text-sm leading-relaxed">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick response box */}
            <div className="bg-brand-dark rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚡</span>
                <span className="font-display font-bold text-sm">Quick Response Guarantee</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We typically respond to all inquiries within 24 hours. For urgent requests, text us for the fastest response!
              </p>
              <a
                href="sms:+18173002215"
                className="inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-5 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all active:scale-95"
              >
                📱 Text Now for Faster Response
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 bg-brand-light rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-display font-bold text-lg text-brand-dark mb-2">Request Free Estimate</h3>

            <Input label="Name *" placeholder="Your full name" error={errors.name?.message} {...register('name')} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Phone *" placeholder="(555) 123-4567" type="tel" error={errors.phone?.message} {...register('phone')} />
              <Input label="Email *" placeholder="you@email.com" type="email" error={errors.email?.message} {...register('email')} />
            </div>

            <Input label="Address *" placeholder="Your property address" error={errors.address?.message} {...register('address')} />

            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Service Needed *</label>
              <select
                {...register('service')}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
              >
                <option value="">Select a service...</option>
                <option>Lawn Mowing & Maintenance</option>
                <option>Mulch & Rock Installation</option>
                <option>Yard Cleanups</option>
                <option>Hedge & Bush Trimming</option>
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
    </section>
  )
}
