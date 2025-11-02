'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ModernButton from '../components/ModernButton';
import GlassCard from '../components/GlassCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-float delay-200"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-space text-2xl font-bold text-dark-navy">
            IO
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#about" className="text-dark-navy hover:text-primary-blue transition-colors">About</Link>
            <Link href="#projects" className="text-dark-navy hover:text-primary-blue transition-colors">Projects</Link>
            <Link href="#skills" className="text-dark-navy hover:text-primary-blue transition-colors">Skills</Link>
            <ModernButton href="#contact" variant="primary">Contact</ModernButton>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center pt-24 md:pt-0 pb-8 md:pb-0">
        <div className="animate-fadeInUp">
          <p className="text-primary-blue font-semibold text-base md:text-lg lg:text-xl mb-4">
            Full Stack Developer
          </p>
          <h1 className="font-space text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-dark-navy mb-4 md:mb-6 leading-tight">
            Hi, I&apos;m <span className="text-gradient">Ibrahim Olujide</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-dark-navy/80 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Crafting beautiful, functional web experiences with modern technologies.
            Passionate about clean code and user-centric design.
          </p>
        </div>

        <div className="animate-fadeInUp delay-200 flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
          <ModernButton href="#projects" variant="primary">
            View My Work
          </ModernButton>
          <ModernButton href="#contact" variant="secondary">
            Get In Touch
          </ModernButton>
        </div>

        {/* Stats cards */}
        <div className="animate-fadeInUp delay-300 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassCard>
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-dark-navy/70">Years Experience</div>
          </GlassCard>
          <GlassCard>
            <div className="text-4xl font-bold text-gradient mb-2">20+</div>
            <div className="text-dark-navy/70">Projects Completed</div>
          </GlassCard>
          <GlassCard>
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-dark-navy/70">Technologies</div>
          </GlassCard>
        </div>
      </div>

      {/* Social links */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-50">
        <Link
          href="https://github.com/bamidelee"
          target="_blank"
          className="text-dark-navy hover:text-primary-blue transition-all hover:scale-110"
        >
          <Icon icon="mdi:github" width="24" height="24" />
        </Link>
        <Link
          href="https://x.com/const_bamidele"
          target="_blank"
          className="text-dark-navy hover:text-primary-blue transition-all hover:scale-110"
        >
          <Icon icon="pajamas:twitter" width="24" height="24" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ibrahim-olujide-67194223b/"
          target="_blank"
          className="text-dark-navy hover:text-primary-blue transition-all hover:scale-110"
        >
          <Icon icon="mdi:linkedin" width="24" height="24" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon icon="ph:arrow-down" className="text-dark-navy/50" width="32" height="32" />
      </div>
    </section>
  );
}