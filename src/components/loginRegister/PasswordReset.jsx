import React from "react";
import "./loginRegister.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const PasswordReset = () => {
  const [email, SetEmail]=React.useState('');
  const usuario = auth.currentUser;;
  const resetPasswordEmail = async ()=>{
      var actionCodeSettings = {
          // After password reset, the user will be give the ability to go back
          // to this page.
          url: 'http://localhost:3000/',
          handleCodeInApp: false
        };
      await auth.sendPasswordResetEmail(
          email, actionCodeSettings)
          .then(function() {
            // Password reset email sent.
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
          });
          alert("tu mensaje a sido enviado")
  }



  return (
      <div className="register-child">
          <h1 className="tittle-register-child">Olvidaste tu contraseña</h1>
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
            onChange={(e)=>SetEmail(e.target.value)}
            autoFocus
          />
            <button onClick={resetPasswordEmail}  className="btn-login text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              CAMBIAR CONTRASEÑA
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          <div className="box-text-a">
            <a className="text-a" href="/login">
              &lsaquo;--- Regresar a inicio de sesión
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
  );
};
