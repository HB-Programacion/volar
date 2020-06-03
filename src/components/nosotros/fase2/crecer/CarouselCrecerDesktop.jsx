import React from 'react'

import talleres from "../../../../images/crecer-img/talleres-presenciales.png"
import videos from "../../../../images/crecer-img/videos-cortos.png"
import mensajeria from "../../../../images/crecer-img/mensajeria.png"
import radio from "../../../../images/crecer-img/radio.png"


const CarouselCrecerDesktop = () => {
    return (
        <>
            <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">

                        <div className="row">
                            <div className="col-md-4 ">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={talleres}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={videos}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={mensajeria}
                                        alt="Card image cap"/>
                                </div>
                            </div>
                        </div>

                    </div>
   
                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={videos}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={mensajeria}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={radio}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={mensajeria}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={radio}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={talleres}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="carousel-item">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={radio}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={talleres}
                                        alt="talleres-presenciales"/>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix clearfix d-none d-md-block">
                                <div className="card mb-2 card-crecer">
                                        <img className="card-img-top " src={videos}
                                        alt="Card image cap"/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        </>
    )
}

export default CarouselCrecerDesktop
