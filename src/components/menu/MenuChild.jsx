import React from "react";
import "./menuChild.css";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,NavLink
  } from "react-router-dom";
  import { useCollection } from "react-firebase-hooks/firestore";
import { auth,db } from "../../components/firebase/firebase";

const MenuChild = ({firebaseUser, mandarIdChild,  updateArrayChild}) => {

    
        const [usuarioChild] = useCollection(
            db.collection("usuarios").doc(firebaseUser.uid).collection("addChild"),
            {
              snapshotListenOptions: { includeMetadataChanges: true },
            }
          );

        React.useEffect(() => {
            updateArrayChild(usuarioChild)
        
            ///Obteniendo todo el contenido de firebase///
          }, [updateArrayChild, usuarioChild])
  return (
    <div className="margin-top">
        <div className="nav-child">
        <div className="boton row">
            {usuarioChild && (<div className="">
            {usuarioChild.docs.map((item, key) => (
               <NavLink to={`/aprendamos/cuidador/${item.data().id}`} key={key} activeClassName='is-active'  
             className="item" onClick={()=>mandarIdChild(item.data().id)}>{item.data().nameChild}</NavLink>
              ))}
               </div>)}
        <NavLink to="/registro-niño" className="item">+ AGREGAR CHILD</NavLink>
      
      </div>
        </div>
    </div>
  );
};

export default MenuChild;
