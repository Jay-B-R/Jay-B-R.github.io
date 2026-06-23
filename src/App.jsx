import { useState } from 'react';
import { initialCourses, initialProjects } from './data/initialData';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';

import Toast        from './components/Toast';
import Header       from './components/Header';
import Hero         from './components/Hero';
import PortfolioTab from './components/PortfolioTab';
import TerminalTab  from './components/TerminalTab';
import AdminTab     from './components/AdminTab';
import Footer       from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [isAdmin,   setIsAdmin]   = useState(false);
  const [courses,   setCourses]   = useState(initialCourses);
  const [projects,  setProjects]  = useState(initialProjects);

  const { accent, theme, toggleAccent } = useTheme();
  const { toastMessage, showToast }     = useToast();

  const addCourse    = (course)  => setCourses(prev  => [...prev,  course]);
  const deleteCourse = (id)      => setCourses(prev  => prev.filter(c => c.id !== id));
  const addProject   = (project) => setProjects(prev => [...prev,  project]);
  const deleteProject = (id)     => setProjects(prev => prev.filter(p => p.id !== id));

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans transition-colors duration-300">

      <Toast message={toastMessage} accent={accent} />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdmin={isAdmin}
        accent={accent}
        theme={theme}
        toggleAccent={toggleAccent}
      />

      <Hero accent={accent} theme={theme} />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'portfolio' && (
          <PortfolioTab courses={courses} projects={projects} accent={accent} theme={theme} />
        )}
        {activeTab === 'terminal' && (
          <TerminalTab courses={courses} projects={projects} theme={theme} />
        )}
        {activeTab === 'admin' && (
          <AdminTab
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            courses={courses}
            projects={projects}
            onAddCourse={addCourse}
            onDeleteCourse={deleteCourse}
            onAddProject={addProject}
            onDeleteProject={deleteProject}
            theme={theme}
            showToast={showToast}
          />
        )}
      </main>

      <Footer accent={accent} />

    </div>
  );
}
