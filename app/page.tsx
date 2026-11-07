import ThemeToggle from "@/components/ThemeToggle";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
  stats,
} from "@/content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-xl font-semibold">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-line bg-surface [&::-webkit-details-marker]:hidden" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-line bg-surface p-2 shadow-xl">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-xl px-3 py-2 text-sm hover:bg-accent-soft hover:text-accent-strong">
                  {n.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-glow">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" /> Open to data analyst roles · {profile.location}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-accent">{profile.role}.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-strong">
              View my work
            </a>
            {profile.cv && (
              <a href={profile.cv} className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent">
                Download CV
              </a>
            )}
          </div>
          <SocialLinks className="mt-8" />
        </div>
        <div className="reveal mx-auto w-full max-w-[14rem] md:max-w-xs [animation-delay:150ms]">
          <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-cta to-cta-strong p-1.5 shadow-2xl shadow-cta/30">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={profile.fullName} className="h-full w-full rounded-[1.7rem] object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center rounded-[1.7rem] bg-surface font-display text-7xl font-semibold text-accent">
                {initials(profile.name)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    profile.github && { href: profile.github, label: "GitHub", d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
    profile.linkedin && { href: profile.linkedin, label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
    profile.email && { href: `mailto:${profile.email}`, label: "Email", d: "M4 4h16v16H4zM22 6l-10 7L2 6" },
  ].filter(Boolean) as { href: string; label: string; d: string }[];
  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition hover:border-accent hover:text-accent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d={l.d} />
          </svg>
        </a>
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle eyebrow="About" title="A bit about me" />
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-muted">{profile.intro}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-display text-4xl font-semibold text-accent">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-surface-2/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Education" title="Where I studied" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.detail} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <span className="text-sm text-muted">{e.period}</span>
              </div>
              <p className="mt-2">{e.detail}</p>
              <p className="mt-3 text-sm font-medium text-accent">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-surface-2/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Projects" title="Things I've built" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group flex flex-col rounded-3xl border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.kind}</p>
                {p.featured && <Tag>Featured</Tag>}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted">{p.summary}</p>
              <ul className={`mt-5 grid gap-3 ${p.featured ? "md:grid-cols-2" : ""}`}>
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 text-sm font-semibold transition hover:border-cta hover:bg-cta hover:text-white">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionTitle eyebrow="Experience" title="Where I've worked" />
      <ol className="relative space-y-8 border-l-2 border-line pl-8">
        {experience.map((x) => (
          <li key={x.org} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-accent" />
            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{x.role}</h3>
                <span className="text-sm text-muted">{x.period}</span>
              </div>
              <p className="text-sm font-medium text-accent">
                {x.org} · {x.team}
              </p>
              <ul className="mt-4 space-y-2">
                {x.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Skills" title="What I work with" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-semibold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="mb-20 bg-surface-2/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Certifications" title="Credentials and awards" />
        <ul className="grid gap-4 md:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-5">
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-accent">{c.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="rounded-[2rem] bg-gradient-to-br from-cta to-cta-strong px-6 py-14 text-center text-white sm:px-12">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-90">
          I&apos;m looking for data analyst roles in the Klang Valley. If you have a question your data should be able to answer, I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-cta transition hover:opacity-90">
              Email me
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-current px-6 py-3 text-sm font-semibold transition hover:opacity-80">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-current px-6 py-3 text-sm font-semibold transition hover:opacity-80">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.fullName}
      </footer>
    </>
  );
}
