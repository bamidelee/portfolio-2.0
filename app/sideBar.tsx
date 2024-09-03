'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import cvDoc from './cv.docx'


export default function SideBar() {
    const [sideBar, setSideBar] = useState(false)


    const handleScroll = () => {
        setSideBar(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="lg:hidden" onBlur={({ target }: any) => {
            setTimeout(() => setSideBar(false), 50)
        }}>
            <div>
                <button className={`menu ${sideBar && 'opened'}`} onClick={({ target }: any) => {
                    setSideBar(!sideBar);
                }} aria-label="Main Menu">
                    <svg width="2rem" height="2rem" viewBox="0 0 100 100">
                        <path className={`line line1`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className={`line line2`} d="M 20,50 H 80" />
                        <path className={`line line3`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>

            <nav className={`fixed  ${sideBar ? 'right-0 ' : 'right-[-200px] '} backdrop-blur  top-16 w-[200px] p-4  duration-300 transition-all overflow-hidden backdrop-brightness-50  bg-primary-black/30 fixed z-50 flex text-primary-white  flex-col gap-4  items-center col-span-2 justify-self-center font-serif   `}>
                <div className="group">
                    <Link href='/'>Home</Link>
                    <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-300">

                    </div>
                </div>
                <div className="group">
                    <Link href='/#about'>About me</Link>
                    <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-300">

                    </div>
                </div>

                <div className="group">
                    <Link href='/#projects'>Projects</Link>
                    <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-300">

                    </div>
                </div>
                <div className="/#skills">
                    <Link href='/#skills'>Skills</Link>
                    <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-300">

                    </div>
                </div>
                <div className="group">
                    <Link href={cvDoc} target="_blank" rel="noopener noreferrer" download>Cv</Link>
                    <div className="w-0 h-1 bg-primary-blue group-hover:w-full transition-all duration-300">

                    </div>
                </div>
            </nav>
        </div>
    )
}