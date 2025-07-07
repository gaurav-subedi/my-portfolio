import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  SiPython,
  SiC,
  SiSharp,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, level: 80 },
  { name: "C", icon: SiC, level: 80 },
  { name: "C#", icon: SiSharp, level: 70 },
  { name: "JavaScript", icon: SiJavascript, level: 70 },
  { name: "SQL", icon: SiMysql, level: 70 },
  { name: "HTML5", icon: SiHtml5, level: 95 },
  { name: "CSS3", icon: SiCss3, level: 90 },
  { name: "React", icon: SiReact, level: 75 },
  { name: "Django", icon: SiDjango, level: 70 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ name, icon: Icon, level }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="
              flex flex-col items-center p-6 rounded-2xl shadow-lg select-none
              bg-white  text-gray-900
              dark:bg-gray-900 dark:text-gray-200
              transition-colors
            "
          >
            <Icon className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>

            <div className="w-full">
              <div
                className="h-2 w-full rounded-full overflow-hidden
                              bg-gray-200  dark:bg-gray-700"
              >
                <div
                  className="h-full rounded-full bg-orange-500 transition-all duration-700"
                  style={{ width: `${level}%` }}
                />
              </div>
              <p
                className="mt-2 text-sm text-center
                             text-gray-600 dark:text-gray-400"
              >
                {level}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
