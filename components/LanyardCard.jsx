"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { SITE } from "@/data/portfolio";

/**
 * Draggable swinging ID card.
 * Drag left/right, release, and it swings back like a pendulum.
 */
export default function LanyardCard() {
  const swing = useRef(null);
  const s = useRef({ angle: 10, vel: 0, drag: false, startX: 0, base: 0, last: 0 });

  useEffect(() => {
    let raf, t = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => {
      const st = s.current;
      t += 0.02;
      if (!st.drag) {
        const target = reduce ? 0 : Math.sin(t) * 2.5; // idle sway
        st.vel += -0.035 * (st.angle - target);
        st.vel *= 0.97;
        st.angle += st.vel;
      }
      if (swing.current) swing.current.style.transform = `rotate(${st.angle}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const down = (e) => {
    const st = s.current;
    st.drag = true; st.startX = e.clientX; st.base = st.angle; st.last = st.angle;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = (e) => {
    const st = s.current;
    if (!st.drag) return;
    const next = Math.max(-40, Math.min(40, st.base + (e.clientX - st.startX) / 4));
    st.vel = next - st.last;
    st.last = next;
    st.angle = next;
  };
  const up = () => { s.current.drag = false; };

  return (
    <div className="relative mx-auto flex h-[520px] w-full max-w-[320px] select-none justify-center">
      {/* swinging group, pivots from the top */}
      <div ref={swing} className="absolute top-0 flex flex-col items-center" style={{ transformOrigin: "50% 0" }}>
        {/* strap */}
        <div className="h-32 w-5 bg-gradient-to-b from-slate to-slate/70 [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]" />
        {/* clip */}
        <div className="-mt-1 h-4 w-8 rounded-sm border border-slate/70 bg-slate" />
        {/* card */}
        <div
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
          style={{ touchAction: "pan-y" }}
          className="glass w-64 cursor-grab border border-slate-200 p-5 shadow-md shadow-slate-900/5 active:cursor-grabbing dark:border-slate-800 dark:shadow-black/20"
          role="img"
          aria-label={`ID card of ${SITE.name}`}
        >
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-ink" />
          <div className="mb-4 h-44 overflow-hidden rounded-xl border border-line bg-card dark:bg-ink/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Laya-ID.jpg" alt={SITE.name} draggable={false} className="h-full w-full object-cover object-[center_40%]" />
          </div>
          <p className="text-lg font-semibold leading-tight text-white">{SITE.name}</p>
          <p className="mt-1 text-xs text-neutral-400">BS Information Technology</p>
          <p className="flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck size={13} /> Cybersecurity Major
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] text-neutral-500">
            <span>{SITE.school}</span>
            <span>OJT 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}
