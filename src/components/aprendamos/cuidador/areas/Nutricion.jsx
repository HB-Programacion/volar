import React from "react";
import "./areas.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoNutricionWhite from "./../../../../images/areas-img/icon_nutricion.png";
import iconoTipNutricion from "./../../../../images/areas-img/icono_tip_nutricion.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../../firebase/firebase";
import { Orbitals } from "react-spinners-css";
import arrTips from '../../../../data'

export const Nutricion= ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  
  let arrayNutricion=  arrTips

  arrayNutricion.sort(function (a, b) {
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
      {firebaseUser !== null ? (
        <div>
          <div className="box-title-nutricion show-desktop">
            <img
              src={iconoNutricionWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area  tracking-in-expand-fwd-top">NUTRICIÓN Y SALUD</h1>
          </div>
          <div className="list-videos-tips">
            
              <div className="row">
                {arrayNutricion
                  .filter(
                    (item) =>
                      item.seccion === "Nutrición y Salud" &&
                      item.edad == localStorage.getItem('edadChildLogueadoActive')
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a className="link" href={`/aprendamos/cuidador/${ localStorage.getItem('idChildLogueadoActive')}/nutricion/tips`}
                        onClick={() => mandarNumberTipOficial(item.n_tip)}>
                        
                        <div className="box-section box-section-nutricion">
                          <img
                            src={iconoTipNutricion}
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
          <div className="box-title-nutricion show-desktop">
            <img
              src={iconoNutricionWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area">NUTRICIÓN</h1>
          </div>
          <div className="list-videos-tips">
              <div className="row">
                {arrayNutricion
                  .filter(
                    (item) =>
                      item.seccion === "Nutrición y Salud" &&
                      item.edad == JSON.parse(localStorage.getItem('dateChild')).edad
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <a className="link" href="/aprendamos/cuidador/nutricion/tips"
                        onClick={() => mandarNumberTipOficial(item.n_tip)}>
                        
                        <div className="box-section box-section-nutricion">
                          <img
                            src={iconoTipNutricion}
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
