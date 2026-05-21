'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Bottle3D() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      el.style.transform = `rotateY(${dx * 12}deg) rotateX(${-dy * 8}deg)`
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '800px',
      }}
    >
      <div
        ref={ref}
        style={{
          width: '100%',
          height: '100%',
          transition: 'transform 0.12s ease-out',
          transformStyle: 'preserve-3d',
          animation: 'bottle-shake 3.5s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/500ml.png"
          alt="AURAH 500ml Water Bottle"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
      </div>

      <style>{`
        @keyframes bottle-shake {
          0%   { transform: translateY(0px) rotate(-1deg); }
          20%  { transform: translateY(-14px) rotate(1.2deg); }
          40%  { transform: translateY(-6px) rotate(-0.8deg); }
          60%  { transform: translateY(-18px) rotate(1deg); }
          80%  { transform: translateY(-8px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}
