import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./tips.css";
/*import cohete from '../../images/cohete-volando.svg';*/


import { Orbitals } from "react-spinners-css";


const TipsHigiene = ({ contenidoFirebase, error, loading }) => {
  return (
    <div>
      <div className="background-tips-higiene" id="aprendamos-page">
        <div className=" animated fadeIn">
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <div className="grande">
                <div className="centrando-spiner">
          <Orbitals color="#EF8B44" size={900} />
        </div> </div>}
          {contenidoFirebase && (
            <>
              {contenidoFirebase.docs
                .filter(
                  (item) => item.data().seccion === "Higiene y Agua Segura"  &&
                  item.data().n_tip ==  localStorage.getItem('localNumberTip')
                )
                .map((item) => (
                  <div className="">
                    <div className="row justify-content-center h-100 sin-margin-row">
                      <h1 className="tittle-tips tracking-in-expand-fwd-top">{item.data().titulo}</h1>
                    </div>
                    <div className="row justify-content-center  h-100 sin-margin-row">
                      <h3 className="tips-numbers tracking-in-expand-fwd-top">TIP N°{item.data().n_tip}</h3>
                    </div>
                    <div className="row tips-margin-top sin-margin-row">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="videoWrapper">
                          <iframe
                            className="border-video-higiene"
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
                          <p class="text-tips-light">{item.data().texto1A} {item.data().texto1B}</p>
                          <p class="text-tips-bold">
                          {item.data().texto2}
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

export default TipsHigiene;
