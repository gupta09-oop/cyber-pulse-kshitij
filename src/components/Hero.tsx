import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Shield, ArrowRight } from "lucide-react";

const typewriterPhrases = [
  "Phishing Hunter",
  "CTF Solver", 
  "AI Defender",
  "Fast Learner",
  "Security Builder",
  "Threat Analyst"
];

export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterPhrases[currentPhrase];
      
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden terminal-border shadow-lg">
            <img 
              src="/lovable-uploads/6d8fbab6-df0e-4104-8cff-c8c1ff08a385.png" 
              alt="Kshitij Gupta - Cybersecurity Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Terminal Header */}
        <div className="flex items-center justify-center mb-8">
          <Terminal className="text-primary mr-3 h-8 w-8" />
          <span className="font-mono text-primary text-lg">kshitij@cyberspace:~$</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cyber text-6xl md:text-8xl font-bold mb-6 glow-text">
          KSHITIJ GUPTA
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-4">
          Aspiring Security Analyst | Cybersecurity Enthusiast
        </p>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
          Exploring how systems break — and how to defend them better.
        </p>

        {/* Typewriter Effect */}
        <div className="h-16 flex items-center justify-center mb-12">
          <div className="flex items-center">
            <Shield className="text-secondary mr-3 h-6 w-6" />
            <span className="font-mono text-2xl text-secondary glow-text-secondary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="cyber-button px-8 py-4 text-lg font-mono"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            className="cyber-button px-8 py-4 text-lg font-mono border-secondary text-secondary hover:text-secondary"
            onClick={() => scrollToSection('about')}
          >
            <span className="flex items-center gap-2">
              Start Scanning <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary h-6 w-6" />
        </div>
      </div>
    </section>
  );
};