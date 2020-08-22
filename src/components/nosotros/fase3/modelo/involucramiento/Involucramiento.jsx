import React from 'react'

import "./Involucramiento.css"
import { useHistory } from "react-router-dom";

import involucramientoImg from "../../../../../images/fase3-img/modelo/involucramiento-img/involucramiento.png"
import involucramientoDesktop from "../../../../../images/fase3-img/modelo/involucramiento-img/involucramiento-desktop.png"

const Involucramiento = () => {
    let history = useHistory();
    return (
        <div  className="animated fadeIn">
        <a onClick={()=>{history.goBack()}}>
            <i  className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i>
        </a>
            <div className="img-involucramiento mb-5">
                <img src={involucramientoImg} alt="" className="show-mobile w-95"/>
                <img src={involucramientoDesktop} alt="" className=" hide-mobile w-100"/>
            </div>
        </div>
    )
}

export default Involucramiento
