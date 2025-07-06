"use client";
import { useState, useEffect } from "react";

// Inline SVG Icons
const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
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

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function AboutSection() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(Array.from(prev).concat(entry.target.id)));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2023-Present",
      position: "Chief Executive Officer",
      company: "Fortune 500 Technology Corp",
      description: "Leading digital transformation initiatives across 50+ global markets, driving $2.8B in annual revenue growth.",
      achievements: [
        "Expanded market presence to 15 new countries",
        "Increased operational efficiency by 40%",
        "Led successful IPO raising $800M",
      ],
    },
    {
      year: "2020-2023",
      position: "Chief Operating Officer",
      company: "Global Innovation Partners",
      description: "Spearheaded operational excellence programs and international expansion strategies.",
      achievements: [
        "Streamlined operations reducing costs by 25%",
        "Implemented AI-driven automation systems",
        "Built strategic partnerships with 50+ enterprises",
      ],
    },
    {
      year: "2017-2020",
      position: "VP of Strategic Development",
      company: "Enterprise Solutions Inc",
      description: "Developed and executed strategic initiatives that transformed business operations.",
      achievements: ["Launched 3 successful product lines", "Increased market share by 35%", "Established innovation lab and R&D center"],
    },
    {
      year: "2014-2017",
      position: "Director of Business Development",
      company: "TechVentures Group",
      description: "Led cross-functional teams to identify and capitalize on emerging market opportunities.",
      achievements: [
        "Secured $200M in new business contracts",
        "Developed strategic alliances with industry leaders",
        "Launched successful startup incubator program",
      ],
    },
  ];

  const expertise = [
    {
      icon: <ChartIcon className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Comprehensive strategic development and execution across complex business environments.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Leadership Development",
      description: "Building and mentoring high-performance teams that drive organizational success.",
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "Global Expansion",
      description: "International market entry and expansion strategies with cultural adaptation focus.",
    },
    {
      icon: <AwardIcon className="w-8 h-8" />,
      title: "Operational Excellence",
      description: "Process optimization and performance improvement initiatives that deliver measurable results.",
    },
  ];

  const skills = [
    { name: "Strategic Leadership", level: 98 },
    { name: "Business Development", level: 95 },
    { name: "Digital Transformation", level: 92 },
    { name: "Team Management", level: 96 },
    { name: "Financial Management", level: 88 },
    { name: "Market Analysis", level: 90 },
  ];

  const certifications = [
    "Harvard Business School - Executive Leadership Program",
    "Stanford Graduate School - Strategic Management",
    "MIT Sloan - Digital Business Strategy",
    "Wharton - Advanced Management Program",
    "INSEAD - Global Executive MBA",
  ];

  return (
    <section id="about" className="corp-section-lg bg-gray-50">
      <div className="corp-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="corp-badge corp-badge-outline mb-4">About Executive Leadership</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Driving <span className="corp-text-gradient">Innovation</span> Through Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of executive experience transforming businesses through strategic vision, operational excellence, and
            people-centered leadership across global markets.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            id="executive-summary"
            data-animate
            className={`space-y-6 ${visibleItems.has("executive-summary") ? "corp-animate-slide-in-left" : ""}`}
          >
            <h3 className="font-heading text-2xl font-bold text-gray-900">Executive Profile</h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                As a seasoned executive with over 15 years of Fortune 500 leadership experience, I specialize in transforming organizations
                through strategic innovation and operational excellence. My track record includes leading successful digital
                transformations, international expansions, and high-performance team development.
              </p>
              <p>
                Throughout my career, I've consistently delivered exceptional results by combining analytical rigor with creative
                problem-solving, always maintaining focus on sustainable growth and stakeholder value creation.
              </p>
            </div>

            <div className="corp-card p-6">
              <h4 className="font-heading text-lg font-semibold text-gray-900 mb-4">Leadership Philosophy</h4>
              <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                "True leadership is about empowering others to achieve their potential while driving collective success. It's the
                intersection of vision, execution, and authentic human connection that creates lasting organizational impact."
              </blockquote>
            </div>
          </div>

          <div id="expertise-grid" data-animate className={`${visibleItems.has("expertise-grid") ? "corp-animate-slide-in-right" : ""}`}>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="corp-card p-6 text-center">
                  <div className="corp-service-icon mb-4 mx-auto">{item.icon}</div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div id="skills-section" data-animate className={`${visibleItems.has("skills-section") ? "corp-animate-slide-in-left" : ""}`}>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Professional Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="corp-progress">
                    <div className="corp-progress-bar" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="certifications-section"
            data-animate
            className={`${visibleItems.has("certifications-section") ? "corp-animate-slide-in-right" : ""}`}
          >
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Executive Education</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Timeline */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-gray-900 text-center mb-12">Career Timeline</h3>
          <div className="corp-timeline">
            {timeline.map((item, index) => (
              <div key={index} className="corp-timeline-item">
                <div className="corp-timeline-content">
                  <div className="corp-badge corp-badge-primary mb-3">{item.year}</div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">{item.position}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{item.company}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="corp-timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
