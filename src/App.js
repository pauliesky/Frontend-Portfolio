import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';
import Qualifications from './Components/qualifications/Qualifications';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';




function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
