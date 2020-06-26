import React from "react";
import "./areas.css";

import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoRutinaWhite from "./../../../../images/areas-img/icon_rutina.png";
import iconoTipRutina from "./../../../../images/areas-img/icono_tip_rutina.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../../firebase/firebase";
import { Orbitals } from "react-spinners-css";
import arrTips from '../../../../data'


export const Rutina= ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {

  let history = useHistory();

  let arrayRutina=  arrTips

  arrayRutina.sort(function (a, b) {
    if (a.n_tip > b.n_tip) {
      return 1;
    }
    if (a.n_tip < b.n_tip) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });





  const mandarNumberTipOficial = (numberTip) => {
    localStorage.setItem('localNumberTip', numberTip)
  };  



  return (
    <div>
      <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback goBack-area" aria-hidden="true"></i> 
      {firebaseUser !== null ? (
        <div>
          <div className="box-title-rutina show-desktop">
            <img
              src={iconoRutinaWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area  tracking-in-expand-fwd-top">RUTINA</h1>
          </div>
          <div className="list-videos-tips">

              <div className="row">
                {arrayRutina
                  .filter(
                    (item) =>
                      item.seccion === "Rutina" &&
                      item.edad == localStorage.getItem('edadChildLogueadoActive')
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a className="link" href={`/aprendamos/cuidador/${ localStorage.getItem('idChildLogueadoActive')}/rutina/tips`}
                        onClick={() => mandarNumberTipOficial(item.n_tip)}>
                        
                        <div className="box-section box-section-rutina">
                          <img
                            src={iconoTipRutina}
                            className="icono-video-tip"
                            alt="icono de tip"
                          />
                          <div className="box-text-video-tip">
                            <h3 className="subtittle-video-tip">
                              {item.titulo}
                            </h3>
                            <h5 className="text-video-tip">
                              Tip N° {item.n_tip}
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
          </div>
        </div>
      ) : (
        <div>
          <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback goBack-area" aria-hidden="true"></i> 
          <div className="box-title-rutina
           show-desktop">
            <img
              src={iconoRutinaWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area">RUTINA</h1>
          </div>
          <div className="list-videos-tips">

              <div className="row">
                {arrayRutina
                  .filter(
                    (item) =>
                      item.seccion === "Rutina" &&
                      item.edad == JSON.parse(localStorage.getItem('dateChild')).edad
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a className="link" href="/aprendamos/cuidador/rutina/tips"
                        onClick={() => mandarNumberTipOficial(item.n_tip)}>
                        
                        <div className="box-section box-section-rutina">
                          <img
                            src={iconoTipRutina}
                            className="icono-video-tip"
                            alt="icono de tip"
                          />
                          <div className="box-text-video-tip">
                            <h3 className="subtittle-video-tip">
                              {item.titulo}
                            </h3>
                            <h5 className="text-video-tip">
                              Tip N° {item.n_tip}
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
          </div>
        </div>
      )}
    </div>
  );
};
