import { GraduationCap, Code2, Rocket, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  { Icon: Code2, label: "Web Development", desc: "Modern responsive interfaces" },
  { Icon: Brain, label: "AI & ML", desc: "Smart, intelligent systems" },
  { Icon: Rocket, label: "Problem Solving", desc: "DSA & logical thinking" },
  { Icon: GraduationCap, label: "Continuous Learner", desc: "Curiosity-driven growth" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader tag="About Me" title="Driven by curiosity, built with code" />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="glass rounded-3xl p-8 shadow-card glow-border">
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Sonu Sharma</span>, a passionate Software
              Engineer and B.Tech Computer Engineering student with strong interests in Web Development,
              Artificial Intelligence, Cybersecurity, and modern digital technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I enjoy creating efficient, user-friendly, and innovative digital solutions while continuously
              learning and improving my technical expertise. I'm dedicated to teamwork, creativity, logical
              thinking, and delivering impactful projects.
            </p>

            <div className="mt-8 rounded-2xl border border-border/60 p-5 bg-background/40">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow">
                  <GraduationCap className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <div className="font-semibold">Bachelor of Technology — Computer Engineering</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Pimpri Chinchwad College of Engineering, Pune
                  </div>
                  <div className="text-xs font-mono text-neon-cyan mt-2">Expected Graduation · 2028</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ Icon, label, desc }) => (
              <div
                key={label}
                className="group glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-secondary mb-4 group-hover:bg-gradient-primary transition-colors">
                  <Icon size={20} className="text-neon-cyan group-hover:text-primary-foreground" />
                </div>
                <div className="font-semibold">{label}</div>
                <div className="text-sm text-muted-foreground mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
