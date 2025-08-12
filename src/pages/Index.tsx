
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { useEffect, useState } from "react";

const Index = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Add page load animation
    setHasLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.15),transparent_70%)]"></div>
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
  
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
