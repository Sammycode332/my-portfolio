type Role = {
  title: string;
  org: string;
  detail: string;
};

const roles: Role[] = [
  {
    title: "AI Data Backend Engineer Intern",
    org: "FlyRank",
    detail:
      "Building AI-powered backend services and integrating LLM APIs into production workflows.",
  },
  {
    title: "Software Engineering Intern",
    org: "HatchDev (Nithub)",
    detail:
      "9-month program: hands-on real-world projects, applying AI in engineering work.",
  },
];

export default function Currently() {
  return (
    <div className="mt-12">
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        Currently
      </h2>

      <ul className="mt-4 space-y-4">
        {roles.map((role) => (
          <li key={role.org} className="border-l-2 border-accent pl-4">
            <p className="font-semibold">
              {role.title} <span className="text-accent">@ {role.org}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{role.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}