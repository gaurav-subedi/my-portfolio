import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectLink {
  label: string;
  href: string; // TODO: replace "#" placeholders with real URLs
  external?: boolean;
}

interface Project {
  title: string;
  description: string;
  image?: string; // omit to render a styled placeholder
  tech: string[];
  links: ProjectLink[];
  comingSoon?: boolean;
}

const featured: Project = {
  title: "Launchpad",
  description:
    "Internship tracker that auto-parses recruitment emails via Gmail API, extracts structured data with an LLM, and tracks applied → interview → offer in a live dashboard.",
  image: "launchpad.png",
  tech: ["FastAPI", "Supabase", "React", "TypeScript", "LLM"],
  links: [
    {
      label: "Live Demo",
      href: "https://launchpad-sand-five.vercel.app/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/gaurav-subedi/launchpad",
      external: true,
    },
  ],
};

const projects: Project[] = [
  {
    title: "Real-time Chat App",
    description:
      "Real-time messaging with WebSocket-powered live chat. FastAPI backend, React/TypeScript frontend, PostgreSQL on Supabase.",
    image: "realtimechat.png",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "WebSockets"],
    links: [
      {
        label: "Live Demo",
        href: "https://realtime-chat-five-eta.vercel.app/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/gaurav-subedi/realtime-chat",
        external: true,
      },
    ],
  },
  {
    title: "PhotoPhrase",
    description:
      "An end-to-end AI image-captioning system with a cross-platform Expo React Native app in TypeScript. A Flask API wraps Hugging Face's BLIP model to generate accurate captions.",
    image: "123.jpg",
    tech: ["React Native", "TypeScript", "Flask", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/gaurav-subedi/photophrase",
        external: true,
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// MOTION #2 — project card hover glow + slight lift
const hoverLift = {
  y: -6,
  boxShadow: "0 0 22px rgba(0, 255, 153, 0.2)",
};

function TechChips({ tech }: { tech: string[] }) {
  if (tech.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-text"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectButtons({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => {
        const isPrimary = i === 0;
        const Icon = link.label === "GitHub" ? FaGithub : FiExternalLink;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={
              isPrimary
                ? "inline-flex w-fit items-center gap-2 rounded-control bg-accent px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-dim focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                : "inline-flex w-fit items-center gap-2 rounded-control border border-border px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-accent/50"
            }
          >
            <Icon className="text-base" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

/* Designed fallback when a real screenshot isn't wired up yet.
   TODO: replace with a real screenshot for this project. */
function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="bg-dotgrid flex h-full min-h-[11rem] w-full flex-col items-center justify-center gap-2 bg-bg-alt p-6 text-center">
      <span className="font-display text-lg font-semibold text-fg">
        {title}
      </span>
      <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
        screenshot coming
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      index="04"
      eyebrow="Things I've built"
      alt
    >
      <div className="space-y-8">
        {/* FEATURED — full-width, image left / text right */}
        <motion.article
          variants={fadeUp}
          whileHover={hoverLift}
          className="card grid overflow-hidden transition-colors duration-300 hover:border-accent/40 md:grid-cols-2"
        >
          <div className="h-56 w-full overflow-hidden md:h-auto">
            {featured.image ? (
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <ImagePlaceholder title={featured.title} />
            )}
          </div>
          <div className="flex flex-col gap-5 p-7 md:p-9">
            <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent-text">
              Featured
            </span>
            <h3 className="font-display text-3xl font-bold text-fg">
              {featured.title}
            </h3>
            <p className="leading-relaxed text-fg-muted">
              {featured.description}
            </p>
            <TechChips tech={featured.tech} />
            <div className="pt-1">
              <ProjectButtons links={featured.links} />
            </div>
          </div>
        </motion.article>

        {/* REMAINING — row of cards (equal heights via auto-rows-fr) */}
        <div className="grid auto-rows-fr gap-8 sm:grid-cols-2">
          {projects.map((p) =>
            p.comingSoon ? (
              <motion.article
                key={p.title}
                variants={fadeUp}
                className="card flex flex-col overflow-hidden opacity-70"
              >
                <div className="h-44 w-full overflow-hidden">
                  <ImagePlaceholder title={p.title} />
                </div>
                <div className="flex flex-grow flex-col justify-center gap-3 p-6">
                  <span className="w-fit rounded-full border border-border bg-bg-alt px-3 py-1 font-mono text-xs uppercase tracking-wide text-fg-muted">
                    In Development
                  </span>
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            ) : (
              <motion.article
                key={p.title}
                variants={fadeUp}
                whileHover={hoverLift}
                className="card flex flex-col overflow-hidden transition-colors duration-300 hover:border-accent/40"
              >
                <div className="h-44 w-full overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <ImagePlaceholder title={p.title} />
                  )}
                </div>

                <div className="flex flex-grow flex-col gap-4 p-6">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-fg-muted">
                    {p.description}
                  </p>
                  <TechChips tech={p.tech} />
                  <div className="pt-1">
                    <ProjectButtons links={p.links} />
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
