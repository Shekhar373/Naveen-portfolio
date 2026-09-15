import Footer from "@/Components/Common/Footer";
import About from "@/Components/Home/About";
import Hero from "@/Components/Home/Hero";
import Projects from "@/Components/Home/Projects";
import Skills from "@/Components/Home/Skills";

export default function home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
