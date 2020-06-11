import React from 'react'

import "../rotacion/Rotacion.css"

import tablet from "../../../../../images/fase3-img/modelo/feria.svg"

const Feria = () => {
    return (
        <div>
            <div className="img-modelo-rosa">
                <figure >
                    <img src={tablet} alt="" className="w-100"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Feria familiar </p>
                <p className="p-mobile-blue">Apostamos una vez más por una feria 
con actividades que permitan instaurar 
una norma social en la comunidad a 
favor de la primera infancia. </p>
                
            </div>
        </div>
    )
}

export default Feria
