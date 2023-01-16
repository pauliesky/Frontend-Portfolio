import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';




function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
