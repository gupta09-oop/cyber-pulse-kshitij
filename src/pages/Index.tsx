import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;