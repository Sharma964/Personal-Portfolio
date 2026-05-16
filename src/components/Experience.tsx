import { Sparkles, Code, Cpu, Shield } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  {
    Icon: Sparkles,
    title: "Foundations & First Builds",
    period: "2024",
    desc: "Began B.Tech journey, dove into C/C++, DSA fundamentals, and first responsive web projects.",
  },
  {
    Icon: Code,
    title: "Frontend & Full-Stack",
    period: "2024 – Present",
    desc: "Designing and shipping modern React interfaces with focus on UX, performance, and accessibility.",
  },
  {
    Icon: Cpu,
    title: "AI & Chatbots",
    period: "2025 – Present",
    desc: "Building AI-powered applications and intelligent chatbots exploring NLP and automation.",
  },
  {
    Icon: Shield,
    title: "Security & Blockchain",
    period: "2025 – Present",
    desc: "Exploring cybersecurity principles and blockchain through projects like Herb Trace Ayur.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          tag="Journey"
          title="Experience & Learning"
          subtitle="A project-based path of continuous growth — turning curiosity into capability."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="space-y-10">
            {timeline.map(({ Icon, title, period, desc }, i) => (
              <div
                key={title}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className="glass rounded-2xl p-6 shadow-card hover:shadow-glow transition-all">
                    <div className="font-mono text-xs text-neon-cyan mb-2">{period}</div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 grid place-items-center h-12 w-12 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
