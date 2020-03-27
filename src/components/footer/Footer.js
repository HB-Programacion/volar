import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import aporta from '../../images/aporta-logo.svg';
import breca from '../../images/breca-logo.svg';
import ubicacion from '../../images/ubicacion-logo.svg';
import correo from '../../images/correo-logo.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import medium from '../../images/medium.svg';

const Footer = () => {
    return(
        <div className="footer-box">
            <div className="box-convenio">
               
                    <figure className="">
                        <img src={aporta}className=""></img>
                    </figure>
                    <figure className="mt-2">
                        <img src={breca}></img>
                
                </figure>
            </div>
            <div className="box-ubicacion">
                <img src={ubicacion} className="mb-3"></img>
                <p>Oficina</p>
                <p>Calle Las Begonias 441, Piso 9 </p>
                <p className="text-small">San Isidro, Lima 27 - Perú </p>
            </div>
            <div className="box-correo">
                <img src={correo} className="mb-3"></img>
                <p>Correo</p>
                <p>volar@aporta.org.pe</p>
            </div>
            <div className="box-redes">
                <figure>
                    <img src={instagram} className=""></img>
                </figure>
                <figure>
                    <img src={facebook}></img>
                </figure>
                <figure>
                    <img src={medium}></img>
                </figure>
            </div>
        </div>
    )
}
export default Footer;