import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Nosotros from "./components/nosotros/Nosotros";
import { Aprendamos } from "./components/aprendamos/Aprendamos";
import { EmpiezaAprender } from "./components/aprendamos/EmpiezaAprender";
import { RegistroNiños } from "./components/aprendamos/cuidador/RegistroNiños";
import { BienvenidoCuidador } from "./components/aprendamos/cuidador/BienvenidoCuidador";
import { Higiene } from "./components/aprendamos/cuidador/areas/Higiene";
import Login from "./components/loginRegister/Login";
import Signup from "./components/loginRegister/Signup";
import { PasswordReset } from "./components/loginRegister/PasswordReset";
import { Contactanos } from "./components/contactanos/Contactanos";
import { auth,db } from "./components/firebase/firebase";
import Perfil from './components/loginRegister/perfil/Perfil'

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("usuario:)", user);
      if (user) {
        setFirebaseUser(user);
        const perfilUser = db.collection("usuarios").doc(firebaseUser.uid);
        perfilUser
          .get()
          .then((doc) => {
            setUserName(doc.data().nombre);
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      } else {
        setFirebaseUser(null);
      }
    });
  }, [firebaseUser]);

  return  firebaseUser !== false ? (
    <Router>
      <div className="">
        <Menu firebaseUser={firebaseUser} userName={userName} />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route path="/aprendamos/cuidador-principal" exact component={Aprendamos} />
        <Route
          path="/aprendamos"
          exact
          component={EmpiezaAprender}
        />
        <Route
          path="/aprendamos/cuidador/registro-niños"
          exact
          component={RegistroNiños}
        />
        <Route
          path="/aprendamos/cuidador"
          exact
          component={BienvenidoCuidador}
        />
        <Route path="/aprendamos/cuidador/higiene" exact component={Higiene} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/password/reset" exact component={PasswordReset} />
        <Route path="/perfil" exact>
          <Perfil firebaseUser={firebaseUser}  userName={userName}/> 
        </Route>
        <Route path="/contactanos" exact component={Contactanos} />
      </Switch>
      <Footer />
    </Router>
  ):(<p>CARGANDO</p>);
}

export default App;
