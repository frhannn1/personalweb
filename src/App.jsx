import Experience from "./components/Experience";
import Header from "./components/Header"; // Pastikan huruf H besar sesuai nama file
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificattions from "./components/Certificattions";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen">
    
      <Header />
      <main>
      <Profile/> 
      <Experience />
      <Skills />
      <Projects />
      <Certificattions />
      <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;