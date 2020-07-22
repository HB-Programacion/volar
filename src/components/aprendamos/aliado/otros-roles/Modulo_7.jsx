import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import alimentacion from "../../../../images/modulos-img/alimentacion.svg"
import calidad from "../../../../images/modulos-img/calidad.svg"
import estres from "../../../../images/modulos-img/estres.svg"
import infografia from "../../../../images/modulos-img/infografia.svg"
import video from "../../../../images/modulos-img/video.svg"
import arrowLeft from "./../../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../../images/arrow-right-blue.svg";


const Modulo_7 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
         <a href="/aprendamos/aliado/modulos">
            <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Reconocer los distintos estilos de dar de comer.</p>
                    <p className="p-mobile-blue">Identificar que practicas favorecen la alimentación responsiva.</p>
                    <p className="p-mobile-blue">Desarrollar la habilidad de responder al niño, a través de la comunicación verbal, el trato afectuoso durante el momento de la comida. </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">Alimentación responsiva implica desarrollar la habilidad de responder al niño, a través de la comunicación verbal, tener un trato afectuoso y animarlo para que el niño disfrute el momento de la comida.</p>
                    <p className="p-mobile-blue">El momento de la alimentación es un momento de disfrute, de intercambio de afecto y aprendizaje.</p>
                </div>
            </div>
            <figure className="flecha-abajo-aliado">
                <img src={flecha} alt="" className="w-100 m-auto"/>
            </figure>
            <h2 className="text-materiales-aliados">Materiales</h2>
            <div className="row sin-margin-row box-materiales-modulos">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 m-auto ">
                    <div>
                        <figure className="w-17 m-auto">
                            <img src={alimentacion} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Alimentación balanceada</h3>
                       
                    </div>
                </div>
            </div>
            <div className="box-modulos-info-videos">
                <div className="btn-modulos-info">
                    <figure className="btn-infografia">
                        <img src={infografia} alt=""className="w-70"/>
                    </figure>
                    <div className="btn-info-text">Infografía alimentación balanceada según edad</div>
                </div>
                <div className="btn-modulos-info">
                    <figure className="btn-infografia">
                        <img src={infografia} alt="" className="w-70"/>
                    </figure>
                    <div className="btn-info-text">Infografía  ¿Qué debemos darle de comer a un niño/niña enfermo/a?</div>
                </div>
            </div>
        </div>
    )
}

export default Modulo_7

