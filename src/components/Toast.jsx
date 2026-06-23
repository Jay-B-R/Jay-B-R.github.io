import { Sparkles } from 'lucide-react';

export default function Toast({ message, accent }) {
  if (!message) return null;

  const border = accent === 'emerald' ? 'border-emerald-500 text-emerald-400' : 'border-red-500 text-red-400';

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-xl border ${border} bg-slate-900 animate-bounce`}
    >
      <Sparkles className="w-5 h-5" />
      <span className="font-medium text-sm">{message}</span>
    </div>
  );
}
