import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { CTFDevelopment } from "@/components/CTFDevelopment";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <ParticleBackground />
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-30" />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CTFDevelopment />
        <Achievements />
        <Certifications />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
