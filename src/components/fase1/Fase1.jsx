import React from "react";

import "./fase1.css"

import modelos from "../../images/fase1-img/modelo-cultural.svg"
import mapeo from "../../images/fase1-img/mapeo.svg"
import investigacion from "../../images/fase1-img/investigacion.svg"
import info from "../../images/fase1-img/contenido_infografia1.png"
import infoDesktop from "../../images/fase1-img/infografia-desktop.png"
import starsleft from "../../images/fase1-img/stars-info-left.svg"
import starsRigth from "../../images/fase1-img/stars-info-rigth.svg"
import arrowLeft from '../../images/arrow-left-orange.svg'
import arrowRigth from '../../images/arrow-right-orange.svg';
import arrowLeftBlue from '../../images/arrow-left-blue.svg'
import arrowRightBlue from '../../images/arrow-right-blue.svg'

const Fase1 = () => {
    return(
        <div className="animated fadeIn">
            <div className="fase1 border-bottom-radius">
                <h6 className="titulo-numero-fase">Fase 1</h6>
                <h5 className="titulo-fase">Aprender</h5>
                <p className="p-mobile-blue w-fase">El objetivo de esta fase fue identificar intervenciones potencialmente efectivas para fomentar el desarrollo infantil temprano (DIT) en las zonas de influencia del grupo Breca en Perú.
                </p>
                <p className="p-mobile-blue w-fase">En esta fase, se buscó entender y reconocer la problemática del desarrollo infantil temprano, la cual es compleja, multidimensional y multiactor.</p>
            </div>
            <div className="mt-4-fase p-2">
                <h6 className="title-dit">Asimismo, esta fase contó con tres tipos de investigación para entender la problemática DIT:</h6>
            </div>
            <div className="box-fase1">
                <div className="box-fase1-dit">
                    <div>
                        <img src={modelos} className=""></img>
                    </div>
                    <p>
                        Identificar los diversos culturales que existen en las y los peruanos sobre la primera infancia. 
                    </p>
                </div>
                <div className="box-fase1-dit">
                    <div>
                        <img src={mapeo} className=""></img>
                    </div>
                    <p>
                        Mapeo y análisis de la evidencia científica sobre las intervenciones en DIT que funcionan 
                    </p>
                </div>
                <div className="box-fase1-dit">
                    <div>
                        <img src={investigacion} className=""></img>
                    </div>
                    <p>
                        Investigación etnográfica sobre el estado del DIT en las zonas de influencia
                    </p>
                </div>
            </div>
            <div className="box-infografia border-top-radius ">
                <h6>Como resultado de la evidencia y la investigación, Volar decidió enfocarse principalmente en dos ejes que denominamos Crecer Mejor y Agua Segura:</h6>
                <img src={starsleft} className="starsleft-info heartbeat"></img>
                <img src={starsRigth} className="starsRigth-info heartbeat"></img>
                <figure className="w-100">
                    <img src={info} className="w-100 hide-desktop "></img>
                    <img src={infoDesktop} className="info-desktop hide-mobile "></img>
                </figure>
                <ul className="list-info">
                    <li className="li-celeste">
                        Al enfocarnos en Agua Segura, impactamos directamente en las dimensiones del modelo de nurturing care en salud e, indirectamente, en nutrición, seguridad y protección.
                    </li>
                    <li className="li-naranja">
                        De igual forma, al intervenir en Crecer Mejor, trabajamos directamente los aspectos relacionados con el aprendizaje temprano, el apego seguro, seguridad y protección.
                    </li>
                </ul>
                <div className="box-botones-fase">
                    <a href="/" className="wobble-hor-bottom">
                        <div className="btn-fase-celeste">
                        <img src={arrowLeftBlue} className="arrow-orange"></img>
                        <div>¡Descubre los modelos culturales!</div>
                        <img src={arrowRightBlue}className="arrow-orange"></img>
                        
                        
                        </div>
                    </a>
                    <a href="/" className="wobble-hor-bottom">
                        <div className="btn-fase-naranja">
                        <img src={arrowLeft} className="arrow-orange"></img>
                        <div className="ml-2 mr-2">APRENDE MÁS</div>
                        <img src={arrowRigth}className="arrow-orange"></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Fase1;