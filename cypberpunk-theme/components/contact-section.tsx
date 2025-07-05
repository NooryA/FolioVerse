"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Zap, Shield, Terminal, Globe } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactChannels = [
    {
      icon: Mail,
      title: "NEURAL_MAIL",
      value: "contact@cyberdeveloper.matrix",
      description: "Direct neural link communication",
      status: "SECURE",
    },
    {
      icon: Phone,
      title: "VOICE_COMM",
      value: "+1 (555) CYBER-99",
      description: "Encrypted voice transmission",
      status: "ACTIVE",
    },
    {
      icon: MapPin,
      title: "COORDINATES",
      value: "Neo-Tokyo, Sector 7",
      description: "Physical meeting point",
      status: "AVAILABLE",
    },
    {
      icon: Globe,
      title: "MATRIX_LINK",
      value: "matrix://cyber.dev",
      description: "Virtual reality interface",
      status: "ONLINE",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden cyber-grid-bg">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg w-full h-full" />
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 scan-line opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-orbitron font-black mb-6 cyber-text"
            animate={{
              textShadow: ["0 0 20px #ff0080", "0 0 40px #ff0080, 0 0 60px #00ff9f", "0 0 20px #ff0080"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CONTACT.EXE
          </motion.h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-jetbrains">
            Establish secure connection to initiate collaboration protocol
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="cyber-border p-8 rounded-lg bg-black/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-pink-500/5" />

              <h3 className="text-2xl font-orbitron text-cyan-400 mb-6 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                TRANSMISSION_FORM.exe
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                      <label className="block text-sm font-orbitron text-green-400 mb-2">USER_ID</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/70 border-2 border-cyan-500/30 rounded p-3 text-white font-jetbrains focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Enter designation..."
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <label className="block text-sm font-orbitron text-green-400 mb-2">NEURAL_ADDRESS</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/70 border-2 border-cyan-500/30 rounded p-3 text-white font-jetbrains focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="neural@matrix.net"
                      />
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="block text-sm font-orbitron text-green-400 mb-2">PROTOCOL_TYPE</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/70 border-2 border-cyan-500/30 rounded p-3 text-white font-jetbrains focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Collaboration protocol..."
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="block text-sm font-orbitron text-green-400 mb-2">DATA_STREAM</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/70 border-2 border-cyan-500/30 rounded p-3 text-white font-jetbrains focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Initialize message transmission..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="neon-button w-full py-4 font-orbitron font-bold text-lg relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full"
                        />
                        TRANSMITTING...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        INITIATE_TRANSMISSION
                      </span>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-green-400 flex items-center justify-center cyber-glow">
                    <Shield className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-orbitron text-green-400 mb-4">TRANSMISSION_COMPLETE</h3>
                  <p className="text-gray-300 font-jetbrains">
                    Your data stream has been successfully transmitted to the mainframe. Expect response within 24 neural cycles.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-orbitron text-pink-400 mb-8 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              COMMUNICATION_CHANNELS
            </h3>

            {contactChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="cyber-border p-6 rounded-lg bg-black/30 hover:bg-black/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg border-2 border-pink-400 flex items-center justify-center bg-pink-400/10">
                    <channel.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-orbitron text-white text-lg">{channel.title}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded font-jetbrains ${
                          channel.status === "SECURE"
                            ? "bg-green-400/20 text-green-400"
                            : channel.status === "ACTIVE"
                            ? "bg-cyan-400/20 text-cyan-400"
                            : channel.status === "AVAILABLE"
                            ? "bg-yellow-400/20 text-yellow-400"
                            : "bg-purple-400/20 text-purple-400"
                        }`}
                      >
                        {channel.status}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-jetbrains font-bold mb-1">{channel.value}</p>
                    <p className="text-gray-400 text-sm font-jetbrains">{channel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Status Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="cyber-border p-6 rounded-lg bg-black/50"
            >
              <h4 className="font-orbitron text-yellow-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                SYSTEM_STATUS
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-jetbrains">Response Time</span>
                  <span className="text-green-400 font-jetbrains">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-jetbrains">Encryption Level</span>
                  <span className="text-green-400 font-jetbrains">AES-256</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-jetbrains">Server Status</span>
                  <span className="text-green-400 font-jetbrains flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    ONLINE
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-jetbrains">Uptime</span>
                  <span className="text-cyan-400 font-jetbrains">99.9%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Connection Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="cyber-border p-8 rounded-lg bg-black/30 text-center"
        >
          <h3 className="text-3xl font-orbitron text-purple-400 mb-6">ESTABLISH_CONNECTION.matrix</h3>
          <p className="text-gray-300 font-jetbrains mb-8 max-w-3xl mx-auto">
            Ready to jack into the matrix of possibilities? Whether you're looking to build the next revolutionary app or need a digital
            architect for your virtual empire, let's sync our neural networks and create something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="neon-button px-6 py-3 font-orbitron">
              <Mail className="w-5 h-5 mr-2" />
              NEURAL_MAIL
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-border px-6 py-3 bg-black/50 text-cyan-400 font-orbitron hover:bg-cyan-400/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              VOICE_LINK
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
