'use client'

import { Icon } from '@iconify/react';

import SectionH2 from "../sectionH2"
import Link from 'next/link';


export default function Contact() {


    return (
        <div className="mt-24" id='contact'>
            <SectionH2 text="Contact" />
            <div className='flex flex-col md:flex-row gap-4 lg:gap-12 mt-8'>
                <div className='flex flex-col items-center border-solid border-2 border-[var(--foreground-rgb)] rounded-lg p-4 gap-2 min-w-[25%]'>

                    <Icon icon="material-symbols:call" />
                    <h2 className='font-bold font-pirata text-[1.2rem]'>
                        Telephone
                    </h2>
                    <a href='tel:+2348115796668' className='whitespace-nowrap hover:underline font-garamond'>
                        +234 811 579 6668
                    </a>

                </div>
                <div className='flex flex-col items-center border-solid border-2 border-[var(--foreground-rgb)] bg-[var(--foreground-rgb)] text-[var(--reverse-color)] rounded-lg p-4 gap-2 min-w-[30%]'>
                    <Icon icon="material-symbols:mail" />
                    <h2 className='font-bold font-pirata text-[1.2rem]'>
                        Email
                    </h2>
                    <a href='mailto:ibrahimolujide@gmail.com' className='hover:underline font-garamond'>
                        ibrahimolujide@gmail.com
                    </a>

                </div>
                <div className='flex flex-col items-center border-solid border-2 border-[var(--foreground-rgb)] rounded-lg p-4 gap-2 min-w-[25%]'>

                <Icon icon="mdi:web" />
                    <h2 className='font-bold font-pirata text-[1.2rem]'>
                        Socials
                    </h2>
                    <p className='flex gap-4'>
                        <Link target='_blank' href={'https://github.com/bamidelee'} className='hover:scale-150 transition-all duration-300'><Icon icon="mdi:github"/></Link>
                        <Link target='_blank' href={'https://x.com/const_bamidele'} className='hover:scale-150 transition-all duration-300'><Icon icon="pajamas:twitter"  /></Link>
                        <Link target='_blank' href={'https://www.linkedin.com/in/ibrahim-olujide-67194223b/'} className='hover:scale-150 transition-all duration-300'><Icon icon="mdi:linkedin"/></Link>
                    </p>

                </div>
            </div>

        </div>
    )
}