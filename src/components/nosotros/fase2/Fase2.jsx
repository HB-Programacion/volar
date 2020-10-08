import React from "react";
import { useHistory } from "react-router-dom";

import "./Fase2.css";
import { Router, Route, Link, Switch } from "react-router-dom";
import starLeftMobile from "../../../images/fase2-img/star-left-mobile.svg";
import starRightMobile from "../../../images/fase2-img/star-rigth-mobile.svg";
import cohete from "../../../images/fase2-img/cohete-fase2.svg";
import crecer from "../../../images/nosotros-img/crecer.svg";
import agua from "../../../images/nosotros-img/agua-segura.svg";
import coheteStars from "../../../images/cohete-stars.svg";

const Fase2 = () => {
  let history = useHistory();
  return (
    <div className="animated fadeIn">
      <div className="fase2 border-bottom-radius">
        {/* <a
          onClick={() => {
            history.goBack();
          }}
        > */}
        <a href="/nosotros">
          <i className="fas fa-chevron-left arrowGoback" aria-hidden="true"></i>
        </a>
        <h6 className="titulo-numero-fase2">Fase 2</h6>
        <h5 className="titulo-fase2  tracking-in-expand-fwd-top">Probar</h5>
        <p className="p-mobile-white w-fase">
          En este momento del proyecto tuvimos como objetivo explorar diferentes
          tipos de soluciones, darle forma al futuro modelo de “Volar” y
          conducir las ideas a las zonas de influencia.
        </p>
      </div>
      <div className="box-botones-fase2">
        <a
          href="/nosotros/fase2/crecer"
          className="btn-fase2 font-color-orange wobble-hor-bottom"
        >
          <img src={crecer} className="w-12 mr-2 "></img>
          Crecer mejor
        </a>
        <a
          href="/nosotros/fase2/agua-segura"
          className="btn-fase2 text-aguamarina wobble-hor-bottom"
        >
          <img src={agua} className="w-10 mr-2"></img>
          Agua segura
        </a>
        <a
          href="/nosotros/fase2/el-piloto"
          className="btn-fase-piloto wobble-hor-bottom"
        >
          <img src={cohete} className="w-12 mr-2"></img>
          El piloto
        </a>
      </div>
      <figure className="w-100">
        <img src={coheteStars} className="cohete-fase2"></img>
      </figure>
    </div>
  );
};

export default Fase2;
