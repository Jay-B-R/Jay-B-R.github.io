import { Globe, Layers, Lock, Terminal, Unlock } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, isAdmin, accent, theme, toggleAccent }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b bg-[#030712]/80 border-slate-800 transition-all">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">

        {/* Logo / Identity */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${theme.bgLight} ${theme.text} border ${theme.borderLight}`}>
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Jayaditya Buddan Ramesh</h1>
            <p className={`text-xs ${theme.text} font-medium`}>
              Poolesville Magnet Scholar • Global Ecology Studies
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Tab Navigation */}
          <nav className="flex items-center gap-1.5 bg-slate-800/40 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                activeTab === 'portfolio' ? `${theme.navActive} text-white` : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'terminal' ? `${theme.navActive} text-white` : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-4 h-4" /> Shell
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition flex items-center gap-1.5 ${
                activeTab === 'admin' ? `${theme.navActive} text-white` : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isAdmin ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />} Editor
            </button>
          </nav>

          {/* Accent Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAccent}
              className={`p-2 rounded-full hover:bg-slate-800 transition text-slate-400 ${theme.textHover} flex items-center justify-center`}
              title="Toggle Accent Palette"
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                  accent === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-red-500 hover:bg-red-400'
                } scale-110`}
              />
            </button>

            <a
              href="https://poolesville.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex text-xs items-center gap-1.5 px-3 py-1.5 border ${theme.borderLight} ${theme.bgLight} hover:bg-opacity-25 ${theme.text} rounded-md transition font-medium`}
            >
              <Globe className="w-3.5 h-3.5" /> PHS Magnet Site
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
