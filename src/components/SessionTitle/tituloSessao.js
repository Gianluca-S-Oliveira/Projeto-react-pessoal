import React from "react";
import "./titulo.scss";
const Titulo = ({ texto, corDeFundo }) => {
  const estiloPredefinido = {
    color: corDeFundo,
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: 800,
    position: "relative",

    margin: "80px",
    borderTop: `3px solid ${corDeFundo}`,
    borderBottom: `3px solid ${corDeFundo}`,
    width: "40%",
    margin: "50px auto",
  };

  return (
    <div style={estiloPredefinido}>
      <h2>{texto}</h2>
    </div>
  );
};

export default Titulo;
