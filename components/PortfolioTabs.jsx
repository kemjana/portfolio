"use client";
import { useEffect, useState } from "react";
import {
  Shield, Server, Radar, Network, Users, ScanSearch, Filter, Route, Split, Terminal,
  Code, Globe, BookOpen, Cpu, Database, Plug, Send, GitBranch, HardDrive, Github, Award, X, Info,
  Rocket, ChartNoAxesColumn, Briefcase, Cloud, Sparkles,
} from "lucide-react";
import { PROJECTS, CERTS, STACK } from "@/data/portfolio";

const ICONS = {
  shield: Shield, server: Server, radar: Radar, network: Network, users: Users, scan: ScanSearch,
  filter: Filter, route: Route, split: Split, terminal: Terminal, code: Code, globe: Globe, book: BookOpen,
  cpu: Cpu, database: Database, plug: Plug, send: Send, git: GitBranch, hdd: HardDrive,
  rocket: Rocket, chart: ChartNoAxesColumn, briefcase: Briefcase, cloud: Cloud, sparkles: Sparkles,
};
const Icon = ({ name, size = 20 }) => {
  const C = ICONS[name] || Code;
  return <C size={size} />;
};

const TABS = ["Projects", "Certificates & Badges", "Tech Stack"];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="glass pop w-full max-w-lg bg-card p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <button onClick={onClose} aria-label="Close" className="text-neutral-400 transition hover:text-accent-text dark:hover:text-accent"><X /></button>
        </div>
        <p className="mt-4 text-neutral-300">{project.details}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="chip rounded-md px-2.5 py-1 font-mono text-xs">{t}</li>
          ))}
        </ul>
        <a href={project.repo} target="_blank" rel="noopener noreferrer"
           className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:bg-accent-hover dark:hover:bg-accent dark:hover:brightness-110">
          <Github size={16} /> View Repo
        </a>
      </div>
    </div>
  );
}

export default function PortfolioTabs() {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Portfolio Showcase</h2>
        <p className="mt-3 text-neutral-400">Explore my projects, certifications, and technical stack.</p>
      </div>

      {/* single tab row */}
      <div role="tablist" className="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-xl border border-line bg-card p-1 dark:bg-card/60">
        {TABS.map((t, i) => (
          <button key={t} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              tab === i
                ? "bg-accent text-on-accent shadow-none hover:bg-accent-hover dark:hover:bg-accent"
                : "text-slate-600 hover:text-accent-text dark:text-slate-400 dark:hover:text-accent"
            }`}>
            {t}
          </button>
        ))}
      </div>

      {/* single content container, swaps on tab change */}
      <div key={tab} className="tab-in mt-10" role="tabpanel">
        {tab === 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.title} className="glass glass-hover flex flex-col p-6 hover:border-slate/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-text dark:text-accent">
                  <Icon name={p.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-neutral-400">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="chip rounded-md px-2 py-0.5 font-mono text-[11px]">{t}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm text-slate-700 transition hover:border-slate/50 dark:text-slate-200">
                    <Github size={15} /> View Repo
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm text-slate-700 transition hover:border-slate/50 dark:text-slate-200">
                      <Globe size={15} /> Live Demo
                    </a>
                  )}
                  <button onClick={() => setActive(p)}
                     className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent shadow-none transition hover:bg-accent-hover dark:hover:bg-accent dark:hover:brightness-110">
                    <Info size={15} /> Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <article key={c.title} className="glass glass-hover flex h-full flex-col overflow-hidden hover:border-slate/40">
                <a href={c.cert} target="_blank" rel="noopener noreferrer" aria-label={`Open ${c.title} certificate`}
                   className="block border-b border-line bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.cert} alt={`${c.title} certificate`} loading="lazy" className="aspect-[3/2] w-full object-cover" />
                </a>
                <div className="flex flex-1 items-start justify-between gap-4 px-5 pb-6 pt-5">
                  <div className="min-w-0 flex-1">
                    <Award size={18} className="shrink-0 text-accent-text dark:text-accent" />
                    <h3 className="mt-2 min-h-12 text-base font-semibold leading-6 text-white">{c.title}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{c.org}</p>
                    <p className="mt-3 font-mono text-xs text-neutral-500">Completed {c.date}</p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.badge} alt={`${c.title} badge`} loading="lazy" className="h-24 w-24 shrink-0 self-start object-contain" />
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="space-y-10">
            {STACK.map((g) => (
              <div key={g.group}>
                <h3 className="mb-4 text-sm font-semibold text-neutral-300">{g.group}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {g.items.map((it) => (
                    <div key={it.name} className="glass glass-hover flex items-center gap-3 p-4 hover:border-slate/40">
                      <span className="text-accent-text dark:text-accent"><Icon name={it.icon} /></span>
                      <span className="text-sm text-neutral-200">{it.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
