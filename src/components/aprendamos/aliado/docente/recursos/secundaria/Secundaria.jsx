import React from 'react'
import { useHistory } from "react-router-dom";

import Compartir from "../../../compartir/Compartir";
import secundaria from "../../../../../../images/docente/secundaria.svg";

import "./Secundaria.css";

const Secundaria = () => {
    let history = useHistory();
    return (
        <div className="bg-recursos-img-secundaria animated fadeIn">
        <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        <div>
            <div className="box-title-secundaria">
                <figure className="img-secundaria">
                    <img src={secundaria} alt="secundaria-volar" className="w-100"/>
                </figure>
                <h1 className="title-secundaria" >Secundaria de 13 a 17</h1>
            </div>
            <div className="container box-btn-secundaria">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Khan Academy</h2>
                            <div className="btn-blanco-secundaria">Matemática</div>
                            <div className="btn-blanco-secundaria">Computación</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria title-none-secundaria">.</h2>
                            <div className="btn-blanco-secundaria">Ciencia</div>
                            <div className="btn-blanco-secundaria">Horarios / organización</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria title-none-secundaria">.</h2>
                            <div className="btn-blanco-secundaria">Economía y finanzas</div>
                            <div className="btn-blanco-secundaria">Educación Remota</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Perú Educa</h2>
                            <div className="btn-amarillo-secundaria">Artículos de interés</div>
                            <div  className="btn-amarillo-secundaria">Ciencia y Tecnología</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria  title-none-secundaria">.</h2>
                            <div  className="btn-amarillo-secundaria">Consejos de crianza</div>
                            <div  className="btn-amarillo-secundaria">Comunicación</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Educación 3.0</h2>
                            <div className="btn-blanco-secundaria interline-btn">Recursos educativos generales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Falabella</h2>
                            <div  className="btn-amarillo-secundaria interline-btn">Recursos educativos generales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Aprendo en casa (MINEDU)</h2>
                            <div  className="btn-blanco-secundaria">Actvidades por edad</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-secundaria">
                            <h2 className="title-btn-secundaria">Enseña Perú</h2>
                            <div className="btn-amarillo-secundaria">Recursos para padres</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-compartir-secundaria">
                <Compartir />
            </div>
            
            </div>
           
        </div>
    )
}

export default Secundaria;
