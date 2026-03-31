import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your needs (min 10 chars)'),
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
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-brand-lime font-semibold text-sm uppercase tracking-widest">Contact Us</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 leading-tight">
              Let's Get Your<br />Yard Looking Great
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Fill out the form and we'll get back to you with a free, no-obligation quote within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="font-semibold">Call or Text</div>
                  <a href="tel:+18173002215" className="text-brand-lime hover:underline">(817) 300-2215</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <a href="mailto:brysonsexton2334@gmail.com" className="text-brand-lime hover:underline">brysonsexton2334@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-white/70">Northwest Arkansas & Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 text-brand-dark space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name *</label>
              <input
                {...register('name')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
                placeholder="John Smith"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  placeholder="you@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
                  placeholder="(479) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Service Needed *</label>
              <select
                {...register('service')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
              >
                <option value="">Select a service...</option>
                <option>Lawn Mowing & Maintenance</option>
                <option>Landscaping Design</option>
                <option>Mulching & Bed Care</option>
                <option>Tree & Shrub Trimming</option>
                <option>Leaf Removal</option>
                <option>Sod & Seeding</option>
                <option>Other / Not Sure</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Tell Us About Your Yard *</label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
                placeholder="Describe your property, what needs done, or any questions you have..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-lime transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send My Quote Request'}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-600 font-semibold">
                ✅ Request sent! We'll be in touch within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-500 font-semibold">
                Something went wrong. Please try calling us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
