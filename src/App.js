import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { auth, db } from "./components/firebase/firebase";
// import {Planets} from 'react-preloaders';

import "./App.css";

import { Orbitals } from "react-spinners-css";
import MenuNuevo from "./components/menu/Toolbar/MenuNuevo";
import SideDrawer from "./components/menu/SideDrawer/SideDrawer";
import Backdrop from "./components/menu/Backdrop/Backdrop";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Nosotros from "./components/nosotros/Nosotros";

import { Aprendamos } from "./components/aprendamos/aprendamos";
import { EmpiezaAprender } from "./components/aprendamos/EmpiezaAprender";
import RegistroNiños from "./components/aprendamos/cuidador/RegistroNiños";
import { BienvenidoCuidador } from "./components/aprendamos/cuidador/BienvenidoCuidador";
import { Higiene } from "./components/aprendamos/cuidador/areas/Higiene";
import { Socioemocional } from "./components/aprendamos/cuidador/areas/Socioemocional";
import { Rutina } from "./components/aprendamos/cuidador/areas/Rutina";
import { Juego } from "./components/aprendamos/cuidador/areas/Juego";
import { Nutricion } from "./components/aprendamos/cuidador/areas/Nutricion";
import { Sesamo } from "./components/aprendamos/cuidador/areas/Sesamo";
import TipsHigiene from "./components/aprendamos/cuidador/areas/TipsHigiene";
import TipsSocioemocional from "./components/aprendamos/cuidador/areas/TipsSocioemocional";
import TipsRutina from "./components/aprendamos/cuidador/areas/TipsRutina";
import TipsJuego from "./components/aprendamos/cuidador/areas/TipsJuego";
import TipsNutricion from "./components/aprendamos/cuidador/areas/TipsNutricion";
import TipsSesamo from "./components/aprendamos/cuidador/areas/TipsSesamo"
import Login from "./components/loginRegister/Login";
import Signup from "./components/loginRegister/Signup";
import PoliticaDePrivacidad from "./components/loginRegister/PoliticaDePrivacidad";
import { PasswordReset } from "./components/loginRegister/PasswordReset";
import NewPassword from "./components/loginRegister/NewPassword";
import { Contactanos2 } from "./components/contactanos/Contactanos3";
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
import Fase3 from "./components/nosotros/fase3/Fase3";
import Fase4 from "./components/nosotros/fase4/Fase4";
import ConstruccionLogin from "./components/loginRegister/ConstruccionLogin";
import Modelo from "./components/nosotros/fase3/modelo/Modelo";
import Redes from "./components/redes/Redes";
import Involucramiento from "./components/nosotros/fase3/modelo/involucramiento/Involucramiento";
import Rotacion from "./components/nosotros/fase3/modelo/rotacion/Rotacion";
import Grupos from "./components/nosotros/fase3/modelo/grupos/Grupos";
import Programa from "./components/nosotros/fase3/modelo/programa-mensajeria/Programa";
import Spots from "./components/nosotros/fase3/modelo/spots/Spots";
import Feria from "./components/nosotros/fase3/modelo/feria/Feria";
import AprendamosAliados from "./components/aprendamos/AprendamosAliados";
import Docente from "./components/aprendamos/aliado/docente/Docente";
import ListMaterialEducativo from "./components/aprendamos/aliado/docente/ListMaterialEducativo";
import MaterialEducativo from "./components/aprendamos/aliado/docente/MaterialEducativo";
import Modulos from "./components/aprendamos/aliado/otros-roles/Modulos";
import Modulo1 from "./components/aprendamos/aliado/otros-roles/Modulo_1";
import Modulo2 from "./components/aprendamos/aliado/otros-roles/Modulo_2";
import Modulo3 from "./components/aprendamos/aliado/otros-roles/Modulo_3";
import Modulo4 from "./components/aprendamos/aliado/otros-roles/Modulo_4";
import Modulo5 from "./components/aprendamos/aliado/otros-roles/Modulo_5";
import Modulo6 from "./components/aprendamos/aliado/otros-roles/Modulo_6";
import Modulo7 from "./components/aprendamos/aliado/otros-roles/Modulo_7";
import Modulo8 from "./components/aprendamos/aliado/otros-roles/Modulo_8";
import Recursos from "./components/aprendamos/aliado/docente/recursos/Recursos";
import Inicial from "./components/aprendamos/aliado/docente/recursos/inicial/Inicial";
import Primaria from "./components/aprendamos/aliado/docente/recursos/primaria/Primaria";
import Secundaria from "./components/aprendamos/aliado/docente/recursos/secundaria/Secundaria";
import Cuentacuentos from "./components/aprendamos/aliado/docente/recursos/cuentacuentos/Cuentacuentos";
import Error from "./components/Error"
import Condiciones from "./components/loginRegister/Condiciones";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const [idChild, setIdChild] = React.useState("");
  const [arrayChild, setArrayChild] = React.useState("");
  const [subItem, setSubItem] = React.useState(false);
  const [menuBurgerOpen, setmenuBurgerOpen] = React.useState(false);
  const [contenidoJson, setContenidoJson] = React.useState([]);

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
  {/*const [contenidoFirebase, loading, error] = useCollection(
    db.collection("contenido").orderBy("n_tip", "asc"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );*/}



  const mandarIdChild = (idChildArray, nameChild, edadChild) => {
    setIdChild(idChildArray);
    localStorage.setItem('nameChildActive', nameChild)
    localStorage.setItem('edadChildLogueadoActive', edadChild)
    localStorage.setItem('idChildLogueadoActive', idChildArray)
    const dateChildActive = {
      name: nameChild, // Generamos una id rápida
      edad: edadChild,
      id: idChildArray,
    };
    localStorage.setItem('dateChildActive', JSON.stringify(dateChildActive))

  };



  const updateArrayChild = (arrayChildT) => {
    setArrayChild(arrayChildT);

    console.log("judith", arrayChild)

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

  console.log("holis", contenidoJson)
  React.useEffect(() => {

    {/* fetch("../data.json")
    .then((response) => response.json())
    .then((datos) => {
      setContenidoJson(datos);
      console.log("holita", datos)
    });
  */}

    auth.onAuthStateChanged((user) => {

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

          <Route path="/aprendamos" exact>
            <EmpiezaAprender
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>

          <Route
            path="/aprendamos/cuidador/registro-niños"
            exact
            component={RegistroNiños}
          />
          {localStorage.getItem('idChildLogueadoActive') !== null ? (
            <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}`} exact>
              <BienvenidoCuidador
                idChild={idChild}
                firebaseUser={firebaseUser}
                arrayChild={arrayChild}
              />
            </Route>
          ) : (
              <Route path={`/aprendamos/cuidador/`} exact>
                <BienvenidoCuidador
                  idChild={idChild}
                  firebaseUser={firebaseUser}
                  arrayChild={arrayChild}
                />
              </Route>
            )
          }


          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/higiene`} exact>
            <Higiene
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/socioemocional`} exact>
            <Socioemocional
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/rutina`} exact>
            <Rutina
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/juego`} exact>
            <Juego
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/nutricion`} exact>
            <Nutricion
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/sesamo`} exact>
            <Sesamo
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/higiene/tips`} exact>
            <TipsHigiene
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/socioemocional/tips`} exact>
            <TipsSocioemocional
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/rutina/tips`} exact>
            <TipsRutina
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/juego/tips`} exact>
            <TipsJuego
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/nutricion/tips`} exact>
            <TipsNutricion
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/${localStorage.getItem('idChildLogueadoActive')}/sesamo/tips`} exact>
            <TipsSesamo
            />
          </Route>
          <Route path={`/aprendamos/cuidador/higiene`} exact>
            <Higiene
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/socioemocional`} exact>
            <Socioemocional
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/rutina`} exact>
            <Rutina
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/juego`} exact>
            <Juego
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/nutricion`} exact>
            <Nutricion
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/sesamo`} exact>
            <Sesamo
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/higiene/tips`} exact>
            <TipsHigiene
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/socioemocional/tips`} exact>
            <TipsSocioemocional
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/rutina/tips`} exact>
            <TipsRutina
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/juego/tips`} exact>
            <TipsJuego
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/nutricion/tips`} exact>
            <TipsNutricion
              firebaseUser={firebaseUser}
              idChild={idChild}
            />
          </Route>
          <Route path={`/aprendamos/cuidador/sesamo/tips`} exact>
            <TipsSesamo
            />
          </Route>
          <Route path={"/aprendamos/aliado"} exact>
            <AprendamosAliados
            />
          </Route>
          <Route path="/politica-de-privacidad" exact component={PoliticaDePrivacidad}>
          </Route>
          <Route path="/login" exact>
            <Login firebaseUser={firebaseUser} />
          </Route>
          <Route path="/contactanos" exact component={Contactanos} />
          <Route path="/nosotros/fase1" exact component={Fase1} />
          <Route path="/nosotros/fase2" exact component={Fase2} />
          <Route path="/nosotros/fase2/crecer" exact component={Crecer} />
          <Route path="/nosotros/fase2/agua-segura" exact component={Agua} />
          <Route path="/nosotros/fase2/el-piloto" exact component={Piloto} />
          <Route path="/construccion-aprendamos" exact component={ConstruccionAprendamos} />
          <Route path="/nosotros/fase3" exact component={Fase3} />
          <Route path="/nosotros/fase3/modelo-volar" exact component={Modelo} />
          <Route path="/nosotros/fase3/modelo-volar/involucramiento-formacion-de-aliados-comunitarios" exact component={Involucramiento} />
          <Route path="/nosotros/fase4" exact component={Fase4} />
          <Route path="/nosotros/fase3/modelo-volar/rotacion-de-tablets" exact component={Rotacion} />
          <Route path="/nosotros/fase3/modelo-volar/grupos-de-aprendizaje-familiar" exact component={Grupos} />
          <Route path="/nosotros/fase3/modelo-volar/programa-mensajeria-de-texto" exact component={Programa} />
          <Route path="/nosotros/fase3/modelo-volar/spots-radiales" exact component={Spots} />
          <Route path="/nosotros/fase3/modelo-volar/feria-familiar" exact component={Feria} />
          <Route path="/aprendamos/aliado/docente" exact component={Docente} />
          <Route path="/aprendamos/aliado/docente/material-educativo" exact component={ListMaterialEducativo} />
          <Route path="/aprendamos/aliado/modulos" exact component={Modulos} />
          <Route path="/aprendamos/aliado/modulos/modulo_1" exact component={Modulo1} />
          <Route path="/aprendamos/aliado/modulos/modulo_2" exact component={Modulo2} />
          <Route path="/aprendamos/aliado/modulos/modulo_3" exact component={Modulo3} />
          <Route path="/aprendamos/aliado/modulos/modulo_4" exact component={Modulo4} />
          <Route path="/aprendamos/aliado/modulos/modulo_5" exact component={Modulo5} />
          <Route path="/aprendamos/aliado/modulos/modulo_6" exact component={Modulo6} />
          <Route path="/aprendamos/aliado/modulos/modulo_7" exact component={Modulo7} />
          <Route path="/aprendamos/aliado/modulos/modulo_8" exact component={Modulo8} />
          <Route path={`/aprendamos/aliado/docente/material-educativo/individual`} exact component={MaterialEducativo} />
          <Route path="/aprendamos/aliado/docente/recursos-extras" exact component={Recursos} />
          <Route path="/aprendamos/aliado/docente/recursos-extras/inicial" exact component={Inicial} />
          <Route path="/aprendamos/aliado/docente/recursos-extras/primaria" exact component={Primaria} />
          <Route path="/aprendamos/aliado/docente/recursos-extras/secundaria" exact component={Secundaria} />
          <Route path="/aprendamos/aliado/docente/recursos-extras/cuentacuentos" exact component={Cuentacuentos} />
          <Route path="/condiciones" exact component={Condiciones} />
          <Route path="/registro-niño" exact>
            <RegistroChild
              firebaseUser={firebaseUser}
              mandarIdChild={mandarIdChild}
            />
          </Route>
          {firebaseUser !== null ? (
            <Route path="/perfil" exact>
              <Perfil firebaseUser={firebaseUser} />
            </Route>
          ) :
            (<>
              <Route path="/signup" exact>
                <Signup firebaseUser={firebaseUser} />
              </Route>
              <Route path="/password/reset" exact component={PasswordReset} />
              <Route path="/new-password" exact component={NewPassword} /></>)}
          {/* <Route component={Error} /> */}
        </Switch>
        <Footer />
        <Redes />
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
