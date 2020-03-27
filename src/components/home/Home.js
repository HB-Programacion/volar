import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import nino from '../../images/nino.png';
import proposito from '../../images/proposito.svg';
import cognitivo from '../../images/d-cognitivo.svg';
import emocional from '../../images/d-emocional.svg';
import fisico from '../../images/d-fisico.svg';
import cohete from '../../images/cohete-stars.svg';
import groupNosotros from '../../images/group-nosotros.svg';
import arrowLeft from '../../images/arrow-left-orange.svg';
import arrowRigth from '../../images/arrow-right-orange.svg';
import fabiola from '../../images/fabiola.png';
import sara from '../../images/sara.png';
import geraldine from '../../images/geraldine.png';
import aran from '../../images/aran.png';
import maria from '../../images/maria.png';
import banner1 from '../../images/banner1.png';
import bannerMobile1 from '../../images/baner-mobile1.png';




const Home = () => { 

    return (
<Router>
   <img src={nino} className="w-100 video-bg"></img>
   <div className="text-center text-white text-proposito">
       <div className="d-flex justify-content-center  text-center text-white">
            <h1>nuestro</h1>
            <img src={proposito} className="megafono" ></img>
       </div>
        <h1 className="h1-proposito">propósito</h1>
        <p>
            Darle a cada niña y niño, en su infancia temprana, la oportunidad de poder desarrollar al máximo las habilidades necesarias para su desarrollo integral. 
        </p>
        <p className="mb-4">Los bebés nacen listos para aprender.<br></br><strong>¡Y tú tienes todo para ayudarlos</strong> </p>
        
        <Link className="btn-orange text-white">
            <img src={arrowLeft} className="arrow-orange"></img>
            ¡Entérate más!
            <img src={arrowRigth}className="arrow-orange"></img>
        </Link>
   </div>
   <div className='container'>
    <div className="nosotros-home">
        <img src={groupNosotros} className="group-nosotros"></img>
        <h2>nosotros</h2>
        <p className="text-blue-volar">“Volar” es un proyecto de Aporta Desarrollo Sostenible, la plataforma de impacto social del Grupo Breca, diseñado con la intención de que las niñas y niños peruanos de 0 a 5 años alcancen su máximo potencial. </p>
        <p className="text-aguamarina estrellita">&#10022;</p>
        <p className="text-aguamarina">Está enfocado en ofrecer estrategias de crianza que fortalezcan:</p>
        <div className="box-estrategias">
            <div class="card" >
                <img src={cognitivo} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Desarrollo cognitivo</p>
                </div>
            </div>
            <div class="card" >
                <img src={emocional} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Desarrollo Socio-emocional</p>
                </div>
            </div>
            <div class="card" >
                <img src={fisico} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text">Desarrollo Físico </p>
                </div>
            </div>
        </div>
        <Link className="btn-orange text-white">
            <img src={arrowLeft} className="arrow-orange"></img>
            nuestra historia
            <img src={arrowRigth}className="arrow-orange"></img>
        </Link>
        <img src={cohete} className="cohete"></img>
    </div>
   </div>
   <div className="equipo-home">
        <h2>nuestro equipo</h2>
        <div class="container ">
            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                <div class="controls-top">
                    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                </div>

                <ol class="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                    <li data-target="#multi-item-example" data-slide-to="3"></li>
                    <li data-target="#multi-item-example" data-slide-to="4"></li>
                </ol>

                <div class="carousel-inner" role="listbox">

                    <div class="carousel-item active">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img class="card-img-top" src={fabiola}
                                        alt="Card image cap"/>
                                    <div class="card-body">
                                        <h6 class="card-title">Fabiola<br></br> Cáceres Gerenta</h6>
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

   <div className="momento-home">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={bannerMobile1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption  d-md-block">
                        <h5>First slide label</h5>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                    
                </div>
                <div class="carousel-item">
                    <img src={bannerMobile1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption  d-md-block">
                        <h5>Second slide label</h5>
                        <Link className="btn-orange text-white">
                            <img src={arrowLeft} className="arrow-orange"></img>
                                ¡Aprendamos a hacerlo!
                            <img src={arrowRigth}className="arrow-orange"></img>
                        </Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={bannerMobile1} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption  d-md-block">
                        <h5>Third slide label</h5>
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
  
   

</Router>
)}
export default Home;