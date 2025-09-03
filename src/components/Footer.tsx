import { useState, useEffect } from "react";
import { Terminal, Clock, Activity } from "lucide-react";

export const Footer = () => {
  const [uptime, setUptime] = useState("00:00:00");
  const [lastScan, setLastScan] = useState("");

  useEffect(() => {
    const startTime = Date.now();
    setLastScan(new Date().toLocaleString());

    const updateUptime = () => {
      const now = Date.now();
      const diff = now - startTime;
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      
      setUptime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    const interval = setInterval(updateUptime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-4 bg-muted/10 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center mb-6 md:mb-0">
            <Terminal className="text-primary mr-3 h-6 w-6" />
            <div>
              <div className="font-cyber text-xl font-bold text-primary">
                Kshitij Gupta
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                Cybersecurity Portfolio v2.0
              </div>
            </div>
          </div>

          {/* Center Section - System Info */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div className="text-center">
              <div className="flex items-center mb-1">
                <Activity className="text-secondary mr-2 h-4 w-4" />
                <span className="font-mono text-sm text-secondary">System Uptime</span>
              </div>
              <div className="font-cyber text-lg font-bold text-secondary">
                {uptime}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center mb-1">
                <Clock className="text-accent mr-2 h-4 w-4" />
                <span className="font-mono text-sm text-accent">Last Scan</span>
              </div>
              <div className="font-mono text-sm text-accent">
                {lastScan}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <div className="font-mono text-sm text-muted-foreground mb-1">
              Built with React + TailwindCSS
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              © 2025 Kshitij Gupta. All systems operational.
            </div>
          </div>
        </div>

        {/* Bottom Scan Line Animation */}
        <div className="mt-8 relative overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 left-0 h-px w-20 bg-primary animate-scan opacity-75"></div>
        </div>
      </div>
    </footer>
  );
};