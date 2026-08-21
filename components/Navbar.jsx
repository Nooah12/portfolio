"use client";

import { useEffect, useState } from "react";

const links = [["Home", "#top"], ["About", "#about"], ["Projects", "#project"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const enabled = localStorage.theme === "dark" || (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
    const enabled = !dark;
    setDark(enabled);
    localStorage.theme = enabled ? "dark" : "light";
    document.documentElement.classList.toggle("dark", enabled);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#faf9f7]/85 backdrop-blur dark:border-white/10 dark:bg-darkTheme/85">
      <nav className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5" aria-label="Main navigation">
        <a href="#top" className="font-Ovo text-xl tracking-tight">Noah Gordon<span className="text-indigo-600 dark:text-indigo-300">.</span></a>
        <div className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}</div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="grid h-9 w-9 place-items-center rounded-full text-lg transition hover:bg-slate-200 dark:hover:bg-white/10" aria-label="Toggle colour theme">{dark ? "☀" : "◐"}</button>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full text-xl md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open ? "×" : "≡"}</button>
        </div>
      </nav>
      {open && <div id="mobile-menu" className="border-t border-slate-200 bg-[#faf9f7] px-5 py-5 dark:border-white/10 dark:bg-darkTheme md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{label}</a>)}</div>}
    </header>
  );
}
