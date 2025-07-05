"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Calendar, Clock, CheckCircle } from "lucide-react";

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      description: "Send me an email anytime",
      available: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call for urgent matters",
      available: "Mon-Fri, 9 AM - 6 PM PST",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for in-person meetings",
      available: "By appointment only",
    },
    {
      icon: Calendar,
      title: "Schedule",
      value: "Book a Call",
      description: "30-min discovery session",
      available: "Free consultation",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "By appointment" },
  ];

  return (
    <section id="contact" className="minimal-section">
      <div className="minimal-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-text-center mb-16"
        >
          <h2 className="minimal-heading-2 mb-4">Get In Touch</h2>
          <p className="minimal-body-large max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="minimal-grid minimal-grid-cols-2 mb-20">
          {/* Left Column - Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="minimal-card-subtle">
              <h3 className="minimal-heading-3 mb-6">Send a Message</h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="minimal-grid minimal-grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                      <label className="minimal-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="minimal-input minimal-focus-ring"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <label className="minimal-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="minimal-input minimal-focus-ring"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="minimal-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="minimal-input minimal-focus-ring"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="minimal-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="minimal-textarea minimal-focus-ring"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="minimal-button w-full minimal-hover-lift"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-minimal-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="minimal-text-center py-12">
                  <div className="w-16 h-16 bg-minimal-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-minimal-white" />
                  </div>
                  <h3 className="minimal-heading-4 mb-2">Message Sent!</h3>
                  <p className="minimal-body">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="minimal-heading-3 mb-6">Contact Information</h3>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="minimal-card minimal-hover-lift"
              >
                <div className="minimal-flex minimal-flex-gap">
                  <div className="w-12 h-12 bg-minimal-light-gray rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-minimal-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="minimal-heading-4 mb-1">{contact.title}</h4>
                    <p className="minimal-body font-medium mb-1">{contact.value}</p>
                    <p className="minimal-body-small mb-1">{contact.description}</p>
                    <p className="minimal-body-small text-minimal-medium-gray">{contact.available}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="minimal-card-subtle"
            >
              <h4 className="minimal-heading-4 mb-4 minimal-flex minimal-flex-gap-small">
                <Clock className="w-5 h-5 text-minimal-accent" />
                Working Hours
              </h4>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={schedule.day} className="minimal-flex minimal-flex-between">
                    <span className="minimal-body">{schedule.day}</span>
                    <span className="minimal-body-small text-minimal-medium-gray">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="minimal-card-flat"
            >
              <h4 className="minimal-heading-4 mb-2">Quick Response</h4>
              <p className="minimal-body-small mb-3">Need a faster response? Send me a direct email for urgent matters.</p>
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="minimal-button-outline minimal-hover-lift"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="minimal-heading-2 minimal-text-center mb-12">Frequently Asked Questions</h3>
          <div className="minimal-grid minimal-grid-cols-2">
            {[
              {
                question: "What's your typical response time?",
                answer: "I respond to all emails within 24 hours, usually much sooner during business hours.",
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am flexible with different time zones.",
              },
              {
                question: "What's your project minimum?",
                answer: "I take on projects of all sizes, from small fixes to large-scale applications.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, I provide maintenance and support packages for all projects I build.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="minimal-card-flat"
              >
                <h4 className="minimal-heading-4 mb-3">{faq.question}</h4>
                <p className="minimal-body">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-card-subtle minimal-text-center"
        >
          <h3 className="minimal-heading-3 mb-4">Ready to Start Your Project?</h3>
          <p className="minimal-body mb-6 max-w-2xl mx-auto">
            Whether you have a detailed plan or just an idea, I'd love to hear about it. Let's schedule a call to discuss your project.
          </p>
          <div className="minimal-flex minimal-flex-gap justify-center">
            <motion.a
              href="mailto:hello@example.com"
              className="minimal-button minimal-hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </motion.a>
            <motion.a
              href="tel:+1555123456"
              className="minimal-button-outline minimal-hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
