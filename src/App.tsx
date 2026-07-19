import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

function App() {
  useEffect(() => {
    history.replaceState(null, "", window.location.pathname);

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
        <div className="lg:grid lg:grid-cols-[360px_1fr] lg:items-start lg:gap-8">
          <Sidebar />

          <div className="min-w-0">
            <TopNav />

            <main>
              <About />
              <Skills />
              <Experiences />
              <Projects />
              <Contact />
            </main>

            <footer className="mt-6 rounded-card border border-border bg-bg-alt px-6 py-8">
              <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                  © 2026 Gaurav Subedi
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                  Built with React · TypeScript · Tailwind
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
