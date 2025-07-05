"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Mail, Calendar, Code, Palette, Database, Zap } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Backend Development", level: 82, icon: Database },
    { name: "Performance Optimization", level: 90, icon: Zap },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovation Inc.",
      description: "Leading frontend architecture and design system implementation for enterprise applications.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained full-stack applications with focus on performance and user experience.",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Built responsive web applications and interactive user interfaces for diverse clients.",
      skills: ["JavaScript", "Vue.js", "CSS", "Figma"],
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="minimal-section">
      <div className="minimal-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-text-center mb-16"
        >
          <h2 className="minimal-heading-2 mb-4">About Me</h2>
          <p className="minimal-body-large max-w-2xl mx-auto">
            I'm a passionate developer who believes in creating beautiful, functional, and user-centered digital experiences through clean
            code and thoughtful design.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="minimal-grid minimal-grid-cols-2 mb-20">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="minimal-card-subtle">
              <h3 className="minimal-heading-3 mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="minimal-flex minimal-flex-gap-small">
                  <MapPin className="w-5 h-5 text-minimal-medium-gray mt-0.5" />
                  <div>
                    <p className="minimal-body font-medium">San Francisco, CA</p>
                    <p className="minimal-body-small">Available for remote work</p>
                  </div>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <Mail className="w-5 h-5 text-minimal-medium-gray mt-0.5" />
                  <div>
                    <p className="minimal-body font-medium">hello@example.com</p>
                    <p className="minimal-body-small">Response within 24 hours</p>
                  </div>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <Calendar className="w-5 h-5 text-minimal-medium-gray mt-0.5" />
                  <div>
                    <p className="minimal-body font-medium">Available for projects</p>
                    <p className="minimal-body-small">Starting from next month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="minimal-card-subtle">
              <h3 className="minimal-heading-3 mb-6">Philosophy</h3>
              <p className="minimal-body mb-4">
                I believe that great software is built at the intersection of thoughtful design, clean code, and genuine user empathy. Every
                line of code should serve a purpose, and every interface should feel intuitive.
              </p>
              <p className="minimal-body">
                My approach is rooted in simplicity, accessibility, and performance. I strive to create experiences that users love and
                developers can maintain.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="/resume.pdf" className="minimal-button minimal-hover-lift w-full minimal-flex-center" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="minimal-card-subtle">
              <h3 className="minimal-heading-3 mb-6">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="minimal-flex minimal-flex-between">
                      <div className="minimal-flex minimal-flex-gap-small">
                        <skill.icon className="w-4 h-4 text-minimal-medium-gray mt-0.5" />
                        <span className="minimal-body font-medium">{skill.name}</span>
                      </div>
                      <span className="minimal-body-small">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-minimal-light-gray rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-minimal-accent h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="minimal-card-subtle">
              <h3 className="minimal-heading-3 mb-6">Current Focus</h3>
              <div className="space-y-3">
                <div className="minimal-flex minimal-flex-gap-small">
                  <div className="minimal-status-dot minimal-status-success" />
                  <span className="minimal-body">Building scalable React applications</span>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <div className="minimal-status-dot minimal-status-warning" />
                  <span className="minimal-body">Learning Three.js and WebGL</span>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <div className="minimal-status-dot minimal-status-success" />
                  <span className="minimal-body">Exploring AI/ML integration</span>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <div className="minimal-status-dot minimal-status-neutral" />
                  <span className="minimal-body">Contributing to open source</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="minimal-heading-2 minimal-text-center mb-12">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="minimal-card minimal-hover-lift"
              >
                <div className="minimal-flex minimal-flex-between mb-4">
                  <div>
                    <h4 className="minimal-heading-4 mb-1">{exp.title}</h4>
                    <p className="minimal-body-large text-minimal-accent">{exp.company}</p>
                  </div>
                  <div className="minimal-tag-accent">{exp.year}</div>
                </div>
                <p className="minimal-body mb-4">{exp.description}</p>
                <div className="minimal-flex minimal-flex-gap-small flex-wrap">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="minimal-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="minimal-heading-2 minimal-text-center mb-12">Achievements</h3>
          <div className="minimal-grid minimal-grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="minimal-card-flat minimal-text-center minimal-hover-scale"
              >
                <div className="minimal-heading-2 text-minimal-accent mb-2">{achievement.number}</div>
                <p className="minimal-body">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-card-subtle minimal-text-center"
        >
          <h3 className="minimal-heading-3 mb-4">Let's Work Together</h3>
          <p className="minimal-body mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about
            technology, I'd love to hear from you.
          </p>
          <motion.a href="#contact" className="minimal-button minimal-hover-lift" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
