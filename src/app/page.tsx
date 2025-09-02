import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
