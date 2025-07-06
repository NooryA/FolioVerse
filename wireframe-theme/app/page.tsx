"use client";

import { useState, useEffect } from "react";
import {
  Square,
  Circle,
  Triangle,
  Code,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Globe,
  ArrowRight,
  Grid,
  Layers,
  Zap,
  Target,
  Settings,
  Database,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("overview");
  const [blueprintLoaded, setBlueprintLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setBlueprintLoaded(true), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 relative overflow-hidden">
      {/* Blueprint Grid */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Blueprint Title Block */}
      <div className="fixed top-4 left-4 bg-white border-2 border-blue-600 p-4 z-50 shadow-lg">
        <div className="font-mono text-xs text-blue-600 mb-1">BLUEPRINT v2.1</div>
        <div className="font-mono font-bold text-blue-800">ALEX RODRIGUEZ</div>
        <div className="font-mono text-xs text-gray-600">FULL-STACK DEVELOPER</div>
        <div className="mt-2 text-xs text-gray-500">Scale: 1:1 | Date: 2024-01-15</div>
      </div>

      {/* Blueprint Legend */}
      <div className="fixed top-4 right-4 bg-white border-2 border-blue-600 p-4 z-50 shadow-lg">
        <div className="font-mono text-xs font-bold text-blue-800 mb-2">LEGEND</div>
        <div className="space-y-1 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-blue-600"></div>
            <span>COMPONENTS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-dashed border-gray-400"></div>
            <span>CONTAINERS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-200"></div>
            <span>INTERACTIVE</span>
          </div>
        </div>
      </div>

      {/* Navigation Blueprint */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white border-2 border-blue-600 p-4 z-40">
        <div className="font-mono text-xs text-blue-600 mb-3">NAVIGATION</div>
        <div className="space-y-2">
          {[
            { id: "overview", label: "OVERVIEW", icon: Grid },
            { id: "about", label: "ABOUT", icon: User },
            { id: "projects", label: "PROJECTS", icon: Briefcase },
            { id: "skills", label: "SKILLS", icon: Settings },
            { id: "contact", label: "CONTACT", icon: Mail },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSection(item.id)}
              className={`w-full text-left flex items-center gap-2 p-2 font-mono text-xs transition-colors ${
                selectedSection === item.id
                  ? "bg-blue-100 border-2 border-blue-600"
                  : "border-2 border-dashed border-gray-400 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Blueprint Content */}
      <div className="pl-48 pr-8 pt-24 pb-8">
        {/* Loading Animation */}
        {!blueprintLoaded && (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <div className="font-mono text-blue-600">LOADING BLUEPRINT...</div>
            </div>
          </div>
        )}

        {blueprintLoaded && (
          <>
            {/* Overview Section */}
            {selectedSection === "overview" && (
              <div className="space-y-8 animate-fadeIn">
                {/* Main Schema */}
                <div className="border-2 border-blue-600 bg-white p-8 relative">
                  <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-blue-600">DEVELOPER.SCHEMA</div>

                  <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-mono text-blue-800 mb-4">ALEX RODRIGUEZ</h1>
                    <p className="text-xl font-mono text-gray-600 mb-6">class FullStackDeveloper extends Engineer</p>
                    <div className="flex justify-center gap-4">
                      <div className="border-2 border-blue-600 px-4 py-2 bg-blue-100">
                        <span className="font-mono text-sm">experience: 5+ years</span>
                      </div>
                      <div className="border-2 border-blue-600 px-4 py-2 bg-blue-100">
                        <span className="font-mono text-sm">location: San Francisco</span>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="border-2 border-dashed border-gray-400 p-6">
                    <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-gray-600">ARCHITECTURE</div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 border-2 border-blue-600 mx-auto mb-3 flex items-center justify-center">
                          <Monitor className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="font-mono text-sm text-blue-800">FRONTEND</div>
                        <div className="font-mono text-xs text-gray-600">React, Vue, TypeScript</div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 border-2 border-blue-600 mx-auto mb-3 flex items-center justify-center">
                          <Database className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="font-mono text-sm text-blue-800">BACKEND</div>
                        <div className="font-mono text-xs text-gray-600">Node.js, Python, PostgreSQL</div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 border-2 border-blue-600 mx-auto mb-3 flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="font-mono text-sm text-blue-800">MOBILE</div>
                        <div className="font-mono text-xs text-gray-600">React Native, Flutter</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Blueprint */}
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: "PROJECTS_COMPLETED", value: "50+", dimension: "120x80" },
                    { label: "USERS_SERVED", value: "100K+", dimension: "140x80" },
                    { label: "TECHNOLOGIES", value: "25+", dimension: "110x80" },
                    { label: "COFFEE_CONSUMED", value: "∞", dimension: "100x80" },
                  ].map((stat, index) => (
                    <div key={index} className="border-2 border-blue-600 bg-white p-4 relative">
                      <div className="absolute -top-3 left-2 bg-blue-50 px-1 font-mono text-xs text-blue-600">{stat.dimension}</div>
                      <div className="text-center">
                        <div className="text-2xl font-mono font-bold text-blue-800">{stat.value}</div>
                        <div className="font-mono text-xs text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Section */}
            {selectedSection === "about" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-2 border-blue-600 bg-white p-8 relative">
                  <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-blue-600">ABOUT.SPEC</div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-mono text-blue-800 mb-4">DEVELOPER_PROFILE</h2>
                      <div className="space-y-4 font-mono text-sm text-gray-700">
                        <p>
                          Passionate full-stack developer with expertise in modern web technologies. Specialized in building scalable
                          applications and leading development teams.
                        </p>
                        <p>
                          Started coding at age 16, graduated from UC Berkeley with CS degree. Currently architecting enterprise solutions
                          at TechCorp Inc.
                        </p>
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-gray-400 p-4">
                      <div className="font-mono text-xs text-gray-600 mb-3">EXPERIENCE_TIMELINE</div>
                      <div className="space-y-3">
                        {[
                          { year: "2024", role: "Senior Developer", company: "TechCorp Inc." },
                          { year: "2022", role: "Full Stack Dev", company: "StartupHub" },
                          { year: "2020", role: "Frontend Dev", company: "WebAgency" },
                        ].map((exp, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-12 h-6 border border-blue-600 flex items-center justify-center">
                              <span className="font-mono text-xs">{exp.year}</span>
                            </div>
                            <div className="flex-1 font-mono text-xs">
                              {exp.role} @ {exp.company}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Section */}
            {selectedSection === "projects" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-2 border-blue-600 bg-white p-8 relative">
                  <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-blue-600">PROJECTS.BLUEPRINT</div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        name: "E-COMMERCE_PLATFORM",
                        tech: ["React", "Node.js", "PostgreSQL"],
                        status: "PRODUCTION",
                        users: "10K+",
                      },
                      {
                        name: "AI_CHAT_ASSISTANT",
                        tech: ["Python", "OpenAI", "React"],
                        status: "DEPLOYED",
                        users: "5K+",
                      },
                      {
                        name: "MOBILE_BANKING_APP",
                        tech: ["React Native", "Firebase"],
                        status: "LIVE",
                        users: "50K+",
                      },
                      {
                        name: "ANALYTICS_DASHBOARD",
                        tech: ["Vue.js", "D3.js", "MongoDB"],
                        status: "BETA",
                        users: "1K+",
                      },
                    ].map((project, index) => (
                      <div key={index} className="border-2 border-dashed border-gray-400 p-6 relative">
                        <div className="absolute -top-3 left-2 bg-blue-50 px-1 font-mono text-xs text-gray-600">PROJECT_{index + 1}</div>

                        <h3 className="font-mono text-lg text-blue-800 mb-3">{project.name}</h3>

                        <div className="mb-4">
                          <div className="font-mono text-xs text-gray-600 mb-1">TECH_STACK:</div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span key={i} className="border border-blue-600 px-2 py-1 font-mono text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="font-mono text-xs">
                            STATUS: <span className="text-green-600">{project.status}</span>
                          </div>
                          <div className="font-mono text-xs">USERS: {project.users}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {selectedSection === "skills" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-2 border-blue-600 bg-white p-8 relative">
                  <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-blue-600">SKILLS.MATRIX</div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        category: "FRONTEND_TECH",
                        skills: [
                          { name: "React.js", level: 95 },
                          { name: "Vue.js", level: 88 },
                          { name: "TypeScript", level: 92 },
                          { name: "CSS/SCSS", level: 90 },
                        ],
                      },
                      {
                        category: "BACKEND_TECH",
                        skills: [
                          { name: "Node.js", level: 93 },
                          { name: "Python", level: 87 },
                          { name: "PostgreSQL", level: 85 },
                          { name: "MongoDB", level: 82 },
                        ],
                      },
                    ].map((group, index) => (
                      <div key={index} className="border-2 border-dashed border-gray-400 p-6">
                        <div className="font-mono text-sm text-blue-800 mb-4">{group.category}</div>

                        <div className="space-y-3">
                          {group.skills.map((skill, i) => (
                            <div key={i}>
                              <div className="flex justify-between font-mono text-xs mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <div className="w-full h-2 border border-blue-600">
                                <div className="h-full bg-blue-200" style={{ width: `${skill.level}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {selectedSection === "contact" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-2 border-blue-600 bg-white p-8 relative">
                  <div className="absolute -top-3 left-4 bg-blue-50 px-2 font-mono text-xs text-blue-600">CONTACT.INTERFACE</div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-mono text-blue-800 mb-6">GET_IN_TOUCH</h2>

                      <div className="space-y-4">
                        {[
                          { label: "EMAIL", value: "alex@example.com", icon: Mail },
                          { label: "GITHUB", value: "github.com/alexdev", icon: Github },
                          { label: "LINKEDIN", value: "linkedin.com/in/alexdev", icon: Linkedin },
                          { label: "WEBSITE", value: "alexdev.com", icon: Globe },
                        ].map((contact, i) => (
                          <div key={i} className="border-2 border-dashed border-gray-400 p-3 flex items-center gap-3">
                            <contact.icon className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="font-mono text-xs text-gray-600">{contact.label}:</div>
                              <div className="font-mono text-sm text-blue-800">{contact.value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-gray-400 p-6">
                      <div className="font-mono text-xs text-gray-600 mb-4">MESSAGE.FORM</div>

                      <div className="space-y-4">
                        <div>
                          <label className="font-mono text-xs text-gray-600">NAME:</label>
                          <div className="border-2 border-blue-600 p-2 bg-blue-50 mt-1">
                            <input
                              type="text"
                              className="w-full bg-transparent font-mono text-sm focus:outline-none"
                              placeholder="Your name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-mono text-xs text-gray-600">MESSAGE:</label>
                          <div className="border-2 border-blue-600 p-2 bg-blue-50 mt-1">
                            <textarea
                              rows={4}
                              className="w-full bg-transparent font-mono text-sm focus:outline-none resize-none"
                              placeholder="Your message"
                            />
                          </div>
                        </div>

                        <button className="w-full border-2 border-blue-600 bg-blue-100 p-3 font-mono text-sm hover:bg-blue-200 transition-colors">
                          SEND_MESSAGE()
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Blueprint Annotations */}
      <div className="fixed bottom-4 left-4 bg-white border-2 border-blue-600 p-3 text-xs font-mono">
        <div className="text-blue-600">NOTES:</div>
        <div className="text-gray-600">- Responsive design implemented</div>
        <div className="text-gray-600">- Interactive components active</div>
        <div className="text-gray-600">- Cross-browser compatible</div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
