import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="">
      <Menu/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
