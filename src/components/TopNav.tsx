import { useState, useEffect } from "react";
import DarkMode from "./DarkMode";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function TopNav() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = navItems.map((i) => i.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 mb-2 border-b border-border bg-bg/80 backdrop-blur-md lg:rounded-card lg:border">
      <nav className="flex h-14 items-center justify-between gap-2 px-4 lg:justify-end lg:gap-1">
        <button
          className="text-accent-text lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M6 18 18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <ul className="hidden lg:flex lg:items-center lg:gap-1">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-control px-3 py-1.5 font-mono text-sm uppercase tracking-wide transition-colors ${
                    isActive ? "text-accent-text" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <DarkMode />
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-control px-3 py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                    isActive ? "text-accent-text" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
