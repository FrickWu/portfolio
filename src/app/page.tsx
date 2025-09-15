import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-black dark:via-slate-900 dark:to-blue-950">
      <Navbar />
      <div className="pt-16">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
