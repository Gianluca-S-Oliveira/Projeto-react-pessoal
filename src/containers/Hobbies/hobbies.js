import "./hobbies.scss";
import React from "react";
import XPCard from "../Experience/experience";
import Titulo from "../../components/SessionTitle/tituloSessao";
import HobbiesCard from "../../components/Hobbies/HobbiesCard";
import narutoImg from "../../assets/images/naruto.png";
import sekiroImg from "../../assets/images/ps4.png";
import SpImg from "../../assets/images/sao pualo.png";
export default function Hobbies() {
  return (
    <div className="hobiiesContainer">
      {" "}
      <Titulo texto={"Hobbies"} corDeFundo={"red"} />
      <HobbiesCard
        descricao={
          "Animes sempre foram um bom pasa tempo para mim, gosto de assistir assim como desenhar personagens queridos também! "
        }
        foto={narutoImg}
      />
      <HobbiesCard
        descricao={
          "Jogos são sempre uma boa companhia para mim, se desafiar e acompanhar historias controlando personagens sempre me fascinou!"
        }
        foto={sekiroImg}
      />
      <HobbiesCard
        descricao={
          "Futebol, o famoso futebol amado pelos brasileiros e por mim não seria diferente! Gosto muito de acompanhar torcer pelo meu time favorito!"
        }
        foto={SpImg}
      />
    </div>
  );
}
