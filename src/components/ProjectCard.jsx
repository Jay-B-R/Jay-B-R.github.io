import { ExternalLink, Github, Youtube } from 'lucide-react';

const LINK_ICON = {
  youtube:  <Youtube className="w-3.5 h-3.5" />,
  github:   <Github className="w-3.5 h-3.5" />,
  external: <ExternalLink className="w-3.5 h-3.5" />,
};

export default function ProjectCard({ project, theme }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/40 to-slate-950/50 flex flex-col justify-between hover:border-slate-700 transition relative overflow-hidden group">
      {/* Role badge */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${theme.bgLight} ${theme.text} border ${theme.borderLight}`}
        >
          {project.role}
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-extrabold text-slate-100 tracking-tight pr-28">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
      </div>

      <div className="mt-8 space-y-5">
        {/* Tech stack */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            Tech Engine
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links?.length > 0 && (
          <div className="flex flex-wrap gap-2.5 pt-3 border-t border-slate-800/60">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-2 ${theme.btn} text-white rounded-lg text-xs font-semibold transition`}
              >
                {LINK_ICON[link.type] ?? <ExternalLink className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
