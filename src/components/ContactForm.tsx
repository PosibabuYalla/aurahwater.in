'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string; email: string; phone: string; message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>()
  const [sent, setSent] = useState(false)

  const onSubmit = async (data: FormData) => {
    const text = `*New Message — AURAH Website*

*Name:* ${data.name}
*Phone:* ${data.phone || 'N/A'}
*Email:* ${data.email}

*Message:*
${data.message}`

    const url = `https://wa.me/918886239992?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSent(true)
    reset()
  }

  const inputClass = `w-full bg-white border border-[#D85A00]/20 rounded-lg px-4 py-3 text-[#2C1A00] text-sm placeholder-[#bbb] focus:outline-none focus:border-[#D85A00] transition-colors`

  if (sent) return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <CheckCircle size={48} className="text-[#D85A00]" />
      <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', color: '#2C1A00', letterSpacing: '0.04em' }}>Message Sent!</p>
      <p className="text-[#888] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>We'll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input {...register('name', { required: true })} placeholder="Your Name" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
          {errors.name && <p className="text-[#D85A00] text-xs mt-1">Name is required</p>}
        </div>
        <div>
          <input {...register('phone')} placeholder="Phone Number" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
      </div>
      <div>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email Address" className={inputClass} style={{ fontFamily: 'Inter, sans-serif' }} />
        {errors.email && <p className="text-[#D85A00] text-xs mt-1">Valid email required</p>}
      </div>
      <div>
        <textarea {...register('message', { required: true })} placeholder="Your Message" rows={5} className={`${inputClass} resize-none`} style={{ fontFamily: 'Inter, sans-serif' }} />
        {errors.message && <p className="text-[#D85A00] text-xs mt-1">Message is required</p>}
      </div>
      <button type="submit" disabled={isSubmitting}
        className="btn-liquid w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm tracking-wide disabled:opacity-50"
        style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className="flex items-center gap-2">
          {isSubmitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
        </span>
      </button>
    </form>
  )
}
