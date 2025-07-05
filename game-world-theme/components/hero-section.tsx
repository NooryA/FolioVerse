'use client'

import React, { useState, useEffect } from 'react'
import { Map, Swords, Heart, Shield, Zap, Trophy, Compass, Castle } from 'lucide-react'

export function HeroSection() {
  const [playerLevel, setPlayerLevel] = useState(1)
  const [currentQuest, setCurrentQuest] = useState(0)
  const [health, setHealth] = useState(100)
  const [exp, setExp] = useState(0)

  const quests = [
    "Frontend Development",
    "Backend Mastery", 
    "Database Quest",
    "DevOps Adventure"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setExp(prev => {
        if (prev >= 100) {
          setPlayerLevel(l => l + 1)
          return 0
        }
        return prev + 10
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-900 to-green-950 relative overflow-hidden">
      {/* RPG Map Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className={`border border-green-800 ${Math.random() > 0.9 ? 'bg-green-700' : ''}`}></div>
          ))}
        </div>
      </div>

      {/* HUD */}
      <div className="fixed top-0 left-0 right-0 p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          {/* Player Stats */}
          <div className="bg-black/80 rounded-lg p-4 backdrop-blur-sm border-2 border-yellow-600">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold">Hero Developer</h3>
                <p className="text-green-400 text-sm">Level {playerLevel} Coder</p>
              </div>
            </div>
            
            {/* Health Bar */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-white text-sm">HP</span>
              </div>
              <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300" style={{width: `${health}%`}}></div>
              </div>
            </div>
            
            {/* EXP Bar */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-white text-sm">EXP</span>
              </div>
              <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-300" style={{width: `${exp}%`}}></div>
              </div>
            </div>
          </div>

          {/* Quest Log */}
          <div className="bg-black/80 rounded-lg p-4 backdrop-blur-sm border-2 border-yellow-600">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-yellow-400" />
              <h3 className="text-yellow-400 font-bold">Active Quests</h3>
            </div>
            <div className="space-y-2">
              {quests.map((quest, i) => (
                <div 
                  key={quest}
                  className={`flex items-center gap-2 text-sm ${i === currentQuest ? 'text-green-400' : 'text-gray-400'}`}
                >
                  <input type="checkbox" checked={i < currentQuest} className="accent-green-400" readOnly />
                  <span>{quest}</span>
                  {i === currentQuest && <span className="text-yellow-400 animate-pulse">←</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Castle Icon */}
          <Castle className="w-20 h-20 text-yellow-600 mx-auto mb-6 animate-bounce" />
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              GAME WORLD
            </span>
          </h1>
          
          <p className="text-2xl text-green-400 mb-8 font-mono">
            &lt; Level {playerLevel} Full-Stack Developer /&gt;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 rounded-lg font-bold text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                <Swords className="w-5 h-5" />
                Start Quest
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-yellow-600 text-yellow-400 rounded-lg font-bold hover:bg-yellow-600/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              View Achievements
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Swords, skill: 'JavaScript', level: 95 },
              { icon: Shield, skill: 'React', level: 90 },
              { icon: Zap, skill: 'Node.js', level: 85 },
              { icon: Map, skill: 'MongoDB', level: 80 }
            ].map((item, i) => (
              <div key={item.skill} className="bg-black/60 rounded-lg p-4 border border-green-600/50 hover:border-green-400 transition-colors">
                <item.icon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-white font-bold mb-1">{item.skill}</h3>
                <div className="text-xs text-green-400 mb-2">Lvl {item.level}</div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-1000"
                    style={{width: `${item.level}%`, animationDelay: `${i * 0.2}s`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Items */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/50">
          <span className="text-2xl">⭐</span>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-10 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
          <span className="text-2xl">💎</span>
        </div>
      </div>
    </section>
  )
}