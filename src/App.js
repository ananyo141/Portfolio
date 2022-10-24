import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="px-10 pt-2 h-full bg-gradient-to-br from-[#0a192f] to-purple-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
