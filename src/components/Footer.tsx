import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/60 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-bold">Sonu Sharma</span> — Designed & Developed with passion.
        </div>
        <div className="flex items-center gap-2">
          {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid place-items-center h-10 w-10 rounded-xl glass hover:text-neon-cyan hover:shadow-glow-cyan transition-all"
              aria-label="Social link"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
