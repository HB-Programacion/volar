import React from "react";
import { useHistory } from "react-router-dom";

import Compartir from "../../../compartir/Compartir";
import secundaria from "../../../../../../images/docente/secundaria.svg";

import "./Secundaria.css";

const Secundaria = () => {
  let history = useHistory();
  return (
    <div className="bg-recursos-img-secundaria animated fadeIn">
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
        <div className="box-title-secundaria">
          <figure className="img-secundaria">
            <img
              src={secundaria}
              alt="secundaria-volar"
              className="w-100 heartbeat"
            />
          </figure>
          <h1 className="title-secundaria">Secundaria de 13 a 17</h1>
        </div>
        <div className="container box-btn-secundaria">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">Khan Academy</h2>
                <a
                  href="https://es.khanacademy.org/math/matematicas-por-grado-pe"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Matemática
                </a>
                <a
                  href="https://es.khanacademy.org/computing"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Computación
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria title-none-secundaria">
                  .
                </h2>
                <a
                  href="https://es.khanacademy.org/science"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Ciencia
                </a>
                <a
                  href="https://s3.amazonaws.com/KA-share/Translations/PERU%CC%81.+Horarios+de+Khan+Academy+durante+la+suspensio%CC%81n+de+clases.pdf"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Horarios / organización
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria title-none-secundaria">
                  .
                </h2>
                <a
                  href="https://es.khanacademy.org/economics-finance-domain"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Economía y finanzas
                </a>
                <a
                  href="https://khanacademy.zendesk.com/hc/es/articles/360040418972-Soy-un-padre-c%C3%B3mo-puedo-usar-Khan-Academy-para-apoyar-el-aprendizaje-de-mi-hijo-durante-el-cierre-de-su-escuela-"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Educación Remota
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">Perú Educa</h2>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/articulos-de-interes-12-17"
                  target="_blank"
                  className="btn-amarillo-secundaria"
                >
                  Artículos de interés
                </a>
                <a
                  href="http://www.perueduca.pe/web/materiales-educativos/coleccion-colombia-aprende"
                  target="_blank"
                  className="btn-amarillo-secundaria"
                >
                  Ciencia y Tecnología
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria  title-none-secundaria">
                  .
                </h2>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/consejos-de-crianza-12-17"
                  target="_blank"
                  className="btn-amarillo-secundaria"
                >
                  Consejos de crianza
                </a>
                <a
                  href="http://www.perueduca.pe/web/materiales-educativos/coleccion-colombia-aprende"
                  target="_blank"
                  className="btn-amarillo-secundaria"
                >
                  Comunicación
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">Educación 3.0</h2>
                <a
                  href="https://www.educaciontrespuntocero.com/recursos/secundaria/"
                  target="_blank"
                  className="btn-blanco-secundaria interline-btn"
                >
                  Recursos educativos generales
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">Falabella</h2>
                <a
                  href="https://www.falabella.com.pe/falabella-pe/page/YoEstudioEnCasa?staticPageId=21700005"
                  target="_blank"
                  className="btn-amarillo-secundaria interline-btn"
                >
                  Recursos educativos generales
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">
                  Aprendo en casa (MINEDU)
                </h2>
                <a
                  href="https://aprendoencasa.pe/#/nivel/secundaria"
                  target="_blank"
                  className="btn-blanco-secundaria"
                >
                  Actvidades por edad
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-secundaria">
                <h2 className="title-btn-secundaria">Enseña Perú</h2>
                <a
                  href="http://ensenaperu.org/elaprendizajenoparafamilias"
                  target="_blank"
                  className="btn-amarillo-secundaria"
                >
                  Recursos para padres
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-compartir-secundaria">
          <Compartir />
        </div>
      </div>
    </div>
  );
};

export default Secundaria;
