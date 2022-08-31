import "./App.css";
import Contact from "./components/contact/contact.component";
import Hero from "./components/hero-section/hero.component";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/propjects.component";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
//refrences
//https://morioh.com/p/175ecf5c252d
export default App;
