import { Globe, Plus } from 'lucide-react';
import CourseCard from './CourseCard';
import ProjectCard from './ProjectCard';

export default function PortfolioTab({ courses, projects, accent, theme }) {
  return (
    <div className="space-y-16">

      {/* Academic Pathways */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Specialized Academic Pathways
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Key magnet disciplines and ecological syntheses currently pursued at Poolesville High.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className={`h-2 w-2 rounded-full ${theme.dot} animate-ping`} />
            <span>Dynamic Real-Time List</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} theme={theme} accent={accent} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Active Portfolio Projects & Initiatives
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Applying computer science, artificial intelligence, and school schedule engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} theme={theme} />
          ))}

          {/* Add-more prompt card */}
          <div className="border border-dashed border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 bg-slate-950/20">
            <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-300">Expand this Portfolio</h3>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto mt-1">
                Unlock the "Editor" tab to add additional systems, sites, and project logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GESP Integration Panel */}
      <section
        className={`p-8 rounded-3xl border ${theme.borderLight} bg-gradient-to-r ${theme.gradientFrom} via-slate-950 to-slate-950 space-y-6`}
      >
        <div className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Globe className={`w-6 h-6 ${theme.text} animate-pulse`} />
            Global Ecology Studies Program Integration
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            As part of Poolesville High School's signature Whole School Magnet, the Global Ecology House
            offers unique cross-curricular studies in environmental analysis. This portfolio fuses computer
            science (data models, interactive dashboards, natural language tooling) directly with
            public-policy and ecological diagnostics learned in AP Seminar and AP Government.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Interdisciplinary Policy
              </h4>
              <p className="text-xs text-slate-500">
                Mapping state environmental laws to active ecosystem conservation measures.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Advanced Research
              </h4>
              <p className="text-xs text-slate-500">
                Synthesizing local stream-quality assessments into structured academic reports.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
