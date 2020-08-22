import React from 'react'

import "../rotacion/Rotacion.css"

import { useHistory } from "react-router-dom";

import tablet from "../../../../../images/fase3-img/modelo/grupo.svg"

const Grupos = () => {
    let history = useHistory();

    return (
        <div  className="animated fadeIn">
            <a onClick={()=>{history.goBack()}}>
                <i  className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
            </a>
            <div className="img-modelo">
                <figure >
                    <img src={tablet} alt="" className="w-100 heartbeat"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Grupos de Interaprendizaje Familiar</p>
                <p className="p-mobile-blue">Estos espacios, tienen el objetivo de crear 
                    conocimientos compartidos a través del intercambio 
                    de experiencias y el diálogo sobre estos para buscar 
                    o idear estrategias y propuestas que atiendan a las 
                    inquietudes de los participantes. </p>
                
            </div>
        </div>
    )
}

export default Grupos
