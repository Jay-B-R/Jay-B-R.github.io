import { useState } from 'react';

const INITIAL_HISTORY = [
  { type: 'system', text: 'Jayaditya Portfolio Terminal v1.6.0 [Secure Environment Active]' },
  { type: 'system', text: 'Type "help" for a list of diagnostics.' },
];

export default function TerminalTab({ courses, projects, theme }) {
  const [input, setInput]     = useState('');
  const [history, setHistory] = useState(INITIAL_HISTORY);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const response = [{ type: 'user', text: `> ${input}` }];

    switch (cmd) {
      case 'help':
        response.push(
          { type: 'system', text: 'Available commands:' },
          { type: 'system', text: '  about      - Display background about Jayaditya' },
          { type: 'system', text: '  projects   - Show detailed active ventures & roles' },
          { type: 'system', text: '  courses    - List active magnet classes' },
          { type: 'system', text: '  ecology    - Explain Poolesville GESP connection' },
          { type: 'system', text: '  clear      - Clear terminal screen' },
          { type: 'system', text: '  admin      - Prompt to elevate privileges' },
        );
        break;
      case 'about':
        response.push({
          type: 'system',
          text: 'Jayaditya Buddan Ramesh is an innovative Magnet scholar at Poolesville High School, specializing in offline AI logic models, high-performance web engineering, and Ecology Systems policy analysis.',
        });
        break;
      case 'projects':
        projects.forEach(p =>
          response.push({ type: 'system', text: `[${p.role}] ${p.title} — ${p.tech.join(', ')}` })
        );
        break;
      case 'courses':
        courses.forEach(c =>
          response.push({ type: 'system', text: `• [${c.category}] ${c.title}` })
        );
        break;
      case 'ecology':
        response.push({
          type: 'system',
          text: 'Through the Global Ecology Studies Program (GESP), Jayaditya analyzes how environmental policy decisions shape modern legislative and global digital environments.',
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'admin':
        response.push({ type: 'system', text: 'To authenticate as Admin, please use the Editor tab.' });
        break;
      default:
        response.push({ type: 'error', text: `Command not found: "${cmd}". Type "help" for a list of diagnostics.` });
    }

    setHistory(prev => [...prev, ...response]);
    setInput('');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Diagnostics & Shell</h2>
        <p className="text-slate-400 text-sm mt-1">
          An interactive node command console demonstrating Web Development and AP Computer Science fundamentals.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col h-[500px]">
        {/* Terminal chrome */}
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs text-slate-500 font-mono">jayaditya@phs-magnet-node</div>
          <div className="w-4" />
        </div>

        {/* Output */}
        <div className="p-5 flex-1 overflow-y-auto font-mono text-sm space-y-3.5">
          {history.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap leading-relaxed ${
                line.type === 'user'  ? 'text-slate-200'  :
                line.type === 'error' ? 'text-red-400'    :
                theme.terminalText
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex bg-slate-900 border-t border-slate-800">
          <span className={`p-3.5 pr-1 font-mono ${theme.text} font-bold select-none text-sm`}>$</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'help', 'about', 'projects', 'ecology')"
            className="flex-1 bg-transparent border-0 outline-none ring-0 focus:ring-0 p-3.5 font-mono text-sm text-slate-100 placeholder-slate-600"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
