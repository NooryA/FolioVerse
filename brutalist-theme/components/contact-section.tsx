"use client";

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
    <section id="contact" className="bg-yellow-400 py-20 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced BRUTAL TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase mb-8 leading-none">CONTACT</h2>
          <p className="font-black text-2xl md:text-3xl text-black uppercase">(BUT I PROBABLY WON'T RESPOND)</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced BRUTAL FORM */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white border-8 border-black p-8 shadow-2xl">
              <h3 className="font-black text-3xl md:text-4xl mb-8 uppercase">SEND A MESSAGE</h3>

              {/* Enhanced ERROR MESSAGES */}
              {errors.length > 0 && (
                <div className="bg-red-500 border-8 border-black p-6 mb-8 shadow-lg">
                  {errors.map((error, index) => (
                    <p key={index} className="font-mono text-white mb-2 text-lg font-black">
                      ⚠️ {error}
                    </p>
                  ))}
                </div>
              )}

              {/* Enhanced NAME INPUT */}
              <div className="mb-8">
                <label className="font-black text-2xl md:text-3xl mb-4 block uppercase">YOUR NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-6 bg-white border-8 border-black font-mono font-bold text-xl text-black shadow-lg focus:bg-yellow-400 focus:border-red-500 transition-all"
                  placeholder="TYPE IT LOUD"
                  maxLength={20}
                />
              </div>

              {/* Enhanced EMAIL INPUT */}
              <div className="mb-8">
                <label className="font-black text-2xl md:text-3xl mb-4 block uppercase">EMAIL ADDRESS</label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-6 bg-white border-8 border-black font-mono font-bold text-xl text-black shadow-lg focus:bg-yellow-400 focus:border-red-500 transition-all"
                  placeholder="SOMETHING@SOMEWHERE.COM"
                />
              </div>

              {/* Enhanced MESSAGE TEXTAREA */}
              <div className="mb-8">
                <label className="font-black text-2xl md:text-3xl mb-4 block uppercase">YOUR MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full p-6 bg-white border-8 border-black font-mono font-bold text-xl text-black shadow-lg focus:bg-yellow-400 focus:border-red-500 transition-all resize-none"
                  placeholder="SHOUT AT ME"
                  rows={5}
                />
                <div className="text-right mt-4">
                  <span className={`font-mono text-xl font-black ${formData.message.length > 100 ? "text-red-500" : "text-black"}`}>
                    {formData.message.length}/100
                  </span>
                </div>
              </div>

              {/* Enhanced SUBMIT BUTTON */}
              <button
                type="submit"
                className={`w-full bg-red-500 text-white border-8 border-black px-8 py-6 font-black text-2xl md:text-3xl uppercase shadow-2xl hover:bg-white hover:text-red-500 hover:border-red-500 transition-all transform hover:scale-105 ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND IT!"}
              </button>

              {/* Enhanced Click counter */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="font-mono text-xl font-black text-black hover:text-red-500 transition-colors"
                  onClick={() => setClickCount(clickCount + 1)}
                >
                  CLICKS: {clickCount} (WHY?)
                </button>
              </div>
            </form>
          </div>

          {/* Enhanced CONTACT INFO */}
          <div className="space-y-8">
            {/* Enhanced Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <div
                  key={contact.method}
                  className="border-8 border-black p-6 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all"
                  style={{ backgroundColor: contact.color }}
                >
                  <h4 className="font-black text-2xl md:text-3xl text-white mb-4 uppercase">{contact.method}</h4>
                  <p className="font-mono text-xl md:text-2xl text-white font-bold">{contact.value}</p>
                </div>
              ))}
            </div>

            {/* Enhanced Social Links (But Broken) */}
            <div className="bg-blue-500 border-8 border-black p-8 shadow-2xl">
              <h4 className="font-black text-2xl md:text-3xl text-white mb-6 uppercase">ANTI-SOCIAL MEDIA</h4>
              <div className="grid grid-cols-3 gap-4">
                {["X", "F", "L", "G", "I", "?"].map((platform, index) => (
                  <button
                    key={platform}
                    className="bg-white text-black border-8 border-black h-16 md:h-20 font-black text-2xl md:text-3xl shadow-lg hover:bg-black hover:text-white hover:rotate-180 transition-all transform hover:scale-110"
                    onClick={() => alert("BROKEN! TRY AGAIN NEVER!")}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Office Hours */}
            <div className="bg-white border-8 border-black p-8 shadow-2xl">
              <h4 className="font-black text-2xl md:text-3xl mb-6 uppercase">OFFICE HOURS</h4>
              <div className="space-y-2 font-mono text-lg md:text-xl font-bold">
                <p>MONDAY: CLOSED</p>
                <p>TUESDAY: CLOSED</p>
                <p>WEDNESDAY: CLOSED</p>
                <p>THURSDAY: CLOSED</p>
                <p>FRIDAY: CLOSED</p>
                <p className="text-red-500 text-xl md:text-2xl">WEEKEND: DEFINITELY CLOSED</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Success Message */}
        {isSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
            <div className="bg-red-500 border-8 border-black p-12 text-center max-w-md mx-auto shadow-2xl transform animate-bounce">
              <h3 className="font-black text-5xl md:text-6xl text-white mb-6 uppercase">SENT!</h3>
              <p className="font-black text-2xl md:text-3xl text-white uppercase">(BUT I'LL PROBABLY IGNORE IT)</p>
            </div>
          </div>
        )}

        {/* Enhanced Footer ASCII */}
        <div className="text-center mt-16 bg-black text-white p-8 border-8 border-red-500 shadow-2xl">
          <pre className="font-mono text-sm md:text-base font-bold overflow-x-auto">
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

      {/* Enhanced Decorative Elements - hidden on mobile */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="w-24 h-24 bg-red-500 border-8 border-black shadow-2xl animate-spin" style={{ animationDuration: "20s" }}></div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-16 h-16 bg-blue-500 border-8 border-black shadow-2xl animate-bounce"></div>
      </div>
    </section>
  );
}
