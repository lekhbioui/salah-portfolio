import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import SectionReveal from "@/components/SectionReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white cursor-none">
      <CustomCursor />
      <Navigation />

      <main className="pt-20">
        <Hero />

        <section id="apropos">
          <SectionReveal>
            <About />
          </SectionReveal>
        </section>

        <section id="competences">
          <SectionReveal>
            <Skills />
          </SectionReveal>
        </section>

        <section id="education">
          <SectionReveal>
            <Education />
          </SectionReveal>
        </section>

        <section id="projets">
          <SectionReveal>
            <Projects />
          </SectionReveal>
        </section>

        <section id="contact">
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </section>
      </main>
    </div>
  );
};

export default Index;