import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";

import "./MenuNuevo.css";
import DrawerToggleButton from"../SideDrawer/DrawerToggleButton"
import logo from '../../../images/menu-img/logo-volar.svg';
import candado from "../../../images/menu-img/candado-login.svg";


const MenuNuevo =props => {
    const [userName, setUserName] = React.useState("");
  React.useEffect(() => {
    if (props.firebaseUser !== null) {
      const perfilUser = db.collection("usuarios").doc(props.firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) => {
          setUserName(doc.data().nombre);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [props.firebaseUser]);

  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };
    return (
<div>
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-logo logo-box"><Link to='/' className=""><img src={logo} className="logo"></img></Link></div>
            <div className="spacer"/>
            <div className="tollbar-navigation-items">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to='/aprendamos'>Aprendamos</Link></li>
                    <li><Link to="/contactanos">Contáctanos</Link></li>
                    {props.firebaseUser !== null ? (
                        <li className="nav-item dropdown">
                            <a
                                className=" font-color-orange dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            {userName}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" onClick={() => cerrarSesion()}>
                                Cerrar Sesión
                                </a>
                                <Link className="dropdown-item" to="/perfil">
                                    Mi perfil
                                </Link>
                            </div>
                        </li>
            )
                    : (
                    <li className="mostrar-siempre"><Link to="/login" className="font-color-orange"><img src={candado} alt="candado" className="" /> Iniciar sesión</Link> </li>
                    )}
                </ul>
            </div>
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
</div>
    )
}
export default withRouter(MenuNuevo)