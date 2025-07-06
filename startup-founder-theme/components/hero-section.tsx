"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const LightBulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    revenue: 0,
    users: 0,
    growth: 0,
    funding: 0,
  });

  const metrics = [
    { label: "Monthly Revenue", value: "$125K", icon: <TrendingUpIcon className="w-6 h-6" />, color: "text-green-500" },
    { label: "Active Users", value: "50K+", icon: <UsersIcon className="w-6 h-6" />, color: "text-blue-500" },
    { label: "Growth Rate", value: "340%", icon: <ChartBarIcon className="w-6 h-6" />, color: "text-purple-500" },
    { label: "Team Size", value: "24", icon: <UsersIcon className="w-6 h-6" />, color: "text-indigo-500" },
  ];

  const milestones = [
    { year: "2019", title: "The Idea", desc: "Identified market gap during college", status: "completed" },
    { year: "2020", title: "MVP Launch", desc: "Built and launched first prototype", status: "completed" },
    { year: "2021", title: "Seed Funding", desc: "Raised $2M from top VCs", status: "completed" },
    { year: "2022", title: "Series A", desc: "Closed $12M round", status: "completed" },
    { year: "2023", title: "Market Leader", desc: "Became #1 in our category", status: "completed" },
    { year: "2024", title: "Global Expansion", desc: "Scaling to 15 new markets", status: "current" },
  ];

  const companies = [
    { name: "TechVenture", role: "Founder & CEO", period: "2020 - Present", status: "current" },
    { name: "InnovateLab", role: "Co-Founder", period: "2018 - 2020", status: "exited" },
    { name: "StartupHub", role: "Advisor", period: "2021 - Present", status: "advisor" },
  ];

  useEffect(() => {
    setMounted(true);

    // Animate numbers on mount
    const targets = { revenue: 125, users: 50, growth: 340, funding: 12 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedNumbers({
        revenue: Math.round(targets.revenue * easeOutQuart),
        users: Math.round(targets.users * easeOutQuart),
        growth: Math.round(targets.growth * easeOutQuart),
        funding: Math.round(targets.funding * easeOutQuart),
      });

      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    // Cycle through metrics
    const metricTimer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(metricTimer);
    };
  }, [metrics.length]);

  if (!mounted) return null;

  return (
    <section id="home" className="startup-hero-bg min-h-screen startup-section pt-20">
      <div className="startup-container">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="startup-badge startup-badge-success">
                <RocketIcon className="w-4 h-4" />
                Series A Funded • $12M Raised
              </div>

              <h1 className="startup-heading startup-heading-xl">
                Building the Future of{" "}
                <span
                  style={{
                    background: "var(--startup-gradient-primary)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Digital Innovation
                </span>
              </h1>

              <p className="startup-text startup-text-xl">
                From a college dorm room idea to a $50M+ valuation company. I'm Alex Rodriguez, founder and CEO of TechVenture, on a mission
                to democratize technology and empower the next generation of entrepreneurs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="startup-btn startup-btn-primary startup-btn-lg">
                <RocketIcon className="w-5 h-5" />
                Our Journey
              </button>
              <button className="startup-btn startup-btn-secondary startup-btn-lg">
                <ChartBarIcon className="w-5 h-5" />
                View Pitch Deck
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="startup-metric">
                <div className="startup-metric-number">${animatedNumbers.revenue}K</div>
                <div className="startup-metric-label">Monthly Revenue</div>
              </div>
              <div className="startup-metric">
                <div className="startup-metric-number">{animatedNumbers.users}K+</div>
                <div className="startup-metric-label">Active Users</div>
              </div>
            </div>
          </div>

          {/* Founder Image & Info */}
          <div className="space-y-8">
            <div className="startup-card text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Alex Rodriguez - Founder"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
              />
              <h3 className="startup-heading startup-heading-sm mb-2">Alex Rodriguez</h3>
              <p className="startup-text text-lg mb-4">Founder & CEO, TechVenture</p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="startup-badge">
                  <LightBulbIcon className="w-4 h-4" />
                  Serial Entrepreneur
                </div>
                <div className="startup-badge startup-badge-warning">
                  <CalendarIcon className="w-4 h-4" />
                  5+ Years
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Background</h4>
                  <p className="startup-text text-sm">
                    Stanford CS graduate, ex-Google engineer, Forbes 30 Under 30. Built 3 successful startups with 2 successful exits.
                  </p>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                  <p className="startup-text text-sm">
                    "Technology should be accessible to everyone. We're building the tools that will power the next generation of
                    innovation."
                  </p>
                </div>
              </div>
            </div>

            {/* Live Metrics */}
            <div className="startup-card">
              <h4 className="startup-heading startup-heading-sm mb-6">Real-time Company Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      index === currentMetric ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${metric.color}`}>
                      {metric.icon}
                      <span className="font-semibold">{metric.value}</span>
                    </div>
                    <p className="startup-text text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="startup-heading startup-heading-lg mb-4">The Journey So Far</h2>
            <p className="startup-text startup-text-lg max-w-2xl mx-auto">
              From idea to industry leader - here's how we've grown and evolved over the past 5 years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`startup-card startup-interactive ${milestone.status === "current" ? "border-indigo-500 bg-indigo-50" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      milestone.status === "completed" ? "bg-green-500" : milestone.status === "current" ? "bg-indigo-500" : "bg-gray-400"
                    }`}
                  >
                    {milestone.year.slice(-2)}
                  </div>
                  <div>
                    <h4 className="startup-heading startup-heading-sm">{milestone.title}</h4>
                    <p className="startup-text text-sm text-gray-500">{milestone.year}</p>
                  </div>
                </div>
                <p className="startup-text">{milestone.desc}</p>

                {milestone.status === "current" && (
                  <div className="mt-4 startup-badge">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    In Progress
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Ventures */}
        <div className="startup-card">
          <div className="text-center mb-8">
            <h3 className="startup-heading startup-heading-md mb-4">Current Ventures & Roles</h3>
            <p className="startup-text">Leading multiple initiatives across the startup ecosystem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div key={company.name} className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="startup-heading startup-heading-sm">{company.name}</h4>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      company.status === "current" ? "bg-green-500" : company.status === "exited" ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                  ></div>
                </div>
                <p className="startup-text font-medium mb-2">{company.role}</p>
                <p className="startup-text text-sm text-gray-500 mb-4">{company.period}</p>

                <div className="startup-badge">
                  {company.status === "current" ? "Active" : company.status === "exited" ? "Successful Exit" : "Advisory"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
