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
import infografia21 from "./../../../../images/modulos-img/8-Pasos disciplina positiva.jpg";
import infografia22 from "./../../../../images/modulos-img/8-comunicacion limites.jpg";
import infografia23 from "./../../../../images/modulos-img/8-Explicaciones Claras.jpg";
import { Button, Modal } from "react-bootstrap";



const Modulo_8 = () => {
  const [showVideo3, setShowVideo3] = React.useState(false);
  const [showInfografia21, setShowInfografia21] = React.useState(false);
  const [showInfografia22, setShowInfografia22] = React.useState(false);
  const [showInfografia23, setShowInfografia23] = React.useState(false);

  const handleCloseVideo3 = () => setShowVideo3(false);
  const handleShowVideo3 = () => setShowVideo3(true);
  const handleCloseInfografia21 = () => setShowInfografia21(false);
  const handleShowInfografia21 = () => setShowInfografia21(true);
  const handleCloseInfografia22 = () => setShowInfografia22(false);
  const handleShowInfografia22 = () => setShowInfografia22(true);
  const handleCloseInfografia23 = () => setShowInfografia23(false);
  const handleShowInfografia23 = () => setShowInfografia23(true);

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
            Identificar y reevaluar actitudes y estrategias de redirección de
            conducta, teniendo como base la disciplina positiva para favorecer
            el desarrollo emocional de los niños.
          </p>
          <p className="p-mobile-blue">
            Construir estrategias para mejorar su práctica disciplinar con los
            niños.
          </p>
          <p className="p-mobile-blue">
            Desarrollar la habilidad para hacer uso de estrategias que permitan
            dar respuesta ante la presencia de algunas emociones en los niños,
            reconociendo el rol del adulto en el proceso del desarrollo de la
            autorregulación y autocontrol de su conducta.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¡No olvidar! </h3>
          <p className="p-mobile-blue">
            Recuerda transmitirles confianza a tus hijos y no llamarles la
            atención cuando, por ejemplo, se hagan sus necesidades en la ropa.
          </p>
          <p className="p-mobile-blue">
            Podemos desarrollar las habilidades sociales y de control de
            nuestros hijos jugando con ellos en familia.{" "}
          </p>
          <p className="p-mobile-blue">
            Ayudar a nuestros niños a regular las emociones y comportamientos en
            situaciones de frustración estableciendo límites con cariño.
          </p>
        </div>
      </div>
      <figure className="flecha-abajo-aliado">
        <img src={flecha} alt="" className="w-100 m-auto" />
      </figure>
      <h2 className="text-materiales-aliados">Materiales</h2>
      <div className="row sin-margin-row box-materiales-modulos">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
        <div>
            <figure className="w-20 m-auto">
              <img src={cerebro} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">
              Disciplina Positiva
            </h3>
          </div>

          <div className="btn-modulos-info" onClick={() => handleShowInfografia21()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
            Infografía: 5 pasos para aplicar disciplina positiva
            </div>
          </div>
          <div className="btn-modulos-info" onClick={() => handleShowVideo3()}>
            <figure className="btn-infografia">
              <img src={video} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Video Animado sobre Disciplina Positiva
            </div>
          </div>
          <div className="btn-modulos-info" onClick={() => handleShowInfografia22()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: secuencia de acciones: importancia de la comunicación
            </div>
          </div>
          <div className="btn-modulos-info" onClick={() => handleShowInfografia23()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: consejos para explicaciones claras?
            </div>
          </div>
        </div>
      </div>
      <Modal show={showInfografia21} onHide={handleCloseInfografia21}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia21} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia22} onHide={handleCloseInfografia22}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia22} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia23} onHide={handleCloseInfografia23}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia23} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showVideo3} onHide={handleCloseVideo3}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div className="videoWrapper">
                <iframe
                  className="border-video-rutina"
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/a0V5SMgzfB0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modulo_8;
