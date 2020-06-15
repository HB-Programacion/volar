import React from "react";
import "./areas.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoSocioemocionalWhite from "./../../../../images/areas-img/icon_socioemocional.png";
import iconoTipSocioemocional from "./../../../../images/areas-img/icono_tip_socioemocional.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../../firebase/firebase";


export const Socioemocional= ({contenidoFirebase, error, loading, firebaseUser, idChild}) => {

 const [edad, setEdad]= React.useState("")
  React.useEffect(() => {
    if (firebaseUser !== null  && idChild!=="") {
      const childData = db.collection("usuarios").doc(firebaseUser.uid).collection("addChild").doc(idChild);
      childData
        .get()
        .then((snapShots) => {
         setEdad(snapShots.data().edadChild)
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
      }
 /*  const childData= db.collection("usuarios").doc(firebaseUser.uid).collection("addChild").doc("OxtF7ijtoOlOX7zx3xcY")
  console.log("hola", childData.data().edadChild)
    ///Obteniendo todo el contenido de firebase///*/
  }, [firebaseUser, idChild]);


  return (
    <>
    {firebaseUser !== null ? (
      <div>
      <div className="box-title-socioemocional show-desktop">
        <img
          src={iconoSocioemocionalWhite}
          className="icono-area"
          alt="gota de agua"
        />
        <h1 className="title-area">SOCIOEMOCIONAL</h1>
      </div>
      <div className="list-videos-tips">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {contenidoFirebase && (<div className="row">
            {contenidoFirebase.docs.filter(item=>  item.data().seccion==="Socioemocional" &&  item.data().edad==edad ).map(item => (
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <Link to="/aprendamos/cuidador/socioemocional/tips">  <div className="box-section">
                  <img
                    src={iconoTipSocioemocional}
                    className="icono-video-tip"
                    alt="icono de tip"
                  />
                  <div className="box-text-video-tip">
                    <h3 className="subtittle-video-tip">
                      {item.data().titulo}
                    </h3>
                    <h5 className="text-video-tip">Tip N° {item.data().n_tip}</h5>
                  </div>
                </div></Link>
              </div>
              ))}
               </div>)}
        </div>
      </div>
    ) :
    (
      <div>
      <div className="box-title-socioemocional show-desktop">
        <img
          src={iconoSocioemocionalWhite}
          className="icono-area"
          alt="gota de agua"
        />
        <h1 className="title-area">SOCIOEMOCIONAL</h1>
      </div>
      <div className="list-videos-tips">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {contenidoFirebase && (<div className="row">
            {contenidoFirebase.docs.filter(item=>  item.data().seccion==="Socioemocional" &&  item.data().edad==JSON.parse(localStorage.getItem('dateChild')).edad).map(item => (
                <div key={item.id} className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <Link to="/aprendamos/cuidador/socioemocional/tips">  <div className="box-section">
                  <img
                    src={iconoTipSocioemocional}
                    className="icono-video-tip"
                    alt="icono de tip"
                  />
                  <div className="box-text-video-tip">
                    <h3 className="subtittle-video-tip">
                      {item.data().titulo}
                    </h3>
                    <h5 className="text-video-tip">Tip N° {item.data().n_tip}</h5>
                  </div>
                </div></Link>
              </div>
              ))}
               </div>)}
        </div>
      </div>
    )}
    </>
  );
};
