import React from "react";

import "./AguaSegura.css";
import { useHistory } from "react-router-dom";

import crecer from "../../../../images/nosotros-img/agua-segura.svg";
import limpios from "../../../../images/agua-segura-img/limpios-y-felices.png";
import sanitaria from "../../../../images/agua-segura-img/educacion-sanitaria.png";
import feria from "../../../../images/agua-segura-img/feria-familiar.png";
import organizaciones from "../../../../images/agua-segura-img/organizaciones-comunitarias.png";
import manosLimpias from "../../../../images/agua-segura-img/manos-limpias.svg";
import sesamo from "../../../../images/agua-segura-img/sesamo-logo.svg";
import limpiosFelices from "../../../../images/agua-segura-img/limpios-felices-logo.svg";
import higieneEnfermedad from "../../../../images/agua-segura-img/higiene-enfermedad.svg";
import buenUso from "../../../../images/agua-segura-img/buen-uso-servicios.svg";
import valoracion from "../../../../images/agua-segura-img/valoracion-servicios.svg";
import cohete from "../../../../images/cohete-stars.svg";
import lavadoManos from "../../../../images/agua-segura-img/lavado-de-manos.svg";
import starSanitaria from "../../../../images/agua-segura-img/star-sanitaria.svg";
import starVideo from "../../../../images/crecer-img/start-video.svg";
import starRadio from "../../../../images/crecer-img/star-radio.svg";
import fortalecimientoOrg from "../../../../images/agua-segura-img/fortalecimiento-organizaciones.svg";

const Agua = () => {
  let history = useHistory();
  return (
    <div className="fondo-azul animated fadeIn">
      {/* <a
        onClick={() => {
          history.goBack();
        }}
      > */}
      <a href="/nosotros/fase2">
        <i className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
      </a>
      <div className="fase2-agua border-bottom-radius">
        <div className="fase2-agua-title">
          <div className="logo-agua-img">
            <img src={crecer} className="w-100 slide-in-left"></img>
          </div>
          <div>
            <div className="fase2-probar">Fase 2 - Probar</div>
            <div className="fase2-title-agua  tracking-in-expand-fwd-top">
              Agua segura
            </div>
          </div>
        </div>
        <div className="box-fase2-agua">
          <p className="p-mobile-blue mt-2">
            En el componente Agua Segura se probaron cuatro tipos de
            intervenciones basadas en las ciencias del comportamiento y
            diseñadas junto a aliados locales e internacionales.
          </p>
        </div>
        <div className="container">
          <div
            id="multi-item-example"
            className="carousel slide carousel-multi-item carousel-crecer"
            data-ride="carousel"
          >
            <div className="controls-top controls-agua">
              <a
                className="btn-floating"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left"></i>
              </a>
              <a
                className="btn-floating"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fa fa-chevron-right"></i>
              </a>
            </div>

            <ol className="carousel-indicators point-agua">
              <li
                data-target="#multi-item-example"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#multi-item-example" data-slide-to="1"></li>
              <li data-target="#multi-item-example" data-slide-to="2"></li>
              <li data-target="#multi-item-example" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 ">
                    <a
                      className="card mb-2 card-crecer"
                      href="#limpios-y-felices"
                    >
                      <img
                        className="card-img-top "
                        src={limpios}
                        alt="talleres-presenciales"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a
                      className="card mb-2 card-crecer"
                      href="#educacion-sanitaria-por-barrio"
                    >
                      <img
                        className="card-img-top "
                        src={sanitaria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a className="card mb-2 card-crecer" href="#feria-familiar">
                      <img
                        className="card-img-top "
                        src={feria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <a className="card mb-2 card-crecer" href="#educacion-sanitaria-por-barrio">
                      <img
                        className="card-img-top "
                        src={sanitaria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a className="card mb-2 card-crecer" href="#feria-familiar">
                      <img
                        className="card-img-top "
                        src={feria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix clearfix d-none d-md-block">
                    <a className="card mb-2 card-crecer" href="#fortalecimiento-de-organizaciones">
                      <img
                        className="card-img-top "
                        src={organizaciones}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <a className="card mb-2 card-crecer" href="#feria-familiar">
                      <img
                        className="card-img-top "
                        src={feria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a className="card mb-2 card-crecer" href="#fortalecimiento-de-organizaciones">
                      <img
                        className="card-img-top "
                        src={organizaciones}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a
                      className="card mb-2 card-crecer"
                      href="#limpios-y-felices"
                    >
                      <img
                        className="card-img-top "
                        src={limpios}
                        alt="talleres-presenciales"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <a className="card mb-2 card-crecer" href="#fortalecimiento-de-organizaciones">
                      <img
                        className="card-img-top "
                        src={organizaciones}
                        alt="Card image cap"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix d-none d-md-block">
                    <a
                      className="card mb-2 card-crecer"
                      href="#limpios-y-felices"
                    >
                      <img
                        className="card-img-top "
                        src={limpios}
                        alt="talleres-presenciales"
                      />
                    </a>
                  </div>

                  <div className="col-md-4 clearfix clearfix d-none d-md-block">
                    <a className="card mb-2 card-crecer" href="#educacion-sanitaria-por-barrio">
                      <img
                        className="card-img-top "
                        src={sanitaria}
                        alt="Card image cap"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white box-azul-agua" id="limpios-y-felices">
        <div className="titulo-taller">
          <h5>Programa Educativo “Limpios y Felices”</h5>
        </div>
        <div className="box-foto">
          <img src={manosLimpias} className=""></img>
          <p className="text-aguamarina">
            En escuelas iniciales, promovemos el aprendizaje basado en el juego
            en temas de agua, saneamiento e higiene
          </p>
        </div>
        <div className="box-logos">
          <figure className="w-30 sesamo-desktop">
            <img src={sesamo} alt="" className="w-100" />
          </figure>
          <figure className="w-70 limpios-desktop">
            <img src={limpiosFelices} alt="" className="w-100" />
          </figure>
        </div>
      </div>

      <div className="fondo-blanco box-blanco-agua" id="educacion-sanitaria-por-barrio">
        <div className="titulo-taller">
          <img src={starSanitaria} alt="" className="star-arriba heartbeat" />
          <img src={starVideo} alt="" className="star-video heartbeat" />
          <h5>Educación Sanitaria por barrio</h5>
        </div>
        <div className="box-videos">
          {/* <div>
                        <img src={videoTablets} ></img>
                    </div> */}
          <div className="">
            <p className="p-mobile-blue pt-2">
              Sensibilización de la comunidad mediante talleres en temas de
              agua, saneamiento e higiene.
            </p>
            <p className="p-mobile-blue">Dividido en tres sesiones: </p>
          </div>
        </div>
        <div className="box-circulos-sanitaria">
          <div className="circulos">
            <img src={higieneEnfermedad}></img>
            Higiene y <br></br>Enfermedad
          </div>
          <div className="circulos">
            <img src={buenUso}></img>
            Buen uso de <br></br>los servicios
          </div>
          <div className="circulos">
            <img src={valoracion}></img>
            Valoración de <br></br>los Servicios
          </div>
        </div>
        <img src={cohete} alt="" className="cohete-agua-segura" />
      </div>

      <div className="fondo-celeste fondo-celeste-agua" id="feria-familiar">
        <div className="titulo-taller">
          <h5>Feria Familiar + Compromiso de lavado de manos</h5>
        </div>
        <p className="">
          Stands con actividades basadas en la ciencia conductual que promueven
          buenas prácticas de higiene personal como el lavado de manos.
        </p>
        <figure className="lavado-manos-img m-auto">
          <img src={lavadoManos} className="w-100"></img>
        </figure>
      </div>

      <div className="fondo-blanco box-organizaciones" id="fortalecimiento-de-organizaciones">
        <div className="titulo-taller">
          <img
            src={starSanitaria}
            alt=""
            className="star-organizaciones-arriba heartbeat"
          />
          <h5>Fortalecimiento de organizaciones comunitarias</h5>
          <img
            src={starRadio}
            alt=""
            className="star-organizaciones heartbeat"
          />
        </div>
        <div className="box-organizaciones-radio">
          <p className="p-mobile-blue p-2">
            Apoyo a la correcta gestión del servicio de agua potable y
            alcantarillado del distrito.
          </p>
        </div>
        <img src={fortalecimientoOrg} alt="" className="fort-org" />
      </div>
    </div>
  );
};

export default Agua;
