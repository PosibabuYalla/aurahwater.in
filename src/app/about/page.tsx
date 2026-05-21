'use client'
import FadeUp from '@/components/FadeUp'
import { Droplets, Shield, MapPin, Leaf } from 'lucide-react'

const timeline = [
  { year: '2022', title: 'Founded', desc: 'Teekshika Beverages established in Kalidindi, Eluru District.' },
  { year: '2023', title: 'First Bottling', desc: 'AURAH 500ml launched with BIS certification and FSSAI license.' },
  { year: '2024', title: 'AP & Telangana Launch', desc: 'Distribution network expanded across both states.' },
]

const values = [
  { icon: <Droplets size={36} />, title: 'Pure', desc: 'Multi-stage filtration with mineral balance for the cleanest water possible.' },
  { icon: <Shield size={36} />, title: 'Trusted', desc: 'BIS Certified and FSSAI Licensed — meeting every quality standard.' },
  { icon: <MapPin size={36} />, title: 'Local', desc: 'Proudly made in Kalidindi, serving the communities of AP & Telangana.' },
  { icon: <Leaf size={36} />, title: 'Eco', desc: 'Crushable bottle design reduces plastic waste. Crush after use.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,248,242,0.97) 25%, rgba(255,248,242,0.3) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 7vw, 96px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 1 }}>
            BORN FROM NATURE.<br />
            <span style={{ color: '#D85A00' }}>BUILT ON TRUST.</span>
          </h1>
        </div>
      </section>

      {/* STORY / TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative pl-8">
            <div className="timeline-line" />
            {timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.15} className="mb-12 relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#D85A00] border-2 border-white" />
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '14px', color: '#D85A00', letterSpacing: '0.1em' }}>{item.year}</span>
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', color: '#2C1A00', letterSpacing: '0.04em', marginTop: '4px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7, marginTop: '8px' }}>{item.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: '#D85A00', letterSpacing: '0.2em' }}>OUR PHILOSOPHY</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', color: '#2C1A00', letterSpacing: '0.04em', marginTop: '12px', lineHeight: 1.1 }}>
              Every Drop<br />Matters.
            </h2>
            <div className="mt-6 space-y-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8 }}>
              <p>At AURAH, we believe that water is more than hydration — it's a commitment to health, quality, and responsibility. Every bottle that leaves our facility in Kalidindi carries the promise of purity.</p>
              <p>Our advanced multi-stage filtration process removes impurities while retaining essential minerals like Calcium, Magnesium, and Potassium — giving you water that's not just clean, but genuinely nourishing.</p>
              <p>We're proud to be a local brand serving local communities. From Hyderabad to Visakhapatnam, from Warangal to Vijayawada — AURAH is there.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="py-24 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Our <span style={{ color: '#D85A00' }}>Values</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 group hover:-translate-y-2 hover:border-[#D85A00]/40 transition-all duration-300 shadow-sm" data-cursor>
                  <div className="text-[#D85A00] mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: '#D85A00', letterSpacing: '0.2em' }}>THE COMPANY</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', color: '#2C1A00', letterSpacing: '0.04em', marginTop: '12px' }}>
              Teekshika Beverages
            </h2>
            <div className="mt-6 space-y-3" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8 }}>
              <p>AURAH is a brand of Teekshika Beverages, a dedicated packaged drinking water manufacturer based in Eluru District, Andhra Pradesh.</p>
              <p>Our state-of-the-art facility follows strict quality protocols to ensure every bottle meets BIS and FSSAI standards.</p>
              <div className="mt-6 p-4 rounded-xl border border-[#D85A00]/15 bg-[#FFF0E6]">
                <p className="text-[#2C1A00] text-sm font-medium mb-2">Registered Address</p>
                <p>8-122/66, Main Road Kalidindi,<br />Kalidindi Mandal, Eluru District - 521344<br />Andhra Pradesh, India</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-[#D85A00]/10 shadow-sm" style={{ height: '380px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30618.5!2d81.1!3d16.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b0!2sKalidindi!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
