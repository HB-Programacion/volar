import React from 'react'

import "./Fase3.css"
import duracion from "../../../images/fase3-img/duracion.svg"
import articulacion from "../../../images/fase3-img/articulacion.svg"
import evaluacion from "../../../images/fase3-img/evaluacion.svg"
import mejoras from "../../../images/fase3-img/mejoras.svg"
import reforzamiento from "../../../images/fase3-img/reforzamiento.svg"
import cohete from "../../../images/fase3-img/cohete-naranja.svg"
import coheteLuna from '../../../images/cohete-stars.svg';

const Fase3 = () => {
    return (
        <div className="animated fadeIn">
            <div className="fase1 fase3-image border-bottom-radius">
                <h6 className="titulo-numero-fase">Fase 3</h6>
                <h5 className="titulo-fase tracking-in-expand-fwd-top">Refinar</h5>
                <p className="p-mobile-blue w-fase">
                    Para el año 2020, Volar recoge todos los aprendizajes obtenidos durante el 2019 para ajustar y afianzar su modelo de atención a la primera infancia de forma integral, que se acople lo mejor posible a la realidad de nuestras zonas de influencia, a las necesidades de los actores locales y comunitarios en los que nos apoyamos.
                </p>
            </div>
            <div className="box-ajustes-estructurales">
                <h6 className="title-dit title-fase3-ajustes">Los ajustes estructurales más importantes que se harán al modelo Volar, los podemos agrupar en las siguientes líneas:</h6>
                <p className="mt-2 estrellita-naranja heartbeat">&#10022;</p>
                <div className="box-ajustes">
                   <div className="box-ajustes-importantes">
                       <figure className="figure-img-ajustes">
                           <img src={duracion} alt=""/>
                       </figure>
                       <div className="box-texto-ajustes">
                           <h6 className="p-mobile-blue">Duración del programa:</h6>
                           <p className="p-mobile-blue">La intervención tendrá una duración, por lo menos, de 8 meses consecutivos.</p>
                       </div>
                   </div>
                   <div className="box-ajustes-importantes">
                       <figure className="figure-img-ajustes">
                           <img src={articulacion} alt=""/>
                       </figure>
                       <div className="box-texto-ajustes">
                           <h6 className="p-mobile-blue">Articulación de los ejes y consolidación de canales:</h6>
                           <p className="p-mobile-blue">Se trabajará Volar como un único proyecto y se transmitirá contenidos por diversos canales: tanto de interacciones de calidad, como de agua segura. </p>
                       </div>
                   </div>
                   <div className="box-ajustes-importantes">
                       <figure className="figure-img-ajustes">
                           <img src={evaluacion} alt=""/>
                       </figure>
                       <div className="box-texto-ajustes">
                           <h6 className="p-mobile-blue">Evaluación y posible incorporación de nuevas plataformas existentes:</h6>
                           <p className="p-mobile-blue">Volar propone montar la intervención sobre otras estructuras ya existentes para lograr un mayor alcance y mejores resultados (Cuna Más, CRED, Programa Juntos, entre otros).</p>
                       </div>
                   </div>
                   <div className="box-ajustes-importantes">
                       <figure className="figure-img-ajustes">
                           <img src={mejoras} alt=""/>
                       </figure>
                       <div className="box-texto-ajustes">
                           <h6 className="p-mobile-blue">Mejoras en contenidos y experiencia de usuario</h6>
                           <p className="p-mobile-blue">Estamos trabajando en la creación de una página Web y un aplicativo para las Tablets. Estas plataformas contarán con diversas herramientas.</p>
                       </div>
                   </div>
                   <div className="box-ajustes-importantes">
                       <figure className="figure-img-ajustes">
                           <img src={reforzamiento} alt=""/>
                       </figure>
                       <div className="box-texto-ajustes">
                           <h6 className="p-mobile-blue">Reforzamiento del equipo Volar </h6>
                           <p className="p-mobile-blue">Ampliación del equipo de Volar organizado en dos áreas: equipo de diseño de la intervención y ajustes; y, por otro lado, equipo de implementación en campo.</p>
                       </div>
                   </div>
                </div>
            </div>
            <div className="box-boton-fase3">
                <a href="/nosotros/fase3/modelo-volar" className="btn-modelo-volar link wobble-hor-bottom">
                    <img src={cohete} className="w-12 mr-2 heartbeat"></img>
                    Modelo volar
                </a>
            </div>
            <img src={coheteLuna} alt="" className="cohete "/>
        </div>
    )
}

export default Fase3

