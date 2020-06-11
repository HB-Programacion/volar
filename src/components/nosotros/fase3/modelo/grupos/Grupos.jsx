import React from 'react'

import "../rotacion/Rotacion.css"

import tablet from "../../../../../images/fase3-img/modelo/grupo.svg"

const Grupos = () => {
    return (
        <div>
            <div className="img-modelo">
                <figure >
                    <img src={tablet} alt="" className="w-100"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Grupos de Interaprendizaje Familiar</p>
                <p className="p-mobile-blue">Estos espacios, tienen el objetivo de crear 
                    conocimientos compartidos a través del intercambio 
                    de experiencias y el diálogo sobre estos para buscar 
                    o idear estrategias y propuestas que atiendan a las 
                    inquietudes de los participantes. </p>
                
            </div>
        </div>
    )
}

export default Grupos
