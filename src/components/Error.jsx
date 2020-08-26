import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="padding-top background-error" id="aprendamos-page">
          <div className="container  animated fadeIn position-error">
            <Link  to="/" className="btn-error">Ir a la pagina de inicio</Link>
          </div>
        </div>
    )
}

export default Error