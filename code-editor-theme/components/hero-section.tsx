"use client";

import { useState, useEffect } from "react";
import {
  Files,
  Search,
  GitBranch,
  User,
  Package,
  Settings,
  X,
  Play,
  Terminal,
  Folder,
  FileText,
  Coffee,
  Zap,
  Heart,
  Star,
  ExternalLink,
  Github,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("portfolio.tsx");
  const [activePanel, setActivePanel] = useState("explorer");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    src: true,
    components: true,
    pages: true,
  });

  useEffect(() => {
    setMounted(true);

    // Simulate terminal output
    const terminalMessages = [
      "$ npm run dev",
      "",
      "> portfolio@1.0.0 dev",
      "> next dev",
      "",
      "✓ Ready in 1.2s",
      "✓ Local:    http://localhost:3000",
      "✓ Network:  http://192.168.1.100:3000",
      "",
      "Portfolio server started successfully! 🚀",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalMessages.length) {
        setTerminalOutput((prev) => [...prev, terminalMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const fileStructure = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Header.tsx", type: "file", ext: "ts" },
            { name: "ProjectCard.tsx", type: "file", ext: "ts" },
            { name: "SkillsBadge.tsx", type: "file", ext: "ts" },
          ],
        },
        {
          name: "pages",
          type: "folder",
          children: [
            { name: "about.tsx", type: "file", ext: "ts" },
            { name: "projects.tsx", type: "file", ext: "ts" },
            { name: "contact.tsx", type: "file", ext: "ts" },
          ],
        },
        { name: "portfolio.tsx", type: "file", ext: "ts" },
        { name: "styles.css", type: "file", ext: "css" },
      ],
    },
    { name: "package.json", type: "file", ext: "json" },
    { name: "tsconfig.json", type: "file", ext: "json" },
    { name: "README.md", type: "file", ext: "md" },
  ];

  const tabs = [
    { name: "portfolio.tsx", icon: "ts", active: activeTab === "portfolio.tsx" },
    { name: "package.json", icon: "json", active: activeTab === "package.json" },
    { name: "README.md", icon: "md", active: activeTab === "README.md" },
  ];

  const portfolioCode = `import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Coffee, Heart } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

const Portfolio: React.FC = () => {
  const developer = {
    name: "Alex Developer",
    role: "Full Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    experience: "5+ years",
    status: "Available for hire",
    skills: [
      "React", "TypeScript", "Node.js", "Python",
      "Next.js", "TailwindCSS", "PostgreSQL", "AWS"
    ],
    stats: {
      projectsCompleted: 120,
      happyClients: 50,
      coffeeConsumed: "∞",
      githubStars: 1200
    }
  }

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React & Node.js",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/alexdev/ecommerce",
      liveUrl: "https://shop-demo.alexdev.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management with real-time updates",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      githubUrl: "https://github.com/alexdev/taskmanager",
      liveUrl: "https://tasks.alexdev.com",
      featured: true
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      githubUrl: "https://github.com/alexdev/ai-chat",
      featured: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Hello, I'm {developer.name}
          </h1>
          <p className="text-xl text-blue-400 mb-6">{developer.role}</p>
          <div className="flex items-center gap-4 text-gray-300">
            <span>📍 {developer.location}</span>
            <span>💼 {developer.experience}</span>
            <span className="text-green-400">🟢 {developer.status}</span>
          </div>
        </motion.div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-300 hover:text-white"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-gray-300 hover:text-white"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="container mx-auto px-6 py-12 text-center">
        <p className="text-gray-300 mb-4">
          Built with <Heart className="inline w-4 h-4 text-red-500" /> and lots of{' '}
          <Coffee className="inline w-4 h-4 text-brown-500" />
        </p>
        <p className="text-sm text-gray-500">
          © 2024 {developer.name}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Portfolio`;

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} style={{ marginLeft: `${level * 16}px` }}>
        <div
          className={`file-item ${activeTab === item.name ? "active" : ""}`}
          onClick={() => {
            if (item.type === "folder") {
              toggleFolder(item.name);
            } else {
              setActiveTab(item.name);
            }
          }}
        >
          {item.type === "folder" ? (
            <>
              {expandedFolders[item.name] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <Folder className="file-icon folder-icon" />
            </>
          ) : (
            <>
              <div className="w-4 h-4" />
              <FileText className={`file-icon ${item.ext}`} />
            </>
          )}
          <span>{item.name}</span>
        </div>
        {item.children && item.type === "folder" && expandedFolders[item.name] && <div>{renderFileTree(item.children, level + 1)}</div>}
      </div>
    ));
  };

  if (!mounted) return null;

  return (
    <div className="editor-layout">
      {/* Activity Bar */}
      <div className="activity-bar">
        <div className={`activity-bar-item ${activePanel === "explorer" ? "active" : ""}`} onClick={() => setActivePanel("explorer")}>
          <Files className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "search" ? "active" : ""}`} onClick={() => setActivePanel("search")}>
          <Search className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "git" ? "active" : ""}`} onClick={() => setActivePanel("git")}>
          <GitBranch className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "extensions" ? "active" : ""}`} onClick={() => setActivePanel("extensions")}>
          <Package className="w-5 h-5" />
        </div>
        <div className="mt-auto">
          <div className="activity-bar-item">
            <User className="w-5 h-5" />
          </div>
          <div className="activity-bar-item">
            <Settings className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          {activePanel === "explorer" && "Explorer"}
          {activePanel === "search" && "Search"}
          {activePanel === "git" && "Source Control"}
          {activePanel === "extensions" && "Extensions"}
        </div>

        <div className="sidebar-content">
          {activePanel === "explorer" && (
            <div>
              <div className="text-xs font-semibold text-gray-400 mb-2 px-2">PORTFOLIO</div>
              {renderFileTree(fileStructure)}
            </div>
          )}

          {activePanel === "search" && (
            <div>
              <div className="search-panel">
                <input type="text" placeholder="Search" className="search-input" />
              </div>
              <div className="p-4 text-sm text-gray-400">
                <p>Search across files in your workspace</p>
              </div>
            </div>
          )}

          {activePanel === "git" && (
            <div className="p-4">
              <div className="text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4" />
                  <span>main</span>
                </div>
                <div className="text-green-400">✓ Working tree clean</div>
              </div>
              <div className="text-xs">
                <p className="mb-2">Recent commits:</p>
                <div className="space-y-1">
                  <div>• Add portfolio hero section</div>
                  <div>• Update project cards layout</div>
                  <div>• Fix responsive design issues</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Editor */}
      <div className="editor-main">
        {/* Tab Bar */}
        <div className="tab-bar">
          {tabs.map((tab) => (
            <div key={tab.name} className={`tab ${tab.active ? "active" : ""}`} onClick={() => setActiveTab(tab.name)}>
              <FileText className={`w-4 h-4 file-icon ${tab.icon}`} />
              <span>{tab.name}</span>
              <div className="tab-close">
                <X className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Folder className="w-3 h-3" />
            <span>portfolio</span>
          </div>
          <div className="breadcrumb-separator">›</div>
          <div className="breadcrumb-item">
            <span>src</span>
          </div>
          <div className="breadcrumb-separator">›</div>
          <div className="breadcrumb-item">
            <span>{activeTab}</span>
          </div>
        </div>

        {/* Editor Content */}
        <div className="editor-content">
          <div className="line-numbers">
            {portfolioCode.split("\n").map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <div className="code-content">
            <pre className="font-mono text-sm leading-6">
              <code
                dangerouslySetInnerHTML={{
                  __html: portfolioCode
                    .replace(/\bimport\b/g, '<span class="syntax-keyword">import</span>')
                    .replace(/\bfrom\b/g, '<span class="syntax-keyword">from</span>')
                    .replace(/\binterface\b/g, '<span class="syntax-keyword">interface</span>')
                    .replace(/\bconst\b/g, '<span class="syntax-keyword">const</span>')
                    .replace(/\breturn\b/g, '<span class="syntax-keyword">return</span>')
                    .replace(/\bfunction\b/g, '<span class="syntax-keyword">function</span>')
                    .replace(/\bif\b/g, '<span class="syntax-keyword">if</span>')
                    .replace(/\belse\b/g, '<span class="syntax-keyword">else</span>')
                    .replace(/"([^"]+)"/g, '<span class="syntax-string">"$1"</span>')
                    .replace(/'([^']+)'/g, "<span class=\"syntax-string\">'$1'</span>")
                    .replace(/\b(\d+)\b/g, '<span class="syntax-number">$1</span>')
                    .replace(/\/\*[\s\S]*?\*\//g, '<span class="syntax-comment">$&</span>')
                    .replace(/\/\/.*$/gm, '<span class="syntax-comment">$&</span>')
                    .replace(/\b(React|Portfolio|Project)\b/g, '<span class="syntax-class">$1</span>')
                    .replace(/\b(map|filter|reduce|forEach)\b/g, '<span class="syntax-function">$1</span>'),
                }}
              />
            </pre>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-header">
            <Terminal className="w-4 h-4 mr-2" />
            <span>Terminal</span>
            <div className="ml-auto flex gap-2">
              <Play className="w-3 h-3 cursor-pointer hover:text-white" />
              <X className="w-3 h-3 cursor-pointer hover:text-white" />
            </div>
          </div>
          <div className="terminal-content">
            <div className="code-terminal-output">
              {terminalOutput.map((line, index) => (
                <div key={index} className="terminal-line">
                  {line && typeof line === "string" && line.startsWith("$") ? (
                    <>
                      <span className="terminal-prompt">alexdev@portfolio:~</span>
                      <span className="terminal-command">{line.substring(1).trim()}</span>
                    </>
                  ) : (
                    <span className="terminal-text">{line || ""}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">alexdev@portfolio:~</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="flex items-center gap-4">
          <div className="status-item">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
          <div className="status-item">
            <span>TypeScript React</span>
          </div>
          <div className="status-item">
            <span>UTF-8</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="status-item">
            <span>Ln {currentLine}, Col 1</span>
          </div>
          <div className="status-item">
            <span>100%</span>
          </div>
          <div className="status-item">
            <Zap className="w-3 h-3" />
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
