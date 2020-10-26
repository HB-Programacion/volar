import React from "react";
import "./areas.css";
import { useHistory } from "react-router-dom";

import iconoHigieneWhite from "./../../../../images/icon-higiene-white.png";
import iconoTipLighBlue from "./../../../../images/icon-tip-ligh-blue.svg";

import arrTips from "../../../../data";

export const Higiene = ({
  contenidoFirebase,
  error,
  loading,
  firebaseUser,
  idChild,
}) => {
  let history = useHistory();

  let arrayHigiene = arrTips;

  arrayHigiene.sort(function(a, b) {
    if (a.n_tip > b.n_tip) {
      return 1;
    }
    if (a.n_tip < b.n_tip) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const mandarNumberTipOficial = (numberTip) => {
    localStorage.setItem("localNumberTip", numberTip);
  };

  return (
    <div>
      <a
        onClick={() => {
          history.goBack();
        }}
      >
        <i
          className="fas fa-chevron-left arrowGoback goBack-area"
          aria-hidden="true"
        ></i>
      </a>
      {firebaseUser !== null ? (
        <div>
          <div className="box-title-higine show-desktop">
            <img
              src={iconoHigieneWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area  tracking-in-expand-fwd-top">
              HIGIENE Y AGUA SEGURA
            </h1>
          </div>
          <div className="list-videos-tips">
            {/*  {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <div className="grande">
                <div className="centrando-spiner">
          <Orbitals color="#EF8B44" size={900} />
        </div>
      </div> }*/}
            {/* {contenidoFirebase && ( */}
            <div className="row">
              {arrayHigiene
                .filter(
                  (item) =>
                    item.seccion === "Higiene y Agua Segura" &&
                    item.edad == localStorage.getItem("edadChildLogueadoActive")
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <a
                      className="link"
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/higiene/tips`}
                      onClick={() => mandarNumberTipOficial(item.n_tip)}
                    >
                      <div className="box-section box-section-higiene">
                        <img
                          src={iconoTipLighBlue}
                          className="icono-video-tip"
                          alt="icono de tip"
                        />
                        <div className="box-text-video-tip">
                          <h3 className="subtittle-video-tip">{item.titulo}</h3>
                          <h5 className="text-video-tip">
                            Tip N° {item.n_tip}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
            {/*  )} */}
          </div>
        </div>
      ) : (
        <div>
          <a
            onClick={() => {
              history.goBack();
            }}
          >
            <i
              className="fas fa-chevron-left arrowGoback goBack-area"
              aria-hidden="true"
            ></i>
          </a>
          <div className="box-title-higine show-desktop">
            <img
              src={iconoHigieneWhite}
              className="icono-area heartbeat"
              alt="gota de agua"
            />
            <h1 className="title-area">HIGIENE Y AGUA SEGURA</h1>
          </div>
          <div className="list-videos-tips">
            {/*} {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}*/}
            {/* {contenidoFirebase && ( */}
            <div className="row">
              {arrayHigiene
                .filter(
                  (item) =>
                    item.seccion === "Higiene y Agua Segura" &&
                    item.edad ==
                      JSON.parse(localStorage.getItem("dateChild")).edad
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <a
                      className="link"
                      href="/aprendamos/cuidador/higiene/tips"
                      onClick={() => mandarNumberTipOficial(item.n_tip)}
                    >
                      <div className="box-section box-section-higiene">
                        <img
                          src={iconoTipLighBlue}
                          className="icono-video-tip"
                          alt="icono de tip"
                        />
                        <div className="box-text-video-tip">
                          <h3 className="subtittle-video-tip">{item.titulo}</h3>
                          <h5 className="text-video-tip">
                            Tip N° {item.n_tip}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </div>
            {/*})} */}
          </div>
        </div>
      )}
    </div>
  );
};
