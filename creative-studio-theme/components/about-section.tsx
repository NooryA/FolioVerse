"use client";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; rotation: number }>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initialize floating elements
    const elements = [];
    for (let i = 0; i < 8; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
      });
    }
    setFloatingElements(elements);

    // Auto-cycle timeline
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const timelineEvents = [
    {
      year: "2019",
      title: "Genesis",
      description: "Born from cosmic dust and creative energy, we emerged to challenge the ordinary.",
      icon: "🌟",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2020",
      title: "Evolution",
      description: "Adapted to the digital multiverse, mastering the art of impossible design.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      title: "Transcendence",
      description: "Broke through dimensional barriers, creating experiences beyond reality.",
      icon: "🌌",
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2024",
      title: "Omnipresence",
      description: "Existing in all creative dimensions simultaneously, reshaping digital futures.",
      icon: "🔮",
      color: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    { name: "Reality Bending", level: 95, color: "from-purple-400 to-pink-400" },
    { name: "Dimensional Design", level: 92, color: "from-blue-400 to-cyan-400" },
    { name: "Quantum UX", level: 88, color: "from-green-400 to-teal-400" },
    { name: "Multiverse Marketing", level: 90, color: "from-orange-400 to-red-400" },
    { name: "Cosmic Code", level: 87, color: "from-indigo-400 to-purple-400" },
    { name: "Interdimensional Strategy", level: 93, color: "from-pink-400 to-rose-400" },
  ];

  const teamMembers = [
    {
      name: "Zara Cosmicron",
      role: "Interdimensional Creative Director",
      bio: "Channels creative energy from parallel universes",
      avatar: "🌟",
      specialty: "Reality Manipulation",
    },
    {
      name: "Kai Nebulax",
      role: "Quantum UX Architect",
      bio: "Designs experiences that exist in multiple dimensions",
      avatar: "🚀",
      specialty: "Dimension Navigation",
    },
    {
      name: "Luna Starweaver",
      role: "Cosmic Brand Strategist",
      bio: "Builds brands that transcend space and time",
      avatar: "🌙",
      specialty: "Stellar Communication",
    },
    {
      name: "Orion Codesmith",
      role: "Multiverse Developer",
      bio: "Codes reality with pure imagination",
      avatar: "⚡",
      specialty: "Digital Alchemy",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #0c0c0c 0%, 
            #1a1a1a 15%, 
            #2d1b4e 30%, 
            #1e1b4b 45%, 
            #312e81 60%, 
            #2d1b4e 75%, 
            #1a1a1a 90%, 
            #0c0c0c 100%
          ),
          radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
        `,
      }}
    >
      {/* Floating Creative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={element.id}
            className="absolute animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
              opacity: 0.15,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${8 + index}s`,
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skills[index % skills.length].color} blur-sm`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-white/90 font-medium">🌌 About Our Universe</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
            <span className="block">We Are</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Creative Alchemists
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming impossible dreams into extraordinary digital realities. We don't just create - we transcend, innovate, and reshape
            the very fabric of creative possibility.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div
          className={`mb-32 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Our Journey Through
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Space & Time</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-30" />

            {/* Timeline Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} group cursor-pointer`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div
                      className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 ${
                        activeTimeline === index ? "bg-white/10 border-white/30 scale-105" : "bg-white/5 border-white/10 hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl ${
                            index % 2 === 0 ? "order-2" : "order-1"
                          }`}
                        >
                          {event.icon}
                        </div>
                        <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                          <div className="text-3xl font-black text-white">{event.year}</div>
                          <div className="text-xl font-bold text-gray-300">{event.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${event.color} z-10 relative transition-all duration-500 ${
                      activeTimeline === index ? "scale-150 shadow-2xl" : "scale-100"
                    }`}
                  >
                    {activeTimeline === index && <div className="absolute inset-0 rounded-full animate-ping bg-white/30" />}
                  </div>

                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Constellation */}
        <div
          className={`mb-32 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Our Cosmic
            <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Abilities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />

                  {/* Animated sparkles */}
                  <div className="absolute inset-0 flex items-center justify-end pr-2">
                    <div className={`w-2 h-2 rounded-full bg-white animate-pulse ${skill.level > 90 ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Interdimensional Team */}
        <div
          className={`mb-32 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Our Interdimensional
            <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Collective</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>

                {/* Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>

                  {/* Specialty Badge */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
                    <span className="text-xs text-white/90 font-medium">{member.specialty}</span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Portal */}
        <div
          className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative max-w-4xl mx-auto p-12 rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(139, 92, 246, 0.1) 0%, 
                    rgba(236, 72, 153, 0.1) 50%,
                    rgba(6, 182, 212, 0.1) 100%
                  )
                `,
              }}
            />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                <span className="block">Our Creative</span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Philosophy</span>
              </h3>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                "We believe that true creativity exists at the intersection of impossibility and imagination. Every pixel we place, every
                line we code, every brand we birth is a portal to worlds that didn't exist before we dreamed them into being."
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {["Transcendence", "Innovation", "Imagination", "Transformation"].map((value, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-white/90 font-medium group-hover:text-white transition-colors">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
