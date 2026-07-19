import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import profilePic from "/about.webp";

const socials = [
  { Icon: FaGithub, href: "https://github.com/gaurav-subedi", label: "GitHub" },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/gaurav-subedi-87a0282a5/",
    label: "LinkedIn",
  },
  {
    Icon: FaEnvelope,
    href: "mailto:thegauravsubedi@gmail.com",
    label: "Email",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar-surface relative mb-6 overflow-hidden rounded-card border border-border p-6 lg:sticky lg:top-8 lg:mb-0 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:self-start lg:overflow-y-auto lg:p-8">
      {/* faint animated glow, top-left only */}
      <div
        aria-hidden
        className="sidebar-mesh pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        {/* TOP — logo mark only + availability pill */}
        <div className="space-y-5">
          <img
            src="/wlogo.webp"
            alt="Gaurav Subedi logo"
            width={3300}
            height={2508}
            loading="eager"
            className="h-9 w-auto object-contain"
          />
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
            <span
              className="h-2 w-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 8px 1px var(--accent)" }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
              Available for Summer 2027 Internships
            </span>
          </div>
        </div>

        {/* MIDDLE — identity */}
        <div className="flex flex-col">
          {/* photo — square, rounded-2xl, object-cover */}
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={profilePic}
              alt="Gaurav Subedi"
              width={2049}
              height={2026}
              loading="eager"
              fetchPriority="high"
              className="aspect-square w-full select-none object-cover"
            />
          </div>

          {/* MOTION — rotating circular text badge with GS monogram */}
          <div className="motion-badge relative mx-auto mt-6 h-[6.5rem] w-[6.5rem]">
            <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
              <defs>
                <path
                  id="sidebar-badge-path"
                  fill="none"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                />
              </defs>
              <text
                className="fill-accent uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                }}
              >
                <textPath href="#sidebar-badge-path" startOffset="0">
                  OPEN TO WORK • SUMMER 2027 •&nbsp;
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-bg font-display text-base font-bold text-accent-text">
              GS
            </span>
          </div>

          {/* name + role */}
          <div className="mt-6 text-center">
            <p className="font-display text-2xl font-bold text-fg">
              Gaurav Subedi
            </p>
            <p className="mt-1.5 text-sm text-fg-muted">
              Software Engineer Intern @ Oak Hill Advisors
            </p>
          </div>

          {/* contact lines */}
          <div className="mt-5 space-y-1.5 text-center font-mono text-xs text-fg-muted">
            <a
              href="mailto:thegauravsubedi@gmail.com"
              className="block transition-colors hover:text-accent-text"
            >
              thegauravsubedi@gmail.com
            </a>
            <p>Arlington, TX</p>
          </div>

          {/* socials */}
          <div className="mt-5 flex justify-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-control border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent-text"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM — accent CTA anchored to bottom */}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-control bg-accent px-5 py-3 text-center text-base font-bold text-black transition-colors hover:bg-accent-dim focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
        >
          View Resume
        </a>
      </div>
    </aside>
  );
}
