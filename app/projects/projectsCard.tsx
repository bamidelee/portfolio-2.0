'use client'
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


interface Props {
    image: StaticImageData,
    tools: string[],
    details: string,
    title: string,
    url: string,
    reverse?: boolean
}

export default function ProjectCard({ image, tools, details, title, url, reverse }: Props) {


    return (
        <div className="grid  min-h-[30rem] gap-4 md:p-8 p-4  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F6E1BB] via-[#f7f1dd] to-[#CCAE86]">
            <ScrollAnimation animateOnce duration={2} animateIn="fadeIn" className="flex flex-col gap-4 justify-center row-start-2 lg:row-start-auto">
                <div className="flex gap-2 md:gap-4 flex-wrap text-[1rem]">
                    {
                        tools.map((tool, id) => <p className=" px-2 py-1 rounded-2xl font-pirata" key={id}>{tool}</p>)
                    }
                </div>
                <h2 className="font-bold text-[2rem] font-pirata">{title}</h2>
                <p className="font-garamond text-[1.2rem]">{details}</p>
                <Link className="py-1 px-8 border border-[var(--reverse-bg)] text-[var(--reverse-bg)] w-fit rounded-lg  font-garamond" target="_blank" href={url}>Visit</Link>

            </ScrollAnimation>
            <div className={`  ${reverse && 'lg:col-start-1 lg:row-start-1 '}  bg-[url('/scroll.png')] bg-no-repeat bg-center bg-contain p-8 w-full h-[10rem] md:h-[20rem]  md:p-16 overflow-hidden`}>
               
                <div className="relative h-full w-full"  >
                   
                    <Image alt={title} src={image} fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

            </div>

        </div>
    )
}