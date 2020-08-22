import React from "react";
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg";
import cerebro from "../../../../images/modulos-img/cerebro.svg";
import calidad from "../../../../images/modulos-img/calidad.svg";
import estres from "../../../../images/modulos-img/estres.svg";
import infografia from "../../../../images/modulos-img/infografia.svg";
import video from "../../../../images/modulos-img/video.svg";
import arrowLeft from "./../../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../../images/arrow-right-blue.svg";
import infografia12 from "./../../../../images/modulos-img/5-Germenes y enfermedades.jpg";
import infografia13 from "./../../../../images/modulos-img/5-Pasos lavado de manos.jpg";
import infografia14 from "./../../../../images/modulos-img/5-Utensilios lavado de manos.jpg";
import infografia15 from "./../../../../images/modulos-img/5-Momentos críticos lavado manos.jpg";
import { Button, Modal } from "react-bootstrap";

const Modulo_5 = () => {
  const [showInfografia12, setShowInfografia12] = React.useState(false);
  const [showInfografia13, setShowInfografia13] = React.useState(false);
  const [showInfografia14, setShowInfografia14] = React.useState(false);
  const [showInfografia15, setShowInfografia15] = React.useState(false);

  const handleCloseInfografia12 = () => setShowInfografia12(false);
  const handleShowInfografia12 = () => setShowInfografia12(true);
  const handleCloseInfografia13 = () => setShowInfografia13(false);
  const handleShowInfografia13 = () => setShowInfografia13(true);
  const handleCloseInfografia14 = () => setShowInfografia14(false);
  const handleShowInfografia14 = () => setShowInfografia14(true);
  const handleCloseInfografia15 = () => setShowInfografia15(false);
  const handleShowInfografia15 = () => setShowInfografia15(true);

  let history = useHistory();
  return (
    <div className="box-modulos-aliados">
     <a onClick={() => {
          history.goBack();
        }}>
     <i
        
        className="fas fa-chevron-left arrowGoback-docente goBack-docente"
        aria-hidden="true"
      ></i>
     </a>
      <div className="row sin-margin-row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
          <p className="p-mobile-blue">
            Establecer una relación directa entre higiene y salud.
          </p>
          <p className="p-mobile-blue">
            Aplicar la técnica para el correcto lavado de manos para orientar a
            las familias sobre la necesidad de adquirir esta práctica para
            evitar enfermedades.
          </p>
          <p className="p-mobile-blue">
            Aplicar las técnicas para contar con agua segura para orientar a las
            familias sobre el consumo, desinfección de alimentos, utensilios e
            higiene personal para evitar enfermedades.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¡No olvidar! </h3>
          <p className="p-mobile-blue">
            Usar agua hervida para beber y clorada para desinfectar alimentos,
            utensilios y para la higiene personal.
          </p>
          <p className="p-mobile-blue">
            Lavarnos las manos con jabón y agua chorro, antes de preparar los
            alimentos, antes de comer, después de cambiar el pañal, usar el baño
            o estar en contacto con animales y otros objetos sucios.
          </p>
        </div>
      </div>
      <figure className="flecha-abajo-aliado">
        <img src={flecha} alt="" className="w-100 m-auto" />
      </figure>
      <h2 className="text-materiales-aliados">Materiales</h2>
      <div className="row sin-margin-row box-materiales-modulos modulo5">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={cerebro} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">
              Gérmenes y Enfermedades
            </h3>
            <p className="subtitle-materiales-modulos">
              ¡Aunque no los veamos, los gérmenes están a nuestro alrededor! Por
              eso debemos cuidarnos y a nuestra familia. Comparte esta
              información en tus visitas:{" "}
            </p>
          </div>
          <btn className="btn-modulos-info"  onClick={() => handleShowInfografia12()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: Gérmenes y enfermedades
            </div>
          </btn>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={calidad} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">Lavado de Manos</h3>
            <p className="subtitle-materiales-modulos">
              Lavándonos las manos con agua y jabón podemos protegernos de
              aproximadamente el 90% de infecciones letales. Comparte esta
              información en tus visitas:{" "}
            </p>
          </div>
          <btn className="btn-modulos-info"  onClick={() => handleShowInfografia13()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: pasos / técnica para el lavado de manos
            </div>
          </btn>
          <btn className="btn-modulos-info"  onClick={() => handleShowInfografia14()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: utensilios para el lavado de manos.
            </div>
          </btn>
          <btn className="btn-modulos-info"  onClick={() => handleShowInfografia15()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
            Infografía: momentos críticos para el lavado de manos
            </div>
          </btn>
        </div>
      </div>
      <Modal show={showInfografia12} onHide={handleCloseInfografia12}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia12} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia13} onHide={handleCloseInfografia13}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia13} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia14} onHide={handleCloseInfografia14}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia14} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia15} onHide={handleCloseInfografia15}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia15} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modulo_5;
