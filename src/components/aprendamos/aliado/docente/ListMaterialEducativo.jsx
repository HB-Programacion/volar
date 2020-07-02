import React from 'react'
import "./../../cuidador/areas/areas.css";

import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoSesamoWhite from "./../../../../images/areas-img/icon_sesamo.png";
import focoRosado from "./../../../../images/docente/foco-rosado.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../../firebase/firebase";
import { Orbitals } from "react-spinners-css";
import arrTips from '../../../../data'


const ListMaterialEducativo = ({  contenidoFirebase,
    error,
    loading,
    firebaseUser,
    idChild,}) => {

    
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
        <div>
            <>
<i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback goBack-area" aria-hidden="true"></i> 
{
  firebaseUser!==null?(
    <div>
    <div className="box-title-listMaterialEducativo show-desktop">
      <h1 className="align-center text-blue">¡Bienvenido!</h1>
      <h1 className="align-center text-blue bold">Conoce los recursos de nuestros socios </h1>
    </div>
    <div className="list-material-educativo">

        <div className="row">
          {arraySesamo
            .filter((item) => item.seccion === "Sésamo")
            .map((item) => (
              <div
                key={item.id}
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4"
              >
                <a className="link"
                  href=
                  {`/aprendamos/aliado/docente/material-educativo/individual`}
                  onClick={() => mandarNumberTipOficial(item.n_tip)}
                >
                  <div className="box-section box-section-material-educativo">
                    <img
                      src={focoRosado}
                      className="icono-video-tip"
                      alt="icono de tip"
                    />
                    <div className="box-text-material-educativo">
                      <h3>
                        {item.titulo}
                      </h3>
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
                      src={focoRosado}
                      className="icono-video-tip"
                      alt="icono de lista de material educativo"
                    />
                    <div className="box-text-video-tip">
                      <h3 className="subtittle-video-tip">
                        {item.titulo}
                      </h3>
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
        </div>
    )
}

export default ListMaterialEducativo
