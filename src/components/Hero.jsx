import { Award, Code, Globe, MapPin } from 'lucide-react';

export default function Hero({ accent, theme }) {
  return (
    <section className="relative overflow-hidden py-16 px-4 border-b border-slate-800 bg-gradient-to-b from-slate-900/10 via-transparent to-transparent">
      {/* Ambient glows */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.glow1} blur-3xl rounded-full pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme.glow2} blur-3xl rounded-full pointer-events-none`} />

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* GESP Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.borderLight} ${theme.bgLight} ${theme.text} text-xs font-semibold`}>
          <Award className="w-4 h-4" /> Global Ecology Studies Program (GESP)
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Jayaditya Buddan Ramesh
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Magnet Student at{' '}
          <span className={`text-slate-100 font-semibold underline ${theme.underline}`}>
            Poolesville High School
          </span>
          . Blending computational logic with structural environmental research and policy analysis.
        </p>

        {/* Attribute chips */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <MapPin className={`w-4 h-4 ${theme.text}`} /> Poolesville, Maryland
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <Code className={`w-4 h-4 ${accent === 'emerald' ? 'text-indigo-400' : 'text-rose-400'}`} />
            Fullstack & Web App Creator
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <Globe className={`w-4 h-4 ${accent === 'emerald' ? 'text-teal-400' : 'text-red-500'}`} />
            Policy & Ecology Synthesizer
          </span>
        </div>
      </div>
    </section>
  );
}
