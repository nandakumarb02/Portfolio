import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import useReveal from "@/hooks/useReveal";

const Index = () => {
  useReveal(".reveal");

  return (
    <div className="min-h-screen bg-background">
      <div data-scroll-section>
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
