"use client";

import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  FileCode,
  Folder,
  Play,
  Settings,
  Search,
  GitBranch,
  Bug,
  CheckCircle,
  AlertTriangle,
  Coffee,
  Monitor,
  Code,
  Database,
  Cloud,
} from "lucide-react";

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState("terminal");
  const [terminalHistory, setTerminalHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = [
      {
        input: "alex@dev-machine:~$ whoami",
        output: ["alex"],
        timestamp: "2024-01-15 09:30:15",
      },
      {
        input: "alex@dev-machine:~$ pwd",
        output: ["/home/alex/portfolio"],
        timestamp: "2024-01-15 09:30:20",
      },
      {
        input: "alex@dev-machine:~$ ls -la",
        output: [
          "total 42",
          "drwxr-xr-x  8 alex alex 4096 Jan 15 09:30 .",
          "drwxr-xr-x  3 root root 4096 Jan 15 09:00 ..",
          "-rw-r--r--  1 alex alex  220 Jan 15 09:00 .bash_logout",
          "-rw-r--r--  1 alex alex 3526 Jan 15 09:00 .bashrc",
          "drwxr-xr-x  3 alex alex 4096 Jan 15 09:15 .vscode",
          "drwxr-xr-x  8 alex alex 4096 Jan 15 09:20 projects/",
          "drwxr-xr-x  3 alex alex 4096 Jan 15 09:25 skills/",
          "-rw-r--r--  1 alex alex 1024 Jan 15 09:10 about.md",
          "-rw-r--r--  1 alex alex 2048 Jan 15 09:12 contact.json",
        ],
        timestamp: "2024-01-15 09:30:25",
      },
    ];

    bootSequence.forEach((cmd, index) => {
      setTimeout(() => {
        setTerminalHistory((prev) => [...prev, cmd]);
      }, index * 1000);
    });

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const executeCommand = (command: string) => {
    const timestamp = new Date().toLocaleString();
    let output: string[] = [];

    switch (command.trim()) {
      case "help":
        output = [
          "Available commands:",
          "  about       - Display developer information",
          "  projects    - List all projects",
          "  skills      - Show technical skills",
          "  contact     - Get contact information",
          "  clear       - Clear terminal",
          "  cat <file>  - Display file contents",
          "  ls          - List directory contents",
          "  tree        - Show directory tree",
          "  git status  - Show git repository status",
          "  npm start   - Start development server",
        ];
        break;

      case "about":
        output = [
          "=== DEVELOPER PROFILE ===",
          "Name: Alex Rodriguez",
          "Role: Senior Full-Stack Developer",
          "Experience: 5+ years",
          "Location: San Francisco, CA",
          "Education: BS Computer Science, UC Berkeley",
          "",
          "Specializing in modern web development with React,",
          "Node.js, and cloud technologies. Passionate about",
          "building scalable applications and leading teams.",
          "",
          "Current: Senior Developer @ TechCorp Inc.",
        ];
        break;

      case "projects":
        output = [
          "=== PROJECT PORTFOLIO ===",
          "",
          "📦 E-Commerce Platform",
          "   ├── Status: Production",
          "   ├── Users: 10,000+",
          "   └── Tech: React, Node.js, PostgreSQL",
          "",
          "🤖 AI Chat Assistant",
          "   ├── Status: Deployed",
          "   ├── Users: 5,000+",
          "   └── Tech: Python, OpenAI, React",
          "",
          "💳 Mobile Banking App",
          "   ├── Status: Live",
          "   ├── Users: 50,000+",
          "   └── Tech: React Native, Firebase",
          "",
          "📊 Analytics Dashboard",
          "   ├── Status: Beta",
          "   ├── Users: 1,000+",
          "   └── Tech: Vue.js, D3.js, MongoDB",
        ];
        break;

      case "skills":
        output = [
          "=== TECHNICAL SKILLS ===",
          "",
          "🎯 Frontend Technologies:",
          "   React.js     ████████████████████ 95%",
          "   Vue.js       ████████████████▒▒▒▒ 88%",
          "   TypeScript   ██████████████████▒▒ 92%",
          "   CSS/SCSS     ██████████████████░░ 90%",
          "",
          "⚙️ Backend Technologies:",
          "   Node.js      ██████████████████▒░ 93%",
          "   Python       █████████████████▒▒▒ 87%",
          "   PostgreSQL   █████████████████░░░ 85%",
          "   MongoDB      ████████████████▒▒▒▒ 82%",
          "",
          "🛠️ Tools & DevOps:",
          "   Git, Docker, AWS, Jest, Webpack",
        ];
        break;

      case "contact":
        output = [
          "=== CONTACT INFORMATION ===",
          "",
          "📧 Email: alex@example.com",
          "📞 Phone: +1 (555) 123-4567",
          "📍 Location: San Francisco, CA",
          "🌐 Website: alexdev.com",
          "🐙 GitHub: github.com/alexdev",
          "💼 LinkedIn: linkedin.com/in/alexdev",
          "",
          "Available for:",
          "  - Full-stack development projects",
          "  - Technical consulting",
          "  - Code reviews and mentoring",
          "  - Team leadership roles",
        ];
        break;

      case "clear":
        setTerminalHistory([]);
        return;

      case "ls":
        output = ["about.md", "contact.json", "projects/", "skills/", ".vscode/", "README.md"];
        break;

      case "tree":
        output = [
          ".",
          "├── about.md",
          "├── contact.json",
          "├── projects/",
          "│   ├── ecommerce-platform/",
          "│   ├── ai-chat-assistant/",
          "│   ├── mobile-banking-app/",
          "│   └── analytics-dashboard/",
          "├── skills/",
          "│   ├── frontend.json",
          "│   ├── backend.json",
          "│   └── tools.json",
          "├── .vscode/",
          "│   └── settings.json",
          "└── README.md",
        ];
        break;

      case "git status":
        output = [
          "On branch main",
          "Your branch is up to date with 'origin/main'.",
          "",
          "Changes not staged for commit:",
          '  (use "git add <file>..." to update what will be committed)',
          '  (use "git restore <file>..." to discard changes in working directory)',
          "\tmodified:   skills/frontend.json",
          "\tmodified:   projects/ecommerce-platform/README.md",
          "",
          "Untracked files:",
          '  (use "git add <file>..." to include in what will be committed)',
          "\tnew-project-idea.md",
          "",
          'no changes added to commit (use "git add" and/or "git commit -a")',
        ];
        break;

      case "npm start":
        output = [
          "> portfolio@1.0.0 start",
          "> next dev",
          "",
          "  ▲ Next.js 14.0.4",
          "  - Local:        http://localhost:3000",
          "  - Environments: .env.local",
          "",
          " ✓ Ready in 2.3s",
          " ○ Compiling / ...",
          " ✓ Compiled / in 1.2s (395 modules)",
          " ⚠ Fast Refresh had to perform a full reload.",
        ];
        break;

      case "cat about.md":
        output = [
          "# Alex Rodriguez - Senior Full-Stack Developer",
          "",
          "## About Me",
          "Passionate developer with 5+ years experience building",
          "scalable web applications. Started coding at 16, graduated",
          "from UC Berkeley, now leading development teams.",
          "",
          "## Current Role",
          "Senior Full-Stack Developer at TechCorp Inc.",
          "Leading a team of 8 developers, architecting enterprise",
          "solutions serving 100K+ users.",
          "",
          "## Philosophy",
          '"Clean code is not written by following a set of rules.',
          "You don't become a software craftsman by learning a list",
          "of heuristics. Professionalism and craftsmanship come from",
          'values that drive disciplines." - Robert C. Martin',
        ];
        break;

      default:
        output = [`bash: ${command}: command not found`];
        break;
    }

    const newCommand: Command = {
      input: `alex@dev-machine:~/portfolio$ ${command}`,
      output,
      timestamp,
    };

    setTerminalHistory((prev) => [...prev, newCommand]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* VS Code Style Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-sm">alex@dev-machine: ~/portfolio</div>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-2 text-xs">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CheckCircle className="w-3 h-3 text-green-400" />
            <span>0 problems</span>
          </div>
          <div className="text-xs">Ln 42, Col 15</div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* File Explorer Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
          <div className="text-gray-300 text-sm font-semibold mb-4 flex items-center gap-2">
            <Folder className="w-4 h-4" />
            PORTFOLIO EXPLORER
          </div>

          <div className="space-y-2">
            {[
              { name: "terminal.sh", icon: <Terminal className="w-4 h-4 text-green-400" />, active: currentSection === "terminal" },
              { name: "about.md", icon: <FileCode className="w-4 h-4 text-blue-400" />, active: currentSection === "about" },
              { name: "projects/", icon: <Folder className="w-4 h-4 text-yellow-400" />, active: currentSection === "projects" },
              { name: "skills.json", icon: <FileCode className="w-4 h-4 text-purple-400" />, active: currentSection === "skills" },
              { name: "contact.json", icon: <FileCode className="w-4 h-4 text-red-400" />, active: currentSection === "contact" },
            ].map((file, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(file.name.split(".")[0].replace("/", ""))}
                className={`w-full text-left flex items-center gap-2 px-2 py-1 rounded text-sm hover:bg-gray-700 transition-colors ${
                  file.active ? "bg-gray-700 text-white" : "text-gray-400"
                }`}
              >
                {file.icon}
                <span>{file.name}</span>
              </button>
            ))}
          </div>

          {/* System Stats */}
          <div className="mt-8 space-y-4">
            <div className="text-gray-500 text-xs font-semibold">SYSTEM STATS</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">CPU Usage</span>
                <span className="text-green-400">23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Memory</span>
                <span className="text-blue-400">4.2GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Disk</span>
                <span className="text-yellow-400">156GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime</span>
                <span className="text-purple-400">7d 3h</span>
              </div>
            </div>
          </div>

          {/* Coffee Counter */}
          <div className="mt-8 p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Coffee className="w-4 h-4 text-yellow-600" />
              <span className="text-gray-300 text-xs">Coffee Counter</span>
            </div>
            <div className="text-yellow-400 text-2xl font-bold">∞</div>
            <div className="text-gray-500 text-xs">Cups consumed today</div>
          </div>
        </div>

        {/* Main Terminal */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div className="bg-gray-700 border-b border-gray-600 px-4 py-2 flex items-center gap-4">
            <div className="bg-gray-800 px-3 py-1 rounded-t-lg text-gray-300 text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>bash</span>
              <button className="text-gray-500 hover:text-gray-300 text-xs">×</button>
            </div>
            <button className="text-gray-500 hover:text-gray-300 text-lg">+</button>
          </div>

          {/* Terminal Content */}
          <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto bg-gray-900">
            {/* Terminal Header */}
            <div className="mb-4">
              <div className="text-green-400 text-sm">Welcome to Alex's Development Environment</div>
              <div className="text-gray-500 text-xs">Type 'help' for available commands</div>
              <div className="text-gray-600 text-xs mt-2">Last login: {new Date().toLocaleString()}</div>
            </div>

            {/* Command History */}
            {terminalHistory.map((cmd, index) => (
              <div key={index} className="mb-4">
                <div className="text-blue-400 text-sm mb-1">{cmd.input}</div>
                {cmd.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="text-gray-300 text-sm ml-4">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Current Input Line */}
            <div className="flex items-center text-sm">
              <span className="text-blue-400">alex@dev-machine:~/portfolio$ </span>
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-green-400 flex-1 ml-1"
                autoFocus
              />
              <span className={`text-green-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-blue-600 text-white px-4 py-1 flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                <span>main</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>All tests passing</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>TypeScript React</div>
              <div>UTF-8</div>
              <div>LF</div>
              <div className="flex items-center gap-1">
                <Monitor className="w-3 h-3" />
                <span>localhost:3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
