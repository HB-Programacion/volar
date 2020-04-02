import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <>
    <div className="">
      <Menu/>
      {/* <Home/> */}
      
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/nosotros" exact component={Nosotros} />
      <Footer/>
    </>
  );
}

export default App;
