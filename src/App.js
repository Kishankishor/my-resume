import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/home/Home";
import { About } from "./containers/about/About";
import { Resume } from "./containers/resume/Resume";
import { Skill } from "./containers/skills/Skill";
import { Portfolio } from "./containers/portfolio/Portfolio";
import { Navbar } from "./components/navbar/Navbar";
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
function App() {
  const handleInit = async (main) =>{
      await loadFull(main)
  }
  return (
    <div className="App">
      {/* particle.js */}
      <Particles id="particles" init={handleInit} />
      {/* navbar */}
      <Navbar/>

      {/* main pages content */}
     <div className="app__main-page-content">
     <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/career" element={<Resume />} />

        <Route path="/skill" element={<Skill />} />

        <Route path="/portfolio" element={<Portfolio />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     </div>

      
    </div>
  );
}

export default App;
