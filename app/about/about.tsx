'use client'
import SectionH2 from "../sectionH2"
import Image from "next/image"
import me from '../../public/imgbin_hacker-png.png'
import { Londrina_Outline } from "next/font/google"
import ScrollAnimation from 'react-animate-on-scroll';

const londrina = Londrina_Outline({ weight: '400', subsets: ["latin"] })


export default function About() {


    return (
        <div className="mt-24 px-4 lg:px-16 relative" id="about">
            <SectionH2 text="About me" />
            <div className={`${londrina.className} text-[16vw] lg:text-[13vw] absolute top-[-5vw] lg:top-[-8vw]   opacity-15 z-[0] whitespace-nowrap`}>
                Ibrahim Olujide
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                <Image alt="ibrahim olujide" src={me} className="" height={200} width={200} />
                <ScrollAnimation animateOnce animateIn="focus-in-contract" className="text-center font-garamond text-[1.2rem] ">
                    Committed to the idea of life-long learning, I am a Software developer with a passion for all things Software development.
                    A developer who carries a keen eye for design in a user-first approach. My focus is in creating responsive layouts on the JavaScript stack of React and NodeJS, and from my background as a teacher I&apos;m well acquainted to bringing out solutions to complex problems.
                </ScrollAnimation>

            </div>


        </div>
    )
}