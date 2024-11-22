
import SectionH2 from "../sectionH2"
import ProjectCard from "./projectsCard"
import kohus from '../../public/kohus.png'
import seakam from '../../public/seakam.png'
import naijaodin from '../../public/naijaodin.png'
import mall from '../../public/mall.png'
import optimal from '../../public/optimal.png'
import getWater from '../../public/get-water.png'

export default function Projects(){


    return(
        <div className=" mt-4 mt-[4rem]" id="projects">
            <SectionH2 text="Projects"/>

            <ProjectCard url="https://www.getwater.africa/" tools={['Javascript', 'Node.js', 'Next.js', 'Fastify', 'Tailwind', 'Prisma', 'PostgreSQL']} image={getWater} title="Get-water" details="A contactless way to have clean water delivered to you. On demand delivery and meter supply of water for household and commercial businesses." reverse/>

            <ProjectCard url="https://www.kohus.africa/" tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'Tailwind', 'Mongodb']} image={kohus} title="Kohus" details="KOHUS is an online platform providing digital solution for Lawyer, Law Firm, Bar Association, and Citizens. Filing a new case, Respond to case and Search any case by number."/>

            <ProjectCard url="https://optimalsolutions-beta.vercel.app/" tools={['Javascript', 'Next.js', 'Tailwind']} image={optimal} title="Optimal Solutions" details="OptimalSolution®, your trusted partner in comprehensive pest control solutions. With over a decade of experience and commitment to excellence, We specialise in delivering tailored pest management services for homes and businesses. Our mission is to provide effective, safe, and sustainable pest control to protect your property and ensure your peace of mind." reverse/>

            <ProjectCard url="https://www.seakam.ng/" tools={['Javascript', 'Next.js', 'Tailwind']} image={seakam} title="Seakam" details="Seakam Global Resources Limited is a local company in Nigeria specialized in manufacturing various herbal drinks that can also be taken socially."/>

            <ProjectCard url="https://odin-frontend-ea5h.vercel.app/" tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'CSS', 'Mongodb']} image={naijaodin} title="Naijaodin" details="NAIJAODIN is an ADs-based streaming service that allows users to watch TV shows and movies on an internet-connected device. You can also download TV shows and movies." reverse/>

            <ProjectCard url="https://mall-beta.vercel.app/" tools={['Javascript', 'Next.js', 'Tailwind']} image={mall} title="Mall" details="An e-commerce with all the functionality any e-commerce should have. Users can filter by category,They have a cart overlay that display the products the user added to cart as well as its selected attributes, a carousel when a product have more than one picture."/>
        </div>
    )
}