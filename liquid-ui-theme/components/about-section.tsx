"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, Palette, Lightbulb, Target, Zap, Heart, Coffee, Sparkles, User, Award, Rocket, Star } from "lucide-react";

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [blobPositions, setBlobPositions] = useState<Array<{ x: number; y: number; scale: number }>>([]);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const skills = [
    {
      icon: Code,
      name: "Frontend Development",
      level: 95,
      color: "from-blue-400 to-cyan-500",
      description: "Creating responsive, interactive user interfaces with modern frameworks",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      level: 88,
      color: "from-purple-400 to-pink-500",
      description: "Crafting beautiful, intuitive designs that enhance user experience",
    },
    {
      icon: Lightbulb,
      name: "Creative Solutions",
      level: 92,
      color: "from-yellow-400 to-orange-500",
      description: "Innovative problem-solving and out-of-the-box thinking",
    },
    {
      icon: Target,
      name: "Project Management",
      level: 85,
      color: "from-green-400 to-emerald-500",
      description: "Efficiently managing timelines, resources, and deliverables",
    },
  ];

  const achievements = [
    { icon: Award, label: "5+ Years Experience", value: "2019-2024" },
    { icon: Rocket, label: "50+ Projects Completed", value: "Happy Clients" },
    { icon: Star, label: "98% Client Satisfaction", value: "Quality Work" },
    { icon: Coffee, label: "1000+ Cups of Coffee", value: "Fuel for Code" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const generateBlobPositions = () => {
      const positions = [];
      for (let i = 0; i < 6; i++) {
        positions.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0.5 + Math.random() * 0.8,
        });
      }
      setBlobPositions(positions);
    };

    generateBlobPositions();
    const blobInterval = setInterval(generateBlobPositions, 8000);

    return () => {
      clearInterval(blobInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const skillVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
      }}
    >
      {/* Subtle Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow Moving Ambient Blobs */}
        {blobPositions.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute liquid-morph opacity-15"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${100 + index * 25}px`,
              height: `${100 + index * 25}px`,
              background: `linear-gradient(${45 + index * 60}deg, 
                rgba(6, 182, 212, 0.2) 0%, 
                rgba(139, 92, 246, 0.2) 50%, 
                rgba(59, 130, 246, 0.2) 100%)`,
              filter: `blur(${15 + index * 3}px)`,
              transform: `translate(-50%, -50%) scale(${blob.scale})`,
            }}
            animate={{
              scale: [blob.scale, blob.scale * 1.2, blob.scale],
              rotate: [0, 180, 360],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Gentle Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div className="max-w-6xl mx-auto relative z-10" variants={containerVariants} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-16 h-16 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="h-1 w-24 liquid-morph liquid-gradient rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 liquid-text-gradient">About Me</h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate <span className="liquid-text-gradient font-semibold">creative developer</span> who loves crafting unique
            digital experiences with <span className="liquid-text-gradient font-semibold">fluid design</span> and innovative solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Profile Card */}
            <motion.div
              className="liquid-card liquid-hover group cursor-pointer"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              onHoverStart={() => setActiveSkill(null)}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-20 h-20 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow flex-shrink-0"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold liquid-text-gradient mb-3">Creative Developer & Designer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With over 5 years of experience in web development and design, I specialize in creating immersive digital experiences
                    that combine beautiful aesthetics with seamless functionality. My passion lies in pushing the boundaries of what's
                    possible in modern web development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div className="liquid-card liquid-hover group" whileHover={{ scale: 1.02, rotateY: -5 }} variants={itemVariants}>
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 liquid-morph bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center liquid-shadow flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 liquid-text-gradient">Design Philosophy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe that great design is not just about making things look beautiful—it's about creating meaningful connections
                    between users and digital experiences. Every pixel, every animation, and every interaction should serve a purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Approach Card */}
            <motion.div className="liquid-card liquid-hover group" whileHover={{ scale: 1.02, rotateY: 5 }} variants={itemVariants}>
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 liquid-morph bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center liquid-shadow flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 liquid-text-gradient">My Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I approach every project with curiosity and creativity, combining technical expertise with artistic vision. From concept
                    to deployment, I ensure that every detail contributes to an exceptional user experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Skills Section */}
            <div className="liquid-card liquid-perspective">
              <h3 className="text-2xl font-bold mb-8 liquid-text-gradient">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group cursor-pointer"
                    variants={skillVariants}
                    onHoverStart={() => setActiveSkill(index)}
                    onHoverEnd={() => setActiveSkill(null)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`w-12 h-12 liquid-morph bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center liquid-shadow`}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                      </motion.div>
                    </div>

                    {/* Skill Description */}
                    <motion.p
                      className="text-sm text-gray-600 mt-2 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeSkill === index ? "auto" : 0,
                        opacity: activeSkill === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="liquid-card liquid-hover liquid-tilt group text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-3 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-lg font-bold liquid-text-gradient mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-600">{achievement.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div className="inline-block liquid-card liquid-hover group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="flex items-center gap-4 px-8 py-6">
              <motion.div
                className="w-12 h-12 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-left">
                <div className="text-xl font-bold liquid-text-gradient">Ready to create something amazing?</div>
                <div className="text-gray-600">Let's bring your vision to life with liquid design</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
