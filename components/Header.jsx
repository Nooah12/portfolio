import Image from "next/image";
import { linkIcons } from "@/assets/assets";

export default function Header() {
  return (
    <section id="top" className="flex min-h-[min(700px,100svh)] items-center py-28 md:py-20">
      <div className="enter w-full">
        <p className="eyebrow">Frontend developer · Stockholm</p>
        <p className="mt-5 flex items-center gap-2 font-Ovo text-xl sm:text-2xl">Hello, World! It&apos;s me, Noah <span className="wave inline-block" aria-label="waving hand" role="img">👋</span></p>
        <h1 className="mt-4 max-w-4xl font-Ovo text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">I build things and learn constantly.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/70">As a frontend developer fresh out of school, I&apos;m looking for my first role where I can contribute to real projects and keep growing.</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#project" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-slate-900">Explore my work</a>
          <a href="/noah-gordon-cv+personligt-brev.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-slate-900 dark:border-white/30 dark:hover:border-white">Download résumé</a>
          <div className="ml-1 flex gap-3">
            {linkIcons.map((item) => (
              <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.link.includes("github") ? "GitHub" : "LinkedIn"} className="rounded-full p-2 transition hover:bg-slate-200 dark:hover:bg-white/10">
                <Image src={item.icon} alt="" className="h-7 w-7 dark:hidden" />
                <Image src={item.iconDark} alt="" className="hidden h-7 w-7 dark:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
