import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';




function App() {
  return (
    <>
      <Header />
      <div className='main'> 
        <Home />
      </div>  
    </>
  );
}

export default App;
