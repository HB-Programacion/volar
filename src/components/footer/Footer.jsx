import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./footer.css";
import aporta from "../../images/aporta-logo-final.png";
import breca from "../../images/breca-logo.svg";
import ubicacion from "../../images/ubicacion-logo.svg";
import telefono from "../../images/telefono-logo.svg";
import correo from "../../images/correo-logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/icon-youtube.svg";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="box-convenio">
        <figure className="">
          <img src={aporta} className="aporta"></img>
        </figure>
        <figure className="mt-2">
          <img src={breca} className="breca"></img>
        </figure>
      </div>
      <div className="box-ubicacion">
        <img src={ubicacion} className="mb-3 ubicacion"></img>
        <p>Oficina</p>
        <p>Calle Dionisio Derteano 144</p>
        <p className="text-small">San Isidro, Piso 19 - Perú </p>
      </div>
      <div className="box-telefono">
        <img src={telefono} className="mb-3 telefono"></img>
        <p>Teléfono</p>
        <p>914-054-626</p>
      </div>
      <div className="box-correo">
        <img src={correo} className="mb-3 correo"></img>
        <p>Correo</p>
        <p>volar@aporta.org.pe</p>
      </div>
      <div className="box-redes">
        <figure>
          <a href="https://www.instagram.com/somos.volar/" target="_blank">
            <img src={instagram} className="icon-footer"></img>
          </a>
        </figure>
        <figure>
          <a href="https://www.facebook.com/somosvolar/" target="_blank">
            <img src={facebook} className="icon-footer"></img>
          </a>
        </figure>
        <figure>
          <a
            href="https://www.youtube.com/channel/UCL8SsKlZTg_qL9QEOWohzXg/featured"
            target="_blank"
          >
            <img src={youtube} className="icon-footer"></img>
          </a>
        </figure>
      </div>
      <a className="terminos-condiciones" href="https://drive.google.com/file/d/1AVacSukAo7wo7G2KUY_770wKXYae9FS2/view" target="_blanck">
        <p className="text-blue-volar">Términos y condiciones</p>
      </a>
    </div>
  );
};
export default Footer;
