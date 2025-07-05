'use client'

import React from 'react'
import { Calendar, User, TrendingUp, Award, Bookmark, Share2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen bg-white">
      {/* Magazine Header */}
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-serif font-bold tracking-tight">PORTFOLIO</h1>
              <p className="text-sm uppercase tracking-widest mt-1">The Developer's Chronicle</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Issue #2024</p>
              <p className="text-xs text-gray-600">{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Feature Article */}
          <div className="col-span-12 lg:col-span-8">
            <article className="mb-12">
              {/* Headline */}
              <div className="mb-6">
                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-4">
                  Building the
                  <span className="block text-red-600">Future of Web</span>
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    By Your Name
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Lead Paragraph */}
              <div className="prose prose-xl max-w-none">
                <p className="text-2xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                  In the ever-evolving landscape of web development, staying ahead means embracing innovation, 
                  mastering new technologies, and creating experiences that captivate and inspire. This is my story.
                </p>
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-100 p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Frontend Expertise</h3>
                  <p className="text-gray-700">
                    React, Vue, Angular - mastering the trinity of modern JavaScript frameworks 
                    to build responsive, dynamic user interfaces.
                  </p>
                </div>
                <div className="bg-gray-100 p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Backend Prowess</h3>
                  <p className="text-gray-700">
                    Node.js, Python, Go - architecting scalable server solutions that power 
                    applications serving millions.
                  </p>
                </div>
              </div>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-red-600 pl-6 my-8 py-4">
                <p className="text-3xl font-serif italic">
                  "Code is poetry, and every project is a new verse in the digital symphony."
                </p>
              </blockquote>

              {/* Stats Box */}
              <div className="bg-black text-white p-8 my-8">
                <h3 className="text-2xl font-serif mb-6">By The Numbers</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="text-sm uppercase tracking-wide">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">5Y</p>
                    <p className="text-sm uppercase tracking-wide">Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">100%</p>
                    <p className="text-sm uppercase tracking-wide">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4">
            {/* In This Issue */}
            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-xl font-serif font-bold mb-4 border-b border-gray-300 pb-2">
                In This Issue
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Featured Projects</p>
                    <p className="text-sm text-gray-600">Award-winning applications</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Tech Stack Deep Dive</p>
                    <p className="text-sm text-gray-600">Modern tools & frameworks</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Client Testimonials</p>
                    <p className="text-sm text-gray-600">Success stories</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="border-4 border-black p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-serif font-bold">Market Trends</h3>
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React Adoption</span>
                  <span className="font-bold">↑ 15%</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript Usage</span>
                  <span className="font-bold">↑ 23%</span>
                </div>
                <div className="flex justify-between">
                  <span>AI Integration</span>
                  <span className="font-bold">↑ 45%</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to Start?</h3>
              <p className="mb-4">Let's create something amazing together.</p>
              <button className="bg-white text-red-600 px-6 py-3 font-bold hover:bg-gray-100 transition-colors w-full">
                GET IN TOUCH
              </button>
            </div>

            {/* Social Actions */}
            <div className="flex justify-around py-6 border-t border-gray-300 mt-8">
              <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}