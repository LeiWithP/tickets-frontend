import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1>Nada que ver aqui!</h1>
      <p>
        <Link to="/">Volver a la pagina de inicio</Link>
      </p>
    </div>
  );
}
