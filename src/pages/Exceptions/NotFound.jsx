import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1>Nada que ver aqui!</h1>
      <p>
        <Link to="/">Volver a la pagina de inicio</Link>
      </p>
      <picture>
        <img src="https://www.fotosdememes.com/wp-content/uploads/2021/09/Tu-no-has-visto-nada.jpg" alt="" />
      </picture>
    </div>
  );
}
