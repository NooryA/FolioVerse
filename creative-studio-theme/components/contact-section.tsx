"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [particleTrail, setParticleTrail] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const newPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        setMousePosition(newPosition);

        // Create particle trail
        const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#10b981", "#f59e0b"];
        const newParticle = {
          id: Date.now(),
          x: newPosition.x,
          y: newPosition.y,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticleTrail((prev) => [...prev.slice(-10), newParticle]);
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clean up old particles
  useEffect(() => {
    const timer = setInterval(() => {
      setParticleTrail((prev) => prev.filter((particle) => Date.now() - particle.id < 2000));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const projectTypes = [
    { id: "branding", label: "Brand Universe Creation", icon: "🌟", color: "from-purple-500 to-pink-500" },
    { id: "web", label: "Web Portal Development", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { id: "mobile", label: "Mobile Reality Apps", icon: "📱", color: "from-green-500 to-teal-500" },
    { id: "strategy", label: "Cosmic Strategy", icon: "🚀", color: "from-orange-500 to-red-500" },
  ];

  const budgetRanges = [
    { id: "startup", label: "$5K - $15K", desc: "Startup Universe", icon: "🌱" },
    { id: "growth", label: "$15K - $50K", desc: "Growth Galaxy", icon: "🌌" },
    { id: "enterprise", label: "$50K - $100K", desc: "Enterprise Empire", icon: "🏰" },
    { id: "infinite", label: "$100K+", desc: "Infinite Possibilities", icon: "♾️" },
  ];

  const timelineOptions = [
    { id: "rush", label: "1-2 Months", desc: "Warp Speed", icon: "⚡" },
    { id: "normal", label: "2-4 Months", desc: "Cruise Control", icon: "🛸" },
    { id: "extended", label: "4-6 Months", desc: "Epic Journey", icon: "🌠" },
    { id: "flexible", label: "Flexible", desc: "Timeless Creation", icon: "🔮" },
  ];

  const contactInfo = [
    {
      type: "Interdimensional HQ",
      value: "123 Creative Cosmos Ave\nDigital Dimension 90210",
      icon: "🏢",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      type: "Quantum Communication",
      value: "hello@creativestudio.universe\n+1 (555) COSMIC-1",
      icon: "📡",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      type: "Social Galaxies",
      value: "@creativestudio\nLinked across all dimensions",
      icon: "🌐",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #0f0f23 0%, 
            #1a1a2e 20%, 
            #16213e 40%, 
            #2d1b69 60%, 
            #581c87 80%, 
            #7c2d12 100%
          ),
          radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 20% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)
        `,
      }}
    >
      {/* Static Creative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Constellation */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
          <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute top-8 left-12 w-1 h-1 bg-pink-400 rounded-full"></div>
          <div className="absolute top-16 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-24 left-20 w-1 h-1 bg-purple-300 rounded-full"></div>
          <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
        </div>

        {/* Top Right Geometric */}
        <div className="absolute top-32 right-32 w-24 h-24 opacity-15">
          <div className="w-full h-full border border-purple-400/30 rounded-lg rotate-45 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Bottom Left Circle */}
        <div className="absolute bottom-40 left-40 w-20 h-20 opacity-10">
          <div className="w-full h-full border-2 border-cyan-400/40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Bottom Right Stars */}
        <div className="absolute bottom-20 right-20 w-40 h-40 opacity-25">
          <div className="absolute top-0 right-0 w-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
          <div className="absolute top-16 right-6 w-1 h-1 bg-pink-400 rounded-full"></div>
          <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        </div>

        {/* Center Floating Elements */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-16 h-16 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-sm"></div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg rotate-12 blur-sm"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      {/* Enhanced Mouse Trail (Only Interactive Element) */}
      <div className="absolute inset-0 pointer-events-none">
        {particleTrail.map((particle, index) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: "2px",
              height: "2px",
              backgroundColor: particle.color,
              opacity: Math.max(0, 0.4 - (Date.now() - particle.id) / 3000),
              transition: "opacity 0.3s ease-out",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative">
            {/* Creative Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <span className="text-white font-medium text-lg">Launch Your Vision</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>

            {/* Elegant Title */}
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
              <span className="block mb-4">Ready to Create</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Magic?
              </span>
            </h2>

            {/* Professional Subtitle */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Let's transcend the ordinary together. Tell us about your impossible dream, and we'll show you how to make it reality.
              </p>

              {/* Subtle Accent Elements */}
              <div className="flex justify-center items-center gap-4 opacity-40">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Portal */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div
                className="absolute inset-0 rounded-3xl opacity-10 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
                }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-8">
                  Project Brief
                  <span className="block text-lg font-normal text-gray-400">Tell us about your universe</span>
                </h3>

                <form className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your cosmic name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ${
                          activeField === "name" ? "border-pink-500 shadow-lg shadow-pink-500/20" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {activeField === "name" && (
                        <div className="absolute -top-2 left-4 px-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full">
                          Identity Required
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Quantum email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ${
                          activeField === "email" ? "border-cyan-500 shadow-lg shadow-cyan-500/20" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {activeField === "email" && (
                        <div className="absolute -top-2 left-4 px-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full">
                          Communication Portal
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-white font-bold mb-4">What universe are we creating?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInputChange("project", type.id)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${
                            formData.project === type.id
                              ? "border-white bg-white/10 scale-105"
                              : "border-white/10 hover:border-white/30 hover:bg-white/5"
                          }`}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          />
                          <div className="relative flex items-center gap-3">
                            <span className="text-2xl">{type.icon}</span>
                            <span className="text-white font-medium">{type.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-white font-bold mb-4">Investment level for your vision</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => handleInputChange("budget", budget.id)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${
                            formData.budget === budget.id
                              ? "border-green-400 bg-green-400/10 scale-105"
                              : "border-white/10 hover:border-white/30 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="text-white font-medium">{budget.label}</div>
                              <div className="text-gray-400 text-sm">{budget.desc}</div>
                            </div>
                            <span className="text-xl">{budget.icon}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-white font-bold mb-4">When do we launch to the stars?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timelineOptions.map((timeline) => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() => handleInputChange("timeline", timeline.id)}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden ${
                            formData.timeline === timeline.id
                              ? "border-orange-400 bg-orange-400/10 scale-105"
                              : "border-white/10 hover:border-white/30 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="text-white font-medium">{timeline.label}</div>
                              <div className="text-gray-400 text-sm">{timeline.desc}</div>
                            </div>
                            <span className="text-xl">{timeline.icon}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      placeholder="Describe your impossible dream... we specialize in making the impossible possible."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      rows={6}
                      className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 resize-none ${
                        activeField === "message"
                          ? "border-purple-500 shadow-lg shadow-purple-500/20"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {activeField === "message" && (
                      <div className="absolute -top-2 left-4 px-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                        Vision Portal
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group relative px-8 py-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-xl font-bold text-white overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>Launch Our Collaboration</span>
                      <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{info.type}</h4>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Interactive Universe Map */}
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span>🌌</span>
                    Our Creative Universe
                  </h4>

                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-white/10 relative overflow-hidden">
                    {/* Static Constellation Pattern */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full" />
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full" />
                      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/25 rounded-full" />
                      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/20 rounded-full" />
                      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white/15 rounded-full" />
                      <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-white/20 rounded-full" />
                    </div>

                    {/* Center Hub with Pink Pulse */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50" />
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-sm whitespace-nowrap">
                        Creative HQ
                      </div>
                    </div>

                    {/* Static Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-10">
                      <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1" />
                      <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                      <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1" />
                    </svg>
                  </div>

                  <p className="text-gray-400 text-sm mt-4 text-center">
                    Operating across all dimensions • Available 24/7 in the metaverse
                  </p>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">Need Instant Cosmic Consultation?</h4>
                <p className="text-gray-300 mb-6">Book a 30-minute reality-bending session with our interdimensional team.</p>
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                  <span className="flex items-center gap-2">
                    <span>📅</span>
                    Schedule Cosmic Meeting
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
