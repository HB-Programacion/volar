import React from "react";
import "./areas.css";
import iconoHigieneWhite from "./../../../../images/icon-higiene-white.png";
import iconoVideoHigiene from "./../../../../images/icono-video-higiene.png";
import iconoTipHigiene from "./../../../../images/icono-tip-higiene.png";

export const Higiene = () => {
  return (
    <div>
      <div className="box-title-higine show-desktop">
        <img
          src={iconoHigieneWhite}
          className="icono-area"
          alt="gota de agua"
        />
        <h1 className="title-area">HIGIENE Y AGUA SEGURA</h1>
      </div>
      <div className="list-videos-tips">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoVideoHigiene}
                className="icono-video-tip"
                alt="icono de video"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">
                  ¡DESCUBRIENDO MI BARRIO!
                </h3>
                <h5 className="text-video-tip">VIDEO</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoTipHigiene}
                className="icono-video-tip"
                alt="icono de tip"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">AGUA SEGURA</h3>
                <h5 className="text-video-tip">TIP 1</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoVideoHigiene}
                className="icono-video-tip"
                alt="icono de video"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">
                  ¡DESCUBRIENDO MI BARRIO!
                </h3>
                <h5 className="text-video-tip">VIDEO</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoTipHigiene}
                className="icono-video-tip"
                alt="icono de tip"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">AGUA SEGURA</h3>
                <h5 className="text-video-tip">TIP 1</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoVideoHigiene}
                className="icono-video-tip"
                alt="icono de video"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">
                  ¡DESCUBRIENDO MI BARRIO!
                </h3>
                <h5 className="text-video-tip">VIDEO</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="box-section">
              <img
                src={iconoTipHigiene}
                className="icono-video-tip"
                alt="icono de tip"
              />
              <div className="box-text-video-tip">
                <h3 className="subtittle-video-tip">AGUA SEGURA</h3>
                <h5 className="text-video-tip">TIP 1</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
