import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from '../../images/logo-volar.svg';

const Menu = () => { 

    return (
<>
    <nav className=" navbar navbar-expand-lg navbar-light bg-white position-fixed w-100">
        <a className="navbar-brand" href="#"><img src={logo} className="logo"></img> </a>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Aprendamos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contáctanos</a>
                </li>
            </ul>
        </div>
    </nav>
</>
)}
export default Menu;