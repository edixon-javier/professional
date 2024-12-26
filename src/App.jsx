import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import SocialIcons from "./components/sections/SocialIcons";
import Experience from "./components/sections/experience";

function App() {
  
  return (
    <div className="bg-gray-50 dark:bg-[#0A192F]  text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact/>
      </main>
      <Footer/>
      <SocialIcons/>
    </div>
  );
}

export default App;
