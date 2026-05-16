import { Github, Linkedin, Twitter, Instagram, Download, ArrowRight, Mail } from "lucide-react";
import heroImg from "@/assets/sonu-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-glow" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Sonu Sharma</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
              Building the future with code.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Software Engineer <span className="text-neon-cyan">|</span> AI Developer{" "}
            <span className="text-neon-cyan">|</span> Web Developer{" "}
            <span className="text-neon-cyan">|</span> Cybersecurity Enthusiast
          </p>
          <p className="text-muted-foreground max-w-xl">
            B.Tech Computer Engineering student passionate about crafting innovative digital solutions,
            AI-powered applications, and secure user experiences.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:border-primary/60 transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold hover:bg-secondary/50 transition-colors"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center h-11 w-11 rounded-xl glass hover:shadow-glow hover:scale-110 hover:text-neon-cyan transition-all"
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-60 animate-glow" />
            <div className="absolute inset-4 rounded-full bg-gradient-primary p-[2px] animate-gradient">
              <div className="w-full h-full rounded-full bg-background overflow-hidden">
                <img
                  src={heroImg}
                  alt="Sonu Sharma portrait"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 font-mono text-xs animate-float shadow-glow-cyan">
              <div className="text-neon-cyan">{"<AI />"}</div>
              <div className="text-muted-foreground">Developer</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 font-mono text-xs animate-float shadow-glow" style={{ animationDelay: "1.5s" }}>
              <div className="text-neon-purple">B.Tech</div>
              <div className="text-muted-foreground">2024 – 2028</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
