import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
/*import cohete from '../../images/cohete-volando.svg';*/

const TipsSocioemocional = () => {
  return (
    <div>
      <div className="background-tips-socioemocional" id="aprendamos-page">
      <div className=" animated fadeIn">
        <div className="">
          <div className="row justify-content-center h-100 sin-margin-row">
            <h1 className="tittle-tips tracking-in-expand-fwd-top">EVITA ENFERMEDADES</h1>
          </div>
          <div className="row justify-content-center  h-100 sin-margin-row">
            <h3 className="tips-numbers">TIP 1</h3>
          </div>
          <div className="row tips-margin-top sin-margin-row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="videoWrapper">
                <iframe
                className="border-video-socioemocional"
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/2mY7AFTtYwQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div class="text-tips">
                <p class="text-tips-light">
                  Cuando descanses aprovecha para comunicarte con tu bebé.
                  ¡Puedes cantarle tu canción favorita! Él escucha todo a tu
                  alrededor.
                </p>
                <p class="text-tips-bold">¡Siguiendo estos consejos estas sumando al desarrollo integral de tu bebé!</p>
              </div>
            </div>
          </div>
        </div>
        {/*<figure className="position-relative cohete-volando-figure mt-5">
              <img src={cohete} className="cohete-volando w-100"></img>
    </figure>*/}
      </div>
    </div>
    </div>
  );
};

export default TipsSocioemocional;
