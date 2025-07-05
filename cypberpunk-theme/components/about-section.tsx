"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Code, Database, Cpu, Terminal, Globe, Gamepad2, Eye } from "lucide-react";

export function AboutSection() {
  const [glitchText, setGlitchText] = useState("NEURAL_INTERFACE.exe");
  const [scanProgress, setScanProgress] = useState(0);

  const glitchTexts = ["NEURAL_INTERFACE.exe", "CYBER_DEVELOPER.dll", "MATRIX_CODER.sys", "DIGITAL_ARCHITECT.bin"];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(glitchTexts[Math.floor(Math.random() * glitchTexts.length)]);
    }, 3000);

    const scanInterval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(scanInterval);
    };
  }, []);

  const cyberSkills = [
    { name: "Neural Networks", level: 95, icon: Cpu, color: "#00ff9f" },
    { name: "Data Mining", level: 88, icon: Database, color: "#ff0080" },
    { name: "Code Injection", level: 92, icon: Code, color: "#0080ff" },
    { name: "System Override", level: 85, icon: Terminal, color: "#8000ff" },
  ];

  const systemLogs = [
    { time: "2024.03.15 14:23:07", event: "LOGIN SUCCESSFUL", status: "success" },
    { time: "2024.03.15 14:23:12", event: "NEURAL LINK ESTABLISHED", status: "success" },
    { time: "2024.03.15 14:23:15", event: "SCANNING MEMORY BANKS...", status: "warning" },
    { time: "2024.03.15 14:23:18", event: "FIREWALL BYPASSED", status: "error" },
    { time: "2024.03.15 14:23:21", event: "ACCESSING MAINFRAME...", status: "success" },
  ];

  const achievements = [
    { count: "1337", label: "LINES HACKED", icon: Code },
    { count: "42", label: "SYSTEMS BREACHED", icon: Zap },
    { count: "∞", label: "POSSIBILITIES", icon: Eye },
    { count: "256", label: "NEURAL LINKS", icon: Cpu },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden cyber-grid-bg">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg w-full h-full" />
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 scan-line opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-orbitron font-black mb-6 cyber-text"
            animate={{
              textShadow: ["0 0 20px #00ff9f", "0 0 40px #00ff9f, 0 0 60px #ff0080", "0 0 20px #00ff9f"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ABOUT.EXE
          </motion.h2>

          <motion.div
            className="text-2xl md:text-3xl font-jetbrains text-cyan-400 mb-4 typing-effect"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {glitchText}
          </motion.div>

          <div className="w-64 h-2 mx-auto bg-gray-900 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-pink-500" style={{ width: `${scanProgress}%` }} />
          </div>
          <p className="text-sm text-gray-400 mt-2 font-jetbrains">SYSTEM SCAN: {scanProgress}% COMPLETE</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Bio Data */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio Panel */}
            <div className="cyber-border p-6 rounded-lg holographic relative">
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h3 className="text-2xl font-orbitron text-cyan-400 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                BIO_DATA.txt
              </h3>
              <div className="space-y-4 font-jetbrains">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-pink-400">&gt;</span> INITIALIZING NEURAL PATHWAY...
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I am a digital architect operating in the intersection of code and consciousness. My neural networks have been trained on
                  countless data streams, allowing me to construct virtual realities that blur the line between imagination and execution.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In this cybernetic age, I believe that technology should enhance human potential, not replace it. Every line of code I
                  write is a bridge between the digital and physical realms.
                </p>
                <p className="text-pink-400 font-mono">&gt; CONSCIOUSNESS_LEVEL: ELEVATED</p>
              </div>
            </div>

            {/* System Stats */}
            <motion.div className="cyber-border p-6 rounded-lg bg-black/50" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-orbitron text-green-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                SYSTEM_STATUS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-3 border border-cyan-500/30 rounded"
                  >
                    <achievement.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-orbitron text-white mb-1">{achievement.count}</div>
                    <div className="text-xs text-gray-400 font-jetbrains">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills Matrix */}
            <div className="cyber-border p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5" />
              <h3 className="text-2xl font-orbitron text-pink-400 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                SKILL_MATRIX.dll
              </h3>

              <div className="space-y-6">
                {cyberSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                        <span className="font-jetbrains text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{
                            boxShadow: `0 0 10px ${skill.color}`,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Logs */}
            <div className="cyber-border p-6 rounded-lg bg-black/70">
              <h3 className="text-xl font-orbitron text-yellow-400 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                SYSTEM_LOGS
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {systemLogs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 text-sm font-jetbrains"
                  >
                    <span className="text-gray-500">{log.time}</span>
                    <span
                      className={`${
                        log.status === "success" ? "text-green-400" : log.status === "warning" ? "text-yellow-400" : "text-red-400"
                      }`}
                    >
                      {log.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Neural Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cyber-border p-8 rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
          <h3 className="text-3xl font-orbitron text-center text-purple-400 mb-8">NEURAL_NETWORK.exe</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-cyan-400 flex items-center justify-center cyber-glow">
                <Code className="w-12 h-12 text-cyan-400" />
              </div>
              <h4 className="font-orbitron text-cyan-400 mb-2">INPUT_LAYER</h4>
              <p className="text-sm text-gray-400 font-jetbrains">Raw data processing and pattern recognition algorithms</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-pink-400 flex items-center justify-center cyber-glow">
                <Cpu className="w-12 h-12 text-pink-400" />
              </div>
              <h4 className="font-orbitron text-pink-400 mb-2">HIDDEN_LAYER</h4>
              <p className="text-sm text-gray-400 font-jetbrains">Deep learning and neural pathway optimization</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-green-400 flex items-center justify-center cyber-glow">
                <Globe className="w-12 h-12 text-green-400" />
              </div>
              <h4 className="font-orbitron text-green-400 mb-2">OUTPUT_LAYER</h4>
              <p className="text-sm text-gray-400 font-jetbrains">Reality synthesis and digital manifestation</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="neon-button px-8 py-4 font-orbitron text-lg font-bold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Gamepad2 className="w-6 h-6" />
              INITIATE_CONNECTION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
