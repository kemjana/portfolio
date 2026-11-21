"use client";
import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { SITE } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // highlight the link of the section currently in view
  useEffect(() => {
    const els = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const linkClass = (href) =>
    `relative text-sm transition ${active === href
      ? "font-semibold text-accent-text after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent-text dark:text-accent dark:after:bg-accent"
      : "text-slate-600 hover:text-slate dark:text-slate-400 dark:hover:text-slate"}`;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
          <Terminal size={18} className="text-accent-text dark:text-accent" /> {SITE.brand}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={active === l.href ? "true" : undefined} className={linkClass(l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            className="text-slate-700 transition hover:text-slate dark:text-slate-200 dark:hover:text-slate md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink/95 px-5 py-3 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`relative block py-3 ${active === l.href
                  ? "font-semibold text-accent-text after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-accent-text dark:text-accent dark:after:bg-accent"
                  : "text-slate-600 hover:text-slate dark:text-slate-400 dark:hover:text-slate"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
