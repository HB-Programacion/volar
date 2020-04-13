import React from "react";
import "./../aprendamos.css";
import "./../../../App.css";
import "./bienvenidoCuidador.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import startsLeftWhite from "./../../../images/stars-white-left.png";
import startsRighttWhite from "./../../../images/stars-white-right.png";
import iconoBienvenidaCuidador from "./../../../images/icon-bienvenida-cuidador.png";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import iconAreaHigiene from "./../../../images/icon-agua.png";
import iconAreaSocial from "./../../../images/icon-emocional.png";
import iconAreaRutina from "./../../../images/icon-rutina.png";
import iconAreaJuego from "./../../../images/icon-juego.png";
import iconAreaNutricion from "./../../../images/icon-nutricion.png";
import startsLeftWhiteMobile from "./../../../images/starts-white-mobile-left.png";
import startsRightWhiteMobile from "./../../../images/stars-white-mobile-right.png";

export const BienvenidoCuidador = () => {
  return (
    <div>
      <div className="box-title-cuidador show-desktop">
        <div className="box-row-1">
          <img
            src={startsLeftWhite}
            className="left-star-cuidador"
            alt="stars-left"
          />
          <img
            src={iconoBienvenidaCuidador}
            className="icon-bienvenida-cuidador"
            alt="stars-left"
          />
          <h1 className="title-cuidador">¡Hola!</h1>
          <img
            src={startsRighttWhite}
            className="right-star-cuidador"
            alt="stars-left"
          />
        </div>
        <div className="box-row-2">
          <p className="box-text">
            Hoy aprenderemos a desarrollar las habilidades de lenguaje de
            Cristina aprovechando los momentos de aseo.
          </p>
        </div>
      </div>
      <div className="box-title-cuidador hide-desktop">
        <div className="box-row-1">
          <img
            src={startsLeftWhiteMobile}
            className="left-star-cuidador"
            alt="stars-left"
          />
          <img
            src={iconoBienvenidaCuidador}
            className="icon-bienvenida-cuidador"
            alt="stars-left"
          />
          <img
            src={startsRightWhiteMobile}
            className="right-star-cuidador"
            alt="stars-left"
          />
        </div>
        <div className="box-row-2">
          <h1 className="box-saludo">¡Hola!</h1>
          <p className="box-text">
            Hoy aprenderemos a desarrollar las habilidades de lenguaje de
            Cristina aprovechando los momentos de aseo.
          </p>
        </div>
      </div>
      <p className="text-lila start-center">&#10022;</p>
      <p className="text-aguamarina style-text-center">
        Recuerda explicarle qué parte <br />
        de su cuerpo estás limpiando y contarle qué vas a hacer luego.
      </p>
      <p className="text-lila start-center">&#10022;</p>
      <div className="video-responsive margin-video">
        <iframe
          src="https://www.youtube.com/embed/3nvEJDc3Vic"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button className="btn-navy-blue text-white">
        <img src={arrowLeft} className="arrow-blue"></img>
        COMPARTIR
        <img src={arrowRight} className="arrow-blue"></img>
      </button>
      <p className="text-lila start-center">&#10022;</p>
      <p className="text-blue-volar style-text-center">
        ¡Tienes todo lo que se necesita para desarrollar <br /> el cerebro de
        tus hijos e hijas!
      </p>
      <div className="list-btn-areas show-desktop">
        <div className="btn-areas w-100">
          <div className="w-20">
            <Link to="/aprendamos/cuidador/higiene">
            <div className="area-higiene">
              <img
                src={iconAreaHigiene}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
            </div>
            </Link>
          </div>
          <div className="w-20">
            <div className="area-socioEmocional">
              <img
                src={iconAreaSocial}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-social">SOCIOEMOCIONAL</p>
            </div>
          </div>
          <div className="w-20">
            <div className="area-rutina">
              <img
                src={iconAreaRutina}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-rutina">RUTINA</p>
            </div>
          </div>
          <div className="w-20">
            <div className="area-juego">
              <img src={iconAreaJuego} className="icon-area" alt="stars-left" />
              <p className="text-area-juego">JUEGO</p>
            </div>
          </div>
          <div className="w-20">
            <div className="area-nutricion">
              <img
                src={iconAreaNutricion}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-nutricion">
                NUTRICIÓN <br /> Y FÍSICO
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="list-btn-areas hide-desktop">
        <div className="btn-areas w-100">
          <div className="w-50">
            <div className="area-higiene">
              <img
                src={iconAreaHigiene}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
            </div>
          </div>
          <div className="w-50">
            <div className="area-socioEmocional">
              <img
                src={iconAreaSocial}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-social">SOCIOEMOCIONAL</p>
            </div>
          </div>
        </div>
        <div className="btn-areas w-100">
          <div className="w-50">
            <div className="area-rutina">
              <img
                src={iconAreaRutina}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-rutina">RUTINA</p>
            </div>
          </div>
          <div className="w-50">
            <div className="area-juego">
              <img src={iconAreaJuego} className="icon-area" alt="stars-left" />
              <p className="text-area-juego">JUEGO</p>
            </div>
          </div>
        </div>
        <div className="btn-areas w-100">
           <div className="w-50">
            <div className="area-nutricion">
              <img
                src={iconAreaNutricion}
                className="icon-area"
                alt="stars-left"
              />
              <p className="text-area-nutricion">
                NUTRICIÓN <br /> Y FÍSICO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
