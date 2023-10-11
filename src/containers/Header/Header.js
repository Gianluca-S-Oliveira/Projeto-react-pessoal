import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/images/logo.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} className="logo" />
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="sobre">Sobre</a>
          </li>
          <li>
            <a href="formacao">Formação</a>
          </li>
          <li>
            <a href="experiencia">Experiências</a>
          </li>
          <li>
            <a href="tecnologia">Tecnologias</a>
          </li>
          <li>
            <a href="hobbies">Hobbies</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
