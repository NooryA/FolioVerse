"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Coffee, Pen, Award, Clock, Quote, Feather, Code } from "lucide-react";

export function AboutSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const quotes = [
    "The only way to do great work is to love what you do.",
    "In the depths of winter, I finally learned there was in me an invincible summer.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "The future belongs to those who believe in the beauty of their dreams.",
  ];

  const typewriterText = "Scholar of Digital Arts & Modern Technologies";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < typewriterText.length) {
        setTypedText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(quoteTimer);
  }, [quotes.length]);

  const subjects = [
    { name: "Philosophy", level: "Master's", years: "4 years", icon: Quote },
    { name: "Literature", level: "Advanced", years: "6 years", icon: BookOpen },
    { name: "Web Development", level: "Expert", years: "8 years", icon: Pen },
    { name: "Design Theory", level: "Proficient", years: "5 years", icon: Award },
  ];

  const manuscripts = [
    {
      year: "2024",
      title: "Senior Software Architect",
      institution: "Tech Innovation Institute",
      description: "Leading digital transformation initiatives with classical design principles",
      achievement: "Magna Cum Laude",
    },
    {
      year: "2022",
      title: "Lead Frontend Developer",
      institution: "Creative Arts Academy",
      description: "Bridging the gap between traditional aesthetics and modern technology",
      achievement: "Dean's List",
    },
    {
      year: "2020",
      title: "Full Stack Developer",
      institution: "Digital Humanities Lab",
      description: "Preserving classical knowledge through innovative digital platforms",
      achievement: "Research Fellowship",
    },
    {
      year: "2018",
      title: "Junior Developer",
      institution: "Literary Tech Collective",
      description: "Beginning the journey of merging literature with code",
      achievement: "Promising Scholar",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Candle Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="academia-candle-glow absolute top-10 left-10 w-20 h-20 opacity-30" />
        <div className="academia-candle-glow absolute bottom-20 right-20 w-16 h-16 opacity-25" />
        <div className="academia-candle-glow absolute top-1/2 left-1/4 w-12 h-12 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Scholar's Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="academia-title text-5xl text-academia-gold mb-6">About the Scholar</h2>
          <p className="academia-body text-lg text-academia-gold max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital sanctum of knowledge and discovery. As a devoted scholar of the digital arts, I bridge the ancient wisdom
            of classical learning with the cutting-edge innovations of modern technology.
          </p>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="academia-catalog-card bg-academia-cream group hover:bg-academia-paper transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="academia-icon-container">
                    <subject.icon className="w-8 h-8 text-academia-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="academia-heading text-xl mb-3 text-academia-gold">{subject.name}</h3>
                    <p className="academia-body text-academia-gold leading-relaxed">
                      {subject.level} • {subject.years}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio Paper */}
            <div className="academia-paper academia-ink-blot">
              <h3 className="academia-heading text-2xl mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-academia-gold" />
                Personal Philosophy
              </h3>
              <p className="academia-body mb-4">
                In the grand library of existence, I have dedicated myself to the pursuit of knowledge that bridges the classical with the
                contemporary. My work represents a synthesis of timeless wisdom and cutting-edge innovation.
              </p>
              <p className="academia-body mb-4">
                Like the scholars of old who transcribed manuscripts by candlelight, I craft digital experiences with the same reverence for
                beauty, functionality, and intellectual rigor that defined the greatest academic traditions.
              </p>
              <p className="academia-body">
                Every line of code is a verse, every interface a canvas, and every project a thesis defending the belief that technology
                should elevate the human spirit.
              </p>
            </div>

            {/* Rotating Quotes */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="academia-scroll"
            >
              <blockquote className="academia-quote text-center text-academia-gold">{quotes[currentQuote]}</blockquote>
              <p className="text-center mt-4 academia-body text-sm text-academia-gold">
                — From the Scholar's Collection, Volume {currentQuote + 1}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Subjects & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="academia-heading text-2xl mb-6 flex items-center gap-2 text-academia-gold">
              <Coffee className="w-6 h-6 text-academia-gold" />
              Areas of Expertise
            </h3>

            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                className="academia-catalog-card bg-academia-cream"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <subject.icon className="w-5 h-5 text-academia-burgundy" />
                    <div>
                      <h4 className="font-semibold text-academia-gold">{subject.name}</h4>
                      <p className="text-sm text-academia-ink">
                        {subject.level} • {subject.years}
                      </p>
                    </div>
                  </div>
                  <div className="academia-book-spine text-xs p-2 h-16 w-6">{subject.name.charAt(0)}</div>
                </div>
              </motion.div>
            ))}

            {/* Study Hours Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="academia-paper text-center"
            >
              <Clock className="w-8 h-8 text-academia-gold mx-auto mb-2" />
              <h4 className="academia-heading text-lg mb-2 text-academia-gold">Hours of Study</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-academia-burgundy">10,000+</div>
                  <div className="text-sm text-academia-gold">Coding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-academia-burgundy">5,000+</div>
                  <div className="text-sm text-academia-gold">Research</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Academic Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="academia-title text-3xl text-center mb-12 text-academia-gold">Academic & Professional Manuscripts</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-academia-gold via-academia-brass to-academia-sepia" />

            {manuscripts.map((manuscript, index) => (
              <motion.div
                key={manuscript.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-12`}
              >
                <motion.div whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }} className="academia-paper w-5/12 relative">
                  <div className="text-sm text-academia-gold mb-1 font-mono">Anno Domini {manuscript.year}</div>
                  <h4 className="academia-heading text-lg mb-1">{manuscript.title}</h4>
                  <div className="text-academia-burgundy text-sm mb-2 italic font-semibold">{manuscript.institution}</div>
                  <p className="academia-body text-sm mb-2 text-academia-gold">{manuscript.description}</p>
                  <div className="text-xs text-academia-gold font-semibold">{manuscript.achievement}</div>

                  {/* Wax Seal */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-academia-burgundy rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-academia-gold" />
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div className="absolute left-1/2 transform -translate-x-1/2" whileHover={{ scale: 1.3 }}>
                  <div className="w-6 h-6 bg-academia-gold rounded-full border-4 border-academia-surface flex items-center justify-center">
                    <div className="w-2 h-2 bg-academia-sepia rounded-full" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Elegant Academic Library Wall - Complete Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="academia-title text-4xl text-academia-gold mb-4">Personal Library</h3>
            <p className="text-academia-gold opacity-80 text-lg">Curated Collection of Scholarly Works</p>
          </div>

          {/* Library Wall Container */}
          <div className="relative bg-gradient-to-b from-academia-charcoal via-academia-surface to-academia-charcoal rounded-2xl p-8 shadow-2xl border border-academia-gold border-opacity-20">
            {/* Classic Literature Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h4 className="text-academia-gold text-xl mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Classic Literature & Philosophy
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { title: "The Republic", author: "Plato", pages: "380", color: "bg-academia-burgundy" },
                  { title: "Hamlet", author: "Shakespeare", pages: "342", color: "bg-academia-forest" },
                  { title: "Divine Comedy", author: "Dante", pages: "798", color: "bg-academia-navy" },
                  { title: "Don Quixote", author: "Cervantes", pages: "1056", color: "bg-academia-brass" },
                  { title: "Paradise Lost", author: "Milton", pages: "453", color: "bg-academia-sepia" },
                  { title: "Odyssey", author: "Homer", pages: "541", color: "bg-academia-burgundy" },
                ].map((book, i) => (
                  <motion.div
                    key={i}
                    className={`${book.color} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    whileHover={{ y: -8, rotateY: 5 }}
                  >
                    <div className="h-32 flex flex-col justify-between">
                      <div>
                        <h5 className="text-academia-cream font-semibold text-sm mb-1 group-hover:text-academia-gold transition-colors">
                          {book.title}
                        </h5>
                        <p className="text-academia-cream opacity-70 text-xs">{book.author}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-academia-cream opacity-50 text-xs">{book.pages}p</span>
                        <div className="w-2 h-2 bg-academia-gold rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Scientific Works Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mb-12"
            >
              <h4 className="text-academia-gold text-xl mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Scientific & Mathematical Works
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { title: "Principia", author: "Newton", pages: "687", color: "bg-academia-navy" },
                  { title: "On the Origin of Species", author: "Darwin", pages: "502", color: "bg-academia-forest" },
                  { title: "Relativity", author: "Einstein", pages: "365", color: "bg-academia-burgundy" },
                  { title: "The Art of Computer Programming", author: "Knuth", pages: "3168", color: "bg-academia-brass" },
                  { title: "A Brief History of Time", author: "Hawking", pages: "256", color: "bg-academia-sepia" },
                  { title: "The Feynman Lectures", author: "Feynman", pages: "1552", color: "bg-academia-navy" },
                ].map((book, i) => (
                  <motion.div
                    key={i}
                    className={`${book.color} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    whileHover={{ y: -8, rotateY: -5 }}
                  >
                    <div className="h-32 flex flex-col justify-between">
                      <div>
                        <h5 className="text-academia-cream font-semibold text-sm mb-1 group-hover:text-academia-gold transition-colors">
                          {book.title}
                        </h5>
                        <p className="text-academia-cream opacity-70 text-xs">{book.author}</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-academia-cream opacity-50 text-xs">{book.pages}p</span>
                        <div className="w-2 h-2 bg-academia-gold rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Modern Technical References */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mb-8"
            >
              <h4 className="text-academia-gold text-xl mb-6 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Modern Technical References
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {[
                  { title: "Clean Code", author: "Martin", color: "bg-academia-forest" },
                  { title: "Design Patterns", author: "Gang of Four", color: "bg-academia-burgundy" },
                  { title: "You Don't Know JS", author: "Simpson", color: "bg-academia-navy" },
                  { title: "React Docs", author: "Meta Team", color: "bg-academia-brass" },
                  { title: "Next.js Guide", author: "Vercel", color: "bg-academia-sepia" },
                  { title: "TypeScript Handbook", author: "Microsoft", color: "bg-academia-forest" },
                  { title: "Node.js Best Practices", author: "Community", color: "bg-academia-burgundy" },
                  { title: "GraphQL Reference", author: "Facebook", color: "bg-academia-navy" },
                ].map((book, i) => (
                  <motion.div
                    key={i}
                    className={`${book.color} rounded-md p-3 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 + i * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="h-20 flex flex-col justify-between">
                      <div>
                        <h5 className="text-academia-cream font-medium text-xs mb-1 group-hover:text-academia-gold transition-colors">
                          {book.title}
                        </h5>
                        <p className="text-academia-cream opacity-60 text-xs">{book.author}</p>
                      </div>
                      <div className="w-1 h-1 bg-academia-gold rounded-full opacity-50 self-end"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reading Corner Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-academia-gold border-opacity-20"
            >
              <div className="flex items-center gap-2 text-academia-gold opacity-70">
                <Coffee className="w-5 h-5 text-academia-gold" />
                <span className="text-sm">Reading Corner</span>
              </div>

              <div className="flex items-center gap-2 text-academia-gold opacity-70">
                <Feather className="w-5 h-5 text-academia-gold" />
                <span className="text-sm">Research Notes</span>
              </div>

              <div className="flex items-center gap-2 text-academia-gold opacity-70">
                <Clock className="w-5 h-5 text-academia-gold" />
                <span className="text-sm">Study Sessions</span>
              </div>
            </motion.div>

            {/* Ambient lighting effects */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-academia-gold opacity-20 rounded-full"
                  style={{
                    left: `${10 + i * 7}%`,
                    top: `${15 + Math.sin(i * 0.5) * 40}%`,
                  }}
                  animate={{
                    y: [-20, -40, -20],
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.7,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Collection Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="text-center mt-8"
          >
            <p className="text-academia-gold text-lg italic font-medium mb-2">"Books are a uniquely portable magic" — Stephen King</p>
            <p className="text-academia-gold text-sm opacity-75">
              Personal Collection • Classical Literature, Scientific Works & Modern References
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
