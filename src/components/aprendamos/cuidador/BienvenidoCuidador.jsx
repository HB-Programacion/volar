import React from "react";
import "./../aprendamos.css";
import "./../../../App.css";
import "./bienvenidoCuidador.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import startsLeftWhite from "./../../../images/stars-white-left.png";
import startsRighttWhite from "./../../../images/stars-white-right.png";
import iconoBienvenidaCuidador from "./../../../images/icon-bienvenida-cuidador.svg";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import iconAreaHigiene from "./../../../images/icon-agua.svg";
import iconAreaSocial from "./../../../images/icon-emocional.svg";
import iconAreaRutina from "./../../../images/icon-rutina.svg";
import iconAreaJuego from "./../../../images/icon-juego.svg";
import iconAreaNutricion from "./../../../images/icon-nutricion.svg";
import iconAreaSesamo from "./../../../images/icon-sesamo.svg";
import startsLeftWhiteMobile from "./../../../images/starts-white-mobile-left.png";
import startsRightWhiteMobile from "./../../../images/stars-white-mobile-right.png";
import { auth, db } from "../../../components/firebase/firebase";

import starsLeftDesktop from "../../../images/stars-left-desktop.svg";
import starsRightDesktop from "../../../images/stars-right-desktop.svg";
import starsRightBienvenido from "../../../images/stars-right.svg"


export const BienvenidoCuidador = ({ idChild, firebaseUser, arrayChild }) => {
  const [nameChild, setNameChild] = React.useState("");
  const [colaboradorBreca, setColaboradorBreca] = React.useState("");
  React.useEffect(() => {
    if (firebaseUser !== null){
      const perfilUser = db.collection("usuarios").doc(firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) =>{
          setColaboradorBreca(doc.data().breca);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
    if (firebaseUser !== null &&  idChild !== "") {
      const childData = db
        .collection("usuarios")
        .doc(firebaseUser.uid)
        .collection("addChild")
        .doc(idChild);
      childData
        .get()
        .then((snapShots) => {
          setNameChild(snapShots.data().nameChild);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [firebaseUser,idChild]);

  return (
    <div>
      <div className="box-title-cuidador animated fadeIn show-desktop">
        <div className="box-row-1">
        {/* <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img> */}
          <img
            src={iconoBienvenidaCuidador}
            className="icon-bienvenida-cuidador"
            alt="stars-left"
          />
          <h1 className="title-cuidador tracking-in-expand-fwd-top tracking-in-expand-fwd-top">¡Hola!</h1>
          {/* <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img> */}
        </div>
     

        <div className="box-row-2">
          {firebaseUser !== null ? (
            arrayChild.docs.length === 0 ? (
              <p className="box-text ">
                Hoy aprenderemos a desarrollar las habilidades de lenguaje de tu
                hijo aprovechando los momentos de aseo. 
              </p>
            ) : (
              <p className="box-text ">
                Hoy aprenderemos a desarrollar las habilidades de lenguaje de 
                {nameChild} aprovechando los momentos de aseo.{arrayChild.docs.length}
              </p>
            )
          ) : (
            <p className="box-text ">
              Hoy aprenderemos a desarrollar las habilidades de lenguaje de tu
              hijo aprovechando los momentos de aseo.
            </p>
          )}
        </div>
      </div>
      {/* <div className="box-title-cuidador hide-desktop">
        <div className="box-row-1">
        <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img>
          <img
            src={iconoBienvenidaCuidador}
            className="icon-bienvenida-cuidador"
            alt="stars-left"
          />
          <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img>
        </div>
        <div className="box-row-2">
          <h1 className="box-saludo">¡Hola!</h1>
          <p className="box-text">
            {firebaseUser !== null ? (
              arrayChild.docs.length === 0 ? (
                <p className="box-text">
                  Hoy aprenderemos a desarrollar las habilidades de lenguaje de
                  tu hijo aprovechando los momentos de aseo.
                </p>
              ) : (
                <p className="box-text">
                  Hoy aprenderemos a desarrollar las habilidades de lenguaje de{" "}
                  {nameChild} aprovechando los momentos de aseo.
                </p>
              )
            ) : (
              <p className="box-text">
                Hoy aprenderemos a desarrollar las habilidades de lenguaje de tu
                hijo aprovechando los momentos de aseo.
              </p>
            )}
          </p>
        </div>
      </div> */}
      <p className="estrellita-lila heartbeat">&#10022;</p>
      <p className="title-dit">
        Recuerda explicarle qué parte
        de su cuerpo estás limpiando y contarle qué vas a hacer luego.
      </p>
      <p className="estrellita-lila heartbeat">&#10022;</p>
      <div className="mt-3 video">
                <div className="video-responsive">
                    <iframe src="https://www.youtube.com/embed/3nvEJDc3Vic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <iframe  src="https://www.youtube.com/watch?v=nNdYfFO10d8&feature=youtu.be&t=1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>        
      </div>
      <div className="caja-boton-contactanos caja-compartir-hola">
                <a href="/" className="btn-navy-blue w-80 text-white wobble-hor-bottom">
                  <img src={arrowLeft} className="arrow-blue"></img>
                  COMPARTIR
                  <img src={arrowRight} className="arrow-blue"></img>
                </a>
      </div>


      <p className=" estrellita-lila heartbeat">&#10022;</p>
      <p className="box-modelo-volar-item-text-title text-center text-tienes-todo  mb-3">
        ¡Tienes todo lo que se necesita para desarrollar el cerebro de
        tus hijos e hijas!
      </p>
      <div className="list-btn-areas show-desktop">
      {colaboradorBreca === "NO" ?   <div className="btn-areas w-100">
          <div className="w-20">
            <Link to="/aprendamos/cuidador/higiene" className="link">
              <div className="area-higiene">
                <img
                  src={iconAreaHigiene}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
            <Link to="/aprendamos/cuidador/socioemocional " className="link">
              <div className="area-socioEmocional">
                <img
                  src={iconAreaSocial}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-social">SOCIOEMOCIONAL</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
            <Link to="/aprendamos/cuidador/rutina" className="link">
              <div className="area-rutina">
                <img
                  src={iconAreaRutina}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-rutina">RUTINA</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
          <Link to="/aprendamos/cuidador/juego" className="link">
              <div className="area-juego">
                <img
                  src={iconAreaJuego}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-juego">JUEGO</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
          <Link to="/aprendamos/cuidador/nutricion" className="link">
           <div className="area-nutricion">
              <img
                src={iconAreaNutricion}
                className="icon-area heartbeat"
                alt="stars-left"
              />
              <p className="text-area-nutricion">
                NUTRICIÓN <br /> Y FÍSICO 
              </p>
            </div>
            </Link>
          </div>
        </div> :
         <> <div className="btn-areas w-100">
          <div className="w-20">
            <Link to="/aprendamos/cuidador/higiene" className="link">
              <div className="area-higiene">
                <img
                  src={iconAreaHigiene}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
            <Link to="/aprendamos/cuidador/socioemocional" className="link">
              <div className="area-socioEmocional">
                <img
                  src={iconAreaSocial}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-social">SOCIOEMOCIONAL</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
            <Link to="/aprendamos/cuidador/rutina" className="link">
              <div className="area-rutina">
                <img
                  src={iconAreaRutina}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-rutina">RUTINA</p>
              </div>
            </Link>
          </div>
          </div>
          <div className="btn-areas w-100">
          <div className="w-20">
          <Link to="/aprendamos/cuidador/juego" className="link">
              <div className="area-juego">
                <img
                  src={iconAreaJuego}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-juego">JUEGO</p>
              </div>
            </Link>
          </div>
          <div className="w-20">
          <Link to="/aprendamos/cuidador/nutricion" className="link">
           <div className="area-nutricion">
              <img
                src={iconAreaNutricion}
                className="icon-area heartbeat"
                alt="stars-left"
              />
              <p className="text-area-nutricion">
                NUTRICIÓN <br /> Y FÍSICO 
              </p>
            </div>
            </Link>
          </div>
          <div className="w-20">
          <Link to="/aprendamos/cuidador/sesamo" className="link">
           <div className="area-sesamo">
              <img
                src={iconAreaSesamo}
                className="icon-sesamo heartbeat"
                alt="stars-left"
              />
            </div>
            </Link>
          </div>
        </div> </> }
      </div>
      <div className="list-btn-areas hide-desktop">
        <div className="btn-areas w-100">
          <div className="w-50">
            <Link to="/aprendamos/cuidador/higiene" className="link">
              <div className="area-higiene">
                <img
                  src={iconAreaHigiene}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
              </div>
            </Link>
          </div>
          <div className="w-50">
            <Link to="/aprendamos/cuidador/socioemocional" className="link">
              <div className="area-socioEmocional">
                <img
                  src={iconAreaSocial}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-social">SOCIOEMOCIONAL</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="btn-areas w-100">
          <div className="w-50">
            <Link to="/aprendamos/cuidador/rutina" className="link">
              <div className="area-rutina">
                <img
                  src={iconAreaRutina}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-rutina">RUTINA</p>
              </div>
            </Link>
          </div>
          <div className="w-50">
            <Link to="/aprendamos/cuidador/juego" className="link">
              <div className="area-juego">
                <img
                  src={iconAreaJuego}
                  className="icon-area heartbeat"
                  alt="stars-left"
                />
                <p className="text-area-juego">JUEGO</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="btn-areas w-100">
          <div className="w-50">
           <Link to="/aprendamos/cuidador/nutricion" className="link">
           <div className="area-nutricion">
              <img
                src={iconAreaNutricion}
                className="icon-area heartbeat"
                alt="stars-left"
              />
              <p className="text-area-nutricion">
                NUTRICIÓN Y FÍSICO
              </p>
            </div>
            </Link>
          </div>
          {colaboradorBreca === "SI" ?  <div className="w-50">
          <Link to="/aprendamos/cuidador/sesamo" className="link">
           <div className="area-sesamo">
              <img
                src={iconAreaSesamo}
                className="icon-sesamo heartbeat"
                alt="stars-left"
              />
            </div>
            </Link>
          </div> : ""}
        </div>
      </div>
    </div>
  );
};