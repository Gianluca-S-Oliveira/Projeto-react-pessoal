import "bootstrap/dist/css/bootstrap.min.css";
import ButtonMode from "./components/ButtonDarkMode/buttonDarkMode";
import Header from "../src/containers/Header/Header";
import Home from "../src/containers/Home/home";
import Sobre from "../src/containers/Sobre/sobre";
import Formacao from "./containers/Formacao/formacao";
import Tecnologias from "./containers/Tecnologias/tecnologias";
import Expericia from "../src/containers/Experience/experience";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hobbies from "../src/containers/Hobbies/hobbies";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/tecnologia" element={<Tecnologias />} />
          <Route path="/experiencia" element={<Expericia />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}
export default App;
