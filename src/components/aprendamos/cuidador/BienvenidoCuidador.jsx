import React from "react";
import "./../aprendamos.css";
import "./../../../App.css";
import "./bienvenidoCuidador.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import iconoBienvenidaCuidador from "./../../../images/icon-bienvenida-cuidador.svg";
import arrowLeft from "./../../../images/arrow-left-blue.svg";
import arrowRight from "./../../../images/arrow-right-blue.svg";
import iconAreaHigiene from "./../../../images/icon-agua.svg";
import iconAreaSocial from "./../../../images/icon-emocional.svg";
import iconAreaRutina from "./../../../images/icon-rutina.svg";
import iconAreaJuego from "./../../../images/icon-juego.svg";
import iconAreaNutricion from "./../../../images/icon-nutricion.svg";
import iconAreaSesamo from "./../../../images/icon-sesamo.svg";
import { auth, db } from "../../../components/firebase/firebase";
import arrTips from "../../../../src/data";

export const BienvenidoCuidador = ({
  idChild,
  firebaseUser,
  arrayChild,
  contenidoFirebase,
}) => {
  const [nameChild, setNameChild] = React.useState("");
  const [videoAleatorio, setVideoAleatorio] = React.useState("");
  const [texto1aAleatorio, setTexto1aAleatorio] = React.useState("");
  const [texto1bAleatorio, setTexto1bAleatorio] = React.useState("");
  const [texto2Aleatorio, setTexto2Aleatorio] = React.useState("");
  const [colaboradorBreca, setColaboradorBreca] = React.useState("");
  const [colorSeccionAleatorio, setColorSeccionAleatorio] = React.useState("");
  React.useEffect(() => {
    if (firebaseUser !== null) {
      const perfilUser = db.collection("usuarios").doc(firebaseUser.uid);
      perfilUser
        .get()
        .then((doc) => {
          setColaboradorBreca(doc.data().breca);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
    if (firebaseUser !== null && idChild !== "") {
      const childData = db
        .collection("usuarios")
        .doc(firebaseUser.uid)
        .collection("addChild")
        .doc(idChild);
      childData
        .get()
        .then((snapShots) => {
          setNameChild(snapShots.data().nameChild);
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
    {
      /* if(contenidoFirebase){
       const newFilter=  contenidoFirebase.docs.filter(item=> item.data().video!=="" && item.data().seccion=== "Sésamo")
       let  numberAleatorio = Math.round(Math.random()*(newFilter.length-1));

       setVideoAleatorio(newFilter[numberAleatorio].data().video);
   
     }*/
    }
    const newFilter = arrTips.filter(
      (item) => item.video !== "" && item.seccion !== "Sésamo"  && item.edad == localStorage.getItem('edadChildLogueadoActive')
    );
    let numberAleatorio = Math.round(Math.random() * (newFilter.length - 1));

    setVideoAleatorio(newFilter[numberAleatorio].video);
    setTexto1aAleatorio(newFilter[numberAleatorio].texto1A);
    setTexto1bAleatorio(newFilter[numberAleatorio].texto1B);
    setTexto2Aleatorio(newFilter[numberAleatorio].texto2);
    setColorSeccionAleatorio(newFilter[numberAleatorio].seccion)
    console.log("seccion", colorSeccionAleatorio)
    console.log("textoa", texto1aAleatorio)
    console.log("textob", texto1bAleatorio)
 
   /* if(colorSeccionAleatorio === "Higiene y Agua Segura") {
      setColorSeccionAleatorio("#7dc7c5")
    } else if (colorSeccionAleatorio === "Socioemocional"){
      setColorSeccionAleatorio("#ae96b2")
    } else if (colorSeccionAleatorio === "Juego"){
      setColorSeccionAleatorio("#f7b919")
    } else if (colorSeccionAleatorio === "Rutina"){
      setColorSeccionAleatorio("#ef8b44")
    } else {
      setColorSeccionAleatorio("#eb477a")
    }*/
    
  }, [firebaseUser, idChild]);

  return (
    <>
      {firebaseUser !== null ? (
        <div className="pb-5 ">
          <div style ={{backgroundColor:colorSeccionAleatorio}} className="box-title-cuidador  animated fadeIn ">
            <div className="box-row-1 ">
              {/* <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img> */}
              <img
                src={iconoBienvenidaCuidador}
                className="icon-bienvenida-cuidador"
                alt="stars-left"
              />
              <h1 className="title-cuidador tracking-in-expand-fwd-top tracking-in-expand-fwd-top">
                ¡Hola!
              </h1>
              {/* <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img> */}
            </div>

            <div className="box-row-2">
            {texto1bAleatorio !== ""  && texto1aAleatorio!== "" ? (
                              <p className="box-text ">
                                 {texto1aAleatorio}  {localStorage.getItem("nameChildActive")} {texto1bAleatorio} 
                              </p>
                            ) : (
                               texto1bAleatorio !== ""  && texto1aAleatorio === "" ? (
                                <p className="box-text ">
                                {texto1bAleatorio}
                              </p>
                              ):(
                                <p className="box-text ">
                               {localStorage.getItem("nameChildActive")}  {texto1aAleatorio}  
                              </p>
                              ) 
                              
                            )}
            </div>
          </div>
          <p className="estrellita-lila heartbeat">&#10022;</p>
          <p className="title-dit">
          {texto2Aleatorio}  
          </p>
          <p className="estrellita-lila heartbeat">&#10022;</p>
          <div className="mt-3 video">
            <div className="video-responsive">
              <iframe
                src={videoAleatorio}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <iframe  src="https://www.youtube.com/watch?v=nNdYfFO10d8&feature=youtu.be&t=1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </div>
          <div className=" caja-compartir-hola">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=http://52.177.117.53/"
              className="btn-navy-blue w-80 text-white wobble-hor-bottom"
            >
              <img src={arrowLeft} className="arrow-blue"></img>
              COMPARTIR
              <img src={arrowRight} className="arrow-blue"></img>
            </a>
          </div>

          <p className=" estrellita-lila heartbeat">&#10022;</p>
          <p className="box-modelo-volar-item-text-title text-center text-tienes-todo  mb-3">
            ¡Tienes todo lo que se necesita para desarrollar el cerebro de tus
            hijos e hijas!
          </p>
          <div className="list-btn-areas show-desktop">
            {colaboradorBreca === "NO" || colaboradorBreca === "" ? (
              <div className="btn-areas w-100">
                <div className="w-20">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/higiene`}
                    className="link"
                  >
                    <div className="area-higiene">
                      <img
                        src={iconAreaHigiene}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
                    </div>
                  </a>
                </div>
                <div className="w-20">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/socioemocional`}
                    className="link"
                  >
                    <div className="area-socioEmocional">
                      <img
                        src={iconAreaSocial}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-social">SOCIOEMOCIONAL</p>
                    </div>
                  </a>
                </div>
                <div className="w-20">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/rutina`}
                    className="link"
                  >
                    <div className="area-rutina">
                      <img
                        src={iconAreaRutina}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-rutina">RUTINA</p>
                    </div>
                  </a>
                </div>
                { localStorage.getItem('edadChildLogueadoActive')==="-1" ?"":(
                     <div className="w-20">
                     <a
                       href={`/aprendamos/cuidador/${localStorage.getItem(
                         "idChildLogueadoActive"
                       )}/juego`}
                       className="link"
                     >
                       <div className="area-juego">
                         <img
                           src={iconAreaJuego}
                           className="icon-area heartbeat"
                           alt="stars-left"
                         />
                         <p className="text-area-juego">JUEGO</p>
                       </div>
                     </a>
                   </div>
                )}
                <div className="w-20">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/nutricion`}
                    className="link"
                  >
                    <div className="area-nutricion">
                      <img
                        src={iconAreaNutricion}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-nutricion">
                        NUTRICIÓN <br /> Y FÍSICO
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <>
                
                <div className="btn-areas w-100">
                  <div className="w-20">
                    <a
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/higiene`}
                      className="link"
                    >
                      <div className="area-higiene">
                        <img
                          src={iconAreaHigiene}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-higiene">
                          HIGIENE Y AGUA SEGURA
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/socioemocional`}
                      className="link"
                    >
                      <div className="area-socioEmocional">
                        <img
                          src={iconAreaSocial}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-social">SOCIOEMOCIONAL</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/rutina`}
                      className="link"
                    >
                      <div className="area-rutina">
                        <img
                          src={iconAreaRutina}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-rutina">RUTINA</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="btn-areas w-100">
                { localStorage.getItem('edadChildLogueadoActive')==="-1" ?"":(
                     <div className="w-20">
                     <a
                       href={`/aprendamos/cuidador/${localStorage.getItem(
                         "idChildLogueadoActive"
                       )}/juego`}
                       className="link"
                     >
                       <div className="area-juego">
                         <img
                           src={iconAreaJuego}
                           className="icon-area heartbeat"
                           alt="stars-left"
                         />
                         <p className="text-area-juego">JUEGO</p>
                       </div>
                     </a>
                   </div>
                )}
                  <div className="w-20">
                    <a
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/nutricion`}
                      className="link"
                    >
                      <div className="area-nutricion">
                        <img
                          src={iconAreaNutricion}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-nutricion">
                          NUTRICIÓN <br /> Y FÍSICO
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a
                      href={`/aprendamos/cuidador/${localStorage.getItem(
                        "idChildLogueadoActive"
                      )}/sesamo`}
                      className="link"
                    >
                      <div className="area-sesamo">
                        <img
                          src={iconAreaSesamo}
                          className="icon-sesamo heartbeat"
                          alt="stars-left"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="list-btn-areas hide-desktop">
            <div className="btn-areas w-100">
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/higiene`}
                  className="link"
                >
                  <div className="area-higiene">
                    <img
                      src={iconAreaHigiene}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
                  </div>
                </a>
              </div>
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/socioemocional`}
                  className="link"
                >
                  <div className="area-socioEmocional">
                    <img
                      src={iconAreaSocial}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-social">SOCIOEMOCIONAL</p>
                  </div>
                </a>
              </div>
            </div>
            { localStorage.getItem('edadChildLogueadoActive')==="-1" ?(
              <>
              <div className="btn-areas w-100">
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/rutina`}
                  className="link"
                >
                  <div className="area-rutina">
                    <img
                      src={iconAreaRutina}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-rutina">RUTINA</p>
                  </div>
                </a>
              </div>
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/nutricion`}
                  className="link"
                >
                  <div className="area-nutricion">
                    <img
                      src={iconAreaNutricion}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-nutricion">NUTRICIÓN Y FÍSICO</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="btn-areas w-100">
              {colaboradorBreca === "SI" ? (
                <div className="w-50">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/sesamo`}
                    className="link"
                  >
                    <div className="area-sesamo">
                      <img
                        src={iconAreaSesamo}
                        className="icon-sesamo heartbeat"
                        alt="stars-left"
                      />
                    </div>
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
              </>
            ):(
                    <>
                    <div className="btn-areas w-100">
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/rutina`}
                  className="link"
                >
                  <div className="area-rutina">
                    <img
                      src={iconAreaRutina}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-rutina">RUTINA</p>
                  </div>
                </a>
              </div>
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/juego`}
                  className="link"
                >
                  <div className="area-juego">
                    <img
                      src={iconAreaJuego}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-juego">JUEGO</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="btn-areas w-100">
              <div className="w-50">
                <a
                  href={`/aprendamos/cuidador/${localStorage.getItem(
                    "idChildLogueadoActive"
                  )}/nutricion`}
                  className="link"
                >
                  <div className="area-nutricion">
                    <img
                      src={iconAreaNutricion}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-nutricion">NUTRICIÓN Y FÍSICO</p>
                  </div>
                </a>
              </div>
              {colaboradorBreca === "SI" ? (
                <div className="w-50">
                  <a
                    href={`/aprendamos/cuidador/${localStorage.getItem(
                      "idChildLogueadoActive"
                    )}/sesamo`}
                    className="link"
                  >
                    <div className="area-sesamo">
                      <img
                        src={iconAreaSesamo}
                        className="icon-sesamo heartbeat"
                        alt="stars-left"
                      />
                    </div>
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
                    </> 
                )}
            
          </div>
        </div>
      ) : (
        <div>
          <div className="box-title-cuidador mt-4 animated fadeIn ">
            <div className="box-row-1">
              {/* <img src={starsLeftDesktop} className="stars-left-desktop heartbeat"></img> */}
              <img
                src={iconoBienvenidaCuidador}
                className="icon-bienvenida-cuidador"
                alt="stars-left"
              />
              <h1 className="title-cuidador">¡Hola!</h1>
              {/* <img src={starsRightDesktop} className="stars-right-desktop heartbeat"></img> */}
            </div>

            <div className="box-row-2">

            {texto1bAleatorio !== ""  && texto1aAleatorio!== "" ? (
                              <p className="box-text ">
                                 {texto1aAleatorio}  {JSON.parse(localStorage.getItem("dateChild")).name} {texto1bAleatorio} 
                              </p>
                            ) : (
                               texto1bAleatorio !== ""  && texto1aAleatorio === "" ? (
                                <p className="box-text ">
                                {texto1bAleatorio}
                              </p>
                              ):(
                                <p className="box-text ">
                               {JSON.parse(localStorage.getItem("dateChild")).name}  {texto1aAleatorio}  
                              </p>
                              ) 
                              
                            )}
            </div>
          </div>
          <p className="estrellita-lila heartbeat">&#10022;</p>
          <p className="title-dit">
            {texto2Aleatorio}
          </p>
          <p className="estrellita-lila heartbeat">&#10022;</p>
          <div className="mt-3 video">
            <div className="video-responsive">
              <iframe
                src={videoAleatorio}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <iframe  src="https://www.youtube.com/watch?v=nNdYfFO10d8&feature=youtu.be&t=1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </div>
          <div className="caja-boton-contactanos caja-compartir-hola">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=http://52.177.117.53/"
              className="btn-navy-blue w-80 text-white wobble-hor-bottom"
            >
              <img src={arrowLeft} className="arrow-blue"></img>
              COMPARTIR
              <img src={arrowRight} className="arrow-blue"></img>
            </a>
          </div>

          <p className=" estrellita-lila heartbeat">&#10022;</p>
          <p className="box-modelo-volar-item-text-title text-center text-tienes-todo  mb-3">
            ¡Tienes todo lo que se necesita para desarrollar el cerebro de tus
            hijos e hijas!
          </p>
          <div className="list-btn-areas mb-3 show-desktop">
            {JSON.parse(localStorage.getItem("dateChild")).colaboradorBreca ===
            "NO" ? (
              <div className="btn-areas w-100">
                <div className="w-20">
                  <a href="/aprendamos/cuidador/higiene" className="link">
                    <div className="area-higiene">
                      <img
                        src={iconAreaHigiene}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
                    </div>
                  </a>
                </div>
                <div className="w-20">
                  <a
                    href="/aprendamos/cuidador/socioemocional "
                    className="link"
                  >
                    <div className="area-socioEmocional">
                      <img
                        src={iconAreaSocial}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-social">SOCIOEMOCIONAL</p>
                    </div>
                  </a>
                </div>
                <div className="w-20">
                  <a href="/aprendamos/cuidador/rutina" className="link">
                    <div className="area-rutina">
                      <img
                        src={iconAreaRutina}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-rutina">RUTINA</p>
                    </div>
                  </a>
                </div>
                {JSON.parse(localStorage.getItem("dateChild")).edad === "-1" ? (
                  ""
                ) : (
                  <div className="w-20">
                    <a href="/aprendamos/cuidador/juego" className="link">
                      <div className="area-juego">
                        <img
                          src={iconAreaJuego}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-juego">JUEGO</p>
                      </div>
                    </a>
                  </div>
                )}
                <div className="w-20">
                  <a href="/aprendamos/cuidador/nutricion" className="link">
                    <div className="area-nutricion">
                      <img
                        src={iconAreaNutricion}
                        className="icon-area heartbeat"
                        alt="stars-left"
                      />
                      <p className="text-area-nutricion">
                        NUTRICIÓN <br /> Y FÍSICO
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <>
                
                <div className="btn-areas w-100">
                  <div className="w-20">
                    <a href="/aprendamos/cuidador/higiene" className="link">
                      <div className="area-higiene">
                        <img
                          src={iconAreaHigiene}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-higiene">
                          HIGIENE Y AGUA SEGURA
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a
                      href="/aprendamos/cuidador/socioemocional"
                      className="link"
                    >
                      <div className="area-socioEmocional">
                        <img
                          src={iconAreaSocial}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-social">SOCIOEMOCIONAL</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a href="/aprendamos/cuidador/rutina" className="link">
                      <div className="area-rutina">
                        <img
                          src={iconAreaRutina}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-rutina">RUTINA</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="btn-areas w-100">
                  {JSON.parse(localStorage.getItem("dateChild")).edad ===
                  "-1" ? (
                    ""
                  ) : (
                    <div className="w-20">
                      <a href="/aprendamos/cuidador/juego" className="link">
                        <div className="area-juego">
                          <img
                            src={iconAreaJuego}
                            className="icon-area heartbeat"
                            alt="stars-left"
                          />
                          <p className="text-area-juego">JUEGO</p>
                        </div>
                      </a>
                    </div>
                  )}
                  <div className="w-20">
                    <a href="/aprendamos/cuidador/nutricion" className="link">
                      <div className="area-nutricion">
                        <img
                          src={iconAreaNutricion}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-nutricion">
                          NUTRICIÓN <br /> Y FÍSICO
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="w-20">
                    <a href="/aprendamos/cuidador/sesamo" className="link">
                      <div className="area-sesamo">
                        <img
                          src={iconAreaSesamo}
                          className="icon-sesamo heartbeat"
                          alt="stars-left"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="list-btn-areas mb-5 hide-desktop">
            <div className="btn-areas w-100">
              <div className="w-50">
                <a href="/aprendamos/cuidador/higiene" className="link">
                  <div className="area-higiene">
                    <img
                      src={iconAreaHigiene}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-higiene">HIGIENE Y AGUA SEGURA</p>
                  </div>
                </a>
              </div>
              <div className="w-50">
                <a href="/aprendamos/cuidador/socioemocional" className="link">
                  <div className="area-socioEmocional">
                    <img
                      src={iconAreaSocial}
                      className="icon-area heartbeat"
                      alt="stars-left"
                    />
                    <p className="text-area-social">SOCIOEMOCIONAL</p>
                  </div>
                </a>
              </div>
            </div>
            {JSON.parse(localStorage.getItem("dateChild")).edad === "-1" ? (
              <>
                
                <div className="btn-areas w-100">
                  <div className="w-50">
                    <a href="/aprendamos/cuidador/rutina" className="link">
                      <div className="area-rutina">
                        <img
                          src={iconAreaRutina}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-rutina">RUTINA</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-50">
                    <a href="/aprendamos/cuidador/nutricion" className="link">
                      <div className="area-nutricion">
                        <img
                          src={iconAreaNutricion}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-nutricion">
                          NUTRICIÓN Y FÍSICO
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="btn-areas w-100">
                  {JSON.parse(localStorage.getItem("dateChild"))
                    .colaboradorBreca === "SI" ? (
                    <div className="w-50">
                      <a href="/aprendamos/cuidador/sesamo" className="link">
                        <div className="area-sesamo">
                          <img
                            src={iconAreaSesamo}
                            className="icon-sesamo heartbeat"
                            alt="stars-left"
                          />
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="btn-areas w-100">
                  <div className="w-50">
                    <a href="/aprendamos/cuidador/rutina" className="link">
                      <div className="area-rutina">
                        <img
                          src={iconAreaRutina}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-rutina">RUTINA</p>
                      </div>
                    </a>
                  </div>
                  <div className="w-50">
                    <a href="/aprendamos/cuidador/juego" className="link">
                      <div className="area-juego">
                        <img
                          src={iconAreaJuego}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-juego">JUEGO</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="btn-areas w-100">
                  <div className="w-50">
                    <a href="/aprendamos/cuidador/nutricion" className="link">
                      <div className="area-nutricion">
                        <img
                          src={iconAreaNutricion}
                          className="icon-area heartbeat"
                          alt="stars-left"
                        />
                        <p className="text-area-nutricion">
                          NUTRICIÓN Y FÍSICO
                        </p>
                      </div>
                    </a>
                  </div>
                  {JSON.parse(localStorage.getItem("dateChild"))
                    .colaboradorBreca === "SI" ? (
                    <div className="w-50">
                      <a href="/aprendamos/cuidador/sesamo" className="link">
                        <div className="area-sesamo">
                          <img
                            src={iconAreaSesamo}
                            className="icon-sesamo heartbeat"
                            alt="stars-left"
                          />
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
