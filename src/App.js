import React, {useState }from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { auth,db } from "./components/firebase/firebase";
// import {Planets} from 'react-preloaders';

import "./App.css";

import MenuNuevo from "./components/menu/Toolbar/MenuNuevo";
import SideDrawer from "./components/menu/SideDrawer/SideDrawer"
import Backdrop from "./components/menu/Backdrop/Backdrop"
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
import Perfil from './components/loginRegister/perfil/Perfil'

import Fase1 from "./components/fase1/Fase1";
import Fase2 from "./components/fase2/Fase2";
import Crecer from "./components/crecer/Crecer";
import Agua from "./components/agua-segura/AguaSegura";
import Piloto from "./components/Piloto/Piloto";
import { Orbitals} from 'react-spinners-css';



function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const[menuBurgerOpen,setmenuBurgerOpen]= useState(false);

  const drawerToggleClickHandler = () => {
    // if(prev){
    //   setmenuBurgerOpen(true)
    // }else{
    //   setmenuBurgerOpen(false)
    // }
    // setmenuBurgerOpen((prev)=>{
      setmenuBurgerOpen(true)
    //   return{menuBurgerOpen:!prev.menuBurgerOpen}
    // })
  }

  const ocultarMenuMobile =()=>{
    setmenuBurgerOpen(false)
  }
    // let sideDrawer;
    let backdrop;
    if(menuBurgerOpen){
      // sideDrawer = <SideDrawer/>;
      backdrop = <Backdrop click={ocultarMenuMobile}/>;
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
  }, [firebaseUser]);

  return  firebaseUser !== false ? (
    <Router>
      
      <div style={{height: '100%'}}>
        <MenuNuevo 
          firebaseUser={firebaseUser}
          drawerClickHandler={drawerToggleClickHandler} 
          ocultarMenuMobile={ocultarMenuMobile}
        />
        
        <SideDrawer 
        firebaseUser={firebaseUser}
        show={menuBurgerOpen}
        ocultarMenuMobile={ocultarMenuMobile}/>
        {backdrop}
        {/* <Menu firebaseUser={firebaseUser} /> */}
      
      <Switch style={{marginTop:"5rem"}}>
      {/* <Switch> */}
        <Route path="/" exact component={Home} className="animated" />
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
        <Route 
          path="/nosotros/fase1" 
          exact component={Fase1} />
        <Route 
          path="/nosotros/fase2" 
          exact component={Fase2} />
        <Route 
          path="/nosotros/fase2/crecer" 
          exact component={Crecer} />
          <Route 
          path="/nosotros/fase2/agua-segura" 
          exact component={Agua} />
          <Route 
          path="/nosotros/fase2/el-piloto" 
          exact component={Piloto} />
          
      </Switch>
      <Footer />
      </div>
    </Router>
  ):(

    <div className="grande">
      <div className="centrando-spiner">
      <Orbitals color="#EF8B44" size={900}/>
      </div>
    </div>
    
    );
}

export default App;
