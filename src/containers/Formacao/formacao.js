import React from "react";
import "./formacao.scss";
import EtecImage from "../../assets/images/etec.jpg";
import FiapImage from "../../assets/images/fiap.png";
import Card from "../../components/CardFormacao/formacaoCard";
import Titulo from "../../components/SessionTitle/tituloSessao";

export default function Formacao() {
  return (
    <div className="formacao">
      <Titulo texto={"Formação"} corDeFundo={"white"} />
      <div className="cards">
        <Card
          imagem={EtecImage}
          btnLink={"https://www.vestibulinhoetec.com.br/home/"}
          texto={
            "Cursei Ensino Médio e técnico em informática, de 2018 com conclusão em 2020."
          }
        />
        <Card
          imagem={FiapImage}
          btnLink={
            "https://www.fiap.com.br/graduacao/?gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfcVj1KcbwQvigLbbNa8YNnapbyAKCN61_LnVV_z1OSKBoVMUK3EUIaAnNyEALw_wcB"
          }
          texto={
            "Cursando ensino superior emsistemas para internet com previsão de conclusão para 2024."
          }
        />
      </div>
    </div>
  );
}
