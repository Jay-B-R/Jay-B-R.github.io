import React, { useState } from 'react';
import { Lock, Plus, Trash2, Unlock } from 'lucide-react';
import { ADMIN_PASSWORD } from '../data/initialData';

const EMPTY_COURSE = { title: '', category: 'Mathematics', description: '', highlights: '', icon: 'BookMarked' };
const EMPTY_PROJECT = { title: '', role: 'Founder / Owner', description: '', tech: '', link1Label: '', link1Url: '', link2Label: '', link2Url: '' };

export default function AdminTab({ isAdmin, setIsAdmin, courses, projects, onAddCourse, onDeleteCourse, onAddProject, onDeleteProject, theme, showToast }) {
  const [password, setPassword]     = useState('');
  const [authError, setAuthError]   = useState('');
  const [newCourse, setNewCourse]   = useState(EMPTY_COURSE);
  const [newProject, setNewProject] = useState(EMPTY_PROJECT);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setAuthError('');
      setPassword('');
      showToast('🔓 Welcome, Jayaditya. Write Mode unlocked!');
    } else {
      setAuthError('Invalid access token key.');
    }
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.description) {
      showToast('Please fill in all core fields!');
      return;
    }
    onAddCourse({
      id: Date.now().toString(),
      ...newCourse,
      highlights: newCourse.highlights ? newCourse.highlights.split(',').map(h => h.trim()) : [],
    });
    setNewCourse(EMPTY_COURSE);
    showToast('✨ Successfully added new course pathway!');
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) {
      showToast('Please fill in project title and description.');
      return;
    }
    const links = [];
    if (newProject.link1Label && newProject.link1Url)
      links.push({ label: newProject.link1Label, url: newProject.link1Url, type: 'external' });
    if (newProject.link2Label && newProject.link2Url)
      links.push({ label: newProject.link2Label, url: newProject.link2Url, type: 'external' });

    onAddProject({
      id: Date.now().toString(),
      title: newProject.title,
      role: newProject.role,
      description: newProject.description,
      tech: newProject.tech ? newProject.tech.split(',').map(t => t.trim()) : [],
      links,
    });
    setNewProject(EMPTY_PROJECT);
    showToast('✨ New project deployed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Header row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
            <Lock className="w-6 h-6 text-indigo-500" />
            Portfolio Editor & Content CMS
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            This panel allows Jayaditya to securely append, modify, or clear dynamic page cards.
          </p>
        </div>
        {isAdmin && (
          <button
            onClick={() => setIsAdmin(false)}
            className="px-4 py-2 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl text-sm font-semibold transition"
          >
            Lock Editor Access
          </button>
        )}
      </div>

      {/* Login gate */}
      {!isAdmin ? (
        <div className="max-w-md mx-auto p-8 rounded-2xl border border-slate-800 bg-slate-900/40 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-indigo-500/10 text-indigo-400">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Authentication Required</h3>
            <p className="text-xs text-slate-400 mt-1">
              Please enter the Poolesville Magnet passphrase to unlock write access.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Passphrase
              </label>
              <input
                type="password"
                placeholder="Enter passphrase..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            {authError && <p className="text-xs text-red-400 font-semibold">{authError}</p>}
            <button
              type="submit"
              className={`w-full py-2.5 ${theme.btn} text-white rounded-xl text-sm font-semibold tracking-tight transition`}
            >
              Verify Passphrase
            </button>
          </form>
        </div>

      ) : (
        <div className="space-y-12 animate-fadeIn">

          {/* Add Course form */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-400 border-b border-slate-800/60 pb-3">
              <Plus className="w-5 h-5" /> Append Magnet Course Pathway
            </h3>
            <form onSubmit={handleAddCourse} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Course / Pathway Title">
                <input type="text" placeholder="e.g. AP Research" value={newCourse.title}
                  onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} />
              </Field>
              <Field label="Academic Category">
                <select value={newCourse.category} onChange={e => setNewCourse({ ...newCourse, category: e.target.value })}>
                  <option>Mathematics</option>
                  <option>Technology & AI</option>
                  <option>Social Sciences</option>
                  <option>Research</option>
                  <option>Biological Sciences</option>
                </select>
              </Field>
              <Field label="Description" span>
                <textarea rows="3" placeholder="Skills and goals..." value={newCourse.description}
                  onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} />
              </Field>
              <Field label="Highlights (comma separated)">
                <input type="text" placeholder="Trigonometry, Calculus" value={newCourse.highlights}
                  onChange={e => setNewCourse({ ...newCourse, highlights: e.target.value })} />
              </Field>
              <Field label="Icon">
                <select value={newCourse.icon} onChange={e => setNewCourse({ ...newCourse, icon: e.target.value })}>
                  <option value="BookMarked">Book</option>
                  <option value="Code">Code Bracket</option>
                  <option value="Globe">Globe</option>
                  <option value="FileText">Document</option>
                </select>
              </Field>
              <button type="submit" className={`md:col-span-2 py-3 ${theme.btn} text-white rounded-xl text-sm font-semibold transition`}>
                Publish Course Pathway
              </button>
            </form>
          </div>

          {/* Add Project form */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-400 border-b border-slate-800/60 pb-3">
              <Plus className="w-5 h-5" /> Append Active Portfolio Project
            </h3>
            <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Project Title">
                <input type="text" placeholder="e.g. Schedule.PHS Companion" value={newProject.title}
                  onChange={e => setNewProject({ ...newProject, title: e.target.value })} />
              </Field>
              <Field label="Project Role">
                <select value={newProject.role} onChange={e => setNewProject({ ...newProject, role: e.target.value })}>
                  <option>Founder / Owner</option>
                  <option>Cofounder</option>
                  <option>Developer</option>
                  <option>Project Lead</option>
                </select>
              </Field>
              <Field label="Tech Stack (comma separated)" span>
                <input type="text" placeholder="React, SLM, Web App" value={newProject.tech}
                  onChange={e => setNewProject({ ...newProject, tech: e.target.value })} />
              </Field>
              <Field label="Project Description" span>
                <textarea rows="3" placeholder="Project summary..." value={newProject.description}
                  onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
              </Field>
              <Field label="Link 1 Label">
                <input type="text" placeholder="GitHub Repository" value={newProject.link1Label}
                  onChange={e => setNewProject({ ...newProject, link1Label: e.target.value })} />
              </Field>
              <Field label="Link 1 URL">
                <input type="text" placeholder="https://..." value={newProject.link1Url}
                  onChange={e => setNewProject({ ...newProject, link1Url: e.target.value })} />
              </Field>
              <Field label="Link 2 Label">
                <input type="text" placeholder="Live Demo" value={newProject.link2Label}
                  onChange={e => setNewProject({ ...newProject, link2Label: e.target.value })} />
              </Field>
              <Field label="Link 2 URL">
                <input type="text" placeholder="https://..." value={newProject.link2Url}
                  onChange={e => setNewProject({ ...newProject, link2Url: e.target.value })} />
              </Field>
              <button type="submit" className={`md:col-span-2 py-3 ${theme.btn} text-white rounded-xl text-sm font-semibold transition`}>
                Publish Project Item
              </button>
            </form>
          </div>

          {/* Manage existing */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-100">Manage Published Content</h3>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Pathways</h4>
              {courses.map(c => (
                <div key={c.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-between items-center gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-200">{c.title}</p>
                    <p className="text-xs text-slate-500">{c.category}</p>
                  </div>
                  <button onClick={() => { onDeleteCourse(c.id); showToast('🗑️ Pathway removed.'); }}
                    className="p-2 text-slate-500 hover:text-red-400 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Items</h4>
              {projects.map(p => (
                <div key={p.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex justify-between items-center gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-200">{p.title}</p>
                    <p className={`text-xs ${theme.text} font-semibold`}>{p.role}</p>
                  </div>
                  <button onClick={() => { onDeleteProject(p.id); showToast('🗑️ Project entry removed.'); }}
                    className="p-2 text-slate-500 hover:text-red-400 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

/* Small helper to keep form field markup DRY */
function Field({ label, children, span }) {
  const child = children;
  const styledChild = React.cloneElement(child, {
    className: 'w-full px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 ' + (child.props.className || ''),
  });
  return (
    <div className={`space-y-1${span ? ' md:col-span-2' : ''}`}>
      <label className="text-xs font-semibold text-slate-400">{label}</label>
      {styledChild}
    </div>
  );
}
