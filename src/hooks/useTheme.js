import { useState } from 'react';

export function useTheme() {
  const [accent, setAccent] = useState('emerald');

  const theme = {
    text:         accent === 'emerald' ? 'text-emerald-400'          : 'text-red-500',
    textHover:    accent === 'emerald' ? 'hover:text-emerald-400'    : 'hover:text-red-400',
    bgLight:      accent === 'emerald' ? 'bg-emerald-500/10'         : 'bg-red-500/10',
    borderLight:  accent === 'emerald' ? 'border-emerald-500/20'     : 'border-red-500/20',
    btn:          accent === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-red-600 hover:bg-red-500',
    navActive:    accent === 'emerald' ? 'bg-emerald-600'            : 'bg-red-600',
    badge:        accent === 'emerald'
      ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/10'
      : 'bg-red-950/40 text-red-400 border-red-500/10',
    glowBorder:   accent === 'emerald' ? 'hover:border-emerald-500/30' : 'hover:border-red-500/30',
    terminalText: accent === 'emerald' ? 'text-emerald-400'          : 'text-red-400',
    glow1:        accent === 'emerald' ? 'bg-emerald-500/5'          : 'bg-red-500/5',
    glow2:        accent === 'emerald' ? 'bg-indigo-500/5'           : 'bg-rose-500/5',
    underline:    accent === 'emerald' ? 'decoration-emerald-500'    : 'decoration-red-500',
    dot:          accent === 'emerald' ? 'bg-emerald-500'            : 'bg-red-500',
    gradientFrom: accent === 'emerald' ? 'from-emerald-950/10'       : 'from-red-950/10',
  };

  const toggleAccent = () => setAccent(a => (a === 'emerald' ? 'red' : 'emerald'));

  return { accent, theme, toggleAccent };
}
