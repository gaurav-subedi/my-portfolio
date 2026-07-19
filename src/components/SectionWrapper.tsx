import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface Props extends PropsWithChildren {
  id: string;
  title: string;
  /** Two-digit section number for the mono eyebrow, e.g. "01". */
  index: string;
  /** Short descriptor shown after the number in the eyebrow label. */
  eyebrow: string;
  /** Use the alternating (slightly elevated) background band. */
  alt?: boolean;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  index,
  eyebrow,
  alt = false,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative w-full overflow-hidden py-8 md:py-12
        ${alt ? "bg-bg-alt" : "bg-bg"} text-fg
        transition-colors duration-300
        ${className}
      `}
    >
      {/* technical dot-grid backdrop */}
      <div
        aria-hidden
        className="bg-dotgrid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* numbered green eyebrow + large bold title */}
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-7 md:mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-sm uppercase tracking-[0.15em] text-accent-text"
          >
            {index} — {eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-fg md:text-6xl"
          >
            {title}
          </motion.h2>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
