import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./../../cuidador/areas/tips.css";
import { useHistory } from "react-router-dom";
/*import cohete from '../../images/cohete-volando.svg';*/
import arrTips from '../../../../data'
const MaterialEducativo = () => {
    let history = useHistory();
    return (
        <div>
        <div className="background-list-material-educativo" id="aprendamos-page">
          <div className=" animated fadeIn">
              <>
              <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback" aria-hidden="true"></i> 
                {arrTips
                  .filter(
                    (item) =>
                      item.seccion ==="Sésamo" &&
                      item.n_tip == localStorage.getItem('localNumberTip')
                  )
                  .map((item) => (
                    <div className="">
                      <div className="row justify-content-center h-100 sin-margin-row">
                        <h1 className="tittle-tips"> {item.titulo}</h1>
                      </div>
                      <div className="row justify-content-center  h-100 sin-margin-row">
                        <h3 className="tips-numbers"> {item.tipo}</h3>
                      </div>
                      <div className="row tips-margin-top sin-margin-row">
                        <div className="col-12">
                          <div className="videoWrapper-material-educativo">
                            <iframe
                              className="border-video-rutina"
                              width="600"
                              height="350"
                              src={item.video}
                              frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
          </div>
        </div>
      </div>
    )
}

export default MaterialEducativo
