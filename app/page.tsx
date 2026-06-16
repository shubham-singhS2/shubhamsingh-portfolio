import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <LatestArticles />
      <Contact />
      <Footer />
    </>
  );
}