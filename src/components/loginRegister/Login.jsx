import React from "react";
import "./loginRegister.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";
import {auth, firebase, db} from "../firebase/firebase";
import { withRouter } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log("ingrese email");
      setError("ingrese email");
      return;
    }
    if (!password.trim()) {
      console.log("ingrese password");
      setError("ingrese password");
      return;
    }
    if (password.length < 6) {
      console.log("Password de 6 carácteres a más");
      setError("Password mayor a 6 carácteres");
      return;
    }
    login();
    setError(null);
  };
  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email,password);
      console.log(res.user);
      setPassword('')
      setEmail('')
      setError(null)
      props.history.push("/aprendamos/cuidador")
    } catch (error) {
      console.log(error);
      if(error.code==="auth/invalid-email"){
        setError('Email no válido...')
      }  
      if(error.code==="auth/user-not-found"){
        setError("Email no registrado")
      }
      if(error.code==="auth/wrong-password"){
        setError("Contraseña Incorrecta")
      }
    }
  }, [email,password, props.history]);

  const loginGoogle= React.useCallback(async () => {
    try {
       const  provider = new firebase.auth.GoogleAuthProvider()
      const res = await auth.signInWithPopup(provider);
      console.log("google", res.user);
      /*await db.collection(res.user.uid).add({
        nombre:'tarea de ejemplo',
        fecha:Date.now()
      })*/
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        nombre: res.user.displayName,
        apellido: "",
        tipo: "cuidador",
      });
      setPassword("");
      setEmail("");
      setError(null);
      props.history.push("/aprendamos/cuidador");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [props.history]);
  
  const loginFacebook= React.useCallback(async () => {
    try {
       const  provider = new firebase.auth.FacebookAuthProvider()
      const res = await auth.signInWithPopup(provider);
      console.log("facebook", res.user);
      /*await db.collection(res.user.uid).add({
        nombre:'tarea de ejemplo',
        fecha:Date.now()
      })*/
      await db.collection("usuarios").doc(res.user.uid).set({
        email: res.user.email,
        uid: res.user.uid,
        nombre: res.user.displayName,
        apellido: "",
        tipo: "cuidador",
      });
      setPassword("");
      setEmail("");
      setError(null);
      props.history.push("/aprendamos/cuidador");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [ props.history]);

  return (
    <div className="container">
      <div className="register-child">
        <div className="row">
          <h1 className="tittle-register-child">¡Bienvenido!</h1>
        </div>
        <div className="list-login">
          <form onSubmit={procesarDatos}>
            {error && <div className="alert alert-danger">{error}</div>}
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
            <button type="submit"  className="btn-login text-white">
              <img src={arrowLeft} className="arrow-blue"></img>
              INICIAR SESIÓN
              <img src={arrowRight} className="arrow-blue"></img>
            </button>
            </form>
          <div className="loginDivider">
            <span className="loginDivider-text">o</span>
          </div>
          <div className="btn-facebook-google">
              <button className="btn-facebook text-white"
               onClick={()=>loginFacebook()}>
                Iniciar sesión con Facebook
              </button>
              <button className="btn-google text-white"
               onClick={()=>loginGoogle()}>
                Iniciar sesión con Google
              </button>
 
          </div>
          <div className="box-text-a">
            <a className="text-a" href="/password/reset">
              ¿Olvidaste tu contraseña?
            </a>
            <div className="box-register">
              <p>¿No tienes una cuenta?</p>
              <a className="text-a" href="/signup">
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
