'use client'
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


interface Props{
    image: StaticImageData,
    tools: string[],
    details: string,
    title: string,
    url: string,
    reverse?: boolean
}

export default function ProjectCard({image, tools, details, title, url, reverse}: Props){


    return(
        <div className="grid lg:grid-cols-2 m-h-[8rem] mt-16 gap-4 border-b-solid border-b-2 border-b-[var(--foreground-rgb)] pb-8">
            <ScrollAnimation duration={2} animateIn="fadeIn" className="flex flex-col gap-4 justify-center row-start-2 lg:row-start-auto">
                <div className="flex gap-4 flex-wrap text-[.7rem] lg:text-[1rem]">
                    {
                        tools.map((tool, id) => <p className="border-solid border-2 border-[var(--foreground-rgb)] px-2 py-1 rounded-2xl" key={id}>{tool}</p>)
                    }
                </div>
                <h2 className="font-bold text-[1.5rem]">{title}</h2>
                <p>{details}</p>
                <Link className="py-1 px-8 bg-[var(--reverse-bg)] w-fit rounded-2xl text-[var(--reverse-color)] hover:bg-inherit hover:text-inherit hover:border-solid hover:border-2 hover:border-inherit" target="_blank" href={url}>Visit</Link>
            </ScrollAnimation>
            <div className={`  ${reverse && 'lg:col-start-1 lg:row-start-1 ' }  bg-[var(--foreground-rgb)] p-2  md:p-4 overflow-hidden`}>
                <ScrollAnimation animateIn="scale-in-hor-center"className="relative h-[10rem] md:h-[18rem]"  >
                    <Image alt = {title} src={image} fill className="object-contain"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </ScrollAnimation>
                
            </div>

        </div>
    )
}