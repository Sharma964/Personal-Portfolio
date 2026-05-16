import { useEffect, useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/sonu-hero.jpg";

const ROLES = [
  "Software Engineer",
  "AI Developer",
  "Web Developer",
  "Cybersecurity Enthusiast",
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        ),
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-neon-cyan/60 shadow-glow-cyan animate-float"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

const STACK = ["React", "TypeScript", "Python", "AI/ML", "Tailwind", "Node"];

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Aurora + grid + particles */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full bg-gradient-to-r from-neon-blue/20 via-primary/30 to-neon-cyan/20 blur-3xl animate-gradient" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-glow" />
      <Particles />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono">
            <Sparkles size={12} className="text-neon-cyan" />
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Sonu Sharma</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
              I'm a{" "}
              <span className="text-gradient">{role}</span>
              <span className="inline-block w-[3px] h-[0.9em] align-middle ml-1 bg-neon-cyan animate-pulse" />
            </span>
          </h1>

          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            B.Tech Computer Engineering student crafting{" "}
            <span className="text-neon-cyan">AI-powered</span> applications, modern{" "}
            <span className="text-neon-purple">web experiences</span>, and{" "}
            <span className="text-neon-blue">secure</span> digital solutions.
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="font-mono text-xs rounded-full glass px-3 py-1.5 hover:text-neon-cyan hover:shadow-glow-cyan transition-all"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:border-primary/60 hover:text-neon-cyan transition-colors"
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

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
            {[
              { v: "10+", l: "Projects" },
              { v: "4+", l: "Languages" },
              { v: "2028", l: "Graduating" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl px-4 py-3 text-center">
                <div className="text-xl font-bold text-gradient">{s.v}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
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

        {/* RIGHT — avatar */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px]">
            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_22s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-dashed border-neon-cyan/30 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neon-cyan shadow-glow-cyan" />
            </div>
            <div className="absolute inset-6 animate-[spin_24s_linear_infinite_reverse]">
              <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-neon-purple shadow-glow" />
            </div>

            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-primary blur-3xl opacity-60 animate-glow" />

            {/* Avatar */}
            <div className="absolute inset-12 rounded-full bg-gradient-primary p-[2px] animate-gradient">
              <div className="w-full h-full rounded-full bg-background overflow-hidden">
                <img
                  src={heroImg}
                  alt="Sonu Sharma portrait"
                  width={440}
                  height={440}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-2 -right-2 glass rounded-2xl px-4 py-3 font-mono text-xs animate-float shadow-glow-cyan">
              <div className="text-neon-cyan">{"<AI />"}</div>
              <div className="text-muted-foreground">Developer</div>
            </div>
            <div
              className="absolute -bottom-2 -left-2 glass rounded-2xl px-4 py-3 font-mono text-xs animate-float shadow-glow"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-neon-purple">B.Tech</div>
              <div className="text-muted-foreground">2024 – 2028</div>
            </div>
            <div
              className="absolute top-1/2 -left-6 -translate-y-1/2 glass rounded-xl px-3 py-2 font-mono text-[11px] animate-float shadow-glow-cyan hidden md:block"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-muted-foreground">status: online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors animate-float"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-8 w-5 rounded-full border border-current grid place-items-start p-1">
          <span className="h-1.5 w-1 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
