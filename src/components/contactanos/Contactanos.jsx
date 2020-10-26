import React from "react";
import "./contactanos.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";
import emailjs from "emailjs-com";

export const Contactanos = () => {
  const [error, setError] = React.useState("");
  let history = useHistory();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2qkvqvp",
        "template_rufu117",
        e.target,
        "user_pTnoExhJI5ETXocAlxU5L"
      )
      .then(
        (result) => {
          console.log(result.text);
          history.push("/gracias_por_contactarse");
        },
        (error) => {
          console.log(error.text);
          setError(
            "No se logró enviar el mensaje, estamos solucionando ese error"
          );
        }
      );
  };

  return (
    <div className="container mt-4  animated fadeIn ">
      <div className="register-child contactanos-box">
        <h1 className="title tittle-register-child text-contactanos tracking-in-expand-fwd-top">
          ¡Contáctanos!
        </h1>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="list-register">
            <p className="letter-register">NOMBRE</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Nombre"
              name="name"
              autoFocus
              required
            />
            <p className="letter-register">CORREO ELECTRÓNICO</p>
            <input
              className="input-register-space"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <p className="letter-register">MENSAJE</p>
            <textarea
              className="input-register-space textarea"
              type="text"
              placeholder="Escribe tu mensaje"
              name="message"
              required
            />
            <p className="error-contactanos">{error}</p>
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
