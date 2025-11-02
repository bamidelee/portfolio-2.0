'use client'
import SectionHeading from "../components/SectionHeading"
import SkillCard from "./skillCard"
import { useState } from "react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden" id="skills">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading>Skills & Tools</SectionHeading>
        
        {/* Filter tabs */}
        <div className="flex gap-3 justify-center flex-wrap mb-12 animate-fadeInUp">
          {['all', 'frontend', 'backend', 'tools'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`
                px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-md' 
                  : 'bg-white text-dark-navy border-2 border-dark-navy/10 hover:border-primary-blue'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <>
              <SkillCard icon="flowbite:html-solid" text="HTML" delay={0} />
              <SkillCard icon="flowbite:css-solid" text="CSS" delay={100} />
              <SkillCard icon="ri:javascript-fill" text="Javascript" delay={200} />
              <SkillCard icon="tabler:brand-react-native" text="React Native" delay={300} />
              <SkillCard icon="cib:expo" text="Expo" delay={400} />
              <SkillCard icon="mingcute:react-line" text="React" delay={100} />
              <SkillCard icon="akar-icons:redux-fill" text="Redux" delay={200} />
              <SkillCard icon="mdi:webpack" text="Webpack" delay={300} />
              <SkillCard icon="simple-icons:jest" text="Jest" delay={400} />
              <SkillCard icon="ri:nextjs-fill" text="Next.js" delay={200} />
              <SkillCard icon="mdi:tailwind" text="Tailwind" delay={300} />
            </>
          )}
          {(activeTab === 'all' || activeTab === 'frontend' || activeTab === 'backend') && (
            <SkillCard icon="bxl:typescript" text="Typescript" delay={0} />
          )}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <>
              <SkillCard icon="akar-icons:node-fill" text="Node.js" delay={100} />
              <SkillCard icon="simple-icons:express" text="Express" delay={200} />
              <SkillCard icon="bxl:mongodb" text="Mongodb" delay={300} />
              <SkillCard icon="teenyicons:graphql-outline" text="Graphql" delay={400} />
              <SkillCard icon="teenyicons:python-solid" text="Python" delay={100} />
              <SkillCard icon="simple-icons:pug" text="Pug" delay={200} />
              <SkillCard icon="ph:file-sql" text="SQL" delay={300} />
              <SkillCard icon="akar-icons:postgresql-fill" text="PostgreSQL" delay={400} />
              <SkillCard icon="simple-icons:prisma" text="Prisma" delay={100} />
              <SkillCard icon="devicon-plain:fastify" text="Fastify" delay={200} />
            </>
          )}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <>
              <SkillCard icon="bi:git" text="Git" delay={0} />
              <SkillCard icon="mdi:github" text="Github" delay={100} />
              <SkillCard icon="akar-icons:vercel-fill" text="Vercel" delay={200} />
              <SkillCard icon="mdi:aws" text="AWS" delay={300} />
              <SkillCard icon="simple-icons:render" text="Render" delay={400} />
              <SkillCard icon="devicon-plain:bash" text="Bash" delay={100} />
              <SkillCard icon="solar:figma-bold" text="Figma" delay={200} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}