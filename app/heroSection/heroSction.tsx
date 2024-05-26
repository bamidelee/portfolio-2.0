'use client'
import Header from "./header/header"
import Image from "next/image"
import background from '../../public/original-654f84ecad94a02a4a97e52a291dba45.jpg'
import { Kumar_One_Outline } from "next/font/google"
import Link from "next/link"
import { Icon } from '@iconify/react';
import { Londrina_Outline } from "next/font/google"

const kumar = Kumar_One_Outline({ weight: '400', subsets: ["latin"] });
const londrina = Londrina_Outline({ weight: '400', subsets: ["latin"] })


export default function HeroSection() {

    return (
        <div className="h-[80vh] lg:h-[115vh] min-h-[40rem]  w-full  font-medium relative">
            <div className="absolute w-[55%] h-[100%] top-[-1rem] lg:top-[-3rem] right-[-4vw]">
                <Image alt="hero section" src={background} priority fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
            <div>

                <Header />
            </div>
            <div className="mt-[15vh] lg:mt-[18vh]">
                <h1 className="font-normal text-[6.95vw] m-0 h-fit">
                    Hi, I&apos;m
                </h1>
                <h1 className="font-bold text-[6.95vw] m-0">
                    Ibrahim Oluji<span className={`${kumar.className} text-primary-white relative z-10`}>de</span>
                </h1>
                <p className="text-[4vw] lg:text-[2vw]">
                    Full-stack developer
                </p>
                <div className="mt-8 border-2 border-solid border-primary-black/50 w-fit rounded hover:bg-primary-black">
                    <Link href={'#contact'} className="bg-primary-black text-primary-white py-2 px-4  rounded relative right-[-5px] bottom-[10px] hover:bg-primary-white hover:text-primary-black hover:border-solid hover:border-2 hover:border-primary-black">Contact</Link>
                </div>
                <div className="absolute flex flex-col items-center right-[1rem] lg:right-[3rem] gap-4 lg:gap-8 text-primary-white text-1rem lg:text-[1.5rem] bottom-[30%] lg:bottom-[20%]">
                    <div className="w-[1px] h-[7rem] bg-primary-white"></div>
                    <Link className='hover:scale-150 transition-all duration-300' href={'https://github.com/bamidelee'}><Icon icon="mdi:github" /></Link>
                    <Link className='hover:scale-150 transition-all duration-300' href={'https://x.com/const_bamidele'}><Icon icon="pajamas:twitter" /></Link>
                    <Link className='hover:scale-150 transition-all duration-300' href={'https://www.linkedin.com/in/olujide-ibrahim-67194223b/'}><Icon icon="mdi:linkedin" /></Link>
                </div>
                <div>
                    <div className="absolute left-[30%] bottom-[32vh] font-mono">
                        <Icon icon="ph:triangle-fill" className="relative top-[40px] rotate-[-25deg]" />
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[25deg]">o</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[50deg]">l</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[75deg]">u</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[100deg]">j</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[125deg]">i</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[150deg]">d</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[175deg]">e</p>

                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[210deg]">i</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[233deg]">b</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[256deg]">r</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[279deg]">a</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[302deg]">h</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[325deg]">i</p>
                        <p className="left-0 top-0 origin-bottom absolute h-[50px] w-[20px] rotate-[350deg]">m</p>

                    </div>
                </div>
                <div className="border-solid border-primary-black absolute border-2 left-[48%] bottom-0 w-fit rounded">
                    <p className="bg-primary-black text-primary-white w-[6rem] text-center rounded px-4 py-8 text-[.8rem] relative right-[-8px] top-[-8px]">
                        4+ years of experience
                    </p>
                </div>

                <div className={`${londrina.className} text-[14.5vw] absolute bottom-[-10vw] left-[-6vw] text-primary-black/50 opacity-15 z-[0] whitespace-nowrap`}>
                    Ibrahim Olujide
                </div>

            </div>
        </div>
    )
}