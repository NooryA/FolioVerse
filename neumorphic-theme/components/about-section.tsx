"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Zap, Award, Users, MapPin, Mail } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "Frontend Development", level: 92, icon: Code, color: "#667eea" },
    { name: "UI/UX Design", level: 88, icon: Palette, color: "#764ba2" },
    { name: "Backend Development", level: 85, icon: Database, color: "#f093fb" },
    { name: "Performance Optimization", level: 90, icon: Zap, color: "#4facfe" },
  ];

  const achievements = [
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Zap },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="neuro-heading text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <p className="neuro-body text-xl max-w-3xl mx-auto">
            I&apos;m a passionate developer who believes in creating beautiful, intuitive, and user-centered digital experiences through
            thoughtful design and clean code.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="neuro-card">
              <h3 className="neuro-heading text-2xl mb-6">My Story</h3>
              <div className="space-y-4">
                <p className="neuro-body">
                  I started my journey in web development with a passion for creating digital experiences that feel natural and intuitive.
                  My approach combines technical expertise with design sensibility.
                </p>
                <p className="neuro-body">
                  I believe that the best interfaces are the ones that feel effortless to use. That&apos;s why I&apos;m drawn to neumorphic
                  design - it creates interfaces that feel tactile and real, bridging the gap between digital and physical.
                </p>
                <p className="neuro-body">
                  When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open source projects, or
                  mentoring aspiring developers.
                </p>
              </div>
            </div>

            <div className="neuro-card">
              <h3 className="neuro-heading text-2xl mb-6">Personal Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="neuro-icon-container w-12 h-12">
                    <MapPin className="w-5 h-5 text-[#667eea]" />
                  </div>
                  <div>
                    <p className="neuro-body font-medium">Location</p>
                    <p className="neuro-body text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="neuro-icon-container w-12 h-12">
                    <Mail className="w-5 h-5 text-[#667eea]" />
                  </div>
                  <div>
                    <p className="neuro-body font-medium">Email</p>
                    <p className="neuro-body text-gray-600">hello@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="neuro-card">
              <h3 className="neuro-heading text-2xl mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="neuro-icon-container w-10 h-10">
                          <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                        </div>
                        <span className="neuro-body font-medium">{skill.name}</span>
                      </div>
                      <span className="neuro-body text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="neuro-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="neuro-progress-bar"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="neuro-card">
              <h3 className="neuro-heading text-2xl mb-6">Values</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#667eea]" />
                  <span className="neuro-body">User-centered design approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#764ba2]" />
                  <span className="neuro-body">Clean, maintainable code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f093fb]" />
                  <span className="neuro-body">Continuous learning and growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4facfe]" />
                  <span className="neuro-body">Collaborative team spirit</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="neuro-heading text-3xl text-center mb-12">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="neuro-card text-center"
              >
                <div className="neuro-icon-container mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-[#667eea]" />
                </div>
                <div className="neuro-heading text-3xl font-bold mb-2" style={{ color: "#667eea" }}>
                  {achievement.number}
                </div>
                <p className="neuro-body text-sm">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neuro-card text-center"
        >
          <h3 className="neuro-heading text-2xl mb-4">Let&apos;s Work Together</h3>
          <p className="neuro-body mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind
            or just want to chat about technology, I&apos;d love to hear from you.
          </p>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="neuro-button-accent">
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
