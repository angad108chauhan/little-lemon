import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main.js';
import Menu from './components/Menu';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;