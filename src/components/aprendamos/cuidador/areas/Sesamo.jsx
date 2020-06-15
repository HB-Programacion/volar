import React from "react";
import "./areas.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoSesamoWhite from "./../../../../images/areas-img/icon_sesamo.png";
import iconoVideoJuego from "./../../../../images/areas-img/icon-video-sesamo.svg";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../../firebase/firebase";

export const Sesamo = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {

  
  const [edad, setEdad] = React.useState("");


 const mandarNumberTipOficial = (numberTip) => {
  localStorage.setItem('localNumberTip', numberTip)
  console.log(localStorage.getItem('localNumberTip'))
};

  React.useEffect(() => {
    if (firebaseUser !== null && idChild !== "") {
      const childData = db
        .collection("usuarios")
        .doc(firebaseUser.uid)
        .collection("addChild")
        .doc(idChild);
      childData
        .get()
        .then((snapShots) => {
          setEdad(snapShots.data().edadChild);
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
    <div>
      <div className="box-title-sesamo show-desktop">
        <img
          src={iconoSesamoWhite}
          className="icono-sesamo"
          alt="gota de agua"
        />
      </div>
      <div className="list-videos-tips">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {contenidoFirebase && (
          <div className="row">
            {contenidoFirebase.docs
              .filter((item) => item.data().seccion === "Sésamo")
              .map((item) => (
                <div
                  key={item.id}
                  className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                >
                  <a
                    href="/aprendamos/cuidador/sesamo/tips"
                    onClick={() => mandarNumberTipOficial(item.data().n_tip)}
                  >
                    <div className="box-section">
                      <img
                        src={iconoVideoJuego}
                        className="icono-video-tip"
                        alt="icono de tip"
                      />
                      <div className="box-text-video-tip">
                        <h3 className="subtittle-video-tip">
                          {item.data().titulo}
                        </h3>
                        <h5 className="text-video-tip">
                          N° {item.data().n_tip} {item.data().tipo}
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
