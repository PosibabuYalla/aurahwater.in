'use client'
import { useEffect, useRef } from 'react'

export default function HeroWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drawWave = (
      yBase: number, amp: number, freq: number,
      phase: number, color: string, alpha: number
    ) => {
      const w = canvas.width
      const h = canvas.height
      ctx.beginPath()
      ctx.moveTo(0, h)
      for (let x = 0; x <= w; x += 2) {
        const y = yBase + Math.sin((x / w) * freq * Math.PI * 2 + phase + t) * amp
                        + Math.sin((x / w) * freq * 0.5 * Math.PI * 2 + phase * 1.3 + t * 0.7) * amp * 0.4
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.globalAlpha = alpha
      ctx.fill()
      ctx.globalAlpha = 1
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const h = canvas.height

      // Deep back wave
      drawWave(h * 0.72, 22, 2.2, 0,    '#C8E8F5', 0.35)
      // Mid wave
      drawWave(h * 0.78, 18, 2.8, 1.2,  '#89CCE8', 0.3)
      // Front wave orange tint
      drawWave(h * 0.84, 14, 3.4, 2.5,  '#FFD4A8', 0.25)
      // Foreground wave
      drawWave(h * 0.88, 10, 4.0, 0.8,  '#FFF0E6', 0.6)

      t += 0.018
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
