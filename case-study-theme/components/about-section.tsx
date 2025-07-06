"use client";

import { useState } from "react";
import { User, Lightbulb, Search, Palette, Code, Rocket, Award, Users, TrendingUp, Target, ArrowRight, CheckCircle } from "lucide-react";

export function AboutSection() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 0,
      title: "Discovery & Research",
      description:
        "Deep dive into understanding the problem, target users, and business goals through comprehensive research and analysis.",
      icon: <Search className="w-8 h-8" />,
      details: [
        "Stakeholder interviews and workshops",
        "User research and persona development",
        "Competitive analysis and market research",
        "Technical feasibility assessment",
        "Requirements gathering and documentation",
      ],
      duration: "1-2 weeks",
      deliverables: ["Research Report", "User Personas", "Requirements Document"],
    },
    {
      id: 1,
      title: "Strategy & Planning",
      description: "Transform insights into actionable strategy with clear roadmap, defining scope, timelines, and success metrics.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: [
        "Information architecture design",
        "User journey mapping",
        "Feature prioritization",
        "Technical architecture planning",
        "Project timeline and milestone definition",
      ],
      duration: "1 week",
      deliverables: ["Strategy Document", "Project Roadmap", "Success Metrics"],
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Create intuitive, user-centered designs with iterative prototyping and continuous stakeholder feedback.",
      icon: <Palette className="w-8 h-8" />,
      details: [
        "Wireframing and low-fidelity prototypes",
        "Visual design and design system creation",
        "High-fidelity prototypes and interactions",
        "Usability testing and iteration",
        "Design handoff and documentation",
      ],
      duration: "3-4 weeks",
      deliverables: ["Design System", "Interactive Prototypes", "Design Specifications"],
    },
    {
      id: 3,
      title: "Development & Testing",
      description: "Bring designs to life with clean, scalable code and comprehensive testing to ensure quality and performance.",
      icon: <Code className="w-8 h-8" />,
      details: [
        "Frontend and backend development",
        "Quality assurance and testing",
        "Performance optimization",
        "Security implementation",
        "Cross-platform compatibility",
      ],
      duration: "4-8 weeks",
      deliverables: ["Working Application", "Test Reports", "Documentation"],
    },
    {
      id: 4,
      title: "Launch & Optimization",
      description: "Deploy the solution with monitoring systems and gather real-world data for continuous improvement.",
      icon: <Rocket className="w-8 h-8" />,
      details: [
        "Deployment and launch strategy",
        "Performance monitoring setup",
        "User feedback collection",
        "Analytics implementation",
        "Ongoing optimization and support",
      ],
      duration: "1-2 weeks",
      deliverables: ["Live Application", "Analytics Dashboard", "Launch Report"],
    },
  ];

  const skills = [
    { name: "UX/UI Design", level: 95, category: "Design" },
    { name: "User Research", level: 90, category: "Research" },
    { name: "Prototyping", level: 92, category: "Design" },
    { name: "React/Next.js", level: 88, category: "Development" },
    { name: "TypeScript", level: 85, category: "Development" },
    { name: "Data Analysis", level: 82, category: "Analytics" },
    { name: "Project Management", level: 87, category: "Management" },
    { name: "Strategic Planning", level: 84, category: "Strategy" },
  ];

  const achievements = [
    { metric: "50+", label: "Successful Projects", icon: <Target className="w-6 h-6" /> },
    { metric: "95%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { metric: "3.2M+", label: "Users Impacted", icon: <Users className="w-6 h-6" /> },
    { metric: "150%", label: "Average ROI Increase", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const values = [
    {
      title: "Data-Driven Decisions",
      description: "Every design choice is backed by research and validated through testing.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "User-Centered Approach",
      description: "Users are at the heart of every decision, ensuring solutions that truly serve their needs.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Collaborative Partnership",
      description: "Working closely with clients as partners to achieve shared goals and success.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Continuous Innovation",
      description: "Staying ahead of trends and technologies to deliver cutting-edge solutions.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="cs-section">
      <div className="cs-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">About My Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe in turning complex challenges into simple, elegant solutions through a proven methodology that combines strategic
            thinking with creative execution.
          </p>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">My Process</h3>

          {/* Process Timeline */}
          <div className="relative">
            <div className="cs-timeline">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`cs-timeline-item cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "opacity-100" : "opacity-70 hover:opacity-90"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="cs-timeline-dot"></div>
                  <div className="cs-card p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-600">{step.icon}</div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-500">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>

                    {activeStep === index && (
                      <div className="cs-animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Key Activities</h5>
                            <ul className="space-y-2">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Deliverables</h5>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map((deliverable, i) => (
                                <span key={i} className="cs-tag cs-tag-primary">
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="cs-animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Impact & Results</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center cs-animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="cs-card p-6">
                  <div className="flex justify-center mb-4 text-blue-600">{achievement.icon}</div>
                  <div className="cs-metric-value">{achievement.metric}</div>
                  <div className="cs-metric-label">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Core Values</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cs-card p-6 cs-animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 flex-shrink-0 mt-1">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center cs-card-large p-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Ready to Transform Your Ideas?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a solution that not only meets your needs but exceeds your expectations and delivers measurable
            results.
          </p>
          <button className="cs-btn cs-btn-primary text-lg group">
            <User className="w-5 h-5" />
            Start a Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
