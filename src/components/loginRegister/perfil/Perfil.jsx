import React from "react";
import "../../aprendamos/cuidador/registroNiños.css";
import "../../aprendamos/aprendamos.css";
import "../../../App.css";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import { auth,db } from "../../../components/firebase/firebase";
const Perfil = (props) => {

  const [emailEdit, setEmailEdit] = React.useState('');
  const [nameEdit, setNameEdit] = React.useState('');
  const [lastNameEdit, setLastNameEdit] = React.useState('');
  const [dataPerfil, setDataPerfil]=React.useState('')
  const [departamentos, setDepartamentos]=React.useState([]);
  const [provincias, setProvincias]=React.useState([]);
  const [distritos, setDistritos]=React.useState([]);
  const [departamentoElegido, setDepartamentoElegido]=React.useState('')
  const [departamentoElegidoKey, setDepartamentoElegidoKey]=React.useState('')
  const [provinciaElegido, setProvinciaElegido]=React.useState('')
  const [provinciaElegidoKey, setProvinciaElegidoKey]=React.useState('')
  const [distritoElegido, setDistritoElegido]=React.useState('')
  const  [colaboradorBreca, setColaboradorBreca]=React.useState('')
  const  [codigoBreca, setCodigoBreca]=React.useState('')
  const [error, setError] = React.useState(null);

  React.useEffect(() => {

    if (props.firebaseUser !== null) {
      const perfilUser = db.collection("usuarios").doc(props.firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) => {
          setDataPerfil(doc.data())
          setEmailEdit(doc.data().email);
          setNameEdit(doc.data().nombre);
          setLastNameEdit(doc.data().apellido);
          setCodigoBreca(doc.data().codigoBreca);
          setDepartamentoElegido(doc.data().departamento);
          setProvinciaElegido(doc.data().provincia);
          setDistritoElegido(doc.data().distrito);
          setColaboradorBreca(doc.data().breca);
          setDepartamentoElegidoKey(doc.data().departamentoKey);
          setProvinciaElegidoKey(doc.data().provinciaKey);

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
    
    fetch('formularioJson/distritos.json')
    .then(response=> response.json())
    .then(datos=>{
      setDistritos(datos)
    })

  },[props.firebaseUser])
  

const handleInputChangeDepartamento=(event)=>{
  setDepartamentoElegido(event.target.value)
  const selectedIndex = event.target.options.selectedIndex;
  setDepartamentoElegidoKey(event.target.options[selectedIndex].getAttribute('data-key'));
}

const handleInputChangeProvincia=(event)=>{
  setProvinciaElegido(event.target.value)
  const selectedIndex = event.target.options.selectedIndex;
  setProvinciaElegidoKey(event.target.options[selectedIndex].getAttribute('data-key'));
}

const procesarDatosPerfil = (e) => {
  e.preventDefault();
  if (!nameEdit.trim()) {
    setError("Ingrese tu nombre");
    return;
  }
  if (!lastNameEdit.trim()) {
    setError("Ingrese tu apellido");
    return;
  }
  if (!emailEdit.trim()) {
    setError("Ingrese su  email");
    return;
  }
  if (!departamentoElegido.trim()) {
    setError("Seleccione un departamento");
    return;
  }
  if (!provinciaElegido.trim()) {
    setError("Seleccione una provincia");
    return;
  }
  if (!distritoElegido.trim()) {
    setError("Seleccione un distrito");
    return;
  }
  if(!colaboradorBreca.trim()){
      setError("Seleccione si es colaborador breca");
      return;
  }

  if(colaboradorBreca==='SI' && !codigoBreca.trim()){
    setError("Colocar código Breca");
    return;
}

      editarPerfil();

  setError(null);
};
const editarPerfil = async (e) => {
try {
    await db.collection("usuarios").doc(props.firebaseUser.uid).update({
     ...dataPerfil,
     nombre:nameEdit,
     apellido:lastNameEdit,
     email:emailEdit,
     departamento:departamentoElegido,
     provincia:provinciaElegido,
     distrito:distritoElegido,
     breca:colaboradorBreca,
     codigoBreca:codigoBreca,
     departamentoKey:departamentoElegidoKey,
     provinciaKey:provinciaElegidoKey
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
          <form onSubmit={procesarDatosPerfil}>
          {error && <div className="alert alert-danger">{error}</div>}
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
            onChange={handleInputChangeDepartamento}
            value={departamentoElegido}>
              <option>---SELECCIONA---</option>
             {departamentos.map(item=>(
                <option key={item.id} data-key={item.id}>{item.name}</option>
             ))} 
            </select>
            <p className="letter-register">PROVINCIA</p>
            <select className="select-register-space"
            onChange={handleInputChangeProvincia}
            value={provinciaElegido}
            >
              <option>---SELECCIONA---</option>
              {provincias.map(item=>(
             item.department_id===departamentoElegidoKey?<option key={item.id} data-key={item.id}>{item.name}</option>:null
             ))}
            </select>
            <p className="letter-register">DISTRITO</p>
            <select className="select-register-space"
            onChange={(e)=>setDistritoElegido(e.target.value)}
            value={distritoElegido}>
            <option>---SELECCIONA---</option>
              {distritos.map(item=>(
             item.province_id===provinciaElegidoKey?<option key={item.id}  data-key={item.id}>{item.name}</option>:null
             ))}
            </select>
            <p className="letter-register">COLABORADOR BRECA</p>

            <label className="style-radio">
              <input type="radio" name="breca" value="SI"  onChange={(e)=>setColaboradorBreca(e.target.value)}
              checked={colaboradorBreca === "SI"} />
              <span className="radio"></span>
              <span className="text">SI</span>
            </label>

            <label className="style-radio">
              <input type="radio" name="breca" value="NO" onChange={(e)=>setColaboradorBreca(e.target.value)}
               checked={colaboradorBreca === "NO"}/>
              <span className="radio"></span>
              <span className="text">NO</span>
            </label>
             {colaboradorBreca==="SI" ? 
           <>  
             <p className="letter-register">CÓDIGO COLABORADOR BRECA</p>
             <input
              className="input-register-space"
              type="text"
              placeholder="Código"
              name="códigoBreca"
              onChange={(e)=>setCodigoBreca(e.target.value)}
              value={codigoBreca}
            /> </>:null

             }
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
