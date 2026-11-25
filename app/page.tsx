// One scrolling page, three sections. Each <section> has an `id` so links
// like href="#work" can jump straight to it.
import Hero from "@/components/Hero";
import Currently from "@/components/Currently";
import Links from "@/components/Links";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Writing from "@/components/Writing";
import Ask from "@/components/Ask";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <section id="home" className="min-h-screen py-24">
        <Hero />
        <Currently />
        <Links />
      </section>

      <section id="work" className="py-24">
        <h2 className="text-3xl font-bold">Proof / Work</h2>
        <p className="mt-2 text-muted">Things I&apos;ve built and shipped.</p>

        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
            <Writing />
      <Ask />

      <footer className="border-t border-white/10 py-10 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Samuel Oroja
      </footer>
    </main>
  );
}
