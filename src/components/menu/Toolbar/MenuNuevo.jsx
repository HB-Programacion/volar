import React from "react";
import { Link, withRouter,NavLink } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";

import "./MenuNuevo.css";
import DrawerToggleButton from"../SideDrawer/DrawerToggleButton"
import logo from '../../../images/menu-img/logo-volar.svg';
import candado from "../../../images/menu-img/candado-login.svg";
import MenuChild from "../MenuChild"

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
            <div className="toolbar-logo logo-box "><Link to='/' className=""><img src={logo} className="logo bounce-in-right"></img></Link></div>
            <div className="spacer"/>
            <div className="tollbar-navigation-items">
                <ul>
                    <li><NavLink to="/" activeClassName='is-activeHome' exact={true} >Inicio</NavLink></li>
                    <li><NavLink to="/nosotros" activeClassName='is-activeHome' >Nosotros</NavLink></li>
                    {
                      props.firebaseUser !== null ?  <li><NavLink to={`/aprendamos/${props.idChild}`} activeClassName='is-activeHome' >Aprendamos</NavLink></li> :
                      <li><NavLink to='/aprendamos' activeClassName='is-activeHome' >Aprendamos</NavLink></li>
                    }

                    <li><NavLink to="/contactanos" activeClassName='is-activeHome'>Contáctanos</NavLink></li>
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
   {
     props.firebaseUser!==null ? <MenuChild firebaseUser={props.firebaseUser} mandarIdChild={props.mandarIdChild} updateArrayChild={props.updateArrayChild}/> : null
   }
   
</div>
    )
}
export default withRouter(MenuNuevo)