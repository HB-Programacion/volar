import React from 'react'

import "../rotacion/Rotacion.css"
import { useHistory } from "react-router-dom";

import tablet from "../../../../../images/fase3-img/modelo/mensajeria.svg"

const Programa = () => {
    let history = useHistory();
    return (
        <div className="animated fadeIn">
        <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
            <div className="img-modelo-rosa">
                <figure >
                    <img src={tablet} alt="" className="w-100 heartbeat"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Programa de Mensajería de Texto</p>
                <p className="p-mobile-blue">Hemos fortalecido y diferenciado nuestra batería 
de mensajes de texto en función a los diferentes 
actores con los que trabajamos en cada una de 
las intervenciones. </p>
                
            </div>
        </div>
    )
}

export default Programa
