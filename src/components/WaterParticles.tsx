'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; r: number
  vx: number; vy: number
  opacity: number; color: string
}

export default function WaterParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let particles: Particle[] = []

    const colors = ['#3A8CB5', '#89CCE8', '#C8E8F5', '#D85A00', '#FF9A4D']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      r: Math.random() * 4 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 1.2 + 0.4),
      opacity: Math.random() * 0.3 + 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    resize()
    for (let i = 0; i < 80; i++) {
      const p = spawn()
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) particles[i] = spawn()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />
}
