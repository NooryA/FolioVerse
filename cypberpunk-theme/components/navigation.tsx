"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CircuitIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const navItems = [
    { name: "INIT", href: "#home", code: "00" },
    { name: "DATA", href: "#about", code: "01" },
    { name: "EXEC", href: "#projects", code: "02" },
    { name: "LINK", href: "#contact", code: "03" },
  ];

  return (
    <>
      {/* Terminal Header */}
      <div className="cyber-terminal-header">
        <div className="cyber-terminal-controls">
          <div className="cyber-terminal-dot cyber-terminal-dot-red"></div>
          <div className="cyber-terminal-dot cyber-terminal-dot-yellow"></div>
          <div className="cyber-terminal-dot cyber-terminal-dot-green"></div>
        </div>
        <div className="cyber-terminal-title">NEURAL_INTERFACE_v2.1.0 - ACTIVE SESSION</div>
        <div className="cyber-terminal-status">
          <span className="cyber-status-indicator"></span>
          ONLINE
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`cyber-nav ${scrolled ? "cyber-nav-scrolled" : ""}`}>
        <div className="cyber-nav-container">
          {/* Logo/Brand */}
          <div className="cyber-nav-brand">
            <div className={`cyber-logo ${glitchActive ? "cyber-glitch" : ""}`}>
              <div className="cyber-logo-icon">
                <CircuitIcon className="w-8 h-8" />
              </div>
              <div className="cyber-logo-text">
                <div className="cyber-logo-main">CYBER</div>
                <div className="cyber-logo-sub">FOLIO_2077</div>
              </div>
            </div>
            <div className="cyber-logo-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="cyber-nav-desktop">
            <div className="cyber-nav-line"></div>
            <div className="cyber-nav-items">
              {navItems.map((item, index) => (
                <a key={item.name} href={item.href} className="cyber-nav-item group" data-code={item.code}>
                  <div className="cyber-nav-item-bg"></div>
                  <div className="cyber-nav-item-content">
                    <span className="cyber-nav-code">[{item.code}]</span>
                    <span className="cyber-nav-text">{item.name}</span>
                  </div>
                  <div className="cyber-nav-item-glow"></div>
                  <div className="cyber-nav-item-scan"></div>
                </a>
              ))}
            </div>
            <div className="cyber-nav-line"></div>
          </div>

          {/* Connection Status & CTA */}
          <div className="cyber-nav-actions">
            <div className="cyber-connection-status">
              <div className="cyber-signal-bars">
                <div className="cyber-signal-bar"></div>
                <div className="cyber-signal-bar"></div>
                <div className="cyber-signal-bar"></div>
              </div>
              <span className="cyber-connection-text">
                CONNECTION: <span className="cyber-connection-secure">SECURE</span>
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="cyber-mobile-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="cyber-mobile-toggle-bg"></div>
            <div className="cyber-mobile-toggle-icon">{isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}</div>
            <div className="cyber-mobile-toggle-scan"></div>
          </button>
        </div>

        {/* Scanning Line */}
        <div className="cyber-nav-scanner"></div>
      </nav>

      {/* Mobile Menu */}
      <div className={`cyber-mobile-menu ${isOpen ? "cyber-mobile-menu-active" : ""}`}>
        <div className="cyber-mobile-bg">
          <div className="cyber-mobile-grid"></div>
          <div className="cyber-mobile-scan-lines"></div>
        </div>

        <div className="cyber-mobile-content">
          <div className="cyber-mobile-header">
            <div className="cyber-mobile-title">NAVIGATION_MENU</div>
            <div className="cyber-mobile-subtitle">SELECT_TARGET_NODE</div>
          </div>

          <div className="cyber-mobile-items">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="cyber-mobile-item"
                onClick={() => setIsOpen(false)}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="cyber-mobile-item-bg"></div>
                <div className="cyber-mobile-item-content">
                  <div className="cyber-mobile-item-code">[{item.code}]</div>
                  <div className="cyber-mobile-item-text">{item.name}</div>
                  <div className="cyber-mobile-item-arrow">{">"}</div>
                </div>
                <div className="cyber-mobile-item-glow"></div>
              </a>
            ))}
          </div>

          <div className="cyber-mobile-footer">
            <button className="cyber-mobile-cta">
              <div className="cyber-mobile-cta-bg"></div>
              <span>ESTABLISH_CONNECTION</span>
              <ZapIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && <div className="cyber-mobile-backdrop" onClick={() => setIsOpen(false)} />}

      {/* Data Stream Visualization */}
      <div className="cyber-data-stream">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="cyber-data-particle"
            style={
              {
                "--delay": `${i * 0.3}s`,
                "--duration": `${2 + Math.random() * 3}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}
