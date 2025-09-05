import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Shield } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Matrix Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="cyber-grid animate-scan"></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Terminal Boot Sequence */}
        <div className="terminal-border p-4 mb-8 bg-background/50 backdrop-blur-sm animate-fade-in">
          <div className="font-mono text-xs text-secondary space-y-1">
            <div className="animate-pulse">$ sudo systemctl start cybersec-analyst.service</div>
            <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>Loading security modules... ✓</div>
            <div className="animate-pulse" style={{ animationDelay: '1s' }}>Initializing threat detection... ✓</div>
            <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>Welcome, Kshitij Gupta</div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden terminal-border shadow-lg animate-float">
            <img 
              src="/lovable-uploads/6d8fbab6-df0e-4104-8cff-c8c1ff08a385.png" 
              alt="Kshitij Gupta - Cybersecurity Professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 animate-pulse-glow rounded-full"></div>
          </div>
        </div>

        {/* Terminal Header */}
        <div className="flex items-center justify-center mb-8">
          <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
          <span className="font-mono text-primary text-lg typewriter">kshitij@cyberspace:~$</span>
          <span className="animate-pulse ml-2">▋</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cyber text-6xl md:text-8xl font-bold mb-6 glow-text">
          KSHITIJ GUPTA
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-4">
          Aspiring Security Analyst | AI & Wi-Fi Security Projects
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

        {/* Terminal Command Simulation */}
        <div className="terminal-border p-4 mb-8 bg-background/50 backdrop-blur-sm">
          <div className="font-mono text-sm text-left">
            <div className="text-secondary">root@portfolio:~$ ./initialize_portfolio.sh</div>
            <div className="text-primary animate-pulse">Scanning for vulnerabilities... 🔍</div>
            <div className="text-accent">Found: Exceptional cybersecurity skills ✓</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="cyber-button px-8 py-4 text-lg font-mono animate-pulse-glow"
            onClick={() => scrollToSection('projects')}
          >
            <Terminal className="mr-2 h-5 w-5" />
            ./view_projects.sh
          </Button>
          <Button 
            variant="outline" 
            className="cyber-button px-8 py-4 text-lg font-mono border-secondary text-secondary hover:text-secondary"
            onClick={() => scrollToSection('about')}
          >
            <Shield className="mr-2 h-5 w-5" />
            nmap -sV localhost →
          </Button>
        </div>

        {/* Scroll Indicator with scanning effect */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="font-mono text-xs text-secondary mb-2">scroll_down.sh</div>
            <ArrowDown className="text-primary h-6 w-6 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};