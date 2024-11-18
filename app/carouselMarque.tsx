
import Marquee from "react-fast-marquee";
import { Kumar_One_Outline, Permanent_Marker, Lobster } from "next/font/google"

const pm = Lobster({ weight: '400', subsets: ["latin"] })

export default function CarouselMarque() {


    return (
        <div className=" w-screen  ">
            <Marquee speed={100}>
                <div className={`${pm.className} w-full h-full words text-[4rem] md:text-[8rem] lg:text-[12rem] text-[var(--reverse-bg)] z-[0] whitespace-nowrap flex `}>
                    <div className= 'mx-8 lg:mx-16'>
                        <span>I</span>
                        <span>b</span>
                        <span>r</span>
                        <span>a</span>
                        <span>h</span>
                        <span>i</span>
                        <span>m</span>
                        <span>  </span>
                    </div>
                    <div className= 'mx-8 lg:mx-16'>
                        <span>O</span>
                        <span>l</span>
                        <span>u</span>
                        <span>j</span>
                        <span>i</span>
                        <span>d</span>
                        <span>e</span>
                    </div>
                    <div className= 'mx-8 lg:mx-16'>
                        <span>S</span>
                        <span>o</span>
                        <span>f</span>
                        <span>t</span>
                        <span>w</span>
                        <span>a</span>
                        <span>r</span>
                        <span>e</span>

                    </div>

                    <div className= 'mx-8 lg:mx-16'>
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
                </div>

            </Marquee>
        </div>
    )
}