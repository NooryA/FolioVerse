"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Play, Sparkles, Code, Palette, Zap, Heart } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setMounted(true);

    // Fixed beautiful floating elements positions
    const elements = [
      { x: 10, y: 15, delay: 0 },
      { x: 85, y: 25, delay: 0.3 },
      { x: 20, y: 70, delay: 0.6 },
      { x: 75, y: 60, delay: 0.9 },
      { x: 5, y: 45, delay: 1.2 },
      { x: 90, y: 80, delay: 1.5 },
      { x: 15, y: 90, delay: 1.8 },
      { x: 80, y: 10, delay: 2.1 },
    ];
    setFloatingElements(elements);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a sample resume download
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You can replace this with actual resume path
    link.download = "Creative_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback: open a new window with resume content
    if (!link.href.includes(".pdf")) {
      window.open("mailto:hello@creativedeveloper.com?subject=Resume Request&body=Hi! I would like to request your resume.", "_blank");
    }
  };

  const skills = [
    { icon: Code, label: "Development", color: "clay-skill-blue" },
    { icon: Palette, label: "Design", color: "clay-skill-purple" },
    { icon: Zap, label: "Performance", color: "clay-skill-yellow" },
  ];

  const stats = [
    { number: "50+", label: "Creations" },
    { number: "25+", label: "Happy Clients" },
    { number: "∞", label: "Ideas" },
  ];

  if (!mounted) return null;

  return (
    <section id="home" className="clay-hero">
      {/* Floating Background Elements */}
      <div className="clay-floating-bg">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="clay-floating-blob"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="clay-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-screen pt-20">
          {/* Content */}
          <div className="clay-hero-content">
            <div className="clay-hero-badge mb-8">
              <div className="flex items-center gap-2">
                <div className="clay-pulse-dot"></div>
                <span className="text-sm font-medium">Creative Developer</span>
              </div>
            </div>

            <h1 className="clay-hero-title">
              Building Digital
              <br />
              <span className="clay-text-gradient">Masterpieces</span>
              <br />
              One Pixel at a Time
            </h1>

            <p className="clay-hero-subtitle">
              Where creativity meets technology. I transform complex ideas into stunning digital experiences that captivate users and drive
              results. Let's create something extraordinary together.
            </p>

            {/* Action Buttons */}
            <div className="clay-hero-actions">
              <button onClick={scrollToProjects} className="clay-btn clay-btn-primary group">
                <Sparkles className="w-5 h-5" />
                Explore My Universe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={downloadResume} className="clay-btn clay-btn-secondary">
                <Download className="w-5 h-5" />
                Get My Resume
              </button>
            </div>
          </div>

          {/* Interactive Clay Card */}
          <div className="clay-hero-visual">
            <div className="clay-card clay-card-hero">
              {/* Profile Section */}
              <div className="clay-profile-section">
                <div className="clay-avatar">
                  <div className="clay-avatar-inner">
                    <span className="text-2xl font-bold">🚀</span>
                  </div>
                  <div className="clay-status-indicator"></div>
                </div>
                <div className="clay-profile-info">
                  <h3 className="clay-profile-name">Creative Developer</h3>
                  <p className="clay-profile-role">Turning Ideas into Reality</p>
                </div>
              </div>

              {/* Stats */}
              <div className="clay-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="clay-stat-item">
                    <div className="clay-stat-number">{stat.number}</div>
                    <div className="clay-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Elements */}
              <div className="clay-interactive-section">
                <div className="clay-progress-bar">
                  <div className="clay-progress-label">
                    <span>🎨 Creative Energy</span>
                    <span className="clay-progress-value">100%</span>
                  </div>
                  <div className="clay-progress-track">
                    <div className="clay-progress-fill" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="clay-card-actions">
                <button onClick={() => window.open("https://calendly.com/your-link", "_blank")} className="clay-btn clay-btn-card">
                  <Play className="w-4 h-4" />
                  Schedule Consultation
                </button>
                <button className="clay-btn clay-btn-icon" onClick={() => window.open("https://github.com/yourusername", "_blank")}>
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
