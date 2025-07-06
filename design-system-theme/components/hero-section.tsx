"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

export function HeroSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [tokenCategory, setTokenCategory] = useState("colors");

  const demos = [
    { title: "Design Tokens", description: "Systematic design decisions", icon: PaletteIcon },
    { title: "Components", description: "Reusable UI elements", icon: LayersIcon },
    { title: "Patterns", description: "Common design patterns", icon: GridIcon },
    { title: "Guidelines", description: "Design principles", icon: BookOpenIcon },
  ];

  const designTokens = {
    colors: [
      { name: "Primary 500", value: "#0ea5e9", css: "--ds-color-primary-500" },
      { name: "Primary 600", value: "#0284c7", css: "--ds-color-primary-600" },
      { name: "Gray 500", value: "#6b7280", css: "--ds-color-gray-500" },
      { name: "Success 500", value: "#22c55e", css: "--ds-color-success-500" },
    ],
    typography: [
      { name: "Font Size XL", value: "1.25rem", css: "--ds-font-size-xl" },
      { name: "Font Weight Bold", value: "700", css: "--ds-font-weight-bold" },
      { name: "Line Height Normal", value: "1.5", css: "--ds-line-height-normal" },
      { name: "Font Family Primary", value: "Inter", css: "--ds-font-family-primary" },
    ],
    spacing: [
      { name: "Space 4", value: "1rem", css: "--ds-space-4" },
      { name: "Space 6", value: "1.5rem", css: "--ds-space-6" },
      { name: "Space 8", value: "2rem", css: "--ds-space-8" },
      { name: "Space 12", value: "3rem", css: "--ds-space-12" },
    ],
    shadows: [
      { name: "Shadow Base", value: "0 1px 3px rgba(0,0,0,0.1)", css: "--ds-shadow-base" },
      { name: "Shadow LG", value: "0 10px 15px rgba(0,0,0,0.1)", css: "--ds-shadow-lg" },
      { name: "Shadow XL", value: "0 20px 25px rgba(0,0,0,0.1)", css: "--ds-shadow-xl" },
      { name: "Shadow 2XL", value: "0 25px 50px rgba(0,0,0,0.25)", css: "--ds-shadow-2xl" },
    ],
  };

  const stats = [
    { value: "150+", label: "Design Tokens", description: "Systematic design variables" },
    { value: "50+", label: "Components", description: "Reusable UI elements" },
    { value: "98%", label: "Consistency", description: "Across all interfaces" },
    { value: "50%", label: "Faster Development", description: "With design system" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ds-section ds-bg-primary-50">
      <div className="ds-container">
        {/* Header */}
        <div className="ds-text-center ds-mb-16">
          <div className="ds-badge ds-badge-primary ds-mb-6">
            <LayersIcon className="w-4 h-4" />
            Design System Documentation
          </div>

          <h1 className="ds-text-6xl ds-font-extrabold ds-text-gray-900 ds-mb-6 ds-leading-tight">
            Systematic Design for
            <br />
            <span className="ds-text-primary-600">Scalable Products</span>
          </h1>

          <p className="ds-text-xl ds-text-gray-600 ds-mb-12 max-w-3xl mx-auto ds-leading-relaxed">
            A comprehensive design system built with design tokens, reusable components, and clear guidelines to ensure consistency and
            efficiency across all digital products.
          </p>

          <div className="ds-flex ds-flex-col sm:flex-row ds-gap-4 ds-justify-center ds-mb-16">
            <button className="ds-btn ds-btn-primary ds-btn-lg">
              <BookOpenIcon className="w-5 h-5" />
              Explore Documentation
            </button>
            <button className="ds-btn ds-btn-outline ds-btn-lg">
              <CodeIcon className="w-5 h-5" />
              View Components
            </button>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="ds-grid ds-grid-cols-1 lg:grid-cols-2 ds-gap-12 ds-mb-20">
          {/* Left Side - Demo Navigation */}
          <div>
            <h2 className="ds-text-3xl ds-font-bold ds-text-gray-900 ds-mb-8">Design System Features</h2>

            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full ds-flex ds-items-center ds-gap-4 ds-p-6 ds-rounded-xl border-2 transition-all ${
                    activeDemo === index ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`ds-p-3 ds-rounded-lg ${activeDemo === index ? "ds-bg-primary-500" : "ds-bg-gray-100"}`}>
                    <demo.icon className={`w-6 h-6 ${activeDemo === index ? "text-white" : "ds-text-gray-600"}`} />
                  </div>
                  <div className="ds-text-left">
                    <h3 className={`ds-font-semibold ds-text-lg ${activeDemo === index ? "ds-text-primary-700" : "ds-text-gray-900"}`}>
                      {demo.title}
                    </h3>
                    <p className="ds-text-gray-600">{demo.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Demo Content */}
          <div className="ds-card">
            <div className="ds-card-header">
              <h3 className="ds-text-2xl ds-font-bold ds-text-gray-900">{demos[activeDemo].title}</h3>
            </div>
            <div className="ds-card-body">
              {activeDemo === 0 && (
                <div>
                  <div className="ds-nav-tabs">
                    {Object.keys(designTokens).map((category) => (
                      <button
                        key={category}
                        onClick={() => setTokenCategory(category)}
                        className={`ds-nav-tab ${tokenCategory === category ? "active" : ""}`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="ds-grid ds-grid-cols-1 sm:ds-grid-cols-2 ds-gap-4">
                    {designTokens[tokenCategory as keyof typeof designTokens].map((token, index) => (
                      <div key={index} className="ds-token-card">
                        {tokenCategory === "colors" && <div className="ds-color-swatch" style={{ backgroundColor: token.value }} />}
                        <h4 className="ds-font-semibold ds-text-gray-900 ds-mb-2">{token.name}</h4>
                        <p className="ds-text-sm ds-text-gray-600 ds-mb-2">{token.value}</p>
                        <code className="ds-text-xs ds-font-mono ds-text-gray-500">{token.css}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDemo === 1 && (
                <div className="space-y-6">
                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Button Components</h4>
                    <div className="ds-flex ds-gap-4 ds-flex-col sm:ds-flex-row">
                      <button className="ds-btn ds-btn-primary">Primary Button</button>
                      <button className="ds-btn ds-btn-secondary">Secondary Button</button>
                      <button className="ds-btn ds-btn-outline">Outline Button</button>
                    </div>
                  </div>

                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Form Components</h4>
                    <div className="ds-form-group">
                      <label className="ds-label">Email Address</label>
                      <input type="email" className="ds-input" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Alert Components</h4>
                    <div className="ds-alert ds-alert-info">This is an informational alert using our design system.</div>
                  </div>
                </div>
              )}

              {activeDemo === 2 && (
                <div className="space-y-6">
                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Grid Patterns</h4>
                    <div className="ds-grid ds-grid-cols-3 ds-gap-4">
                      <div className="ds-card ds-p-4 ds-text-center">Item 1</div>
                      <div className="ds-card ds-p-4 ds-text-center">Item 2</div>
                      <div className="ds-card ds-p-4 ds-text-center">Item 3</div>
                    </div>
                  </div>

                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Card Pattern</h4>
                    <div className="ds-card">
                      <div className="ds-card-header">
                        <h5 className="ds-font-semibold">Card Title</h5>
                      </div>
                      <div className="ds-card-body">
                        <p className="ds-text-gray-600">Card content goes here with consistent spacing and typography.</p>
                      </div>
                      <div className="ds-card-footer">
                        <button className="ds-btn ds-btn-primary ds-btn-sm">Action</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 3 && (
                <div className="space-y-6">
                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Typography Scale</h4>
                    <div className="space-y-2">
                      <h1 className="ds-text-4xl ds-font-bold">Heading 1</h1>
                      <h2 className="ds-text-3xl ds-font-bold">Heading 2</h2>
                      <h3 className="ds-text-2xl ds-font-bold">Heading 3</h3>
                      <p className="ds-text-lg">Large paragraph text</p>
                      <p className="ds-text-base">Base paragraph text</p>
                      <p className="ds-text-sm">Small text</p>
                    </div>
                  </div>

                  <div className="ds-component-preview">
                    <h4 className="ds-font-semibold ds-mb-4">Spacing Guidelines</h4>
                    <div className="space-y-4">
                      <div className="ds-p-2 ds-bg-gray-100 ds-rounded">Padding 2 (8px)</div>
                      <div className="ds-p-4 ds-bg-gray-100 ds-rounded">Padding 4 (16px)</div>
                      <div className="ds-p-6 ds-bg-gray-100 ds-rounded">Padding 6 (24px)</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="ds-grid ds-grid-cols-2 md:ds-grid-cols-4 ds-gap-8 ds-mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="ds-text-center">
              <div className="ds-text-4xl ds-font-extrabold ds-text-primary-600 ds-mb-2">{stat.value}</div>
              <div className="ds-text-lg ds-font-semibold ds-text-gray-900 ds-mb-1">{stat.label}</div>
              <div className="ds-text-sm ds-text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="ds-grid ds-grid-cols-1 md:ds-grid-cols-3 ds-gap-8">
          {[
            {
              icon: SparklesIcon,
              title: "Consistent Experience",
              description: "Unified design language across all touchpoints and platforms for seamless user experience.",
            },
            {
              icon: CodeIcon,
              title: "Developer Efficiency",
              description: "Pre-built components and clear guidelines accelerate development and reduce errors.",
            },
            {
              icon: LayersIcon,
              title: "Scalable Architecture",
              description: "Modular system that grows with your product and adapts to changing requirements.",
            },
          ].map((benefit, index) => (
            <div key={index} className="ds-card ds-text-center">
              <div className="ds-card-body">
                <div className="ds-w-16 ds-h-16 ds-bg-primary-100 ds-rounded-full ds-flex ds-items-center ds-justify-center mx-auto ds-mb-6">
                  <benefit.icon className="w-8 h-8 ds-text-primary-600" />
                </div>
                <h3 className="ds-text-xl ds-font-bold ds-text-gray-900 ds-mb-4">{benefit.title}</h3>
                <p className="ds-text-gray-600 ds-leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
