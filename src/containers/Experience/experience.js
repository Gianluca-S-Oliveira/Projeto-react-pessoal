import React from "react";
import "./experience.scss";
import Titulo from "../../components/SessionTitle/tituloSessao";
export default function Expericia() {
  return (
    <>
      {" "}
      <Titulo texto={"Experiêcia"} corDeFundo={"red"} />
      <div className="experince">
        <div className="experices">
          <div id="sercom">
            {" "}
            <h3 className="empresa">Sercom</h3>
            <p>Atuei como operador de telemarketing por 3 meses</p>
            <p className="time">2021</p>
          </div>
          <div id="versed">
            <h3 className="empresa">Versed IT</h3>
            <p>Atuei como estagiario em segurança da informação</p>
            <p className="time">2021-2022</p>
          </div>
          <div id="sf">
            {" "}
            <h3 className="empresa">SF Labs</h3>
            <p>Atuando como estagiário em desenvolvimento de front end</p>
            <p className="time">2022 - Atualmente</p>
          </div>
        </div>
      </div>
    </>
  );
}
