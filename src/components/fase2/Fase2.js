import React from "react";

import "./Fase2.css"

import starLeftMobile from "../../images/fase2-img/star-left-mobile.svg"
import starRightMobile from "../../images/fase2-img/star-rigth-mobile.svg"
import cohete from "../../images/fase2-img/cohete-fase2.svg"
import crecer from "../../images/nosotros-img/crecer.svg"
import agua from "../../images/nosotros-img/agua-segura.svg"
import coheteStars from "../../images/cohete-stars.svg"

const Fase2 = () => {
    return(
        <div>
            <div className="fase2 border-bottom-radius">
                <img src={starLeftMobile} className="star-left-mobile"></img>
                <img src={starRightMobile} className="star-right-mobile"></img>
                <h6 className="titulo-numero-fase text-white">Fase 2</h6>
                <h5 className="titulo-fase text-white">Probar</h5>
                <p className="p-mobile-white w-fase">En este momento del proyecto tuvimos como objetivo explorar diferentes tipos de soluciones, darle forma al futuro modelo de “Volar” y conducir las ideas a las zonas de influencia.
                </p>
            </div>
            <div className="box-botones-fase2">
                <div className="btn-fase2 font-color-orange">
                    <img src={crecer} className="w-12 mr-2"></img>
                    Crecer mejor
                </div>
                <div className="btn-fase2 text-aguamarina">
                    <img src={agua} className="w-10 mr-2"></img>
                    Agua segura
                </div>
                <div className="btn-fase-piloto">
                    <img src={cohete} className="w-12 mr-2"></img>
                    El piloto
                </div>
            </div>
            <figure className="w-100">
                <img src={coheteStars} className="cohete-fase2"></img>
            </figure>
        </div>
    )
}

export default Fase2;