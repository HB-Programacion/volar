import React from 'react'


import Compartir from "../../../compartir/Compartir";
import cuentacuentos from "../../../../../../images/docente/cuentacuentos.svg";

import "./Cuentacuentos.css";

const Cuentacuentos = () => {
    return (
        <div className="bg-recursos-img-cuentacuentos">
        <div>
            <div className="box-title-cuentacuentos">
                <figure className="img-cuentacuentos">
                    <img src={cuentacuentos} alt="cuentacuentos-volar" className="w-100"/>
                </figure>
                <h1 className="title-cuentacuentos" >Cuentacuentos volar</h1>
            </div>
            <div className="container box-btn-cuentacuentos">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <div className="btn-blanco-cuentacuentos">Inicial</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <div className="btn-naranja-cuentacuentos">Primaria</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <div className="btn-blanco-cuentacuentos">Secundaria</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-compartir-cuentacuentos">
                <Compartir />
            </div>
            
            </div>
           
        </div>
    )
}

export default Cuentacuentos;
