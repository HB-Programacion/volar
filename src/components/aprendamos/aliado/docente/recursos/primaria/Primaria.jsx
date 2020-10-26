import React from "react";
import { useHistory } from "react-router-dom";

import Compartir from "../../../compartir/Compartir";
import primaria from "../../../../../../images/docente/primaria.svg";

import "./Primaria.css";

const Primaria = () => {
  let history = useHistory();
  return (
    <div className="bg-recursos-img-primaria animated fadeIn">
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
        <div className="box-title-primaria">
          <figure className="img-primaria">
            <img
              src={primaria}
              alt="primaria-volar"
              className="w-100 heartbeat"
            />
          </figure>
          <h1 className="title-primaria">Primaria de 6 a 12</h1>
        </div>
        <div className="container box-btn-primaria">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Khan Academy</h2>
                <a
                  href="https://es.khanacademy.org/math/matematicas-por-grado-pe"
                  target="_blank"
                  className="btn-blanco-primaria"
                >
                  Matemáticas
                </a>
                <a
                  href="https://s3.amazonaws.com/KA-share/Translations/PERU%CC%81.+Horarios+de+Khan+Academy+durante+la+suspensio%CC%81n+de+clases.pdf"
                  target="_blank"
                  className="btn-blanco-primaria"
                >
                  Horarios / organización
                </a>
                <a
                  href="https://khanacademy.zendesk.com/hc/es/articles/360040418972-Soy-un-padre-c%C3%B3mo-puedo-usar-Khan-Academy-para-apoyar-el-aprendizaje-de-mi-hijo-durante-el-cierre-de-su-escuela-"
                  target="_blank"
                  className="btn-blanco-primaria"
                >
                  Educación Remota
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Perú Educa</h2>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/articulos-de-interes-6-11"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Artículos de interés
                </a>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/practiquemos-juntos-6-11"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Actividades juntos
                </a>
                <a
                  href="http://www.perueduca.pe/web/materiales-educativos/coleccion-colombia-aprende"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Ciencia y Tecnología
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria  title-none-primaria">.</h2>
                <a
                  href="http://www.perueduca.pe/web/familia-y-comunidad/consejos-de-crianza-6-11"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Consejos de crianza
                </a>
                <a
                  href="http://www.perueduca.pe/web/materiales-educativos/coleccion-colombia-aprendee"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Matemática
                </a>
                <a
                  href="http://www.perueduca.pe/web/materiales-educativos/coleccion-colombia-aprende"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Comunicación
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Educación 3.0</h2>
                <a
                  href="https://www.educaciontrespuntocero.com/recursos/primaria/"
                  target="_blank"
                  className="btn-blanco-primaria interline-btn"
                >
                  Recursos educativos generales
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Falabella</h2>
                <a
                  href="https://www.falabella.com.pe/falabella-pe/page/YoEstudioEnCasa?staticPageId=21700005"
                  target="_blank"
                  className="btn-fuxia-primaria interline-btn"
                >
                  Recursos educativos generales
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Aprendo en casa (MINEDU)</h2>
                <a
                  href="https://aprendoencasa.pe/#/nivel/primaria"
                  target="_blank"
                  className="btn-blanco-primaria"
                >
                  Actvidades por edad
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="btn-primaria">
                <h2 className="title-btn-primaria">Enseña Perú</h2>
                <a
                  href="http://ensenaperu.org/elaprendizajenoparafamilias"
                  target="_blank"
                  className="btn-fuxia-primaria"
                >
                  Recursos para padres
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-compartir-primaria">
          <Compartir />
        </div>
      </div>
    </div>
  );
};

export default Primaria;
