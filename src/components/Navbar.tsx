import { useState, useEffect } from "react";
import DarkMode from "./DarkMode";

const imageSrcPath = "./../wlogo.png";
const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = `
    fixed top-0 inset-x-0 h-16 z-50 flex items-center
    px-6 sm:px-8 transition-colors duration-300
    ${
      scrolled || menuOpen
        ? "bg-black/80 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }
  `;

  return (
    <nav className={navClass}>
      {/* logo */}
      <a href="#" className="flex items-center space-x-3">
        <img
          src={imageSrcPath}
          alt="logo"
          className="h-12 w-auto object-contain"
        />
      </a>

      <button
        className="md:hidden ml-auto text-orange-500 mx-3"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="toggle navigation"
      >
        {menuOpen ? (
          <svg viewBox="0 0 24 24" className="h-7 w-7">
            <path
              d="M6 18 18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-7 w-7">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
      <ul className="hidden md:flex md:space-x-8 ml-auto">
        {navItems.map((item, i) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`px-2 py-1 font-medium transition ${
                active === i
                  ? "text-gray-300"
                  : "text-gray-300 hover:text-orange-400"
              }`}
              onClick={() => setActive(i)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md pb-6">
          <ul className="flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition ${
                    active === i
                      ? "text-orange-400"
                      : "text-gray-200 hover:text-orange-300"
                  }`}
                  onClick={() => {
                    setActive(i);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <DarkMode />
    </nav>
  );
}
