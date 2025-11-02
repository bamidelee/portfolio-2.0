import HeroSection from "./heroSection/heroSction";
import Projects from "./projects/project";
import About from "./about/about";
import Skills from "./skills/skils";
import Contact from "./contact/contact";
import Footer from "./footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );
}
