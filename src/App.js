import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import './App.css';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Nosotros from './components/nosotros/Nosotros';
import {Aprendamos} from './components/aprendamos/Aprendamos';
import {EmpiezaAprender} from './components/aprendamos/EmpiezaAprender';
import {RegistroNiños} from './components/aprendamos/cuidador/RegistroNiños';
import {BienvenidoCuidador} from './components/aprendamos/cuidador/BienvenidoCuidador'
import  {Higiene} from './components/aprendamos/cuidador/areas/Higiene'

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
      <Route path="/aprendamos/empieza-a-aprender" exact component={EmpiezaAprender} />
      <Route path="/aprendamos/cuidador/registro-niños" exact component={RegistroNiños} />
      <Route path="/aprendamos/cuidador" exact component={BienvenidoCuidador} />
      <Route path="/aprendamos/cuidador/higiene" exact component={Higiene} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
