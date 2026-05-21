'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const wipeRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = wipeRef.current
    if (!el) return
    gsap.fromTo(el,
      { scaleX: 1, transformOrigin: 'left' },
      { scaleX: 0, transformOrigin: 'right', duration: 0.6, ease: 'power3.inOut', delay: 0.05 }
    )
  }, [pathname])

  return (
    <>
      <div ref={wipeRef} className="page-wipe" />
      {children}
    </>
  )
}
