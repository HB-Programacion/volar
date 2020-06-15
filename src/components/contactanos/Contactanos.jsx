import React from 'react';
import './contactanos.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Contactanos = () => {
    return (
        <div className="container animated fadeIn ">
          <div className="register-child contactanos-box">
        
              <h1 className="title tittle-register-child text-contactanos">¡Contáctanos!</h1>
    
            <div className="list-register">
              <p className="letter-register">NOMBRE</p>
              <input
                className="input-register-space"
                type="text"
                placeholder="Nombre"
              />
              <p className="letter-register">CORREO ELECTRÓNICO</p>
              <input
                className="input-register-space"
                type="email"
                placeholder="Email"
              />
              <p className="letter-register">MENSAJE</p>
              <textarea
                className="input-register-space textarea"
                type="text"
                placeholder="Escribe tu mensaje"
              />
    
                <div className="caja-boton-contactanos">
                <Link to="/" className="btn-navy-blue text-white wobble-hor-bottom">
                  <img src={arrowLeft} className="arrow-blue"></img>
                  ENVIAR
                  <img src={arrowRight} className="arrow-blue"></img>
                </Link>
                </div>
            </div>
          </div>
        </div>
      );
}
