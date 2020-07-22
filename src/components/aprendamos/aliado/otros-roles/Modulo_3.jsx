import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import autonomia from "../../../../images/modulos-img/autonomia.svg"
import video from "../../../../images/modulos-img/video.svg"


const Modulo_3 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
        <a href="/aprendamos/aliado/modulos">
            <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Definir autonomía y profundizan en la imagen de niño como un ser competente</p>
                    <p className="p-mobile-blue">Analizar cómo la imagen que tenemos de los niños se expresa en nuestra relación y en la formación de su autonomía.Entender el concepto de autonomía y sus beneficios en el desarrollo de los niños</p>
                    <p className="p-mobile-blue">Identificar y proponer estrategias para fomentar el desarrollo de la autonomía.</p>
                    <p className="p-mobile-blue">Orientar a las familias la importancia de anticipar y verbalizar con respeto y afecto durante los momentos de cuidado y juego promoviendo la autonomía según la edad de los niños.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">El niño es una persona capaz de hacer cosas por si mismo.</p>
                    <p className="p-mobile-blue">Recuerda anticipar y verbalizar cada acción que hagas con tu niño.</p>
                    <p className="p-mobile-blue">Según la edad de tu niño, permítele hacer las cosas por si mismo y ofrécele ayuda solo cuando sea necesario</p>
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
                            <img src={autonomia} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Autonomía & Imagen del Niño</h3>
                        <p className="subtitle-materiales-modulos">Durante los 06 primeros meses, los bebés solo deben tomar leche materna.  </p>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={video} alt=""className="w-80"/>
                        </figure>
                        <div className="btn-info-text">Video animado sobre autonomía</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Modulo_3
