'use client'

import SectionH2 from "../sectionH2"
import SkillCard from "./skillCard"
import { useState } from "react"

export default function Skills() {

    const [activeTab, setActiveTab] = useState('all')


    return (
        <div className="mt-24 relative" id="skills">
             
            <SectionH2 text="Skills & Tools" />
            <div className="flex gap-4 justify-center flex-wrap mt-8">
                <button onClick={() => setActiveTab('all')} className={`${activeTab === 'all' && 'bg-[var(--reverse-bg)] text-[var(--reverse-color)]'} border-solid font-garamond border border-[var(--foreground-rgb)] px-4 py-1 rounded-lg transition-all duration-300 text-[.8rem] lg:text-[1rem] `}>All</button>
                <button onClick={() => setActiveTab('frontend')} className={`${activeTab === 'frontend' && 'bg-[var(--reverse-bg)] text-[var(--reverse-color)]'} border-solid font-garamond border border-[var(--foreground-rgb)] px-4 py-1 rounded-lg transition-all duration-300 text-[.8rem] lg:text-[1rem] `}>Frontend</button>
                <button onClick={() => setActiveTab('backend')} className={`${activeTab === 'backend' && 'bg-[var(--reverse-bg)] text-[var(--reverse-color)]'} border-solid font-garamond border border-[var(--foreground-rgb)] px-4 py-1 rounded-lg transition-all duration-300 text-[.8rem] lg:text-[1rem] `}>Backend</button>
                <button onClick={() => setActiveTab('tools')} className={`${activeTab === 'tools' && 'bg-[var(--reverse-bg)] text-[var(--reverse-color)]'} border-solid font-garamond border border-[var(--foreground-rgb)] px-4 py-1 rounded-lg transition-all duration-300 text-[.8rem] lg:text-[1rem] `}>Tools</button>
            </div>
            <div className="mt-8 flex justify-center gap-8 lg:gap-12 lg:w-[70%] mx-auto flex-wrap">
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="flowbite:html-solid" text="HTML" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="flowbite:css-solid" text="CSS" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="ri:javascript-fill" text="Javascript" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="tabler:brand-react-native" text="React native" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="cib:expo" text="Expo" />}
                {(activeTab === 'all' || activeTab === 'frontend' || activeTab === 'backend') && <SkillCard icon="bxl:typescript" text="Typescript" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="mingcute:react-line" text="React" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="akar-icons:redux-fill" text="Redux" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="mdi:webpack" text="Webpack" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="simple-icons:jest" text="Jest" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="bi:git" text="Git" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="ri:nextjs-fill" text="Next.js" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="mdi:github" text="Github" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="akar-icons:vercel-fill" text="Vercel" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="mdi:aws" text="AWS" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="simple-icons:render" text="Render" />}
                {(activeTab === 'all' || activeTab === 'frontend') && <SkillCard icon="mdi:tailwind" text="Tailwind" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="akar-icons:node-fill" text="Node.js" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="simple-icons:express" text="Express" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="bxl:mongodb" text="Mongodb" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="teenyicons:graphql-outline" text="Graphql" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="devicon-plain:bash" text="Bash" />}
                {(activeTab === 'all' || activeTab === 'tools') && <SkillCard icon="solar:figma-bold" text="Figma" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="teenyicons:python-solid" text="Python" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="simple-icons:pug" text="Pug" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="ph:file-sql" text="SQL" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="akar-icons:postgresql-fill" text="PostgreSQL" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="simple-icons:prisma" text="Prisma" />}
                {(activeTab === 'all' || activeTab === 'backend') && <SkillCard icon="devicon-plain:fastify" text="Fastify" />}
            </div>
        </div>
    )
}

