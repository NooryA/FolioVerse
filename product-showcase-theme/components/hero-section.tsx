'use client'

import { useState, useEffect } from 'react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Product Showcase
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          A unique portfolio experience
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            View Projects
          </button>
          <button className="px-6 py-3 border border-current rounded-lg hover:bg-accent transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}