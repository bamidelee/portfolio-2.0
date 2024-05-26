'use client'

import Link from "next/link"
import Image from "next/image"
import SideBar from "./sideBar";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";



export default function StickyBar() {

    
    const [showBar, setShowBar] = useState(false)

    let scrollYPosition = 0;
    let newScrollPos = 0
    

    const handleScroll = () => {
        const newScrollYPosition = window.scrollY;
        newScrollPos = newScrollYPosition

        if(scrollYPosition > newScrollPos && newScrollPos > 200){
            setShowBar(true)
           
        }

        else{
            setShowBar(false)
           
        }

        scrollYPosition = newScrollPos
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className={`fixed ${showBar ? 'top-0' : 'top-[-6rem]'} z-50 w-full mx-auto px:0 left-0 md:px-4 lg:px-16 transition-all duration-300 backdrop-brightness-50 backdrop-blur bg-primary-black/30 `}>
            <div className={`col-span-3 h-16 grid grid-cols-2  gap-4 items-center bg-secondary-blue p-2 px-4 md:p-4 lg:px-16 md:pb-16 text-primary-white`} >
                <h2>
                   Ibrahim
                </h2>
                <nav className="text-primary-white hidden lg:flex flex-row gap-8 items-center justify-self-end font-serif">
                    <div className="group">
                        <Link href='/'>Home</Link>
                        <div className="w-0 h-1 bg-primary-white group-hover:w-full transition-all duration-300">
                        </div>
                    </div>
                    <div className="group">
                        <Link href='/#about'>About me</Link>
                        <div className="w-0 h-1 bg-primary-white group-hover:w-full transition-all duration-300">
                        </div>
                    </div>

                    <div className="group">
                        <Link href='/#projects'>Projects</Link>
                        <div className="w-0 h-1 bg-primary-white group-hover:w-full transition-all duration-300">
                        </div>
                    </div>

                    <div className="group">
                        <Link href='/#skills'>Skills</Link>
                        <div className="w-0 h-1 bg-primary-white group-hover:w-full transition-all duration-300">
                        </div>
                    </div>
                    <div className="group">
                        <Link href='/#team'>CV</Link>
                        <div className="w-0 h-1 bg-primary-white group-hover:w-full transition-all duration-300">
                        </div>
                    </div>
                </nav>
                <div className="justify-self-end h-fit flex flex-row text-primary-white items-center">
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}