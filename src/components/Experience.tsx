import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Application Development Intern",
    company: "Oak Hill Advisors",
    type: "Part-time",
    period: "Aug 2025 – Present",
    location: "Fort Worth, TX",
    stack: ["C#", "SQL", "Excel Automation"],
    responsibilities: [
      "Replaced a Power Automate Desktop workflow with a headless C# tool automating fetch, refresh, and archival of ~100 Excel templates — cutting 5+ hours of machine-locked runtime per cycle",
      "Full-stack point of contact for IR, Finance, and Accounting stakeholders, shipping C# and SQL solutions end-to-end",
      "Drive production reliability through SQL optimization, incident resolution, and continuous delivery on live reporting pipelines",
    ],
  },
  {
    role: "Application Development Intern",
    company: "Oak Hill Advisors",
    type: "Full-time",
    period: "Jun 2025 – Aug 2025",
    location: "Fort Worth, TX",
    stack: ["AWS Lambda", "C#", "MS SQL Server", "Power BI", "Azure DevOps"],
    responsibilities: [
      "Sole-engineered a real-time pipeline streaming 15 datasets at 3-minute intervals from the Workfront REST API through AWS Lambda into MS SQL Server, powering live Power BI dashboards",
      "Stood up end-to-end AWS infrastructure via config.yaml: Lambda, JAMS scheduling, event triggers, CloudWatch monitoring",
      "Modernized a legacy VSTO Excel tool and tightened Azure DevOps CI/CD pipelines, cutting refresh latency firm-wide",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experiences() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      index="03"
      eyebrow="Where I've worked"
    >
      <div className="relative space-y-8 pl-8 md:pl-10">
        {/* vertical green timeline rail connecting both entries */}
        <div className="absolute left-[6px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/70 via-accent/40 to-accent/15 md:left-2" />

        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.period}
            variants={fadeUp}
            transition={{ delay: idx * 0.15 }}
            className="card relative p-6 transition-colors duration-300 hover:border-accent/40 md:p-8"
          >
            {/* glowing timeline dot */}
            <span
              className="absolute -left-[26px] top-8 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent md:-left-[34px]"
              style={{ boxShadow: "0 0 10px 1px var(--accent)" }}
            />

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-fg">
                  {exp.role}
                </h3>
                <p className="mt-1 font-medium text-accent-text">
                  {exp.company} · {exp.type}
                </p>
              </div>
              {/* date pill badge + location */}
              <div className="flex flex-col gap-1.5 md:items-end">
                <span className="w-fit rounded-full border border-border bg-bg-alt px-3 py-1 font-mono text-xs uppercase tracking-wide text-fg-muted">
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-fg-muted">
                  {exp.location}
                </span>
              </div>
            </div>

            {/* tech chips */}
            <ul className="mt-5 flex flex-wrap gap-2">
              {exp.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-text"
                >
                  {t}
                </li>
              ))}
            </ul>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-fg-muted marker:text-accent">
              {exp.responsibilities.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
