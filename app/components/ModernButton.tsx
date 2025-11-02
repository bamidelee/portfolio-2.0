import Link from 'next/link';
import type { ReactNode } from 'react';

interface ModernButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  target?: string;
}

export default function ModernButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  target
}: ModernButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-md hover:shadow-glow-blue hover:-translate-y-1',
    secondary: 'bg-white text-dark-navy border-2 border-dark-navy hover:bg-dark-navy hover:text-white hover:-translate-y-1',
    ghost: 'bg-transparent text-dark-navy hover:bg-white/50 hover:-translate-y-1'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}