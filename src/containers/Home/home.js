import react from "react";
import "./home.scss";
import foto from "../../assets/images/personalFoto.png";
export default function Home() {
  return (
    <section className="container-home">
      <section className="text">
        <h1>Sou Gianluca Santos de Oliveira</h1>

        <h3>Desenvolvedor de Front-End!</h3>
      </section>
      <section className="image">
        <img src={foto} />
      </section>
    </section>
  );
}
