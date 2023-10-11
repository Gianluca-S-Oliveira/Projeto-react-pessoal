import "./tecnologias.scss";

import React from "react";
import CssImg from "../../assets/images/css.png";
import HtmlImg from "../../assets/images/html.png";
import JSImg from "../../assets/images/js.png";
import ReactImg from "../../assets/images/react.png";
import GatsbyImg from "../../assets/images/gatsby.png";
import TailwindImg from "../../assets/images/tailwind.png";
import TecCard from "../../components/CardTecnologias/tecnologiasCard";
import Titulo from "../../components/SessionTitle/tituloSessao";

export default function Tecnologias() {
  return (
    <div className="tecnologias">
      <Titulo texto={"Tecnologias"} corDeFundo={"white"} />
      <div className="cards-tec">
        <TecCard imagem={CssImg} texto={"CSS"} />
        <TecCard imagem={HtmlImg} texto={"HTML"} />
        <TecCard imagem={JSImg} texto={"JAVASCRIPT"} />
        <TecCard imagem={ReactImg} texto={"REACT JS"} />
        <TecCard imagem={GatsbyImg} texto={"GATSBY JS"} />
        <TecCard imagem={TailwindImg} texto={"TAILWIND"} />
      </div>
    </div>
  );
}
