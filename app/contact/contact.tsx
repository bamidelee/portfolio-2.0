'use client'

import { Icon } from '@iconify/react';
import SectionHeading from "../components/SectionHeading"
import GlassCard from "../components/GlassCard"
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-mesh relative overflow-hidden" id='contact'>
      {/* Animated background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-float delay-200"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <SectionHeading>Let&apos;s Connect</SectionHeading>
          <p className="body-lg text-dark-navy/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp'>
          <GlassCard className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center">
              <Icon icon="material-symbols:call" className="text-primary-blue" width="32" height="32" />
            </div>
            <h2 className='font-space font-bold text-xl mb-3 text-dark-navy'>
              Telephone
            </h2>
            <a href='tel:+2348115796668' className='text-dark-navy/70 hover:text-primary-blue transition-colors font-semibold'>
              +234 811 579 6668
            </a>
          </GlassCard>

          <GlassCard className="text-center bg-gradient-to-br from-primary-blue to-primary-purple border-0">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon icon="material-symbols:mail" className="text-white" width="32" height="32" />
            </div>
            <h2 className='font-space font-bold text-xl mb-3 text-white'>
              Email
            </h2>
            <a href='mailto:ibrahimolujide@gmail.com' className='text-white/90 hover:text-white transition-colors font-semibold'>
              ibrahimolujide@gmail.com
            </a>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center">
              <Icon icon="mdi:web" className="text-primary-blue" width="32" height="32" />
            </div>
            <h2 className='font-space font-bold text-xl mb-3 text-dark-navy'>
              Socials
            </h2>
            <div className='flex gap-4 justify-center'>
              <Link 
                target='_blank' 
                href={'https://github.com/bamidelee'} 
                className='w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center hover:from-primary-blue/30 hover:to-primary-purple/30 transition-all hover:scale-110'
              >
                <Icon icon="mdi:github" className="text-primary-blue" width="20" height="20" />
              </Link>
              <Link 
                target='_blank' 
                href={'https://x.com/const_bamidele'} 
                className='w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center hover:from-primary-blue/30 hover:to-primary-purple/30 transition-all hover:scale-110'
              >
                <Icon icon="pajamas:twitter" className="text-primary-blue" width="20" height="20" />
              </Link>
              <Link 
                target='_blank' 
                href={'https://www.linkedin.com/in/ibrahim-olujide-67194223b/'} 
                className='w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 flex items-center justify-center hover:from-primary-blue/30 hover:to-primary-purple/30 transition-all hover:scale-110'
              >
                <Icon icon="mdi:linkedin" className="text-primary-blue" width="20" height="20" />
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}