import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import About from './Components/about/About';




function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
