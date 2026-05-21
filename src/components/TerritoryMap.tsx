'use client'
import { useEffect, useRef, useState } from 'react'

const cities = [
  { name: 'Hyderabad', cx: 210, cy: 195, delay: 0 },
  { name: 'Warangal', cx: 255, cy: 175, delay: 0.3 },
  { name: 'Karimnagar', cx: 245, cy: 145, delay: 0.6 },
  { name: 'Nizamabad', cx: 195, cy: 135, delay: 0.9 },
  { name: 'Visakhapatnam', cx: 370, cy: 155, delay: 1.2 },
  { name: 'Vijayawada', cx: 290, cy: 255, delay: 1.5 },
  { name: 'Guntur', cx: 275, cy: 275, delay: 1.8 },
  { name: 'Kurnool', cx: 225, cy: 285, delay: 2.1 },
  { name: 'Nellore', cx: 270, cy: 330, delay: 2.4 },
  { name: 'Tirupati', cx: 240, cy: 370, delay: 2.7 },
]

export default function TerritoryMap() {
  const ref = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <svg ref={ref} viewBox="0 0 500 450" className="w-full max-w-2xl mx-auto" style={{ filter: 'drop-shadow(0 0 30px rgba(58,140,181,0.2))' }}>
      {/* Telangana outline (simplified) */}
      <path
        d="M160,100 L200,80 L260,85 L310,100 L330,130 L320,160 L290,180 L280,210 L260,220 L240,215 L220,225 L200,220 L180,210 L165,190 L155,165 L150,140 Z"
        fill="rgba(58,140,181,0.08)" stroke="#3A8CB5" strokeWidth="1.5" strokeDasharray="4,3"
      />
      {/* AP outline (simplified) */}
      <path
        d="M200,220 L220,225 L240,215 L260,220 L280,210 L300,230 L320,250 L330,280 L320,310 L300,340 L270,360 L240,380 L210,390 L185,375 L170,350 L165,320 L170,290 L180,265 L185,240 Z"
        fill="rgba(200,232,245,0.15)" stroke="#89CCE8" strokeWidth="1.5" strokeDasharray="4,3"
      />
      {/* State label */}
      <text x="220" y="165" fill="#3A8CB5" fontSize="11" fontFamily="Inter,sans-serif" opacity="0.8" textAnchor="middle">TELANGANA</text>
      <text x="255" y="300" fill="#2A7A9E" fontSize="11" fontFamily="Inter,sans-serif" opacity="0.8" textAnchor="middle">ANDHRA PRADESH</text>

      {/* City pins */}
      {cities.map((c) => (
        <g key={c.name} style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-20px)',
          transition: `opacity 0.4s ease ${c.delay}s, transform 0.4s ease ${c.delay}s`,
        }}>
          {/* Ripple */}
          <circle cx={c.cx} cy={c.cy} r="8" fill="none" stroke="#FF7A1A" strokeWidth="1"
            style={{ animation: visible ? `ripple-pin 1.5s ease-out ${c.delay + 0.5}s infinite` : 'none', opacity: 0.5 }} />
          {/* Pin dot */}
          <circle cx={c.cx} cy={c.cy} r="4" fill="#FF7A1A" />
          <circle cx={c.cx} cy={c.cy} r="2" fill="#FFF0E6" />
          {/* Label */}
          <text x={c.cx + 8} y={c.cy + 4} fill="#2C1A00" fontSize="9" fontFamily="Inter,sans-serif" opacity="0.85">{c.name}</text>
        </g>
      ))}
    </svg>
  )
}
