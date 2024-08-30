'use client'
import Header from "./header/header"
import Image from "next/image"
import background from '../../public/original-654f84ecad94a02a4a97e52a291dba45.jpg'
import { Kumar_One_Outline, Permanent_Marker, Lobster  } from "next/font/google"
import Link from "next/link"
import { Icon } from '@iconify/react';
import { Londrina_Outline } from "next/font/google"


const kumar = Kumar_One_Outline({ weight: '400', subsets: ["latin"] });
const londrina = Londrina_Outline({ weight: '400', subsets: ["latin"] })
const pm = Lobster({ weight: '400', subsets: ["latin"] })


export default function HeroSection() {

    return (
        <div className="h-[80vh] lg:h-[115vh] min-h-[40rem]  w-full  font-medium relative">
            <div  className="absolute w-[55%] overflow-hidden h-[100%] z-10  top-[-1rem] lg:top-[-3rem] right-[-4vw] ">
               <div style={{backgroundImage: `url(${background.src})`}} className="w-full h-full kenburns-top bg-cover bg-center"></div>
            </div>
            <div>

                <Header />
            </div>
            <div className="mt-[15vh] lg:mt-[18vh] ">
                <h1 className="font-normal text-[6.95vw] m-0 h-fit word">
                    Hi, I&apos;m
                </h1>
                <h1 className="font-bold text-[7.3vw] lg:text-[7.25vw] m-0 word relative z-20">
                    Ibrahim Oluji<span className={` text-primary-white relative`}>de</span>
                </h1>
                <p className="text-[4vw] lg:text-[2vw] text-flicker-in-glow">
                    Full-stack developer
                </p>
                <div className="mt-8 border-2 border-solid border-primary-black/50 w-fit rounded hover:bg-primary-black">
                    <Link href={'#contact'} className="bg-primary-black text-primary-white py-2 px-4  rounded relative right-[-5px] bottom-[10px] hover:bg-primary-white hover:text-primary-black hover:border-solid hover:border-2 hover:border-primary-black">Contact</Link>
                </div>
                <div className="absolute flex flex-col items-center right-[1rem] lg:right-[3rem] gap-4 lg:gap-8 text-primary-white text-1rem lg:text-[1.5rem] z-20 bottom-[30%] lg:bottom-[20%]">
                    <div className="w-[1px] h-[7rem] bg-primary-white"></div>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://github.com/bamidelee'}><Icon icon="mdi:github" /></Link>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://x.com/const_bamidele'}><Icon icon="pajamas:twitter" /></Link>
                    <Link target="_blank" className='hover:scale-150 transition-all duration-300' href={'https://www.linkedin.com/in/ibrahim-olujide-67194223b/'}><Icon icon="mdi:linkedin" /></Link>
                </div>
                <div>
                    <div className="absolute left-[30%] md:left-[35%] rotate  h-[100px] bottom-[20vh] font-mono">
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
                    <p className="bg-primary-black text-primary-white w-[6rem] text-center rounded px-4 py-8 text-[.8rem] relative right-[-8px] top-[-8px]">
                        4+ years of experience
                    </p>
                </div>

                <div className={`${pm.className} words text-[18vw] lg:text-[16vw] absolute bottom-[-15vw] left-[-4vw] text-primary-black/50 opacity-15 z-[0] whitespace-nowrap`}>
                    <span>I</span>
                    <span>b</span>
                    <span>r</span>
                    <span>a</span>
                    <span>h</span>
                    <span>i</span>
                    <span>m</span>
                   <span>  </span>
                    <span>O</span>
                    <span>l</span>
                    <span>u</span>
                    <span>j</span>
                    <span>i</span>
                    <span>d</span>
                    <span>e</span>
                </div>

            </div>
        </div>
    )
}