import "./sobre.scss";
import ElementoComEstilo from "../../components/SessionTitle/tituloSessao";
import foto from "../../assets/images/about.jpg";
import Titulo from "../../components/SessionTitle/tituloSessao";
export default function Sobre() {
  return (
    <>
      {" "}
      <Titulo texto={"Sobre Mim"} corDeFundo={"red"} />
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
      </section>
    </>
  );
}
