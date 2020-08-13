import React from "react";
import "./loginRegister.css";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import arrowLeft from "./../../images/arrow-left-blue.svg";
import arrowRight from "./../../images/arrow-right-blue.svg";

const NewPassword = (props) => {
  const [password, SetPassword]=React.useState('');
  const [newPassword, SetNewPassword]=React.useState('');
  const [error, setError] = React.useState(null);

  const updatePassword = (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("ingrese password");
      return;
    }
    if (password.length < 8) {
      setError("Password mayor a 8 carácteres");
      return;
    } else{
       let  mayuscula = false;
       let  minuscula = false;
       let  numero = false;
       for(let  i = 0;i<password.length;i++)
       {
         if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
         {
           mayuscula = true;
         }
         else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
         {
           minuscula = true;
         }
         else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
         {
           numero = true;
         }
       }
       if(mayuscula == true && minuscula == true  && numero == true)
       {
        if(password!==newPassword){
          setError("Copia de contraseña es incorrecta");
          return;
      } else{
        confirmarUpdatePassword();
      }
       } else {
        setError("Password no contiene mayúscula, minúscula, números y/o contraseña no coinciden");
       }
    }
   
  };
  const  getParameterByName=( name )=>{
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    let regexS = "[\\?&]"+name+"=([^&#]*)";
    let regex = new RegExp( regexS );
    const results = regex.exec( window.location.href );
    if( results == null )
      return "";
    else
      return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
      // Get the action to complete.
      const mode = getParameterByName('mode');
      // Get the one-time code from the query parameter.
      const  actionCode = getParameterByName('oobCode');
      // (Optional) Get the continue URL from the query parameter if available.
      const  continueUrl = getParameterByName('continueUrl');
 
  const  confirmarUpdatePassword = async (e) => {
    try {
      let accountEmail;
     /* const res = await auth.createUserWithEmailAndPassword(email, password);*/
      await  auth.verifyPasswordResetCode(actionCode).then(email=>{
        accountEmail = email;
        auth.confirmPasswordReset(actionCode, newPassword).then(resp=> {
          console.log("tu password fue guardado")
          console.log(resp, "res")
          auth.signInWithEmailAndPassword(accountEmail, newPassword).then( res=>{
             console.log("logueado")
             db.collection("usuarios").doc(res.user.uid).update({
              password:newPassword, 
              
            })
            props.history.push("/perfil");
          })
        /*  auth.onAuthStateChanged(function(user) {
            if (user) {
              console.log("hola")
            }
          });*/
        }).catch(error=> {
          console.log(error, "error especifico")
          // Error occurred during confirmation. The code might have expired or the
          // password is too weak.
        });
        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.

      console.log(accountEmail,"hola")
      console.log(newPassword,"pass")
      
    
      })
      /*await db.collection(res.user.uid).add({
        nombre:'tarea de ejemplo',
        fecha:Date.now()
      })*/
     /* await db.collection("usuarios").doc(res.user.uid).set({
        password:newPassword,

      });*/
      /*console.log("información email", res.user)*/
     /* setPassword("");
      setEmail("");
      setError(null);
      props.history.push("/perfil");*/
      setError(null);
    } catch (error) {
      if (error.message === "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.") {
        setError("El código de acción no es válido. Esto puede suceder si el código tiene un formato incorrecto, ha caducado o ya se ha utilizado.");
      }  else (
        setError(error.message)
      )
    }
  };

 /* const [email, SetEmail]=React.useState('');
  const usuario = auth.currentUser;
  const resetPasswordEmail = async ()=>{
      var actionCodeSettings = {
          // After password reset, the user will be give the ability to go back
          // to this page.
          url: 'https://volar.org.pe/login',
          handleCodeInApp: false
        };
      await auth.sendPasswordResetEmail(
          email, actionCodeSettings)
          .then(function() {
            alert("Tu mensaje a sido enviado")

            // Password reset email sent.
          })
          .catch(function(error) {
            if(error="The email address is badly formatted."){
              alert("La dirección de correo electrónico está mal formateada. (Email mal escrito y/o no registrado)")
            } else {
              alert(error)
            }
            console.log(error)
          });
  }
*/




    

 /* const updatePassword=()=>{
    console.log(password, "judith-password")
  }*/

  return (
    <div className="animated fadeIn register-child">
    <h1 className="tittle-register-child tracking-in-expand-fwd-top">Estás a punto de cambiar tu contraseña</h1>
  <div className="list-login">
    <div className="box-text-a">
      <p style={{ textAlign: "center" }}>
      Al terminar, te enviaremos a iniciar sesión de nuevo con tu nueva contraseña
      </p>
    </div>
    <form onSubmit={updatePassword}>
    {error && <div className="alert alert-danger">{error}</div>}
    <p className="letter-login">Nueva Contraseña</p>
    <input
      className="input-register-space"
      type="password"
      placeholder="Nueva Contraseña"
      onChange={(e)=>SetPassword(e.target.value)}
      autoFocus
    />
     <p className="letter-login">Confirma tu Contraseña</p>
    <input
      className="input-register-space"
      type="password"
      placeholder="Confirma tu Contraseña"
      onChange={(e)=>SetNewPassword(e.target.value)}
       required
    />
      <button type="submit"   className="btn-login text-white">
        <img src={arrowLeft} className="arrow-blue"></img>
        Hacer el cambio de contraseña
        <img src={arrowRight} className="arrow-blue"></img>
      </button>
    </form>
 
  </div>
</div>
  );
};
export default withRouter(NewPassword);
