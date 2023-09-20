import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  return (
    <div className="App">
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Education/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>
        <div id="go-top-button" onClick={scrollToTop}><i class="fa-solid fa-circle-up"></i></div>
    </div>
  );
}

export default App;
