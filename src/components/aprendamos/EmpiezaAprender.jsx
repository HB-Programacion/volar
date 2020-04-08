import React from "react";
import "./aprendamos.css";
import "./../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import starsLeft from "./../../images/starts-left-aprendamos.png";
import starsRight from "./../../images/stars-right-aprendamos.png";
import iconoCuidador from "./../../images/icon-cuidador.png";
import iconoAliado from "./../../images/icon-aliado.png";
import starsLeft2 from "../../images/starts-left-aprendamos2.png"
import starsRight2 from "../../images/starts-right-aprendamos2.png";
import starCenter from "../../images/start-light-blue.png"

export const EmpiezaAprender = () => {
  return (
    <div className="background-blue">
      <div className="box-title-aprendamos show-tittle">
        <img
          src={starsLeft}
          className="left-star-aprendamos"
          alt="stars-left"
        />
        <h1 className="title-aprendamos">
          ¡Empieza a aprender <br />
          con Volar!
        </h1>
        <img
          src={starsRight}
          className="right-star-aprendamos"
          alt="stars-left"
        />
      </div>
      <div className="box-title-aprendamos hide-tittle">
        <img src={starsLeft2} className="left-star" alt="stars-left"></img>
        <h1 className="title-aprendamos">
          ¡Empieza a aprender <br />
          con Volar!
        </h1>
        <img src={starsRight2} className="right-star" alt="stars-right"></img>
        <img src={starCenter} className="center-star" alt="stars-center"></img>
      </div>
      <div className="btn-box">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="btn-cuidador">
              <img class="icono" src={iconoCuidador} alt="icono cuidador" />
              <h2 className="letter-btn">
                CUIDADOR <br /> PRINCIPAL
              </h2>
              <div className="vertical-center">
                {" "}
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="btn-aliado">
              <img class="icono" src={iconoAliado} alt="icono cuidador" />
              <h2 className="letter-btn">
                ALIADO POR <br /> LA INFANCIA
              </h2>
              <div className="vertical-center">
                {" "}
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
