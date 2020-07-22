import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import cred from "../../../../images/modulos-img/cred.svg"
import infografia from "../../../../images/modulos-img/infografia.svg"
import video from "../../../../images/modulos-img/video.svg"


const Modulo_8 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
            <a href="/aprendamos/aliado/modulos">
                <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
            </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Identificar y reevaluar actitudes y estrategias de redirección de conducta, teniendo como base la disciplina positiva para favorecer el desarrollo emocional de los niños. </p>
                    <p className="p-mobile-blue">Construir estrategias para mejorar su práctica disciplinar con los niños.</p>
                    <p className="p-mobile-blue">Desarrollar la habilidad para hacer uso de estrategias que permitan dar respuesta ante la presencia de algunas emociones en los niños, reconociendo el rol del adulto en el proceso del desarrollo de la autorregulación y autocontrol de su conducta.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">Recuerda transmitirles confianza a tus hijos y no llamarles la atención cuando, por ejemplo, se hagan sus necesidades en la ropa.</p>
                    <p className="p-mobile-blue">Podemos desarrollar las habilidades sociales y de control de nuestros hijos jugando con ellos en familia. </p>
                    <p className="p-mobile-blue">Ayudar a nuestros niños a regular las emociones y comportamientos en situaciones de frustración estableciendo límites con cariño.</p>
                </div>
            </div>
            <figure className="flecha-abajo-aliado">
                <img src={flecha} alt="" className="w-100 m-auto"/>
            </figure>
            <h2 className="text-materiales-aliados">Materiales</h2>
            <div className="row sin-margin-row box-materiales-modulos">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 m-auto">
                    <div>
                        <figure className="w-17 m-auto">
                            <img src={cred} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Disciplina Positiva</h3>
                        <p className="subtitle-materiales-modulos">Infografía: 5 pasos para aplicar disciplina positiva</p>
                    </div>
                </div>
            </div>
            <div className="box-modulos-info-videos">
                <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={video} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Video Animado sobre Disciplina Positiva</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: secuencia de acciones: importancia de la comunicación</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: consejos para explicaciones claras?</div>
                    </div>
            </div>
        </div>
    )
}

export default Modulo_8
