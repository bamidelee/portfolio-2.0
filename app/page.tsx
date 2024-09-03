import Image from "next/image";
import HeroSection from "./heroSection/heroSction";
import Projects from "./projects/project";
import About from "./about/about";
import Skills from "./skills/skils";
import Contact from "./contact/contact";
import Footer from "./footer";
import StickyBar from "./stickyBar";
import CarouselMarque from "./carouselMarque";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-4 lg:pb-12 px-[2vw] relative">
      <StickyBar/>
      <HeroSection/>
      <CarouselMarque/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
   
    </main>
  );
}
