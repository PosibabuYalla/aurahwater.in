import Image from 'next/image'

export default function MFUnitsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FFF8F2 40%, #FFF0E6 100%)' }}>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">

        {/* Card */}
        <div className="glass rounded-3xl p-10 w-full md:w-1/2 shadow-xl border border-[#D85A00]/15"
          style={{ backdropFilter: 'blur(20px)' }}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#D85A00]/10 flex items-center justify-center shrink-0">
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', color: '#D85A00' }}>SB</span>
          </div>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Manufactured by
            </p>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#2C1A00', letterSpacing: '0.04em', lineHeight: 1.1 }}>
              Swathi Beverages
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#D85A00]/10 mb-8" />

        {/* Address */}
        <div className="mb-8">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Address
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#2C1A00', lineHeight: 1.8 }}>
            Flat No 23, Sreeram Nagar Layout,<br />
            Peddagollapalem, Sabbavaram Mandal,<br />
            Anakapalli District,<br />
            Andhra Pradesh — 531305
          </p>
        </div>

        {/* FSSAI */}
        <div className="rounded-2xl px-6 py-4 mb-8"
          style={{ background: 'rgba(216,90,0,0.06)', border: '1px solid rgba(216,90,0,0.12)' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
            FSSAI License No.
          </p>
          <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '26px', color: '#D85A00', letterSpacing: '0.12em' }}>
            10125016000031
          </p>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#666', letterSpacing: '0.06em' }}>
            Licensed &amp; Certified Beverage Manufacturer
          </p>
        </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/heroOfMF-unit.png"
            alt="Swathi Beverages Manufacturing Unit"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,26,0,0.45) 0%, transparent 60%)' }} />
          <div className="absolute bottom-5 left-5">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Manufacturing Unit</p>
            <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#FFFFFF', letterSpacing: '0.06em', lineHeight: 1.1 }}>Swathi Beverages</p>
          </div>
        </div>

      </div>
    </main>
  )
}
