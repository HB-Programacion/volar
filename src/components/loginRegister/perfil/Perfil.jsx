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
import { useCollection } from "react-firebase-hooks/firestore";
import childA from "./../../../images/child-a.svg";
import childO from "./../../../images/child-o.svg";
import deleteImg from "./../../../images/delete.svg";
import editImg from "./../../../images/edit.svg";

const Perfil = (props) => {
  const [emailEdit, setEmailEdit] = React.useState("");
  const [nameEdit, setNameEdit] = React.useState("");
  const [lastNameEdit, setLastNameEdit] = React.useState("");
  const [dataPerfil, setDataPerfil] = React.useState("");
  const [dataPerfilChild, setDataPerfilChild] = React.useState("");
  const [departamentos, setDepartamentos] = React.useState([]);
  const [provincias, setProvincias] = React.useState([]);
  const [distritos, setDistritos] = React.useState([]);
  const [departamentoElegido, setDepartamentoElegido] = React.useState("");
  const [departamentoElegidoKey, setDepartamentoElegidoKey] = React.useState(
    ""
  );
  const [provinciaElegido, setProvinciaElegido] = React.useState("");
  const [provinciaElegidoKey, setProvinciaElegidoKey] = React.useState("");
  const [distritoElegido, setDistritoElegido] = React.useState("");
  const [colaboradorBreca, setColaboradorBreca] = React.useState("");
  const [codigoBreca, setCodigoBreca] = React.useState("");
  const [error, setError] = React.useState(null);
  const [guardado, setGuardado] = React.useState(null);
  const [editNameChild, setEditNameChild] = React.useState("");
  const [editSexoChild, setEditSexoChild] = React.useState("");
  const [
    editFechaNacimientoChild,
    setEditFechaNacimientoChild,
  ] = React.useState("");
  const [editRelationshipChild, setEditRelationshipChild] = React.useState("");
  const [idChild, setIdChild] = React.useState(null);
  const [errorChild, setErrorChild] = React.useState(null);
  const [guardadoChild, setGuardadoChild] = React.useState(null);
  const [editEdadChild, setEditEdadChild] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [repeatNewPassword, setRepeatNewPassword] = React.useState("");

  const [usuarioChild] = useCollection(
    db
      .collection("usuarios")
      .doc(props.firebaseUser.uid)
      .collection("addChild"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  React.useEffect(() => {
    if (props.firebaseUser !== null) {
      const perfilUser = db.collection("usuarios").doc(props.firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) => {
          setDataPerfil(doc.data());
          setEmailEdit(doc.data().email);
          setNameEdit(doc.data().nombre);
          setLastNameEdit(doc.data().apellido);
          setPassword(doc.data().password);
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
      if (idChild !== null) {
        const perfilUserChild = db
          .collection("usuarios")
          .doc(props.firebaseUser.uid)
          .collection("addChild")
          .doc(idChild);
        perfilUserChild
          .get()
          .then((item) => {
            setDataPerfilChild(item.data());
            setEditNameChild(item.data().nameChild);
            setEditSexoChild(item.data().sexoChild);
            setEditEdadChild(item.data().edadChild);
            setEditRelationshipChild(item.data().relationshipChild);
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      }
    }

    fetch("formularioJson/departamentos.json")
      .then((response) => response.json())
      .then((datos) => {
        setDepartamentos(datos);
      });

    fetch("formularioJson/provincias.json")
      .then((response) => response.json())
      .then((datos) => {
        setProvincias(datos);
      });

    fetch("formularioJson/distritos.json")
      .then((response) => response.json())
      .then((datos) => {
        setDistritos(datos);
      });

    {
      /* if (editFechaNacimientoChild !== "") {
      const birthday = new Date(editFechaNacimientoChild.split("-").join("/"));
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs);
      setEditEdadChild(Math.abs(ageDate.getUTCFullYear() - 1970));
    } */
    }
  }, [props.firebaseUser, idChild, editFechaNacimientoChild]);

  const handleInputChangeDepartamento = (event) => {
    setDepartamentoElegido(event.target.value);
    const selectedIndex = event.target.options.selectedIndex;
    setDepartamentoElegidoKey(
      event.target.options[selectedIndex].getAttribute("data-key")
    );
  };
  console.log("edadChild", editEdadChild);
  const handleInputChangeProvincia = (event) => {
    setProvinciaElegido(event.target.value);
    const selectedIndex = event.target.options.selectedIndex;
    setProvinciaElegidoKey(
      event.target.options[selectedIndex].getAttribute("data-key")
    );
  };

  const procesarDatosPerfil = (e) => {
    e.preventDefault();

    setGuardado(null);
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
    if (!colaboradorBreca.trim()) {
      setError("Seleccione si es colaborador breca");
      return;
    }

    if (colaboradorBreca === "SI" && !codigoBreca.trim()) {
      setError("Colocar código Breca");
      return;
    }

    if(codigoBreca !== "Breca2020" && colaboradorBreca === "SI" ){
      setError("Código Breca incorrecto");
      return
    }

    editarPerfil();
    setError(null);
  };

  const actualizarPassword = (e) => {
    e.preventDefault();
    setGuardado(null);
    if (password !== currentPassword) {
      setError("Contraseña actual incorrecta");
      return;
    }
    if (!newPassword.trim()) {
      setError("Añadir la nueva contraseña");
      return;
    }
    if (newPassword !== repeatNewPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    editarPassword();
    setError(null);
  };
  const editarPerfil = async (e) => {
    try {
      const user = auth.currentUser;
      console.log("judith", user);
      user
        .updateEmail(emailEdit)
        .then(function () {
          // Update successful.
        })
        .catch(function (error) {
          console.log("error", error);
        });
      await db
        .collection("usuarios")
        .doc(props.firebaseUser.uid)
        .update({
          ...dataPerfil,
          nombre: nameEdit,
          apellido: lastNameEdit,
          email: emailEdit,
          departamento: departamentoElegido,
          provincia: provinciaElegido,
          distrito: distritoElegido,
          breca: colaboradorBreca,
          codigoBreca: codigoBreca,
          departamentoKey: departamentoElegidoKey,
          provinciaKey: provinciaElegidoKey,
        });

      setGuardado("Tu  perfil ha sido guardo exitosamente");
    } catch (error) {
      console.log(error);
    }
  };

  const editarPassword = async (e) => {
    try {
      const user = auth.currentUser;
      user.updatePassword(newPassword);
      await db
        .collection("usuarios")
        .doc(props.firebaseUser.uid)
        .update({
          ...dataPerfil,
          password: newPassword,
        });

      setGuardado("Tu contraseña ha sido actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  const activarEdicion = (item) => {
    /*  setEditNameChild(item.data().nameChild);
    setEditSexo(item.data().sexoChild);
    setEditFechaNacimiento(item.data().nacimientoChild);
    setEditRelationshipChild(item.data().relationshipChild);*/
    setIdChild(item.id);
  };

  const procesarDatosPerfilChild = (e) => {
    e.preventDefault();
    if (!editNameChild.trim()) {
      setErrorChild("Agregar nombre del niño(a)");
      return;
    }
    if (!editSexoChild.trim()) {
      setErrorChild("Agregar sexo del niño(a)");
      return;
    }
    if (!editEdadChild.trim()) {
      setErrorChild("Agregar Rango de edad del niño(a)");
      return;
    }
    if (!editRelationshipChild.trim()) {
      setErrorChild("Agregue el parentesco con el niño(a)");
      return;
    }

    updateChild();
    setErrorChild(null);
  };

  const updateChild = async (e) => {
    try {
      await db
        .collection("usuarios")
        .doc(props.firebaseUser.uid)
        .collection("addChild")
        .doc(idChild)
        .update({
          ...dataPerfilChild,
          nameChild: editNameChild,
          sexoChild: editSexoChild,
          relationshipChild: editRelationshipChild,
          edadChild: editEdadChild,
        });

      setGuardadoChild("El perfil de tu niño a sido editado");
    } catch (error) {
      console.log(error);
    }
  };
  const eliminar = async (id) => {
    try {
      await db
        .collection("usuarios")
        .doc(props.firebaseUser.uid)
        .collection("addChild")
        .doc(id)
        .delete();

      /*  const arrayFiltrado = tareas.filter((item) => item.id !== id);
      setTareas(arrayFiltrado);*/
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-child animated fadeIn">
      <h2 className="subtittle-register-child tracking-in-expand-fwd-top">
        Actualizar Perfil
      </h2>
      {usuarioChild && (
        <div>
          {usuarioChild.docs.length === 0 ? (
            <div className="list-register">
              <form onSubmit={procesarDatosPerfil}>
                {error && <div className="alert alert-danger">{error}</div>}
                {guardado && (
                  <div className="alert alert-success">{guardado}</div>
                )}
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p className="letter-register">NOMBRE:</p>
                    <input
                      className="input-register-space"
                      type="text"
                      placeholder="Nombre"
                      name="nombre"
                      onChange={(e) => setNameEdit(e.target.value)}
                      value={nameEdit}
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p className="letter-register">APELLIDO:</p>
                    <input
                      className="input-register-space"
                      type="text"
                      placeholder="Apellido"
                      name="apellido"
                      onChange={(e) => setLastNameEdit(e.target.value)}
                      value={lastNameEdit}
                    />
                  </div>
                </div>
                <p className="letter-register">CORREO:</p>
                {props.firebaseUser.providerData[0].providerId ===
                "google.com" ? (
                  <input
                    className="input-register-space"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmailEdit(e.target.value)}
                    value={emailEdit}
                    disabled
                  />
                ) : (
                  <input
                    className="input-register-space"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmailEdit(e.target.value)}
                    value={emailEdit}
                  />
                )}

                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <p className="letter-register">DEPARTAMENTO</p>
                    <select
                      className="select-register-space"
                      onChange={handleInputChangeDepartamento}
                      value={departamentoElegido}
                    >
                      <option>---SELECCIONA---</option>
                      {departamentos.map((item) => (
                        <option key={item.id} data-key={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <p className="letter-register">PROVINCIA</p>
                    <select
                      className="select-register-space"
                      onChange={handleInputChangeProvincia}
                      value={provinciaElegido}
                    >
                      <option>---SELECCIONA---</option>
                      {provincias.map((item) =>
                        item.department_id === departamentoElegidoKey ? (
                          <option key={item.id} data-key={item.id}>
                            {item.name}
                          </option>
                        ) : null
                      )}
                    </select>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <p className="letter-register">DISTRITO</p>
                    <select
                      className="select-register-space"
                      onChange={(e) => setDistritoElegido(e.target.value)}
                      value={distritoElegido}
                    >
                      <option>---SELECCIONA---</option>
                      {distritos.map((item) =>
                        item.province_id === provinciaElegidoKey ? (
                          <option key={item.id} data-key={item.id}>
                            {item.name}
                          </option>
                        ) : null
                      )}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <p className="letter-register">COLABORADOR BRECA</p>

                    <label className="style-radio">
                      <input
                        type="radio"
                        name="breca"
                        value="SI"
                        onChange={(e) => setColaboradorBreca(e.target.value)}
                        checked={colaboradorBreca === "SI"}
                      />
                      <span className="radio"></span>
                      <span className="text">SI</span>
                    </label>

                    <label className="style-radio">
                      <input
                        type="radio"
                        name="breca"
                        value="NO"
                        onChange={(e) => setColaboradorBreca(e.target.value)}
                        checked={colaboradorBreca === "NO"}
                      />
                      <span className="radio"></span>
                      <span className="text">NO</span>
                    </label>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    {colaboradorBreca === "SI" ? (
                      <>
                        <p className="letter-register">
                          CÓDIGO COLABORADOR BRECA
                        </p>
                        <input
                          className="input-register-space"
                          type="text"
                          placeholder="Código"
                          name="códigoBreca"
                          onChange={(e) => setCodigoBreca(e.target.value)}
                          value={codigoBreca}
                        />
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <button
                      className="btn-navy-blue text-white wobble-hor-bottom boton-guardar-perfil out-none-button"
                      type="submit"
                    >
                      <img src={arrowLeft} className="arrow-blue"></img>
                      GUARDAR
                      <img src={arrowRight} className="arrow-blue"></img>
                    </button>
                  </div>
                  <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-3">
                    <Link className="siguiente link" to="/registro-niño">
                      Siguiente &rArr;
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="list-register2">
              <div className="row">
                <div className="col-sm-12 col-md-12	col-lg-7 col-xl-7">
                  <p className="subtitulo-perfil">Datos Generales</p>
                  <form onSubmit={procesarDatosPerfil}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {guardado && (
                      <div className="alert alert-success">{guardado}</div>
                    )}
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <p className="letter-register">NOMBRE:</p>
                        <input
                          className="input-register-space"
                          type="text"
                          placeholder="Nombre"
                          name="nombre"
                          onChange={(e) => setNameEdit(e.target.value)}
                          value={nameEdit}
                        />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <p className="letter-register">APELLIDO:</p>
                        <input
                          className="input-register-space"
                          type="text"
                          placeholder="Apellido"
                          name="apellido"
                          onChange={(e) => setLastNameEdit(e.target.value)}
                          value={lastNameEdit}
                        />
                      </div>
                    </div>
                    <p className="letter-register">CORREO:</p>
                    {props.firebaseUser.providerData[0].providerId ===
                    "google.com" ? (
                      <input
                        className="input-register-space"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmailEdit(e.target.value)}
                        value={emailEdit}
                        disabled
                      />
                    ) : (
                      <input
                        className="input-register-space"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmailEdit(e.target.value)}
                        value={emailEdit}
                      />
                    )}
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <p className="letter-register">DEPARTAMENTO</p>
                        <select
                          className="select-register-space"
                          onChange={handleInputChangeDepartamento}
                          value={departamentoElegido}
                        >
                          <option>-SELECCIONA-</option>
                          {departamentos.map((item) => (
                            <option key={item.id} data-key={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <p className="letter-register">PROVINCIA</p>
                        <select
                          className="select-register-space"
                          onChange={handleInputChangeProvincia}
                          value={provinciaElegido}
                        >
                          <option>-SELECCIONA-</option>
                          {provincias.map((item) =>
                            item.department_id === departamentoElegidoKey ? (
                              <option key={item.id} data-key={item.id}>
                                {item.name}
                              </option>
                            ) : null
                          )}
                        </select>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <p className="letter-register">DISTRITO</p>
                        <select
                          className="select-register-space"
                          onChange={(e) => setDistritoElegido(e.target.value)}
                          value={distritoElegido}
                        >
                          <option>-SELECCIONA-</option>
                          {distritos.map((item) =>
                            item.province_id === provinciaElegidoKey ? (
                              <option key={item.id} data-key={item.id}>
                                {item.name}
                              </option>
                            ) : null
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <p className="letter-register">COLABORADOR BRECA</p>

                        <label className="style-radio">
                          <input
                            type="radio"
                            name="breca"
                            value="SI"
                            onChange={(e) =>
                              setColaboradorBreca(e.target.value)
                            }
                            checked={colaboradorBreca === "SI"}
                          />
                          <span className="radio"></span>
                          <span className="text">SI</span>
                        </label>

                        <label className="style-radio">
                          <input
                            type="radio"
                            name="breca"
                            value="NO"
                            onChange={(e) =>
                              setColaboradorBreca(e.target.value)
                            }
                            checked={colaboradorBreca === "NO"}
                          />
                          <span className="radio"></span>
                          <span className="text">NO</span>
                        </label>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        {colaboradorBreca === "SI" ? (
                          <>
                            <p className="letter-register">
                              CÓDIGO COLABORADOR BRECA
                            </p>
                            <input
                              className="input-register-space"
                              type="text"
                              placeholder="Código"
                              name="códigoBreca"
                              onChange={(e) => setCodigoBreca(e.target.value)}
                              value={codigoBreca}
                            />{" "}
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <button
                          className="btn-navy-blue text-white out-none-button"
                          type="submit"
                        >
                          <img src={arrowLeft} className="arrow-blue"></img>
                          GUARDAR
                          <img src={arrowRight} className="arrow-blue"></img>
                        </button>
                      </div>
                    </div>
                  </form>
                  {props.firebaseUser.providerData[0].providerId !==
                  "google.com" ? (
                    <form onSubmit={actualizarPassword}>
                      <div className="box-actualizar-password">
                        <div className="row">
                          <Link
                            style={{
                              margin: "auto",
                              fontWeight: 700,
                              fontSize: "1.3rem",
                              marginBottom: "1.5rem",
                            }}
                          >
                            Cambiar contraseña
                          </Link>
                        </div>
                        {error && (
                          <div className="alert alert-danger">{error}</div>
                        )}
                        {guardado && (
                          <div className="alert alert-success">{guardado}</div>
                        )}
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <p className="letter-register">CONTRASEÑA ACTUAL</p>
                            <input
                              className="input-register-space"
                              type="password"
                              placeholder="Contraseña Actual"
                              name="Actual Contraseña"
                              onChange={(e) =>
                                setCurrentPassword(e.target.value)
                              }
                              value={currentPassword}
                            />
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            {password === currentPassword &&
                            password.length >= 6 ? (
                              <p>La contraseña actual es la correcta</p>
                            ) : (
                              <p>La contraseña actual no es la correcta</p>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <p className="letter-register">NUEVA CONTRASEÑA</p>
                            <input
                              className="input-register-space"
                              type="password"
                              placeholder="Nueva Contraseña"
                              name="Nueva Contraseña"
                              onChange={(e) => setNewPassword(e.target.value)}
                              value={newPassword}
                            />
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <p className="letter-register">
                              REPETIR NUEVA CONTRASEÑA
                            </p>
                            <input
                              className="input-register-space"
                              type="password"
                              placeholder="Repetir Nueva Contraseña"
                              name="Repetir Nueva Contraseña"
                              onChange={(e) =>
                                setRepeatNewPassword(e.target.value)
                              }
                              value={repeatNewPassword}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                              className="btn-navy-blue-password text-white out-none-button"
                              type="submit"
                            >
                              <img
                                src={arrowLeft}
                                className="arrow-blue-password"
                              ></img>
                              Actualizar contraseña
                              <img
                                src={arrowRight}
                                className="arrow-blue-password"
                              ></img>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-sm-12 col-md-12	col-lg-5 col-xl-5">
                  <div className="vertical-line"></div>
                  <div className="marginPerfilChild">
                    <p className="subtitulo-perfil">Niños:</p>
                    {usuarioChild.docs.map((item, key) => (
                      <div className="row">
                        <div key={item.id} className="col-12">
                          <div className="box-sectionChild">
                            {item.data().sexoChild === "Femenino" ? (
                              <img
                                src={childA}
                                className="icono-video-tip"
                                alt="icono de tip"
                              />
                            ) : (
                              <img
                                src={childO}
                                className="icono-video-tip"
                                alt="icono de tip"
                              />
                            )}
                            <div className="box-text-video-tip mt-3">
                              <h3 className="subtittle-video-tip">
                                {item.data().nameChild}
                              </h3>
                              {/* <h5 className="text-video-tip">
                                Edad: {item.data().edadChild}
                              </h5> */}
                            </div>
                            <div className="btn-editar-eliminar">
                            <button
                                type="button"
                                className="btn btn-sm float-right out-none-button"
                                data-toggle="modal"
                                data-target={"#editar" + key}
                                onClick={() => activarEdicion(item)}
                              >
                                <img src={editImg} className="w-35"></img>
                              </button>
                              <button
                                type="button"
                                className="btn  btn-sm float-right out-none-button"
                                data-toggle="modal"
                                data-target={"#hola" + key}
                              >
                                <img src={deleteImg} className="w-35"></img>
                              </button>
                              
                              <div
                                className="modal fade "
                                id={"hola" + key}
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog " role="document">
                                  <div className="modal-content ">
                                    <div className="modal-body texto-modal ">
                                      ¿Estás seguro de querer borrar el perfil
                                      de {item.data().nameChild}?
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary out-none-button"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary out-none-button"
                                        data-dismiss="modal"
                                        onClick={() => eliminar(item.id)}
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="modal fade "
                                id={"editar" + key}
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Editar datos del niño
                                      </h5>
                                      <button
                                        type="button"
                                        className="close out-none-button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <form onSubmit={procesarDatosPerfilChild}>
                                        {errorChild && (
                                          <div className="alert alert-danger">
                                            {errorChild}
                                          </div>
                                        )}
                                        {guardadoChild && (
                                          <div className="alert alert-success">
                                            {guardadoChild}
                                          </div>
                                        )}
                                        <div className="row">
                                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                            <p className="letter-register">
                                              NOMBRE DE NIÑO:
                                            </p>
                                            <input
                                              className="input-register-space"
                                              type="text"
                                              placeholder="Nombre del niño(a)"
                                              name="nameChild"
                                              onChange={(e) =>
                                                setEditNameChild(e.target.value)
                                              }
                                              value={editNameChild}
                                            />
                                          </div>

                                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                            <p className="letter-register">
                                              SEXO:
                                            </p>
                                            <select
                                              className="select-register-space"
                                              onChange={(e) =>
                                                setEditSexoChild(e.target.value)
                                              }
                                              value={editSexoChild}
                                            >
                                              <option>---SELECCIONA---</option>
                                              <option>Masculino</option>
                                              <option>Femenino</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                            <p className="letter-register">
                                              EDAD DEL NIÑO
                                            </p>
                                            <select
                                              className="select-register-space"
                                              onChange={(e) =>
                                                setEditEdadChild(e.target.value)
                                              }
                                              value={editEdadChild}
                                            >
                                              <option value="">
                                                ---SELECCIONA---
                                              </option>
                                              <option value="-1">
                                                Niño(a) por nacer
                                              </option>
                                              <option value="0">
                                                0 - 1 año
                                              </option>
                                              <option value="1">
                                                1 - 2 años
                                              </option>
                                              <option value="2">
                                                2 - 3 años
                                              </option>
                                              <option value="3">
                                                3 - 4 años
                                              </option>
                                              <option value="4">
                                                4 - 5 años
                                              </option>
                                              <option value="5">
                                                5 - 6 años
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                            <p className="letter-register">
                                              PARENTESCO CON EL NIÑO(A):
                                            </p>
                                            <select
                                              className="select-register-space"
                                              onChange={(e) =>
                                                setEditRelationshipChild(
                                                  e.target.value
                                                )
                                              }
                                              value={editRelationshipChild}
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

                                        <button
                                          className="btn-navy-blue text-white out-none-button"
                                          type="submit"
                                        >
                                          <img
                                            src={arrowLeft}
                                            className="arrow-blue "
                                          ></img>
                                          GUARDAR
                                          <img
                                            src={arrowRight}
                                            className="arrow-blue"
                                          ></img>
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Link className="addChild" to="/registro-niño">
                      + AGREGAR NIÑO
                      <img src={arrowLeft} className="arrow-blue"></img>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(Perfil);
