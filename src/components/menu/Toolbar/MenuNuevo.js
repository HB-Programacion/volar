import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./MenuNuevo.css";
import DrawerToggleButton from"../SideDrawer/DrawerToggleButton"
import logo from '../../../images/logo-volar.svg';
import candado from '../../../images/candado-login.svg';


const MenuMobile =(props) => {
    return (
<div>
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <DrawerToggleButton/>
            </div>
            <div className="toolbar-logo"><a href='/'>LOGO</a></div>
            <div className="spacer"/>
            <div className="tollbar-navigation-items">
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <li><a href='/'>Nosotros</a></li>
                    <li><a href='/'>Aprendamos</a></li>
                    <li><a href='/'>Contáctanos</a></li>
                    <li><a href='/'>Iniciar sesión</a> </li>
                </ul>
            </div>
        </nav>
    </header>
</div>
    )
}
export default MenuMobile