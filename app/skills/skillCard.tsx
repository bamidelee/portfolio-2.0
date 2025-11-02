'use client'

import { Icon } from '@iconify/react';

interface Props {
  icon: string;
  text: string;
  delay?: number;
}

export default function SkillCard({ icon, text, delay = 0 }: Props) {
  return (
    <div 
      className="
        group bg-white rounded-2xl p-6 shadow-md
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2
        border border-transparent hover:border-primary-blue/20
        animate-fadeInUp
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="
          w-16 h-16 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-purple/10
          flex items-center justify-center
          group-hover:from-primary-blue/20 group-hover:to-primary-purple/20
          transition-all duration-300 group-hover:scale-110
        ">
          <Icon 
            icon={icon} 
            className="text-primary-blue group-hover:text-primary-purple transition-colors" 
            width="32" 
            height="32" 
          />
        </div>
        <span className="font-semibold text-dark-navy text-center text-sm">
          {text}
        </span>
      </div>
    </div>
  );
}