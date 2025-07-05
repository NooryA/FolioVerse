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
    <section id="contact" className="brutal-section bg-yellow-500 relative overflow-brutal">
      <div className="brutal-container">
        {/* BRUTAL TITLE */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -200, rotate: 180 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <h2 className="brutal-title brutal-responsive-text mb-4">CONTACT</h2>
          <p className="brutal-heading text-lg md:text-xl">(BUT I PROBABLY WON'T RESPOND)</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BRUTAL FORM */}
          <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ type: "spring", damping: 15 }}>
            <form onSubmit={handleSubmit} className="brutal-card brutal-safe-spacing bg-white">
              <h3 className="brutal-heading text-2xl md:text-3xl mb-6">SEND A MESSAGE</h3>

              {/* ERROR MESSAGES */}
              {errors.length > 0 && (
                <motion.div
                  className="brutal-card brutal-card-red brutal-safe-spacing mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                >
                  {errors.map((error, index) => (
                    <motion.p
                      key={index}
                      className="brutal-mono text-white mb-2 text-sm md:text-base"
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
                <label className="brutal-heading text-lg md:text-xl mb-2 block">YOUR NAME</label>
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
                <label className="brutal-heading text-lg md:text-xl mb-2 block">EMAIL ADDRESS</label>
                <input
                  type="text" // Intentionally not email type
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="brutal-input"
                  placeholder="SOMETHING@SOMEWHERE.COM"
                />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="mb-6">
                <label className="brutal-heading text-lg md:text-xl mb-2 block">YOUR MESSAGE</label>
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
                className={`brutal-button brutal-button-red w-full text-lg md:text-xl ${isSubmitting ? "brutal-blink" : ""}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND IT!"}
              </motion.button>

              {/* Click counter */}
              <motion.div className="mt-4 text-center" animate={{ rotate: clickCount * 5 }}>
                <button type="button" className="brutal-mono text-sm" onClick={() => setClickCount(clickCount + 1)}>
                  CLICKS: {clickCount} (WHY?)
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ type: "spring", damping: 15 }} className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={contact.method}
                  className="brutal-card brutal-safe-spacing"
                  style={{ backgroundColor: contact.color }}
                  initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ x: index % 2 === 0 ? -5 : 5, scale: 1.02 }}
                >
                  <h4 className="brutal-heading text-lg md:text-xl text-white mb-2">{contact.method}</h4>
                  <p className="brutal-mono text-base md:text-lg text-white">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links (But Broken) */}
            <div className="brutal-card brutal-card-blue brutal-safe-spacing">
              <h4 className="brutal-heading text-lg md:text-xl text-white mb-4">ANTI-SOCIAL MEDIA</h4>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {["X", "F", "L", "G", "I", "?"].map((platform, index) => (
                  <motion.button
                    key={platform}
                    className="brutal-button h-12 md:h-16 text-lg md:text-xl"
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
            <div className="brutal-card brutal-safe-spacing">
              <h4 className="brutal-heading text-lg md:text-xl mb-4">OFFICE HOURS</h4>
              <div className="space-y-1 brutal-mono text-sm md:text-base">
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
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="brutal-card brutal-card-red brutal-safe-spacing text-center max-w-md mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <h3 className="brutal-title text-3xl md:text-4xl lg:text-5xl text-white mb-4">SENT!</h3>
              <p className="brutal-heading text-lg md:text-xl text-white">(BUT I'LL PROBABLY IGNORE IT)</p>
            </motion.div>
          </motion.div>
        )}

        {/* Footer ASCII */}
        <div className="text-center mt-12">
          <pre className="brutal-mono text-xs overflow-x-auto">
            {`
┌─────────────────────────────────────┐
│ RESPONSE TIME: ∞ BUSINESS DAYS     │
│ SUCCESS RATE: 0%                    │
│ SATISFACTION: NOT GUARANTEED        │
└─────────────────────────────────────┘
`}
          </pre>
        </div>
      </div>

      {/* Decorative Elements - only on larger screens */}
      <motion.div
        className="absolute top-10 right-10 hidden lg:block brutal-decoration"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 md:w-24 md:h-24 bg-red-500 brutal-spin" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 hidden lg:block brutal-decoration"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500" />
      </motion.div>
    </section>
  );
}
