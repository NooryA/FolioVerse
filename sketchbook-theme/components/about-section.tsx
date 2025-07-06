"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, Palette, Coffee, Heart, Zap, Target, Lightbulb, Star, Award } from "lucide-react";

export function AboutSection() {
  const [isDrawingProfile, setIsDrawingProfile] = useState(false);
  const [skillsRevealed, setSkillsRevealed] = useState(false);
  const [currentSketchPage, setCurrentSketchPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDrawingProfile(true);
      setTimeout(() => setSkillsRevealed(true), 1500);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "Frontend Magic", icon: "🎨", level: 95, color: "#ec4899" },
    { name: "Backend Wizardry", icon: "⚡", level: 90, color: "#3b82f6" },
    { name: "UI/UX Design", icon: "✨", level: 85, color: "#f59e0b" },
    { name: "Problem Solving", icon: "🧩", level: 92, color: "#10b981" },
    { name: "Coffee Brewing", icon: "☕", level: 100, color: "#8b5cf6" },
    { name: "Creative Thinking", icon: "💡", level: 88, color: "#ef4444" },
  ];

  const personalityTraits = [
    "Curious Explorer 🔍",
    "Code Poet 📝",
    "Pixel Perfectionist 🎯",
    "Night Owl 🦉",
    "Caffeine Powered ☕",
    "Dream Chaser ✨",
  ];

  const SkillBar = ({ skill, index }: { skill: (typeof skills)[0]; index: number }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="handwritten text-lg flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="handwritten text-sm text-gray-600">{skill.level}%</span>
      </div>
      <div className="relative">
        <div className="w-full h-3 bg-gray-200 rounded-full sketch-border">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: 0.8 + index * 0.1, duration: 1.2, ease: "easeOut" }}
          />
        </div>
        {/* Hand-drawn progress indicator */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.5 + index * 0.1, duration: 0.5, type: "spring" }}
        >
          <Star className="w-3 h-3 text-yellow-700" />
        </motion.div>
      </div>
    </motion.div>
  );

  const ProfileSketch = () => (
    <motion.div
      className="relative w-64 h-64 bg-paper sketch-border p-4 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile sketch placeholder */}
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
        {/* Animated sketch lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Face outline */}
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            stroke="#374151"
            strokeWidth="2"
            fill="none"
            strokeDasharray="400"
            strokeDashoffset="400"
            initial={{ strokeDashoffset: 400 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
          />

          {/* Eyes */}
          <motion.circle
            cx="85"
            cy="85"
            r="3"
            fill="#374151"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.3 }}
          />
          <motion.circle
            cx="115"
            cy="85"
            r="3"
            fill="#374151"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.3 }}
          />

          {/* Smile */}
          <motion.path
            d="M 85 120 Q 100 135 115 120"
            stroke="#374151"
            strokeWidth="2"
            fill="none"
            strokeDasharray="50"
            strokeDashoffset="50"
            initial={{ strokeDashoffset: 50 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: 2.9, duration: 0.8, ease: "easeInOut" }}
          />

          {/* Hair */}
          <motion.path
            d="M 60 70 Q 100 40 140 70"
            stroke="#374151"
            strokeWidth="2"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: 3.2, duration: 1, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Doodle decorations around the sketch */}
        <motion.div
          className="absolute -top-3 -right-3 text-2xl"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          💭
        </motion.div>
        <motion.div
          className="absolute -bottom-3 -left-3 text-2xl"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 3.7, duration: 0.5 }}
        >
          ✨
        </motion.div>
      </div>

      {/* Signature */}
      <motion.div
        className="absolute -bottom-6 -right-6 handwritten text-sm text-gray-500 bg-paper p-2 rounded transform rotate-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        - Self Portrait
      </motion.div>
    </motion.div>
  );

  return (
    <section id="about" className="min-h-screen paper-texture notebook-lines margin-line py-16">
      <div className="container mx-auto px-8 ml-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="handwritten-bold text-6xl md:text-7xl mb-4 scribble-underline">About the Artist</h2>
          <p className="handwritten text-xl text-gray-600">Sketching stories through code and pixels</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile and Bio */}
          <div className="space-y-8">
            {/* Profile Sketch */}
            <ProfileSketch />

            {/* Bio */}
            <motion.div
              className="bg-paper sketch-border p-8 torn-paper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h3
                className="handwritten-bold text-3xl mb-4 text-sketch-red"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Hello, I'm a Creative Developer! 👋
              </motion.h3>
              <motion.p
                className="handwritten text-lg text-gray-700 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                I'm passionate about crafting digital experiences that blend creativity with functionality. With a background in both design
                and development, I love bringing ideas to life through clean code and beautiful interfaces.
              </motion.p>
              <motion.p
                className="handwritten text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                When I'm not coding, you'll find me sketching new ideas, exploring the latest design trends, or brewing the perfect cup of
                coffee. I believe that great software is like art - it should inspire and delight.
              </motion.p>
            </motion.div>

            {/* Personality Traits */}
            <motion.div
              className="sticky-note p-6"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: -2 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <h4 className="handwritten-bold text-xl mb-4">My Personality Traits</h4>
              <div className="space-y-2">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={trait}
                    className="handwritten text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  >
                    {trait}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <motion.div
              className="bg-paper sketch-border p-8 ink-splatter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h3 className="handwritten-bold text-3xl mb-8 text-sketch-blue">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Achievement Badges */}
            <motion.div
              className="bg-paper sketch-border p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="handwritten-bold text-2xl mb-6 text-sketch-green">Achievement Unlocked! 🏆</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 bg-yellow-50 rounded-lg sketch-hover"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="handwritten text-sm">Design Master</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-blue-50 rounded-lg sketch-hover"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7, duration: 0.5 }}
                >
                  <div className="text-3xl mb-2">💻</div>
                  <div className="handwritten text-sm">Code Ninja</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-green-50 rounded-lg sketch-hover"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.9, duration: 0.5 }}
                >
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="handwritten text-sm">Innovation Pro</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-purple-50 rounded-lg sketch-hover"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.1, duration: 0.5 }}
                >
                  <div className="text-3xl mb-2">☕</div>
                  <div className="handwritten text-sm">Coffee Addict</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className="bg-paper sketch-border p-6 doodle-heart"
              initial={{ opacity: 0, rotate: 3 }}
              animate={{ opacity: 1, rotate: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <h4 className="handwritten-bold text-xl mb-4">Fun Facts</h4>
              <div className="space-y-3">
                <div className="handwritten text-lg">☕ Coffee cups per day: 4-6</div>
                <div className="handwritten text-lg">🎵 Favorite coding music: Lo-fi hip hop</div>
                <div className="handwritten text-lg">🌙 Productive hours: 10 PM - 2 AM</div>
                <div className="handwritten text-lg">🎯 Favorite IDE: VS Code</div>
                <div className="handwritten text-lg">🎨 Design inspiration: Nature & Art</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Doodles */}
        <motion.div
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <motion.div className="text-4xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
            🎨
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
            💻
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
            ☕
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}>
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
