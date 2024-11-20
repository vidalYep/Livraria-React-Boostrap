import { Header } from "../components/Header";
import { ListaLivrosView } from "../livraria/ListaLivrosView";
export default function Busca() {
  return (
    <div className="Busca">
      <Header AlteraBusca="nav-link active text-success" />
      <ListaLivrosView/>
    </div>
  );
}
