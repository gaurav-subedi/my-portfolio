import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSharp,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

const skills: { name: string; icon: IconType }[] = [
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQL", icon: SiMysql },
  { name: "C#", icon: SiSharp },
  { name: "Java", icon: FaJava },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      index="02"
      eyebrow="What I work with"
      alt
    >
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            className="card group flex select-none items-center gap-4 p-5 transition-colors duration-300 hover:border-accent/40"
          >
            <Icon className="shrink-0 text-3xl text-accent-text" />
            <h3 className="font-display text-lg font-semibold text-fg">
              {name}
            </h3>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
