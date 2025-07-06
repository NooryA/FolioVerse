"use client";

import { useState, useEffect, useRef } from "react";
import {
  Volume2,
  VolumeX,
  Power,
  Settings,
  ChevronUp,
  ChevronDown,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Monitor,
  Wifi,
  Signal,
  Battery,
  User,
  Briefcase,
  Code,
  Mail,
  Star,
  Github,
  Linkedin,
  Globe,
  Phone,
  MapPin,
} from "lucide-react";

interface TVChannel {
  id: number;
  name: string;
  content: any;
  category: string;
  signal: number;
}

export default function Home() {
  const [currentChannel, setCurrentChannel] = useState(1);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isChangingChannel, setIsChangingChannel] = useState(false);
  const [showChannelInfo, setShowChannelInfo] = useState(false);
  const [staticNoise, setStaticNoise] = useState(false);
  const tvRef = useRef<HTMLDivElement>(null);

  const channels: TVChannel[] = [
    {
      id: 1,
      name: "ALEX NETWORK",
      category: "OVERVIEW",
      signal: 98,
      content: (
        <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden">
          {/* TV Show Intro Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
          </div>

          <div className="text-center z-10 animate-fadeIn">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ALEX RODRIGUEZ
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">⚡ Full-Stack Developer ⚡</p>
              <div className="flex justify-center gap-6 text-lg">
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">📍 San Francisco, CA</div>
                <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">🚀 5+ Years Experience</div>
              </div>
            </div>

            <div className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              "Welcome to my digital universe! Tune in to explore my journey, projects, and expertise in modern web development."
            </div>

            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span>📺 NOW PLAYING</span>
              <span>•</span>
              <span>🔴 LIVE</span>
              <span>•</span>
              <span>📡 HD QUALITY</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: "ABOUT ALEX",
      category: "BIOGRAPHY",
      signal: 95,
      content: (
        <div className="h-full bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Documentary Style Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-green-400 mb-2">📹 DOCUMENTARY SPECIAL</div>
              <h2 className="text-4xl font-bold mb-4">The Developer Chronicles</h2>
              <div className="text-gray-300">A deep dive into the life of a modern developer</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Bio */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-green-400">The Beginning</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    🎬 Our story begins in 2019 when Alex first discovered the magic of code. What started as curiosity quickly became a
                    passion that would shape his entire career.
                  </p>
                  <p>
                    📚 Graduating from UC Berkeley with a Computer Science degree, Alex combined theoretical knowledge with hands-on
                    experience to build a solid foundation.
                  </p>
                  <p>
                    💼 Today, he leads development teams at TechCorp Inc., architecting solutions that serve hundreds of thousands of users
                    worldwide.
                  </p>
                </div>
              </div>

              {/* Career Timeline */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Career Highlights</h3>
                <div className="space-y-4">
                  {[
                    {
                      year: "2024",
                      role: "Senior Full-Stack Developer",
                      company: "TechCorp Inc.",
                      achievement: "Led team of 8 developers",
                    },
                    { year: "2022", role: "Full-Stack Developer", company: "StartupHub", achievement: "Built 5 major product features" },
                    { year: "2020", role: "Frontend Developer", company: "WebAgency", achievement: "Delivered 15+ client projects" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-400 pl-4 animate-slideInLeft"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="text-green-400 font-bold">{item.year}</div>
                      <div className="text-white font-semibold">{item.role}</div>
                      <div className="text-gray-400 text-sm">{item.company}</div>
                      <div className="text-gray-300 text-sm">🏆 {item.achievement}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Behind the Code</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">☕</div>
                  <div className="text-white font-bold">∞ Cups</div>
                  <div className="text-gray-400 text-sm">Coffee Consumed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌙</div>
                  <div className="text-white font-bold">500+</div>
                  <div className="text-gray-400 text-sm">Late Night Coding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🐛</div>
                  <div className="text-white font-bold">1000+</div>
                  <div className="text-gray-400 text-sm">Bugs Squashed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "PROJECT SHOWCASE",
      category: "TECH REVIEW",
      signal: 97,
      content: (
        <div className="h-full bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Tech Review Show Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-purple-400 mb-2">📱 TECH REVIEW SHOW</div>
              <h2 className="text-4xl font-bold mb-4">Project Spotlight</h2>
              <div className="text-gray-300">Showcasing cutting-edge applications and innovations</div>
            </div>

            {/* Featured Project */}
            <div className="mb-8 bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-purple-400 text-sm mb-2">🏆 FEATURED PROJECT</div>
                  <h3 className="text-3xl font-bold mb-4">E-Commerce Platform</h3>
                  <p className="text-gray-300 mb-4">
                    A comprehensive marketplace solution serving over 10,000 active users with real-time inventory management, secure
                    payment processing, and advanced analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "Node.js", "PostgreSQL", "AWS", "Stripe"].map((tech, i) => (
                      <span key={i} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="text-green-400">✅ Production Ready</div>
                    <div className="text-blue-400">👥 10K+ Users</div>
                    <div className="text-yellow-400">⭐ 4.8/5 Rating</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 mx-auto mb-4 text-white" />
                    <div className="text-2xl font-bold mb-2">E-COMMERCE</div>
                    <div className="text-purple-200">Live Demo Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "AI Chat Assistant",
                  description: "ML-powered customer service bot",
                  tech: ["Python", "OpenAI", "React"],
                  status: "Deployed",
                  users: "5K+",
                  icon: "🤖",
                },
                {
                  name: "Mobile Banking App",
                  description: "Secure fintech mobile application",
                  tech: ["React Native", "Firebase"],
                  status: "Live",
                  users: "50K+",
                  icon: "💳",
                },
                {
                  name: "Analytics Dashboard",
                  description: "Real-time data visualization platform",
                  tech: ["Vue.js", "D3.js", "MongoDB"],
                  status: "Beta",
                  users: "1K+",
                  icon: "📊",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-black/30 p-6 rounded-lg backdrop-blur-sm hover:bg-black/40 transition-all duration-300 animate-slideInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{project.icon}</div>
                    <h4 className="text-xl font-bold text-white">{project.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">{project.status}</span>
                    <span className="text-blue-400">{project.users}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: "SKILL MATRIX",
      category: "EDUCATION",
      signal: 94,
      content: (
        <div className="h-full bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 text-white p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* Educational Show Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-cyan-400 mb-2">🎓 EDUCATIONAL SERIES</div>
              <h2 className="text-4xl font-bold mb-4">The Tech Stack</h2>
              <div className="text-gray-300">Understanding modern development technologies</div>
            </div>

            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Monitor className="w-6 h-6" />
                  Frontend Mastery
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "React.js", level: 95, experience: "4 years" },
                    { name: "Vue.js", level: 88, experience: "3 years" },
                    { name: "TypeScript", level: 92, experience: "3 years" },
                    { name: "CSS/SCSS", level: 90, experience: "5 years" },
                  ].map((skill, index) => (
                    <div key={index} className="animate-slideInLeft" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-gray-400 text-xs">{skill.experience} experience</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Code className="w-6 h-6" />
                  Backend Power
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Node.js", level: 93, experience: "4 years" },
                    { name: "Python", level: 87, experience: "3 years" },
                    { name: "PostgreSQL", level: 85, experience: "3 years" },
                    { name: "MongoDB", level: 82, experience: "2 years" },
                  ].map((skill, index) => (
                    <div key={index} className="animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-1">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-gray-400 text-xs">{skill.experience} experience</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mt-8 bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Development Arsenal</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { tool: "Git", icon: "🔀" },
                  { tool: "Docker", icon: "🐳" },
                  { tool: "AWS", icon: "☁️" },
                  { tool: "Figma", icon: "🎨" },
                  { tool: "Jest", icon: "🧪" },
                  { tool: "Webpack", icon: "📦" },
                  { tool: "GraphQL", icon: "🚀" },
                  { tool: "Redis", icon: "⚡" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black/50 p-4 rounded-lg text-center hover:bg-black/70 transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-semibold">{item.tool}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      name: "CONTACT CENTRAL",
      category: "TALK SHOW",
      signal: 96,
      content: (
        <div className="h-full bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Talk Show Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-orange-400 mb-2">🎙️ LATE NIGHT TALK SHOW</div>
              <h2 className="text-4xl font-bold mb-4">Connect with Alex</h2>
              <div className="text-gray-300">Let's talk about your next big project!</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Get In Touch</h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Email",
                      value: "alex@example.com",
                      icon: <Mail className="w-5 h-5" />,
                      description: "Best for project inquiries",
                    },
                    {
                      label: "Phone",
                      value: "+1 (555) 123-4567",
                      icon: <Phone className="w-5 h-5" />,
                      description: "Available Mon-Fri 9AM-6PM PST",
                    },
                    {
                      label: "Location",
                      value: "San Francisco, CA",
                      icon: <MapPin className="w-5 h-5" />,
                      description: "Open to remote collaboration",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-black/50 rounded-lg animate-slideInLeft"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-orange-400 mt-1">{contact.icon}</div>
                      <div>
                        <div className="font-semibold text-white">{contact.label}</div>
                        <div className="text-orange-300 text-lg">{contact.value}</div>
                        <div className="text-gray-400 text-sm">{contact.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-orange-400">Follow the Show</h4>
                  <div className="flex gap-4">
                    {[
                      { platform: "GitHub", icon: <Github className="w-6 h-6" />, color: "bg-gray-700" },
                      { platform: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, color: "bg-blue-600" },
                      { platform: "Website", icon: <Globe className="w-6 h-6" />, color: "bg-green-600" },
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`${social.color} p-3 rounded-lg hover:scale-110 transition-transform duration-300 animate-bounceIn`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-orange-400 rounded-lg p-3 text-white focus:border-orange-300 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-orange-400 rounded-lg p-3 text-white focus:border-orange-300 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Project Type</label>
                    <select className="w-full bg-black/50 border border-orange-400 rounded-lg p-3 text-white focus:border-orange-300 focus:outline-none">
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>E-commerce Site</option>
                      <option>API Development</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-black/50 border border-orange-400 rounded-lg p-3 text-white focus:border-orange-300 focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                    Send Message 🚀
                  </button>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 bg-black/30 p-6 rounded-lg backdrop-blur-sm text-center">
              <div className="text-orange-400 text-lg font-bold mb-2">📺 Behind the Scenes</div>
              <div className="text-gray-300">"I respond to all messages within 24 hours! Let's build something amazing together."</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const changeChannel = (newChannel: number) => {
    if (newChannel >= 1 && newChannel <= channels.length && newChannel !== currentChannel) {
      setIsChangingChannel(true);
      setStaticNoise(true);

      setTimeout(() => {
        setCurrentChannel(newChannel);
        setStaticNoise(false);
        setIsChangingChannel(false);
        setShowChannelInfo(true);
        setTimeout(() => setShowChannelInfo(false), 3000);
      }, 500);
    }
  };

  const nextChannel = () => {
    const next = currentChannel >= channels.length ? 1 : currentChannel + 1;
    changeChannel(next);
  };

  const prevChannel = () => {
    const prev = currentChannel <= 1 ? channels.length : currentChannel - 1;
    changeChannel(prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPoweredOn(true);
      setShowChannelInfo(true);
      setTimeout(() => setShowChannelInfo(false), 3000);
    }, 1000);
  }, []);

  const currentChannelData = channels.find((c) => c.id === currentChannel);

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      {/* TV Set */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-black rounded-3xl p-8 shadow-2xl" style={{ aspectRatio: "16/10" }}>
          {/* TV Brand */}
          <div className="absolute top-4 left-8 text-gray-500 font-bold text-lg">ALEX TV</div>

          {/* Power Button */}
          <button
            onClick={() => setIsPoweredOn(!isPoweredOn)}
            className={`absolute top-4 right-8 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isPoweredOn ? "border-green-500 text-green-500 bg-green-500/20" : "border-gray-500 text-gray-500"
            }`}
          >
            <Power className="w-6 h-6" />
          </button>

          {/* TV Screen */}
          <div
            ref={tvRef}
            className="relative w-full h-full bg-black rounded-2xl overflow-hidden border-4 border-gray-800"
            style={{ aspectRatio: "16/9" }}
          >
            {!isPoweredOn ? (
              // TV Off State
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-gray-600 text-2xl">📺</div>
              </div>
            ) : (
              <>
                {/* Static Noise Overlay */}
                {staticNoise && (
                  <div className="absolute inset-0 z-50 bg-black">
                    <div
                      className="w-full h-full opacity-80"
                      style={{
                        background: `
                          repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 2px,
                            rgba(255,255,255,0.03) 2px,
                            rgba(255,255,255,0.03) 4px
                          ),
                          repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 2px,
                            rgba(255,255,255,0.03) 2px,
                            rgba(255,255,255,0.03) 4px
                          )
                        `,
                      }}
                    >
                      <div className="w-full h-full bg-gray-800 opacity-50 animate-pulse"></div>
                    </div>
                  </div>
                )}

                {/* TV Scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 opacity-20"
                  style={{
                    background: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      rgba(0,0,0,0.1) 2px,
                      rgba(0,0,0,0.1) 4px
                    )`,
                  }}
                />

                {/* Channel Content */}
                <div className="w-full h-full">{currentChannelData?.content}</div>

                {/* Channel Info Overlay */}
                {showChannelInfo && (
                  <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-bold">{currentChannel}</div>
                      <div>
                        <div className="font-bold">{currentChannelData?.name}</div>
                        <div className="text-sm text-gray-300">{currentChannelData?.category}</div>
                      </div>
                      <div className="ml-4 flex items-center gap-1">
                        <Signal className="w-4 h-4" />
                        <div className="text-sm">{currentChannelData?.signal}%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Volume Indicator */}
                {!isMuted && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 text-white px-3 py-2 rounded-lg">
                    <Volume2 className="w-4 h-4" />
                    <div className="w-20 h-1 bg-gray-600 rounded-full">
                      <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${volume}%` }} />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* TV Controls */}
          {isPoweredOn && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-gray-800 rounded-lg p-4">
              {/* Channel Controls */}
              <div className="flex flex-col">
                <button onClick={prevChannel} className="text-white hover:text-blue-400 transition-colors" disabled={isChangingChannel}>
                  <ChevronUp className="w-6 h-6" />
                </button>
                <button onClick={nextChannel} className="text-white hover:text-blue-400 transition-colors" disabled={isChangingChannel}>
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>

              {/* Channel Display */}
              <div className="text-white text-center min-w-[60px]">
                <div className="text-sm text-gray-400">CH</div>
                <div className="text-2xl font-bold">{currentChannel}</div>
              </div>

              {/* Quick Channel Buttons */}
              <div className="flex gap-2">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => changeChannel(channel.id)}
                    className={`w-8 h-8 rounded text-sm font-bold transition-colors ${
                      currentChannel === channel.id ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                    }`}
                    disabled={isChangingChannel}
                  >
                    {channel.id}
                  </button>
                ))}
              </div>

              {/* Volume Controls */}
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-blue-400 transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* TV Stand */}
        <div className="w-32 h-8 bg-gray-700 mx-auto rounded-b-lg"></div>
        <div className="w-48 h-4 bg-gray-800 mx-auto rounded-lg"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
