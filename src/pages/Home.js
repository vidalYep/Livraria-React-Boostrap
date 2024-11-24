import { Header } from "../components/Header";
import { Estantes } from "../components/Estantes";
import { useState } from "react";
import { ButtonListar } from "../components/ButtonListar";

export default function Home() {
  const [livros, setLivros] = useState([]);

  return (
    <div className="Home">
      <Header AlteraHome="nav-link active text-success" />

      {/* Botão para listar livros */}
      <div className="d-flex justify-content-center m-3">
        <ButtonListar setLivros={setLivros} />
      </div>

      {/* Estante de livros já lidos */}
      <Estantes
        IcoEstante={require("../assets/jalido.png")}
        TitleEstante={"Estante de livros já li:"}
        livros={livros} // Passa os livros para o componente
        shelf="Já lido" // Filtro para "Já lido"
      />

      {/* Estante de livros que estou lendo */}
      <Estantes
        IcoEstante={require("../assets/lendo.png")}
        TitleEstante={"Estante de livros que estou lendo:"}
        livros={livros} // Passa os livros para o componente
        shelf="Estou lendo" // Filtro para "Estou lendo"
      />

      {/* Estante de livros que quero ler */}
      <Estantes
        IcoEstante={require("../assets/queroler.png")}
        TitleEstante={"Estante de livros que quero ler:"}
        livros={livros} // Passa os livros para o componente
        shelf="Quero ler" // Filtro para "Quero ler"
      />
    </div>
  );
}
