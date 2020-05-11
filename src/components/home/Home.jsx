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

import banner1 from '../../images/banner1.png';
import bannerMobile1 from '../../images/baner-mobile1.png';
import Nosotros from "../nosotros/Nosotros"
import starLeft from "../../images/home-img/star-left.svg"
import starRight from "../../images/home-img/star-right.svg"
// import bannerDesktop from '../../images/home-img/foto_banner_propuesta.png';
import bannerDesktop from '../../images/home-img/imagen_1920.png'
import share from "../../images/home-img/share-morado.svg"
import tituloHome from "../../images/home-img/titulo_home.png"
import CarouselMobile from "./CarouselMobile";
import CarouselDesktop from "./CarouselDesktop";

const Home = () => { 

    const width = window.innerWidth;
    const breakpoint = 769;

    return (
        <div className="animated fadeIn">
            <figure className="video-bg">
                {/* <img src={nino} className="w-100 "></img> */}
            </figure>
             <div className="text-center text-white text-proposito">
                <div className="d-flex justify-content-center  text-center text-white">
                    {/* <h1 className="hide-desktop">nuestro</h1> */}
                    {/* <img src={proposito} className="megafono hide-desktop" ></img> */}
                    <img src={tituloHome} alt=""className="titulo-home tracking-in-expand-fwd-top"/>
                </div>
                    {/* <h1 className="h1-proposito hide-desktop">propósito</h1> */}
                <p className="">
                    Darle a cada niña y niño, en su infancia temprana, la oportunidad de poder desarrollar al máximo las habilidades necesarias para su desarrollo integral. 
                </p>
                <p className="">Los bebés nacen listos para aprender.<br></br><strong className="fuerte-desktop">¡Y tú tienes todo para ayudarlos!</strong> </p>
        
                <Link to="/"className="btn-orange text-white wobble-hor-bottom">
                    <img src={arrowLeft} className="arrow-orange"></img>
                        ¡Entérate más!
                    <img src={arrowRigth}className="arrow-orange"></img>
                </Link>
            </div>
            <div className='container'>
                <div className="nosotros-home">
                    <figure className="stars-home">
                        <img src={starLeft} className="star-left heartbeat"></img>
                        <img src={starRight} className=" star-right heartbeat"></img>
                    </figure>
        
                    <h2 className="mt-nosotros">nosotros</h2>
                    <p className="text-blue-volar">“Volar” es un proyecto de Aporta Desarrollo Sostenible, la plataforma de impacto social del Grupo Breca, diseñado con la intención de que las niñas y niños peruanos de 0 a 5 años alcancen su máximo potencial. </p>
                    <p className="text-aguamarina estrellita-home">&#10022;</p>
                    <p className="text-aguamarina subtitulo-home">Está enfocado en ofrecer estrategias de crianza que fortalezcan:</p>
                    <div className="box-estrategias">
                        <div className="card img-des-cognitivo" >
                            <img src={cognitivo} className="card-img-top mt-1 " alt="..."/>
                            <div className="card-body">
                                <p className="card-text card-text-home">Desarrollo<br></br> cognitivo</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src={emocional} className="card-img-top " alt="..."/>
                            <div className="card-body">
                                <p className="card-text card-text-home">Desarrollo<br></br> Socio-emocional</p>
                            </div>
                        </div>
                        <div className="card img-des-fisico" >
                            <img src={fisico} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text card-text-home">Desarrollo<br></br> Físico </p>
                            </div>
                        </div>
                    </div>
                    <a href="/nosotros" className="btn-orange text-white wobble-hor-bottom">
                        <img src={arrowLeft} className="arrow-orange"></img>
                            nuestra historia
                        <img src={arrowRigth}className="arrow-orange"></img>
                    </a>
                    <img src={cohete} className="cohete "></img>
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
                                <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                                <li data-target="#multi-item-example" data-slide-to="1"></li>
                                <li data-target="#multi-item-example" data-slide-to="2"></li>
                                <li data-target="#multi-item-example" data-slide-to="3"></li>
                                <li data-target="#multi-item-example" data-slide-to="4"></li>
                            </ol>
                            {width < breakpoint  ? <CarouselMobile /> : <CarouselDesktop />}
                        </div>
                    </div> 
            </div>

   <div className="momento-home show-mobile">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item img-banner active">
                    <img src={bannerMobile1} className="d-block w-100 " alt="..." />
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
                        <Link to="/"className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                    
                </div>
                <div className="carousel-item">
                    <img src={bannerMobile1} className="d-block w-100" alt="..."/>
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
                        <Link to="/"className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bannerMobile1} className="d-block w-100" alt="..."/>
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
                        <Link to="/" className="btn-orange text-white">
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

   <div className="momento-home hide-mobile">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item  active">
                    <img src={bannerDesktop} className="d-block w-100 " alt="..." />
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
                        <Link to="/" className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                    
                </div>
                <div className="carousel-item">
                    <img src={bannerDesktop} className="d-block w-100" alt="..."/>
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
                        <Link to="/" className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bannerDesktop} className="d-block w-100" alt="..."/>
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
                        <Link to="/" className="btn-orange text-white">
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
 
</div>
)}
export default Home;