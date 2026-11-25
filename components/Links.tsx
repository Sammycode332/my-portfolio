type SocialLink = {
  label: string;
  href: string;
  external: boolean;
};

const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Sammycode332", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-oroja-382847395/",
    external: true,
  },
  { label: "Email", href: "mailto:samueloroja123@gmail.com", external: false },
  { label: "CV", href: "/cv.pdf", external: true },
  {
    label: "Book a call",
    href: "https://calendly.com/samueloroja123/30min",
    external: true,
  },
];

export default function Links() {
  return (
    <div className="mt-12">
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="inline-block rounded-full border border-white/15 px-4 py-2 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#work"
        className="mt-10 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
      >
        See my work ↓
      </a>
    </div>
  );
}