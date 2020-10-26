import React, { useState } from "react";
import { Axios, db } from "../firebase/firebase";
import "./contactanos.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

export const Contactanos3 = () => {
  const [formData, setFormData] = useState({});

  const actualizarInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = () => {
    Axios.post(
      "https://us-central1-volar-web-18e43.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-4  animated fadeIn ">
        <div className="register-child contactanos-box">
          <h1 className="title tittle-register-child text-contactanos tracking-in-expand-fwd-top">
            ¡Contáctanos!
          </h1>

          <div className="list-register">
            <form onSubmit={handleSubmit}>
              <p className="letter-register">NOMBRE</p>
              <input
                className="input-register-space"
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={actualizarInput}
                value={formData.name}
                autoFocus
              />
              <p className="letter-register">CORREO ELECTRÓNICO</p>
              <input
                className="input-register-space"
                type="email"
                name="email"
                placeholder="Email"
                onChange={actualizarInput}
                value={formData.email}
              />
              <p className="letter-register">MENSAJE</p>
              <textarea
                className="input-register-space textarea"
                type="text"
                name="message"
                placeholder="Escribe tu mensaje"
                onChange={actualizarInput}
                value={formData.message}
              />
              <div className="caja-boton-contactanos">
                <button
                  type="submit"
                  className="btn-navy-blue text-white wobble-hor-bottom"
                >
                  <img src={arrowLeft} className="arrow-blue"></img>
                  Enviar
                  <img src={arrowRight} className="arrow-blue"></img>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
