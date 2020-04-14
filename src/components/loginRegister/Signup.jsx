import React from "react";
import "./loginRegister.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Signup = () => {
  return (
    <div className="container">
      <div className="register-child">
        <div className="row">
          <h1 className="tittle-register-child">¡Bienvenido!</h1>
        </div>
        <div className="list-login">
          <p className="letter-login">NOMBRE</p>
          <input
            className="input-register-space"
            type="text"
            placeholder="Email"
          />
          <p className="letter-login">APELLIDOS</p>
          <input
            className="input-register-space"
            type="text"
            placeholder="Email"
          />
          <p className="letter-login">CORREO ELECTRÓNICO</p>
          <input
            className="input-register-space"
            type="email"
            placeholder="Email"
          />
          <p className="letter-login">CONTRASEÑA</p>
          <input
            className="input-register-space"
            type="password"
            placeholder="Contraseña"
          />
           <p className="letter-login">REPETIR CONTRASEÑA</p>
          <input
            className="input-register-space"
            type="password"
            placeholder="Contraseña"
          />
          <Link to="/aprendamos/cuidador">
            <button className="btn-login text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              CREAR MI CUENTA
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          </Link>
          <div className="loginDivider">
            <span className="loginDivider-text">o</span>
          </div>
          <div className="btn-facebook-google">
            <Link to="/aprendamos/cuidador">
              <button className="btn-facebook text-white">
                Regístrate con Facebook
              </button>
            </Link>
            <Link to="/aprendamos/cuidador">
              <button className="btn-google text-white">
                Regístrate con Google
              </button>
            </Link>
          </div>
          <div className="box-text-a">
            <div className="box-register">
              <p>¿Ya tienes una cuenta?</p>
              <a className="text-a" href="/login">
                Inicia Sesión
              </a>
            </div>
          </div>
          <div className="box-text-a">
            <a className="text-a" href="/">
              Pruebe un consejo antes de crear una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
