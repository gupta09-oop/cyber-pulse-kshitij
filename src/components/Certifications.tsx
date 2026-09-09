import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, ChevronDown, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import comptiaCertificate from "@/assets/comptia-network-plus-certificate.pdf.asset.json";
import comptiaBadge from "@/assets/comptia-network-plus-badge.jpg.asset.json";

const certifications = [
  {
    title: "CompTIA Network+",
    issuer: "CompTIA",
    date: "September 5, 2026",
    type: "Professional",
    color: "text-primary",
    image: comptiaBadge.url,
    certificateUrl: comptiaCertificate.url,
  },
  { title: "Network Security & Ethical Hacking Essentials — Certificate of Merit", issuer: "LPU Centre for Professional Enhancement", date: "August 2026", type: "Certificate of Merit", color: "text-secondary", image: null, certificateUrl: null },
  { title: "Certified VAPT Practitioner", issuer: "ThunderCipher", date: "April 2026", type: "Professional", color: "text-accent", image: null, certificateUrl: null },
  { title: "Junior Web Application Pentester", issuer: "Sturtle Security", date: "March 2026", type: "Professional", color: "text-primary", image: null, certificateUrl: null },
  { title: "Introduction to OSINT", issuer: "Security Blue Team", date: "April 2025", type: "Professional", color: "text-secondary", image: "/lovable-uploads/56933fda-ad55-41ef-b520-ee8ede7a3968.png", certificateUrl: null },
];

const additionalLearning = [
  { title: "StackSmash CTF Playground", issuer: "HackTheBox", date: "Jul 2025", type: "CTF Competition", color: "text-accent", image: "/lovable-uploads/stacksmash-ctf-certificate.jpg", certificateUrl: null },
  { title: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn", date: "Apr 2025", type: "Learning Path", color: "text-primary", image: "/lovable-uploads/464dfb19-fc57-42ab-bdb4-9d5762e4988b.png", certificateUrl: null },
  { title: "Pre Security Learning Path", issuer: "TryHackMe", date: "Feb 2026", type: "Learning Path", color: "text-secondary", image: "/lovable-uploads/pre-security-tryhackme.jpg", certificateUrl: null },
];

type Cert = (typeof certifications)[number];

const CertCard = ({ cert }: { cert: Cert }) => (
  <div className="glass-card p-6 h-full flex flex-col">
    <div className="flex items-start justify-between gap-3 mb-4">
      <Award className={`${cert.color} h-7 w-7 flex-shrink-0`} />
      <Badge variant="outline" className={`${cert.color} border-current text-xs`}>{cert.type}</Badge>
    </div>
    <h3 className={`font-cyber text-base md:text-lg font-bold ${cert.color} mb-2 leading-tight`}>{cert.title}</h3>
    <p className="text-muted-foreground font-mono text-sm mb-3">{cert.issuer}</p>
    <div className="flex items-center text-muted-foreground text-sm mb-3">
      <Calendar className="mr-1.5 h-4 w-4" />
      {cert.date}
    </div>
    {cert.title === "CompTIA Network+" && cert.image && (
      <img
        src={cert.image}
        alt="CompTIA Network+ certified badge"
        className="w-28 h-28 object-contain mx-auto my-3 rounded-lg"
      />
    )}
    {cert.image && (
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full mt-auto flex items-center justify-center gap-2 px-4 py-2.5 glass-card hover:border-primary/40 transition-colors font-mono text-sm">
            <Eye className="h-4 w-4" /> View Certificate
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="font-cyber text-lg">{cert.title}</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            {cert.certificateUrl ? (
              <iframe
                src={cert.certificateUrl}
                title={`${cert.title} certificate`}
                className="w-full h-[70vh] rounded-lg bg-background"
              />
            ) : (
              <img src={cert.image} alt={`${cert.title} certificate issued by ${cert.issuer}`} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    )}
  </div>
);

export const Certifications = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="certifications" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Certifications</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 0.08}>
              <CertCard cert={cert} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowMore((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 glass-card font-mono text-sm hover:border-primary/40 transition-colors"
              aria-expanded={showMore}
            >
              Additional Learning
              <ChevronDown className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showMore && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {additionalLearning.map((cert) => (
                <CertCard key={cert.title} cert={cert} />
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};
