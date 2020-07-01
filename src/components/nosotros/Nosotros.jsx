import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./nosotros.css"

import info1 from "../../images/nosotros-img/info-1.png"
import crecer from "../../images/nosotros-img/crecer.svg"
import agua from "../../images/nosotros-img/agua-segura.svg"
import arrowLeft from '../../images/arrow-left-orange.svg';
import arrowRigth from '../../images/arrow-right-orange.svg';
import starsLeftDesktop from "./../../images/stars-left-desktop.svg";
import starsRightDesktop from "./../../images/stars-right-desktop.svg";
import starsRight from "../../images/stars-right.svg"

const Nosotros = () => {
    return(
        <div id="nosotros-page">
            <div id="tittle-nosotros" className="box-title animated fadeIn mt-3">
            <figure className="stars-group">
                <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img>
                <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img>
            </figure>
                <img src={starsRight} className="left-star heartbeat" alt="stars-left"></img>
                <h1 className="title title-nosotros tracking-in-expand-fwd-top">nosotros</h1>
                <img src={starsRight} className="right-star heartbeat" alt="stars-right"></img>
            </div>
            <div className="mt-3 video">
                <div className="video-responsive">
                    <iframe src="https://www.youtube.com/embed/XOIlfPB7ezs?mute=1;autoplay=1"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                    {/* <iframe  src="https://www.youtube.com/watch?v=nNdYfFO10d8&feature=youtu.be&t=1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
                <p className="text-white name-video">Video Volar - ¿Quiénes somos? </p>
                <div className="container">
                    <div className=" p-mobile-blue"> 
                        <p>Desde su creación, el proyecto VOLAR fue concebido como un modelo de sostenibilidad transversal y escalable, enfocado en ofrecer a las familias de nuestras zonas de influencia la oportunidad de que sus hijas e hijos puedan alcanzar su máximo potencial.</p>
                        <p>Para ello, reforzamos las capacidades en las plataformas comunitarias existentes aprovechando la tecnología y fortalecer así las capacidades parentales para el desarrollo infantil temprano de los niños y niñas</p>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-5 pb-5 border-top-radius border-bottom-radius adelante">
                <div className="container">
                    <h6 className="p-mobile-blue letra-gruesa-azul title-h6">Trabajamos las 5 dimensiones del modelo Nuturing Care, con énfasis en:</h6>
                    <figure className="p-2 w-100">
                        <img src={info1} className=" info-1"></img>
                    </figure>
                    <div className="div-items">
                        <div className="box-crecer-agua crecer-left">
                            <figure className=" box-img-info text-right">
                                <img src={crecer} className="w-100 crecer"></img>
                            </figure >
                            <div className="w-65 box-orange">Interacciones de calidad para el desarrollo cognitivo y socioemocional. </div>
                        </div>
                        <div className="box-crecer-agua crecer-right">
                            <figure className=" box-img-info text-right box-gota-agua">
                                <img src={agua} className="w-100 agua"></img>
                            </figure >
                            <div className="w-65 box-blue ">Higiene y agua segura para el desarrollo físico. </div>
                        </div>
                    </div>
                    <p className="mt-2 estrellita heartbeat">&#10022;</p>
                    <div className="container m2-desktop">
                        <p className="p-mobile-blue text-info-bottom">
                            Mamás, papás, maestras, madres cuidadoras, agentes comunitarias de salud y Volar, trabajamos 
                            juntos para fortalecer las capacidades de crianza que aseguran el 
                            desarrollo óptimo de cada niña y niño del país.
                        </p>
                    </div>
                </div>
            </div>
            <div className="cohete-fondo ">
                {/* <figure className="w-100 m-0 ">
                    <img src={cohete} className="w-100"></img>
                </figure> */}
                <div className="cohete-right ">
                    <div className="cohete1">
                        <div className="title-cohete-1">
                            <div className="numero-cohete heartbeat">1</div>
                            <div className="fase-cohete">Fase Aprender</div>
                        </div>
                        <a href="/nosotros/fase1" className="btn-cohete">
                            <img src={arrowLeft} className="arrow-orange-cohete"></img>
                            ver más
                            <img src={arrowRigth}className="arrow-orange-cohete"></img>
                        </a>
                    </div>
                </div>

                <div className="cohete-left">
                    <div className="cohete2">
                        <div className="title-cohete-2">
                            <div className="numero-cohete heartbeat">2</div>
                            <div className="fase-cohete left-5-rem">Fase Probar</div>
                        </div>
                        <a href="/nosotros/fase2" className="btn-cohete">
                            <img src={arrowLeft} className="arrow-orange-cohete"></img>
                            ver más
                            <img src={arrowRigth}className="arrow-orange-cohete"></img>
                        </a>
                    </div>
                </div>

                <div className="cohete-right3">
                    <div className="cohete3">
                        <div className="title-cohete-1 title-cohete-3">
                            <div className="numero-cohete heartbeat">3</div>
                            <div className="fase-cohete left-5-rem">Fase Refinar</div>
                        </div>
                        <a href="/nosotros/fase3"className="btn-cohete">
                            <img src={arrowLeft} className="arrow-orange-cohete"></img>
                            ver más
                            <img src={arrowRigth}className="arrow-orange-cohete"></img>
                        </a>
                    </div>
                </div>

                <div className="cohete-left4">
                    <div className="cohete2 cohete4">
                        <div className="title-cohete-2 ">
                            <div className="numero-cohete heartbeat">4</div>
                            <div className="fase-cohete fase-cohete-4">Fase<br></br> Evaluar y Escalar</div>
                        </div>
                        <a href="/nosotros/fase4" className="btn-cohete">
                            <img src={arrowLeft} className="arrow-orange-cohete"></img>
                            ver más
                            <img src={arrowRigth}className="arrow-orange-cohete"></img>
                        </a>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Nosotros;