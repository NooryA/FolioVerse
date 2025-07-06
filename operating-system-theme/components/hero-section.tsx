"use client";

import React, { useState } from "react";
import { Monitor, Folder, Terminal, Settings, Wifi, Battery, Grid, X, Minus, Square } from "lucide-react";

export function HeroSection() {
  const [activeWindow, setActiveWindow] = useState<"about" | "projects" | "terminal">("about");
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const windows = {
    about: { title: "About Me", icon: Folder, minimized: false },
    projects: { title: "Projects", icon: Grid, minimized: false },
    terminal: { title: "Terminal", icon: Terminal, minimized: false },
  } as const;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
      {/* Desktop */}
      <div className="h-screen flex flex-col">
        {/* Menu Bar */}
        <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-1 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <Monitor className="w-4 h-4" />
            <span className="font-semibold">PortfolioOS</span>
            <button className="hover:bg-white/20 px-2 py-1 rounded">File</button>
            <button className="hover:bg-white/20 px-2 py-1 rounded">Edit</button>
            <button className="hover:bg-white/20 px-2 py-1 rounded">View</button>
          </div>
          <div className="flex items-center gap-4">
            <Wifi className="w-4 h-4" />
            <Battery className="w-4 h-4" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Desktop Area */}
        <div className="flex-1 relative p-4">
          {/* Desktop Icons */}
          <div className="absolute top-4 left-4 grid gap-4">
            <div className="text-center cursor-pointer hover:bg-white/10 p-2 rounded">
              <Folder className="w-12 h-12 text-yellow-300 mx-auto mb-1" />
              <span className="text-xs text-white">Projects</span>
            </div>
            <div className="text-center cursor-pointer hover:bg-white/10 p-2 rounded">
              <Terminal className="w-12 h-12 text-green-400 mx-auto mb-1" />
              <span className="text-xs text-white">Terminal</span>
            </div>
            <div className="text-center cursor-pointer hover:bg-white/10 p-2 rounded">
              <Settings className="w-12 h-12 text-gray-300 mx-auto mb-1" />
              <span className="text-xs text-white">Settings</span>
            </div>
          </div>

          {/* Main Window */}
          <div className="absolute inset-8 flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"></button>
                    <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"></button>
                    <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"></button>
                  </div>
                  <span className="ml-2 text-white text-sm">{windows[activeWindow].title}</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-white">
                    <Minus className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <Square className="w-3 h-3" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-8 text-white">
                {activeWindow === "about" && (
                  <div>
                    <h1 className="text-4xl font-bold mb-4">System Administrator</h1>
                    <div className="bg-black/50 rounded p-4 font-mono text-sm mb-6">
                      <p className="text-green-400">$ whoami</p>
                      <p>full-stack-developer</p>
                      <p className="text-green-400 mt-2">$ cat /etc/skills</p>
                      <p>JavaScript TypeScript React Node.js Python Docker</p>
                      <p className="text-green-400 mt-2">$ uptime</p>
                      <p>5 years in production</p>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Building robust systems and elegant interfaces since 2019. Specializing in scalable architectures and modern web
                      technologies.
                    </p>
                    <div className="flex gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">View Processes</button>
                      <button className="border border-gray-600 hover:bg-gray-800 px-4 py-2 rounded">System Logs</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Taskbar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-2">
            <div className="flex items-center gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm flex items-center gap-2">
                <Grid className="w-4 h-4" />
                Start
              </button>
              {(Object.entries(windows) as Array<[keyof typeof windows, (typeof windows)[keyof typeof windows]]>).map(([key, window]) => (
                <button
                  key={key}
                  onClick={() => setActiveWindow(key)}
                  className={`px-3 py-1 rounded text-white text-sm flex items-center gap-2 ${
                    activeWindow === key ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <window.icon className="w-4 h-4" />
                  {window.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
