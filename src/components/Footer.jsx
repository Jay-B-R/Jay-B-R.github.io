export default function Footer({ accent }) {
  const hover = accent === 'emerald' ? 'hover:text-emerald-400' : 'hover:text-red-400';

  return (
    <footer className="border-t border-slate-800 mt-20 bg-slate-950 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-slate-300 font-bold text-sm">Jayaditya Buddan Ramesh</p>
          <p>Poolesville Magnet High School Scholar • Global Ecology Studies Program</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://poolesville.web.app/"
            target="_blank"
            rel="noreferrer"
            className={`${hover} transition`}
          >
            PHS Portal
          </a>
        </div>
      </div>
    </footer>
  );
}
