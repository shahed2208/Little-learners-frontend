import './App.css';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Academics from '../src/Pages/Academics'; 
import Student from '../src/Pages/Student'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Student" element={<Student />} />
         
        </Routes>
      </Router>
    
    </>
  
  );

}

export default App;
