import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const GraciasForm = () => {
  let history = useHistory();
  React.useEffect(() => {
      const interval = setInterval(() => {
        alertFunc();
      }, 5000);
      return () => clearInterval(interval);
    },
    []);

  const alertFunc = () => {
    history.push("/contactanos");
  };
  return (
    <div className="box-blue-contactanos">
      <img
        src="https://volar.org.pe/static/media/gracias-volar.png"
        alt=""
        class="img-gracias fade-in"
      ></img>
    </div>
  );
};

export default GraciasForm;
