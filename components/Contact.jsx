"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setSending(true);
    setResult("");
    const formData = new FormData(event.target);
    formData.append("access_key", "58199eac-cdd1-4c07-8306-87aefad11d41");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Something went wrong. Please try again.");
      event.target.reset();
      setResult("Thanks — your message is on its way.");
    } catch (error) { setResult(error.message || "Something went wrong. Please try again."); }
    finally { setSending(false); }
  }

  return (
    <section id="contact" className="contact-bg scroll-mt-24 py-20 sm:py-28">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-2xl rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur sm:p-10 dark:border-white/10 dark:bg-white/[0.04]">
        <p className="eyebrow">Let&apos;s connect</p>
        <h2 className="section-title">Have a project or opportunity in mind?</h2>
        <p className="mt-5 leading-7 text-slate-600 dark:text-white/70">I&apos;m always happy to hear from people working on interesting things. Send me a message and I&apos;ll get back to you as soon as I can.</p>
        <form onSubmit={onSubmit} className="mt-9 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Name<input name="name" required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 dark:border-white/20 dark:bg-white/5" /></label>
            <label className="text-sm font-medium">Email<input name="email" type="email" required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 dark:border-white/20 dark:bg-white/5" /></label>
          </div>
          <label className="block text-sm font-medium">Message<textarea name="message" rows="6" required className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 dark:border-white/20 dark:bg-white/5" /></label>
          <button type="submit" disabled={sending} className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900">{sending ? "Sending…" : "Send message"}</button>
          {result && <p role="status" className="text-sm text-slate-600 dark:text-white/70">{result}</p>}
        </form>
      </motion.div>
    </section>
  );
}
