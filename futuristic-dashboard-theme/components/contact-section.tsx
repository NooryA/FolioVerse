"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    clearanceLevel: "",
    urgency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [terminalLog, setTerminalLog] = useState<string[]>([]);

  useEffect(() => {
    // Simulate terminal activity
    const logs = [
      "INITIALIZING COMMUNICATION PROTOCOL...",
      "ESTABLISHING SECURE CONNECTION...",
      "ENCRYPTION LEVEL: QUANTUM",
      "STATUS: READY FOR TRANSMISSION",
      "AWAITING USER INPUT...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        setTerminalLog((prev) => [...prev, logs[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with terminal feedback
    setTerminalLog((prev) => [...prev, "", "PROCESSING TRANSMISSION...", "ENCRYPTING MESSAGE...", "ROUTING THROUGH SECURE CHANNELS..."]);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTerminalLog((prev) => [...prev, "MESSAGE TRANSMITTED SUCCESSFULLY", "ACKNOWLEDGMENT RECEIVED", "COMMUNICATION COMPLETE"]);
      setFormData({
        name: "",
        email: "",
        subject: "",
        clearanceLevel: "",
        urgency: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "VOICE COMM",
      value: "+1 (555) CYBER-01",
      status: "SECURE LINE",
      color: "green",
    },
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: "DATA UPLINK",
      value: "contact@cyber.net",
      status: "ENCRYPTED",
      color: "cyan",
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "COORDINATES",
      value: "SECTOR 7-G, CYBERSPACE",
      status: "CLASSIFIED",
      color: "purple",
    },
    {
      icon: <TerminalIcon className="w-6 h-6" />,
      title: "DIRECT ACCESS",
      value: "SSH://NEXUS.CYBER",
      status: "ADMIN ONLY",
      color: "orange",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-6 py-3 mb-6">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">COMMUNICATION INTERFACE</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">ESTABLISH LINK</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Initiate secure communication protocols. All transmissions are encrypted and routed through quantum-secured networks.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Panel - Communication Form */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <SendIcon className="w-6 h-6" />
              SECURE TRANSMISSION
            </h3>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-400/50">
                  <CheckIcon className="w-10 h-10 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-green-400 font-mono mb-4">TRANSMISSION COMPLETE</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your message has been successfully transmitted through secure channels. Expect a response within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-mono text-sm hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Identity Code *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono"
                      placeholder="Your designation..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Data Channel *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono"
                      placeholder="neural@link.net"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Clearance Level</label>
                    <select
                      name="clearanceLevel"
                      value={formData.clearanceLevel}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-cyan-400 focus:border-cyan-400 focus:outline-none font-mono"
                    >
                      <option value="">Select Level</option>
                      <option value="basic">BASIC</option>
                      <option value="classified">CLASSIFIED</option>
                      <option value="secret">SECRET</option>
                      <option value="top-secret">TOP SECRET</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Priority Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-cyan-400 focus:border-cyan-400 focus:outline-none font-mono"
                    >
                      <option value="">Select Priority</option>
                      <option value="low">LOW</option>
                      <option value="medium">MEDIUM</option>
                      <option value="high">HIGH</option>
                      <option value="critical">CRITICAL</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Subject Protocol *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono"
                    placeholder="Mission objective..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 uppercase tracking-wide mb-2 font-mono">Message Payload *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono resize-none"
                    placeholder="Encode your transmission here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-lg font-mono text-sm hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-5 h-5" />
                      INITIATE TRANSMISSION
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Panel - System Info & Terminal */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">COMMUNICATION CHANNELS</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-black/30 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all"
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        method.color === "green"
                          ? "bg-green-500/20 text-green-400"
                          : method.color === "cyan"
                          ? "bg-cyan-500/20 text-cyan-400"
                          : method.color === "purple"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-sm text-white font-bold">{method.title}</div>
                      <div className="text-gray-300 text-sm">{method.value}</div>
                      <div
                        className={`text-xs font-mono ${
                          method.color === "green"
                            ? "text-green-400"
                            : method.color === "cyan"
                            ? "text-cyan-400"
                            : method.color === "purple"
                            ? "text-purple-400"
                            : "text-orange-400"
                        }`}
                      >
                        {method.status}
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full animate-pulse ${
                        method.color === "green"
                          ? "bg-green-400"
                          : method.color === "cyan"
                          ? "bg-cyan-400"
                          : method.color === "purple"
                          ? "bg-purple-400"
                          : "bg-orange-400"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <TerminalIcon className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono text-sm">SYSTEM TERMINAL</span>
                <div className="flex-1"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="font-mono text-sm space-y-1 min-h-[200px] max-h-[300px] overflow-y-auto">
                {terminalLog.map((log, index) => (
                  <div
                    key={index}
                    className={`${
                      log && log.includes && (log.includes("SUCCESS") || log.includes("COMPLETE"))
                        ? "text-green-400"
                        : log && log.includes && (log.includes("ERROR") || log.includes("FAILED"))
                        ? "text-red-400"
                        : log && log.includes && (log.includes("PROCESSING") || log.includes("ROUTING"))
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    {log && `> ${log}`}
                  </div>
                ))}
                <div className="text-green-400 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 font-mono">SYSTEM STATUS</h3>
              <p className="text-gray-300">
                All communication channels operational. Quantum encryption active. Response time: &lt; 24 hours.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1 font-mono">ONLINE</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Network Status</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1 font-mono">256-BIT</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1 font-mono">99.9%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
