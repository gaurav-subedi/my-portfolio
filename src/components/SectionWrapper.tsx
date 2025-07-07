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
  className?: string;
}
export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative w-full py-24 px-6 overflow-hidden
        bg-white  text-gray-950
        dark:bg-gray-950 dark:text-gray-200
        transition-colors duration-300
        ${className}
      `}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="mb-16 flex justify-center"
      >
        <motion.h2
          variants={fadeUp}
          className="
            text-5xl font-extrabold tracking-wide pb-2 border-b-4
            border-orange-500 dark:border-orange-400
          "
        >
          {title}
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
