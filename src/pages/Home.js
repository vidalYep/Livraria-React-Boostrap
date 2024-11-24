import { Header } from "../components/Header";
import { Estantes } from "../components/Estantes";
export default function Home() {
  return (
    <div className="Home">
      <Header AlteraHome="nav-link active text-success" />
      <Estantes
        IcoEstante={require("../assets/jalido.png")}
        TitleEstante={"Estante de livros já li:"}
      />
      <Estantes
        IcoEstante={require("../assets/lendo.png")}
        TitleEstante={"Estante de livros que estou lendo:"}
      />
      <Estantes
        IcoEstante={require("../assets/queroler.png")}
        TitleEstante={"Estante de livros que quero ler:"}
      />
    </div>
  );
}
