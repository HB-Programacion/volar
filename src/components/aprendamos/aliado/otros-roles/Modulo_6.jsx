import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import juego from "../../../../images/modulos-img/juego.svg"
import infografia from "../../../../images/modulos-img/infografia.svg"
import video from "../../../../images/modulos-img/video.svg"

const Modulo_6 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
         <a href="/aprendamos/aliado/modulos">
            <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Conocer y valorar la importancia del juego para el aprendizaje y desarrollo de habilidades emocionales, cognitivas y motrices durante la infancia.</p>
                    <p className="p-mobile-blue">Orientar al cuidador principal para que juegue y se comunique con su niño, respondiendo a sus intereses y necesidades.</p>
                    <p className="p-mobile-blue">Generar condiciones para disponer espacios seguros dentro del hogar para los niños.</p>
                    <p className="p-mobile-blue">Aprender a identificar si un espacio está bien acondicionado para promover el juego y movimiento del niño.</p>
                    <p className="p-mobile-blue">Practicar formas de elogiar a los niños durante los momentos de cuidado y juego, promoviendo su disfrute.</p>
                    <p className="p-mobile-blue">Promover formas de juego libre y estructurado con los niños de acuerdo a sus edades e intereses</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">El juego es una acción voluntaria, espontánea y placentera en la cual el niño recrea y transforma la realidad, representando sus vivencias.</p>
                    <p className="p-mobile-blue">Cuando los niños juegan, aprenden y desarrollan sus capacidades motrices, cognitivas, socioemocionales y comunicativas.</p>
                    <p className="p-mobile-blue">Es importante que durante el juego de tu niña o niño lo acompañes observando, y si te invita a jugar dile lo que está realizando en su juego.</p>
                    <p  className="p-mobile-blue">El “espacio para el juego de la niña o niño” debe tener como mínimo: un cartel con el nombre del niño/a, una bolsita o caja para poner los juguetes, piso cálido protegido por una mantita u otro similar que permita el movimiento libre del niño y que sea seguro.</p>
                    <p  className="p-mobile-blue">El espacio de juego del niño debe ser un lugar limpio y seguro. </p>
                </div>
            </div>
            <figure className="flecha-abajo-aliado">
                <img src={flecha} alt="" className="w-100 m-auto"/>
            </figure>
            <h2 className="text-materiales-aliados">Materiales</h2>
            <div className="row sin-margin-row box-materiales-modulos">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 m-auto">
                    <div>
                        <figure className="w-18 m-auto">
                            <img src={juego} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Juego</h3>
                        <p className="subtitle-materiales-modulos">Durante los 06 primeros meses, los bebés solo deben tomar leche materna.  </p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="box-modulos-info-videos">
                <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={video} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Video: introducción al juego: porqué es importante para el desarrollo de los niños y las niñas</div>
                    </div>
                <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía Juego Libre: beneficios del juego libre en el desarrollo de los niños</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía Juego estructrado: beneficios del juego estructurado en el desarrollo de los niños</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: ¿Qué pasa cuando los niños dejan de jugar?</div>
                    </div>
            </div>
        </div>
    )
}

export default Modulo_6
