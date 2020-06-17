import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { auth, db, firebase } from "../firebase/firebase";
import { withRouter } from "react-router-dom";
import "./loginRegister.css";

import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

const Signup = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [error, setError] = React.useState(null);
  const procesarDatos = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("ingrese tu nombre");
      return;
    }
    if (!lastName.trim()) {
      setError("ingrese tu apellido");
      return;
    }
    if (!email.trim()) {
      setError("ingrese email");
      return;
    }
    if (!password.trim()) {
      setError("ingrese password");
      return;
    }
    if (password.length < 6) {
      setError("Password mayor a 6 carácteres");
      return;
    }
    if(password!==passwordRepeat){
        setError("Copia de contraseña es incorrecta");
        return;
    }

    if(password===passwordRepeat){
        registrar();
    } 
    setError(null);
  };

  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      /*await db.collection(res.user.uid).add({
        nombre:'tarea de ejemplo',
        fecha:Date.now()
      })*/
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        nombre: name,
        apellido: lastName,
        password:password,
        tipo: "cuidador",
        departamento:"",
        provincia:"",
        distrito:"",
        breca:"",
        codigoBreca:"",
        departamentoKey:"",
        provinciaKey:"",
      });
      console.log("información email", res.user)
      setPassword("");
      setEmail("");
      setError(null);
      props.history.push("/perfil");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [email, password, name, lastName, props.history]);
  
 {/*} const registerGoogle= React.useCallback(async () => {
    try {
       const  provider = new firebase.auth.GoogleAuthProvider()
      const res = await auth.signInWithPopup(provider);
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        nombre:res.user.displayName.split(' ')[0] ,
        apellido: res.user.displayName.split(' ')[2],
        departamento:"",
        provincia:"",
        distrito:"",
        breca:"",
        codigoBreca:"",
        departamentoKey:"",
        provinciaKey:"",
        tipo: "cuidador",
      });
      setError(null);
      props.history.push("/perfil");
    } catch (error) {
      console.log(error);
    }
  }, [props.history]);
  
  const registerFacebook= React.useCallback(async () => {
    try {
       const  provider =  new firebase.auth.FacebookAuthProvider()
      const res = await auth.signInWithPopup(provider);
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        nombre:res.user.displayName.split(' ')[0] ,
        apellido: res.user.displayName.split(' ')[2],
        tipo: "cuidador",
        departamento:"",
        provincia:"",
        distrito:"",
        breca:"",
        codigoBreca:"",
        departamentoKey:"",
        provinciaKey:"",
      });
      setError(null);
      props.history.push("/perfil");
    } catch (error) {
      console.log(error);
    }
  }, [ props.history]);*/}

  return (
      <div className="animated fadeIn register-child">
          <h1 className="tittle-register-child tracking-in-expand-fwd-top">Regístrate</h1>
        <div className="list-login">
          <form onSubmit={procesarDatos}>
            {error && <div className="alert alert-danger">{error}</div>}
            <p className="letter-login">NOMBRE</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
            />
            <p className="letter-login">APELLIDOS</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Apellidos"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <p className="letter-login">CORREO ELECTRÓNICO</p>
            <input
              className="input-register-space"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p className="letter-login">CONTRASEÑA</p>
            <input
              className="input-register-space"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className="letter-login">REPETIR CONTRASEÑA</p>
            <input
              className="input-register-space"
              type="password"
              placeholder="Repetir Contraseña"
              onChange={(e) => setPasswordRepeat(e.target.value)}
              value={passwordRepeat}
            />
            <button type="submit" className="btn-login text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              CREAR MI CUENTA
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
          </form>
         {
           /*  <div className="loginDivider">
            <span className="loginDivider-text">o</span>
          </div>
          <div className="btn-facebook-google">
              <button className="btn-facebook text-white"
              onClick={()=>registerFacebook()}>
                Regístrate con Facebook
              </button>
              <button className="btn-google text-white" onClick={()=>registerGoogle()}>
                Regístrate con Google
              </button>
          </div>*/ 
         }
          <div className="box-text-a">
            <div className="box-register">
              <p>¿Ya tienes una cuenta?</p>
              <Link className="text-a" to="/login">
                Inicia Sesión
              </Link>
            </div>
          </div>
          <div className="box-text-a">
            <Link className="text-a" to="/aprendamos/cuidador/registro-niños">
              Pruebe un consejo antes de crear una cuenta
            </Link>
          </div>
        </div>
      </div>
  );
};
export default withRouter(Signup);
