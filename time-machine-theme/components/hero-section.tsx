'use client'

import React, { useState, useEffect } from 'react'
import { Clock, Zap, Calendar, RotateCcw, FastForward, Rewind, ChevronLeft, ChevronRight } from 'lucide-react'

export function HeroSection() {
  const [currentEra, setCurrentEra] = useState(2)
  const [isTimeWarping, setIsTimeWarping] = useState(false)
  
  const eras = [
    { 
      year: '1995', 
      title: 'The Beginning', 
      desc: 'Learning HTML & CSS',
      style: 'bg-gray-800 text-green-400 font-mono',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      year: '2010', 
      title: 'The jQuery Era', 
      desc: 'Dynamic Websites',
      style: 'bg-blue-900 text-yellow-300',
      tech: ['jQuery', 'PHP', 'MySQL']
    },
    { 
      year: '2024', 
      title: 'Modern Day', 
      desc: 'Full-Stack Developer',
      style: 'bg-gradient-to-br from-purple-900 to-pink-900 text-white',
      tech: ['React', 'TypeScript', 'Node.js', 'AI']
    },
    { 
      year: '2030', 
      title: 'The Future', 
      desc: 'Quantum Computing & AR',
      style: 'bg-black text-cyan-300',
      tech: ['Quantum JS', 'Neural Interfaces', 'Holographic UI']
    }
  ]

  const timeTravel = (direction) => {
    setIsTimeWarping(true)
    setTimeout(() => {
      setCurrentEra(prev => {
        if (direction === 'forward') {
          return prev === eras.length - 1 ? 0 : prev + 1
        }
        return prev === 0 ? eras.length - 1 : prev - 1
      })
      setIsTimeWarping(false)
    }, 500)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') timeTravel('backward')
      if (e.key === 'ArrowRight') timeTravel('forward')
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const currentEraData = eras[currentEra]

  return (
    <section className={`min-h-screen transition-all duration-1000 ${currentEraData.style} relative overflow-hidden`}>
      {/* Time Vortex Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isTimeWarping ? 'animate-spin' : ''}`}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-current opacity-20"
              style={{
                width: `${(i + 1) * 100}px`,
                height: `${(i + 1) * 100}px`,
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Time Machine Interface */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Control Panel */}
        <div className="bg-black/50 backdrop-blur-sm p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 animate-pulse" />
              <span className="font-bold text-xl">Time Machine Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => timeTravel('backward')}
                className="p-2 hover:bg-white/20 rounded transition-colors"
              >
                <Rewind className="w-5 h-5" />
              </button>
              <div className="px-4 py-2 bg-black/30 rounded">
                <span className="font-mono text-lg">{currentEraData.year}</span>
              </div>
              <button 
                onClick={() => timeTravel('forward')}
                className="p-2 hover:bg-white/20 rounded transition-colors"
              >
                <FastForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Era Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className={`text-center transition-all duration-500 ${isTimeWarping ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
            <Calendar className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
              currentEra === 0 ? 'font-mono' : 
              currentEra === 3 ? 'animate-pulse' : ''
            }`}>
              {currentEraData.title}
            </h1>
            
            <p className="text-2xl mb-8 opacity-90">
              {currentEraData.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {currentEraData.tech.map((tech, i) => (
                <div
                  key={tech}
                  className={`px-4 py-2 rounded-full border-2 border-current ${
                    currentEra === 0 ? 'bg-black text-green-400' :
                    currentEra === 3 ? 'animate-pulse bg-cyan-900/50' : 'bg-white/10'
                  }`}
                  style={{animationDelay: `${i * 0.1}s`}}
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <button className={`px-6 py-3 rounded font-bold transition-all ${
                currentEra === 0 ? 'bg-green-400 text-black hover:bg-green-300' :
                currentEra === 3 ? 'bg-cyan-400 text-black hover:bg-cyan-300 animate-pulse' :
                'bg-white/20 hover:bg-white/30'
              }`}>
                <Zap className="inline w-5 h-5 mr-2" />
                Explore This Era
              </button>
              <button className="px-6 py-3 rounded border-2 border-current hover:bg-white/10 transition-colors font-bold">
                <RotateCcw className="inline w-5 h-5 mr-2" />
                Return to Present
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-black/50 backdrop-blur-sm p-6">
          <div className="container mx-auto">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2"></div>
              <div className="flex justify-between relative">
                {eras.map((era, i) => (
                  <button
                    key={era.year}
                    onClick={() => {
                      setIsTimeWarping(true)
                      setTimeout(() => {
                        setCurrentEra(i)
                        setIsTimeWarping(false)
                      }, 500)
                    }}
                    className={`relative z-10 transition-all ${
                      i === currentEra ? 'scale-125' : 'scale-100 hover:scale-110'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      i === currentEra ? 'bg-current border-current' : 'bg-black border-current'
                    }`}></div>
                    <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                      {era.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <p className="text-center mt-12 text-sm opacity-70">
              Use arrow keys or click timeline to navigate through time
            </p>
          </div>
        </div>
      </div>

      {/* Time Particles */}
      {isTimeWarping && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}