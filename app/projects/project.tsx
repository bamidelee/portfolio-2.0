
import SectionH2 from "../sectionH2"
import ProjectCard from "./projectsCard"
import kohus from '../../public/brooks.png'
import seakam from '../../public/seakam.png'
import naijaodin from '../../public/naijaodin.png'
import mall from '../../public/mall.png'

export default function Projects(){


    return(
        <div className="mt-[6rem] lg:mt-[12rem]" id="projects">
            <SectionH2 text="Projects"/>

            <ProjectCard url="https://brookstech.ng" tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'Tailwind']} image={kohus} title="Brookstech" details="Brookstech is Africa's premier technology consulting services firm, delivering cutting-edge solutions for your business."/>

            <ProjectCard url="https://www.seakam.ng/" tools={['Javascript', 'Next.js', 'Tailwind']} image={seakam} title="Seakam" details="Seakam Global Resources Limited is a local company in Nigeria specialized in manufacturing various herbal drinks that can also be taken socially." reverse={true}/>

            <ProjectCard url="https://odin-frontend-ea5h.vercel.app/" tools={['Javascript', 'Node.js', 'Next.js', 'Graphql', 'CSS']} image={naijaodin} title="Naijaodin" details="NAIJAODIN is an ADs-based streaming service that allows users to watch TV shows and movies on an internet-connected device. You can also download TV shows and movies."/>

            <ProjectCard url="https://mall-beta.vercel.app/" tools={['Javascript', 'Next.js', 'Tailwind']} image={mall} title="Mall" details="An e-commerce with all the functionality any e-commerce should have. Users can filter by category,They have a cart overlay that display the products the user added to cart as well as its selected attributes, a carousel when a product have more than one picture." reverse={true}/>
        </div>
    )
}