import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Application Development Intern",
    company: "Oak Hill Advisors",
    period: "Summer 2025",
    responsibilities: [
      "Designed and deployed a C# importer console app on AWS Lambda to stream real-time ticket data from the Adobe Workfront REST API into a custom API controller, storing it in MS SQL Server for Power BI analytics supporting data-driven decisions",
      "Streamlined Azure DevOps CI/CD (XML + JAMS) and modernized a legacy VSTO Excel reporting tool, reducing refresh latency and maintenance overhead.",
      "Developed and implemented daily and weekly investor reporting templates in Excel Service, optimized SQL queries, and resolved production issues by closing Workfront tickets, ensuring accurate and uninterrupted data operations.",
    ],
  },
];

const fadeSlide = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experiences() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="relative">
        <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-orange-500" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.company}
              variants={fadeSlide}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="
                relative md:flex md:items-start p-6 md:p-8 rounded-2xl shadow-lg
                bg-white  text-gray-900
                dark:bg-gray-900 dark:text-gray-200
                transition-colors
              "
            >
              <div className="absolute left-0 top-6 md:relative md:left-auto md:top-auto">
                <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow" />
              </div>

              <div className="md:w-1/3">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-orange-500 dark:text-orange-400 mt-1 font-medium">
                  {exp.company} &bull; {exp.period}
                </p>
              </div>

              <ul className="md:w-2/3 mt-4 md:mt-0 list-disc list-inside space-y-2 marker:text-gray-600 dark:marker:text-gray-400">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
