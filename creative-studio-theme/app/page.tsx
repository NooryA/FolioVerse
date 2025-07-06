import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import ProjectsSection from "../components/projects-section";
import ContactSection from "../components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
