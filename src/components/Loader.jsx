import { useEffect, useState } from "react";
import logo from "../components/Navbar/21.svg";


export default function Loader({ visible = true, onHidden }) {
  const [fadeOut, setFadeOut] = useState(false);

  /* Kick off opacity transition when parent flips `visible` → false */
  useEffect(() => {
    if (!visible) setFadeOut(true);
  }, [visible]);

  /* Physically remove component 450 ms after fade begins (400 ms CSS + 50 ms buffer) */
  useEffect(() => {
    if (!fadeOut) return;
    const t = setTimeout(onHidden, 450);
    return () => clearTimeout(t);
  }, [fadeOut, onHidden]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
                  bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white
                  transition-opacity duration-400
                  ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* ── Logo ──────────────────────────────────────────────────── */}
      <img
        src={logo}
        alt="Site logo"
        className="h-20 w-auto mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] select-none"
        draggable="false"
      />

      {/* ── Professional ring spinner ─────────────────────────────── */}
      <div className="relative h-16 w-16">
        {/* ghost ring */}
        <div className="absolute inset-0 rounded-full border-4 border-indigo-400/20" />
        {/* spinning accent ring */}
        <div className="absolute inset-0 rounded-full border-4 border-indigo-400 border-t-transparent animate-spin" />
      </div>

      {/* ── subtle “Loading…” text ───────────────────────────────── */}
      <p className="mt-6 text-sm uppercase tracking-widest text-indigo-100/80">
        Loading&nbsp;experience&nbsp;…
      </p>
    </div>
  );
}