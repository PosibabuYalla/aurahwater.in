import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/distribution', label: 'Distribution' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#FFF0E6] border-t border-[#D85A00]/15 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Image src="/images/logo.png" alt="AURAH" width={300} height={120} className="h-24 w-auto object-contain mb-2" />
            <p className="text-[#888] text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Pure Today. Promising Tomorrow.</p>
            <p className="text-[#888] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Premium packaged drinking water by Teekshika Beverages.<br />
              Serving Telangana & Andhra Pradesh.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.instagram.com/aurahwater" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D85A00]/20 flex items-center justify-center text-[#888] hover:text-[#D85A00] hover:border-[#D85A00] transition-colors" data-cursor>
                <InstagramIcon />
              </a>
              <a href="https://wa.me/918886239992" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D85A00]/20 flex items-center justify-center text-[#888] hover:text-[#D85A00] hover:border-[#D85A00] transition-colors" data-cursor>
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#2C1A00] text-sm font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Pages</h4>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#888] hover:text-[#D85A00] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#2C1A00] text-sm font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#888] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Phone size={14} className="mt-1 shrink-0 text-[#D85A00]" />
                <span>88862 39992 / 94942 20239</span>
              </li>
              <li className="flex items-start gap-3 text-[#888] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Mail size={14} className="mt-1 shrink-0 text-[#D85A00]" />
                <span>teekshikabeverages@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#888] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <MapPin size={14} className="mt-1 shrink-0 text-[#D85A00]" />
                <span>8-122/66, Main Road Kalidindi,<br />Eluru District - 521344</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D85A00]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#aaa] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 Teekshika Beverages. All rights reserved. | FSSAI Licensed
          </p>
          <p className="text-[#D85A00] text-xs font-medium tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
            #DrinkPureLivePure
          </p>
        </div>
      </div>
    </footer>
  )
}
