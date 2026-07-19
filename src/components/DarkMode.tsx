import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setIsDark(!isDark)}
      className="ml-3 rounded-control border border-border p-2 text-base text-fg-muted transition-colors hover:border-accent/40 hover:text-accent-text"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};
export default DarkMode;
