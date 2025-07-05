'use client'

import React from 'react'
import { Square, Circle, Triangle, Hexagon, Pentagon } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(blue 1px, transparent 1px),
            linear-gradient(90deg, blue 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Sketch Marks */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-dashed border-gray-400 rounded"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 200}px`,
              height: `${30 + Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          {/* Wireframe Header Box */}
          <div className="inline-block mb-8">
            <div className="border-2 border-gray-800 bg-white/80 backdrop-blur-sm p-8 relative">
              <div className="absolute -top-2 -left-2 text-xs text-gray-500 font-mono">header</div>
              <div className="absolute top-0 right-0 flex gap-1 p-2">
                <Circle className="w-3 h-3 text-gray-400" />
                <Square className="w-3 h-3 text-gray-400" />
                <Triangle className="w-3 h-3 text-gray-400" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-mono text-gray-800 mb-4">
                [PORTFOLIO_TITLE]
              </h1>
              
              <p className="text-xl text-gray-600 font-mono mb-4">
                {"{user.role || 'Full-Stack Developer'}"}
              </p>
              
              <div className="flex justify-center gap-2 text-gray-400">
                <span>Lorem ipsum</span>
                <span>•</span>
                <span>Dolor sit</span>
                <span>•</span>
                <span>Amet</span>
              </div>
            </div>
          </div>

          {/* Wireframe Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="border-2 border-gray-800 px-6 py-3 bg-gray-200 relative hover:bg-gray-300 transition-colors cursor-pointer">
              <span className="absolute -top-3 left-2 text-xs bg-gray-50 px-1 text-gray-500">button.primary</span>
              <span className="font-mono">[CTA_BUTTON]</span>
            </div>
            
            <div className="border-2 border-dashed border-gray-600 px-6 py-3 relative hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="absolute -top-3 left-2 text-xs bg-gray-50 px-1 text-gray-500">button.secondary</span>
              <span className="font-mono">[SECONDARY_ACTION]</span>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['card_1', 'card_2', 'card_3'].map((card, i) => (
              <div key={card} className="border-2 border-gray-600 bg-white/60 p-6 relative">
                <div className="absolute -top-3 left-2 text-xs bg-gray-50 px-1 text-gray-500 font-mono">{card}</div>
                
                {/* Image Placeholder */}
                <div className="border-2 border-dashed border-gray-400 h-32 mb-4 flex items-center justify-center bg-gray-100">
                  <div className="text-gray-400">
                    {i === 0 && <Square className="w-12 h-12" />}
                    {i === 1 && <Circle className="w-12 h-12" />}
                    {i === 2 && <Triangle className="w-12 h-12" />}
                  </div>
                </div>
                
                {/* Text Lines */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Annotations */}
          <div className="mt-12 text-left max-w-2xl mx-auto">
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
              <p className="font-mono text-sm text-gray-600">
                // TODO: Replace placeholder content with actual portfolio data
              </p>
              <p className="font-mono text-sm text-gray-600">
                // Responsive breakpoints: sm(640px), md(768px), lg(1024px)
              </p>
            </div>
          </div>

          {/* Measurement Lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <line x1="10%" y1="0" x2="10%" y2="100%" stroke="red" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
            <line x1="90%" y1="0" x2="90%" y2="100%" stroke="red" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="red" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  )
}