"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Shuffle,
  Star,
  Trophy,
  Zap,
  Sparkles,
} from "lucide-react";

// Contact Methods - Simplified and developer-focused
const initialContactMethods = [
  {
    id: 1,
    type: "Email",
    title: "Send Email",
    description: "Get in touch via email for project inquiries",
    contact: "alex@example.com",
    icon: <Mail className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    response: "24 hours",
    availability: "Always open",
  },
  {
    id: 2,
    type: "Phone",
    title: "Schedule Call",
    description: "Book a call to discuss your project needs",
    contact: "+1 (555) 123-4567",
    icon: <Phone className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    response: "Same day",
    availability: "Business hours",
  },
  {
    id: 3,
    type: "Location",
    title: "Meet in Person",
    description: "Available for local meetings and consultations",
    contact: "San Francisco, CA",
    icon: <MapPin className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    response: "2-3 days",
    availability: "By appointment",
  },
  {
    id: 4,
    type: "GitHub",
    title: "Code Collaboration",
    description: "Connect on GitHub for open source projects",
    contact: "github.com/alexdev",
    icon: <Github className="w-8 h-8" />,
    color: "from-gray-700 to-gray-900",
    response: "1-2 days",
    availability: "Public repos",
  },
  {
    id: 5,
    type: "LinkedIn",
    title: "Professional Network",
    description: "Connect for business opportunities",
    contact: "linkedin.com/in/alexdev",
    icon: <Linkedin className="w-8 h-8" />,
    color: "from-blue-600 to-blue-800",
    response: "24 hours",
    availability: "Professional only",
  },
  {
    id: 6,
    type: "Portfolio",
    title: "View Work",
    description: "Explore my portfolio and case studies",
    contact: "alexdev.portfolio.com",
    icon: <Globe className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    response: "Instant",
    availability: "24/7",
  },
];

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedContactHand, setSelectedContactHand] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [contactMethods, setContactMethods] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    setContactMethods(initialContactMethods);
  }, []);

  if (!mounted) return null;

  const shuffleCards = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const shuffled = [...contactMethods].sort(() => Math.random() - 0.5);
      setContactMethods(shuffled);
      setIsShuffling(false);
      setSelectedContactHand([]);
    }, 1000);
  };

  const drawContactCard = (cardId: number) => {
    if (selectedContactHand.includes(cardId)) {
      setSelectedContactHand((prev) => prev.filter((id) => id !== cardId));
    } else if (selectedContactHand.length < 3) {
      setSelectedContactHand((prev) => [...prev, cardId]);
    }
  };

  const sendMessage = () => {
    if (selectedContactHand.length > 0) {
      alert("🎉 Message sent successfully! I'll get back to you soon!");
      setSelectedContactHand([]);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to connect and let's discuss your next project
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={shuffleCards}
            disabled={isShuffling}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Shuffle className={`w-6 h-6 ${isShuffling ? "animate-spin" : ""}`} />
            <span className="text-lg">{isShuffling ? "Shuffling..." : "Shuffle Contacts"}</span>
          </button>

          <button
            onClick={sendMessage}
            disabled={selectedContactHand.length === 0}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-6 h-6" />
            <span className="text-lg">Send Message ({selectedContactHand.length}/3)</span>
          </button>
        </div>

        {/* Contact Method Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Choose Your Contact Method</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className={`relative cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                  selectedContactHand.includes(method.id) ? "ring-4 ring-blue-400 scale-105" : ""
                } ${isShuffling ? "animate-bounce" : ""}`}
                onClick={() => drawContactCard(method.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-br ${method.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">{method.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{method.type}</h3>
                      <p className="text-white/80 text-sm">{method.title}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">{method.description}</p>

                  {/* Contact Details */}
                  <div className="bg-white/20 rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-white font-semibold text-lg break-all">{method.contact}</div>
                    </div>
                    <div className="flex justify-between text-xs text-white/75">
                      <div>
                        <div className="font-medium">Response</div>
                        <div>{method.response}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Available</div>
                        <div>{method.availability}</div>
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedContactHand.includes(method.id) && (
                    <div className="absolute inset-0 bg-blue-400/20 rounded-2xl flex items-center justify-center">
                      <div className="bg-blue-500 text-white rounded-full p-3">
                        <Star className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Direct Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:alex@example.com"
                className="block bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Email Me</div>
                    <div className="text-sm opacity-90">alex@example.com</div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="block bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Call Me</div>
                    <div className="text-sm opacity-90">+1 (555) 123-4567</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Response Times</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-sm opacity-90">Email Response</div>
              </div>

              <div className="text-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">Same Day</div>
                <div className="text-sm opacity-90">Call Response</div>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-90">Response Rate</div>
              </div>

              <div className="text-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">5+</div>
                <div className="text-sm opacity-90">Years Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
