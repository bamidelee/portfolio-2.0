'use client'

import { Icon } from '@iconify/react';

import SectionH2 from "../sectionH2"
import Link from 'next/link';


export default function Contact() {


    return (
        <div className="mt-24" id='contact'>
            <SectionH2 text="Contact" />
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                <div className='flex flex-col items-center border-solid border-2 border-primary-black rounded-lg p-4 gap-2 min-w-[25%]'>

                    <Icon icon="material-symbols:call" />
                    <h2 className='font-bold'>
                        Telephone
                    </h2>
                    <a href='tel:+2348115796668' className='whitespace-nowrap hover:underline'>
                        +234 811 579 6668
                    </a>

                </div>
                <div className='flex flex-col items-center border-solid border-2 border-primary-black bg-primary-black text-primary-white rounded-lg p-4 gap-2 min-w-[30%]'>
                    <Icon icon="material-symbols:mail" />
                    <h2 className='font-bold'>
                        Email
                    </h2>
                    <a href='mailto:ibrahimolujide@gmail.com' className='hover:underline'>
                        ibrahimolujide@gmail.com
                    </a>

                </div>
                <div className='flex flex-col items-center border-solid border-2 border-primary-black rounded-lg p-4 gap-2 min-w-[25%]'>

                <Icon icon="mdi:web" />
                    <h2 className='font-bold'>
                        Socials
                    </h2>
                    <p className='flex gap-4'>
                        <Link href={'https://github.com/bamidelee'} className='hover:scale-150 transition-all duration-300'><Icon icon="mdi:github"/></Link>
                        <Link href={'https://x.com/const_bamidele'} className='hover:scale-150 transition-all duration-300'><Icon icon="pajamas:twitter"  /></Link>
                        <Link href={'https://www.linkedin.com/in/olujide-ibrahim-67194223b/'} className='hover:scale-150 transition-all duration-300'><Icon icon="mdi:linkedin"/></Link>
                    </p>

                </div>
            </div>

        </div>
    )
}