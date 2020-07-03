import React from "react";

import "./Recursos.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import inicial from "../../../../../images/docente/inicial.svg";
import primaria from "../../../../../images/docente/primaria.svg";
import secundaria from "../../../../../images/docente/secundaria.svg";

import starsLeftDesktop from "../../../../../images/stars-left-desktop.svg";
import starsRightDesktop from "../../../../../images/stars-right-desktop.svg";
import starsss from "../../../../../images/stars-left.svg";

import Compartir from "../../compartir/Compartir";

const Recursos = () => {
  return (
    <div className="background-blanco animated fadeIn">
      <div id="tittle-nosotros" className="box-title-recursos animated fadeIn ">
        <figure className="stars-group">
          <img
            src={starsLeftDesktop}
            className="stars-left-desktop heartbeat d-none"
          ></img>
          <img
            src={starsRightDesktop}
            className="stars-right-desktop heartbeat d-none"
          ></img>
        </figure>
        <img
          src={starsss}
          className="left-star-empieza heartbeat d-none"
          alt="stars-left"
        ></img>
        <h1 className="title title-recursos tracking-in-expand-fwd-top">
          ¡Bienvenido! <br />
          Conoce los recursos de nuestros socios 
        </h1>
        <img
          src={starsss}
          className="right-star-empieza heartbeat d-none"
          alt="stars-right"
        ></img>
      </div>

      <div className="box-btn-recursos">
        <div className="row ml-0 mr-0">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Link to="/aprendamos/aliado/docente/recursos-extras/inicial" className="btn-recursos-socios">
              <img
                className="icono-docente heartbeat"
                src={inicial}
                alt="icono aliado"
              />
              <h2 className="title-recursos-socios">Inicial</h2>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Link to="/aprendamos/aliado/docente/recursos-extras/primaria" className="btn-recursos-socios">
              <img
                className="icono-docente heartbeat"
                src={primaria}
                alt="icono aliado"
              />
              <h2 className="title-recursos-socios">Primaria</h2>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Link to="/aprendamos/aliado/docente/recursos-extras/secundaria" className="btn-recursos-socios">
              <img
                className="icono-docente heartbeat"
                src={secundaria}
                alt="icono aliado"
              />
              <h2 className="title-recursos-socios">Secundaria</h2>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
            <Link to="/aprendamos/aliado/docente/recursos-extras/cuentacuentos" className="btn-recursos-socios">
              <img
                className="icono-docente heartbeat"
                src={inicial}
                alt="icono aliado"
              />
              <h2 className="title-recursos-socios">Cuentacuentos volar</h2>
            </Link>
          </div>
        </div>
      </div>
      <Compartir />
    </div>
  );
};

export default Recursos;
