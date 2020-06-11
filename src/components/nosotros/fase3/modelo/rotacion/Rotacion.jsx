import React from 'react'

import "./Rotacion.css"

import tablet from "../../../../../images/fase3-img/modelo/tablet.svg"

const Rotacion = () => {
    return (
        <div>
            <div className="img-modelo">
                <figure >
                    <img src={tablet} alt="" className="w-100"/>
                </figure>
                <p className="p-mobile-blue title-grueso">Rotación de tablets con contenido DIT</p>
                <p className="p-mobile-blue">Equipamos a nuestros aliados comunitarios con tablets para usar durante las visitas domiciliarias que realizan, estas tablets brindan contenido en diversos formatos como videos prácticos dirigidos al aprendizaje de conductas parentales positivas.</p>
                <p className="p-mobile-blue">Un aplicativo especializado permite personalizar la experiencia y hacer seguimiento a cada niño. Así, las familias pueden replicar las actividades que aprenden con sus hijas e hijos y fortalecer
                    su desarrollo de forma integral.</p>
            </div>
        </div>
    )
}

export default Rotacion
