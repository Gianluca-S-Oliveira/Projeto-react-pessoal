import React from "react";
import "./formacao.scss";
const Card = ({ texto, btnLink, imagem }) => {
  return (
    <>
      <div className="card">
        <img src={imagem} />
        <h4>{texto}</h4>
        <a href={btnLink} target="_blank">
          Saiba Mais{" "}
        </a>
      </div>
    </>
  );
};

export default Card;
