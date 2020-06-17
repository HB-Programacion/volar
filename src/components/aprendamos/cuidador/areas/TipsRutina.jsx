import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
import { auth, db } from "../../../../components/firebase/firebase";
// import cohete from '../../images/cohete-volando.svg';

import { Orbitals } from "react-spinners-css";

const TipsRutina = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  const [edad, setEdad] = React.useState("");

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
      {firebaseUser !== null ? (
        <div className="background-tips-rutina" id="aprendamos-page">
          <div className=" animated fadeIn">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <div className="grande">
                <div className="centrando-spiner">
                  <Orbitals color="#EF8B44" size={900} />
                </div>{" "}
              </div>
            )}
            {contenidoFirebase && (
              <>
                {contenidoFirebase.docs
                  .filter(
                    (item) =>
                      item.data().seccion === "Rutina" &&
                      item.data().n_tip ==
                        localStorage.getItem("localNumberTip") &&
                      item.data().edad == edad
                  )
                  .map((item) => (
                    <div className="" key={item}>
                      <div className="row justify-content-center h-100 sin-margin-row">
                        <h1 className="tittle-tips tracking-in-expand-fwd-top">
                          {item.data().titulo}
                        </h1>
                      </div>
                      <div className="row justify-content-center  h-100 sin-margin-row">
                        <h3 className="tips-numbers tracking-in-expand-fwd-top">
                          TIP N°{item.data().n_tip}
                        </h3>
                      </div>
                      <div className="row tips-margin-top sin-margin-row tips-1-columna">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {item.data().icono !== "" ? (
                            <img src={item.data().icono} alt="" className="iconos-tips-blanco heartbeat" />
                          ) : (
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
                          )}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          <div class="text-tips">
                            <h3>Hola {localStorage.getItem("nameUser")}</h3>
                            {item.data().texto1B !== "" ? (
                              <p class="text-tips-light">
                                {item.data().texto1A}{" "}
                                {localStorage.getItem('nameChildActive')}
                                {item.data().texto1B}
                              </p>
                            ) : (
                              <p class="text-tips-light">
                                {item.data().texto1A}
                              </p>
                            )}
                            <p class="text-tips-bold">{item.data().texto2}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="background-tips-rutina" id="aprendamos-page">
          <div className=" animated fadeIn">
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <div className="grande">
                <div className="centrando-spiner">
                  <Orbitals color="#EF8B44" size={900} />
                </div>{" "}
              </div>
            )}
            {contenidoFirebase && (
              <>
                {contenidoFirebase.docs
                  .filter(
                    (item) =>
                      item.data().seccion === "Rutina" &&
                      item.data().n_tip ==
                        localStorage.getItem("localNumberTip") &&
                      item.data().edad ==
                        JSON.parse(localStorage.getItem("dateChild")).edad
                  )
                  .map((item) => (
                    <div className="">
                      <div className="row justify-content-center h-100 sin-margin-row">
                        <h1 className="tittle-tips tracking-in-expand-fwd-top">
                          {item.data().titulo}
                        </h1>
                      </div>
                      <div className="row justify-content-center  h-100 sin-margin-row">
                        <h3 className="tips-numbers tracking-in-expand-fwd-top">
                          TIP N°{item.data().n_tip}
                        </h3>
                      </div>
                      <div className="row tips-margin-top sin-margin-row tips-1-columna">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {item.data().icono !== "" ? (
                            <img src={item.data().icono} alt="" className="iconos-tips-blanco heartbeat" />
                          ) : (
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
                          )}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                          {JSON.parse(localStorage.getItem("dateChild")).edad== -1 ? (
                              <div class="text-tips">
                              <h3>Hola Mamita</h3>
                                <p class="text-tips-light">
                                  {item.data().texto1B}
                                </p>
                              <p class="text-tips-bold">{item.data().texto2}</p>
                            </div>
                          ): (
                            <div class="text-tips">
                            <h3>Hola</h3>
                            {item.data().texto1B !== "" ? (
                              <p class="text-tips-light">
                                {item.data().texto1A}
                                {JSON.parse(localStorage.getItem("dateChild")).name}
                                {item.data().texto1B}
                              </p>
                            ) : (
                              <p class="text-tips-light">
                                {item.data().texto1A}
                              </p>
                            )}
                            <p class="text-tips-bold">{item.data().texto2}</p>
                          </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TipsRutina;