import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="px-10 pt-2 h-screen bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
