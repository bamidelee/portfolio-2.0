import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div 
      className={`
        bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl p-6
        shadow-glass transition-all duration-300
        ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}