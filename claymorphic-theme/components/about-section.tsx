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
    { icon: "🏆", title: "Code Maestro", description: "Top 1% on GitHub - where magic happens daily" },
    { icon: "🎨", title: "Design Wizard", description: "Award-winning UI/UX that captivates users" },
    { icon: "⚡", title: "Speed Demon", description: "Lightning-fast apps that perform flawlessly" },
    { icon: "🚀", title: "Innovation Pioneer", description: "Built products from zero to hero" },
  ];

  const journey = [
    { year: "2019", title: "The Spark", description: "First 'Hello World' - fell in love with creating magic from code" },
    { year: "2020", title: "Building Dreams", description: "Transformed local businesses with stunning digital presence" },
    { year: "2021", title: "Startup Adventure", description: "Joined a rocket ship, learned to code at warp speed" },
    { year: "2022", title: "Full Stack Mastery", description: "Conquered both frontend beauty and backend power" },
    { year: "2023", title: "Team Leader", description: "Inspired teams to build the impossible" },
    { year: "2024", title: "Digital Architect", description: "Creating tomorrow's digital experiences today" },
  ];

  return (
    <section className="clay-section">
      <div className="clay-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="clay-badge mb-6">
            <UserIcon className="w-5 h-5" />
            My Story
          </div>
          <h2 className="clay-heading text-5xl md:text-6xl mb-6">
            The Journey of a <span className="clay-text-gradient">Digital Architect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every pixel tells a story, every line of code builds a dream. I'm on a mission to create digital experiences that inspire,
            engage, and transform the way we interact with technology. Welcome to my universe of creativity and innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="clay-tabs mb-12">
          {[
            { id: "journey", label: "My Adventure", icon: "🌟" },
            { id: "skills", label: "Superpowers", icon: "⚡" },
            { id: "achievements", label: "Victories", icon: "🏆" },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`clay-tab ${activeTab === tab.id ? "active" : ""}`}>
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
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
      </div>
    </section>
  );
}
