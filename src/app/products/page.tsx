'use client'
import dynamic from 'next/dynamic'
import FadeUp from '@/components/FadeUp'
import { Droplets, Shield, Leaf, Star, CheckCircle, ShoppingBag, Building2, UtensilsCrossed, PartyPopper, GraduationCap } from 'lucide-react'

const Bottle3D = dynamic(() => import('@/components/Bottle3D'), { ssr: false })

const specs = [
  { label: 'Net Quantity', value: '500 ML' },
  { label: 'Max Retail Price', value: '₹10 (incl. all taxes)' },
  { label: 'Best Before', value: '6 months from manufacturing' },
  { label: 'Ingredients', value: 'Treated Water, Minerals (Calcium, Magnesium, Potassium)' },
  { label: 'Customer Care', value: '94942 20239' },
  { label: 'Email', value: 'teekshikabeverages@gmail.com' },
  { label: 'Certifications', value: 'FSSAI Licensed · BIS Certified' },
]

const featureCards = [
  { icon: <Droplets size={28} />, title: 'Pure Minerals', desc: 'Essential minerals retained for healthy hydration.' },
  { icon: <Shield size={28} />, title: 'Advanced Filtration', desc: 'Multi-stage purification — 99.9% pure.' },
  { icon: <Star size={28} />, title: 'Balanced pH', desc: 'Optimal pH for your body\'s natural balance.' },
  { icon: <Leaf size={28} />, title: 'Eco Friendly', desc: 'Crush the bottle after use. Reduce plastic waste.' },
  { icon: <CheckCircle size={28} />, title: 'Healthy Choice', desc: 'BIS & FSSAI certified quality you can trust.' },
]

const occasions = [
  { icon: <ShoppingBag size={32} />, label: 'Retail Stores' },
  { icon: <Building2 size={32} />, label: 'Corporate Offices' },
  { icon: <UtensilsCrossed size={32} />, label: 'Hotels & Restaurants' },
  { icon: <PartyPopper size={32} />, label: 'Events & Functions' },
  { icon: <GraduationCap size={32} />, label: 'Schools & Institutions' },
]

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-[#FFF8F2] text-center">
        <FadeUp>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(56px, 10vw, 130px)', letterSpacing: '0.04em', color: '#2C1A00', lineHeight: 0.95 }}>
            OUR PRODUCT
          </h1>
          <p className="mt-4" style={{ fontFamily: 'Inter, sans-serif', color: '#888' }}>
            One product. Uncompromised quality.
          </p>
        </FadeUp>
      </section>

      {/* PRODUCT DETAIL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeUp className="flex justify-center">
            <div className="w-[260px] h-[500px] orange-glow">
              <Bottle3D />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '13px', color: '#D85A00', letterSpacing: '0.2em' }}>AURAH 500ML</span>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 4vw, 56px)', color: '#2C1A00', letterSpacing: '0.04em', marginTop: '8px', lineHeight: 1.1 }}>
              Packaged<br />Drinking Water
            </h2>
            <div className="mt-8 space-y-3">
              {specs.map((s, i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-[#D85A00]/10">
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#aaa', minWidth: '160px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#2C1A00' }}>{s.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              What Makes AURAH <span style={{ color: '#D85A00' }}>Different</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((f, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 group hover:-translate-y-2 hover:border-[#D85A00]/40 transition-all duration-300 shadow-sm" data-cursor>
                  <div className="text-[#D85A00] mb-3 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', letterSpacing: '0.04em', color: '#2C1A00', marginBottom: '6px' }}>{f.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* USAGE OCCASIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-12">
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '0.04em', color: '#2C1A00' }}>
              Perfect For Every <span style={{ color: '#D85A00' }}>Occasion</span>
            </h2>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-6">
            {occasions.map((o, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl px-8 py-6 text-center hover:-translate-y-1 transition-transform duration-300 min-w-[160px] shadow-sm" data-cursor>
                  <div className="text-[#D85A00] mb-3 flex justify-center">{o.icon}</div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#2C1A00', fontWeight: 500 }}>{o.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
