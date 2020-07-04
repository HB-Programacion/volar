import React from 'react'
import { useHistory } from "react-router-dom";

import Compartir from "../../../compartir/Compartir";
import primaria from "../../../../../../images/docente/primaria.svg";

import "./Primaria.css";

const Primaria = () => {
    let history = useHistory();
    return (
        <div className="bg-recursos-img-primaria animated fadeIn">
        <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        <div>
            <div className="box-title-primaria">
                <figure className="img-primaria">
                    <img src={primaria} alt="primaria-volar" className="w-100"/>
                </figure>
                <h1 className="title-primaria" >Primaria de 6 a 12</h1>
            </div>
            <div className="container box-btn-primaria">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Khan Academy</h2>
                            <div className="btn-blanco-primaria">Horarios / organización</div>
                            <div className="btn-blanco-primaria">Educación Remota</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Perú Educa</h2>
                            <div className="btn-fuxia-primaria">Artículos de interés</div>
                            <div  className="btn-fuxia-primaria">Actividades juntos</div>
                            <div  className="btn-fuxia-primaria">Ciencia y Tecnología</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria  title-none-primaria">.</h2>
                            <div  className="btn-fuxia-primaria">Consejos de crianza</div>
                            <div  className="btn-fuxia-primaria">Matemática</div>
                            <div  className="btn-fuxia-primaria">Comunicación</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Educación 3.0</h2>
                            <div className="btn-blanco-primaria interline-btn">Recursos educativos generales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Falabella</h2>
                            <div  className="btn-fuxia-primaria interline-btn">Recursos educativos generales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Aprendo en casa (MINEDU)</h2>
                            <div  className="btn-blanco-primaria">Actvidades por edad</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-primaria">
                            <h2 className="title-btn-primaria">Enseña Perú</h2>
                            <div className="btn-fuxia-primaria">Recursos para padres</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-compartir-primaria">
                <Compartir />
            </div>
            
            </div>
           
        </div>
    )
}

export default Primaria;
