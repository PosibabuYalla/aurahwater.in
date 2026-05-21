'use client'
import { useEffect, useRef } from 'react'

interface Drop {
  x: number; y: number
  vx: number; vy: number
  r: number; opacity: number
  life: number; maxLife: number
}

interface Ripple {
  x: number; y: number
  r: number; maxR: number
  opacity: number
}

interface Trail {
  x: number; y: number
  r: number; opacity: number
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const prev = useRef({ x: -100, y: -100 })
  const drops = useRef<Drop[]>([])
  const ripples = useRef<Ripple[]>([])
  const trail = useRef<Trail[]>([])
  const animId = useRef<number>(0)
  const frameCount = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let lastMove = 0
    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastMove < 16) return // ~60fps throttle
      lastMove = now

      prev.current = { ...pos.current }
      pos.current = { x: e.clientX, y: e.clientY }

      const dx = pos.current.x - prev.current.x
      const dy = pos.current.y - prev.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (trail.current.length < 40) {
        trail.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          r: Math.random() * 3 + 1,
          opacity: 0.6,
        })
      }

      const count = Math.min(Math.floor(speed / 6), 3)
      if (drops.current.length < 60) {
        for (let i = 0; i < count; i++) {
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.8
          const spd = Math.random() * speed * 0.4 + 1
          drops.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * spd * (Math.random() * 0.6 + 0.2),
            vy: Math.sin(angle) * spd * (Math.random() * 0.6 + 0.2) - Math.random() * 2,
            r: Math.random() * 3 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            life: 0,
            maxLife: Math.random() * 30 + 20,
          })
        }
      }
    }

    const onClick = (e: MouseEvent) => {
      // Big ripple on click
      ripples.current.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 60, opacity: 0.7 })
      ripples.current.push({ x: e.clientX, y: e.clientY, r: 0, maxR: 35, opacity: 0.5 })
      // Burst of drops
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2
        drops.current.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * (Math.random() * 4 + 2),
          vy: Math.sin(angle) * (Math.random() * 4 + 2) - Math.random() * 3,
          r: Math.random() * 3 + 1,
          opacity: 0.8,
          life: 0, maxLife: 40,
        })
      }
    }

    const draw = () => {
      frameCount.current++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ── Cursor dot ──
      const cx = pos.current.x
      const cy = pos.current.y

      // Outer water ring
      ctx.beginPath()
      ctx.arc(cx, cy, 14, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(58,140,181,0.5)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Inner filled drop
      ctx.beginPath()
      ctx.arc(cx, cy, 5, 0, Math.PI * 2)
      const grad = ctx.createRadialGradient(cx - 1, cy - 1, 0, cx, cy, 5)
      grad.addColorStop(0, 'rgba(200,232,245,0.95)')
      grad.addColorStop(1, 'rgba(58,140,181,0.85)')
      ctx.fillStyle = grad
      ctx.fill()

      // Highlight glint
      ctx.beginPath()
      ctx.arc(cx - 1.5, cy - 1.5, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.fill()

      // ── Trail ──
      trail.current = trail.current.filter(t => t.opacity > 0.02)
      trail.current.forEach(t => {
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2)
        const tg = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.r)
        tg.addColorStop(0, `rgba(137,204,232,${t.opacity})`)
        tg.addColorStop(1, `rgba(58,140,181,0)`)
        ctx.fillStyle = tg
        ctx.fill()
        t.opacity *= 0.88
        t.r *= 0.95
      })

      // ── Drops ──
      drops.current = drops.current.filter(d => d.life < d.maxLife)
      drops.current.forEach(d => {
        d.x += d.vx
        d.y += d.vy
        d.vy += 0.18 // gravity
        d.vx *= 0.97
        d.life++
        const progress = d.life / d.maxLife
        const alpha = d.opacity * (1 - progress)

        // Elongate drop in direction of travel
        const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy)
        const angle = Math.atan2(d.vy, d.vx)

        ctx.save()
        ctx.translate(d.x, d.y)
        ctx.rotate(angle)
        ctx.scale(1 + speed * 0.15, 1)

        ctx.beginPath()
        ctx.arc(0, 0, d.r, 0, Math.PI * 2)
        const dg = ctx.createRadialGradient(-d.r * 0.3, -d.r * 0.3, 0, 0, 0, d.r)
        dg.addColorStop(0, `rgba(200,232,245,${alpha})`)
        dg.addColorStop(0.6, `rgba(58,140,181,${alpha * 0.8})`)
        dg.addColorStop(1, `rgba(58,140,181,0)`)
        ctx.fillStyle = dg
        ctx.fill()

        // Glint
        ctx.beginPath()
        ctx.arc(-d.r * 0.25, -d.r * 0.25, d.r * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`
        ctx.fill()

        ctx.restore()
      })

      // ── Ripples ──
      ripples.current = ripples.current.filter(rp => rp.opacity > 0.01)
      ripples.current.forEach(rp => {
        rp.r += (rp.maxR - rp.r) * 0.12
        rp.opacity *= 0.92

        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(58,140,181,${rp.opacity})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Second inner ring
        if (rp.r > 8) {
          ctx.beginPath()
          ctx.arc(rp.x, rp.y, rp.r * 0.55, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(137,204,232,${rp.opacity * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })

      // Idle drip every ~90 frames
      if (frameCount.current % 90 === 0) {
        drops.current.push({
          x: cx + (Math.random() - 0.5) * 6,
          y: cy + 5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 1 + 0.5,
          r: Math.random() * 2 + 1,
          opacity: 0.6,
          life: 0, maxLife: 35,
        })
      }

      animId.current = requestAnimationFrame(draw)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('click', onClick)
    draw()

    return () => {
      cancelAnimationFrame(animId.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
