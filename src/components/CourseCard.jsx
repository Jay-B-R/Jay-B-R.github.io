import { BookMarked, Code, FileText, Globe } from 'lucide-react';

const ICON_MAP = {
  Code:       <Code className="w-5 h-5" />,
  Globe:      <Globe className="w-5 h-5" />,
  FileText:   <FileText className="w-5 h-5" />,
  BookMarked: <BookMarked className="w-5 h-5" />,
};

export default function CourseCard({ course, theme, accent }) {
  return (
    <div
      className={`p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 ${theme.glowBorder} transition-all duration-300 flex flex-col justify-between group`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${theme.badge}`}>
            {course.category}
          </span>
          <div
            className={`p-2 rounded-xl bg-slate-800 text-slate-300 ${
              accent === 'emerald' ? 'group-hover:text-emerald-400' : 'group-hover:text-red-400'
            } transition-colors`}
          >
            {ICON_MAP[course.icon] ?? <BookMarked className="w-5 h-5" />}
          </div>
        </div>

        <h3
          className={`text-xl font-bold tracking-tight text-slate-100 ${
            accent === 'emerald' ? 'group-hover:text-emerald-300' : 'group-hover:text-red-400'
          } transition-colors`}
        >
          {course.title}
        </h3>

        <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{course.description}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
          Core Competencies
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {course.highlights.map((highlight, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-950/60 text-slate-300 border border-slate-800"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
