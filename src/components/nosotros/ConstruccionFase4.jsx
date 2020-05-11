import React from 'react'

import cohete from '../../images/cohete-stars.svg';

const ConstruccionFase4 = () => {
    return (
        <div className="padding-top background-fase3" id="aprendamos-page">
          <div className="container">
            <div className="margin-top-bottom">
              <div className="text-center">
                 <h1 className="tittle-construccion-fase3">Fase 4</h1>
                 <h1 className="tittle-construccion-3">Evaluar y escalar</h1>
              </div>
              <div className="row justify-content-center mt-3 h-100">
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

export default ConstruccionFase4
