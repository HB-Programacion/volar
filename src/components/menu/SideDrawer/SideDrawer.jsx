import React from "react";
import { Link, withRouter, NavLink} from "react-router-dom";
import { auth, db } from "../../firebase/firebase";

import "./SideDrawer.css";

import flecha from "../../../images/menu-img/flecha.svg"
import logoBlanco from "../../../images/menu-img/logo-blanco.svg"
import inicio from "../../../images/menu-img/inicio-icono.svg"
import nosotros from "../../../images/menu-img/nosotros-icono.svg"
import aprendamos from "../../../images/menu-img/aprendamos-icono.svg"
import contactanos from "../../../images/menu-img/contactanos-icono.svg"
import iniciar from "../../../images/menu-img/iniciar-icono.svg"

// const sideDraw = (props) => {
//     const [userName, setUserName] = useState("");
//     useEffect(() => {
//       if (props.firebaseUser !== null) {
//         const perfilUser = db.collection("usuarios").doc(props.firebaseUser.uid);
//         perfilUser
//           .get()
//           .then((doc) => {
//             setUserName(doc.data().nombre);
//           })
//           .catch(function (error) {
//             console.log("Error getting document:", error);
//           });
//       }
//     }, [props.firebaseUser]);
  
//     const cerrarSesion = () => {
//       auth.signOut().then(() => {
//         props.history.push("/login");
//       });
//     };


//     let drawerClasses = "side-drawer";
//     if (props.show){
//         drawerClasses ="side-drawer open"
//     }
//     return(
//         <nav className={drawerClasses}>
//             <ul>
//                 <li><Link to="/"><img src={logoBlanco} className="w-60 mb-5"/></Link></li>
//                 <li><Link to="/"><img src={inicio} className="w-15 mr-2"/>Inicio</Link></li>
//                 <li><Link to="/nosotros"><img src={nosotros}className="w-15 mr-2"/>Nosotros</Link></li>
//                 <li><Link to="/aprendamos"><img src={aprendamos} className="w-15 mr-2"/>Aprendamos</Link></li>
//                 <li><Link to="/contactanos"><img src={contactanos} className="w-15 mr-2"/>Contáctanos</Link></li>
//                 {props.firebaseUser !== null ? (
//                         <li className="nav-item dropdown">
//                             <a
//                                 className=" font-color-orange dropdown-toggle"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-toggle="dropdown"
//                                 aria-haspopup="true"
//                                 aria-expanded="false"
//                             >
//                             {userName}
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <a className="dropdown-item" onClick={() => cerrarSesion()}>
//                                 Cerrar Sesión
//                                 </a>
//                                 <Link className="dropdown-item" to="/">
//                                     Mi perfil
//                                 </Link>
//                             </div>
//                         </li>
//             )
//                     : (
//                 <li><Link to="/login"><img src={iniciar} className="w-15 mr-2"/>Iniciar sesión</Link></li>
//                 )}
//             </ul>
//         </nav>
//     )
// }
// export default sideDraw;




const sideDraw = (props) => {
    
    const cerrarSesion = () => {
        auth.signOut().then(() => {
          props.history.push("/login");
        });
      };
    
    let drawerClasses = "side-drawer";
    if (props.show){
        drawerClasses ="side-drawer open"
    }
    return(
        <nav className={drawerClasses}>
            <ul className="list-sidedraw">
                <div className="box-flecha" onClick={props.ocultarMenuMobile}>
                    <figure>
                        <img src={flecha} className="w-100"></img>
                    </figure>   
                </div>
                <li><NavLink to="/"  onClick={props.ocultarMenuMobile}><img src={logoBlanco} className="w-60 mb-5"/></NavLink></li>
                <li><NavLink to="/"  onClick={props.ocultarMenuMobile} activeClassName='is-activeHomeMobile' exact={true}><img src={inicio} className="w-15 mr-2"/>Inicio</NavLink></li>
                <li><NavLink to="/nosotros" onClick={props.ocultarMenuMobile} activeClassName='is-activeHomeMobile'><img src={nosotros}className="w-15 mr-2"/>Nosotros</NavLink></li>
                {
                      props.firebaseUser !== null ?  <li><NavLink to={`/aprendamos/cuidador/${props.idChild}`} onClick={props.ocultarMenuMobile} activeClassName='is-activeHomeMobile' ><img src={aprendamos} className="w-15 mr-2"/>Aprendamos</NavLink></li> :
                      <li><NavLink to='/aprendamos'onClick={props.ocultarMenuMobile}  activeClassName='is-activeHomeMobile'><img src={aprendamos} className="w-15 mr-2"/>Aprendamos</NavLink></li>
                    }
                <li><NavLink to="/contactanos" onClick={props.ocultarMenuMobile} activeClassName='is-activeHomeMobile'><img src={contactanos} className="w-15 mr-2"/>Contáctanos</NavLink></li>
                 {props.firebaseUser !== null ? 
                  ( <div><li><Link onClick={() => props.mostrarSubItem()}><img src={contactanos} className="w-15 mr-2 dropdown-toggle"/>{props.userName} <i class="fas fa-angle-down"></i></Link></li>
                  {props.subItem=== true ?<div>
                  <li><Link className="sub-Item" onClick={props.ocultarMenuMobile}  to="/perfil">Mi Perfil</Link></li>
                  <li><Link className="sub-Item" onClick={() => cerrarSesion()} >Cerrar Sesión</Link></li>
                      </div> : null }</div>)
                   : <li><NavLink to="/login" activeClassName='is-activeHomeMobile'><img src={iniciar} className="w-15 mr-2"/>Iniciar sesión</NavLink></li>}
                
                
            </ul>
        </nav>
        
    )
}
export default withRouter(sideDraw);