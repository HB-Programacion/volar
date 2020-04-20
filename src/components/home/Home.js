import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./home.css"
import nino from '../../images/home-img/nino2.png';
import proposito from '../../images/home-img/proposito.svg';
import cognitivo from '../../images/home-img/d-cognitivo.svg';
import emocional from '../../images/home-img/d-emocional.svg';
import fisico from '../../images/home-img/d-fisico.svg';
import cohete from '../../images/cohete-stars.svg';
import groupNosotros from '../../images/group-nosotros.svg';
import arrowLeft from '../../images/arrow-left-orange.svg';
import arrowRigth from '../../images/arrow-right-orange.svg';
import fabiola from '../../images/equipo/fabiola.png';
import sara from '../../images/equipo/sara.png';
import geraldine from '../../images/equipo/geraldine.png';
import aran from '../../images/equipo/aran.png';
import maria from '../../images/equipo/maria.png';
import banner1 from '../../images/banner1.png';
import bannerMobile1 from '../../images/baner-mobile1.png';
import Nosotros from "../nosotros/Nosotros"
import starLeft from "../../images/home-img/star-left.svg"
import starRight from "../../images/home-img/star-right.svg"
import bannerDesktop from '../../images/home-img/foto-banner1.png';
import share from "../../images/home-img/share-morado.svg"

const Home = () => { 

    return (
<>
    <figure className="video-bg">
        {/* <img src={nino} className="w-100 "></img> */}
    </figure>
   <div className="text-center text-white text-proposito">
       <div className="d-flex justify-content-center  text-center text-white">
            <h1>nuestro</h1>
            <img src={proposito} className="megafono" ></img>
       </div>
        <h1 className="h1-proposito">propósito</h1>
        <p>
            Darle a cada niña y niño, en su infancia temprana, la oportunidad de poder desarrollar al máximo las habilidades necesarias para su desarrollo integral. 
        </p>
        <p className="m-b-xs mt-4-xl">Los bebés nacen listos para aprender.<br></br><strong>¡Y tú tienes todo para ayudarlos!</strong> </p>
        
        <Link className="btn-orange text-white">
            <img src={arrowLeft} className="arrow-orange"></img>
            ¡Entérate más!
            <img src={arrowRigth}className="arrow-orange"></img>
        </Link>
   </div>
   <div className='container'>
    <div className="nosotros-home">
    <figure className="stars-home">
            <img src={starLeft} className="star-left"></img>
           <img src={starRight} className=" star-right"></img>
    </figure>
        
        <h2 className="mt-nosotros">nosotros</h2>
        <p className="text-blue-volar">“Volar” es un proyecto de Aporta Desarrollo Sostenible, la plataforma de impacto social del Grupo Breca, diseñado con la intención de que las niñas y niños peruanos de 0 a 5 años alcancen su máximo potencial. </p>
        <p className="text-aguamarina estrellita">&#10022;</p>
        <p className="text-aguamarina">Está enfocado en ofrecer estrategias de crianza que fortalezcan:</p>
        <div className="box-estrategias">
            <div className="card" >
                <img src={cognitivo} className="card-img-top mt-1" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Desarrollo<br></br> cognitivo</p>
                </div>
            </div>
            <div className="card" >
                <img src={emocional} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Desarrollo<br></br> Socio-emocional</p>
                </div>
            </div>
            <div className="card" >
                <img src={fisico} clasName="card-img-top mt-1" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Desarrollo<br></br> Físico </p>
                </div>
            </div>
        </div>
        <Link to="/nosotros" className="btn-orange text-white">
            <img src={arrowLeft} className="arrow-orange"></img>
            nuestra historia
            <img src={arrowRigth}className="arrow-orange"></img>
        </Link>
        <img src={cohete} className="cohete"></img>
    </div>
   </div>
   <div className="equipo-home">
        <h2>nuestro equipo</h2>
        <div className="container box-equipo-desktop">
            <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>

                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                    <li data-target="#multi-item-example" data-slide-to="3"></li>
                    <li data-target="#multi-item-example" data-slide-to="4"></li>
                </ol>

                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src={fabiola}
                                        alt="Card image cap"/>
                                    <div className="card-body">
                                        <h6 className="card-title">Fabiola<br></br> Cáceres Gerenta</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={sara}
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Sara Sarfaty <br></br>Coordinadora<br></br> de Diseño</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={geraldine}
                                    alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Geraldine Guzmán<br></br> Coordinadora de Implementación</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
   
                    <div class="carousel-item">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={aran}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Arturo Martínez<br></br> Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={maria}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">María Guadalupe<br></br>Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={fabiola}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Fabiola<br></br> Cáceres Gerenta</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="carousel-item">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={sara}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Sara Sarfaty <br></br>Coordinadora<br></br> de Diseño</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={geraldine}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Geraldine Guzmán<br></br> Coordinadora de Implementación</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={aran}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Arturo Martínez<br></br> Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="carousel-item">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={maria}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">María Guadalupe<br></br> Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={fabiola}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Fabiola Cáceres<br></br> Gerenta</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={sara}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Sara Sarfaty<br></br> Coordinadora<br></br> de Diseño</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="carousel-item">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={geraldine}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Geraldine Guzmán<br></br> Coordinadora de Implementación</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={aran}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Arturo Martínez<br></br> Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 clearfix clearfix d-none d-md-block">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={maria}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">María Guadalupe<br></br> Analista de Proyecto</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
   </div>

   <div className="momento-home show-mobile">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item img-banner active">
                    <img src={bannerMobile1} class="d-block w-100 " alt="..." />
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div class="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <img src={bannerMobile1} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div class="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={bannerMobile1} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div class="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
   </div>

   <div className="momento-home hide-mobile">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item img-banner active">
                    <img src={bannerDesktop} class="d-block w-100 " alt="..." />
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div class="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <img src={bannerDesktop} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div class="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={bannerDesktop} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption-text">
                        <h2>¡Cada momento cuenta!</h2>
                        <p>¿Sabías que tus actividades cotidianas son oportunidades para el desarrollo del cerebro de tus hijas e hijos?</p>
                    </div>
                    <div className="carousel-caption  d-md-block">
                        <div className="box-title-slide">
                            <figure className=" share ">
                                <img src={share} className="share-img"></img>
                            </figure>
                            <h4 className="title-slide">Habla, canta y señala</h4>
                        </div>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
   </div>
 
</>
)}
export default Home;