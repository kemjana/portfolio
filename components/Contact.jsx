"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SITE } from "@/data/portfolio";

const field =
  "w-full rounded-lg border border-line bg-card px-4 py-3 text-sm text-white placeholder-neutral-500 shadow-sm transition focus:border-accent-text focus:outline-none focus:ring-2 focus:ring-accent/20 dark:bg-ink/60 dark:shadow-none dark:focus:border-accent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Sends the entry to SITE.email through Web3Forms (key set in Vercel env vars).
  // If no key is set yet, falls back to opening the visitor's email app.
  const submit = async (e) => {
    e.preventDefault();
    const key = SITE.web3formsKey;

    if (!key) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Laya's Portfolio",
          name: form.name,
          email: form.email, // used as Reply-To
          message: form.message,
          botcheck: "", // spam honeypot
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="glass grid gap-10 p-6 sm:p-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <p className="mt-2 text-neutral-400">
            Open for 486-Hour OJT Opportunities in Cybersecurity, Network Admin, or Systems Support.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-neutral-300">Full Name</label>
              <input id="name" required value={form.name} onChange={set("name")} placeholder="Juan Dela Cruz" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-neutral-300">Email Address</label>
              <input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@company.com" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-neutral-300">Message</label>
              <textarea id="message" required rows={5} value={form.message} onChange={set("message")} placeholder="Tell me about the opportunity..." className={field} />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-none transition hover:bg-accent-hover dark:hover:bg-accent dark:hover:brightness-110 disabled:opacity-60">
              <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="text-sm text-accent-text dark:text-accent" role="status">Message sent! I&apos;ll get back to you soon.</p>}
            {status === "error" && (
              <p className="text-sm text-red-500" role="alert">
                Something went wrong. Please email me directly at {SITE.email}.
              </p>
            )}
          </form>
        </div>

        <aside className="space-y-5 lg:col-span-2">
          <h3 className="text-sm font-semibold text-neutral-300">Direct Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3"><Mail size={18} className="mt-0.5 text-accent-text dark:text-accent" /><a href={`mailto:${SITE.email}`} className="break-all text-neutral-300 transition hover:text-accent-text dark:text-slate-300 dark:hover:text-accent">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><Phone size={18} className="mt-0.5 text-accent-text dark:text-accent" /><a href={`tel:${SITE.phone}`} className="text-neutral-300 transition hover:text-accent-text dark:text-slate-300 dark:hover:text-accent">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-accent-text dark:text-accent" /><span className="text-neutral-300 dark:text-slate-300">{SITE.location}</span></li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-neutral-300 transition hover:border-slate/50 hover:text-accent-text hover:bg-card dark:text-slate-300 dark:hover:border-slate/50 dark:hover:text-accent"><Linkedin size={18} /></a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-neutral-300 transition hover:border-slate/50 hover:text-accent-text hover:bg-card dark:text-slate-300 dark:hover:border-slate/50 dark:hover:text-accent"><Github size={18} /></a>
            <a href="https://www.facebook.com/kimjanna.laya.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-neutral-300 transition hover:border-slate/50 hover:text-accent-text hover:bg-card dark:text-slate-300 dark:hover:border-slate/50 dark:hover:text-accent">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M14 8.5V7c0-.7.5-1 1.1-1H17V3.2A18 18 0 0 0 14.2 3C11.7 3 10 4.5 10 7v1.5H7.5v3H10V21h4v-9.5h2.8l.4-3H14Z" />
              </svg>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
