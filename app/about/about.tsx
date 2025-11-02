'use client'
import SectionHeading from "../components/SectionHeading"
import Image from "next/image"
import me from '../../public/imgbin_hacker-png.png'
import GlassCard from "../components/GlassCard"

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content - 60% */}
          <div className="lg:pr-12 animate-fadeInUp">
            <SectionHeading>About Me</SectionHeading>
            <div className="space-y-6 text-dark-navy/80 body-lg">
              <p>
                I&apos;m a <span className="font-semibold text-dark-navy">Full Stack Developer</span> with 
                a passion for creating beautiful, functional web applications. With over 4 years of 
                experience, I specialize in the JavaScript ecosystem.
              </p>
              <p>
                My journey in software development is driven by a commitment to 
                <span className="font-semibold text-dark-navy"> life-long learning</span>. 
                I bring a keen eye for design and a user-first approach to every project.
              </p>
              <p>
                Coming from a background in teaching, I excel at breaking down complex problems 
                into elegant solutions. I focus on creating responsive, accessible applications 
                using modern technologies like React, Next.js, and Node.js.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <GlassCard hover={false}>
                <div className="font-semibold text-dark-navy mb-1">Frontend</div>
                <div className="text-sm text-dark-navy/70">React, Next.js, TypeScript</div>
              </GlassCard>
              <GlassCard hover={false}>
                <div className="font-semibold text-dark-navy mb-1">Backend</div>
                <div className="text-sm text-dark-navy/70">Node.js, Express, GraphQL</div>
              </GlassCard>
              <GlassCard hover={false}>
                <div className="font-semibold text-dark-navy mb-1">Database</div>
                <div className="text-sm text-dark-navy/70">MongoDB, PostgreSQL</div>
              </GlassCard>
              <GlassCard hover={false}>
                <div className="font-semibold text-dark-navy mb-1">Tools</div>
                <div className="text-sm text-dark-navy/70">Git, AWS, Vercel</div>
              </GlassCard>
            </div>
          </div>

          {/* Image - 40% with overlap effect */}
          <div className="relative animate-fadeInUp delay-200">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary-blue to-primary-purple p-1 rounded-3xl shadow-glow-blue">
                <div className="bg-white rounded-3xl p-8">
                  <Image 
                    alt="Ibrahim Olujide" 
                    src={me} 
                    className="w-full h-auto" 
                    width={400} 
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-purple/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-blue/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}