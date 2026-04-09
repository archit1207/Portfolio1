import BackgroundSVG from "../components/BackgroundSVG";
import GlowBlobs from "../components/GlowBlobs";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import CoreCompetencies from "../components/CoreCompetencies";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="page-shell">
      <BackgroundSVG />
      <GlowBlobs />
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <CoreCompetencies />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}