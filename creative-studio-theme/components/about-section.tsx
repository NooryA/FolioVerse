"use client";
import { useState, useEffect } from "react";

// Inline SVG Icons
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

export default function AboutSection() {
  const [activeProcess, setActiveProcess] = useState(0);

  const processSteps = [
    {
      title: "Discover",
      description: "We dive deep into your brand, audience, and goals to understand what makes you unique.",
      icon: <LightbulbIcon className="w-8 h-8" />,
      color: "studio-bg-gradient",
    },
    {
      title: "Design",
      description: "Our creative team crafts beautiful, purposeful designs that tell your story.",
      icon: <HeartIcon className="w-8 h-8" />,
      color: "studio-bg-gradient-secondary",
    },
    {
      title: "Develop",
      description: "We bring designs to life with cutting-edge technology and seamless functionality.",
      icon: <UsersIcon className="w-8 h-8" />,
      color: "studio-bg-gradient-warm",
    },
    {
      title: "Deliver",
      description: "Launch with confidence and ongoing support to ensure your project's success.",
      icon: <AwardIcon className="w-8 h-8" />,
      color: "studio-bg-gradient-cool",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Creative Director",
      bio: "Visual storyteller with 10+ years crafting award-winning brand experiences.",
      avatar: "AR",
      skills: ["Brand Strategy", "Art Direction", "Typography"],
    },
    {
      name: "Sam Chen",
      role: "Lead Designer",
      bio: "Digital design specialist focused on user-centered, innovative solutions.",
      avatar: "SC",
      skills: ["UI/UX Design", "Prototyping", "Design Systems"],
    },
    {
      name: "Jordan Taylor",
      role: "Technical Lead",
      bio: "Full-stack developer who loves building beautiful, functional experiences.",
      avatar: "JT",
      skills: ["React", "Node.js", "Design Engineering"],
    },
    {
      name: "Casey Morgan",
      role: "Project Manager",
      bio: "Organization wizard ensuring projects run smoothly from start to finish.",
      avatar: "CM",
      skills: ["Project Planning", "Client Relations", "Quality Assurance"],
    },
  ];

  const values = [
    {
      title: "Creative Excellence",
      description: "We push boundaries and challenge conventions to create extraordinary work.",
      icon: "🎨",
    },
    {
      title: "Collaborative Spirit",
      description: "Great work happens when diverse minds come together with shared purpose.",
      icon: "🤝",
    },
    {
      title: "Authentic Impact",
      description: "We believe in creating work that matters and makes a real difference.",
      icon: "✨",
    },
    {
      title: "Continuous Growth",
      description: "We're always learning, experimenting, and evolving our craft.",
      icon: "🚀",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <section id="about" className="studio-section-lg bg-gradient-to-br from-white to-gray-50">
      <div className="studio-container">
        {/* Section Header */}
        <div className="text-center mb-16 studio-animate-fadeInUp">
          <div className="studio-badge studio-badge-secondary mb-4">🌟 About Our Creative Studio</div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            We're <span className="studio-text-gradient">Passionate</span> About
            <br />
            Creating <span className="studio-text-gradient-rainbow">Magic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, we're a tight-knit team of designers, developers, and dreamers who believe great design can change the world,
            one pixel at a time.
          </p>
        </div>

        {/* Creative Process */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-center mb-12 studio-text-gradient">Our Creative Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`studio-service-card cursor-pointer transition-all duration-300 ${
                  activeProcess === index ? "studio-shadow-colored scale-105" : ""
                }`}
                onClick={() => setActiveProcess(index)}
              >
                <div className={`studio-service-icon ${step.color}`}>{step.icon}</div>
                <h4 className="studio-service-title">{step.title}</h4>
                <p className="studio-service-description">{step.description}</p>
                <div className="mt-4">
                  <div
                    className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden ${activeProcess === index ? "studio-bg-gradient" : ""}`}
                  >
                    {activeProcess === index && <div className="h-full w-full bg-white/30 animate-pulse"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Navigation */}
          <div className="flex justify-center gap-2">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProcess(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeProcess === index ? "studio-bg-gradient w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-center mb-12 studio-text-gradient">What Drives Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="studio-card text-center">
                <div className="studio-card-content">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-display text-xl font-bold mb-3 studio-text-gradient">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-center mb-12 studio-text-gradient">Meet Our Creative Team</h3>
          <div className="studio-team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="studio-team-member">
                <div className="studio-team-avatar">{member.avatar}</div>
                <h4 className="studio-team-name">{member.name}</h4>
                <p className="studio-team-role">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="studio-badge studio-badge-outline text-xs mr-2">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="studio-team-social mt-4">
                  <a href="#" className="hover:studio-bg-gradient hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:studio-bg-gradient hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:studio-bg-gradient hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.89 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Stats */}
        <div className="text-center">
          <div className="studio-card p-12 studio-bg-gradient-rainbow">
            <div className="text-white">
              <h3 className="font-display text-3xl font-bold mb-8">Making Magic Since 2018</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="font-display text-4xl font-bold mb-2">150+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold mb-2">25+</div>
                  <div className="text-white/80">Awards Won</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold mb-2">98%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
