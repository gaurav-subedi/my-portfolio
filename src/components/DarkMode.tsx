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
      className="text-xl p-1.5 rounded-md transition bg-gray-200
                 hover:bg-gray-500 dark:hover:bg-gray-100 m-3"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};
export default DarkMode;
