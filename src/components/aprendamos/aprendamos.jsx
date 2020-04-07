import React from "react";
import "./aprendamos.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const Aprendamos = () => {
  return (
    <div className="padding-top" id="aprendamos-page">
      <div className="column">
        <div className="row justify-content-center h-100">
          <Link
            to="/aprendamos/empieza-a-aprender"
            className="btn-light-blue text-white  m-2"
          >
            Prueba un consejo antes <br /> de crear una cuenta
          </Link>
        </div>
        <div className="row justify-content-center h-100">
          <Link
            to="/aprendamos/empieza-a-aprender"
            className="btn-light-blue text-white  m-2"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
