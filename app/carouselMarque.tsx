
import Marquee from "react-fast-marquee";
import { Kumar_One_Outline, Permanent_Marker, Lobster } from "next/font/google"

const pm = Lobster({ weight: '400', subsets: ["latin"] })

export default function CarouselMarque(){


    return(
        <div className=" w-screen">
        <Marquee>
            <div className={`${pm.className} w-full h-full words text-[18vw] lg:text-[16vw] text-[var(--reverse-bg)] z-[0] whitespace-nowrap`}>
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
            <div className={`${pm.className} words text-[18vw] mx-24 lg:text-[16vw]  text-[var(--reverse-bg)]  z-[0] whitespace-nowrap`}>
                <span>F</span>
                <span>u</span>
                <span>l</span>
                <span>l</span>
                <span>-</span>
                <span>s</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
        
            </div>
            <div className={`${pm.className} words text-[18vw] mx-8 lg:text-[16vw] mx-16  text-[var(--reverse-bg)] z-[0] whitespace-nowrap`}>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
        
        
            </div>
        </Marquee>
    </div>
    )
}