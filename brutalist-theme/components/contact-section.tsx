"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // BRUTAL VALIDATION
    const newErrors = [];
    if (!formData.name) newErrors.push("NAME IS REQUIRED!!!");
    if (formData.name.length < 3) newErrors.push("NAME TOO SHORT!!!");
    if (!formData.email) newErrors.push("EMAIL IS MANDATORY!!!");
    if (!formData.email.includes("@")) newErrors.push("THAT'S NOT AN EMAIL!!!");
    if (!formData.message) newErrors.push("SAY SOMETHING!!!");
    if (formData.message.length < 10) newErrors.push("MESSAGE TOO SHORT!!!");
    if (formData.message.length > 100) newErrors.push("TOO MUCH TALKING!!!");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value.toUpperCase() }); // FORCE UPPERCASE
    setErrors([]); // Clear errors on input
  };

  const contactMethods = [
    { method: "EMAIL", value: "DONT@EMAIL.ME", color: "#FF0000" },
    { method: "PHONE", value: "1-800-NO-CALLS", color: "#FFFF00" },
    { method: "FAX", value: "SERIOUSLY?", color: "#00FF00" },
    { method: "CARRIER PIGEON", value: "GOOD LUCK", color: "#0000FF" },
  ];

  return (
    <section id="contact" className="brutal-section bg-yellow-500 relative overflow-hidden">
      <div className="brutal-container">
        {/* BRUTAL TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -200, rotate: 180 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <h2 className="brutal-title text-6xl md:text-8xl lg:text-9xl mb-4">CONTACT</h2>
          <p className="brutal-heading text-2xl">(BUT I PROBABLY WON'T RESPOND)</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* BRUTAL FORM */}
          <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ type: "spring", damping: 15 }}>
            <form onSubmit={handleSubmit} className="brutal-card p-8 bg-white">
              <h3 className="brutal-heading text-4xl mb-6">SEND A MESSAGE</h3>

              {/* ERROR MESSAGES */}
              {errors.length > 0 && (
                <motion.div
                  className="brutal-card brutal-card-red p-4 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                >
                  {errors.map((error, index) => (
                    <motion.p
                      key={index}
                      className="brutal-mono text-white mb-2"
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      ⚠️ {error}
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {/* NAME INPUT */}
              <div className="mb-6">
                <label className="brutal-heading text-2xl mb-2 block">YOUR NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="brutal-input"
                  placeholder="TYPE IT LOUD"
                  maxLength={20}
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="mb-6">
                <label className="brutal-heading text-2xl mb-2 block">EMAIL ADDRESS</label>
                <input
                  type="text" // Intentionally not email type
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="brutal-input"
                  placeholder="SOMETHING@SOMEWHERE.COM"
                />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="mb-8">
                <label className="brutal-heading text-2xl mb-2 block">YOUR MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="brutal-textarea"
                  placeholder="SHOUT AT ME"
                  rows={5}
                />
                <div className="text-right mt-2">
                  <span className={`brutal-mono text-sm ${formData.message.length > 100 ? "text-red-500" : ""}`}>
                    {formData.message.length}/100
                  </span>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                className={`brutal-button brutal-button-red w-full text-2xl ${isSubmitting ? "brutal-blink" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND IT!"}
              </motion.button>

              {/* Click counter */}
              <motion.div className="mt-4 text-center" animate={{ rotate: clickCount * 10 }}>
                <button type="button" className="brutal-mono text-sm" onClick={() => setClickCount(clickCount + 1)}>
                  CLICKS: {clickCount} (WHY?)
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ type: "spring", damping: 15 }} className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={contact.method}
                  className="brutal-card p-6"
                  style={{ backgroundColor: contact.color }}
                  initial={{ rotate: index % 2 === 0 ? -45 : 45 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ x: index % 2 === 0 ? -10 : 10, scale: 1.05 }}
                >
                  <h4 className="brutal-heading text-2xl text-white mb-2">{contact.method}</h4>
                  <p className="brutal-mono text-xl text-white">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links (But Broken) */}
            <div className="brutal-card brutal-card-blue p-6">
              <h4 className="brutal-heading text-2xl text-white mb-4">ANTI-SOCIAL MEDIA</h4>
              <div className="grid grid-cols-3 gap-4">
                {["X", "F", "L", "G", "I", "?"].map((platform, index) => (
                  <motion.button
                    key={platform}
                    className="brutal-button h-16 text-2xl"
                    whileHover={{ rotate: 180 }}
                    whileTap={{ scale: 0.5 }}
                    onClick={() => alert("BROKEN! TRY AGAIN NEVER!")}
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="brutal-card p-6">
              <h4 className="brutal-heading text-2xl mb-4">OFFICE HOURS</h4>
              <div className="space-y-2 brutal-mono">
                <p>MONDAY: CLOSED</p>
                <p>TUESDAY: CLOSED</p>
                <p>WEDNESDAY: CLOSED</p>
                <p>THURSDAY: CLOSED</p>
                <p>FRIDAY: CLOSED</p>
                <p className="text-red-500">WEEKEND: DEFINITELY CLOSED</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="brutal-card brutal-card-red p-8 text-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <h3 className="brutal-title text-6xl text-white mb-4">SENT!</h3>
              <p className="brutal-heading text-2xl text-white">(BUT I'LL PROBABLY IGNORE IT)</p>
            </motion.div>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 right-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 bg-red-500 brutal-spin" />
        </motion.div>

        <motion.div className="absolute bottom-10 left-10" animate={{ x: [0, 100, 0] }} transition={{ duration: 10, repeat: Infinity }}>
          <div className="w-24 h-24 bg-blue-500" />
        </motion.div>

        {/* Footer ASCII */}
        <pre className="brutal-mono text-xs text-center mt-16">
          {`
┌─────────────────────────────────────┐
│ RESPONSE TIME: ∞ BUSINESS DAYS     │
│ SUCCESS RATE: 0%                    │
│ SATISFACTION: NOT GUARANTEED        │
└─────────────────────────────────────┘
`}
        </pre>
      </div>
    </section>
  );
}
