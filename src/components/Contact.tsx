import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader tag="Contact" title="Let's build something great" subtitle="Open to internships, collaborations, and interesting problems." />

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {[
              { Icon: Mail, label: "Email", value: "sonusharma@example.com" },
              { Icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
              { Icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
              { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile" },
              { Icon: Github, label: "GitHub", value: "github.com/yourusername" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-glow transition-all">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary shadow-glow shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-neon-cyan uppercase tracking-wider">{label}</div>
                  <div className="text-sm truncate">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-8 shadow-card space-y-4 glow-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  required
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
              <input
                className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition-all"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 outline-none focus:border-primary focus:shadow-glow transition-all resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message Sent ✨" : (<><Send size={18} className="group-hover:translate-x-1 transition-transform" /> Send Message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
