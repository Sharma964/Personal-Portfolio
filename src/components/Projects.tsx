import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import chatbotImg from "@/assets/project-chatbot.jpg";
import webImg from "@/assets/project-web.jpg";
import blockchainImg from "@/assets/project-blockchain.jpg";

const projects = [
  {
    img: chatbotImg,
    title: "AI-Based Chatbot",
    desc: "Intelligent chatbot delivering smart responses and natural conversational experiences powered by modern NLP.",
    tags: ["Python", "NLP", "AI", "Flask"],
  },
  {
    img: webImg,
    title: "Responsive Web Applications",
    desc: "Modern responsive web apps with clean UI/UX focused on user-friendly and efficient digital experiences.",
    tags: ["React", "Tailwind", "TypeScript"],
  },
  {
    img: blockchainImg,
    title: "Herb Trace Ayur (Blockchain)",
    desc: "Blockchain solution for Ayurvedic product transparency, traceability, and decentralized supply chain trust.",
    tags: ["Blockchain", "Solidity", "Web3", "React"],
    
    live:"https://herb-trace-ayur-block-chain.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader tag="Portfolio" title="Featured Projects" subtitle="A selection of work blending design, intelligence, and security." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group glass rounded-3xl overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs rounded-full bg-secondary/70 border border-border px-3 py-1 text-neon-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-neon-cyan transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-neon-cyan transition-colors"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
