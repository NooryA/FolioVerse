"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, Coffee, Pen, Award, Clock, Quote } from "lucide-react";

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
        {/* Section Title with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="academia-title text-5xl md:text-6xl mb-4">About the Scholar</h2>
          <div className="academia-typewriter text-xl text-center max-w-2xl mx-auto academia-heading">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-academia-gold to-transparent mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <blockquote className="academia-quote text-center">{quotes[currentQuote]}</blockquote>
              <p className="text-center mt-4 academia-body text-sm">— From the Scholar's Collection, Volume {currentQuote + 1}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Subjects & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="academia-heading text-2xl mb-6 flex items-center gap-2">
              <Coffee className="w-6 h-6 text-academia-gold" />
              Areas of Expertise
            </h3>

            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                className="academia-catalog-card"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <subject.icon className="w-5 h-5 text-academia-sepia" />
                    <div>
                      <h4 className="font-semibold text-academia-text-primary">{subject.name}</h4>
                      <p className="text-sm text-academia-text-secondary">
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
              transition={{ delay: 0.4 }}
              className="academia-paper text-center"
            >
              <Clock className="w-8 h-8 text-academia-gold mx-auto mb-2" />
              <h4 className="academia-heading text-lg mb-2">Hours of Study</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-academia-sepia">10,000+</div>
                  <div className="text-sm text-academia-text-secondary">Coding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-academia-sepia">5,000+</div>
                  <div className="text-sm text-academia-text-secondary">Research</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Academic Timeline */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
          <h3 className="academia-title text-3xl text-center mb-12">Academic & Professional Manuscripts</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-academia-gold via-academia-brass to-academia-sepia" />

            {manuscripts.map((manuscript, index) => (
              <motion.div
                key={manuscript.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-12`}
              >
                <motion.div whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }} className="academia-paper w-5/12 relative">
                  <div className="text-sm text-academia-sepia mb-1 font-mono">Anno Domini {manuscript.year}</div>
                  <h4 className="academia-heading text-lg mb-1">{manuscript.title}</h4>
                  <div className="text-academia-text-secondary text-sm mb-2 italic">{manuscript.institution}</div>
                  <p className="academia-body text-sm mb-2">{manuscript.description}</p>
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

        {/* Bottom Shelf */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="academia-shelf"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="academia-book-spine h-24 w-6 flex-shrink-0"
              animate={{
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              Vol. {i + 1}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
