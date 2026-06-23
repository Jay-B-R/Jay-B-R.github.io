export const initialCourses = [
  {
    id: '1',
    title: 'Magnet Precalculus (AB, CD)',
    category: 'Mathematics',
    description:
      'In-depth foundational and advanced Algebra, Precalculus, and foundational Calculus designed for accelerated Magnet students.',
    highlights: ['Foundational Calculus', 'Advanced Trigonometry', 'Algebraic Proofs'],
    icon: 'BookMarked',
  },
  {
    id: '2',
    title: 'AP Computer Science Principles',
    category: 'Technology & AI',
    description:
      'Learned foundational skills for ongoing Artificial Intelligence, web development, and web application creation.',
    highlights: ['Web Application Architectures', 'AI Foundations', 'Computational Logic'],
    icon: 'Code',
  },
  {
    id: '3',
    title: 'AP Government',
    category: 'Social Sciences',
    description:
      'Learned ongoing politics and connected policy-making with environmental impacts through the Global Ecology Studies Program.',
    highlights: ['Environmental Policy Linkage', 'Constitutional Frameworks', 'Ecology Advocacy'],
    icon: 'Globe',
  },
  {
    id: '4',
    title: 'AP Seminar',
    category: 'Research',
    description:
      'Learned crucial research methods and developed structural habits for long-term studies relevant to the Global Ecology Studies Program.',
    highlights: ['Academic Synthesis', 'Literature Reviews', 'Empirical Research Methods'],
    icon: 'FileText',
  },
];

export const initialProjects = [
  {
    id: 'p1',
    title: 'J.A.Y.V.I.S',
    role: 'Founder / Owner',
    description:
      'A fully offline, locally run SLM developed with both text and voice interaction. It uses prior context, time awareness, and the user\'s name to deliver seamless, personalized responses. Voice mode supports hands-free multitasking with global hotkeys and verbal start/stop cues, while transparency mode keeps the UI out of the way. Optimized for concise replies, featuring updated 2FA, an upgraded natural voice model, and a redesigned UI.',
    tech: ['SLM', 'Voice Synthesis', 'Offline AI', 'Security (2FA)', 'Global Hotkeys'],
    links: [
      { label: 'YouTube Demo', url: 'https://www.youtube.com/@jayadityabr/', type: 'youtube' },
      { label: 'GitHub Repository', url: 'https://github.com/Jay-B-R/JAYVIS', type: 'github' },
    ],
  },
  {
    id: 'p2',
    title: 'Schedule.PHS & GradeViewer',
    role: 'Cofounder',
    description:
      'Created to address the lack of a clean interface for scheduling at Poolesville High School, alongside a modern, comprehensive GradeViewer application that informs users of their current grades, absences, academic documents, and real-time scheduling updates.',
    tech: ['React', 'CSS Engine', 'Academic API', 'Interactive UI'],
    links: [
      { label: 'Launch Application', url: 'https://poolesville.web.app/', type: 'external' },
    ],
  },
];

export const ADMIN_PASSWORD = 'poolesville2026';
