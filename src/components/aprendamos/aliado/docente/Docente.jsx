import React from "react";

import "./docente.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import material from "../../../../images/docente/material-educativo.svg";
import recursos from "../../../../images/docente/recursos-extras.svg";

import starsLeftDesktop from "../../../../images/stars-left-desktop.svg";
import starsRightDesktop from "../../../../images/stars-right-desktop.svg";
import starsss from "../../../../images/stars-left.svg";

import Compartir from "../compartir/Compartir";

const Docente = () => {
  return (
    <div className="background-lila animated fadeIn">
      <div id="tittle-nosotros" className="box-title-docente animated fadeIn ">
        <figure className="stars-group">
          <img
            src={starsLeftDesktop}
            className="stars-left-desktop heartbeat"
          ></img>
          <img
            src={starsRightDesktop}
            className="stars-right-desktop heartbeat"
          ></img>
        </figure>
        <img
          src={starsss}
          className="left-star-empieza heartbeat"
          alt="stars-left"
        ></img>
        <h1 className="title title-aprendamos tracking-in-expand-fwd-top">
          ¡Bienvenido! <br />
          Aliado por la infancia
        </h1>
        <img
          src={starsss}
          className="right-star-empieza heartbeat"
          alt="stars-right"
        ></img>
      </div>

      <div className="box-btn-docente">
        <div className="row ml-0 mr-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Link
              to="/aprendamos/aliado/docente/material-educativo"
              className="link"
            >
              <div className="btn-material">
                <img
                  className="icono-docente heartbeat"
                  src={material}
                  alt="icono aliado"
                />
                <h2 className="ml-2">Material educativo</h2>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="btn-recursos">
              <img
                className="icono-docente heartbeat"
                src={recursos}
                alt="icono aliado"
              />
              <h2 className="ml-2">Recursos extras</h2>
            </div>
          </div>
        </div>
      </div>
      <Compartir />
    </div>
  );
};

export default Docente;
