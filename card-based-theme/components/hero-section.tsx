"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Palette, Rocket, Zap, Star, Trophy } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flipCard, setFlipCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skillCards = [
    {
      id: 1,
      title: "Frontend",
      level: "Expert",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "React, Vue, TypeScript, Tailwind CSS",
      years: "5+",
      projects: 50,
    },
    {
      id: 2,
      title: "Backend",
      level: "Advanced",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      years: "4+",
      projects: 35,
    },
    {
      id: 3,
      title: "Design",
      level: "Proficient",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      description: "UI/UX, Figma, Adobe Creative Suite",
      years: "3+",
      projects: 25,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", count: "50+ repos" },
    { icon: Linkedin, label: "LinkedIn", href: "#", count: "500+ connections" },
    { icon: Mail, label: "Email", href: "#", count: "Let's connect" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Cards Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 h-full relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-48 translate-x-48"></div>

              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative group">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                        alt="Profile"
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Alex Johnson</h1>
                    <p className="text-xl text-gray-600 mb-4">Full-Stack Developer & Designer</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-yellow-700 font-medium">4.9 rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
                        <Trophy className="w-4 h-4 text-red-500" />
                        <span className="text-red-700 font-medium">50+ projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Passionate about creating beautiful, functional applications that solve real problems. I combine technical expertise with
                  creative design to build exceptional digital experiences.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      const projectsSection = document.getElementById("projects");
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    <Rocket className="w-5 h-5" />
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      // Create a placeholder CV file
                      const cvContent = `
Alex Johnson - Full-Stack Developer & Designer
===============================================

Contact Information:
- Email: alex@example.com
- Phone: +1 (555) 123-4567
- Location: San Francisco, CA
- Portfolio: alexdev.portfolio.com
- GitHub: github.com/alexdev
- LinkedIn: linkedin.com/in/alexdev

Professional Summary:
Passionate full-stack developer with 5+ years of experience creating beautiful, functional applications that solve real problems. I combine technical expertise with creative design to build exceptional digital experiences.

Technical Skills:
- Frontend: React, Vue, TypeScript, Tailwind CSS (5+ years)
- Backend: Node.js, Python, PostgreSQL, MongoDB (4+ years)
- Design: UI/UX, Figma, Adobe Creative Suite (3+ years)
- Mobile: React Native, Flutter (2+ years)
- DevOps: AWS, Docker, Kubernetes, CI/CD (2+ years)

Professional Experience:

Senior Frontend Developer | Tech Innovators Inc. | 2022 - Present
- Led team of 5 developers
- Improved performance by 40%
- Launched 3 major products

Full-Stack Developer | Digital Solutions Co. | 2020 - 2022
- Built scalable APIs
- Mentored junior developers
- Reduced server costs by 30%

Frontend Developer | Creative Studio Ltd. | 2019 - 2020
- Developed responsive UIs
- Collaborated with designers
- Improved user engagement

Key Projects:
- E-Commerce Empire: Revolutionary trading platform ($8,500 value)
- AI Chat Wizard: Natural language AI companion ($7,200 value)
- Banking Fortress: Secure mobile banking app ($5,800 value)

Education:
Bachelor of Science in Computer Science
University of California, San Francisco | 2019

Achievements:
- 50+ completed projects
- 98% client satisfaction rate
- 15 awards won
- 4.9/5 average rating
                      `;

                      const blob = new Blob([cvContent], { type: "text/plain" });
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = "Alex_Johnson_CV.txt";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(url);
                    }}
                    className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Cards Stack */}
          <div className="space-y-4">
            {skillCards.map((card, index) => (
              <div
                key={card.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setFlipCard(flipCard === card.id ? null : card.id)}
              >
                <div
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-xl transform transition-all duration-300 ${
                    hoveredCard === card.id ? "scale-105 -translate-y-2" : ""
                  } ${flipCard === card.id ? "rotate-y-180" : ""}`}
                >
                  {/* Card Front */}
                  {flipCard !== card.id && (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <card.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{card.title}</h3>
                          <p className="text-white/80 text-sm">{card.level}</p>
                        </div>
                      </div>

                      <p className="text-white/90 text-sm mb-4">{card.description}</p>

                      <div className="flex justify-between text-xs text-white/75">
                        <span>{card.years} experience</span>
                        <span>{card.projects} projects</span>
                      </div>
                    </>
                  )}

                  {/* Card Back */}
                  {flipCard === card.id && (
                    <div className="text-center">
                      <div className="text-3xl mb-4">🏆</div>
                      <h3 className="font-bold text-lg mb-2">{card.title} Expert</h3>
                      <p className="text-white/90 text-sm mb-4">
                        Specialized in modern {card.title.toLowerCase()} technologies with proven track record
                      </p>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">{card.projects}</div>
                        <div className="text-xs text-white/75">Completed Projects</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{social.label}</h3>
                  <p className="text-sm text-gray-600">{social.count}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+", icon: "🎯", color: "from-blue-500 to-blue-600" },
            { label: "Projects Completed", value: "50+", icon: "🚀", color: "from-green-500 to-green-600" },
            { label: "Happy Clients", value: "30+", icon: "😊", color: "from-purple-500 to-purple-600" },
            { label: "Awards Won", value: "8", icon: "🏆", color: "from-orange-500 to-orange-600" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
