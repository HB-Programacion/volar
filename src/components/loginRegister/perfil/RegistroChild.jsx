import React from "react";
import "../../aprendamos/cuidador/registroNiños.css";
import "../../aprendamos/aprendamos.css";
import "../../../App.css";
import "./perfil.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import { auth, db } from "../../../components/firebase/firebase";

const RegistroChild = (props) => {
  const [nameChild, setNameChild] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState("");
  const [relationshipChild, setRelationshipChild] = React.useState("");
  const [error, setError] = React.useState(null);
  const [guardado, setGuardado] = React.useState(null);
  const [edadChild, setEdadChild]=React.useState('');
  const [prueba,setPrueba]=React.useState('');
  const [idChild,setIdChild]=React.useState('')




  const procesarDatosAgregarChild = (e) => {
    e.preventDefault();
    if (!nameChild.trim()) {
      setError("Agregar nombre del niño(a)");
      return;
    }
    if (!sexo.trim()) {
      setError("Agregar sexo del niño(a)");
      return;
    }
    if (!edadChild.trim()) {
      setError("Agregar rango de edad del niño(a)");
      return;
    }
    if (!relationshipChild.trim()) {
      setError("Agregue el parentesco con el niño(a)");
      return;
    }
     

    addChild()
    setError(null);
  };

  React.useEffect(() => {
   { /*if(fechaNacimiento!==""){
        const birthday=new Date(fechaNacimiento.split('-').join('/'));
        const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs); 
      setEdadChild(Math.abs(ageDate.getUTCFullYear() - 1970))
      }*/}

      if(idChild!==""){
        const editarIdChild = async ( ) => {
          try {
            db.collection("usuarios").doc(props.firebaseUser.uid).collection('addChild').doc(idChild).update({
               id:idChild
              });
          } catch (error) {
            console.log(error);
          }
        };
        editarIdChild()
        props.mandarIdChild(idChild)
        localStorage.getItem('idChildLogueadoActive')
        props.history.push(`/aprendamos/cuidador/${idChild}`);
      }

      localStorage.setItem('nameChildActive', nameChild)
      localStorage.setItem('edadChildLogueadoActive', edadChild)

  /*    db.collection("usuarios").doc(props.firebaseUser.uid).collection('addChild').doc(idChild).update({
        nameChild: nameChild,
        sexoChild: sexo,
        nacimientoChild: fechaNacimiento,
        relationshipChild: relationshipChild,
        edadChild:edadChild,
        id:idChild
      })*/
  }, [idChild,props.firebaseUser, fechaNacimiento, props]);
  
  
  const addChild = React.useCallback(async () => {
    
    try {

  await db.collection("usuarios").doc(props.firebaseUser.uid).collection('addChild').add({
        nameChild: nameChild,
        sexoChild: sexo,
        nacimientoChild: fechaNacimiento,
        relationshipChild: relationshipChild,
        edadChild:edadChild,
        id:""
      }).then(docRef=> {
        setIdChild(docRef.id)

    });
      setError(null);
    } catch (error) {
      console.log(error);
    }
  }, [props.firebaseUser.uid, props.history, nameChild, sexo, fechaNacimiento, relationshipChild, edadChild, idChild]);
  
  
  return (
      <div className="register-child animated fadeIn">
          <h2 className="subtittle-register-child tracking-in-expand-fwd-top">Añadir Niño </h2>
        <div className="list-register">
          <form onSubmit={procesarDatosAgregarChild}>
            {error && <div className="alert alert-danger">{error}</div>}
            {guardado && <div className="alert alert-success">{guardado}</div>}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p className="letter-register">NOMBRE DE NIÑO:</p>
                <input
                  className="input-register-space"
                  type="text"
                  placeholder="Nombre del niño(a)"
                  name="nameChild"
                  onChange={(e) => setNameChild(e.target.value)}
                  value={nameChild}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p className="letter-register">SEXO:</p>
                <select
                  className="select-register-space"
                  onChange={(e) => setSexo(e.target.value)}
                  value={sexo}
                >
                  <option>---SELECCIONA---</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                </select>
              </div>
            </div>
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <p className="letter-register">EDAD DEL NIÑO</p>
              <select
                  className="select-register-space"
                  onChange={(e) => setEdadChild(e.target.value)}
                  value={edadChild}
                  
                >
                  <option value="">---SELECCIONA---</option>
                  <option  value="-1">Niño(a) por nacer</option>
                  <option value="0" >0 - 1 año</option>
                  <option value="1">1 - 2 años</option>
                  <option value="2">2 - 3 años</option>
                  <option value="3">3 - 4 años</option>
                  <option value="4">4 - 5 años</option>
                  <option value="5">5 - 6 años</option>
                </select>
            </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <p className="letter-register">PARENTESCO CON EL NIÑO(A):</p>
                <select
                  className="select-register-space"
                  onChange={(e) => setRelationshipChild(e.target.value)}
                  value={relationshipChild}
                >
                  <option>---SELECCIONA---</option>
                  <option>Mamá</option>
                  <option>Papá</option>
                  <option>Abuelo(a)</option>
                  <option>Tío(a)</option>
                  <option>Otros</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <button className="btn-navy-blue text-white wobble-hor-bottom boton-guardar-nino out-none-button" type="submit">
                  <img src={arrowLeft} className="arrow-blue"></img>
                  GUARDAR
                  <img src={arrowRight} className="arrow-blue"></img>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default withRouter(RegistroChild);
