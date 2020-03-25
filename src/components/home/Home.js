import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock, // the clock icon
    faChevronDoubleLeft // the user circle icon
} from '@fortawesome/free-solid-svg-icons'

import nino from '../../images/nino.png';
import proposito from '../../images/proposito.svg';
import cognitivo from '../../images/d-cognitivo.svg';
import emocional from '../../images/d-emocional.svg';
import fisico from '../../images/d-fisico.svg';
import cohete from '../../images/cohete-stars.svg';
import groupNosotros from '../../images/group-nosotros.svg';


const Home = () => { 

    return (
<>
   <img src={nino} className="w-100 video-bg"></img>
   <div className="text-center text-white text-proposito">
       <div className="d-flex justify-content-center  text-center text-white">
            <h1>nuestro</h1>
            <img src={proposito} ></img>
       </div>
        <h1 className="h1-proposito">propósito</h1>
        <p>
            Darle a cada niña y niño, en su infancia temprana, la oportunidad de poder desarrollar al máximo las habilidades necesarias para su desarrollo integral. 
        </p>
        <p>Los bebés nacen listos para aprender. </p>
        <p><strong>¡Y tú tienes todo para ayudarlos</strong></p>
        <a className="btn-orange text-white">
            <span>&#8811;</span>
            ¡Entérate más!
            <span>&#8810;</span>
        </a>
   </div>
   <div className='container'>
   <div className="nosotros-home">
        <img src={groupNosotros} className="group-nosotros"></img>
        <h2>nosotros</h2>
        <p className="text-blue-volar">“Volar” es un proyecto de Aporta Desarrollo Sostenible, la plataforma de impacto social del Grupo Breca, diseñado con la intención de que las niñas y niños peruanos de 0 a 5 años alcancen su máximo potencial. </p>
        <p className="text-aguamarina">&#10022;</p>
        <p className="text-aguamarina">Está enfocado en ofrecer estrategias de crianza que fortalezcan:</p>
        <div className="box-estrategias">
            <img src={cognitivo} className="w-20 h-auto"></img>
            <img src={emocional} className="w-25 h-auto"></img>
            <img src={fisico} className="w-22 h-auto"></img>
        </div>
        <div className="mt-4 mb-4">
            <a className="btn-orange text-white">
                <span>&#8811;</span>
                nuestra historia
                <span>&#8810;</span>
            </a>
        </div>
        <img src={cohete}></img>
   </div>
   </div>
</>
)}
export default Home;