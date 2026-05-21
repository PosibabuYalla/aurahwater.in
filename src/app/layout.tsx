'use client'
import './globals.css'
import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import PageTransition from '@/components/PageTransition'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>AURAH — Packaged Drinking Water</title>
        <meta name="description" content="AURAH Premium Packaged Drinking Water. Pure Today. Promising Tomorrow. Distributing across Telangana & Andhra Pradesh." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          <PageTransition>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  )
}
