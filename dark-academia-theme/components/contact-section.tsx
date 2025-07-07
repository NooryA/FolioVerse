"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Mail, Phone, MapPin, Coffee, BookOpen, Pen, Quote } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success message
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

  const scholarlyQuotes = [
    "The art of letter writing is dying, but here it finds new life.",
    "Every correspondence is a bridge between minds.",
    "In digital ink, we write the future of discourse.",
    "Let us discourse as scholars once did by candlelight.",
  ];

  useEffect(() => {
    setMounted(true);
    // Set initial random quote only after mounting
    setCurrentQuoteIndex(Math.floor(Math.random() * scholarlyQuotes.length));
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Scholarly Correspondence",
      value: "scholar@academy.edu",
      description: "For formal inquiries and academic collaboration",
      available: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Office Hours",
      value: "+1 (555) 123-4567",
      description: "Available for discussions and consultations",
      available: "Monday-Friday, 9 AM - 5 PM",
    },
    {
      icon: MapPin,
      title: "Research Location",
      value: "Digital Humanities Lab",
      description: "123 Academic Drive, University Quarter",
      available: "Visits by appointment",
    },
    {
      icon: Coffee,
      title: "Informal Meetings",
      value: "The Scholar's Café",
      description: "For casual discussions over coffee",
      available: "Weekends, by arrangement",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Academic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="academia-candle-glow absolute top-10 left-10 w-24 h-24 opacity-20" />
        <div className="academia-candle-glow absolute bottom-20 right-20 w-16 h-16 opacity-25" />
        <div className="academia-candle-glow absolute top-1/2 right-1/4 w-12 h-12 opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="academia-title text-5xl md:text-6xl mb-4 text-academia-gold">Scholarly Correspondence</h2>
          <p className="academia-body text-lg max-w-3xl mx-auto text-academia-cream opacity-90">
            In the tradition of great academic discourse, I welcome thoughtful correspondence and collaboration opportunities. Let us
            exchange ideas as scholars have for centuries.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-academia-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="academia-paper relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-academia-burgundy rounded-full flex items-center justify-center">
                <Pen className="w-4 h-4 text-academia-gold" />
              </div>

              <h3 className="academia-heading text-2xl mb-6 flex items-center gap-2 text-academia-ink">
                <BookOpen className="w-6 h-6 text-academia-gold" />
                Compose Your Letter
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                      <label className="block text-sm font-medium text-academia-text-primary mb-2">Distinguished Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="academia-input"
                        placeholder="Your scholarly name..."
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <label className="block text-sm font-medium text-academia-text-primary mb-2">Correspondence Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="academia-input"
                        placeholder="your.email@institution.edu"
                      />
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="block text-sm font-medium text-academia-text-primary mb-2">Subject of Discourse</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="academia-input"
                      placeholder="Regarding your scholarly work..."
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="block text-sm font-medium text-academia-text-primary mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="academia-textarea resize-none"
                      placeholder="Dear esteemed colleague,

I am writing to..."
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="academia-button w-full flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-academia-ink border-t-transparent rounded-full"
                          />
                          Dispatching Letter...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Letter
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 bg-academia-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="academia-heading text-xl mb-2">Letter Dispatched!</h3>
                  <p className="academia-body">
                    Your scholarly correspondence has been sent. I shall respond with the urgency and consideration it deserves.
                  </p>
                </motion.div>
              )}

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-academia-sepia" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="academia-heading text-2xl mb-6 flex items-center gap-2 text-academia-gold">
              <Mail className="w-6 h-6 text-academia-gold" />
              Ways to Reach the Scholar
            </h3>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                className="academia-catalog-card relative bg-academia-cream"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-academia-gold rounded-full flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-academia-ink" />
                  </div>
                  <div className="flex-1">
                    <h4 className="academia-heading text-lg mb-1 text-academia-ink">{method.title}</h4>
                    <p className="text-academia-burgundy font-semibold mb-1">{method.value}</p>
                    <p className="academia-body text-sm mb-2 text-academia-sepia">{method.description}</p>
                    <p className="text-xs text-academia-sepia italic">{method.available}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Scholarly Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="academia-scroll mt-8"
            >
              <motion.blockquote
                className="academia-quote text-center text-academia-gold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {mounted ? scholarlyQuotes[currentQuoteIndex] : scholarlyQuotes[0]}
              </motion.blockquote>
              <p className="text-center mt-4 academia-body text-sm text-academia-gold opacity-80">
                — From the Scholar's Reflections on Communication
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Office Hours & Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="academia-scroll text-center"
        >
          <h3 className="academia-heading text-2xl mb-8 flex items-center justify-center gap-2 text-academia-gold">
            <Coffee className="w-6 h-6 text-academia-gold" />
            The Scholar's Schedule
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="academia-catalog-card bg-academia-cream">
              <h4 className="academia-heading text-lg mb-2 text-academia-burgundy">Research Hours</h4>
              <div className="space-y-1 text-sm text-academia-ink">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>

            <div className="academia-catalog-card bg-academia-cream">
              <h4 className="academia-heading text-lg mb-2 text-academia-burgundy">Collaboration Time</h4>
              <div className="space-y-1 text-sm text-academia-ink">
                <p>Tuesday & Thursday: 2:00 PM - 4:00 PM</p>
                <p>Open office hours for discussions</p>
                <p>Coffee meetings welcomed</p>
              </div>
            </div>

            <div className="academia-catalog-card bg-academia-cream">
              <h4 className="academia-heading text-lg mb-2 text-academia-burgundy">Response Time</h4>
              <div className="space-y-1 text-sm text-academia-ink">
                <p>Email: Within 24 hours</p>
                <p>Project inquiries: 2-3 business days</p>
                <p>Urgent matters: Same day</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
