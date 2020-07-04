import React from 'react'

import "./Inicial.css";

import Compartir from "../../../compartir/Compartir";
import inicial from "../../../../../../images/docente/inicial.svg";


const Inicial = () => {
    return (
        <div className="bg-recursos-img">
        <div>
            <div className="box-title-inicial">
                <figure className="img-inicial">
                    <img src={inicial} alt="inicial-volar" className="w-100"/>
                </figure>
                <h1 className="title-inicial" >Inicial de 3 a 5 años</h1>
            </div>
            <div className="container box-btn-inicial">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-inicial">
                            <h2 className="title-btn-inicial">Khan Academy</h2>
                            <div className="btn-morado-inicial">Educación Remota</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-inicial">
                            <h2 className="title-btn-inicial">Perú Educa</h2>
                            <div className="btn-blanco-inicial">Artículos de interés</div>
                            <div  className="btn-blanco-inicial">Consejos de crianza</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-inicial">
                            <h2 className="title-btn-inicial">Educación 3.0</h2>
                            <div className="btn-morado-inicial interline-btn">Recursos educativos generales</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-inicial">
                            <h2 className="title-btn-inicial">Aprendo en casa (MINEDU)</h2>
                            <div  className="btn-blanco-inicial">Cómo hablar de COVID-19</div>
                            <div  className="btn-blanco-inicial">Actvidades por edad</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-inicial">
                            <h2 className="title-btn-inicial">Enseña Perú</h2>
                            <div className="btn-morado-inicial">Recursos para padres</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-compartir-inicial">
                <Compartir />
            </div>
            
            </div>
           
        </div>
    )
}

export default Inicial;
