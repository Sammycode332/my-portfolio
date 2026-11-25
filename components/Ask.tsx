export default function Ask() {
  return (
    <section id="ask" className="py-24">
      <h2 className="text-3xl font-bold">Let&apos;s scope a trial project</h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Give me one defined backend task, such as an API, a data pipeline, or an
        LLM integration, with a clear deliverable and a deadline. You get
        working, tested code and a short write-up of how it works.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:samueloroja123@gmail.com"
          className="rounded-full bg-accent px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90"
        >
          Email me to talk
        </a>
        <a
          href="https://calendly.com/samueloroja123/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          Book a call
        </a>
      </div>
    </section>
  );
}