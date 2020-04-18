import React from "react";
import "./registroNiños.css";
import "../aprendamos.css";
import "../../../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";

export const RegistroNiños = () => {
  return (
    <div className="container">
      <div className="register-child">
        <div className="row">
          <h1 className="tittle-register-child">¡Bienvenido!</h1>
        </div>
        <div className="row">
          <h2 className="subtittle-register-child">Cuidador Principal</h2>
        </div>
        <div className="list-register">
          <p className="letter-register">NOMBRE DEL NIÑO/A</p>
          <input
            className="input-register-space"
            type="text"
            placeholder="Nombre"
          />
          <p className="letter-register">EDAD DEL NIÑO/A EN MESES</p>
          <select className="select-register-space">
            <opcion>Lunes</opcion>
            <option>Martes</option>
            <option>Miércoles</option>
            <option>Jueves</option>
            <option>Viernes</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </select>
          <p className="letter-register">PARENTESCO</p>
          <select className="select-register-space">
            <opcion>Mamá</opcion>
            <option>Papá</option>
            <option>Tía</option>
            <option>Tío</option>
            <option>Abuela</option>
            <option>Abuelo</option>
            <option>Otro</option>
          </select>
          <p className="letter-register">DEPARTAMENTO</p>
          <select className="select-register-space">
            <opcion>Lima</opcion>
            <option>Callao</option>
            <option>Junin</option>
            <option>Arequipa</option>
            <option>Tacna</option>
            <option>Tumbes</option>
            <option>San Martín</option>
          </select>
          <p className="letter-register">PROVINCIA</p>
          <select className="select-register-space">
            <opcion>Lima</opcion>
            <option>Callao</option>
            <option>Junin</option>
            <option>Arequipa</option>
            <option>Tacna</option>
            <option>Tumbes</option>
            <option>San Martín</option>
          </select>
          <p className="letter-register">DISTRITO</p>
          <select className="select-register-space">
            <opcion>Villa el salvador</opcion>
            <option>San juan de miraflores</option>
            <option>Chorrillos</option>
            <option>Miraflores</option>
            <option>Surco</option>
            <option>La Molina</option>
            <option>Surquillo</option>
          </select>
          <p className="letter-register">COLABORADOR BRECA</p>

          <label className="style-radio">
            <input type="radio" name="breca" value="SI" />
            <span className="radio"></span>
            <span className="text">SI</span>
          </label>

          <label className="style-radio">
            <input type="radio" name="breca" value="NO" />
            <span className="radio"></span>
            <span className="text">NO</span>
          </label>

          <p className="letter-register">CÓDIGO COLABORADOR BRECA</p>
          <input
            className="input-register-space"
            type="text"
            placeholder="Código"
          />

          <Link to="/aprendamos/cuidador">
            <button className="btn-navy-blue text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              INGRESAR
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
