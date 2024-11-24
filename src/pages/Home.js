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

      <Estantes
        IcoEstante={require("../assets/jalido.png")}
        TitleEstante={"Estante de livros já li:"}
        livros={livros}
        shelf="Já lido"
        mostrarBotoes={false} // Oculta os botões
      />
      <Estantes
        IcoEstante={require("../assets/lendo.png")}
        TitleEstante={"Estante de livros que estou lendo:"}
        livros={livros}
        shelf="Estou lendo"
        mostrarBotoes={false} // Oculta os botões
      />
      <Estantes
        IcoEstante={require("../assets/queroler.png")}
        TitleEstante={"Estante de livros que quero ler:"}
        livros={livros}
        shelf="Quero ler"
        mostrarBotoes={false} // Oculta os botões
      />
    </div>
  );
}
