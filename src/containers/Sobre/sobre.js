import React, { useState } from "react";
import axios from "axios";
import "./sobre.scss";
export default function Sobre() {
  const [address, setAddress] = useState("");
  const fixedCep = "06814000"; // meu cep

  const fetchAddress = () => {
    axios
      .get(`https://viacep.com.br/ws/${fixedCep}/json/`)
      .then((response) => {
        const data = response.data;
        const fullAddress = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setAddress(fullAddress);
      })
      .catch((error) => {
        console.error("Erro ao buscar o endereço:", error);
        setAddress("Endereço não encontrado.");
      });
  };
  return (
    <div className="containerCep">
      <p>CEP: {fixedCep}</p>
      <button onClick={fetchAddress} className="cepbtn">
        Buscar Endereço
      </button>
      <p id="adress"> {address}</p>
    </div>
  );
}
