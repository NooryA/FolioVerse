"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Zap,
  Rocket,
  Lightbulb,
  Code,
  Smartphone,
  Globe,
  User,
  Briefcase,
  Mail,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Rewind,
} from "lucide-react";

interface TimeEra {
  id: string;
  year: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: any;
  content: any;
  position: number;
}

export default function Home() {
  const [currentEra, setCurrentEra] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [timelinePosition, setTimelinePosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const timeEras: TimeEra[] = [
    {
      id: "prehistory",
      year: "2019",
      title: "The Beginning",
      description: "Where it all started - first steps into web development",
      color: "from-amber-400 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      icon: <Lightbulb className="w-8 h-8" />,
      position: 0,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-amber-800 mb-4">The Dawn of Development</h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Every journey begins with a single step. Mine started with curiosity and a simple "Hello World"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">🎓 Education Era</h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Started Computer Science at UC Berkeley</li>
                <li>• First exposure to programming with Python</li>
                <li>• Built first website with HTML/CSS</li>
                <li>• Discovered the magic of JavaScript</li>
              </ul>
            </div>

            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-amber-800 mb-4">💡 Key Discoveries</h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Learned about responsive design</li>
                <li>• First interaction with APIs</li>
                <li>• Version control with Git</li>
                <li>• The importance of clean code</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "early",
      year: "2020-2021",
      title: "The Learning Era",
      description: "Mastering the fundamentals and building first real projects",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      icon: <Code className="w-8 h-8" />,
      position: 1,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mb-6">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-blue-800 mb-4">The Age of Learning</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Diving deep into frameworks, libraries, and modern development practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">🚀 Frontend Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">React.js mastery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Component architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">State management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">CSS frameworks</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">⚙️ Backend Exploration</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Node.js & Express</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Database design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">RESTful APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Authentication</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">📱 First Projects</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Todo Application</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Weather App</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Portfolio Website</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700">Blog Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "professional",
      year: "2022",
      title: "The Professional Era",
      description: "Landing first job and working on enterprise-level applications",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      icon: <Briefcase className="w-8 h-8" />,
      position: 2,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-4">The Professional Awakening</h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Transitioning from student to professional developer in enterprise environments
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">🏢 Career Milestones</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-green-800">Frontend Developer at WebAgency</h4>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Entry Level</span>
                  </div>
                  <p className="text-green-700 mb-3">First professional role focusing on client websites and responsive design</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Delivered 15+ client websites</li>
                        <li>• Improved page load speeds by 40%</li>
                        <li>• Implemented responsive designs</li>
                        <li>• Collaborated with design team</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "WordPress"].map((tech) => (
                          <span key={tech} className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">💼 Professional Skills Gained</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Client communication</li>
                  <li>• Project management</li>
                  <li>• Code reviews</li>
                  <li>• Version control workflows</li>
                  <li>• Testing and debugging</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">🎯 Key Learnings</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Importance of clean, maintainable code</li>
                  <li>• Collaborative development practices</li>
                  <li>• Understanding business requirements</li>
                  <li>• Meeting deadlines and expectations</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• SEO best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "growth",
      year: "2023",
      title: "The Growth Era",
      description: "Advancing to senior roles and leading complex projects",
      color: "from-purple-400 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      icon: <Rocket className="w-8 h-8" />,
      position: 3,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-purple-800 mb-4">The Age of Innovation</h2>
            <p className="text-xl text-purple-700 max-w-2xl mx-auto">
              Leading teams, architecting solutions, and pushing the boundaries of what's possible
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">🚀 Major Projects</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "E-Commerce Platform",
                    description: "Full-stack marketplace with 10K+ users",
                    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
                    impact: "300% revenue increase",
                  },
                  {
                    title: "AI Chat Assistant",
                    description: "ML-powered customer service bot",
                    tech: ["Python", "OpenAI", "React", "WebSockets"],
                    impact: "60% support ticket reduction",
                  },
                  {
                    title: "Mobile Banking App",
                    description: "Secure fintech application",
                    tech: ["React Native", "Node.js", "MongoDB"],
                    impact: "50K+ active users",
                  },
                ].map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg p-6 border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">{project.title}</h4>
                    <p className="text-purple-700 text-sm mb-3">{project.description}</p>
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-purple-600 mb-1">Tech Stack:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-purple-600">
                      Impact: <span className="text-purple-800">{project.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">👥 Leadership</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Managing 5+ developers</li>
                  <li>• Code review and mentoring</li>
                  <li>• Architecture decisions</li>
                  <li>• Sprint planning</li>
                  <li>• Stakeholder communication</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🔧 Advanced Skills</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Microservices architecture</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Cloud deployment (AWS)</li>
                  <li>• Performance optimization</li>
                  <li>• Security best practices</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">📈 Impact</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• 40% faster deployment</li>
                  <li>• 60% fewer bugs</li>
                  <li>• 3x team productivity</li>
                  <li>• $2M+ revenue generated</li>
                  <li>• 98% uptime achieved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "future",
      year: "2024+",
      title: "The Future",
      description: "What lies ahead in the timeline of innovation",
      color: "from-pink-400 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      icon: <Zap className="w-8 h-8" />,
      position: 4,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 to-rose-600 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-pink-800 mb-4">The Future Frontier</h2>
            <p className="text-xl text-pink-700 max-w-2xl mx-auto">
              Exploring new technologies and building the next generation of digital experiences
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/80 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-pink-800 mb-6">🔮 Vision & Goals</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-pink-800">AI Integration</h4>
                      <p className="text-pink-700 text-sm">Building intelligent applications that enhance user experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-pink-800">Web3 Technologies</h4>
                      <p className="text-pink-700 text-sm">Exploring blockchain and decentralized applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-pink-800">Mentorship</h4>
                      <p className="text-pink-700 text-sm">Helping the next generation of developers grow</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-pink-800 mb-6">📞 Let's Connect</h3>
                <p className="text-pink-700 mb-6">Ready to collaborate on the next big thing? Let's build something amazing together!</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800">alex@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-800">alexdev.com</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                      View Projects
                    </button>
                    <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">🚀 The Journey Continues...</h3>
              <p className="text-pink-100 max-w-3xl mx-auto">
                This timeline represents just the beginning. Every project, every challenge, and every breakthrough shapes the path forward.
                The best is yet to come.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentEra((prev) => (prev + 1) % timeEras.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, timeEras.length]);

  const goToEra = (index: number) => {
    setCurrentEra(index);
    setTimelinePosition(-index * (window.innerWidth * 0.8));
  };

  const nextEra = () => {
    const next = (currentEra + 1) % timeEras.length;
    goToEra(next);
  };

  const prevEra = () => {
    const prev = (currentEra - 1 + timeEras.length) % timeEras.length;
    goToEra(prev);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;

    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentEra > 0) {
        prevEra();
      } else if (deltaX < 0 && currentEra < timeEras.length - 1) {
        nextEra();
      }
      setIsDragging(false);
      setDragStartX(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  return (
    <div className="h-screen overflow-hidden bg-black relative">
      {/* Time Machine Controls */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-sm text-white rounded-2xl px-6 py-3 flex items-center gap-4 border border-gray-600">
          <button onClick={() => setAutoPlay(!autoPlay)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="text-sm">{autoPlay ? "Pause" : "Auto Play"}</span>
          </button>

          <div className="w-px h-6 bg-gray-600"></div>

          <button onClick={() => goToEra(0)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Reset</span>
          </button>

          <div className="w-px h-6 bg-gray-600"></div>

          <button
            onClick={prevEra}
            disabled={currentEra === 0}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors disabled:opacity-50"
          >
            <Rewind className="w-4 h-4" />
            <span className="text-sm">Previous</span>
          </button>

          <button
            onClick={nextEra}
            disabled={currentEra === timeEras.length - 1}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors disabled:opacity-50"
          >
            <span className="text-sm">Next</span>
            <FastForward className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-600">
          <div className="flex items-center gap-6">
            {timeEras.map((era, index) => (
              <button
                key={era.id}
                onClick={() => goToEra(index)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                  currentEra === index ? "bg-white/20 text-white scale-110" : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${era.color} flex items-center justify-center`}>{era.icon}</div>
                <div className="text-xs font-medium">{era.year}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevEra}
        disabled={currentEra === 0}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 bg-black/80 text-white p-4 rounded-full hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextEra}
        disabled={currentEra === timeEras.length - 1}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 bg-black/80 text-white p-4 rounded-full hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Timeline Container */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(${-currentEra * 100}vw)`,
          width: `${timeEras.length * 100}vw`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {timeEras.map((era, index) => (
          <div key={era.id} className={`w-screen h-full flex-shrink-0 ${era.bgColor} relative overflow-y-auto`}>
            {/* Era Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
                  backgroundSize: "60px 60px",
                }}
              ></div>
            </div>

            {/* Era Header */}
            <div className="relative z-10 pt-24 pb-12">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r ${era.color} text-white shadow-2xl`}>
                  <Clock className="w-6 h-6" />
                  <span className="text-2xl font-bold">{era.year}</span>
                  <div className="w-px h-8 bg-white/30"></div>
                  <span className="text-xl">{era.title}</span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-8">{era.content}</div>
            </div>

            {/* Era Footer */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <p className="text-center text-lg opacity-70 max-w-md">{era.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-1000"
          style={{ width: `${((currentEra + 1) / timeEras.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
