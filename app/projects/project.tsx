'use client'
import SectionHeading from "../components/SectionHeading"
import ProjectCard from "./projectsCard"
import kohus from '../../public/kohus.png'
import seakam from '../../public/seakam.png'
import naijaodin from '../../public/naijaodin.png'
import mall from '../../public/mall.png'
import optimal from '../../public/optimal.png'
import getWater from '../../public/get-water.png'
import map from '../../public/map.png'
import londonian from '../../public/londonian.png'
import investor from '../../public/investor.png'

export default function Projects() {
  return (
    <section className="md:py-32 py-20 px-6 md:px-12 bg-gradient-mesh" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading>Featured Projects</SectionHeading>
          <p className="text-lg text-dark-navy/70 max-w-2xl mx-auto">
            A selection of my recent work showcasing modern web applications built with cutting-edge technologies.
          </p>
        </div>

        {/* Clean grid layout - all projects in 2 columns for consistency */}


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fadeInUp delay-100">
            <ProjectCard
              url="https://www.londonianhotel.com/"
              tools={['Next.js', 'Javascript', 'Tailwind']}
              image={londonian}
              title="Londonian Hotel"
              details="Relax, recharge, and enjoy personalized service designed to make every moment special."
            />
          </div>
          <div className="animate-fadeInUp delay-100">
            <ProjectCard
              url="https://www.investorspilot.com/"
              tools={['Next.js', 'Javascript', 'Tailwind', 'Node js', 'Fastify']}
              image={investor}
              title="Investors Pilot"
              details=" A platform that combines investment service with precision execution which stands as a global bridge for global regional investors into Dubai & international markets."
            />
          </div>
          <div className="animate-fadeInUp delay-100">
            <ProjectCard
              url="https://mapis4u.com/"
              tools={['Next.js', 'Redux', 'Tailwind']}
              image={map}
              title="MAP"
              details="MAP ERP is built to transform Healthcare Management with unparalleled efficiency and precision "
            />
          </div>
          <div className="animate-fadeInUp">
            <ProjectCard
              url="https://www.getwater.africa/"
              tools={['Javascript', 'Node.js', 'Next.js', 'Fastify', 'Tailwind', 'Prisma', 'PostgreSQL', 'React native', 'Expo']}
              image={getWater}
              title="Get-water"
              details="A contactless way to have clean water delivered to you. On demand delivery and meter supply of water for household and commercial businesses."
            />
          </div>


          <div className="animate-fadeInUp delay-100">
            <ProjectCard
              url="https://www.kohus.africa/"
              tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'Tailwind', 'Mongodb']}
              image={kohus}
              title="Kohus"
              details="KOHUS is an online platform providing digital solution for Lawyers, Law Firms, Bar Association, and Citizens."
            />
          </div>

          <div className="animate-fadeInUp delay-200">
            <ProjectCard
              url="https://optimalsolutions-beta.vercel.app/"
              tools={['Javascript', 'Next.js', 'Tailwind']}
              image={optimal}
              title="Optimal Solutions"
              details="Comprehensive pest control solutions with over a decade of experience in delivering tailored pest management services."
            />
          </div>

          {/* <div className="animate-fadeInUp delay-300">
            <ProjectCard
              url="https://www.seakam.ng/"
              tools={['Javascript', 'Next.js', 'Tailwind']}
              image={seakam}
              title="Seakam"
              details="A local company in Nigeria specialized in manufacturing various herbal drinks that can also be taken socially."
            />
          </div>

          <div className="animate-fadeInUp delay-400">
            <ProjectCard
              url="https://odin-frontend-ea5h.vercel.app/"
              tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'CSS', 'Mongodb']}
              image={naijaodin}
              title="Naijaodin"
              details="An ADs-based streaming service that allows users to watch TV shows and movies on an internet-connected device."
            />
          </div>

          <div className="animate-fadeInUp delay-500">
            <ProjectCard
              url="https://mall-beta.vercel.app/"
              tools={['Javascript', 'Next.js', 'Tailwind']}
              image={mall}
              title="Mall"
              details="An e-commerce platform with filtering, cart management, and product carousel functionality."
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}