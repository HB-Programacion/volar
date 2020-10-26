import React from "react";
import { useHistory } from "react-router-dom";

import "./Inicial.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Compartir from "../../../compartir/Compartir";
import inicial from "../../../../../../images/docente/inicial.svg";

const Inicial = () => {
  let history = useHistory();
  return (
    <div className="bg-recursos-img animated fadeIn">
      <a
        onClick={() => {
          history.goBack();
        }}
      >
        <i
          className="fas fa-chevron-left arrowGoback-docente goBack-docente"
          aria-hidden="true"
        ></i>
      </a>
      <div>
        <div className="box-title-inicial">
          <figure className="img-inicial">
            <img
              src={inicial}
              alt="inicial-volar"
              className="w-100 heartbeat"
            />
          </figure>
          <h1 className="title-inicial">Inicial de 3 a 5 años</h1>
        </div>
        <div className="container box-btn-inicial">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-inicial">
                <h2 className="title-btn-inicial">Khan Academy</h2>
                <a
                  href="https://khanacademy.zendesk.com/hc/es/articles/360040418972-Soy-un-padre-c%C3%B3mo-puedo-usar-Khan-Academy-para-apoyar-el-aprendizaje-de-mi-hijo-durante-el-cierre-de-su-escuela-"
                  target="_blank"
                  className="btn-morado-inicial"
                >
                  Educación Remota
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-inicial">
                <h2 className="title-btn-inicial">Perú Educa</h2>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/articulos-de-interes-0-5"
                  target="_blank"
                  className="btn-blanco-inicial"
                >
                  Artículos de interés
                </a>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/consejos-de-crianza-0-5"
                  className="btn-blanco-inicial"
                  target="_blank"
                >
                  Consejos de crianza
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-inicial">
                <h2 className="title-btn-inicial">Educación 3.0</h2>
                <a
                  href="https://www.educaciontrespuntocero.com/recursos/infantil/"
                  target="_blank"
                  className="btn-morado-inicial interline-btn"
                >
                  Recursos educativos generales
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-inicial">
                <h2 className="title-btn-inicial">Aprendo en casa (MINEDU)</h2>
                <a
                  href="https://www.youtube.com/watch?v=Ny5qRXisRnQ"
                  target="_blank"
                  className="btn-blanco-inicial"
                >
                  Cómo hablar de COVID-19
                </a>
                <a
                  href="https://aprendoencasa.pe/#/nivel/inicial"
                  target="_blank"
                  className="btn-blanco-inicial"
                >
                  Actvidades por edad
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-inicial">
                <h2 className="title-btn-inicial">Enseña Perú</h2>
                <a
                  href="http://ensenaperu.org/elaprendizajenoparafamilias"
                  target="_blank"
                  className="btn-morado-inicial"
                >
                  Recursos para padres
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-compartir-inicial">
          <Compartir />
        </div>
      </div>
    </div>
  );
};

export default Inicial;
