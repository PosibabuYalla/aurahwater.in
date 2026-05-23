'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string; phone: string; city: string; type: string; message: string
}

const MAKE_WEBHOOK = 'https://hook.eu1.make.com/21ydbj5aazm1kkqrcgxursvabe625jtd'

export default function DistributionForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async (data: FormData) => {
    setError(false)
    try {
      const res = await fetch(MAKE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          city: data.city,
          type: data.type,
          message: data.message || '',
          submitted_at: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      reset()
    } catch {
      setError(true)
    }
  }

  const inputClass = `w-full bg-white border border-[#D85A00]/20 rounded-lg px-4 py-3 text-[#2C1A00] text-sm placeholder-[#bbb] focus:outline-none focus:border-[#D85A00] transition-colors`

  if (sent) return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <CheckCircle size={48} className="text-[#D85A00]" />
      <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', color: '#2C1A00', letterSpacing: '0.04em' }}>Application Received!</p>
      <p className="text-[#888] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Our team will contact you within 48 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <p className="text-center text-sm text-[#D85A00]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Something went wrong. Please call <a href="tel:8886239992" className="underline">88862 39992</a> directly.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input {...register('name', { required: true })} placeholder="Full Name" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.name && <p className="text-[#D85A00] text-xs mt-1">Required</p>}
        </div>
        <div>
          <input {...register('phone', { required: true })} placeholder="Phone Number" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.phone && <p className="text-[#D85A00] text-xs mt-1">Required</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input {...register('city', { required: true })} placeholder="City / District" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.city && <p className="text-[#D85A00] text-xs mt-1">Required</p>}
        </div>
        <div>
          <select {...register('type', { required: true })} className={`${inputClass} cursor-none`} style={{ fontFamily: 'Inter, sans-serif' }}>
            <option value="">Partner Type</option>
            <option value="Distributor">Distributor</option>
            <option value="Retailer">Retailer</option>
            <option value="Hotel">Hotel / Restaurant</option>
          </select>
          {errors.type && <p className="text-[#D85A00] text-xs mt-1">Required</p>}
        </div>
      </div>
      <textarea {...register('message')} placeholder="Tell us about your business (optional)" rows={4} className={`${inputClass} resize-none`} style={{ fontFamily: 'Inter, sans-serif' }} />
      <button type="submit" disabled={isSubmitting}
        className="btn-liquid w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm tracking-wide disabled:opacity-50"
        style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className="flex items-center gap-2">
          {isSubmitting ? 'Sending...' : <><Send size={16} /> Submit Application</>}
        </span>
      </button>
    </form>
  )
}
