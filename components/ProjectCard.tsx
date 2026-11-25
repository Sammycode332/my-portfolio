import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-accent/50">
      <div className="relative aspect-[16/7] bg-white/5">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 font-mono text-sm text-muted">
            <p>
              <span className="text-accent">$</span> {project.tagline}
            </p>
          </div>
        )}
      </div>

      <div className="p-6">
        {project.highlight && (
          <p className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            {project.highlight}
          </p>
        )}

        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4 font-mono text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground hover:underline"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
