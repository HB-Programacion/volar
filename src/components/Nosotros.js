import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import starsLeft from "../images/stars-left.svg"
import starsRight from "../images/stars-right.svg"
import video from "../images/video-nosotros.png"
import info1 from "../images/info-1.png"
import crecer from "../images/crecer.svg"
import agua from "../images/agua-segura.svg"
import cohete from "../images/cohete_fondo.png"
import arrowLeft from '../images/arrow-left-orange.svg';
import arrowRigth from '../images/arrow-right-orange.svg';

const Nosotros = () => {
    return(
        <div id="nosotros-page">
            <div className="box-title">
                <img src={starsLeft}className="left-star"></img>
                <h1 className="title">nosotros</h1>
                <img src={starsRight}className="right-star"></img>
            </div>
            <div className="mt-3 ">
                <img src={video} className="video"></img>
                <p className="text-white">Video Volar - ¿Quiénes somos? </p>
                <div className="container">
                    <div className="p-2 p-mobile-blue"> 
                        <p>Desde su creación, el proyecto VOLAR fue concebido como un modelo de sostenibilidad transversal y escalable, enfocado en ofrecer a las familias de nuestras zonas de influencia la oportunidad de que sus hijas e hijos puedan alcanzar su máximo potencial.</p>
                        <p>Para ello, reforzamos las capacidades en las plataformas comunitarias existentes aprovechando la tecnología y fortalecer así las capacidades parentales para el desarrollo infantil temprano de los niños y niñas</p>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-5 pb-5 border-top-radius border-bottom-radius">
                <div className="container">
                    <h6 className="p-mobile-blue letra-gruesa-azul">Trabajamos las 5 dimensiones del modelo Nuturing Care, con énfasis en:</h6>
                    <figure className="p-2">
                        <img src={info1} className="w-100"></img>
                    </figure>
                    <div className="mt-5">
                        <div className="box-crecer-agua">
                            <figure className="w-35 text-right">
                                <img src={crecer} className="w-40"></img>
                            </figure >
                            <div className="w-65 box-orange mt-1">Interacciones de calidad para el desarrollo cognitivo y socioemocional. </div>
                        </div>
                        <div className="box-crecer-agua">
                            <figure className="w-35 text-right">
                                <img src={agua} className="w-30"></img>
                            </figure >
                            <div className="w-65 box-blue mt-1">Higiene y agua segura para el desarrollo físico. </div>
                        </div>
                    </div>
                    <p className="mt-2 estrellita">&#10022;</p>
                    <div className="container">
                        <p className="p-mobile-blue">
                            Mamás, papás, maestras, madres cuidadoras, agentes comunitarias de salud y Volar, trabajamos 
                            juntos para fortalecer las capacidades de crianza que aseguran el 
                            desarrollo óptimo de cada niña y niño del país.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <figure className="w-100 m-0">
                    <img src={cohete} className="w-100"></img>
                </figure>
                <div className="cohete1">
                    <div className="title-cohete-1">
                        <div className="numero-cohete">1</div>
                        <div className="fase-cohete">Fase Aprende</div>
                    </div>
                    <Link className="">
                        <img src={arrowLeft} className="arrow-orange"></img>
                        ver más
                        <img src={arrowRigth}className="arrow-orange"></img>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Nosotros;