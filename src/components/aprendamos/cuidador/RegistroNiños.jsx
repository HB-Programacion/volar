import React from "react";
import "./registroNiños.css";
import "../aprendamos.css";
import "../../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";

export const RegistroNiños = () => {
  return (
    <div className="container animated fadeIn box-registro-ninos">
      <div className="register-child">
        <div className="row">
          <h1 className="title tittle-register-child">¡Bienvenido!</h1>
        </div>
        <div className="row">
          <h2 className="subtittle-register-child">Cuidador Principal</h2>
        </div>
        <div className="list-register">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">NOMBRE DEL NIÑO/A</p>
              <input
                className="input-register-space"
                type="text"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">FECHA DE NACIMIENTO</p>
              <input className="input-register-space" type="date"required />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">COLABORADOR BRECA</p>

              <label className="style-radio">
                <input type="radio" name="breca" value="SI" required />
                <span className="radio"></span>
                <span className="text">SI</span>
              </label>

              <label className="style-radio">
                <input type="radio" name="breca" value="NO" required />
                <span className="radio"></span>
                <span className="text">NO</span>
              </label>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">CÓDIGO COLABORADOR BRECA</p>
              <input
                className="input-register-space"
                type="text"
                placeholder="Código"
              />
            </div>
          </div>

              <div className="caja-boton-contactanos">
                <Link to="/aprendamos/cuidador" className="btn-navy-blue text-white mt-3 mb-3 wobble-hor-bottom">
                  <img src={arrowLeft} className="arrow-blue"></img>
                  ENVIAR
                  <img src={arrowRight} className="arrow-blue"></img>
                </Link>
                </div>


       
        </div>
      </div>
    </div>
  );
};
