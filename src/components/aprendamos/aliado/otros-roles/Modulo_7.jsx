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
import infografia19 from "./../../../../images/modulos-img/7-Alimentacion balanceada +12m.jpg";
import infografia20 from "./../../../../images/modulos-img/7- Comida cuando enferman.jpg";
import { Button, Modal } from "react-bootstrap";

const Modulo_7 = () => {
  const [showInfografia19, setShowInfografia19] = React.useState(false);
  const [showInfografia20, setShowInfografia20] = React.useState(false);

  const handleCloseInfografia19 = () => setShowInfografia19(false);
  const handleShowInfografia19 = () => setShowInfografia19(true);
  const handleCloseInfografia20 = () => setShowInfografia20(false);
  const handleShowInfografia20 = () => setShowInfografia20(true);
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
            Reconocer los distintos estilos de dar de comer.
          </p>
          <p className="p-mobile-blue">
            Identificar que practicas favorecen la alimentación responsiva.
          </p>
          <p className="p-mobile-blue">
            Desarrollar la habilidad de responder al niño, a través de la
            comunicación verbal, el trato afectuoso durante el momento de la
            comida.{" "}
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¡No olvidar! </h3>
          <p className="p-mobile-blue">
            Alimentación responsiva implica desarrollar la habilidad de
            responder al niño, a través de la comunicación verbal, tener un
            trato afectuoso y animarlo para que el niño disfrute el momento de
            la comida.
          </p>
          <p className="p-mobile-blue">
            El momento de la alimentación es un momento de disfrute, de
            intercambio de afecto y aprendizaje.
          </p>
        </div>
      </div>
      <figure className="flecha-abajo-aliado">
        <img src={flecha} alt="" className="w-100 m-auto" />
      </figure>
      <h2 className="text-materiales-aliados">Materiales</h2>
      <div className="row sin-margin-row box-materiales-modulos">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 m-auto ">
          <div>
            <figure className="w-20 m-auto">
              <img src={cerebro} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">
              Alimentación balanceada
            </h3>
          </div>
          <btn className="btn-modulos-info" onClick={() => handleShowInfografia19()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía alimentación balanceada según edad
            </div>
          </btn>
          <btn className="btn-modulos-info" onClick={() => handleShowInfografia20()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía ¿Qué debemos darle de comer a un niño/ niña enfermo/a?
            </div>
          </btn>
        </div>
      </div>
      <Modal show={showInfografia19} onHide={handleCloseInfografia19}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia19} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia20} onHide={handleCloseInfografia20}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia20} alt=""/>
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

export default Modulo_7;
