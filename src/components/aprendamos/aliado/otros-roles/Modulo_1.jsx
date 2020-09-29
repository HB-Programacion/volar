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
import infografia1 from "./../../../../images/modulos-img/1-Conexiones\ Neuronales.jpg";
import infografia2 from "./../../../../images/modulos-img/1-Estres toxico 1.jpg"
import { Button, Modal } from "react-bootstrap";

const Modulo_1 = () => {
  const [showInfografia1, setShowInfografia1] = React.useState(false);
  const [showVideo1, setShowVideo1] = React.useState(false);
  const [showInfografia2, setShowInfografia2] = React.useState(false);
   
  const handleCloseInfografia1 = () => setShowInfografia1(false);
  const handleShowInfografia1 = () => setShowInfografia1(true);
  const handleCloseInfografia2 = () => setShowInfografia2(false);
  const handleShowInfografia2 = () => setShowInfografia2(true);
  const handleCloseVideo1=()=> setShowVideo1(false)
  const handleShowVideo1=()=> setShowVideo1(true)
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
            Conocer y entender los conceptos fundamentales del desarrollo del
            cerebro y la importancia de la primera infancia.
          </p>
          <p className="p-mobile-blue">
            Analizar la influencia de las experiencias positivas y negativas
            para el desarrollo del cerebro.
          </p>
          <p className="p-mobile-blue">
            Identificar situaciones de estrés tóxico y su impacto en el
            desarrollo cognitivo, emocional y físico de los menores a 5 años.
          </p>
          <p className="p-mobile-blue">
            Comprender la importancia de las interacciones positivas en el
            desarrollo de los niños.
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
              <img src={cerebro} alt="" className="w-100"  />
            </figure>
            <h3 className="title-materiales-modulos">Estructura del cerebro</h3>
            <p className="subtitle-materiales-modulos">
              ¡Conviértete en un desarrollador de cerebros!.
            </p>
          </div>
          <button className="btn-modulos-info" onClick={()=>handleShowInfografia1()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: conexiones neuronales en el cerebro de los niños desde
              el nacimiento hasta los 5 años.
            </div>
          </button>
          <button className="btn-modulos-info" onClick={()=>handleShowVideo1()}>
            <figure className="btn-infografia">
              <img src={video} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Video Animado sobre estructura del cerebro
            </div>
          </button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={calidad} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">
              Interacciones de Calidad
            </h3>
            <p className="subtitle-materiales-modulos">
              Encuentra ejemplos de interacciones de calidad entre cuidadores y
              niños de todas las edades en nuestra sección “Aprendamos”.
            </p>
          </div>
          <a href="https://www.facebook.com/somosvolar" className="btn-aprendamos-aliados">
            <div className="mt-5 btn-azul-aprendamos ">
              <img src={arrowLeft} className="arrow-blue"></img>
              APRENDAMOS
              <img src={arrowRight} className="arrow-blue"></img>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <div>
            <figure className="w-20 m-auto">
              <img src={estres} alt="" className="w-100" />
            </figure>
            <h3 className="title-materiales-modulos">Estrés Tóxico</h3>
            <p className="subtitle-materiales-modulos">
              ¡Aprendamos a prevenir el estrés tóxico!
            </p>
          </div>
          <button className="btn-modulos-info" onClick={()=>handleShowInfografia2()}>
            <figure className="btn-infografia">
              <img src={infografia} alt="" className="w-100" />
            </figure>
            <div className="btn-info-text">
              Infografía: cerebro con estrés tóxico + situaciones de estrés
              tóxico
            </div>
          </button>
        </div>
      </div>
      <Modal show={showInfografia1} onHide={handleCloseInfografia1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={infografia1} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showVideo1} onHide={handleCloseVideo1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container animated fadeIn">
            <div className="">
            <div className="videoWrapper">
                        <iframe
                          className="border-video-rutina"
                          width="600"
                          height="350"
                          src="https://www.youtube.com/embed/DAekMfWImXg"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showInfografia2} onHide={handleCloseInfografia2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
        <div className="container animated fadeIn">
            <div className="">
              <div>
                <div className="row">
                  <div className="col-12">
                    <img className="img-infografia" src={ infografia2} alt=""/>
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

export default Modulo_1;
