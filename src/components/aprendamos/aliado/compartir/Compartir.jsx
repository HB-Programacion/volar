import React from 'react'

import "./compartir.css"

import share from "../../../../images/docente/share.svg"

const Compartir = () => {
    return (
        <>
           <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//volar.org.pe/" className="compartir-aliado">
               <img src={share} alt=""/>
            </a> 
        </>
    )
}

export default Compartir
