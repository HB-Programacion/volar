import React, {useState }from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { auth,db } from "./components/firebase/firebase";

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

import Fase1 from "./components/fase1/Fase1"
import RegistroChild from "./components/loginRegister/perfil/RegistroChild";
import { useCollection } from "react-firebase-hooks/firestore";


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);
  const [userName, setUserName] = React.useState(false);
  const[sideDrawerOpen,setSideDrawerOpen]= useState(false);
  const [idChild, setIdChild] = React.useState("")
  const [arrayChild, setArrayChild] = React.useState("");
  const [subItem, setSubItem] = React.useState(false)


  const mostrarSubItem = ()=>{
      setSubItem(!subItem)
  }

  console.log("jkkks", subItem)
  const drawerToggleClickHandler = (prev) => {
    if(prev){
      setSideDrawerOpen(true)
    }else{
      setSideDrawerOpen(false)
    }
    // setSideDrawerOpen((prev)=>{
      
    //   return{sideDrawerOpen:!prev.sideDrawerOpen}
    // })
  }
  const [contenidoFirebase, loading, error] = useCollection(
    db.collection('contenido'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const mandarIdChild = (idChildArray) => {
    setIdChild(idChildArray);
    console.log("perro", idChild)
  };
  

  const updateArrayChild = (arrayChildT) => {
    setArrayChild(arrayChildT)
  }

  console.log(arrayChild)
  const backdropClickHandler =()=>{

    setSideDrawerOpen(false)
  }
    // let sideDrawer;
    let backdrop;
    if(sideDrawerOpen){
      // sideDrawer = <SideDrawer/>;
      backdrop = <Backdrop click={backdropClickHandler}/>;
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

  return  firebaseUser !== false ? (
    <Router>
      
      <div style={{height: '100%'}}>
        <MenuNuevo 
          firebaseUser={firebaseUser}
          drawerClickHandler={drawerToggleClickHandler} 
          mandarIdChild={mandarIdChild}
          idChild={idChild}
          updateArrayChild={updateArrayChild}
          userName={userName}
        />
        
        <SideDrawer 
        firebaseUser={firebaseUser}
        show={sideDrawerOpen}
        click={backdropClickHandler}
        userName={userName}
        mostrarSubItem={mostrarSubItem}
        subItem={subItem}
        idChild={idChild}/>
        {backdrop}
       
        {/* <Menu firebaseUser={firebaseUser} /> */}
      
      <Switch style={{marginTop:"6rem"}}>
      {/* <Switch> */}
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
          path={`/aprendamos/cuidador/${idChild}`}
          exact>
         <BienvenidoCuidador idChild={idChild} firebaseUser={firebaseUser} arrayChild={arrayChild}/>
        </Route>
        <Route path="/aprendamos/cuidador/higiene" exact>
          <Higiene contenidoFirebase={contenidoFirebase} error={error} loading={loading} firebaseUser={firebaseUser} idChild={idChild}/>
         </Route> 
        <Route path="/login" exact>
          <Login firebaseUser={firebaseUser} />
        </Route> 
        <Route path="/signup" exact>
          <Signup firebaseUser={firebaseUser} />
        </Route> 
        <Route path="/password/reset" exact component={PasswordReset} />
        {firebaseUser!==null ? <Route path="/perfil" exact>
          <Perfil firebaseUser={firebaseUser}/> 
        </Route>:null

        }
        
        <Route path="/registro-niño" exact>
          <RegistroChild  firebaseUser={firebaseUser} mandarIdChild={mandarIdChild}/> 
        </Route>
        <Route path="/contactanos" exact component={Contactanos} />
        <Route 
          path="/nosotros/fase1" 
          exact component={Fase1} />
      </Switch>
      <Footer />
      </div>
    </Router>
  ):(<p>CARGANDO</p>);
}

export default App;
