import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
/*import cohete from '../../images/cohete-volando.svg';*/

const TipsSesamo = ({
  contenidoFirebase,
  error,
  loading,
}) => {


 /*  const childData= db.collection("usuarios").doc(firebaseUser.uid).collection("addChild").doc("OxtF7ijtoOlOX7zx3xcY")
  console.log("hola", childData.data().edadChild)
    ///Obteniendo todo el contenido de firebase///*/



  return (
    <div>
      <div className="background-tips-sesamo" id="aprendamos-page">
        <div className=" animated fadeIn">
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {contenidoFirebase && (
            <>
              {contenidoFirebase.docs
                .filter(
                  (item) =>
                    item.data().seccion ==="Sésamo" &&
                    item.data().n_tip == localStorage.getItem('localNumberTip')
                )
                .map((item) => (
                  <div className="mt-5">
                    <div className="row justify-content-center h-100 sin-margin-row">
                      <h1 className="tittle-tips"> {item.data().titulo}</h1>
                    </div>
                    <div className="row justify-content-center  h-100 sin-margin-row">
                      <h3 className="tips-numbers"> {item.data().tipo}</h3>
                    </div>
                    <div className="row tips-margin-top sin-margin-row">
                      <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div className="videoWrapper">
                          <iframe
                            className="border-video-rutina"
                            width="600"
                            height="350"
                            src={item.data().video}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="text-tips">
                          <p class="text-tips-light">
                          {item.data().texto1}
                          </p>
                          <p class="text-tips-light">
                          {item.data().texto2}
                          </p>
                          <p class="text-tips-light">
                          {item.data().texto3}
                          </p>
                          <p class="text-tips-light">
                          {item.data().texto4}
                          </p>
                          <p class="text-tips-light">
                          {item.data().texto5}
                          </p>
                          <p class="text-tips-light">
                          {item.data().texto6}
                          </p>
                          <p class="text-tips-bold">
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipsSesamo;
