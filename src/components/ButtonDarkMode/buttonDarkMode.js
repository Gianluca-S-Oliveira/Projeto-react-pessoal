import React, { useState } from "react";
import "./buttonDarkMode.scss";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
export default function ButtonMode() {
  // Crie um estado para controlar o modo escuro
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar entre o modo escuro e claro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Use JavaScript para adicionar ou remover a classe 'dark' no elemento body
    document.body.classList.toggle("dark-mode", darkMode);
  };

  return (
    <>
      <button onClick={toggleDarkMode} className={darkMode ? "dark-mode" : ""}>
        {darkMode ? <BsSunFill /> : <BsFillMoonFill />}
      </button>
    </>
  );
}
