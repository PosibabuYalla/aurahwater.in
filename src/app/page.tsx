'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircle, Droplets, Shield, Star, ArrowRight } from 'lucide-react'
import FadeUp from '@/components/FadeUp'
import Counter from '@/components/Counter'
import TerritoryMap from '@/components/TerritoryMap'
import TypedText from '@/components/TypedText'

const HeroWaves = dynamic(() => import('@/components/HeroWaves'), { ssr: false })
const WaterParticles = dynamic(() => import('@/components/WaterParticles'), { ssr: false })
import Bottle3D from '@/components/Bottle3D'

const marqueeItems = ['100% PURE', 'ADVANCED FILTRATION', 'BALANCED pH', 'ECO FRIENDLY', 'SAFE & HYGIENIC', 'PURE MINERALS']

const features = [
  'Treated water with balanced minerals',
  'Advanced multi-stage filtration',
  'pH balanced for optimal hydration',
  'BIS Certified quality standards',
  'FSSAI Licensed production',
  'Eco-friendly crushable bottle',
]

const trustCards = [
  { icon: <Droplets size={32} />, title: 'Pure Minerals', desc: 'Calcium, Magnesium & Potassium — essential minerals retained for healthy hydration.' },
  { icon: <Shield size={32} />, title: 'Advanced Filtration', desc: 'Multi-stage purification process ensuring 99.9% purity in every drop.' },
  { icon: <Star size={32} />, title: 'Healthy Choice', desc: 'Balanced pH water that supports your body\'s natural functions every day.' },
]

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t) }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FFF8F2 40%, #FFF0E6 100%)' }}>

        {/* Animated water waves at bottom */}
        <HeroWaves />

        {/* Subtle water particles */}
        <WaterParticles />

        {/* Large decorative circle bg */}
        <div className="absolute -right-32 -top-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,232,245,0.25) 0%, transparent 70%)' }} />
        <div className="absolute -left-20 bottom-20 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(216,90,0,0.06) 0%, transparent 70%)' }} />

        {/* Main content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 pb-32">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full pulse-border"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(216,90,0,0.3)',
                backdropFilter: 'blur(8px)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#D85A00] inline-block" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#D85A00', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                Now distributing — AP &amp; Telangana
              </span>
            </div>

            {/* Main headline */}
            <div className="overflow-hidden mb-2">
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(80px, 12vw, 160px)',
                lineHeight: 0.88,
                letterSpacing: '0.03em',
                color: '#2C1A00',
                transform: heroVisible ? 'translateY(0)' : 'translateY(110%)',
                transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
              }}>
                AURAH
              </div>
            </div>

            {/* Sub headline */}
            <div className="overflow-hidden mb-6">
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(28px, 4vw, 52px)',
                lineHeight: 1,
                letterSpacing: '0.06em',
                color: '#D85A00',
                transform: heroVisible ? 'translateY(0)' : 'translateY(110%)',
                transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s',
              }}>
                PACKAGED DRINKING WATER
              </div>
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#666',
              lineHeight: 1.7,
              maxWidth: '420px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}>
              Pure Today. Promising Tomorrow.<br />
              <span style={{ color: '#aaa', fontSize: '14px' }}>Serving Telangana &amp; Andhra Pradesh</span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8" style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
            }}>
              <Link href="/distribution" className="btn-liquid flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="flex items-center gap-2">Partner With Us <ArrowRight size={16} /></span>
              </Link>
              <Link href="/products"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#FFF0E6]"
                style={{ fontFamily: 'Inter, sans-serif', border: '1.5px solid rgba(216,90,0,0.3)', color: '#D85A00' }}>
                Our Product
              </Link>
            </div>

            {/* Floating stat cards */}
            <div className="flex flex-wrap gap-4 mt-10" style={{
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 0.7s ease 0.9s',
            }}>
              {[
                { value: '99.9%', label: 'Pure' },
                { value: '₹10', label: 'MRP 500ml' },
                { value: 'BIS', label: 'Certified' },
              ].map((s, i) => (
                <div key={i} className="hero-stat px-5 py-3 shimmer relative overflow-hidden">
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#D85A00', letterSpacing: '0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Bottle ── */}
          <div className="flex items-center justify-center relative">
            {/* Glow ring behind bottle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '380px', height: '380px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,232,245,0.5) 0%, rgba(216,90,0,0.08) 50%, transparent 70%)',
                opacity: heroVisible ? 1 : 0,
                transition: 'opacity 1s ease 0.5s',
              }} />
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '460px', height: '460px', borderRadius: '50%',
                border: '1px solid rgba(216,90,0,0.1)',
                opacity: heroVisible ? 1 : 0,
                transition: 'opacity 1s ease 0.8s',
              }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: '540px', height: '540px', borderRadius: '50%',
                border: '1px dashed rgba(200,232,245,0.4)',
                opacity: heroVisible ? 1 : 0,
                transition: 'opacity 1s ease 1s',
              }} />
            </div>

            {/* Bottle */}
            <div
              className="relative z-10 orange-glow float-bottle"
              style={{
                width: 'clamp(260px, 30vw, 380px)',
                height: 'clamp(480px, 55vw, 680px)',
                opacity: heroVisible ? 1 : 0,
                transition: 'opacity 0.8s ease 0.4s',
              }}
            >
              <Bottle3D />
            </div>

            {/* Floating water drop badges */}
            {[
              { top: '15%', left: '-5%', text: 'pH Balanced', delay: '1.1s' },
              { top: '55%', right: '-8%', text: 'FSSAI Licensed', delay: '1.3s' },
              { bottom: '18%', left: '0%', text: 'Eco Friendly', delay: '1.5s' },
            ].map((b, i) => (
              <div key={i} className="absolute hero-stat px-3 py-2"
                style={{
                  top: b.top, left: (b as any).left, right: (b as any).right, bottom: b.bottom,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'scale(1)' : 'scale(0.7)',
                  transition: `opacity 0.5s ease ${b.delay}, transform 0.5s ease ${b.delay}`,
                }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#D85A00', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {b.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ opacity: heroVisible ? 1 : 0, transition: 'opacity 0.6s ease 1.6s' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: '#bbb', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D85A00] to-transparent bounce-dot" />
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 wave-bg" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, #3A8CB5, transparent)' }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 1.1 }}>
              Not just water —<br />
              <span style={{ color: '#D85A00' }}>a standard.</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#666', lineHeight: 1.8 }}>
              At AURAH, we believe every drop matters. From our facility in Kalidindi to your hands —
              purity is not a promise, it's our process.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <section className="py-5 bg-[#FFF0E6] overflow-hidden border-y border-[#D85A00]/15">
        <div className="flex whitespace-nowrap marquee-left">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '0.1em', color: '#2C1A00' }}>
              {item}
              <span style={{ color: '#D85A00', fontSize: '8px' }}>●</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── PRODUCT SPOTLIGHT ── */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(216,90,0,0.07) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
          <FadeUp className="space-y-8">
            {[{ to: 99, suffix: '.9%', label: 'Purity Guaranteed' }, { to: 500, suffix: 'ml', label: 'Perfect Serving Size' }, { to: 6, suffix: ' mo', label: 'Shelf Life' }].map((c, i) => (
              <div key={i} className="text-center md:text-right">
                <div className="counter-num"><Counter to={c.to} suffix={c.suffix} /></div>
                <p className="text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif', color: '#888' }}>{c.label}</p>
              </div>
            ))}
          </FadeUp>

          <FadeUp delay={0.1} className="flex justify-center">
            <div className="w-[200px] h-[400px] md:w-[240px] md:h-[480px] orange-glow">
              <Bottle3D />
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#D85A00] mt-0.5 shrink-0" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#2C1A00' }}>{f}</span>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── TERRITORY MAP ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              <TypedText text="WE'RE ALREADY THERE." />
            </h2>
            <p className="mt-4" style={{ fontFamily: 'Inter, sans-serif', color: '#888' }}>
              Serving Telangana & Andhra Pradesh — district by district.
            </p>
          </FadeUp>
          <TerritoryMap />
        </div>
      </section>

      {/* ── TRUST CARDS ── */}
      <section className="py-24 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Why Choose <span style={{ color: '#D85A00' }}>AURAH</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustCards.map((card, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 hover:border-[#D85A00]/40 transition-all duration-300 hover:-translate-y-2 group shadow-sm">
                  <div className="text-[#D85A00] mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '12px' }}>{card.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative py-32 overflow-hidden bg-[#FFF0E6]">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(216,90,0,0.08) 0%, rgba(255,248,242,0.95) 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 7vw, 96px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 1 }}>
              BECOME A<br />
              <span style={{ color: '#D85A00' }}>DISTRIBUTION PARTNER</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6" style={{ fontFamily: 'Inter, sans-serif', color: '#666' }}>
              Call <a href="tel:8886239992" className="text-[#D85A00] hover:text-[#FF7A1A]">88862 39992</a>
              {' · '}
              <a href="mailto:teekshikabeverages@gmail.com" className="text-[#D85A00] hover:text-[#FF7A1A]">teekshikabeverages@gmail.com</a>
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link href="/distribution" className="btn-liquid inline-block mt-10 px-12 py-5 rounded-full text-base font-semibold tracking-widest uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Apply Now</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
