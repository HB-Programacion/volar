import React from "react";
import "./contactanos.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Contactanos2 = () => {
  return (
    <div className="container mt-4  animated fadeIn ">
      <div className="register-child contactanos-box">
        <h1 className="title tittle-register-child text-contactanos tracking-in-expand-fwd-top">
          ¡Contáctanos!
        </h1>

        <form method="POST"  action="./send.php">
          <div className="list-register">
            <p className="letter-register">NOMBRE</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Nombre"
              name="name"
              autoFocus
            />
            <p className="letter-register">CORREO ELECTRÓNICO</p>
            <input
              className="input-register-space"
              type="email"
              placeholder="Email"
              name="email"
            />
            <p className="letter-register">MENSAJE</p>
            <textarea
              className="input-register-space textarea"
              type="text"
              placeholder="Escribe tu mensaje"
              name="message"
            />

            <div className="caja-boton-contactanos">
              <button
                className="btn-navy-blue text-white wobble-hor-bottom boton-guardar-nino out-none-button"
                type="submit"
              >
                <img src={arrowLeft} className="arrow-blue"></img>
                Enviar
                <img src={arrowRight} className="arrow-blue"></img>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
