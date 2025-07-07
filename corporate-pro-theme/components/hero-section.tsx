"use client";
import { useState, useEffect } from "react";

// Premium SVG Icons
const ArrowDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      number: "$2.8B",
      label: "Revenue Generated",
      description: "Portfolio Performance",
      icon: <TrendingUpIcon className="w-6 h-6" />,
    },
    {
      number: "150+",
      label: "Team Members",
      description: "Global Leadership",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      number: "25+",
      label: "Markets Served",
      description: "International Presence",
      icon: <GlobeIcon className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Client Satisfaction",
      icon: <AwardIcon className="w-6 h-6" />,
    },
  ];

  const expertise = [
    "C-Suite Executive Leadership",
    "Strategic Business Transformation",
    "International Market Expansion",
    "Digital Innovation & AI Integration",
    "M&A Due Diligence & Integration",
    "IPO & Public Company Governance",
  ];

  const recognitions = [
    "Fortune 500 CEO of the Year 2023",
    "Harvard Business Review Leadership Award",
    "Forbes Top 50 Global Executives",
    "McKinsey Leadership Excellence",
  ];

  return (
    <section className="corp-hero relative overflow-hidden">
      {/* Premium Navigation */}
      <nav className={`corp-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="corp-nav-container">
          <a href="#" className="corp-logo">
            Alexander Reed
          </a>
          <div className="corp-nav-links">
            <a href="#expertise" className="corp-nav-link">
              Expertise
            </a>
            <a href="#achievements" className="corp-nav-link">
              Achievements
            </a>
            <a href="#portfolio" className="corp-nav-link">
              Portfolio
            </a>
            <a href="#insights" className="corp-nav-link">
              Insights
            </a>
            <a href="#contact" className="corp-nav-link">
              Contact
            </a>
            <button className="corp-btn corp-btn-gold corp-btn-small">Schedule Executive Consultation</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="corp-container relative z-10">
        <div className="pt-32 pb-20">
          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-7 space-y-8">
              {/* Executive Badge */}
              <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="corp-badge corp-badge-gold inline-flex items-center gap-2">
                  <AwardIcon className="w-4 h-4" />
                  Fortune 500 Chief Executive Officer
                </div>
              </div>

              {/* Main Headline */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Transforming
                  <span className="corp-text-gradient block">Enterprises</span>
                  <span className="text-4xl lg:text-5xl font-normal text-gray-300">Through Strategic Leadership</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                  Two decades of executive experience driving $2.8B+ in revenue growth, leading 150+ global teams, and transforming Fortune
                  500 companies through strategic innovation and operational excellence.
                </p>
              </div>

              {/* Core Expertise */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h3 className="font-display text-lg text-yellow-400 mb-4">Core Executive Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <button className="corp-btn corp-btn-gold corp-btn-large group">
                  View Executive Portfolio
                  <ArrowDownIcon className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
                </button>
                <button className="corp-btn corp-btn-glass corp-btn-large group">
                  <PlayIcon className="w-5 h-5" />
                  Watch Leadership Journey
                </button>
              </div>

              {/* Social Proof */}
              <div
                className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <LinkedInIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">50K+ Executive Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TwitterIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">Industry Thought Leader</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Profile - Right Side */}
            <div className="lg:col-span-5 relative">
              <div
                className={`transition-all duration-1000 delay-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Main Profile Card */}
                <div className="corp-card-glass relative overflow-hidden rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    {/* Executive Photo */}
                    <div className="relative inline-block">
                      <div className="w-40 h-40 mx-auto bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-4xl font-bold text-gray-900">AR</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <div className="text-sm font-bold text-yellow-600">A+</div>
                          <div className="text-xs text-gray-600">ESG</div>
                        </div>
                      </div>
                    </div>

                    {/* Executive Info */}
                    <div className="space-y-2">
                      <h3 className="font-display text-3xl font-bold text-white">Alexander Reed</h3>
                      <p className="text-yellow-400 font-semibold text-lg">Chief Executive Officer</p>
                      <p className="text-gray-300 text-sm">Fortune 500 Technology Corporation</p>
                    </div>

                    {/* Key Recognition */}
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-4">
                      <div className="corp-badge corp-badge-gold mb-3">Latest Achievement</div>
                      <p className="text-white font-medium text-sm">"CEO of the Year 2023" - Fortune Magazine</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">20+</div>
                        <div className="text-xs text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">12</div>
                        <div className="text-xs text-gray-400">Board Positions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Statistics Section */}
          <div className="mb-16">
            <div className="corp-stats">
              {achievements.map((stat, index) => (
                <div
                  key={index}
                  className={`corp-stat-item cursor-pointer transition-all duration-500 ${
                    currentMetric === index ? "transform scale-105 border-yellow-400" : ""
                  }`}
                  onClick={() => setCurrentMetric(index)}
                >
                  <div className="flex items-center justify-center mb-4">{stat.icon}</div>
                  <div className="corp-stat-number">{stat.number}</div>
                  <div className="corp-stat-label">{stat.label}</div>
                  <div className="corp-stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Section */}
          <div className="text-center">
            <div className="corp-card-glass rounded-full p-6 inline-block">
              <div className="flex items-center justify-center gap-4">
                <div className="corp-badge corp-badge-gold">Awards & Recognition</div>
                <div className="flex items-center gap-8 text-sm text-gray-300">
                  {recognitions.map((recognition, index) => (
                    <span key={index} className="whitespace-nowrap">
                      {recognition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400/60 rounded-full corp-animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/40 rounded-full corp-animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-32 w-2 h-2 bg-yellow-500/50 rounded-full corp-animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-60 right-20 w-4 h-4 bg-yellow-400/30 rounded-full corp-animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform rotate-45"></div>
      </div>
    </section>
  );
}
