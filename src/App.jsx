import { Footer, Navbar } from "./components/layout";
import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  SocialIcons,
} from "./components/sections";
import "./i18n";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-[#0A192F]  text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialIcons />
    </div>
  );
}

export default App;
