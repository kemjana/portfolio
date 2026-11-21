"use client";
import { Download, FolderOpen, Server, ShieldCheck } from "lucide-react";
import { SITE } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid grid-cols-1 gap-8 items-stretch lg:grid-cols-2 lg:gap-12">
        <div className="flex h-full flex-col justify-between lg:pr-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-accent-text dark:bg-accent" />
            <div className="mt-6">
              <p className="text-base font-medium text-neutral-400">Hello, I&apos;m</p>
              <h3 className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Kim Janna I. Laya
              </h3>
            </div>
            <p className="mt-6 max-w-xl text-neutral-300">
              I&apos;m a 4th-year BS Information Technology student majoring in Cybersecurity at De La Salle Lipa, expected to graduate in June 2027. I&apos;m looking for a 486-hour OJT where I can apply what I&apos;ve learned across cybersecurity and general IT operations, keep growing on a real team, and contribute to real-world projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE.resume} download="Laya-Resume.pdf"
                 className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-none transition hover:bg-accent-hover dark:hover:bg-accent dark:hover:brightness-110">
                <Download size={16} /> Download Resume
              </a>
              <a href="#portfolio"
                 className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-neutral-300 transition hover:border-slate/50 dark:text-slate-200">
                <FolderOpen size={16} /> View Projects
              </a>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { label: "Projects", value: "4" },
              { label: "Certifications", value: "3" },
              { label: "Technical Labs", value: "Active" },
            ].map((stat) => (
              <div key={stat.label} className="glass glass-hover p-4 text-center">
                <p className="text-2xl font-bold text-accent-text dark:text-accent">{stat.value}</p>
                <p className="mt-2 text-xs text-neutral-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between gap-5">
          <article className="glass glass-hover flex-1 p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-text dark:text-accent">
                <Server size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Systems &amp; Network Administration Labs</h3>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              I learn by building. Through hands-on coursework labs, I manage Active Directory users, groups, and access controls, deploy and troubleshoot Windows and Linux VMs on Proxmox VE, run Nessus vulnerability scans, filter DNS with Pi-hole, and connect environments securely with Tailscale. I also design and document routed network topologies and subnetting schemes in Cisco Packet Tracer.
            </p>
          </article>

          <article className="glass glass-hover flex-1 p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-text dark:text-accent">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Security &amp; Full-Stack Development</h3>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              On the development side, I co-built my capstone, an ensemble-based Chrome extension for phishing threat detection, with a Node.js REST API and PostgreSQL backend that reached 98.17% detection accuracy. I also build and deploy my own web apps using Next.js, TypeScript, Supabase, and Gemini AI, including LabOps, CyberLab, and StudyIt.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
