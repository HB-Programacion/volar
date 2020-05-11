import React from 'react'

import cohete from '../../images/cohete-volando.svg';

const ConstruccionFase3 = () => {
    return (
        <div className="padding-top background" id="aprendamos-page">
          <div className="container">
            <div className="margin-top-bottom">
              <div className="text-center">
                 <h1 className="tittle-construccion-fase">Fase 3</h1>
                 <h1 className="tittle-construccion">Refinar</h1>
              </div>
              <div className="row justify-content-center h-100">
                 <h1 className="tittle-construccion">En construcción</h1>
              </div>
            </div>
            <figure className="position-relative cohete-volando-figure mt-5">
              <img src={cohete} className="cohete-volando w-100"></img>
            </figure>
          </div>
        </div>
    )
}

export default ConstruccionFase3
