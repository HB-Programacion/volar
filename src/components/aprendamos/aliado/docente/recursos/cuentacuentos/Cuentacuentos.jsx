import React from 'react'
import { useHistory } from "react-router-dom";

import Compartir from "../../../compartir/Compartir";
import cuentacuentos from "../../../../../../images/docente/cuentacuentos.svg";

import "./Cuentacuentos.css";

const Cuentacuentos = () => {
    let history = useHistory();
    return (
        <div className="bg-recursos-img-cuentacuentos animated fadeIn">
        <a onClick={()=>{history.goBack()}}>
        <i  className="fas fa-chevron-left arrowGoback-docente goBack-docente" aria-hidden="true"></i>
        </a>
        <div>
            <div className="box-title-cuentacuentos">
                <figure className="img-cuentacuentos">
                    <img src={cuentacuentos} alt="cuentacuentos-volar" className="w-100 heartbeat"/>
                </figure>
                <h1 className="title-cuentacuentos" >Cuentacuentos volar</h1>
            </div>
            <div className="container box-btn-cuentacuentos">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <a href="https://www.youtube.com/playlist?list=PLrxQFO0SRaI3i61ucq2xNBRPAJ-ZC91Ye" className="link" target="blank">
                                <div className="btn-blanco-cuentacuentos">Inicial</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <a href=" https://www.youtube.com/playlist?list=PLrxQFO0SRaI1BHGV7pUo9QhjbG9boU0Km" className="link" target="blank">
                                <div className="btn-naranja-cuentacuentos">Primaria</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="btn-cuentacuentos">
                            <h2 className="title-btn-cuentacuentos title-none-cuentacuentos">.</h2>
                            <a href="https://www.youtube.com/playlist?list=PLrxQFO0SRaI0DLDk85bUigcWaoLdaXzAK" className="link" target="blank">
                                <div className="btn-blanco-cuentacuentos">Secundaria</div>
                            </a>
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
