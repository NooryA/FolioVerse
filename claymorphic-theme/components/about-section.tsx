"use client";

import { useState } from "react";

// Inline SVG Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2v6h3v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8h3V2H6zm14 2v2c0 1.1-.9 2-2 2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" />
  </svg>
);

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("journey");

  const skills = [
    { name: "React & Next.js", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "Python", level: 85, color: "#3776AB" },
    { name: "UI/UX Design", level: 92, color: "#FF6B6B" },
    { name: "AWS & DevOps", level: 80, color: "#FF9900" },
  ];

  const achievements = [
    { icon: "🏆", title: "Top 1% Developer", description: "GitHub contributions" },
    { icon: "🎨", title: "Design Awards", description: "UI/UX recognition" },
    { icon: "⚡", title: "Performance Expert", description: "Optimization specialist" },
    { icon: "🚀", title: "Startup Experience", description: "0-1 product builder" },
  ];

  const journey = [
    { year: "2019", title: "Started Coding Journey", description: "Began with HTML, CSS, and JavaScript" },
    { year: "2020", title: "First Freelance Projects", description: "Built websites for local businesses" },
    { year: "2021", title: "Joined Tech Startup", description: "Frontend developer at early-stage startup" },
    { year: "2022", title: "Full Stack Developer", description: "Expanded skills to backend and cloud" },
    { year: "2023", title: "Senior Developer", description: "Leading development teams and architecture" },
    { year: "2024", title: "Independent Consultant", description: "Helping companies build amazing products" },
  ];

  return (
    <section className="clay-section">
      <div className="clay-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="clay-badge mb-6">
            <UserIcon className="w-5 h-5" />
            About Me
          </div>
          <h2 className="clay-heading text-5xl md:text-6xl mb-6">
            Crafting Digital <span className="clay-text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional, and user-centered digital solutions. With 5+ years of
            experience, I bring ideas to life through clean code and thoughtful design.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="clay-tabs mb-12">
          {[
            { id: "journey", label: "My Journey", icon: "🚀" },
            { id: "skills", label: "Skills", icon: "⚡" },
            { id: "achievements", label: "Achievements", icon: "🏆" },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`clay-tab ${activeTab === tab.id ? "active" : ""}`}>
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "journey" && (
            <div className="clay-timeline">
              {journey.map((item, index) => (
                <div key={index} className="clay-timeline-item">
                  <div className="clay-timeline-year">{item.year}</div>
                  <div className="clay-timeline-content">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="clay-skill-card">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="clay-progress-track">
                    <div
                      className="clay-progress-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="clay-achievement-card">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Personal Touch */}
        <div className="mt-20">
          <div className="clay-card clay-card-special max-w-3xl mx-auto text-center">
            <div className="clay-avatar mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                AD
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in the power of collaboration and am always excited to work on projects that make a positive impact. Whether you're
              a startup with a bold vision or an established company looking to innovate, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="clay-btn clay-btn-primary">
                <BookOpenIcon className="w-5 h-5" />
                View My Work
              </button>
              <button className="clay-btn clay-btn-secondary">
                <UserIcon className="w-5 h-5" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
