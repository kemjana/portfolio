"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  // read the theme the inline script already applied
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch (e) {}
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-neutral-300 transition hover:border-slate/40 hover:text-slate dark:text-neutral-300 dark:hover:border-slate/40 dark:hover:text-slate"
    >
      {/* render nothing until mounted to avoid a wrong icon flash */}
      {theme === "light" ? <Moon size={17} /> : theme === "dark" ? <Sun size={17} /> : null}
    </button>
  );
}
