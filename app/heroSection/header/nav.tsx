import Link from "next/link";
import cvDoc from '../../cv pro 1.pdf'



export default function Nav(){


    return(
        <div className="hidden lg:flex gap-8  p-2 relative z-10 text-[#f6f1e7] font-pirata text-[1.2rem]">
            <div className="group">
                <Link href={'/'}>Home</Link>
                <div className="w-0 h-[1px] bg-primary-white group-hover:w-[80%] mx-auto transition-all duration-300"></div>
            </div>
            <div className="group">
                <Link href={'#about'}>About me</Link>
                <div className="w-0 h-[1px] bg-primary-white group-hover:w-[80%] mx-auto transition-all duration-300"></div>
            </div>
            <div className="group">
                <Link href={'#projects'}>Projects</Link>
                <div className="w-0 h-[1px] bg-primary-white group-hover:w-[80%] mx-auto transition-all duration-300"></div>
            </div>
            <div className="group">
                <Link href={'#skills'}>Skills</Link>
                <div className="w-0 h-[1px] bg-primary-white group-hover:w-[80%] mx-auto transition-all duration-300"></div>
            </div>
            <div className="group">
                <Link href={cvDoc} target="_blank" rel="noopener noreferrer" download>CV</Link>
                <div className="w-0 h-[1px] bg-primary-white group-hover:w-[80%] mx-auto transition-all duration-300"></div>
            </div>
        </div>
    )
}