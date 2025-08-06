import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "PhotoPhrase",
    description:
      "Auilt an end-to-end AI-driven image-captioning system by creating a cross-platform Expo React Native app in TypeScript with integrated camera/gallery flows and a responsive PreviewScreen, and a Flask API that wraps and tunes Hugging Face’s Salesforce/blip-image-captioning-large model via multipart/form-data for accurate captions.",
    image: "123.jpg",
    tech: ["React Native", "TypeScript", "Flask", "Python"],
    github: "https://github.com/gaurav-subedi/photophrase",
  },
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal website built with React, TypeScript, and Tailwind CSS. It features interactive dark mode, smooth navigation, a clean UI, and easy scalability for future updates.",
    image: "Portfolio.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/gaurav-subedi/my-portfolio",
  },
  {
    title: "Face & Gesture Detection",
    description:
      "A real-time desktop tool (C# + OpenCV) that captures webcam video, detects multiple faces, and classifies hand gestures such as fist, palm, or victory sign.",
    image: "FaceDetection.jpg",
    tech: ["Python", "C#", "OpenCV", "MediaPipe"],
    github: "https://github.com/gaurav-subedi/Face-Recognition",
  },
  {
    title: "To-Do List App",
    description:
      "Full-stack to-do manager built with React and Django REST Framework, backed by PostgreSQL. Supports secure CRUD operations and a responsive UI.",
    image: "/ToDoList.png",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/gaurav-subedi/FullStack_ToDoList",
  },
];

const cardFade = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="mx-auto grid gap-10 max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            custom={i}
            variants={cardFade}
            whileHover={{ scale: 1.02 }}
            className="
              flex flex-col overflow-hidden rounded-2xl border shadow-lg
              border-orange-200 bg-white
              dark:bg-gray-900
              transition-colors
            "
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top
                           transition-transform duration-300
                           group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-grow space-y-4 p-6">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="flex-grow text-sm leading-relaxed">
                {p.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-orange-200 bg-white px-2 py-1 text-orange-600
                               dark:bg-gray-800"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white
                             transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
