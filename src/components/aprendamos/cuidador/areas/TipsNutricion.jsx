import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
import { useHistory } from "react-router-dom";

import { Nutricion } from "./Nutricion";
import { Orbitals } from "react-spinners-css";
import { auth, db } from "../../../../components/firebase/firebase";
/*import cohete from '../../images/cohete-volando.svg';*/
import arrTips from '../../../../data'

const TipsNutricion = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  let history = useHistory();
  return (
    <div>
      {firebaseUser !== null ? (
        <div className="background-tips-nutricion" id="aprendamos-page">
          <div className=" animated fadeIn">
              <>
              <a onClick={()=>{history.goBack()}}>
                <i  className="fas fa-chevron-left arrowGoback" aria-hidden="true"></i>
              </a> 
                {arrTips
                  .filter(
                    (item) =>
                      item.seccion === "Nutrición y Salud" &&
                      item.n_tip ==
                        localStorage.getItem("localNumberTip") &&
                      item.edad == localStorage.getItem('edadChildLogueadoActive')
                  )
                  .map((item) => (
                    <div className="" key={item}>
                      <div className="row justify-content-center h-100 sin-margin-row">
                        <h1 className="tittle-tips tracking-in-expand-fwd-top">
                          {item.titulo}
                        </h1>
                      </div>
                      <div className="row justify-content-center  h-100 sin-margin-row">
                        <h3 className="tips-numbers tracking-in-expand-fwd-top">
                          TIP N°{item.n_tip}
                        </h3>
                      </div>
                      <div className="row tips-margin-top sin-margin-row tips-1-columna">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {item.icono !== "" ? (
                            <img src={item.icono} alt="" className="iconos-tips-blanco heartbeat" />
                          ) : (
                            <div className="videoWrapper">
                              <iframe
                                className="border-video-nutricion"
                                width="600"
                                height="350"
                                src={item.video}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </div>
                          )}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          <div class="text-tips">
                            <h3>Hola {localStorage.getItem("nameUserActive")}</h3>
                            {item.texto1B !== ""  && item.texto1A !== "" ? (
                              <p class="text-tips-light">
                                {item.texto1A}
                                {localStorage.getItem('nameChildActive')}
                                {item.texto1B}
                              </p>
                            ) : (
                               item.texto1B !== ""  && item.texto1A === "" ? (
                                <p class="text-tips-light">
                                {item.texto1B}
                              </p>
                              ):(
                                <p class="text-tips-light">
                               {localStorage.getItem('nameChildActive')}  {item.texto1A}
                              </p>
                              ) 
                              
                            )}
                            <p class="text-tips-bold">{item.texto2}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
          </div>
        </div>
      ) : (
        <div className="background-tips-nutricion" id="aprendamos-page">
          <div className=" animated fadeIn">
              <>
              <a onClick={()=>{history.goBack()}}>
                <i  className="fas fa-chevron-left arrowGoback" aria-hidden="true"></i>
              </a> 
                {arrTips
                  .filter(
                    (item) =>
                      item.seccion === "Nutrición y Salud" &&
                      item.n_tip ==
                        localStorage.getItem("localNumberTip") &&
                      item.edad ==
                        JSON.parse(localStorage.getItem("dateChild")).edad
                  )
                  .map((item) => (
                    <div className="">
                      <div className="row justify-content-center h-100 sin-margin-row">
                        <h1 className="tittle-tips tracking-in-expand-fwd-top">
                          {item.titulo}
                        </h1>
                      </div>
                      <div className="row justify-content-center  h-100 sin-margin-row">
                        <h3 className="tips-numbers tracking-in-expand-fwd-top">
                          TIP N°{item.n_tip}
                        </h3>
                      </div>
                      <div className="row tips-margin-top sin-margin-row tips-1-columna">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {item.icono !== "" ? (
                            <img src={item.icono} alt="" className="iconos-tips-blanco heartbeat" />
                          ) : (
                            <div className="videoWrapper">
                              <iframe
                                className="border-video-nutricion"
                                width="600"
                                height="350"
                                src={item.video}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </div>
                          )}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {JSON.parse(localStorage.getItem("dateChild")).edad== -1 ? (
                              <div class="text-tips">
                              <h3>Hola Mamita</h3>
                                <p class="text-tips-light">
                                  {item.texto1B}
                                </p>
                              <p class="text-tips-bold">{item.texto2}</p>
                            </div>
                          ): (
                            <div class="text-tips">
                            <h3>Hola</h3>

                            {item.texto1B !== ""  && item.texto1A !== "" ? (
                              <p class="text-tips-light">
                                {item.texto1A}
                                {JSON.parse(localStorage.getItem("dateChild")).name}
                                {item.texto1B}
                              </p>
                            ) : (
                               item.texto1B !== ""  && item.texto1A === "" ? (
                                <p class="text-tips-light">
                                {item.texto1B}
                              </p>
                              ):(
                                <p class="text-tips-light">
                               {JSON.parse(localStorage.getItem("dateChild")).name}  {item.texto1A}
                              </p>
                              ) 
                              
                            )}
                            <p class="text-tips-bold">{item.texto2}</p>
                          </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </>
          </div>
        </div>
      )}
    </div>
  );
};

export default TipsNutricion;