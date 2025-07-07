import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import profilePic from "/about.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const scaleFade = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};
/* ────────────────────────────────────────────── */

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      {/* GRID */}
      <motion.div
        variants={container}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center place-items-center"
      >
        {/* PHOTO */}
        <motion.div variants={scaleFade} className="flex justify-center">
          <motion.img
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            src={profilePic}
            alt="Gaurav Subedi"
            className="
              w-56 sm:w-64 md:w-72 h-auto rounded-full object-cover select-none
              shadow-lg ring-4 ring-orange-500/50
              dark:ring-orange-400/40
            "
          />
        </motion.div>

        {/* COPY + LINKS + RESUME */}
        <motion.div variants={fadeUp} className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="text-orange-500 dark:text-orange-400 font-semibold">
              Gaurav&nbsp;Subedi
            </span>
            . I'm currently studying Computer Science at UT Arlington, with
            interests in AI, Data Science, and software development. I enjoy
            building web applications using technologies like React, Django,
            Python, and C#, and I'm particularly fascinated by intelligent
            systems and autonomous workflows.
          </p>

          <p className="text-lg leading-relaxed">
            I'm always excited to collaborate, learn, and apply technology to
            real-world problems. Feel free to reach out if you'd like to connect
            or discuss potential projects!
          </p>

          {/* SOCIALS */}
          <motion.div variants={fadeUp} className="flex gap-6 text-2xl">
            {[
              {
                Icon: FaGithub,
                href: "https://github.com/gaurav-subedi",
                label: "GitHub",
              },
              {
                Icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/gaurav-subedi-87a0282a5/",
                label: "LinkedIn",
              },
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/gaurav.subedi.5245",
                label: "Facebook",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/gaurav.subedi0710/",
                label: "Instagram",
              },
              {
                Icon: FaEnvelope,
                href: "mailto:gxs2428@mavs.uta.edu",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="
                  transition
                  text-gray-600 hover:text-orange-500
                  dark:text-gray-300 dark:hover:text-orange-400
                "
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* RESUME */}
          <motion.a
            variants={fadeUp}
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-block w-fit px-4 py-2 rounded-full text-lg font-bold transition
              bg-orange-600 hover:bg-orange-500 text-white
              dark:bg-orange-500 dark:hover:bg-orange-400
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-orange-500 dark:focus:ring-orange-400
            "
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
