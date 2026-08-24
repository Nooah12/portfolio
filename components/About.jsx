"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { infoList, toolsData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-slate-200 py-20 dark:border-white/10 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-title">Curious by nature. Detail-oriented by habit.</h2>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          <p className="text-lg leading-8 text-slate-600 dark:text-white/70">Fully committed to the philosophy of lifelong learning, I'm a recently graduated frontend developer with a deep passion for JavaScript and all things web development. The unique combination of creativity, logic thinking, and technology - along with the fact that there's always something new to learn, keeps me excited and motivated.</p>
          <p className="mt-5 leading-7 text-slate-600 dark:text-white/70">Away from my computer, I enjoy playing football, hit the gym, sometimes playing video games and spending time with friends and family.</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <motion.li key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} className="rounded-xl border border-slate-200 p-5 dark:border-white/10">
                <Image src={icon} alt="" className="h-7 w-7 dark:hidden" />
                <Image src={iconDark} alt="" className="hidden h-7 w-7 dark:block" />
                <h3 className="mt-6 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">{description}</p>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-sm font-semibold">Tools I enjoy working with</p>
            <ul className="mt-5 grid grid-cols-4 gap-x-1 gap-y-6 sm:grid-cols-6">
              {toolsData.map((tool, i) => (
                <motion.li
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.12, ease: "easeOut" }}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <Image src={tool.icon} alt="" className="h-5 w-5" />
                  <span className="text-[11px] text-slate-500 dark:text-white/60">{tool.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
