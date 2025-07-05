'use client'

import React, { useState, useEffect } from 'react'
import { FileCode, FolderOpen, Terminal, GitBranch, Bug, Search } from 'lucide-react'

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('portfolio.tsx')
  const [typedCode, setTypedCode] = useState('')
  
  const codeSnippet = `const developer = {
  name: 'Your Name',
  role: 'Full-Stack Developer',
  skills: ['React', 'TypeScript', 'Node.js'],
  passion: 'Building amazing web experiences'
};`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index + 1))
        index++
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-[#1e1e1e] text-gray-300">
      {/* VS Code Header */}
      <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Portfolio - Visual Studio Code</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-40px)]">
        {/* Sidebar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4">
          <FileCode className="w-6 h-6 text-white" />
          <Search className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer" />
          <GitBranch className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer" />
          <Bug className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer" />
        </div>

        {/* File Explorer */}
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] p-4">
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="w-4 h-4" />
            <span className="text-sm uppercase text-gray-400">Explorer</span>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 hover:bg-[#2a2d2e] px-2 py-1 cursor-pointer">
              <FolderOpen className="w-4 h-4 text-yellow-600" />
              <span>src</span>
            </div>
            <div className="ml-4 space-y-1">
              <div 
                className={`flex items-center gap-2 px-2 py-1 cursor-pointer ${activeTab === 'portfolio.tsx' ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'}`}
                onClick={() => setActiveTab('portfolio.tsx')}
              >
                <FileCode className="w-4 h-4 text-blue-400" />
                <span>portfolio.tsx</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-[#2a2d2e] px-2 py-1 cursor-pointer">
                <FileCode className="w-4 h-4 text-yellow-400" />
                <span>skills.ts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 bg-[#1e1e1e] p-4">
          {/* Tabs */}
          <div className="flex items-center gap-1 mb-4 border-b border-[#3e3e42]">
            <div className="bg-[#2d2d30] px-4 py-2 text-sm flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-400" />
              <span>portfolio.tsx</span>
              <span className="text-gray-500">×</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="font-mono text-sm">
            <div className="flex">
              <div className="text-[#858585] pr-4 select-none">
                {[1,2,3,4,5,6,7].map(n => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <div>
                <pre className="text-[#d4d4d4]">
                  <span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">developer</span> = {typedCode}<span className="animate-pulse">|</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#1e1e1e] border-t border-[#3e3e42]">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d30]">
              <Terminal className="w-4 h-4" />
              <span className="text-sm">Terminal</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-green-400">$ npm run dev</div>
              <div className="text-gray-400">🚀 Portfolio running on http://localhost:3000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}