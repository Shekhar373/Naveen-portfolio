import About from "@/Components/Home/About";
import Hero from "@/Components/Home/Hero";
import Skills from "@/Components/Home/Skills";

export default function home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
