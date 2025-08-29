import { useState, useEffect } from "react";
import { Terminal, Clock, Activity, Cpu, Wifi, Zap } from "lucide-react";

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
    <footer className="py-12 px-4 bg-muted/10 border-t border-primary/20 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-12 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-8 right-16 w-1 h-1 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Enhanced */}
          <div className="flex items-center mb-6 md:mb-0 group">
            <div className="relative">
              <Terminal className="text-primary mr-3 h-6 w-6 group-hover:animate-pulse transition-all duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            <div>
              <div className="font-cyber text-xl font-bold text-primary group-hover:glow-text transition-all duration-300">
                root@cyberpulse
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                Portfolio.sys v2.0.25
              </div>
            </div>
          </div>

          {/* Center Section - Enhanced System Monitor */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div className="text-center p-3 terminal-border rounded bg-background/30 hover:bg-secondary/5 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-1">
                <Activity className="text-secondary mr-2 h-4 w-4 group-hover:animate-pulse" />
                <span className="font-mono text-xs text-secondary">UPTIME</span>
              </div>
              <div className="font-cyber text-lg font-bold text-secondary group-hover:glow-text transition-all duration-300">
                {uptime}
              </div>
            </div>
            
            <div className="text-center p-3 terminal-border rounded bg-background/30 hover:bg-accent/5 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-1">
                <Clock className="text-accent mr-2 h-4 w-4 group-hover:animate-pulse" />
                <span className="font-mono text-xs text-accent">LAST_SCAN</span>
              </div>
              <div className="font-mono text-xs text-accent group-hover:glow-text transition-all duration-300">
                {lastScan}
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Status */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
              <Wifi className="text-primary h-4 w-4 animate-pulse" />
              <span className="font-mono text-xs text-primary">CONNECTED</span>
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              Built with React + TailwindCSS
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              © 2025 Kshitij Gupta. All systems operational.
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Scan Animation */}
        <div className="mt-8 relative overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 left-0 h-px w-20 bg-primary animate-scan opacity-75"></div>
          <div className="absolute top-0 right-0 h-px w-16 bg-secondary animate-scan opacity-50 animation-delay-1000"></div>
        </div>

        {/* Terminal Prompt */}
        <div className="mt-4 flex items-center justify-center">
          <span className="font-mono text-xs text-accent">kshitij@portfolio:~$</span>
          <div className="w-1.5 h-3 bg-accent ml-1 animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};