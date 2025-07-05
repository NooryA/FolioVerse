'use client'

import React, { useEffect, useRef } from 'react'
import { Droplets, Waves } from 'lucide-react'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 100 + Math.random() * 150,
      color: ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'][i],
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: (Math.random() - 0.5) * 2,
    }))

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      blobs.forEach(blob => {
        // Update position
        blob.x += blob.velocityX
        blob.y += blob.velocityY
        
        // Bounce off walls
        if (blob.x + blob.radius > canvas.width || blob.x - blob.radius < 0) {
          blob.velocityX = -blob.velocityX
        }
        if (blob.y + blob.radius > canvas.height || blob.y - blob.radius < 0) {
          blob.velocityY = -blob.velocityY
        }
        
        // Draw blob
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        gradient.addColorStop(0, blob.color + '40')
        gradient.addColorStop(1, blob.color + '00')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Liquid Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Wavy Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Liquid Title */}
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 blur-lg"></span>
                <span className="relative bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  LIQUID UI
                </span>
              </span>
            </h1>
            <Waves className="w-12 h-12 text-blue-500 mx-auto mt-4 animate-bounce" />
          </div>

          <p className="text-2xl text-gray-700 mb-12 font-medium">
            Fluid • Dynamic • Organic Design
          </p>

          {/* Liquid Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <button className="group relative px-8 py-4 text-white font-bold overflow-hidden rounded-full">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
              <span className="relative flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Dive In
              </span>
              <span className="absolute top-2 -right-2 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:animate-ping"></span>
            </button>
            
            <button className="relative px-8 py-4 font-bold rounded-full overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50 blur-md group-hover:blur-lg transition-all"></span>
              <span className="relative bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 block border-2 border-transparent bg-clip-padding">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Explore Flow
                </span>
              </span>
            </button>
          </div>

          {/* Liquid Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Creative', 'Fluid', 'Dynamic'].map((item, i) => (
              <div key={item} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 backdrop-blur-xl bg-white/90">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br mx-auto mb-4 animate-blob ${
                    i === 0 ? 'from-purple-400 to-pink-400' :
                    i === 1 ? 'from-blue-400 to-cyan-400' :
                    'from-pink-400 to-yellow-400'
                  }`}></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item}</h3>
                  <p className="text-gray-600">
                    Experience the flow of modern web design
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}