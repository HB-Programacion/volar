import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu.css";
import logo from "../../images/logo-volar.svg";
import candado from "../../images/candado-login.svg";
import "../../App.css";
import { auth, db } from "../firebase/firebase";

const Menu = (props) => {
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
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-white position-fixed w-100 style">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-desktop-aquamarine">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nosotros" className="nav-link text-desktop-aquamarine">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aprendamos"
                className="nav-link text-desktop-aquamarine"
              >
                Aprendamos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactanos"
                className="nav-link text-desktop-aquamarine"
              >
                Contáctanos
              </Link>
            </li>
            {props.firebaseUser !== null ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link font-color-orange dropdown-toggle"
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
                  <Link className="dropdown-item" to="/">
                    Mi perfil
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link font-color-orange">
                  <img src={candado} alt="candado" /> Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default withRouter(Menu);
