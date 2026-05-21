'use client'
import FadeUp from '@/components/FadeUp'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const contactDetails = [
  { icon: <Phone size={20} />, label: 'Phone', lines: ['88862 39992', '94942 20239'], href: 'tel:8886239992' },
  { icon: <Mail size={20} />, label: 'Email', lines: ['teekshikabeverages@gmail.com'], href: 'mailto:teekshikabeverages@gmail.com' },
  { icon: <MapPin size={20} />, label: 'Address', lines: ['8-122/66, Main Road Kalidindi,', 'Kalidindi Mandal, Eluru Dist - 521344'] },
  { icon: <InstagramIcon />, label: 'Instagram', lines: ['@aurahwater'], href: 'https://www.instagram.com/aurahwater' },
]

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 pb-16 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 10vw, 130px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 0.95 }}>
              LET'S<br />
              <span style={{ color: '#D85A00' }}>CONNECT.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT DETAILS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactDetails.map((c, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full group hover:border-[#D85A00]/40 transition-all duration-300 shadow-sm">
                <div className="text-[#D85A00] mb-3">{c.icon}</div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#aaa' }}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="hover:text-[#D85A00] transition-colors" data-cursor>
                    {c.lines.map((l, j) => (
                      <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#2C1A00', lineHeight: 1.6 }}>{l}</p>
                    ))}
                  </a>
                ) : (
                  c.lines.map((l, j) => (
                    <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#2C1A00', lineHeight: 1.6 }}>{l}</p>
                  ))
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="py-16 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeUp>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '16px' }}>Find Us</h2>
            <div className="rounded-2xl overflow-hidden border border-[#D85A00]/10 shadow-sm" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30618.5!2d81.1!3d16.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b0!2sKalidindi!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://wa.me/918886239992" target="_blank" rel="noopener noreferrer"
              className="btn-liquid mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }} data-cursor>
              <span className="flex items-center gap-2"><MessageCircle size={18} />Chat on WhatsApp</span>
            </a>
          </FadeUp>

          <FadeUp delay={0.15}>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '16px' }}>Send a Message</h2>
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </>
  )
}
