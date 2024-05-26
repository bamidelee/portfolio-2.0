import Image from "next/image";
import HeroSection from "./heroSection/heroSction";
import Projects from "./projects/project";
import About from "./about/about";
import Skills from "./skills/skils";
import Contact from "./contact/contact";
import Footer from "./footer";
import StickyBar from "./stickyBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4 lg:py-12 px-[4vw] bg-primary-white relative">
      <StickyBar/>
      <HeroSection/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
   
    </main>
  );
}
