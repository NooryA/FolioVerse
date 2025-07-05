'use client'

import React, { useState, useEffect } from 'react'
import { Tv, Volume2, VolumeX, Radio, Wifi, Battery, SkipForward, Play } from 'lucide-react'

export function HeroSection() {
  const [currentChannel, setCurrentChannel] = useState(1)
  const [isStatic, setIsStatic] = useState(false)
  const [volume, setVolume] = useState(75)
  const [isMuted, setIsMuted] = useState(false)
  
  const channels = [
    { id: 1, name: 'Portfolio TV', content: 'Welcome to My Portfolio', color: 'from-blue-600 to-purple-600' },
    { id: 2, name: 'Project Channel', content: 'Featured Projects', color: 'from-green-600 to-teal-600' },
    { id: 3, name: 'Skills Network', content: 'Technical Expertise', color: 'from-orange-600 to-red-600' },
    { id: 4, name: 'Contact TV', content: 'Get In Touch', color: 'from-purple-600 to-pink-600' }
  ]

  const changeChannel = (direction) => {
    setIsStatic(true)
    setTimeout(() => {
      setCurrentChannel(prev => {
        if (direction === 'up') return prev === channels.length ? 1 : prev + 1
        return prev === 1 ? channels.length : prev - 1
      })
      setIsStatic(false)
    }, 300)
  }

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Old TV Set */}
      <div className="relative max-w-4xl w-full">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
          {/* TV Screen */}
          <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-inner">
            {/* Static Effect */}
            {isStatic && (
              <div className="absolute inset-0 z-20">
                <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')] opacity-50 animate-pulse"></div>
              </div>
            )}
            
            {/* TV Content */}
            <div className={`absolute inset-0 bg-gradient-to-br ${channels[currentChannel - 1].color} flex items-center justify-center`}>
              <div className="text-center p-8">
                <div className="mb-4 text-white/80 font-mono text-sm">
                  CH {currentChannel.toString().padStart(2, '0')}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
                  {channels[currentChannel - 1].content}
                </h1>
                <p className="text-xl text-white/90">
                  {channels[currentChannel - 1].name}
                </p>
              </div>
            </div>

            {/* CRT Lines Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-full w-full" style={{
                background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
              }}></div>
            </div>

            {/* On-Screen Display */}
            <div className="absolute top-4 right-4 bg-black/80 text-green-400 px-3 py-1 font-mono text-sm rounded">
              <div className="flex items-center gap-4">
                <span>CH {currentChannel.toString().padStart(2, '0')}</span>
                <span>•</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            {/* Volume Bar */}
            {volume !== null && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 p-2 rounded">
                <div className="flex items-center gap-2">
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-400 transition-all duration-200"
                      style={{ width: isMuted ? '0%' : `${volume}%` }}
                    ></div>
                  </div>
                  <span className="text-white text-sm font-mono w-12 text-right">
                    {isMuted ? '0' : volume}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* TV Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => changeChannel('down')}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-colors"
              >
                CH-
              </button>
              <button 
                onClick={() => changeChannel('up')}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-colors"
              >
                CH+
              </button>
            </div>

            {/* Center Display */}
            <div className="flex items-center gap-2 text-green-400 font-mono">
              <Radio className="w-4 h-4" />
              <span className="text-sm">PORTFOLIO TV</span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white rounded-full p-3 transition-colors">
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Status LEDs */}
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">POWER</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-xs text-gray-400">SIGNAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-xs text-gray-400">RECORD</span>
            </div>
          </div>
        </div>

        {/* TV Stand */}
        <div className="mt-4 flex justify-center">
          <div className="w-32 h-2 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}