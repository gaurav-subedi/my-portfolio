import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <SectionWrapper id="about" title="About" index="01" eyebrow="Get to know me">
      <motion.div
        variants={fadeUp}
        className="card max-w-2xl space-y-6 border-l-4 border-l-accent/70 p-6 md:p-8"
      >
        <p className="text-lg leading-relaxed text-fg-muted">
          Junior studying Computer Science at UT Arlington. Software engineering
          intern at Oak Hill Advisors. I like building real-time systems and
          tools that solve my own problems.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
