"use client";

import { useState, useEffect } from "react";
import { Code, Palette, Zap, Award, Coffee, Users, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const parallaxSpeed = scrollY * 0.3;
  const skills = [
    { name: "React/Next.js", level: 95, icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", level: 90, icon: <Code className="w-6 h-6" /> },
    { name: "Three.js", level: 85, icon: <Zap className="w-6 h-6" /> },
    { name: "UI/UX Design", level: 80, icon: <Palette className="w-6 h-6" /> },
    { name: "WebGL", level: 75, icon: <Zap className="w-6 h-6" /> },
    { name: "Node.js", level: 85, icon: <Code className="w-6 h-6" /> },
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8 text-yellow-400" />, title: "CSS Design Awards", desc: "Winner 2023" },
    { icon: <Users className="w-8 h-8 text-blue-400" />, title: "Client Satisfaction", desc: "98% Rating" },
    { icon: <Target className="w-8 h-8 text-green-400" />, title: "Project Success", desc: "100+ Completed" },
    { icon: <Lightbulb className="w-8 h-8 text-purple-400" />, title: "Innovation", desc: "Tech Pioneer" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="gradient-orb orb-accent w-72 h-72 top-20 right-20 floating-element"
          style={{ transform: `translateY(${parallaxSpeed}px) translateZ(100px)` }}
        />
        <div
          className="gradient-orb orb-primary w-48 h-48 bottom-40 left-10 floating-element"
          style={{ transform: `translateY(${parallaxSpeed * 1.5}px) translateZ(150px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-3d">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="depth-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Alex Smith</h3>
                  <p className="text-purple-400">3D Frontend Developer</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate frontend developer with over 5 years of experience creating immersive digital experiences. My expertise
                lies in combining cutting-edge 3D web technologies with modern design principles to build unforgettable user experiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new design trends, experimenting with emerging technologies, or contributing
                to open-source projects. I believe in the power of creativity and innovation to solve complex problems.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4" />
                  <span>Coffee Enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Team Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Detail Oriented</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="depth-card text-center">
                  <div className="mb-3 flex justify-center">{achievement.icon}</div>
                  <h4 className="font-bold text-white mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8">
            <div className="depth-card">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-purple-400">{skill.icon}</div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 group-hover:from-pink-400 group-hover:to-purple-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="depth-card">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience & Journey</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-400 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-2 top-2"></div>
                  <div className="mb-4">
                    <h4 className="font-bold text-white">Senior Frontend Developer</h4>
                    <p className="text-purple-400 text-sm">TechCorp • 2022 - Present</p>
                    <p className="text-gray-400 text-sm mt-2">Leading 3D web development initiatives and mentoring junior developers.</p>
                  </div>
                </div>

                <div className="border-l-2 border-pink-400 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-pink-400 rounded-full -left-2 top-2"></div>
                  <div className="mb-4">
                    <h4 className="font-bold text-white">Frontend Developer</h4>
                    <p className="text-pink-400 text-sm">DesignStudio • 2020 - 2022</p>
                    <p className="text-gray-400 text-sm mt-2">Specialized in creating interactive experiences and UI/UX design.</p>
                  </div>
                </div>

                <div className="border-l-2 border-indigo-400 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-indigo-400 rounded-full -left-2 top-2"></div>
                  <div className="mb-4">
                    <h4 className="font-bold text-white">Junior Developer</h4>
                    <p className="text-indigo-400 text-sm">StartupHub • 2019 - 2020</p>
                    <p className="text-gray-400 text-sm mt-2">Built responsive websites and learned modern development practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="depth-card text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="depth-card text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="depth-card text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="depth-card text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
