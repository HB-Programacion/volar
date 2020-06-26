import React from "react";
import "./areas.css";

import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoSesamoWhite from "./../../../../images/areas-img/icon_sesamo.png";
import iconoVideoJuego from "./../../../../images/areas-img/icon-video-sesamo.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../../firebase/firebase";
import { Orbitals } from "react-spinners-css";
import arrTips from '../../../../data'

export const Sesamo = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {


  let history = useHistory();
  
  let arraySesamo=arrTips

  arraySesamo.sort(function (a, b) {
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
  console.log(localStorage.getItem('localNumberTip'))
};



  return (
<>
<i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback goBack-area" aria-hidden="true"></i> 
{
  firebaseUser!==null?(
    <div>
    <div className="box-title-sesamo show-desktop">
      <img
        src={iconoSesamoWhite}
        className="icono-sesamo heartbeat"
        alt="gota de agua"
      />
    </div>
    <div className="list-videos-tips">

        <div className="row">
          {arraySesamo
            .filter((item) => item.seccion === "Sésamo")
            .map((item) => (
              <div
                key={item.id}
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
              >
                <a className="link"
                  href=
                  {`/aprendamos/cuidador/${ localStorage.getItem('idChildLogueadoActive')}/sesamo/tips`}
                  onClick={() => mandarNumberTipOficial(item.n_tip)}
                >
                  <div className="box-section box-section-sesamo">
                    <img
                      src={iconoVideoJuego}
                      className="icono-video-tip"
                      alt="icono de tip"
                    />
                    <div className="box-text-video-tip">
                      <h3 className="subtittle-video-tip">
                        {item.titulo}
                      </h3>
                      <h5 className="text-video-tip">
                        N° {item.n_tip} {item.tipo}
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
    </div>
  </div> ): 
  (
    <div>
      <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback goBack-area" aria-hidden="true"></i> 
    <div className="box-title-sesamo show-desktop">
      <img
        src={iconoSesamoWhite}
        className="icono-sesamo heartbeat"
        alt="gota de agua"
      />
    </div>
    <div className="list-videos-tips">

        <div className="row">
          {arraySesamo
            .filter((item) => item.seccion === "Sésamo")
            .map((item) => (
              <div
                key={item.id}
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
              >
                <a className="link"
                  href="/aprendamos/cuidador/sesamo/tips"
                  onClick={() => mandarNumberTipOficial(item.n_tip)}
                >
                  <div className="box-section box-section-sesamo">
                    <img
                      src={iconoVideoJuego}
                      className="icono-video-tip"
                      alt="icono de tip"
                    />
                    <div className="box-text-video-tip">
                      <h3 className="subtittle-video-tip">
                        {item.titulo}
                      </h3>
                      <h5 className="text-video-tip">
                        N° {item.n_tip} {item.tipo}
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
    
    </div>
  </div>
  )
}
</>
  );
};
