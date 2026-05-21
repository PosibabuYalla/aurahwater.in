'use client'
import FadeUp from '@/components/FadeUp'
import TerritoryMap from '@/components/TerritoryMap'
import DistributionForm from '@/components/DistributionForm'
import { MessageCircle } from 'lucide-react'

const reasons = [
  { num: '01', title: 'Growing Demand', desc: 'Premium packaged water market is rapidly expanding across AP & Telangana. Get in early.' },
  { num: '02', title: 'Reliable Supply Chain', desc: 'Direct supply from our Kalidindi facility — consistent stock, no middlemen.' },
  { num: '03', title: 'Strong Brand Support', desc: 'Marketing materials, social media presence, and dedicated partner support.' },
]

const districts = {
  telangana: ['Hyderabad', 'Rangareddy', 'Medchal', 'Warangal', 'Karimnagar', 'Nizamabad', 'Adilabad'],
  ap: ['Srikakulam', 'Vizianagaram', 'Visakhapatnam', 'East Godavari', 'West Godavari', 'Krishna', 'Guntur', 'Prakasam', 'Nellore', 'Kurnool', 'Anantapur', 'Chittoor'],
}

export default function DistributionPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 pb-20 bg-[#FFF8F2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(216,90,0,0.4), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: '#D85A00', letterSpacing: '0.2em' }}>PARTNERSHIP OPPORTUNITY</span>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 9vw, 120px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 0.95, marginTop: '12px' }}>
              JOIN THE<br />
              <span style={{ color: '#D85A00' }}>NETWORK.</span>
            </h1>
            <p className="mt-6 max-w-lg" style={{ fontFamily: 'Inter, sans-serif', color: '#666', lineHeight: 1.8 }}>
              Distribution Partners Wanted in AP & Telangana. Be part of a growing premium water brand.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-12">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Why Partner With <span style={{ color: '#D85A00' }}>AURAH</span>
            </h2>
          </FadeUp>
          <div className="space-y-0">
            {reasons.map((r, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex gap-8 py-8 border-b border-[#D85A00]/10 group">
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', color: 'rgba(216,90,0,0.12)', letterSpacing: '0.04em', lineHeight: 1, minWidth: '100px', transition: 'color 0.3s' }}
                    className="group-hover:!text-[#D85A00]/25">
                    {r.num}
                  </span>
                  <div className="pt-2">
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '8px' }}>{r.title}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{r.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITORY MAP */}
      <section className="py-20 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Coverage <span style={{ color: '#D85A00' }}>Area</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <TerritoryMap />
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#3A8CB5', letterSpacing: '0.1em', marginBottom: '10px' }}>TELANGANA</h3>
                  <div className="flex flex-wrap gap-2">
                    {districts.telangana.map(d => (
                      <span key={d} className="px-3 py-1 rounded-full text-xs border border-[#3A8CB5]/30 text-[#3A8CB5] bg-[#C8E8F5]/20" style={{ fontFamily: 'Inter, sans-serif' }}>{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#2A7A9E', letterSpacing: '0.1em', marginBottom: '10px' }}>ANDHRA PRADESH</h3>
                  <div className="flex flex-wrap gap-2">
                    {districts.ap.map(d => (
                      <span key={d} className="px-3 py-1 rounded-full text-xs border border-[#89CCE8]/40 text-[#2A7A9E] bg-[#E8F5F0]/40" style={{ fontFamily: 'Inter, sans-serif' }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PARTNER FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp className="text-center mb-10">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Apply to <span style={{ color: '#D85A00' }}>Partner</span>
            </h2>
            <p className="mt-3 text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#888' }}>
              Fill in your details and our team will reach out within 48 hours.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <DistributionForm />
          </FadeUp>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-16 bg-[#FFF0E6] border-t border-[#D85A00]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, sans-serif', color: '#aaa' }}>Call Us Directly</p>
            <a href="tel:8886239992" className="pulse-border inline-block" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '0.04em', color: '#D85A00' }}>
              88862 39992
            </a>
          </div>
          <a href="https://wa.me/918886239992" target="_blank" rel="noopener noreferrer"
            className="btn-liquid flex items-center gap-3 px-8 py-4 rounded-full font-medium" style={{ fontFamily: 'Inter, sans-serif' }} data-cursor>
            <span className="flex items-center gap-2"><MessageCircle size={18} />WhatsApp Us</span>
          </a>
        </div>
      </section>
    </>
  )
}
