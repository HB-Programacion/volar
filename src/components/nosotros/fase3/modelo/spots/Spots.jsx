import React from 'react'

import "../rotacion/Rotacion.css"

import tablet from "../../../../../images/fase3-img/modelo/radio.svg"

const Spots = () => {
    return (
        <div>
            <div className="img-modelo-rosa">
                <figure >
                    <img src={tablet} alt="" className="w-100"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Spots Radiales</p>
                <p className="p-mobile-blue">Usamos el “quechuañol” (español y quechua)
como idioma en nuestros spots para poder
llegar a mayor cantidad de familias.</p>
                
            </div>
        </div>
    )
}

export default Spots
