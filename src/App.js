import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { auth, db } from "./components/firebase/firebase";
// import {Planets} from 'react-preloaders';

import "./App.css";

import MenuNuevo from "./components/menu/Toolbar/MenuNuevo";
import SideDrawer from "./components/menu/SideDrawer/SideDrawer";
import Backdrop from "./components/menu/Backdrop/Backdrop";
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
// import { auth,db } from "./components/firebase/firebase";
import Perfil from "./components/loginRegister/perfil/Perfil";
import ConstruccionAprendamos from "./components/aprendamos/Construccion"

import Fase1 from "./components/nosotros/fase1/Fase1";
import RegistroChild from "./components/loginRegister/perfil/RegistroChild";
import { useCollection } from "react-firebase-hooks/firestore";
import Fase2 from "./components/nosotros/fase2/Fase2";
import Crecer from "./components/nosotros/fase2/crecer/Crecer";
import Agua from "./components/nosotros/fase2/agua-segura/AguaSegura";
import Piloto from "./components/nosotros/fase2/Piloto/Piloto";
import { Orbitals } from "react-spinners-css";
import Fase3 from "./components/nosotros/fase3/Fase3";
import Fase4 from "./components/nosotros/fase4/Fase4";
import ConstruccionLogin from "./components/loginRegister/ConstruccionLogin";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [idChild, setIdChild] = React.useState("");
  const [arrayChild, setArrayChild] = React.useState("");
  const [subItem, setSubItem] = React.useState(false);
  const [menuBurgerOpen, setmenuBurgerOpen] = React.useState(false);

  const mostrarSubItem = () => {
    setSubItem(!subItem);
  };

  // setSideDrawerOpen((prev)=>{

  //   return{sideDrawerOpen:!prev.sideDrawerOpen}

  const drawerToggleClickHandler = () => {
    // if(prev){
    //   setmenuBurgerOpen(true)
    // }else{
    //   setmenuBurgerOpen(false)
    // }
    // setmenuBurgerOpen((prev)=>{
    setmenuBurgerOpen(true);
    //   return{menuBurgerOpen:!prev.menuBurgerOpen}
    // })
  };
  const [contenidoFirebase, loading, error] = useCollection(
    db.collection("contenido"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const mandarIdChild = (idChildArray) => {
    setIdChild(idChildArray);
  };

  const updateArrayChild = (arrayChildT) => {
    setArrayChild(arrayChildT);
  };

  const ocultarMenuMobile = () => {
    setmenuBurgerOpen(false);
  };
  // let sideDrawer;
  let backdrop;
  if (menuBurgerOpen) {
    // sideDrawer = <SideDrawer/>;
    backdrop = <Backdrop click={ocultarMenuMobile} />;
  }

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
    ///Obteniendo todo el contenido de firebase///
  }, [firebaseUser]);

  return firebaseUser !== false ? (
    <Router>
      <div style={{ height: "100%" }}>
        <MenuNuevo
          firebaseUser={firebaseUser}
          drawerClickHandler={drawerToggleClickHandler}
          mandarIdChild={mandarIdChild}
          idChild={idChild}
          updateArrayChild={updateArrayChild}
          userName={userName}
          ocultarMenuMobile={ocultarMenuMobile}
        />

        <SideDrawer
          firebaseUser={firebaseUser}
          userName={userName}
          mostrarSubItem={mostrarSubItem}
          subItem={subItem}
          idChild={idChild}
          show={menuBurgerOpen}
          ocultarMenuMobile={ocultarMenuMobile}
        />
        {backdrop}

        {/* <Menu firebaseUser={firebaseUser} /> */}

        <Switch style={{ marginTop: "5rem" }}>
          {/* <Switch> */}
          <Route path="/" exact component={Home} className="animated" />
          <Route path="/nosotros" exact component={Nosotros} />
          <Route
            path="/aprendamos/cuidador-principal"
            exact
            component={Aprendamos}
          />
          <Route path="/aprendamos" exact component={EmpiezaAprender} />
          <Route
            path="/aprendamos/cuidador/registro-niños"
            exact
            component={RegistroNiños}
          />
          <Route path={`/aprendamos/cuidador/${idChild}`} exact>
            <BienvenidoCuidador
              idChild={idChild}
              firebaseUser={firebaseUser}
              arrayChild={arrayChild}
            />
          </Route>
          <Route path="/aprendamos/cuidador/higiene" exact>
            <Higiene
              contenidoFirebase={contenidoFirebase}
              error={error}
              loading={loading}
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path="/login" exact>
            <Login firebaseUser={firebaseUser} />
          </Route>
          <Route path="/login-construccion" exact component={ ConstruccionLogin}>
          </Route>
          <Route path="/signup" exact>
            <Signup firebaseUser={firebaseUser} />
          </Route>
          <Route path="/password/reset" exact component={PasswordReset} />
          {firebaseUser !== null ? (
            <Route path="/perfil" exact>
              <Perfil firebaseUser={firebaseUser} />
            </Route>
          ) : null}

          <Route path="/registro-niño" exact>
            <RegistroChild
              firebaseUser={firebaseUser}
              mandarIdChild={mandarIdChild}
            />
          </Route>
          <Route path="/contactanos" exact component={Contactanos} />
          <Route path="/nosotros/fase1" exact component={Fase1} />
          <Route path="/nosotros/fase2" exact component={Fase2} />
          <Route path="/nosotros/fase2/crecer" exact component={Crecer} />
          <Route path="/nosotros/fase2/agua-segura" exact component={Agua} />
          <Route path="/nosotros/fase2/el-piloto" exact component={Piloto} />
          <Route path="/construccion-aprendamos" exact component={ConstruccionAprendamos} />
          <Route path="/nosotros/fase3" exact component={Fase3} />
          <Route path="/nosotros/fase4" exact component={Fase4} />
        </Switch>
        <Footer />
      </div>
    </Router>
  ) : (
    <div className="grande">
      <div className="centrando-spiner">
        <Orbitals color="#EF8B44" size={900} />
      </div>
    </div>
  );
}

export default App;
