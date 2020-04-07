import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Nosotros from './components/nosotros/Nosotros';
import {Aprendamos} from './components/aprendamos/Aprendamos'

function App() {
  return (
    <>
    <div className="">
      <Menu/>
      </div>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nosotros" exact component={Nosotros} />
      <Route path="/aprendamos" exact component={Aprendamos} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
