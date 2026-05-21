'use client'
import { useEffect, useRef, useState } from 'react'

export default function TypedText({ text, className = '' }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState('')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let i = 0
        const interval = setInterval(() => {
          setDisplayed(text.slice(0, ++i))
          if (i >= text.length) clearInterval(interval)
        }, 60)
        obs.unobserve(el)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [text])

  return (
    <span ref={ref} className={className}>
      {displayed}
      <span className="typed-cursor">|</span>
    </span>
  )
}
