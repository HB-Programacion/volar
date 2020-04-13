import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./menu.css"
import logo from '../../images/logo-volar.svg';
import candado from '../../images/candado-login.svg';
import "../../App.css"

const Menu = () => { 

    return (
<>
    <nav className=" navbar navbar-expand-lg navbar-light bg-white position-fixed w-100 style">
        <Link to="/" className="navbar-brand" href="#"><img src={logo} className="logo"></img> </Link>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link text-desktop-aquamarine" href="#">Inicio <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/nosotros" className="nav-link text-desktop-aquamarine" href="#">Nosotros</Link>
                </li>
                <li className="nav-item">
                    <Link to="/aprendamos" className="nav-link text-desktop-aquamarine" href="#">Aprendamos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactanos" className="nav-link text-desktop-aquamarine" href="#">Contáctanos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactanos" className="nav-link font-color-orange" href="#">  <img src={candado}/> Iniciar sesión </Link>
                </li>
            </ul>
        </div>
    </nav>



</>
)}
export default Menu;