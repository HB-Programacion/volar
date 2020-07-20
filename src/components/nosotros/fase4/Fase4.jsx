import React from 'react'
import { useHistory } from "react-router-dom";

import "./Fase4.css"

import peru from "../../../images/fase4-img/mapa-peru.png"
import item from "../../../images/fase4-img/peru-item.png"
import internacional from "../../../images/fase4-img/clinica-internacional.png"
import libertador from "../../../images/fase4-img/libertador.png"
import urbanova from "../../../images/fase4-img/urbanova.png"
import minsur from "../../../images/fase4-img/minsur.png"
import aporta from "../../../images/fase4-img/aporta.png"
import qroma from "../../../images/fase4-img/qroma.png"
import tasa from "../../../images/fase4-img/tasa.png"
import centria from "../../../images/fase4-img/centria.png"
import rimac from "../../../images/fase4-img/rimac.png"
import aesa from "../../../images/fase4-img/aesa.png"



const Fase4 = () => {
    let history = useHistory();
    return (
        <div className="animated fadeIn">
            <div className="fase1 fase4-fondo">
            <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left goBack-fase" aria-hidden="true"></i> 
                <h6 className="titulo-numero-fase color-white">Fase 4</h6>
                <h5 className="titulo-fase4 tracking-in-expand-fwd-top">Evaluar y escalar</h5>
                <p className="p-mobile-white w-fase">
                    Para el año 2020, Volar recoge todos los aprendizajes obtenidos durante el 2019 para ajustar y afianzar su modelo de atención a la primera infancia de forma integral, que se acople lo mejor posible a la realidad de nuestras zonas de influencia, a las necesidades de los actores locales y comunitarios en los que nos apoyamos.
                </p>
                <p className="mt-2 estrellita-naranja heartbeat">&#10022;</p>
                <h6 className="title-dit title-fase3-ajustes">Iniciamos nuestro recorrido en Puno</h6>
                <div className="box-mapa">
                    <figure className="mapa-peru">
                        <img src={peru} alt="" className="w-100"/>
                    </figure>
                    <figure className="mapa-item">
                        <img src={item} alt="" className=" pl-2 w-100"/>
                    </figure>
                </div>
            </div>
            <div className="box-empresas">
                <div className="box-empresa-title">
                    <h6 className="empresa-tilte">EMPRESAS</h6>
                </div>
                <div className="box-empresas-logos">
                    <figure className="logo-figure-empresa">
                        <img src={internacional} alt="" className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={libertador} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={urbanova} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={minsur} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={aporta} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={qroma} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={tasa} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={centria} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={rimac} alt=""className="w-100"/>
                    </figure>
                    <figure className="logo-figure-empresa">
                        <img src={aesa} alt=""className="w-100"/>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Fase4
