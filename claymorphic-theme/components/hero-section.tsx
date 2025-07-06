"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Play, Sparkles, Code, Palette, Zap, Heart } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    setMounted(true);

    // Generate random floating elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 0.2,
    }));
    setFloatingElements(elements);
  }, []);

  const skills = [
    { icon: Code, label: "Development", color: "clay-skill-blue" },
    { icon: Palette, label: "Design", color: "clay-skill-purple" },
    { icon: Zap, label: "Performance", color: "clay-skill-yellow" },
  ];

  const stats = [
    { number: "50+", label: "Projects" },
    { number: "25+", label: "Clients" },
    { number: "5+", label: "Years" },
  ];

  if (!mounted) return null;

  return (
    <section className="clay-hero">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Content */}
          <div className="clay-hero-content">
            <div className="clay-status-badge mb-6">
              <div className="clay-status-dot"></div>
              Available for hire
            </div>

            <h1 className="clay-hero-title">
              Crafting Digital
              <br />
              <span className="clay-text-gradient">Experiences</span>
              <br />
              with Love
            </h1>

            <p className="clay-hero-subtitle">
              I'm a passionate full-stack developer and designer who creates beautiful, functional, and user-centered digital solutions.
              Let's bring your ideas to life with clean code and thoughtful design.
            </p>

            {/* Action Buttons */}
            <div className="clay-hero-actions">
              <button className="clay-btn clay-btn-primary group">
                <Sparkles className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="clay-btn clay-btn-secondary">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>

            {/* Skills */}
            <div className="clay-skills-preview">
              <span className="clay-skills-label">Specializing in</span>
              <div className="clay-skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className={`clay-skill-item ${skill.color}`}>
                    <skill.icon className="w-5 h-5" />
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Clay Card */}
          <div className="clay-hero-visual">
            <div className="clay-card clay-card-hero">
              {/* Profile Section */}
              <div className="clay-profile-section">
                <div className="clay-avatar">
                  <div className="clay-avatar-inner">
                    <span className="text-2xl font-bold">AD</span>
                  </div>
                  <div className="clay-status-indicator"></div>
                </div>
                <div className="clay-profile-info">
                  <h3 className="clay-profile-name">Alex Developer</h3>
                  <p className="clay-profile-role">Full Stack Developer & Designer</p>
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
                  <div className="clay-progress-label">Project Completion</div>
                  <div className="clay-progress-track">
                    <div className="clay-progress-fill" style={{ width: "92%" }}></div>
                  </div>
                  <div className="clay-progress-value">92%</div>
                </div>

                <div className="clay-toggle-group">
                  <div className="clay-toggle clay-toggle-active">
                    <div className="clay-toggle-slider"></div>
                  </div>
                  <span className="clay-toggle-label">Available for projects</span>
                </div>
              </div>

              {/* Action Area */}
              <div className="clay-card-actions">
                <button className="clay-btn clay-btn-card">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
                <button className="clay-btn clay-btn-icon">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="clay-floating-ui">
              <div className="clay-notification clay-notification-1">
                <div className="clay-notification-icon">✨</div>
                <div className="clay-notification-content">
                  <div className="clay-notification-title">Project Completed!</div>
                  <div className="clay-notification-text">E-commerce platform launched</div>
                </div>
              </div>

              <div className="clay-mini-card clay-mini-card-1">
                <div className="clay-mini-icon">📊</div>
                <div className="clay-mini-content">
                  <div className="clay-mini-title">Analytics</div>
                  <div className="clay-mini-value">+125%</div>
                </div>
              </div>

              <div className="clay-mini-card clay-mini-card-2">
                <div className="clay-mini-icon">🎨</div>
                <div className="clay-mini-content">
                  <div className="clay-mini-title">Design</div>
                  <div className="clay-mini-value">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
