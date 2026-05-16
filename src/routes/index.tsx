import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonu Sharma — Software Engineer & AI Developer" },
      { name: "description", content: "Portfolio of Sonu Sharma — Software Engineer, AI Developer, Web Developer, and Cybersecurity Enthusiast based in Pune, India." },
      { property: "og:title", content: "Sonu Sharma — Software Engineer & AI Developer" },
      { property: "og:description", content: "Building innovative AI-powered applications, modern web experiences, and secure digital solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
