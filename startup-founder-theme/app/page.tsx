"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Rocket,
  Lightbulb,
  BarChart3,
  PieChart,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Award,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: any;
  background: string;
  notes?: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);

  const slides: Slide[] = [
    // Title Slide
    {
      id: 0,
      title: "Alex Rodriguez - Senior Developer",
      background: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800",
      content: (
        <div className="text-center text-white h-full flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-7xl font-bold mb-6 animate-fadeInUp">ALEX RODRIGUEZ</h1>
            <p className="text-3xl mb-8 text-blue-200 animate-fadeInUp delay-200">Senior Full-Stack Developer & Tech Leader</p>
            <div className="text-xl text-purple-200 animate-fadeInUp delay-400">Transforming Ideas into Scalable Digital Solutions</div>
          </div>

          <div className="flex justify-center gap-8 text-6xl animate-fadeInUp delay-600">
            <div className="animate-bounce delay-100">🚀</div>
            <div className="animate-bounce delay-200">💻</div>
            <div className="animate-bounce delay-300">📈</div>
          </div>

          <div className="mt-12 text-lg text-gray-300">San Francisco, CA • 5+ Years Experience • Ready to Scale Your Vision</div>
        </div>
      ),
      notes: "Introduction slide highlighting Alex's expertise and value proposition",
    },

    // Problem Statement
    {
      id: 1,
      title: "The Challenge",
      background: "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">The Challenge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-4">Technical Complexity</h3>
              <p className="text-lg opacity-90">
                Modern applications require expertise across multiple technologies, from frontend frameworks to cloud infrastructure.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4">Time to Market</h3>
              <p className="text-lg opacity-90">
                Businesses need to move fast, but finding skilled developers who can deliver quality code quickly is challenging.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Scalability Issues</h3>
              <p className="text-lg opacity-90">
                Many applications fail when they need to scale, requiring expensive rewrites and causing business disruption.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Team Leadership</h3>
              <p className="text-lg opacity-90">
                Growing teams need experienced leaders who can mentor developers and maintain code quality at scale.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-yellow-200">"Companies need a technical leader who can solve these challenges"</p>
          </div>
        </div>
      ),
      notes: "Outline the key challenges that businesses face in modern development",
    },

    // Solution
    {
      id: 2,
      title: "The Solution",
      background: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">The Solution</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full-Stack Expertise</h3>
              <p className="text-lg opacity-90">
                Deep knowledge across React, Node.js, databases, and cloud platforms to build complete solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Team Leadership</h3>
              <p className="text-lg opacity-90">
                Proven track record leading teams of 8+ developers, mentoring junior talent, and delivering on time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-lg opacity-90">Design systems that grow with your business, serving 100K+ users with 99.9% uptime.</p>
            </div>
          </div>

          <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-2xl font-semibold text-center text-green-100">
              "A senior developer who combines technical excellence with business acumen"
            </p>
          </div>
        </div>
      ),
      notes: "Present Alex as the solution to these common development challenges",
    },

    // Market Opportunity
    {
      id: 3,
      title: "Market Opportunity",
      background: "bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">Market Opportunity</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Industry Demand</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$429B</div>
                    <div className="text-pink-200">Global Software Market 2024</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">73%</div>
                    <div className="text-pink-200">Companies Hiring Senior Devs</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$180K</div>
                    <div className="text-pink-200">Average Senior Dev Salary</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Competitive Advantage</h3>
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="font-bold">Proven Track Record</span>
                  </div>
                  <p className="text-sm opacity-90">5+ years of enterprise experience</p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <span className="font-bold">Fast Delivery</span>
                  </div>
                  <p className="text-sm opacity-90">Reduced deployment time by 60%</p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-blue-400" />
                    <span className="font-bold">Quality Focus</span>
                  </div>
                  <p className="text-sm opacity-90">99.9% uptime across all projects</p>
                </div>

                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-red-400" />
                    <span className="font-bold">Business Impact</span>
                  </div>
                  <p className="text-sm opacity-90">Generated $2M+ in revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      notes: "Showcase market demand and Alex's competitive positioning",
    },

    // Product/Portfolio
    {
      id: 4,
      title: "Portfolio Showcase",
      background: "bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">Portfolio Showcase</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-4">E-Commerce Platform</h3>
              <p className="text-lg mb-4 opacity-90">
                Built a marketplace serving 10,000+ users with real-time inventory and payment processing.
              </p>
              <div className="flex gap-2 mb-4">
                {["React", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                  <span key={tech} className="bg-blue-500 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI Chat Assistant</h3>
              <p className="text-lg mb-4 opacity-90">Developed an ML-powered customer service bot that reduced support tickets by 60%.</p>
              <div className="flex gap-2 mb-4">
                {["Python", "OpenAI", "React", "WebSockets"].map((tech) => (
                  <span key={tech} className="bg-purple-500 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">5K+</div>
                  <div className="text-sm opacity-80">Daily Chats</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm opacity-80">Ticket Reduction</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-4">Mobile Banking App</h3>
              <p className="text-lg mb-4 opacity-90">Created a secure fintech application handling transactions for 50,000+ users.</p>
              <div className="flex gap-2 mb-4">
                {["React Native", "Firebase", "Encryption"].map((tech) => (
                  <span key={tech} className="bg-green-500 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$5M+</div>
                  <div className="text-sm opacity-80">Transactions</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Analytics Dashboard</h3>
              <p className="text-lg mb-4 opacity-90">Built a real-time data visualization platform with interactive charts and reports.</p>
              <div className="flex gap-2 mb-4">
                {["Vue.js", "D3.js", "MongoDB", "Redis"].map((tech) => (
                  <span key={tech} className="bg-yellow-500 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">1TB+</div>
                  <div className="text-sm opacity-80">Data Processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">&lt;2s</div>
                  <div className="text-sm opacity-80">Load Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      notes: "Showcase key projects with metrics and technical details",
    },

    // Business Model/Value
    {
      id: 5,
      title: "Value Proposition",
      background: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">Value Proposition</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-8">
                <Clock className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Faster Time to Market</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                <p className="text-lg opacity-90">Reduction in deployment time</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-8">
                <DollarSign className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                <p className="text-lg opacity-90">Reduction in development costs</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-8">
                <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Revenue Growth</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <p className="text-lg opacity-90">Average client revenue increase</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6 text-center">What You Get</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Scalable architecture design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Team leadership & mentoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Code reviews & quality assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Performance optimization</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>CI/CD pipeline setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cloud deployment & monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Technical documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>24/7 support & maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      notes: "Quantify the value and benefits Alex brings to organizations",
    },

    // Contact/Call to Action
    {
      id: 6,
      title: "Let's Build Together",
      background: "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600",
      content: (
        <div className="text-white h-full flex flex-col justify-center p-12">
          <h2 className="text-6xl font-bold mb-12 text-center">Ready to Scale?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">alex@example.com</div>
                    <div className="text-purple-200">Best for project inquiries</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">+1 (555) 123-4567</div>
                    <div className="text-purple-200">Available Mon-Fri 9AM-6PM PST</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">linkedin.com/in/alexdev</div>
                    <div className="text-purple-200">Professional network</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">alexdev.com</div>
                    <div className="text-purple-200">Portfolio & case studies</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Next Steps</h3>
              <div className="space-y-6">
                <div className="bg-white/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <span className="text-xl font-bold">Initial Consultation</span>
                  </div>
                  <p className="text-purple-200">30-minute discovery call to understand your needs</p>
                </div>

                <div className="bg-white/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <span className="text-xl font-bold">Technical Assessment</span>
                  </div>
                  <p className="text-purple-200">Review current architecture and identify opportunities</p>
                </div>

                <div className="bg-white/20 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <span className="text-xl font-bold">Proposal & Timeline</span>
                  </div>
                  <p className="text-purple-200">Detailed project plan with milestones and deliverables</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-purple-600 px-12 py-4 rounded-2xl text-2xl font-bold hover:bg-purple-100 transition-colors transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <p className="mt-4 text-purple-200">Available for full-time, contract, and consulting opportunities</p>
          </div>
        </div>
      ),
      notes: "Clear call-to-action with contact information and next steps",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideTransition(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setSlideTransition(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideTransition(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1);
        setSlideTransition(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setSlideTransition(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setSlideTransition(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
          nextSlide();
        } else {
          setAutoPlay(false);
        }
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, currentSlide, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Presentation Mode */}
      {isPresenting ? (
        <div className="fixed inset-0 z-50 bg-black">
          <div
            className={`h-full ${currentSlideData.background} ${
              slideTransition ? "opacity-50" : "opacity-100"
            } transition-opacity duration-300`}
          >
            {currentSlideData.content}
          </div>

          {/* Presentation Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/80 rounded-lg px-6 py-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-white hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <span className="text-white font-mono">
              {currentSlide + 1} / {slides.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-white hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="w-px h-6 bg-gray-600 mx-2"></div>

            <button onClick={() => setIsPresenting(false)} className="text-white hover:text-red-400">
              Exit
            </button>
          </div>
        </div>
      ) : (
        /* Normal Mode */
        <div className="flex h-screen">
          {/* Slide Thumbnails */}
          <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
            <h2 className="text-white font-bold mb-4">Pitch Deck</h2>
            <div className="space-y-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentSlide === index ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  <div className="text-xs opacity-75 mb-1">Slide {index + 1}</div>
                  <div className="text-sm font-medium">{slide.title}</div>
                </button>
              ))}
            </div>

            {/* Speaker Notes */}
            {currentSlideData.notes && (
              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h3 className="text-white font-bold mb-2 text-sm">Speaker Notes</h3>
                <p className="text-gray-300 text-xs">{currentSlideData.notes}</p>
              </div>
            )}
          </div>

          {/* Main Slide View */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPresenting(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Present
                </button>

                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    autoPlay ? "bg-orange-600 hover:bg-orange-700 text-white" : "bg-gray-600 hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  Auto Play
                </button>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  Slide {currentSlide + 1} of {slides.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="flex-1 p-8">
              <div
                className={`h-full rounded-xl shadow-2xl ${currentSlideData.background} ${
                  slideTransition ? "opacity-50 scale-95" : "opacity-100 scale-100"
                } transition-all duration-300`}
              >
                {currentSlideData.content}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
