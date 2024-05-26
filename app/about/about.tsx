
import SectionH2 from "../sectionH2"
import Image from "next/image"
import me from '../../public/imgbin_hacker-png.png'
import { Londrina_Outline } from "next/font/google"

const londrina = Londrina_Outline({ weight: '400', subsets: ["latin"] })


export default function About() {


    return (
        <div className="mt-24 px-4 lg:px-16 relative" id="about">
            <SectionH2 text="About me" />
            <div className={` text-[13vw] absolute top-[-8vw] left-[-6vw] text-primary-black/50 opacity-15 z-[0] whitespace-nowrap`}>
                Ibrahim Olujide
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                <Image alt="ibrahim olujide" src={me} className="" height={200} width={200} />
                <p className="text-center">
                    Committed to the idea of life-long learning, I am a full stack developer with a passion for all things web development.
                    I&apos;m a full-stack developer who carries a keen eye for design in a user-first approach. My focus is in creating responsive layouts on the JavaScript stack of React and NodeJS, and from my background as a teacher I&apos;m well acquainted to bringing out solutions to complex problems.
                </p>

            </div>


        </div>
    )
}