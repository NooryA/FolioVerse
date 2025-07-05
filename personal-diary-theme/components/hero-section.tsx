'use client'

import React, { useState } from 'react'
import { BookOpen, Feather, Heart, Coffee, Moon, Sun, Calendar, Quote } from 'lucide-react'

export function HeroSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const pages = [
    {
      date: 'Chapter 1',
      title: 'The Journey Begins',
      content: 'Every developer has a story. Mine started with a simple "Hello World" and evolved into a passion for creating digital experiences that matter.',
      mood: '✨ Inspired'
    },
    {
      date: 'Chapter 2',
      title: 'Skills & Growth',
      content: 'From HTML scribbles to complex architectures, each line of code has been a step in my evolution as a developer.',
      mood: '🚀 Ambitious'
    },
    {
      date: 'Chapter 3',
      title: 'Projects & Dreams',
      content: 'Building applications that solve real problems, one commit at a time. Each project is a piece of my developer soul.',
      mood: '💡 Creative'
    }
  ]

  return (
    <section className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900' : 'bg-amber-50'
    }`}>
      {/* Diary Header */}
      <div className={`border-b-2 ${isDarkMode ? 'border-gray-700' : 'border-amber-200'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`} />
              <h1 className={`font-serif text-xl ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                Developer's Diary
              </h1>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-amber-100'
              }`}
            >
              {isDarkMode ? 
                <Sun className="w-5 h-5 text-amber-400" /> : 
                <Moon className="w-5 h-5 text-amber-700" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Diary Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Open Book Layout */}
          <div className="relative">
            <div className={`grid md:grid-cols-2 gap-8 p-8 rounded-lg shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Left Page */}
              <div className={`border-r-2 pr-8 ${isDarkMode ? 'border-gray-700' : 'border-amber-100'}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-amber-600'}`}>
                    {pages[currentPage].date}
                  </span>
                  <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-amber-600'}`} />
                </div>
                
                <h2 className={`text-3xl font-serif mb-6 ${
                  isDarkMode ? 'text-amber-400' : 'text-amber-900'
                }`}>
                  {pages[currentPage].title}
                </h2>
                
                <div className={`prose ${isDarkMode ? 'prose-invert' : ''}`}>
                  <Quote className={`w-8 h-8 mb-4 ${isDarkMode ? 'text-gray-600' : 'text-amber-200'}`} />
                  <p className={`text-lg leading-relaxed font-serif italic ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{pages[currentPage].content}"
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-amber-600'}`}>
                    Mood:
                  </span>
                  <span className="text-sm">{pages[currentPage].mood}</span>
                </div>
              </div>

              {/* Right Page */}
              <div className="pl-8">
                <div className="mb-6">
                  <h3 className={`text-xl font-serif mb-4 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-800'
                  }`}>
                    Quick Notes
                  </h3>
                  <div className="space-y-3">
                    <div className={`p-3 rounded ${
                      isDarkMode ? 'bg-gray-700' : 'bg-amber-50'
                    }`}>
                      <p className={`text-sm flex items-start gap-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Coffee className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Fueled by coffee and curiosity</span>
                      </p>
                    </div>
                    <div className={`p-3 rounded ${
                      isDarkMode ? 'bg-gray-700' : 'bg-amber-50'
                    }`}>
                      <p className={`text-sm flex items-start gap-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Heart className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Passionate about clean code</span>
                      </p>
                    </div>
                    <div className={`p-3 rounded ${
                      isDarkMode ? 'bg-gray-700' : 'bg-amber-50'
                    }`}>
                      <p className={`text-sm flex items-start gap-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Feather className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Writing the future, one line at a time</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="mt-auto">
                  <div className={`border-t pt-4 ${isDarkMode ? 'border-gray-700' : 'border-amber-200'}`}>
                    <p className={`text-center text-sm italic ${
                      isDarkMode ? 'text-gray-400' : 'text-amber-600'
                    }`}>
                      "Code is poetry written in logic"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded transition-colors ${
                  currentPage === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : isDarkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-amber-100'
                } ${isDarkMode ? 'text-gray-300' : 'text-amber-800'}`}
              >
                ← Previous
              </button>
              
              <div className="flex items-center gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentPage 
                        ? isDarkMode ? 'bg-amber-400 w-8' : 'bg-amber-600 w-8' 
                        : isDarkMode ? 'bg-gray-600' : 'bg-amber-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(pages.length - 1, prev + 1))}
                disabled={currentPage === pages.length - 1}
                className={`px-4 py-2 rounded transition-colors ${
                  currentPage === pages.length - 1 
                    ? 'opacity-50 cursor-not-allowed' 
                    : isDarkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-amber-100'
                } ${isDarkMode ? 'text-gray-300' : 'text-amber-800'}`}
              >
                Next →
              </button>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-serif transition-colors ${
                isDarkMode 
                  ? 'bg-amber-400 text-gray-900 hover:bg-amber-500' 
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}>
                <Feather className="w-5 h-5" />
                Write Your Story With Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}