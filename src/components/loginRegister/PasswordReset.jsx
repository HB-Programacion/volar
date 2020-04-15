import React from "react";
import "./loginRegister.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const PasswordReset = () => {
  return (
    <div className="container">
      <div className="register-child">
        <div className="row">
          <h1 className="tittle-register-child">Restablecer la contraseña</h1>
        </div>
        <div className="list-login">
          <div className="box-text-a">
            <p style={{ textAlign: "center" }}>
              Le enviaremos un enlace por correo electrónico para restablecer su
              contraseña
            </p>
          </div>
          <p className="letter-login">CORREO ELECTRÓNICO</p>
          <input
            className="input-register-space"
            type="email"
            placeholder="Email"
          />
          <Link to="/aprendamos/cuidador">
            <button className="btn-login text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              CAMBIAR CONTRASEÑA
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          </Link>
          <div className="box-text-a">
            <a className="text-a" href="login">
              &lsaquo;Regresar a inicio de sesión
            </a>
          </div>
          <div className="box-text-a">
            <div className="box-register">
              <p>¿No tienes una cuenta?</p>
              <a className="text-a" href="/signup">
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
