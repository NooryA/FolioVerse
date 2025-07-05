"use client";

import { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Settings,
  Mail,
  FileText,
  Image,
  Video,
  Code,
  Globe,
  Calendar,
  Calculator,
  Music,
  Camera,
  Search,
  Wifi,
  Volume2,
  Battery,
  Minimize2,
  Maximize2,
  X,
  Menu,
  Folder,
  Star,
  Download,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
} from "lucide-react";

interface WindowProps {
  id: string;
  title: string;
  icon: any;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  content: any;
  zIndex: number;
}

interface DesktopIcon {
  id: string;
  name: string;
  icon: any;
  type: "app" | "file" | "folder";
  position: { x: number; y: number };
  action: () => void;
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [windows, setWindows] = useState<WindowProps[]>([]);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [nextZIndex, setNextZIndex] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const desktopIcons: DesktopIcon[] = [
    {
      id: "about",
      name: "About Me",
      icon: <User className="w-8 h-8" />,
      type: "app",
      position: { x: 50, y: 50 },
      action: () => openWindow("about"),
    },
    {
      id: "projects",
      name: "Projects",
      icon: <Briefcase className="w-8 h-8" />,
      type: "app",
      position: { x: 50, y: 150 },
      action: () => openWindow("projects"),
    },
    {
      id: "skills",
      name: "Skills",
      icon: <Settings className="w-8 h-8" />,
      type: "app",
      position: { x: 50, y: 250 },
      action: () => openWindow("skills"),
    },
    {
      id: "contact",
      name: "Contact",
      icon: <Mail className="w-8 h-8" />,
      type: "app",
      position: { x: 50, y: 350 },
      action: () => openWindow("contact"),
    },
    {
      id: "resume",
      name: "Resume.pdf",
      icon: <FileText className="w-8 h-8" />,
      type: "file",
      position: { x: 150, y: 50 },
      action: () => openWindow("resume"),
    },
    {
      id: "portfolio",
      name: "Portfolio Gallery",
      icon: <Image className="w-8 h-8" />,
      type: "folder",
      position: { x: 150, y: 150 },
      action: () => openWindow("gallery"),
    },
  ];

  const windowTemplates = {
    about: {
      title: "About Me - Personal Information",
      icon: <User className="w-4 h-4" />,
      size: { width: 600, height: 500 },
      content: (
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Profile"
                className="w-18 h-18 rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Alex Rodriguez</h2>
              <p className="text-gray-600">Full-Stack Developer</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">🚀 About</h3>
              <p className="text-gray-700">
                Passionate full-stack developer with 5+ years of experience creating amazing web applications. I love turning complex
                problems into simple, beautiful designs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💼 Experience</h3>
              <ul className="space-y-2">
                <li>• Senior Frontend Developer at TechCorp Inc. (2022-Present)</li>
                <li>• Full Stack Developer at StartupHub (2020-2022)</li>
                <li>• Frontend Developer at WebAgency (2019-2020)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎓 Education</h3>
              <p className="text-gray-700">Bachelor of Science in Computer Science</p>
            </div>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Projects - My Work Portfolio",
      icon: <Briefcase className="w-4 h-4" />,
      size: { width: 800, height: 600 },
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                name: "E-Commerce Platform",
                tech: "React, Node.js, PostgreSQL",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4d3aea6?w=300&h=200&fit=crop",
              },
              {
                name: "AI Chat Assistant",
                tech: "Python, OpenAI, React",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
              },
              {
                name: "Mobile Banking App",
                tech: "React Native, Firebase",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
              },
              {
                name: "Analytics Dashboard",
                tech: "Vue.js, D3.js, MongoDB",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
              },
            ].map((project, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img src={project.image} alt={project.name} className="w-full h-32 object-cover rounded mb-3" />
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    skills: {
      title: "Skills & Technologies",
      icon: <Settings className="w-4 h-4" />,
      size: { width: 700, height: 500 },
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="space-y-6">
            {[
              { category: "Frontend", skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
              { category: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
              { category: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android"] },
            ].map((group, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-3 text-blue-600">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    contact: {
      title: "Contact Information",
      icon: <Mail className="w-4 h-4" />,
      size: { width: 500, height: 400 },
      content: (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>alex@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>San Francisco, CA</span>
            </div>
            <div className="pt-4">
              <h3 className="font-semibold mb-3">Social Links</h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg">
                  <Github className="w-4 h-4" />
                  GitHub
                </button>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
                <button className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    resume: {
      title: "Resume.pdf - Adobe Acrobat Reader",
      icon: <FileText className="w-4 h-4" />,
      size: { width: 700, height: 600 },
      content: (
        <div className="p-6 bg-gray-50 h-full">
          <div className="bg-white shadow-lg rounded-lg p-8 h-full overflow-auto">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">Alex Rodriguez</h1>
              <p className="text-gray-600">Full-Stack Developer</p>
              <p className="text-sm text-gray-500">alex@example.com | +1 (555) 123-4567 | San Francisco, CA</p>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Experience</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Senior Frontend Developer</h3>
                    <p className="text-gray-600">TechCorp Inc. | 2022 - Present</p>
                    <ul className="text-sm text-gray-700 mt-1 list-disc list-inside">
                      <li>Lead development of enterprise React applications</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                      <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Full Stack Developer</h3>
                    <p className="text-gray-600">StartupHub | 2020 - 2022</p>
                    <ul className="text-sm text-gray-700 mt-1 list-disc list-inside">
                      <li>Built scalable MERN stack applications</li>
                      <li>Designed and implemented RESTful APIs</li>
                      <li>Collaborated with design team on UX improvements</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Education</h2>
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-600">University of California, Berkeley | 2015 - 2019</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b-2 border-blue-500 pb-1 mb-3">Skills</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium">Frontend:</h4>
                    <p className="text-gray-700">React, Vue.js, TypeScript, CSS</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Backend:</h4>
                    <p className="text-gray-700">Node.js, Python, PostgreSQL</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ),
    },
    gallery: {
      title: "Portfolio Gallery - Image Viewer",
      icon: <Image className="w-4 h-4" />,
      size: { width: 800, height: 600 },
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Project Screenshots</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop",
              "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=150&fit=crop",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=150&fit=crop",
              "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=200&h=150&fit=crop",
            ].map((src, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img src={src} alt={`Screenshot ${index + 1}`} className="w-full h-32 object-cover" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const openWindow = (windowId: string) => {
    const template = windowTemplates[windowId as keyof typeof windowTemplates];
    if (!template) return;

    const existingWindow = windows.find((w) => w.id === windowId);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, isMinimized: false, zIndex: nextZIndex } : w)));
        setNextZIndex((prev) => prev + 1);
      }
      setActiveWindow(windowId);
      return;
    }

    const newWindow: WindowProps = {
      id: windowId,
      title: template.title,
      icon: template.icon,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      position: { x: 100 + windows.length * 30, y: 100 + windows.length * 30 },
      size: template.size,
      content: template.content,
      zIndex: nextZIndex,
    };

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindow(windowId);
    setNextZIndex((prev) => prev + 1);
  };

  const closeWindow = (windowId: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== windowId));
    if (activeWindow === windowId) {
      const remainingWindows = windows.filter((w) => w.id !== windowId);
      setActiveWindow(remainingWindows.length > 0 ? remainingWindows[remainingWindows.length - 1].id : null);
    }
  };

  const minimizeWindow = (windowId: string) => {
    setWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, isMinimized: true } : w)));
  };

  const maximizeWindow = (windowId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === windowId
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? w.position : { x: 0, y: 0 },
              size: w.isMaximized ? w.size : { width: window.innerWidth, height: window.innerHeight - 50 },
            }
          : w
      )
    );
  };

  const bringToFront = (windowId: string) => {
    setWindows((prev) => prev.map((w) => (w.id === windowId ? { ...w, zIndex: nextZIndex } : w)));
    setActiveWindow(windowId);
    setNextZIndex((prev) => prev + 1);
  };

  const startDrag = (windowId: string, e: React.MouseEvent) => {
    const window = windows.find((w) => w.id === windowId);
    if (!window || window.isMaximized) return;

    setDraggedWindow(windowId);
    setDragOffset({
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    });
    bringToFront(windowId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedWindow) return;

    setWindows((prev) =>
      prev.map((w) =>
        w.id === draggedWindow
          ? {
              ...w,
              position: {
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y,
              },
            }
          : w
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedWindow(null);
  };

  return (
    <div
      className="h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Desktop Icons */}
      <div className="relative z-10">
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute cursor-pointer hover:bg-white/20 rounded-lg p-2 transition-colors"
            style={{ left: icon.position.x, top: icon.position.y }}
            onDoubleClick={icon.action}
          >
            <div className="text-white flex flex-col items-center gap-1">
              {icon.icon}
              <span className="text-xs text-center max-w-16 break-words">{icon.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Windows */}
      {windows
        .filter((w) => !w.isMinimized)
        .map((window) => (
          <div
            key={window.id}
            className={`absolute bg-white rounded-lg shadow-2xl border border-gray-300 ${
              activeWindow === window.id ? "ring-2 ring-blue-500" : ""
            }`}
            style={{
              left: window.position.x,
              top: window.position.y,
              width: window.size.width,
              height: window.size.height,
              zIndex: window.zIndex,
            }}
            onClick={() => bringToFront(window.id)}
          >
            {/* Window Title Bar */}
            <div
              className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg px-4 py-2 flex items-center justify-between cursor-move border-b"
              onMouseDown={(e) => startDrag(window.id, e)}
            >
              <div className="flex items-center gap-2">
                {window.icon}
                <span className="text-sm font-medium truncate">{window.title}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => minimizeWindow(window.id)}
                  className="w-6 h-6 bg-yellow-400 hover:bg-yellow-500 rounded flex items-center justify-center"
                >
                  <Minimize2 className="w-3 h-3" />
                </button>
                <button
                  onClick={() => maximizeWindow(window.id)}
                  className="w-6 h-6 bg-green-400 hover:bg-green-500 rounded flex items-center justify-center"
                >
                  <Maximize2 className="w-3 h-3" />
                </button>
                <button
                  onClick={() => closeWindow(window.id)}
                  className="w-6 h-6 bg-red-400 hover:bg-red-500 rounded flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="overflow-auto" style={{ height: `calc(100% - 50px)` }}>
              {window.content}
            </div>
          </div>
        ))}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 flex items-center justify-between z-50">
        {/* Start Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowStartMenu(!showStartMenu)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <Menu className="w-4 h-4" />
            <span className="text-sm font-medium">Start</span>
          </button>

          {/* Running Apps */}
          <div className="flex gap-2">
            {windows.map((window) => (
              <button
                key={window.id}
                onClick={() => {
                  if (window.isMinimized) {
                    setWindows((prev) => prev.map((w) => (w.id === window.id ? { ...w, isMinimized: false } : w)));
                  }
                  bringToFront(window.id);
                }}
                className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                  activeWindow === window.id && !window.isMinimized ? "bg-blue-600 border border-blue-400" : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {window.icon}
                <span className="text-xs max-w-24 truncate">{window.title.split(" - ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex gap-2">
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
          <div className="text-right">
            <div>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
            <div className="text-xs text-gray-300">{currentTime.toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="absolute bottom-12 left-4 w-80 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-600 z-50">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-600">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Alex Rodriguez</div>
                <div className="text-gray-400 text-sm">Developer</div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-2">Applications</h3>
              {desktopIcons
                .filter((icon) => icon.type === "app")
                .map((app) => (
                  <button
                    key={app.id}
                    onClick={() => {
                      app.action();
                      setShowStartMenu(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors text-left"
                  >
                    <div className="text-white">{app.icon}</div>
                    <span className="text-white">{app.name}</span>
                  </button>
                ))}

              <div className="border-t border-gray-600 pt-2 mt-4">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors text-left">
                  <Settings className="w-5 h-5 text-white" />
                  <span className="text-white">Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors text-left">
                  <Search className="w-5 h-5 text-white" />
                  <span className="text-white">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close start menu */}
      {showStartMenu && <div className="fixed inset-0 z-40" onClick={() => setShowStartMenu(false)} />}
    </div>
  );
}
