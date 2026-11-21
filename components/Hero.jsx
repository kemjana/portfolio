import { GraduationCap } from "lucide-react";
import LanyardCard from "./LanyardCard";
import { HERO_TAGS, SITE } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2">
      <div>
        <span className="chip inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs tracking-wide">
          <span className="h-2 w-2 rounded-full bg-accent-text dark:bg-accent" />
          AVAILABLE FOR OJT / INTERNSHIP
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          BS Information Technology Student
        </h1>
        <p className="mt-2 text-xl font-medium text-accent-text sm:text-2xl dark:text-accent">
          Cybersecurity Major
        </p>

        <p className="mt-6 max-w-lg text-lg text-neutral-400">
          Passionate and eager to learn more about securing networks, virtualizing infrastructure, and building scalable web systems, to bring hands-on problem-solving to enterprise IT operations.
        </p>

        <p className="mt-6 flex items-center gap-2 text-sm text-neutral-300">
          <GraduationCap size={18} className="text-accent-text dark:text-accent" /> {SITE.school}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {HERO_TAGS.map((t) => (
            <li key={t} className="chip rounded-md px-3 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-none transition hover:bg-accent-hover dark:hover:bg-accent dark:hover:brightness-110">
            View Portfolio
          </a>
          <a href="#contact" className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-neutral-300 transition hover:border-slate/50 dark:text-slate-200">
            Contact Me
          </a>
        </div>
      </div>

      <LanyardCard />
    </section>
  );
}
