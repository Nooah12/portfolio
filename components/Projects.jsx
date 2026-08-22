"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { workData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 } }),
};

export default function Projects() {
  return (
    <section id="project" className="scroll-mt-24 py-20 sm:py-28">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} className="max-w-2xl">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Projects</h2>
      </motion.div>
      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {workData.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            custom={index}
            className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden bg-slate-200 ${index === 0 ? "aspect-[2/1]" : "aspect-video"}`}>
              <Image src={project.bgImage} alt={`${project.title} project preview`} fill sizes={index === 0 ? "(max-width: 1120px) 100vw, 1120px" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                </div>
                <div className="flex gap-3 text-sm font-semibold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-indigo-400 underline-offset-4 hover:text-indigo-600">Live ↗</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-950 dark:text-white/60 dark:hover:text-white">Code ↗</a>
                </div>
              </div>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-white/70">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
