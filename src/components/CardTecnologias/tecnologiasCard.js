import React from "react";
import "./tecnologia.scss";
const TecCard = ({ texto, btnLink, imagem }) => {
  return (
    <>
      <div className="cardTec">
        <img src={imagem} />
        <h4>{texto}</h4>
      </div>
    </>
  );
};

export default TecCard;
