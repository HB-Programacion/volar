import React from "react";
import "./registroNiños.css";
import "../aprendamos.css";
import "../../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";

export const RegistroNiños = () => {
  const [nameChild, setNameChild] = React.useState("");
  const [colaboradorBreca, setColaboradorBreca] = React.useState("");
  const [codigoBreca, setCodigoBreca] = React.useState("");
  const [edadChild, setEdadChild] = React.useState("");

  return (
    <div className="container animated fadeIn box-registro-ninos">
      <div className="register-child">
        <div className="row">
          <h1 className="title tittle-register-child">¡Bienvenido!</h1>
        </div>
        <div className="row">
          <h2 className="subtittle-register-child">Cuidador Principal</h2>
        </div>
        <div className="list-register">
        <form>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">NOMBRE DE NIÑO:</p>
              <input
                className="input-register-space"
                type="text"
                placeholder="Nombre del niño(a)"
                name="nameChild"
                onChange={(e) => setNameChild(e.target.value)}
                value={nameChild}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">EDAD DEL NIÑO</p>
              <select
                  className="select-register-space"
                  onChange={(e) => setEdadChild(e.target.value)}
                  value={edadChild}
                >
                  <option value="">---SELECCIONA---</option>
                  <option  value="-1">Niño(a) por nacer</option>
                  <option value="0" >0 - 1 año</option>
                  <option value="1">1 - 2 años</option>
                  <option value="2">2 - 3 años</option>
                  <option value="3">3 - 4 años</option>
                  <option value="4">4 - 5 años</option>
                  <option value="6">5 - 6 años</option>
                </select>
            </div>
          </div>
          <p>{edadChild}</p>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">COLABORADOR BRECA</p>

              <label className="style-radio">
                <input
                  type="radio"
                  name="breca"
                  value="SI"
                  onChange={(e) => setColaboradorBreca(e.target.value)}
                  checked={colaboradorBreca === "SI"}
                />
                <span className="radio"></span>
                <span className="text">SI</span>
              </label>

              <label className="style-radio">
                <input
                  type="radio"
                  name="breca"
                  value="NO"
                  onChange={(e) => setColaboradorBreca(e.target.value)}
                  checked={colaboradorBreca === "NO"}
                />
                <span className="radio"></span>
                <span className="text">NO</span>
              </label>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              {colaboradorBreca === "SI" ? (
                <>
                  <p className="letter-register">CÓDIGO COLABORADOR BRECA</p>
                  <input
                    className="input-register-space"
                    type="text"
                    placeholder="Código"
                    name="códigoBreca"
                    onChange={(e) => setCodigoBreca(e.target.value)}
                    value={codigoBreca}
                  />
                </>
              ) : null}
            </div>
          </div>

          <div className="caja-boton-contactanos">
            <button
              type="submit"
              className="btn-navy-blue text-white mt-3 mb-3 wobble-hor-bottom"
            >
              <img src={arrowLeft} className="arrow-blue"></img>
              ENVIAR
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
