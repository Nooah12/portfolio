export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-white/65">
        <p>© {new Date().getFullYear()} Noah Gordon</p>
        <a href="mailto:noah.o.gordon@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-300">noah.o.gordon@gmail.com</a>
        <div className="flex gap-5"><a href="https://github.com/Nooah12" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300">GitHub</a><a href="https://linkedin.com/in/noah-gordon12/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-300">LinkedIn</a></div>
      </div>
    </footer>
  );
}
