import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Carrousel from './components/carrousel/Carrousel';
import Content from './components/content/Content';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Carrousel></Carrousel>
      <Content></Content>
    </div>
  );
}

export default App;