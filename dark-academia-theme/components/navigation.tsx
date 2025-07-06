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

const FeatherIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4m-6-4h11M3 12h7l-7-8v8z" />
  </svg>
);

const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM18.82 9L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
  </svg>
);

const ScrollIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const navItems = [
    { name: "Folio", href: "#home", latin: "Prima" },
    { name: "About", href: "#about", latin: "De Me" },
    { name: "Works", href: "#projects", latin: "Opera" },
    { name: "Contact", href: "#contact", latin: "Epistu" },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Academic Header Banner */}
      <div className="academia-header-banner">
        <div className="academia-banner-content">
          <div className="academia-banner-left">
            <div className="academia-crest">
              <GraduationCapIcon className="w-6 h-6" />
            </div>
            <div className="academia-institution">
              <div className="academia-institution-name">COLLEGIUM DIGITALIS</div>
              <div className="academia-institution-motto">Scientia et Ars</div>
            </div>
          </div>
          <div className="academia-banner-right">
            <div className="academia-date">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="academia-time">{formatTime(currentTime)}</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`academia-nav ${scrolled ? "academia-nav-scrolled" : ""}`}>
        <div className="academia-nav-container">
          {/* Logo & Brand */}
          <div className="academia-nav-brand">
            <div className="academia-logo">
              <div className="academia-logo-seal">
                <div className="academia-logo-outer-ring">
                  <div className="academia-logo-inner-circle">
                    <BookOpenIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="academia-logo-text">
                <div className="academia-logo-main">Portfolio</div>
                <div className="academia-logo-sub">MMXXIV</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="academia-nav-desktop">
            <div className="academia-nav-list">
              {navItems.map((item, index) => (
                <a key={item.name} href={item.href} className="academia-nav-item group">
                  <div className="academia-nav-item-content">
                    <span className="academia-nav-main">{item.name}</span>
                    <span className="academia-nav-latin">{item.latin}</span>
                  </div>
                  <div className="academia-nav-underline"></div>
                  <div className="academia-nav-ornament"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Scholar Tools */}
          <div className="academia-nav-tools">
            <div className="academia-language-selector">
              <button className="academia-lang-btn">
                <span>EN</span>
                <div className="academia-lang-dropdown">
                  <div className="academia-lang-option">English</div>
                  <div className="academia-lang-option">Latin</div>
                  <div className="academia-lang-option">Français</div>
                </div>
              </button>
            </div>

            <button className="academia-contact-btn group">
              <div className="academia-contact-bg"></div>
              <div className="academia-contact-content">
                <FeatherIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Correspondence</span>
              </div>
              <div className="academia-contact-wax-seal"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="academia-mobile-toggle md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="academia-mobile-toggle-bg"></div>
            <div className="academia-mobile-toggle-icon">{isOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}</div>
          </button>
        </div>

        {/* Decorative Border */}
        <div className="academia-nav-border">
          <div className="academia-border-pattern"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`academia-mobile-menu ${isOpen ? "academia-mobile-menu-open" : ""}`}>
        <div className="academia-mobile-bg">
          <div className="academia-mobile-paper-texture"></div>
          <div className="academia-mobile-ornaments">
            <div className="academia-ornament academia-ornament-top-left"></div>
            <div className="academia-ornament academia-ornament-top-right"></div>
            <div className="academia-ornament academia-ornament-bottom-left"></div>
            <div className="academia-ornament academia-ornament-bottom-right"></div>
          </div>
        </div>

        <div className="academia-mobile-content">
          <div className="academia-mobile-header">
            <div className="academia-mobile-seal">
              <GraduationCapIcon className="w-8 h-8" />
            </div>
            <div className="academia-mobile-title">Navigation</div>
            <div className="academia-mobile-subtitle">Navigationis Libellus</div>
          </div>

          <div className="academia-mobile-divider"></div>

          <div className="academia-mobile-items">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="academia-mobile-item"
                onClick={() => setIsOpen(false)}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="academia-mobile-item-bg"></div>
                <div className="academia-mobile-item-content">
                  <div className="academia-mobile-item-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="academia-mobile-item-text">
                    <div className="academia-mobile-item-main">{item.name}</div>
                    <div className="academia-mobile-item-latin">{item.latin}</div>
                  </div>
                  <div className="academia-mobile-item-flourish">❦</div>
                </div>
              </a>
            ))}
          </div>

          <div className="academia-mobile-divider"></div>

          <div className="academia-mobile-footer">
            <button className="academia-mobile-cta">
              <div className="academia-mobile-cta-bg"></div>
              <div className="academia-mobile-cta-content">
                <FeatherIcon className="w-5 h-5" />
                <span>Begin Correspondence</span>
              </div>
            </button>

            <div className="academia-mobile-motto">"Knowledge through Digital Arts"</div>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && <div className="academia-mobile-backdrop" onClick={() => setIsOpen(false)} />}

      {/* Floating Academic Elements */}
      <div className="academia-floating-elements">
        <div className="academia-floating-quill"></div>
        <div className="academia-floating-scroll"></div>
        <div className="academia-floating-ink-well"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="academia-scroll-indicator">
        <div className="academia-scroll-ornament">
          <ScrollIcon className="w-4 h-4" />
        </div>
        <div className="academia-scroll-text">Scroll to Continue</div>
      </div>
    </>
  );
}
