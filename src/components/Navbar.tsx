'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/distribution', label: 'Distribution' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#D85A00]/10 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-bebas text-3xl text-[#2C1A00] tracking-brand" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>AURAH</span>
            <span className="text-[10px] text-[#aaa] tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Packaged Drinking Water</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link ${pathname === l.href ? 'active' : ''}`}
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/distribution" className="btn-liquid px-5 py-2 rounded-full text-sm font-medium tracking-wide"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Partner With Us</span>
            </Link>
          </div>

          <button className="md:hidden text-[#2C1A00]" onClick={() => setOpen(!open)} data-cursor>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href}
              className={`font-bebas text-5xl text-[#2C1A00] hover:text-[#D85A00] transition-colors tracking-brand ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                transitionDelay: `${i * 0.07}s`,
                transition: 'transform 0.4s ease, opacity 0.4s ease, color 0.2s',
              }}>
              {l.label}
            </Link>
          ))}
          <Link href="/distribution" className="btn-liquid mt-4 px-8 py-3 rounded-full text-lg font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            <span>Partner With Us</span>
          </Link>
        </div>
      </div>
    </>
  )
}
