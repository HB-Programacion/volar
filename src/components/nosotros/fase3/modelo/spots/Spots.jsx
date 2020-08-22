import React from 'react'

import "../rotacion/Rotacion.css"
import { useHistory } from "react-router-dom";

import tablet from "../../../../../images/fase3-img/modelo/radio.svg"

const Spots = () => {
    let history = useHistory();
    return (
        <div className="animated fadeIn">
            <a onClick={()=>{history.goBack()}}>
                <i  className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
            </a>
            <div className="img-modelo-rosa">
                <figure >
                    <img src={tablet} alt="" className="w-100 heartbeat"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Spots Radiales</p>
                <p className="p-mobile-blue">Usamos el “quechuañol” (español y quechua)
como idioma en nuestros spots para poder
llegar a mayor cantidad de familias.</p>
                
            </div>
        </div>
    )
}

export default Spots
