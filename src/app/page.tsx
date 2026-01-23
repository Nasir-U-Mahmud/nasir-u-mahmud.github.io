import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative bg-[var(--background)] min-h-screen">
            <Navigation />

            <div id="home" className="py-24 md:py-32">
                <Hero />
            </div>

            <div id="about" className="py-24 md:py-32">
                <About />
            </div>

            <div id="services" className="py-24 md:py-32">
                <Services />
            </div>

            <div id="projects" className="py-24 md:py-32">
                <Projects />
            </div>

            <div id="experience" className="py-24 md:py-32">
                <Experience />
            </div>

            <div className="py-24 md:py-32">
                <Skills />
            </div>

            <div className="py-24 md:py-32">
                <Education />
            </div>

            <div className="py-24 md:py-32">
                <Testimonials />
            </div>

            <div id="contact" className="py-24 md:py-32">
                <Contact />
            </div>

            <Footer />
        </main>
    );
}
