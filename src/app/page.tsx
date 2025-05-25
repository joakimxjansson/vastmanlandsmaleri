
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer"
import Contact from "./components/contact";
import FadeInSection from "@/app/components/faceinsection";

export default function Home() {
    return (
        <main className="bg-gray-200">
            <Navbar/>
            <FadeInSection>
                <Hero/>
            </FadeInSection>
            <FadeInSection>
                <About/>
            </FadeInSection>
            <FadeInSection>
                <Services/>
            </FadeInSection>
            <FadeInSection>
                <Contact/>
            </FadeInSection>
            <FadeInSection>
                <Footer/>
            </FadeInSection>
        </main>
);
}
