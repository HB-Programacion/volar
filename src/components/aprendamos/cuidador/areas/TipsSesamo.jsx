import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
/*import cohete from '../../images/cohete-volando.svg';*/

const TipsSesamo = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
  numberTip,
}) => {
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
                    item.data().seccion === "Sésamo" &&
                    item.data().n_tip === numberTip
                )
                .map((item) => (
                  <div className="">
                    <div className="row justify-content-center h-100">
                      <h1 className="tittle-tips"> {item.data().titulo}</h1>
                    </div>
                    <div className="row justify-content-center  h-100">
                      <h3 className="tips-numbers"> {item.data().tipo}</h3>
                    </div>
                    <div className="row tips-margin-top">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div class="text-tips">
                          <p class="text-tips-light">
                          {item.data().video}
                            Cuando descanses aprovecha para comunicarte con tu
                            bebé. ¡Puedes cantarle tu canción favorita! Él
                            escucha todo a tu alrededor.
                          </p>
                          <p class="text-tips-bold">
                            ¡Siguiendo estos consejos estas sumando al
                            desarrollo integral de tu bebé!
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
