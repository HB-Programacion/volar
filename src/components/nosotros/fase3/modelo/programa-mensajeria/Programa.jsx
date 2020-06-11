import React from 'react'

import "../rotacion/Rotacion.css"

import tablet from "../../../../../images/fase3-img/modelo/mensajeria.svg"

const Programa = () => {
    return (
        <div>
            <div className="img-modelo-rosa">
                <figure >
                    <img src={tablet} alt="" className="w-100"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Programa de Mensajería de Texto</p>
                <p className="p-mobile-blue">Hemos fortalecido y diferenciado nuestra batería 
de mensajes de texto en función a los diferentes 
actores con los que trabajamos en cada una de 
las intervenciones. </p>
                
            </div>
        </div>
    )
}

export default Programa
