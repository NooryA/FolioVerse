"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, ExternalLink, Github, Star, Calendar, Users, Award } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "Complete Collection" },
    { id: "research", name: "Research Papers" },
    { id: "digital", name: "Digital Manuscripts" },
    { id: "classical", name: "Classical Studies" },
    { id: "modern", name: "Modern Interpretations" },
  ];

  const manuscripts = [
    {
      id: 1,
      title: "Digital Renaissance: A Study in Modern Web Architecture",
      subtitle: "An Exploration of Classical Design Principles in Contemporary Development",
      category: "research",
      year: "MMXXIV",
      journal: "Journal of Digital Humanities",
      status: "Published",
      citations: 47,
      collaborators: 3,
      abstract:
        "This comprehensive study examines the intersection of classical design philosophy and modern web development practices, proposing a new framework for creating digitally native experiences that honor traditional aesthetic principles.",
      technologies: ["React", "TypeScript", "Renaissance CSS", "Classical Grid"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Editor's Choice",
    },
    {
      id: 2,
      title: "The Codex of Interactive Narratives",
      subtitle: "Storytelling Through Dynamic User Interfaces",
      category: "digital",
      year: "MMXXIII",
      journal: "Digital Arts Quarterly",
      status: "Peer Reviewed",
      citations: 23,
      collaborators: 2,
      abstract:
        "An innovative approach to web development that treats each user interface as a chapter in an ongoing narrative, creating immersive experiences through thoughtful interaction design and literary structure.",
      technologies: ["Next.js", "Framer Motion", "Narrative Engine", "Story Parser"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Innovation Award",
    },
    {
      id: 3,
      title: "Scholarly Database Management System",
      subtitle: "Preserving Academic Knowledge for Future Generations",
      category: "classical",
      year: "MMXXIII",
      journal: "Academic Computing Review",
      status: "In Review",
      citations: 15,
      collaborators: 5,
      abstract:
        "A comprehensive system designed to catalog, preserve, and provide access to scholarly works, combining traditional library science with modern database technologies to ensure knowledge preservation.",
      technologies: ["PostgreSQL", "Node.js", "Archive.js", "Metadata Standards"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Fellowship Grant",
    },
    {
      id: 4,
      title: "Virtual Reading Room Platform",
      subtitle: "Bringing the Academy into the Digital Age",
      category: "modern",
      year: "MMXXII",
      journal: "Educational Technology Today",
      status: "Published",
      citations: 31,
      collaborators: 4,
      abstract:
        "A virtual environment that recreates the atmosphere and functionality of traditional reading rooms while leveraging modern technology to enhance the research and learning experience.",
      technologies: ["Three.js", "WebRTC", "Virtual Reality", "Spatial Audio"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Best Paper Award",
    },
    {
      id: 5,
      title: "Typography and Readability in Digital Humanities",
      subtitle: "The Art of Presenting Text in Electronic Media",
      category: "research",
      year: "MMXXII",
      journal: "Design & Scholarship Review",
      status: "Published",
      citations: 38,
      collaborators: 1,
      abstract:
        "An extensive analysis of how classical typography principles can be adapted for digital media to improve readability and enhance the scholarly reading experience.",
      technologies: ["CSS Typography", "Font Engineering", "Reading Analytics", "Eye Tracking"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Typographic Excellence",
    },
    {
      id: 6,
      title: "The Digital Scriptorium",
      subtitle: "Collaborative Document Creation and Annotation",
      category: "digital",
      year: "MMXXI",
      journal: "Collaborative Research Quarterly",
      status: "Published",
      citations: 19,
      collaborators: 6,
      abstract:
        "A platform that enables collaborative scholarly writing and annotation, inspired by medieval scriptoriums but enhanced with modern collaborative technologies and version control.",
      technologies: ["React", "Operational Transform", "CRDTs", "WebSockets"],
      github: "https://github.com/",
      demo: "https://demo.com/",
      recognition: "Collaboration Award",
    },
  ];

  const filteredManuscripts = selectedCategory === "all" ? manuscripts : manuscripts.filter((m) => m.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Academic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="academia-candle-glow absolute top-20 right-10 w-24 h-24 opacity-20" />
        <div className="academia-candle-glow absolute bottom-32 left-20 w-16 h-16 opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="academia-title text-5xl md:text-6xl mb-4">Published Works & Research</h2>
          <p className="academia-body text-lg max-w-3xl mx-auto">
            A collection of scholarly contributions to the field of digital humanities, exploring the intersection of classical knowledge
            and modern technology.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-academia-gold to-transparent mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="academia-paper p-2 inline-flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`academia-button text-sm ${
                  selectedCategory === category.id ? "bg-academia-gold text-academia-ink" : "bg-academia-cream text-academia-text-primary"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredManuscripts.map((manuscript, index) => (
            <motion.div
              key={manuscript.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(manuscript.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5, rotate: Math.random() * 2 - 1 }}
              className="relative"
            >
              <div className="academia-paper h-full relative overflow-hidden">
                {/* Manuscript Header */}
                <div className="border-b border-academia-sepia pb-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-mono text-academia-sepia">
                      {manuscript.year} • {manuscript.journal}
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded ${
                        manuscript.status === "Published"
                          ? "bg-academia-forest text-white"
                          : manuscript.status === "In Review"
                          ? "bg-academia-brass text-academia-ink"
                          : "bg-academia-burgundy text-white"
                      }`}
                    >
                      {manuscript.status}
                    </div>
                  </div>

                  <h3 className="academia-heading text-xl mb-2 leading-tight">{manuscript.title}</h3>
                  <p className="academia-body text-sm italic text-academia-text-secondary">{manuscript.subtitle}</p>
                </div>

                {/* Manuscript Content */}
                <div className="space-y-4">
                  {/* Abstract */}
                  <p className="academia-body text-sm leading-relaxed">{manuscript.abstract}</p>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="academia-catalog-card p-2">
                      <Star className="w-4 h-4 text-academia-gold mx-auto mb-1" />
                      <div className="text-xs font-semibold">{manuscript.citations}</div>
                      <div className="text-xs text-academia-text-muted">Citations</div>
                    </div>
                    <div className="academia-catalog-card p-2">
                      <Users className="w-4 h-4 text-academia-sepia mx-auto mb-1" />
                      <div className="text-xs font-semibold">{manuscript.collaborators}</div>
                      <div className="text-xs text-academia-text-muted">Authors</div>
                    </div>
                    <div className="academia-catalog-card p-2">
                      <Award className="w-4 h-4 text-academia-gold mx-auto mb-1" />
                      <div className="text-xs font-semibold text-center leading-tight">{manuscript.recognition}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {manuscript.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-academia-cream rounded font-mono text-academia-text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <motion.div
                    className="flex gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === manuscript.id ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={manuscript.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="academia-button text-xs flex items-center gap-1 flex-1 justify-center"
                    >
                      <Github className="w-3 h-3" />
                      Repository
                    </motion.a>
                    <motion.a
                      href={manuscript.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="academia-button text-xs flex items-center gap-1 flex-1 justify-center"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Work
                    </motion.a>
                  </motion.div>
                </div>

                {/* Wax Seal */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-academia-burgundy rounded-full flex items-center justify-center border-4 border-academia-paper">
                  <BookOpen className="w-4 h-4 text-academia-gold" />
                </div>

                {/* Ink Blot */}
                {hoveredProject === manuscript.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    className="absolute bottom-2 right-4 w-3 h-3 bg-academia-ink rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="academia-scroll text-center"
        >
          <h3 className="academia-heading text-2xl mb-6 flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6 text-academia-gold" />
            Research Impact & Metrics
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Publications", value: "24", suffix: "" },
              { label: "Citations Received", value: "347", suffix: "+" },
              { label: "Research Hours", value: "5.2K", suffix: "" },
              { label: "Collaboration Networks", value: "12", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="academia-catalog-card"
              >
                <div className="text-2xl font-bold text-academia-sepia mb-1">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-academia-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
