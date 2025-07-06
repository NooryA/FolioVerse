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

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const designPrinciples = [
    { title: "Consistency", description: "Unified patterns across all interfaces", icon: "🎯" },
    { title: "Accessibility", description: "Inclusive design for all users", icon: "♿" },
    { title: "Scalability", description: "System grows with product needs", icon: "📈" },
    { title: "Efficiency", description: "Streamlined development process", icon: "⚡" },
  ];

  const methodology = [
    { phase: "Research", description: "User needs and business requirements analysis", duration: "2 weeks" },
    { phase: "Audit", description: "Existing design patterns and component inventory", duration: "1 week" },
    { phase: "Design", description: "Token definition and component creation", duration: "4 weeks" },
    { phase: "Implementation", description: "Development and documentation", duration: "6 weeks" },
    { phase: "Testing", description: "Validation and refinement", duration: "2 weeks" },
  ];

  return (
    <section className="ds-section">
      <div className="ds-container">
        {/* Section Header */}
        <div className="ds-text-center ds-mb-16">
          <div className="ds-badge ds-badge-secondary ds-mb-6">
            <UserIcon className="w-4 h-4" />
            Design System Philosophy
          </div>
          <h2 className="ds-text-5xl ds-font-extrabold ds-text-gray-900 ds-mb-6">
            Building <span className="ds-text-primary-600">Systematic Design</span>
          </h2>
          <p className="ds-text-xl ds-text-gray-600 max-w-3xl mx-auto">
            Our approach to design systems combines strategic thinking, user-centered design, and technical excellence to create scalable,
            maintainable design solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="ds-nav-tabs ds-justify-center">
          {[
            { id: "philosophy", label: "Philosophy" },
            { id: "process", label: "Process" },
            { id: "principles", label: "Principles" },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`ds-nav-tab ${activeTab === tab.id ? "active" : ""}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "philosophy" && (
            <div className="ds-grid ds-grid-cols-1 lg:ds-grid-cols-2 ds-gap-12">
              <div>
                <h3 className="ds-text-3xl ds-font-bold ds-text-gray-900 ds-mb-6">Our Design Philosophy</h3>
                <div className="space-y-6 ds-text-gray-600 ds-leading-relaxed">
                  <p>
                    Design systems are more than just component libraries—they're the foundation for creating cohesive, scalable digital
                    experiences. Our philosophy centers on building systems that serve both users and creators.
                  </p>
                  <p>
                    We believe in atomic design principles, where small, reusable components combine to form complex interfaces. This
                    approach ensures consistency while maintaining flexibility for diverse use cases.
                  </p>
                  <p>
                    Every decision in our design system is intentional, documented, and based on real user needs and business objectives. We
                    create not just for today, but for the evolving needs of tomorrow.
                  </p>
                </div>
              </div>
              <div className="ds-card">
                <div className="ds-card-body">
                  <h4 className="ds-text-xl ds-font-bold ds-text-gray-900 ds-mb-6">System Architecture</h4>
                  <div className="space-y-4">
                    {[
                      { layer: "Design Tokens", description: "Core design decisions", color: "ds-bg-primary-100" },
                      { layer: "Components", description: "Reusable UI elements", color: "ds-bg-primary-200" },
                      { layer: "Patterns", description: "Common compositions", color: "ds-bg-primary-300" },
                      { layer: "Templates", description: "Page-level structures", color: "ds-bg-primary-400" },
                    ].map((item, index) => (
                      <div key={index} className={`ds-p-4 ds-rounded-lg ${item.color}`}>
                        <h5 className="ds-font-semibold ds-text-gray-900">{item.layer}</h5>
                        <p className="ds-text-sm ds-text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div>
              <h3 className="ds-text-3xl ds-font-bold ds-text-gray-900 ds-mb-8 ds-text-center">Design System Development Process</h3>
              <div className="space-y-8">
                {methodology.map((phase, index) => (
                  <div key={index} className="ds-flex ds-items-start ds-gap-6">
                    <div className="ds-flex-shrink-0">
                      <div className="ds-w-12 ds-h-12 ds-bg-primary-600 ds-text-white ds-rounded-full ds-flex ds-items-center ds-justify-center ds-font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ds-flex-1">
                      <div className="ds-flex ds-justify-between ds-items-center ds-mb-2">
                        <h4 className="ds-text-xl ds-font-bold ds-text-gray-900">{phase.phase}</h4>
                        <span className="ds-badge ds-badge-secondary">{phase.duration}</span>
                      </div>
                      <p className="ds-text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "principles" && (
            <div>
              <h3 className="ds-text-3xl ds-font-bold ds-text-gray-900 ds-mb-8 ds-text-center">Core Design Principles</h3>
              <div className="ds-grid ds-grid-cols-1 md:ds-grid-cols-2 ds-gap-8">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="ds-card">
                    <div className="ds-card-body ds-text-center">
                      <div className="ds-text-4xl ds-mb-4">{principle.icon}</div>
                      <h4 className="ds-text-xl ds-font-bold ds-text-gray-900 ds-mb-4">{principle.title}</h4>
                      <p className="ds-text-gray-600">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="ds-text-center ds-mt-16">
          <div className="ds-card max-w-2xl mx-auto">
            <div className="ds-card-body">
              <LightbulbIcon className="w-16 h-16 ds-text-primary-600 mx-auto ds-mb-6" />
              <h3 className="ds-text-3xl ds-font-bold ds-text-gray-900 ds-mb-4">Ready to Build Your Design System?</h3>
              <p className="ds-text-xl ds-text-gray-600 ds-mb-8">Let's create a scalable, consistent design foundation for your product.</p>
              <div className="ds-flex ds-flex-col sm:ds-flex-row ds-gap-4 ds-justify-center">
                <button className="ds-btn ds-btn-primary ds-btn-lg">
                  <CodeIcon className="w-5 h-5" />
                  Start Project
                </button>
                <button className="ds-btn ds-btn-outline ds-btn-lg">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
