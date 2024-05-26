import Link from "next/link";


export default function Nav(){


    return(
        <div className="hidden lg:flex gap-8  p-2 relative z-10 text-primary-white">
            <div>
                <Link href={'/'}>Home</Link>
            </div>
            <div>
                <Link href={'/'}>About me</Link>
            </div>
            <div>
                <Link href={'/'}>Projects</Link>
            </div>
            <div>
                <Link href={'/'}>CV</Link>
            </div>
        </div>
    )
}