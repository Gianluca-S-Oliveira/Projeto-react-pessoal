import React from "react";
import "./experience.scss";
const HobbiesCard = ({ descricao, foto }) => {
  return (
    <div className="cardHobbie">
      <h5>{descricao}</h5>
      <img src={foto} />
    </div>
  );
};

export default HobbiesCard;
