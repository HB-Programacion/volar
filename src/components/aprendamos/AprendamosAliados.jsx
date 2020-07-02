import React from "react";
import "./aprendamos.css";
import "./../../App.css";
import { BrowserRouter as Router, Route, Link,  withRouter } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";
import { Button, Modal } from 'react-bootstrap';

const AprendamosAliados = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectRol, setSelectRol] = React.useState("");

  const procesarRol =  (e) => {
    e.preventDefault();
    const dateRol = {
      rol: selectRol, // Generamos una id rápida
      tipo: "aliado",
  };
  localStorage.setItem('dateRol', JSON.stringify(dateRol))
  if(selectRol==="Docente"){
    props.history.push("/aprendamos/aliado/docente");
  }
 handleClose()
  }
  

  return (
    <div
      className="padding-top background animated fadeIn"
      id="aprendamos-page"
    >
      <div className="column">
        <div className="margin-top-bottom">
          <div className="row justify-content-center h-100 sin-margin-row wobble-hor-bottom">
            <btn
              className="btn-light-blue text-white  m-3 boton-hover-aprendamos"
              onClick={handleShow}
            >
              <img
                src={arrowLeft}
                className="arrow-blue"
                alt="flecha izquierda azul"
              ></img>
              Prueba un consejo antes <br /> de crear una cuenta
              <img
                src={arrowRight}
                className="arrow-blue"
                alt="flecha derecha  azul"
              ></img>
            </btn>
          </div>
          <div className="row justify-content-center h-100 sin-margin-row wobble-hor-bottom">
            <Link
              to="/login"
              className="btn-light-blue text-white  m-3 boton-hover-aprendamos"
            >
              <img src={arrowLeft} className="arrow-blue"></img>
              Iniciar Sesión
              <img src={arrowRight} className="arrow-blue"></img>
            </Link>
            
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="container animated fadeIn">
                    <div className="">
                      <div className="row">
                        <h1 className="tittle-register-child">
                          ¡Bienvenido!
                        </h1>
                      </div>
                      <div className="row">
                        <h2 className="subtittle-register-child">
                          Cuidador Principal
                        </h2>
                      </div>
                      <div>
                        <form onSubmit={procesarRol}>
                          <div className="row">
                            <div className="col-12">
                              <p className="letter-register">Cuéntanos que rol cumples:</p>
                              <select
                                className="select-register-space"
                                onChange={(e) => setSelectRol(e.target.value)}
                                value={selectRol}
                              >
                                <option value="">Rol que cumplo</option>
                                <option value="Agente comunitario de Salud">Agente comunitario de Salud</option>
                                <option value="Madre cuidadora">Madre cuidadora (PNCM)</option>
                                <option value="Guía de Familia">Guía de Familia (PCNM)</option>
                                <option value="Guía de Sala">Guía de Sala (PCNM)</option>
                                <option value="Docente">Docente</option>
                              </select>
                            </div>
                          </div>
                          <div className="caja-boton-rol">
                            <button
                              type="submit"
                              className="btn-navy-blue text-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                              data-dismiss="modal"
                            >
                              <img src={arrowLeft} className="arrow-blue"></img>
                              INGRESAR
                              <img
                                src={arrowRight}
                                className="arrow-blue"
                              ></img>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
        </Modal.Body>
      </Modal>
      {/*<div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="container animated fadeIn">
                    <div className="">
                      <div className="row">
                        <h1 className="tittle-register-child">
                          ¡Bienvenido!
                        </h1>
                      </div>
                      <div className="row">
                        <h2 className="subtittle-register-child">
                          Cuidador Principal
                        </h2>
                      </div>
                      <div>
                        <form onSubmit={procesarRol}>
                          <div className="row">
                            <div className="col-12">
                              <p className="letter-register">Cuéntanos que rol cumples:</p>
                              <select
                                className="select-register-space"
                                onChange={(e) => setSelectRol(e.target.value)}
                                value={selectRol}
                              >
                                <option value="">Rol que cumplo</option>
                                <option value="Agente comunitario de Salud">Agente comunitario de Salud</option>
                                <option value="Madre cuidadora">Madre cuidadora (PNCM)</option>
                                <option value="Guía de Familia">Guía de Familia (PCNM)</option>
                                <option value="Guía de Sala">Guía de Sala (PCNM)</option>
                                <option value="Docente">Docente</option>
                              </select>
                            </div>
                          </div>
                          <div className="caja-boton-rol">
                            <button
                              type="submit"
                              className="btn-navy-blue text-white mt-3 mb-3 wobble-hor-bottom out-none-button"
                              data-dismiss="modal"
                            >
                              <img src={arrowLeft} className="arrow-blue"></img>
                              INGRESAR
                              <img
                                src={arrowRight}
                                className="arrow-blue"
                              ></img>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>*/}
      </div>
    </div>
  );
};
export default withRouter(AprendamosAliados);