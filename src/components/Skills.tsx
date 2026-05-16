import { SectionHeader } from "./SectionHeader";

const technical = [
  { name: "Web Development", level: 90 },
  { name: "Artificial Intelligence", level: 80 },
  { name: "Cybersecurity Fundamentals", level: 75 },
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "Chatbot Development", level: 82 },
  { name: "Responsive UI Development", level: 92 },
];

const languages = ["C", "C++", "Python", "Java"];
const additional = ["Problem Solving", "Team Collaboration", "Logical Thinking", "AI-Based Projects"];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader tag="Skills" title="Tools of the craft" subtitle="A toolkit forged through projects, study, and curiosity." />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 shadow-card">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technical.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{s.name}</span>
                    <span className="font-mono text-neon-cyan">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary shadow-glow"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 shadow-card">
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-purple" />
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="group relative rounded-xl border border-border bg-background/40 p-5 text-center font-mono font-semibold hover:border-primary hover:shadow-glow hover:-translate-y-1 transition-all"
                  >
                    <span className="text-gradient">{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 shadow-card">
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-blue" />
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm hover:border-neon-cyan hover:text-neon-cyan transition-colors"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
