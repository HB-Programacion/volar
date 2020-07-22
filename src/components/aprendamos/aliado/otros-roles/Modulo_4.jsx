import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import rutinas from "../../../../images/modulos-img/rutinas.svg"
import infografia from "../../../../images/modulos-img/infografia.svg"


const Modulo_4 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
        <a href="/aprendamos/aliado/modulos">
            <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Formular y practicar estrategias para incrementar las oportunidades de aprendizaje en comunicación, desarrollo emocional y vínculo con los niños durante la rutina.</p>
                    <p className="p-mobile-blue">Construir estrategias que fomenten la autonomía durante los momentos de cuidado que le brindamos a los niños.</p>
                    <p className="p-mobile-blue">Identificar el rol de los adultos en los momentos de rutina y cuidado.</p>
                    <p className="p-mobile-blue">Desarrollar la habilidad de responder al niño, a través de la comunicación verbal, reconociendo la importancia de llamar al niño por su nombre y tener un trato afectuoso en los momentos de cuidado.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">Recuerda anticipar y verbalizar cada acción que realices durante los distinto momentos de cuidado.</p>
                    <p className="p-mobile-blue">Contarles cuentos a los niños ayuda desarrollar su cerebro y es un momento de compartir emociones, también permítele que cuente la historia a su modo.</p>
                    <p className="p-mobile-blue">Según la edad de nuestros niños podemos invitarlos a participar en las actividades cotidianas del hogar.</p>
                </div>
            </div>
            <figure className="flecha-abajo-aliado">
                <img src={flecha} alt="" className="w-100 m-auto"/>
            </figure>
            <h2 className="text-materiales-aliados">Materiales</h2>
            <div className="row sin-margin-row box-materiales-modulos">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 m-auto">
                    <div>
                        <figure className="w-20 m-auto">
                            <img src={rutinas} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Rutinas</h3>
                        <p className="subtitle-materiales-modulos">Infografía: beneficios de las rutinas para los niños </p>
                    </div>
                </div>
            </div>
            <div className="box-modulos-info-videos">
                <div className="btn-modulos-info">
                    <figure className="btn-infografia">
                        <img src={infografia} alt=""className="w-70"/>
                    </figure>
                    <div className="btn-info-text">Infografía: pasos para crear una rutina diaria</div>
                </div>
                <div className="btn-modulos-info">
                    <figure className="btn-infografia">
                        <img src={infografia} alt="" className="w-70"/>
                    </figure>
                <div className="btn-info-text">Infografía: posturas/posiciones para la lactancia</div>
                </div>
            </div>
        </div>
    )
}

export default Modulo_4
