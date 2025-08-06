'use client'

import { Icon } from '@iconify/react';


interface Props{
    icon: string
    text: string
}

export default function SkillCard({icon, text}: Props){



    return(
        <div className='flex flex-col items-center'>
            <Icon icon={icon}  className='text-[2rem] lg:text-[4rem]'/>
            <p className='font-pirata'>{text}</p>
        </div>
    )
}