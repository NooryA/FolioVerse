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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

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

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
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

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story");

  const skills = [
    { name: "Frontend Development", level: 95, icon: CodeIcon },
    { name: "UI/UX Design", level: 90, icon: DesignIcon },
    { name: "Project Management", level: 85, icon: UserIcon },
    { name: "Digital Strategy", level: 88, icon: LightbulbIcon },
  ];

  const achievements = [
    { title: "Projects Completed", value: "150+", icon: CheckIcon },
    { title: "Happy Clients", value: "85+", icon: StarIcon },
    { title: "Years Experience", value: "5+", icon: AwardIcon },
    { title: "Success Rate", value: "98%", icon: CheckIcon },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"],
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive planning to achieve your business goals",
      features: ["Market Analysis", "Brand Strategy", "Growth Planning", "ROI Optimization"],
    },
  ];

  return (
    <section id="about" className="freelancer-section freelancer-section-lg">
      <div className="freelancer-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="freelancer-badge freelancer-badge-primary mb-4">
            <UserIcon className="w-4 h-4" />
            About Me
          </div>
          <h2 className="freelancer-heading text-4xl md:text-5xl mb-6">
            Passionate Developer & <span className="freelancer-text-gradient">Digital Strategist</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses transform their ideas into powerful digital experiences that drive growth and success.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8">
                  {[
                    { id: "story", label: "My Story" },
                    { id: "approach", label: "My Approach" },
                    { id: "values", label: "My Values" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === "story" && (
                    <div className="freelancer-animate-fadeInUp">
                      <h3 className="text-2xl font-bold mb-4">From Idea to Impact</h3>
                      <p className="text-gray-600 mb-4">
                        With over 5 years of experience in web development and digital strategy, I've helped dozens of businesses transform
                        their online presence. My journey started as a curious developer who loved solving complex problems.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Today, I specialize in creating high-performance websites and digital strategies that don't just look great—they
                        deliver measurable results. Every project is an opportunity to push boundaries and create something extraordinary.
                      </p>
                      <p className="text-gray-600">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring
                        aspiring developers.
                      </p>
                    </div>
                  )}

                  {activeTab === "approach" && (
                    <div className="freelancer-animate-fadeInUp">
                      <h3 className="text-2xl font-bold mb-4">My Development Process</h3>
                      <div className="space-y-4">
                        {[
                          { step: "1", title: "Discovery", desc: "Understanding your goals and requirements" },
                          { step: "2", title: "Strategy", desc: "Planning the optimal technical approach" },
                          { step: "3", title: "Design", desc: "Creating user-centered interfaces" },
                          { step: "4", title: "Development", desc: "Building with modern technologies" },
                          { step: "5", title: "Testing", desc: "Ensuring quality and performance" },
                          { step: "6", title: "Launch", desc: "Deployment and ongoing support" },
                        ].map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "values" && (
                    <div className="freelancer-animate-fadeInUp">
                      <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
                      <div className="space-y-4">
                        {[
                          { icon: "🎯", title: "Results-Driven", desc: "Every project should deliver measurable value" },
                          { icon: "🚀", title: "Innovation", desc: "Always exploring new technologies and approaches" },
                          { icon: "🤝", title: "Collaboration", desc: "Success comes from working together as a team" },
                          { icon: "💡", title: "Continuous Learning", desc: "The tech world evolves, and so do I" },
                        ].map((value, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="text-2xl">{value.icon}</div>
                            <div>
                              <h4 className="font-semibold">{value.title}</h4>
                              <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-8">Technical Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <skill.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="freelancer-card text-center">
                  <div className="freelancer-card-content">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                    <div className="text-sm text-gray-600">{achievement.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            How I Can <span className="freelancer-text-gradient">Help You</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="freelancer-service-card">
                <h4 className="freelancer-service-title text-xl">{service.title}</h4>
                <p className="freelancer-service-description text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="freelancer-card max-w-2xl mx-auto">
            <div className="freelancer-card-content">
              <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-xl text-gray-600 mb-8">Let's discuss your project and see how I can help bring your vision to life.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="freelancer-btn freelancer-btn-primary freelancer-btn-large">Get Free Consultation</button>
                <button className="freelancer-btn freelancer-btn-outline freelancer-btn-large">View My Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
