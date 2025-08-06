'use client'
import Header from "./header/header"
import Image from "next/image"
import background from '../../public/Lucid_Origin_medieval_portrait_of_a_computer_programmer_with_a_2.jpg'
import Link from "next/link"
import { Icon } from '@iconify/react';







export default function HeroSection() {

    return (
        <div className="h-[80vh] lg:h-[115vh] min-h-[40rem]  w-full  font-medium relative font-garamond">
            <div className="absolute w-[55%] overflow-hidden h-[100%] z-10  top-[-1rem] lg:top-[-3rem] right-[-4vw] ">
                <div style={{ backgroundImage: `url(${background.src})` }} className="w-full h-full kenburns-top bg-cover bg-center"></div>
            </div>
            <div>

                <Header />
            </div>
            <div className="mt-[15vh] lg:mt-[18vh] ">
                <h1 className="font-normal text-[6.95vw] m-0 h-fit word font-pirata">
                    Hi, I&apos;m
                </h1>
                <h1 className="font-bold text-[9.5vw] lg:text-[9.4vw] m-0 word relative z-20 font-pirata">
                    Ibrahim Oluji<span className={` text-[#f6f1e7] relative`}>de</span>
                </h1>
                <p className="text-[4vw] lg:text-[2vw] text-flicker-in-glow font-garamond">
                   Software developer
                </p>
                <div className="mt-8 border-2 border-solid border-[var(--reverse-bg)] w-fit rounded hover:bg-[var(--reverse-bg)]">
                    <Link href={'#contact'} className="bg-[var(--reverse-bg)]  text-[var(--reverse-color)] py-2 px-4  rounded relative right-[-5px] bottom-[10px] hover:bg-[var(--background-start-rgb)] hover:text-[var(--foreground-rgb)] hover:border-solid hover:border-2 hover:border-[var(--foreground-rgb)]">Contact</Link>
                </div>
                <div className="absolute flex flex-col items-center right-[1rem] lg:right-[3rem] gap-4 lg:gap-8 text-primary-white text-1rem lg:text-[1.5rem] z-20 bottom-[30%] lg:bottom-[20%]">
                    <div className="w-[1px] h-[7rem] bg-primary-white"></div>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://github.com/bamidelee'}><Icon icon="mdi:github" /></Link>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://x.com/const_bamidele'}><Icon icon="pajamas:twitter" /></Link>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://www.linkedin.com/in/ibrahim-olujide-67194223b/'}><Icon icon="mdi:linkedin" /></Link>
                </div>
                <div>
                    <div className="absolute left-[30%] md:left-[35%]  h-[100px] bottom-[20vh] font-mono rotate">
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
                <div className="border-solid border-primary-black absolute border-2 left-[45%] z-20 lg:left-[48%] bottom-0 w-fit rounded">
                    <p className="bg-[var(--reverse-bg)] text-[var(--reverse-color)] w-[6rem] text-center rounded px-4 py-8 text-[.8rem] relative right-[-8px] top-[-8px]">
                        4+ years of experience
                    </p>
                </div>

               

            </div>
        </div>
    )
}