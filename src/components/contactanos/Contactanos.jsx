import React from 'react';
import './contactanos.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Contactanos = () => {
    return (
        <div className="container animated fadeIn">
          <div className="register-child">
            <div className="row">
              <h1 className="tittle-register-child">¡Contáctanos!</h1>
            </div>
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
    
              <Link to="/aprendamos/cuidador">
                <button className="btn-navy-blue text-white">
                  <img src={arrowLeft} className="arrow-blue"></img>
                  ENVIAR
                  <img src={arrowRight} className="arrow-blue"></img>
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
}
