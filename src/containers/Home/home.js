import react from "react";
import "./home.scss";
import foto from "../../assets/images/personalFoto.png";
export default function Home() {
  return (
    <>
      <section className="container-home">
        <section className="text">
          <h1>Sou Gianluca Santos de Oliveira</h1>

          <h3>Desenvolvedor de Front-End!</h3>
        </section>
        <section className="image">
          <img src={foto} />
        </section>
      </section>
      <section className="container-about">
        {" "}
        <section className="myimage">
          <img src={foto} />
        </section>
        <section className="metext">
          <p>
            Me chamo <span>Gianluca Santos de Oliveira</span> , tenho 20 anos e
            sou desenvolvedor front end! Llocalizado na avenida augusto de
            almeida batista, em <span>Embu das Artes</span>, sou uma pessoa que
            é muito otimista e acredita na melhora constante!
          </p>
        </section>
      </section>{" "}
    </>
  );
}
