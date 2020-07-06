import React from "react";
import { useHistory } from "react-router-dom";

import "./../../cuidador/areas/areas.css";
import "./modulos.css";

import iconoTipLighBlue from "./../../../../images/icon-tip-ligh-blue.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../../../components/firebase/firebase";
import arrTips from "../../../../data";
import arrowLeft from "./../../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../../images/arrow-right-blue.svg";
import { Button, Modal } from "react-bootstrap";

const Modulos = ({ firebaseUser }) => {
  const [showModulo1, setShowModulo1] = React.useState(false);
  const [showModulo2, setShowModulo2] = React.useState(false);
  const [showModulo3, setShowModulo3] = React.useState(false);
  const [showModulo4, setShowModulo4] = React.useState(false);
  const [showModulo5, setShowModulo5] = React.useState(false);
  const [showModulo6, setShowModulo6] = React.useState(false);
  const [showModulo7, setShowModulo7] = React.useState(false);
  const [showModulo8, setShowModulo8] = React.useState(false);
  const [showModulo9, setShowModulo9] = React.useState(false);

  const handleCloseModulo1 = () => setShowModulo1(false);
  const handleShowModulo1 = () => setShowModulo1(true);
  const handleCloseModulo2 = () => setShowModulo2(false);
  const handleShowModulo2 = () => setShowModulo2(true);
  const handleCloseModulo3 = () => setShowModulo3(false);
  const handleShowModulo3 = () => setShowModulo3(true);
  const handleCloseModulo4 = () => setShowModulo4(false);
  const handleShowModulo4 = () => setShowModulo4(true);
  const handleCloseModulo5 = () => setShowModulo5(false);
  const handleShowModulo5 = () => setShowModulo5(true);
  const handleCloseModulo6 = () => setShowModulo6(false);
  const handleShowModulo6 = () => setShowModulo6(true);
  const handleCloseModulo7 = () => setShowModulo7(false);
  const handleShowModulo7 = () => setShowModulo7(true);
  const handleCloseModulo8 = () => setShowModulo8(false);
  const handleShowModulo8 = () => setShowModulo8(true);
  const handleCloseModulo9 = () => setShowModulo9(false);
  const handleShowModulo9 = () => setShowModulo9(true);

  let history = useHistory();

  return (
    <div className="animated fadeIn">
      <div>
        <div className="box-title-modulo show-desktop">
            <h1 className="title-modulo  tracking-in-expand-fwd-top">
              Visita nuestros módulos <br /> y aprender con volar
            </h1>
        </div>
        <div className="list-modulo">
        <i
        onClick={() => {
          history.goBack();
        }}
        className="fas fa-chevron-left arrowGoback goBack-area"
        aria-hidden="true"
      ></i>
          {/*  {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <div className="grande">
                <div className="centrando-spiner">
          <Orbitals color="#EF8B44" size={900} />
        </div>
      </div> }*/}
          {/* {contenidoFirebase && ( */}
         <div className="container">
         <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo1}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Introductorio</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo2}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Estructura del Cerebro y Estrés Tóxico </h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo3}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Practicas Saludables I</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo4}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Autonomía e imagen del niño</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo5}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Rutinas: Cuidado y Protección </h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo6}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Practicas Saludables II</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo7}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Importancia del Juego</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo8}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Practicas Saludables III</h3>
                  </div>
                </div>
              </btn>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <btn className="link" onClick={handleShowModulo9}>
                <div className="box-section box-section-higiene">
                  <div class="box-icon">
                    <img
                      src={iconoTipLighBlue}
                      className="icono-modulo-tip heartbeat"
                      alt="icono de tip"
                    />
                  </div>
                  <div className="box-text-modulo">
                    <h3>Disciplina Positiva</h3>
                  </div>
                </div>
              </btn>
            </div>
          </div>
         </div>
          {/*  )} */}
        </div>
      </div>
      <Modal show={showModulo1} onHide={handleCloseModulo1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¡Bienvenido al módulo introductorio!
                    </h4>
                    <p className="letter-modal">
                      Aquí encontrarás todos los materiales complementarios que
                      te ayudarán a iniciar tu formación con Volar
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo2} onHide={handleCloseModulo2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">¡Felicitaciones!</h4>
                    <p className="letter-modal">
                      Acabas de empezar tu formación como Aliado por la
                      infancia. Para este primer tema te dejamos los siguientes
                      materiales:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo3} onHide={handleCloseModulo3}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¡Seguimos Avanzando!{" "}
                    </h4>
                    <p className="letter-modal">
                      En este módulo aprenderemos prácticas saludables que todo
                      cuidador necesita saber:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo4} onHide={handleCloseModulo4}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¿Qué es la autonomía?
                    </h4>
                    <p className="letter-modal">
                      Descúbrelo en el siguiente video:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo5} onHide={handleCloseModulo5}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¡Ya has completado el 50% de tus módulos! ¡Bien hecho!
                    </h4>
                    <p className="letter-modal">
                      Con estos materiales aprenderemos sobre las rutinas y su
                      importancia:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo6} onHide={handleCloseModulo6}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      En este módulo aprenderemos más prácticas saludables para
                      practicar con nuestras familias.
                    </h4>
                    <p className="letter-modal">
                      ¡Esta vez conoceremos todo sobre el agua segura y la
                      higiene!
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo7} onHide={handleCloseModulo7}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      Las niñas y los niños aprenden jugando
                    </h4>
                    <p className="letter-modal">
                      aprendamos a guiar a las familias con los siguientes
                      materiales:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo8} onHide={handleCloseModulo8}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¡Ya casi has completado todos los módulos! ¡Eres un gran
                      aliado por la infancia!
                    </h4>
                    <p className="letter-modal">
                      En este modulo aprenderemos prácticas saludables
                      relacionadas a la alimentación de las niñas y niños:
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showModulo9} onHide={handleCloseModulo9}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="tittle-letter-modal">
                      ¡Bien hecho! ¡Llegamos al último módulo!
                    </h4>
                    <p className="letter-modal">
                      Aquí aprenderemos la importancia de aplicar disciplina
                      positiva con nuestras niñas y niños.
                    </p>
                  </div>
                </div>
                <div className="caja-boton-rol">
                  <button
                    type="submit"
                    className="btn-navy-blue font-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                    data-dismiss="modal"
                  >
                    <img src={arrowLeft} className="arrow-blue"></img>
                    VER MÁS AQUÍ
                    <img src={arrowRight} className="arrow-blue"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modulos;
