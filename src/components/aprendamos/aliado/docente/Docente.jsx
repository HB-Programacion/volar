import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import iconoCuidador from "../../../../images/icon-cuidador.png";
import iconoAliado from "../../../../images/icon-aliado.png";

import starsLeftDesktop from "../../../../images/stars-left-desktop.svg";
import starsRightDesktop from "../../../../images/stars-right-desktop.svg";
import starsss from "../../../../images/stars-left.svg"

const Docente = () => {
    return (
        <div className="background-blue animated fadeIn">
    
        <div id="tittle-nosotros" className="box-title-aprendamos animated fadeIn ">
              <figure className="stars-group">
                  <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img>
                  <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img>
              </figure>
                  <img src={starsss} className="left-star-empieza heartbeat" alt="stars-left"></img>
                  <h1 className="title title-aprendamos tracking-in-expand-fwd-top">¡Bienvenido! <br/>Aliado por la infancia</h1>
                  <img src={starsss} className="right-star-empieza heartbeat" alt="stars-right"></img>
        </div>
  
        <div className="btn-box">
          <div className="row ml-0 mr-0">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Link to="/aprendamos/cuidador-principal"className="link" >
              <div className="btn-cuidador">
                <img className="icono heartbeat" src={iconoCuidador} alt="icono cuidador" />
                <h2 className="letter-btn">
                  CUIDADOR PRINCIPAL
                </h2>
                <div className="vertical-center">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="btn-aliado">
                <img className="icono heartbeat" src={iconoAliado} alt="icono cuidador" />
                <h2 className="letter-btn">
                  ALIADO POR LA INFANCIA
                </h2>
                <div className="vertical-center">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Docente