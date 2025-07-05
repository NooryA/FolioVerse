'use client'

import React, { useState } from 'react'
import { Folder, FolderOpen, FileText, FileCode, Image, GitBranch, ChevronRight, ChevronDown, Search, Star } from 'lucide-react'

export function HeroSection() {
  const [expandedFolders, setExpandedFolders] = useState(['portfolio', 'src', 'projects'])
  const [selectedFile, setSelectedFile] = useState('about.md')

  const toggleFolder = (folder) => {
    setExpandedFolders(prev => 
      prev.includes(folder) 
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const fileTree = {
    'portfolio': {
      type: 'folder',
      children: {
        'src': {
          type: 'folder',
          children: {
            'about.md': { type: 'file', icon: FileText },
            'skills.json': { type: 'file', icon: FileCode },
            'experience.tsx': { type: 'file', icon: FileCode }
          }
        },
        'projects': {
          type: 'folder',
          children: {
            'project-1.md': { type: 'file', icon: FileText },
            'project-2.md': { type: 'file', icon: FileText },
            'screenshots': {
              type: 'folder',
              children: {
                'demo1.png': { type: 'file', icon: Image },
                'demo2.png': { type: 'file', icon: Image }
              }
            }
          }
        },
        'contact.tsx': { type: 'file', icon: FileCode },
        'README.md': { type: 'file', icon: FileText }
      }
    }
  }

  const fileContents = {
    'about.md': {
      title: '# About Me',
      content: `## Full-Stack Developer

I'm a passionate developer with expertise in modern web technologies.
Specializing in React, TypeScript, and Node.js, I create scalable
and user-friendly applications.

### What I Do
- 🚀 Build responsive web applications
- 💡 Solve complex problems with elegant solutions
- 🎨 Design intuitive user interfaces
- 📚 Continuously learn and adapt`
    },
    'skills.json': {
      title: 'skills.json',
      content: `{
  "languages": ["JavaScript", "TypeScript", "Python"],
  "frontend": ["React", "Next.js", "Tailwind CSS"],
  "backend": ["Node.js", "Express", "PostgreSQL"],
  "tools": ["Git", "Docker", "VS Code", "Figma"]
}`
    }
  }

  const renderFileTree = (tree, path = '') => {
    return Object.entries(tree).map(([name, item]) => {
      const fullPath = path ? `${path}/${name}` : name
      
      if (item.type === 'folder') {
        const isExpanded = expandedFolders.includes(fullPath)
        return (
          <div key={fullPath}>
            <div 
              className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 cursor-pointer rounded"
              onClick={() => toggleFolder(fullPath)}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              {isExpanded ? <FolderOpen className="w-4 h-4 text-blue-400" /> : <Folder className="w-4 h-4 text-blue-400" />}
              <span className="text-sm">{name}</span>
            </div>
            {isExpanded && item.children && (
              <div className="ml-4">
                {renderFileTree(item.children, fullPath)}
              </div>
            )}
          </div>
        )
      }
      
      const Icon = item.icon
      return (
        <div 
          key={fullPath}
          className={`flex items-center gap-2 py-1 px-2 ml-5 hover:bg-gray-700 cursor-pointer rounded ${selectedFile === name ? 'bg-gray-700' : ''}`}
          onClick={() => setSelectedFile(name)}
        >
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-sm">{name}</span>
        </div>
      )
    })
  }

  return (
    <section className="min-h-screen bg-gray-900 text-gray-300">
      {/* File Explorer Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Portfolio Explorer</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">File</button>
              <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">Edit</button>
              <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">View</button>
              <button className="px-3 py-1 text-sm hover:bg-gray-700 rounded">Go</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search files..."
              className="bg-gray-700 px-3 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-40px)]">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Explorer</h3>
            {renderFileTree(fileTree)}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xs uppercase text-gray-500 mb-2">Outline</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Featured Projects</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2 hover:bg-gray-700 rounded cursor-pointer">
                <GitBranch className="w-4 h-4 text-green-400" />
                <span>GitHub Stats</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-900 p-8 overflow-y-auto">
          {fileContents[selectedFile] ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="border-b border-gray-700 pb-4 mb-4">
                  <h2 className="text-xl font-mono">{fileContents[selectedFile].title}</h2>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>Modified: 2 days ago</span>
                    <span>•</span>
                    <span>UTF-8</span>
                    <span>•</span>
                    <span>LF</span>
                  </div>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {fileContents[selectedFile].content}
                </pre>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Open Projects
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  View Resume
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Contact Info
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Download CV
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4" />
                <p>Select a file to view its contents</p>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-xs px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>portfolio/src/about.md</span>
              <span>Line 15, Column 42</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Markdown</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}