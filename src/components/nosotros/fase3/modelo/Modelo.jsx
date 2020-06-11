import React from 'react'

import "./Modelo.css"

import foco from "../../../../images/fase3-img/modelo/foco-naranja.svg"
import propuesta from "../../../../images/fase3-img/modelo/propuesta-valor.svg"
import modelo from "../../../../images/fase3-img/modelo/modelo-intervencion.png"
import modeloDesktop from "../../../../images/fase3-img/modelo/modelo-intervencion-desktop.png"
import mujer from "../../../../images/fase3-img/modelo/woman-naranja.svg"
import tablet from "../../../../images/fase3-img/modelo/tablet.svg"
import grupo from "../../../../images/fase3-img/modelo/grupo.svg"
import mensajeria from "../../../../images/fase3-img/modelo/mensajeria.svg"
import radio from "../../../../images/fase3-img/modelo/radio.svg"
import feria from "../../../../images/fase3-img/modelo/feria.svg"
import starL from "../../../../images/fase3-img/modelo/star-left.svg"
import starR from "../../../../images/fase3-img/modelo/start-right.svg"


const Modelo = () => {
    return (
        <div className="fondo-circulo">
            <div className="fase2 fase3-modelo border-bottom-radius">
                <h5 className="titulo-fase titulo-fase3-modelo">Modelo volar</h5>
                <div className="box-modelo-volar">
                    <div className="box-modelo-volar-item">
                        <figure className="box-modelo-volar-item-img">
                            <img src={foco} alt=""/>
                        </figure>
                        <div className="box-modelo-volar-item-text">
                            <p className="box-modelo-volar-item-text-title">Propósito volar</p>
                            <p className="p-mobile-blue w-fase w-fase-modelo">
                                Cambiar las trayectorias de desarrollo del capital humano de las zonas de influencia del Grupo Breca e inspirar políticas públicas costo-efectivas para llevar nuestro impacto a gran escala.
                            </p>
                        </div>
                    </div>
                    <div className="box-modelo-volar-item">
                        <figure className="box-modelo-volar-item-img">
                            <img src={propuesta} alt=""/>
                        </figure>
                        <div className="box-modelo-volar-item-text">
                            <p className="box-modelo-volar-item-text-title">Propuesta de valor</p>
                            <p className="p-mobile-blue w-fase w-fase-modelo">
                                Reforzar las capacidades en las plataformas comunitarias existentes aprovechando la tecnología y fortalecer así las capacidades parentales para el desarrollo infantil temprano de las niñas y niños del país. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <h6 className="title-dit title-fase3-ajustes title-modelo-intervencion">Modelo de intervención Volar </h6>
                <p className="p-mobile-blue text-center text-modelo-intervencion">La Figura 1 muestra el panorama del modelo de intervención de Volar con los aprendizajes obtenidos del Piloto durante el 2019. </p>
                <p className="mt-2 estrellita-naranja heartbeat">&#10022;</p>
                <figure>
                    <img src={modelo} alt="" className="w-100 show-mobile"/>
                    <img src={modeloDesktop} alt="" className="w-75 hide-mobile img-intervencion"/>
                </figure>
            </div>
            <div className=" box-fase3-modelo-naranja">
                <div className="container pt-5">
                    <div className="box-title-modelo-star">
                        <img src={starL} alt="" className="starL-modelo"/>
                        <h6 className="p-mobile-white box-fase3-modelo-naranja-title ">Intervenciones principales</h6>
                        <img src={starR} alt=""className="starR-modelo"/>
                    </div>
                    <div className="box-card-group-modelo">
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={mujer} alt="" className="w-90"/>
                        </figure>
                        <div className="box-card-modelo-text">
                        <p className="p-tilte-modelo">Involucramiento y formación de aliados comunitarios;</p> 
                           <p className="p-mobile-blue">los cuales los hemos dividido en función al grupo etario al que atienden (0 a 3 y 3 a 5 años).</p>
                           <a href="/nosotros/fase3/modelo-volar/involucramiento-formacion-de-aliados-comunitarios">ver más aquí</a>
                        </div>
                    </div>
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={tablet} alt="" className=""/>
                        </figure>
                        <div className="box-card-modelo-text">
                            <p className="p-tilte-modelo">Rotación de Tablets</p> 
                            <p className="p-mobile-blue"> a familias con contenido DIT. </p> 
                            <a href="/nosotros/fase3/modelo-volar/rotacion-de-tablets">ver más aquí</a>
                        </div>
                    </div>
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={grupo} alt="" className=""/>
                        </figure>
                        <div className="box-card-modelo-text">
                            <p className="p-tilte-modelo">Grupos de interaprendizaje familiar.</p> 
                            <p></p>
                           <a href="/nosotros/fase3/modelo-volar/grupos-de-aprendizaje-familiar">ver más aquí</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <p className="mt-2 estrellita-naranja color-white heartbeat">&#10022;</p>
                <div className="container pt-4 pb-5">
                    <div className="box-title-modelo-star">
                        <img src={starL} alt="" className="starL-modelo"/>
                        <h6 className="p-mobile-white box-fase3-modelo-naranja-title ">Intervenciones complementarias</h6>
                        <img src={starR} alt=""className="starR-modelo"/>
                    </div>
                    <div className="box-card-group-modelo">
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={mensajeria} alt="" className=""/>
                        </figure>
                        <div className="box-card-modelo-text">
                        <p className="p-tilte-modelo">Programa de mensajería de texto.</p> 
                           <p className="p-mobile-blue"></p>
                           <a href="/nosotros/fase3/modelo-volar/programa-mensajeria-de-texto" className="color-fuxia">ver más aquí</a>
                        </div>
                    </div>
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={radio} alt="" className=""/>
                        </figure>
                        <div className="box-card-modelo-text">
                            <p className="p-tilte-modelo">Spots radiales a través de emisoras locales.</p> 
                            <p className="p-mobile-blue"></p> 
                            <a href="/nosotros/fase3/modelo-volar/spots-radiales" className="color-fuxia">ver más aquí</a>
                        </div>
                    </div>
                    <div className="box-card-modelo">
                        <figure className="box-card-modelo-img">
                            <img src={feria} alt="" className=""/>
                        </figure>
                        <div className="box-card-modelo-text">
                            <p className="p-tilte-modelo">Feria Familiar.</p> 
                            <p></p>
                           <a href="/nosotros/fase3/modelo-volar/feria-familiar" className="color-fuxia">ver más aquí</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Modelo
