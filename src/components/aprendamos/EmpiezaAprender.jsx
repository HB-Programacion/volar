import React from "react";
import "./aprendamos.css";
import "./../../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import iconoCuidador from "./../../images/icon-cuidador.png";
import iconoAliado from "./../../images/icon-aliado.png";
import starsLeftDesktop from "../../images/stars-left-desktop.svg";
import starsRightDesktop from "../../images/stars-right-desktop.svg";
import starsss from "../../images/stars-left.svg";
import { Helmet } from "react-helmet";

export const EmpiezaAprender = (props) => {
  return (
    <div className="background-blue animated fadeIn">
      {/* <div className="box-title-aprendamos show-tittle">
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
      </div> */}
     <Helmet>
        <title>Aprendamos - Volar</title>
        <meta
          name="description"
          content="Aprendamos"
        />
        <meta name="keywords" content="Volar,volar"></meta>
        <meta name="URL" content="https://volar.org.pe/aprendamos" />
        <meta name="author" content="volar.orge.pe" />
        <meta name="distribution" content="global" />
        <meta
          property="og:image"
          content="https://volar.org.pe/static/media/icon-cuidador.b9d2cd3d.png"
        />
        <meta property="og:url" content="https://volar.org.pe/aprendamos" />
        <meta property="og:type" content="https://volar.org.pe/aprendamos" />
        <meta property="og:title" content="Aprendamos - Volar" />
        <meta
          property="og:description"
          content="Aprendamos"
        />
        <meta />
        <meta name="twitter:title" content="Aprendamos - Volar" />
        <meta
          name="twitter:description"
          content="Aprendamos"
        />
        <meta
          name="twitter:image"
          content="https://volar.org.pe/static/media/icon-cuidador.b9d2cd3d.png"
        />
      </Helmet>

      <div
        id="tittle-nosotros"
        className="box-title-aprendamos animated fadeIn "
      >
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
          ¡Empieza a aprender <br />
          con Volar!
        </h1>
        <img
          src={starsss}
          className="right-star-empieza heartbeat"
          alt="stars-right"
        ></img>
      </div>

      <div className="btn-box">
        <div className="row ml-0 mr-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            {props.firebaseUser !== null ? (
              localStorage.getItem("idChildLogueadoActive") !== null ? (
                <Link
                  to={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}`}
                  className="link"
                >
                  <div className="btn-cuidador">
                    <img
                      className="icono heartbeat"
                      src={iconoCuidador}
                      alt="icono cuidador"
                    />
                    <h2 className="letter-btn">CUIDADOR PRINCIPAL</h2>
                    <div className="vertical-center">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to="/registro-niño" className="link">
                  <div className="btn-cuidador">
                    <img
                      className="icono heartbeat"
                      src={iconoCuidador}
                      alt="icono cuidador"
                    />
                    <h2 className="letter-btn">CUIDADOR PRINCIPAL</h2>
                    <div className="vertical-center">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              )
            ) : (
              <Link to="/aprendamos/cuidador-principal" className="link">
                <div className="btn-cuidador">
                  <img
                    className="icono heartbeat"
                    src={iconoCuidador}
                    alt="icono cuidador"
                  />
                  <h2 className="letter-btn">CUIDADOR PRINCIPAL</h2>
                  <div className="vertical-center">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <Link to="/aprendamos/aliado" className="link">
              <div className="btn-aliado">
                <img
                  className="icono heartbeat"
                  src={iconoAliado}
                  alt="icono cuidador"
                />
                <h2 className="letter-btn">ALIADO POR LA INFANCIA</h2>
                <div className="vertical-center">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
