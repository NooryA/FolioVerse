"use client";

import { useState, useEffect } from "react";
import {
  Rocket,
  Globe,
  Satellite,
  Radio,
  Zap,
  Star,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Gauge,
  Shield,
  Navigation,
  Eye,
  Send,
  Settings,
  TrendingUp,
  Users,
  Award,
  Code,
  Database,
  Cpu,
  Cloud,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

interface MissionData {
  status: "active" | "complete" | "standby";
  progress: number;
  details: string;
}

export default function Home() {
  const [currentMission, setCurrentMission] = useState("overview");
  const [missionTime, setMissionTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState({
    power: 98,
    communications: 100,
    navigation: 95,
    lifesupport: 100,
  });
  const [missionData, setMissionData] = useState<Record<string, MissionData>>({
    overview: { status: "active", progress: 75, details: "Mission Control Online" },
    profile: { status: "active", progress: 100, details: "Crew Profile Complete" },
    projects: { status: "active", progress: 85, details: "Deep Space Projects" },
    skills: { status: "active", progress: 92, details: "Technical Systems" },
    contact: { status: "standby", progress: 0, details: "Awaiting Communication" },
  });

  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(newStars);

    // Mission time update
    const timer = setInterval(() => {
      setMissionTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const missions = [
    {
      id: "overview",
      name: "Mission Overview",
      icon: <Globe className="w-5 h-5" />,
      color: "text-blue-400",
    },
    {
      id: "profile",
      name: "Crew Profile",
      icon: <Users className="w-5 h-5" />,
      color: "text-green-400",
    },
    {
      id: "projects",
      name: "Deep Space Projects",
      icon: <Satellite className="w-5 h-5" />,
      color: "text-purple-400",
    },
    {
      id: "skills",
      name: "Technical Systems",
      icon: <Settings className="w-5 h-5" />,
      color: "text-orange-400",
    },
    {
      id: "contact",
      name: "Communications",
      icon: <Radio className="w-5 h-5" />,
      color: "text-red-400",
    },
  ];

  const renderMissionContent = () => {
    switch (currentMission) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold text-white mb-4">COMMANDER ALEX RODRIGUEZ</h1>
              <p className="text-2xl text-blue-300 mb-6">Senior Full-Stack Developer & Tech Mission Leader</p>
              <div className="flex justify-center items-center gap-4 text-lg text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
                <span>•</span>
                <span>Mission Years: 5+</span>
                <span>•</span>
                <span>Status: Active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-blue-400">Current Mission</h3>
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">Enterprise Development</p>
                <p className="text-sm text-gray-400">Leading team of 8+ developers</p>
              </div>

              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-green-400">Success Rate</h3>
                  <Target className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-sm text-gray-400">Project completion rate</p>
              </div>

              <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-purple-400">Projects Deployed</h3>
                  <Rocket className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-400">Successful launches</p>
              </div>

              <div className="bg-gray-800/50 border border-orange-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-orange-400">Users Served</h3>
                  <Globe className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-2xl font-bold text-white">100K+</p>
                <p className="text-sm text-gray-400">Across all missions</p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                Mission Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Build scalable web applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Lead development teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Implement CI/CD pipelines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Optimize performance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Mentor junior developers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Design system architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Ensure code quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Drive innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">CREW PROFILE</h2>
              <p className="text-xl text-green-300">Mission Commander Alex Rodriguez</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Personal Data
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white font-semibold">Alex Rodriguez</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Rank:</span>
                    <span className="text-white font-semibold">Senior Developer</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white font-semibold">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Mission History
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-500 pl-4">
                    <div className="text-white font-semibold">E-Commerce Platform</div>
                    <div className="text-gray-400 text-sm">10,000+ users • 99.9% uptime</div>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <div className="text-white font-semibold">AI Chat Assistant</div>
                    <div className="text-gray-400 text-sm">60% ticket reduction • 5K+ daily chats</div>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <div className="text-white font-semibold">Mobile Banking App</div>
                    <div className="text-gray-400 text-sm">50K+ users • $5M+ transactions</div>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4">
                    <div className="text-white font-semibold">Analytics Dashboard</div>
                    <div className="text-gray-400 text-sm">1TB+ data • &lt;2s load time</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-400" />
                Mission Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Quality First</h4>
                  <p className="text-gray-400 text-sm">
                    Every line of code is tested, reviewed, and optimized for performance and maintainability.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Team Leadership</h4>
                  <p className="text-gray-400 text-sm">
                    Mentoring developers and fostering collaborative environments for maximum productivity.
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Innovation Drive</h4>
                  <p className="text-gray-400 text-sm">
                    Constantly exploring new technologies and methodologies to stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">DEEP SPACE PROJECTS</h2>
              <p className="text-xl text-purple-300">Mission-Critical Applications</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-purple-400">E-Commerce Platform</h3>
                  <Satellite className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-gray-300 mb-6">
                  Built a high-performance marketplace serving 10,000+ users with real-time inventory management and secure payment
                  processing.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Operational</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Users:</span>
                    <span className="text-white font-semibold">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-400">AI Chat Assistant</h3>
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-300 mb-6">
                  Developed an intelligent customer service bot using machine learning that reduced support tickets by 60% and handles 5K+
                  daily conversations.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Daily Chats:</span>
                    <span className="text-white font-semibold">5,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Efficiency:</span>
                    <span className="text-green-400 font-semibold">60% Reduction</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "OpenAI", "React", "WebSockets", "TensorFlow"].map((tech) => (
                    <span key={tech} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-green-400">Mobile Banking App</h3>
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-gray-300 mb-6">
                  Created a secure fintech application handling $5M+ in transactions for 50,000+ users with bank-level security and
                  compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Secure</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Users:</span>
                    <span className="text-white font-semibold">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Transactions:</span>
                    <span className="text-green-400 font-semibold">$5M+</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React Native", "Firebase", "Encryption", "Stripe", "Redux"].map((tech) => (
                    <span key={tech} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-orange-500/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-orange-400">Analytics Dashboard</h3>
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-gray-300 mb-6">
                  Built a real-time data visualization platform processing 1TB+ of data with interactive charts and sub-2-second load times.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold">Processing</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Data Volume:</span>
                    <span className="text-white font-semibold">1TB+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Load Time:</span>
                    <span className="text-green-400 font-semibold">&lt;2s</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Vue.js", "D3.js", "MongoDB", "Redis", "Elasticsearch"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">TECHNICAL SYSTEMS</h2>
              <p className="text-xl text-orange-300">Core Technologies & Capabilities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 border border-orange-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  Frontend Systems
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "React/Next.js", level: 95 },
                    { name: "TypeScript", level: 92 },
                    { name: "Vue.js", level: 88 },
                    { name: "Tailwind CSS", level: 90 },
                    { name: "D3.js", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-orange-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6" />
                  Backend Systems
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Node.js", level: 93 },
                    { name: "Python", level: 89 },
                    { name: "PostgreSQL", level: 91 },
                    { name: "MongoDB", level: 87 },
                    { name: "Redis", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <Cloud className="w-6 h-6" />
                  Cloud & DevOps
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "AWS", level: 90 },
                    { name: "Docker", level: 88 },
                    { name: "Kubernetes", level: 82 },
                    { name: "CI/CD", level: 87 },
                    { name: "Terraform", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-green-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-yellow-400" />
                Mission Specializations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-6 mb-4">
                    <Users className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Team Leadership</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Leading development teams of 8+ engineers</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 mb-4">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Security</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Implementing security best practices</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 mb-4">
                    <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Performance</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Optimizing for speed and scalability</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6 mb-4">
                    <Settings className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Architecture</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Designing scalable system architectures</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">COMMUNICATIONS</h2>
              <p className="text-xl text-red-300">Establish Contact Protocol</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 border border-red-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <Radio className="w-6 h-6" />
                  Communication Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500/20 border border-red-500/30 rounded-full p-3">
                      <Mail className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Primary Channel</div>
                      <div className="text-gray-300">alex@example.com</div>
                      <div className="text-gray-500 text-sm">Response time: 2-4 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 border border-green-500/30 rounded-full p-3">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Voice Channel</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                      <div className="text-gray-500 text-sm">Available: Mon-Fri 9AM-6PM PST</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-3">
                      <Linkedin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Professional Network</div>
                      <div className="text-gray-300">linkedin.com/in/alexdev</div>
                      <div className="text-gray-500 text-sm">Connect for opportunities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-full p-3">
                      <Github className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Code Repository</div>
                      <div className="text-gray-300">github.com/alexdev</div>
                      <div className="text-gray-500 text-sm">View projects and contributions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-red-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6" />
                  Mission Request
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Mission Type</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white">
                      <option>Full-time Position</option>
                      <option>Contract Work</option>
                      <option>Consulting</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Organization</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Contact</label>
                    <input
                      type="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Mission Details</label>
                    <textarea
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white h-32"
                      placeholder="Describe your project requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Transmit Message
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-yellow-400" />
                Mission Availability
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Available</h4>
                    <p className="text-gray-400 text-sm">Full-time positions</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
                    <Clock className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Flexible</h4>
                    <p className="text-gray-400 text-sm">Contract work</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-6">
                    <Target className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white">Consulting</h4>
                    <p className="text-gray-400 text-sm">Strategic guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Star Field Background */}
      <div className="fixed inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.id * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Mission Control Header */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Rocket className="w-8 h-8 text-blue-400" />
                <div>
                  <h1 className="text-2xl font-bold">MISSION CONTROL</h1>
                  <p className="text-sm text-gray-400">Alex Rodriguez Development Center</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm text-gray-400">Mission Time</div>
                <div className="font-mono text-lg">
                  {missionTime.toLocaleTimeString([], {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-xs text-gray-400">PWR</div>
                  <div className="text-green-400 font-bold">{systemStatus.power}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">COM</div>
                  <div className="text-green-400 font-bold">{systemStatus.communications}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">NAV</div>
                  <div className="text-green-400 font-bold">{systemStatus.navigation}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Navigation */}
      <div className="relative z-10 bg-gray-800/70 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-1">
              {missions.map((mission) => (
                <button
                  key={mission.id}
                  onClick={() => setCurrentMission(mission.id)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                    currentMission === mission.id ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  <span className={mission.color}>{mission.icon}</span>
                  <span className="font-semibold">{mission.name}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      missionData[mission.id]?.status === "active"
                        ? "bg-green-400"
                        : missionData[mission.id]?.status === "complete"
                        ? "bg-blue-400"
                        : "bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400">Systems Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 p-8">{renderMissionContent()}</div>
      </div>

      {/* Mission Status Footer */}
      <div className="relative z-10 bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">Mission Status: {missionData[currentMission]?.details}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">Progress: {missionData[currentMission]?.progress || 0}%</div>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${missionData[currentMission]?.progress || 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
