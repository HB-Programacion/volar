import React from "react";
import "../../aprendamos/cuidador/registroNiños.css";
import "../../aprendamos/aprendamos.css";
import "../../../App.css";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import { auth,db } from "../../../components/firebase/firebase";
import Menu from "../../menu/Menu";
const Perfil = (props) => {

  const [emailEdit, setEmailEdit] = React.useState('');
  const [nameEdit, setNameEdit] = React.useState('');
  const [lastNameEdit, setLastNameEdit] = React.useState('');
  const [dataPerfil, setDataPerfil]=React.useState('')
  const [departamentos, setDepartamentos]=React.useState([]);
  const [provincias, setProvincias]=React.useState([]);
  const [departamentoElegido, setDepartamentoElegido]=React.useState('')
  const [departamentoElegidoKey, setDepartamentoElegidoKey]=React.useState('')
  const [provinciaElegido, setProvinciaElegido]=React.useState('')
  React.useEffect(() => {

    if (props.firebaseUser !== null) {
      const perfilUser = db.collection("usuarios").doc(props.firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) => {
          setDataPerfil(doc.data())
          setEmailEdit(doc.data().email);
          setNameEdit(doc.data().nombre);
          setLastNameEdit(doc.data().apellido)
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }

    fetch('formularioJson/departamentos.json')
    .then(response=> response.json())
    .then(datos=>{
      setDepartamentos(datos)
    })

    fetch('formularioJson/provincias.json')
    .then(response=> response.json())
    .then(datos=>{
      setProvincias(datos)
    })
  },[props.firebaseUser])
  
  console.log(departamentos[14])
  console.log("hola",departamentoElegido)

const handleInputChange=(event)=>{
  setDepartamentoElegido(event.target.value)
  const selectedIndex = event.target.options.selectedIndex;
  setDepartamentoElegidoKey(event.target.options[selectedIndex].getAttribute('data-key'));
}

const editarPerfil = async (e) => {
 e.preventDefault();
try {
    await db.collection("usuarios").doc(props.firebaseUser.uid).update({
     ...dataPerfil,
     nombre:nameEdit,
     apellido:lastNameEdit,
     email:emailEdit
    })


    props.history.push("/aprendamos/cuidador")
  } catch (error) {
    console.log(error);
};
}
  return(
    <div className="container">
      <div className="register-child">
        <div className="row">
          <h2 className="subtittle-register-child">Actualizar Perfil</h2>
        </div>
        <div className="list-register">
          <form onSubmit={editarPerfil}>
            <p className="letter-register">NOMBRE:</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={(e) => setNameEdit(e.target.value)}
              value={nameEdit}
            />
            <p className="letter-register">APELLIDO:</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Apellido"
              name="apellido"
              onChange={(e) => setLastNameEdit(e.target.value)}
              value={lastNameEdit}
            />
            <p className="letter-register">CORREO:</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmailEdit(e.target.value)}
              value={emailEdit}
            />
            <p className="letter-register">DEPARTAMENTO</p>
            <select className="select-register-space"
            onChange={handleInputChange}
            value={departamentoElegido}>
              <option>---SELECCIONA---</option>
             {departamentos.map(item=>(
                <option key={item.id} data-key={item.id}>{item.name}</option>
             ))} 
            </select>
            <p className="letter-register">PROVINCIA</p>
            <select className="select-register-space"
            onChange={(e) => setProvinciaElegido(e.target.value)}
            value={provinciaElegido}
            >
              <option>---SELECCIONA---</option>
              {provincias.map(item=>(
             item.department_id===departamentoElegidoKey?<option key={item.id}>{item.name}</option>:null
             ))}
            </select>
            <p className="letter-register">DISTRITO</p>
            <select className="select-register-space">
              <option>Villa el salvador</option>
              <option>San juan de miraflores</option>
              <option>Chorrillos</option>
              <option>Miraflores</option>
              <option>Surco</option>
              <option>La Molina</option>
              <option>Surquillo</option>
            </select>
            <p className="letter-register">COLABORADOR BRECA</p>

            <label className="style-radio">
              <input type="radio" name="breca" value="SI" />
              <span className="radio"></span>
              <span className="text">SI</span>
            </label>

            <label className="style-radio">
              <input type="radio" name="breca" value="NO" />
              <span className="radio"></span>
              <span className="text">NO</span>
            </label>

            <p className="letter-register">CÓDIGO COLABORADOR BRECA</p>
            <input
              className="input-register-space"
              type="text"
              placeholder="Código"
            />
            <p>{nameEdit}</p>
  <p>{departamentoElegido}</p>
              <button className="btn-navy-blue text-white" type="submit">
                <img src={arrowLeft} className="arrow-blue"></img>
                GUARDAR
                <img src={arrowRight} className="arrow-blue"></img>
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Perfil);
