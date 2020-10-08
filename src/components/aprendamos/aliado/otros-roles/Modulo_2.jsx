import React from "react";
import { useHistory } from "react-router-dom";

import flecha from "../../../../images/modulos-img/flecha-abajo.svg";
import cerebro from "../../../../images/modulos-img/cerebro.svg";
import calidad from "../../../../images/modulos-img/calidad.svg";
import estres from "../../../../images/modulos-img/estres.svg";
import infografia from "../../../../images/modulos-img/infografia.svg";
import infografia3 from "./../../../../images/modulos-img/2-Beneficios Lactancia.jpg";
import infografia4 from "./../../../../images/modulos-img/2-Posturas Lactancia.jpg";
import infografia5 from "./../../../../images/modulos-img/2-Importancia del CRED.jpg";
import infografia6 from "./../../../../images/modulos-img/2-CRED segun edad.jpg";
import infografia7 from "./../../../../images/modulos-img/2-Anemia Desarollo.jpg";
import infografia8 from "./../../../../images/modulos-img/2-Pasos suplementos hierro.jpg";
import infografia9 from "./../../../../images/modulos-img/2-Efectos Secundarios Hierro.jpg";
import video from "../../../../images/modulos-img/video.svg";
import arrowLeft from "./../../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../../images/arrow-right-blue.svg";
import { Button, Modal } from "react-bootstrap";

const Modulo_2 = () => {
  const [showInfografia3, setShowInfografia3] = React.useState(false);
  const [showInfografia4, setShowInfografia4] = React.useState(false);
  const [showInfografia5, setShowInfografia5] = React.useState(false);
  const [showInfografia6, setShowInfografia6] = React.useState(false);
  const [showInfografia7, setShowInfografia7] = React.useState(false);
  const [showInfografia8, setShowInfografia8] = React.useState(false);
  const [showInfografia9, setShowInfografia9] = React.useState(false);

  const handleCloseInfografia3 = () => setShowInfografia3(false);
  const handleShowInfografia3 = () => setShowInfografia3(true);
  const handleCloseInfografia4 = () => setShowInfografia4(false);
  const handleShowInfografia4 = () => setShowInfografia4(true);
  const handleCloseInfografia5 = () => setShowInfografia5(false);
  const handleShowInfografia5 = () => setShowInfografia5(true);
  const handleCloseInfografia6 = () => setShowInfografia6(false);
  const handleShowInfografia6 = () => setShowInfografia6(true);
  const handleCloseInfografia7 = () => setShowInfografia7(false);
  const handleShowInfografia7 = () => setShowInfografia7(true);
  const handleCloseInfografia8 = () => setShowInfografia8(false);
  const handleShowInfografia8 = () => setShowInfografia8(true);
  const handleCloseInfografia9 = () => setShowInfografia9(false);
  const handleShowInfografia9 = () => setShowInfografia9(true);

  let history = useHistory();
  return (
    <div className="box-modulos-aliados">
      {/* <a onClick={() => {
          history.goBack();
        }}> */}
      <a href="/aprendamos/aliado/modulos">
        <i
          className="fas fa-chevron-left arrowGoback-docente goBack-docente"
          aria-hidden="true"
        ></i>
      </a>
      <div className="row sin-margin-row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¿Qué aprenderemos?</h3>
          <p className="p-mobile-blue">
            Establecer una relación directa entre salud y desarrollo infantil
            temprano.
          </p>
          <p className="p-mobile-blue">
            Emplear estrategias para promover la lactancia materna exclusiva,
            prolongada y el destete.
          </p>
          <p className="p-mobile-blue">
            Comprender la importancia de asistir al establecimiento de salud
            para orientar a las familias que deben llevar a su niño al Control
            de Crecimiento y Desarrollo (CRED).
          </p>
          <p className="p-mobile-blue">
            Manejar los mensajes sobre los mitos y efectos secundarios para
            asegurar el consumo de suplemento de hierro de los niños en edad de
            consumo.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 box-modulos-textos">
          <h3 className="title-modulos-aliados">¡No olvidar! </h3>
          <p className="p-mobile-blue">
            Los 5 primeros años de vida son fundamentales para el desarrollo
            integral de las personas ya que se consolida la arquitectura básica
            del cerebro.
          </p>
          <p className="p-mobile-blue">
            Las interacciones positivas con nuestros niños son clave para
            garantizar el desarrollo de su cerebro.{" "}
          </p>
          <p className="p-mobile-blue">
            Estar atento a las miradas, gestos, balbuceos, palabras y
            movimientos del niño para responder con cariño y de manera oportuna.
            Si el niño pregunta, el cuidador principal debe responder mirando a
            los ojos, con atención, cariño y paciencia a sus inquietudes.
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
              Lactancia Materna Exclusiva
            </h3>
            <p className="subtitle-materiales-modulos">
              Durante los 06 primeros meses, los bebés solo deben tomar leche
              materna.{" "}
            </p>
          </div>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia3()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: beneficios de la lactancia materna en la salud del
              niño
            </div>
          </btn>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia4()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: posturas/posiciones para la lactancia
            </div>
          </btn>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={calidad} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">CRED</h3>
            <p className="subtitle-materiales-modulos">
              Motiva a los cuidadores que visitas a que asistan a sus controles
              CRED.{" "}
            </p>
          </div>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia5()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: importancia del CRED
            </div>
          </btn>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia6()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Inforgrafía: CRED según edad de nacido
            </div>
          </btn>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={estres} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">Suplementos de hierro</h3>
            <p className="subtitle-materiales-modulos">
              Acompaña a las familias en su experiencia con los suplementos de
              hierro.{" "}
            </p>
          </div>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia7()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: ¿Cómo afecta la anemia a los niños?: mala
              alimentación, influye en el desarrollo físico y emocional
            </div>
          </btn>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia8()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: pasos para administrar el sulfato ferrosoen los niños
            </div>
          </btn>
          <btn
            className="btn-modulos-info"
            onClick={() => handleShowInfografia9()}
          >
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: efectos secundarios de los suplementos de hierro.
            </div>
          </btn>
        </div>
      </div>
      <Modal show={showInfografia3} onHide={handleCloseInfografia3}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia4} onHide={handleCloseInfografia4}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia5} onHide={handleCloseInfografia5}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia6} onHide={handleCloseInfografia6}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia6} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia7} onHide={handleCloseInfografia7}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia8} onHide={handleCloseInfografia8}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia9} onHide={handleCloseInfografia9}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia9} alt="" />
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

export default Modulo_2;
