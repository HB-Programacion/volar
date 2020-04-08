import React from "react";
import "./aprendamos.css";
import "./../../App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Aprendamos = () => {
  return (
    <div className="padding-top background" id="aprendamos-page">
      <div className="column">
        <div className="margin-top-bottom">
          <div className="row justify-content-center h-100">
            <Link
              to="/aprendamos/empieza-a-aprender"
              className="btn-light-blue text-white  m-3" 
            >
              <img src={arrowLeft} className="arrow-blue" alt="flecha izquierda azul"></img>
              Prueba un consejo antes <br /> de crear una cuenta
              <img src={arrowRight} className="arrow-blue" alt="flecha derecha  azul"></img>
            </Link>
          </div>
          <div className="row justify-content-center h-100">
            <Link
              to="/aprendamos/empieza-a-aprender"
              className="btn-light-blue text-white  m-3"
            >
              <img src={arrowLeft} className="arrow-blue"></img>
              Iniciar Sesión
              <img src={arrowRight} className="arrow-blue"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
