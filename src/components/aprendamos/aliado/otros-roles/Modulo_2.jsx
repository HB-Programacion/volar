import React from 'react'
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg"
import lactancia from "../../../../images/modulos-img/lactancia.svg"
import cred from "../../../../images/modulos-img/cred.svg"
import suplementos from "../../../../images/modulos-img/suplementos.svg"
import infografia from "../../../../images/modulos-img/infografia.svg"
import video from "../../../../images/modulos-img/video.svg"
import arrowLeft from "./../../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../../images/arrow-right-blue.svg";


const Modulo_2 = () => {
    let history = useHistory();
    return (
        <div className="box-modulos-aliados">
            <a href="/aprendamos/aliado/modulos">
                <i className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
            </a>
            <div className="row sin-margin-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
                    <p className="p-mobile-blue">Establecer una relación directa entre salud y desarrollo infantil temprano.</p>
                    <p className="p-mobile-blue">Emplear estrategias para promover la lactancia materna exclusiva, prolongada y el destete.</p>
                    <p className="p-mobile-blue">Comprender la importancia de asistir al establecimiento de salud para orientar a las familias que deben llevar a su niño al Control de Crecimiento y Desarrollo (CRED).</p>
                    <p className="p-mobile-blue">Manejar los mensajes sobre los mitos y efectos secundarios para asegurar el consumo de suplemento de hierro de los niños en edad de consumo.</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
                    <h3 className="title-modulos-aliados">¡No olvidar! </h3>
                    <p className="p-mobile-blue">Los 5 primeros años de vida son fundamentales para el desarrollo integral de las personas ya que se consolida la arquitectura básica del cerebro.</p>
                    <p className="p-mobile-blue">Las interacciones positivas con nuestros niños son clave para garantizar el desarrollo de su cerebro. </p>
                    <p className="p-mobile-blue">Estar atento a las miradas, gestos, balbuceos, palabras y movimientos del niño para responder con cariño y de manera oportuna. Si el niño pregunta, el cuidador principal debe responder mirando a los ojos, con atención, cariño y paciencia a sus inquietudes.</p>
                </div>
            </div>
            <figure className="flecha-abajo-aliado">
                <img src={flecha} alt="" className="w-100 m-auto"/>
            </figure>
            <h2 className="text-materiales-aliados">Materiales</h2>
            <div className="row sin-margin-row box-materiales-modulos">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                    <div>
                        <figure className="w-16 m-auto">
                            <img src={lactancia} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Lactancia Materna Exclusiva</h3>
                        <p className="subtitle-materiales-modulos">Durante los 06 primeros meses, los bebés solo deben tomar leche materna.  </p>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: beneficios de la lactancia materna en la salud del niño</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: posturas/posiciones para la lactancia</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                    <div>
                        <figure className="w-17 m-auto">
                            <img src={cred} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">CRED</h3>
                        <p className="subtitle-materiales-modulos">Motiva a los cuidadores que visitas a que  asistan a sus controles CRED. </p>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: importancia del CRED</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt="" className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Inforgrafía: CRED según edad de nacido</div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                    <div>
                        <figure className="w-12 m-auto">
                            <img src={suplementos} alt="" className="w-100"/>
                        </figure>
                        <h3 className="title-materiales-modulos">Suplementos de hierro</h3>
                        <p className="subtitle-materiales-modulos">Acompaña a las familias en su experiencia con los suplementos de hierro. </p>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: ¿Cómo afecta la anemia a los niños?: mala alimentación, influye en el desarrollo físico y emocional</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: pasos para administrar el sulfato ferrosoen los niños</div>
                    </div>
                    <div className="btn-modulos-info">
                        <figure className="btn-infografia">
                            <img src={infografia} alt=""className="w-70"/>
                        </figure>
                        <div className="btn-info-text">Infografía: efectos secundarios de los suplementos de hierro.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modulo_2
