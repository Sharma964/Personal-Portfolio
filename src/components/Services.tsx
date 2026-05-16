import { Globe, Brain, MessageCircle, Shield, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    Icon: Globe,
    title: "Web Development",
    desc: "Responsive, user-friendly websites with modern frontend interfaces and performance-focused architecture.",
  },
  {
    Icon: Brain,
    title: "AI-Based Applications",
    desc: "Intelligent systems with automation, smart user interaction, and AI-driven features.",
  },
  {
    Icon: MessageCircle,
    title: "Chatbot Development",
    desc: "AI chatbots for automation, customer interaction, and conversational interfaces.",
  },
  {
    Icon: Shield,
    title: "Secure Digital Solutions",
    desc: "Applications built with cybersecurity-focused development practices and secure architecture.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader tag="Services" title="What I build" subtitle="From concept to deployment — solutions crafted with care." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-7 shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary shadow-glow mb-5">
                  <Icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <ArrowUpRight className="absolute top-0 right-0 text-muted-foreground group-hover:text-neon-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
