import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    history.replaceState(null, "", window.location.pathname);

    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
