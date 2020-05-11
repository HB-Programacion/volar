import React from 'react'

import cohete from '../../images/cohete-stars.svg';

const ConstruccionFase3 = () => {
    return (
        <div className="padding-top background-fase3" id="aprendamos-page">
          <div className="container">
            <div className="margin-top-bottom">
              <div className="text-center">
                 <h1 className="tittle-construccion-fase3">Fase 3</h1>
                 <h1 className="tittle-construccion-3">Refinar</h1>
              </div>
              <div className="row justify-content-center h-100 mt-3">
                 <h1 className="tittle-construccion-ok">En construcción</h1>
              </div>
            </div>
            {/* <figure className="cohete-construccion "> */}
              <img src={cohete} className="cohete-construccion"></img>
            {/* </figure> */}
          </div>
        </div>
    )
}

export default ConstruccionFase3
