"use client";
import { useState, useEffect } from "react";

// Premium SVG Icons
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

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

export default function AboutSection() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeTab, setActiveTab] = useState(0);

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

  const leadershipPhilosophy = [
    {
      principle: "Vision-Driven Strategy",
      description: "Developing transformative visions that inspire teams and drive sustainable growth across global markets.",
      impact: "40% faster strategic execution",
    },
    {
      principle: "Data-Informed Decisions",
      description: "Leveraging advanced analytics and market intelligence to make precision decisions at scale.",
      impact: "25% improved accuracy",
    },
    {
      principle: "People-Centric Leadership",
      description: "Building high-performance cultures where talent thrives and innovation becomes systematic.",
      impact: "90% talent retention",
    },
    {
      principle: "Stakeholder Value Creation",
      description: "Balancing shareholder returns with environmental, social, and governance responsibilities.",
      impact: "Triple bottom line growth",
    },
  ];

  const expertise = [
    {
      icon: <TrendingUpIcon className="w-8 h-8" />,
      title: "Strategic Transformation",
      description: "Leading comprehensive organizational transformations that deliver measurable business outcomes.",
      metrics: ["$2.8B+ revenue growth", "40% efficiency gains", "15 successful turnarounds"],
    },
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: "Innovation Leadership",
      description: "Driving digital innovation and AI integration across enterprise-scale technology initiatives.",
      metrics: ["12 AI implementations", "300% innovation ROI", "25 patents filed"],
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "Global Expansion",
      description: "Orchestrating international market entries and cross-cultural business development strategies.",
      metrics: ["25+ markets entered", "150+ global teams", "8 international offices"],
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Governance Excellence",
      description: "Establishing world-class governance frameworks for public companies and complex organizations.",
      metrics: ["3 successful IPOs", "100% compliance record", "A+ ESG rating"],
    },
  ];

  const timeline = [
    {
      year: "2024-Present",
      position: "Chairman & Chief Executive Officer",
      company: "Quantum Dynamics Corporation",
      type: "Current Role",
      description:
        "Leading the $15B global technology conglomerate through its next phase of quantum computing innovation and sustainable growth initiatives.",
      achievements: [
        "Launched quantum computing division with $2B initial investment",
        "Achieved carbon neutrality across all operations globally",
        "Expanded into 8 new international markets including Southeast Asia",
        "Successfully completed $800M acquisition of AI startup portfolio",
      ],
      metrics: { revenue: "$15.2B", growth: "+18%", employees: "45,000" },
    },
    {
      year: "2020-2024",
      position: "Chief Executive Officer",
      company: "Global Innovation Partners",
      type: "Previous Role",
      description:
        "Transformed the Fortune 500 enterprise technology firm from traditional IT services to cutting-edge AI and cloud solutions provider.",
      achievements: [
        "Increased market capitalization from $8B to $24B",
        "Led successful digital transformation affecting 2M+ customers",
        "Established strategic partnerships with Microsoft, Google, and Amazon",
        "Achieved industry-leading 96% customer satisfaction ratings",
      ],
      metrics: { revenue: "$12.8B", growth: "+200%", employees: "28,000" },
    },
    {
      year: "2017-2020",
      position: "Chief Operating Officer",
      company: "TechVentures International",
      type: "Leadership Role",
      description: "Spearheaded operational excellence initiatives and international expansion across emerging markets.",
      achievements: [
        "Reduced operational costs by $500M through process optimization",
        "Launched operations in 12 emerging markets",
        "Built strategic innovation lab network across 5 continents",
        "Established venture capital arm with $1B fund",
      ],
      metrics: { revenue: "$8.2B", growth: "+85%", employees: "18,000" },
    },
  ];

  const education = [
    {
      degree: "Master of Business Administration",
      institution: "Harvard Business School",
      year: "2010",
      specialization: "Strategic Management & Leadership",
      distinction: "Baker Scholar (Top 5%)",
    },
    {
      degree: "Master of Science",
      institution: "MIT Sloan School of Management",
      year: "2008",
      specialization: "Technology & Operations Management",
      distinction: "Siebel Scholar",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Stanford University",
      year: "2006",
      specialization: "Computer Science & Engineering",
      distinction: "Phi Beta Kappa, Summa Cum Laude",
    },
  ];

  const boardPositions = [
    "Chairman - World Economic Forum Technology Council",
    "Director - Fortune 500 Retail Corporation",
    "Advisory Board - MIT Computer Science & AI Laboratory",
    "Trustee - Global Education Foundation",
    "Member - Council on Foreign Relations",
  ];

  const tabs = [
    { id: 0, label: "Leadership Philosophy", icon: <StarIcon className="w-5 h-5" /> },
    { id: 1, label: "Career Timeline", icon: <TrendingUpIcon className="w-5 h-5" /> },
    { id: 2, label: "Education & Boards", icon: <BookOpenIcon className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="corp-section-lg bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="corp-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="corp-badge corp-badge-gold mb-6">Executive Leadership Excellence</div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Transforming <span className="corp-text-gradient">Organizations</span>
            <br />
            Through Strategic Leadership
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Two decades of Fortune 500 experience, driving $15B+ in enterprise value creation through strategic innovation, operational
            excellence, and transformational leadership across global markets.
          </p>
        </div>

        {/* Core Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {expertise.map((item, index) => (
            <div
              key={index}
              id={`expertise-${index}`}
              data-animate
              className={`corp-card group cursor-pointer ${visibleItems.has(`expertise-${index}`) ? "corp-animate-fade-in" : ""}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="corp-card-body">
                <div className="flex items-start gap-6">
                  <div className="corp-service-icon group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{item.description}</p>
                    <div className="space-y-2">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabbed Content Section */}
        <div className="corp-card overflow-hidden mb-20">
          {/* Tab Navigation */}
          <div className="corp-card-header">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "corp-bg-gradient-gold text-gray-900 shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="corp-card-body min-h-[600px]">
            {activeTab === 0 && (
              <div className="corp-animate-fade-in">
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-8">Leadership Philosophy</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {leadershipPhilosophy.map((principle, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 corp-bg-gradient-gold rounded-full flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-sm">{index + 1}</span>
                        </div>
                        <h4 className="font-display text-xl font-bold text-gray-900">{principle.principle}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed pl-11">{principle.description}</p>
                      <div className="corp-badge corp-badge-success pl-11">{principle.impact}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 corp-card-glass p-8 rounded-2xl">
                  <blockquote className="font-display text-2xl lg:text-3xl text-gray-900 leading-relaxed italic text-center">
                    "True leadership is about creating an environment where others can achieve their highest potential while driving
                    sustainable value for all stakeholders. It's the intersection of vision, execution, and authentic human connection."
                  </blockquote>
                  <div className="text-center mt-6">
                    <div className="corp-badge corp-badge-gold">Executive Philosophy</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="corp-animate-fade-in">
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-8">Executive Career Timeline</h3>
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-8">
                        <div className="flex-shrink-0">
                          <div className="corp-badge corp-badge-gold text-lg px-4 py-2">{item.year}</div>
                          <div className="text-center mt-2">
                            <span className="text-sm text-gray-500">{item.type}</span>
                          </div>
                        </div>

                        <div className="flex-1 corp-card-glass p-6 rounded-2xl">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                            <div>
                              <h4 className="font-display text-2xl font-bold text-gray-900 mb-2">{item.position}</h4>
                              <p className="text-yellow-600 font-semibold text-lg mb-3">{item.company}</p>
                            </div>
                            <div className="flex gap-6 text-sm">
                              <div className="text-center">
                                <div className="font-bold text-gray-900">{item.metrics.revenue}</div>
                                <div className="text-gray-600">Revenue</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-green-600">{item.metrics.growth}</div>
                                <div className="text-gray-600">Growth</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-gray-900">{item.metrics.employees}</div>
                                <div className="text-gray-600">Employees</div>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {item.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <AwardIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {index < timeline.length - 1 && (
                        <div className="flex justify-center my-8">
                          <div className="w-px h-12 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="corp-animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Education */}
                  <div>
                    <h3 className="font-display text-3xl font-bold text-gray-900 mb-8">Executive Education</h3>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="corp-card-glass p-6 rounded-2xl">
                          <h4 className="font-display text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                          <p className="text-yellow-600 font-semibold mb-1">{edu.institution}</p>
                          <p className="text-gray-600 mb-2">{edu.specialization}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">{edu.year}</span>
                            <div className="corp-badge corp-badge-gold text-xs">{edu.distinction}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Board Positions */}
                  <div>
                    <h3 className="font-display text-3xl font-bold text-gray-900 mb-8">Board Positions & Advisory</h3>
                    <div className="space-y-4">
                      {boardPositions.map((position, index) => (
                        <div key={index} className="corp-card-glass p-4 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 corp-bg-gradient-gold rounded-full flex items-center justify-center">
                              <StarIcon className="w-4 h-4 text-gray-900" />
                            </div>
                            <span className="text-gray-700 font-medium">{position}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 corp-card-glass p-6 rounded-2xl text-center">
                      <h4 className="font-display text-xl font-bold text-gray-900 mb-4">Current Focus Areas</h4>
                      <div className="flex flex-wrap justify-center gap-3">
                        <div className="corp-badge corp-badge-gold">AI & Technology</div>
                        <div className="corp-badge corp-badge-gold">Sustainable Innovation</div>
                        <div className="corp-badge corp-badge-gold">Global Education</div>
                        <div className="corp-badge corp-badge-gold">Economic Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
