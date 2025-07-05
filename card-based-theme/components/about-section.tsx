"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Palette,
  Zap,
  Coffee,
  MapPin,
  Calendar,
  Star,
  Trophy,
  Users,
  Target,
  Heart,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500", icon: <Code className="w-5 h-5" /> },
    { name: "React", level: 90, color: "bg-blue-500", icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", level: 88, color: "bg-blue-600", icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", level: 85, color: "bg-green-600", icon: <Code className="w-5 h-5" /> },
    { name: "Python", level: 80, color: "bg-yellow-600", icon: <Code className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 75, color: "bg-purple-500", icon: <Palette className="w-5 h-5" /> },
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications with React and TypeScript.",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub",
      period: "2020 - 2022",
      description: "Built scalable web applications using modern JavaScript frameworks.",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Frontend Developer",
      company: "WebAgency",
      period: "2019 - 2020",
      description: "Created responsive websites and interactive user interfaces.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const achievements = [
    { title: "CSS Design Awards", description: "Website of the Day", icon: <Trophy className="w-6 h-6" />, color: "bg-yellow-500" },
    { title: "Open Source Contributor", description: "50+ contributions", icon: <Star className="w-6 h-6" />, color: "bg-blue-500" },
    { title: "Team Lead", description: "Managing 5+ developers", icon: <Users className="w-6 h-6" />, color: "bg-green-500" },
    { title: "Client Satisfaction", description: "98% positive feedback", icon: <Heart className="w-6 h-6" />, color: "bg-red-500" },
  ];

  const personalInfo = [
    { label: "Location", value: "San Francisco, CA", icon: <MapPin className="w-5 h-5" /> },
    { label: "Experience", value: "5+ Years", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Education", value: "CS Degree", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Languages", value: "English, Spanish", icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate developer creating innovative digital solutions with modern technologies
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="Profile"
                      className="w-18 h-18 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Alex Rodriguez</h3>
                    <p className="text-purple-600 font-medium">Full-Stack Developer</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience building modern web applications. I love creating
                  user-friendly interfaces and scalable backend solutions that solve real-world problems.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  My expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Python,
                  and cloud platforms like AWS and Azure.
                </p>

                <div className="flex items-center gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download CV
                  </button>
                  <button className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-xl font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                    Contact Me
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-500">{info.icon}</div>
                      <span className="text-sm font-medium text-gray-500">{info.label}</span>
                    </div>
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${skill.color} p-2 rounded-lg text-white`}>{skill.icon}</div>
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Proficiency</span>
                    <span className="font-semibold text-gray-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredCard === index ? `${skill.level}%` : "0%",
                        transitionDelay: hoveredCard === index ? "200ms" : "0ms",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className={`md:w-2 bg-gradient-to-b ${exp.color}`} />
                  <div className="flex-1 p-6">
                    <div className="md:flex md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                        <p className="text-purple-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="md:text-right mt-2 md:mt-0">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${achievement.color} w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts Card */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8" />
              <h4 className="font-bold text-xl">Coffee Level</h4>
            </div>
            <p className="text-3xl font-bold mb-2">∞</p>
            <p className="opacity-90">Cups consumed while coding</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8" />
              <h4 className="font-bold text-xl">Projects</h4>
            </div>
            <p className="text-3xl font-bold mb-2">100+</p>
            <p className="opacity-90">Successfully completed</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <h4 className="font-bold text-xl">Availability</h4>
            </div>
            <p className="text-xl font-bold mb-2">Open</p>
            <p className="opacity-90">Ready for new projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
