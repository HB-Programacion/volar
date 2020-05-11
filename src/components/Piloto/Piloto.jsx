import React from 'react'

import "./Piloto.css"

import logo from "../../images/piloto-img/logo-piloto.svg"
import factibilidad from "../../images/piloto-img/factibilidad.svg"
import analizar from "../../images/piloto-img/analizar.svg"
import identificar from "../../images/piloto-img/identificar.svg"
import card41 from "../../images/piloto-img/41.png"
import card77 from "../../images/piloto-img/77.png"
import card76 from "../../images/piloto-img/76.png"
import card5457 from "../../images/piloto-img/5457.png"
import card2091 from "../../images/piloto-img/2091.png"
import card144 from "../../images/piloto-img/144.png"
import card36 from "../../images/piloto-img/36.png"
import card80 from "../../images/piloto-img/80.png"
import card126 from "../../images/piloto-img/126.png"
import card17 from "../../images/piloto-img/17.png"

const Piloto = () => {
    return (
        <div className="fondo-blanco animated fadeIn">
            <div className="fase2-piloto border-bottom-radius">
                <div className="fase2-piloto-title">
                    <div className="logo-piloto">
                        <img src={logo} className="w-100 slide-in-left"></img>
                    </div>
                    <div>
                        <div className="fase2-probar">Fase 2 - Probar</div>
                        <div className="fase2-title-piloto  tracking-in-expand-fwd-top">El piloto</div>
                    </div>
                </div>
                <div className="box-fase2-piloto">
                    <p className="p-mobile-blue mt-2">Con el apoyo de Minsur, el piloto tuvo lugar en Puno, específicamente en las localidades de Nuñoa, Antauta y Ajoyani, entre septiembre del 2019 y enero del 2020.</p>
                    <p className="p-mobile-blue mt-2">Nos propusimos poner en marcha un modelo basado en 4 intervenciones para Crecer Mejor y 4 para Agua Segura y así identificar los retos de la implementación y ajustes de diseño: </p>
                </div>
                
            </div>
            <div>
                <p className=" estrellita-amarilla">&#10022;</p>
                <h6 className="title-piloto">Este piloto persiguió tres objetivos:</h6>
                <div className="box-objetivo-piloto">
                    <div className="objetivo-piloto">
                        <figure className="objetivo-piloto-img">
                            <img src={factibilidad} alt="" className="w-100"/>
                        </figure>
                        <div className="objetivo-piloto-p">
                            <p className="p-mobile-blue">
                            Evaluar la factibilidad y eficiencia de los canales de llegada a las familias
                            </p>
                        </div> 
                    </div>
                    <div className="objetivo-piloto">
                        <figure className="objetivo-piloto-img">
                            <img src={analizar} alt="" className="w-90"/>
                        </figure>
                        <div className="objetivo-piloto-p">
                            <p className="p-mobile-blue">
                                Analizar el nivel de comprensión y utilidad del contenido 
                            </p>
                        </div>
                    </div>
                    <div className="objetivo-piloto">
                        <figure className="objetivo-piloto-img">
                            <img src={identificar} alt="" className="w-100"/>
                        </figure>
                        <div className="objetivo-piloto-p">
                            <p className="p-mobile-blue">
                                Identificar cambios en conocimientos y conductas asociados a DIT
                            </p>
                        </div>
                    </div>
                </div>
                <p className=" estrellita-amarilla">&#10022;</p>
                <h6 className="title-piloto">Resultados del piloto:</h6>
                <div className="container text-center mt-2">
                    <p className=" p-mobile-blue">En total han sido 1,150 niños y niñas beneficiados por el alcance del piloto en sus ocho intervenciones.</p>
                </div>

                <div className="carousel-piloto">
                <div className="container ">
                    <div id="multi-item-example" className="carousel slide carousel-multi-item carousel-crecer" data-ride="carousel">
                <div className="controls-top controls-piloto">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>

                <ol className="carousel-indicators point-piloto">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                    <li data-target="#multi-item-example" data-slide-to="3"></li>
                    <li data-target="#multi-item-example" data-slide-to="4"></li>
                    <li data-target="#multi-item-example" data-slide-to="5"></li>
                    <li data-target="#multi-item-example" data-slide-to="6"></li>
                    <li data-target="#multi-item-example" data-slide-to="7"></li>
                    <li data-target="#multi-item-example" data-slide-to="8"></li>
                    <li data-target="#multi-item-example" data-slide-to="9"></li>
                </ol>

                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">

                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card41}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card76}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                        </div>

                    </div>
   
                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card77}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card5457}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card76}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card2091}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card5457}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                        <img className="card-img-top " src={card144}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card2091}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card36}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card144}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card80}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card36}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card126}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card80}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card17}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card126}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card41}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card17}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-6 clearfix d-none d-md-block">
                                <div className="card mb-2 card-piloto">
                                    <img className="card-img-top " src={card77}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
        </div>
                
            </div>
        </div>
    )
}

export default Piloto
