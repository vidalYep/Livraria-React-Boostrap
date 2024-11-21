import { CardLivro } from "../components/CardLivro";
import { useState } from "react";
import { ButtonListar } from "../components/ButtonListar";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");
  const livrosFiltrados = livros.filter((livro) =>
    livro.title.toLowerCase().includes(termoBusca.toLowerCase())
  );
  return (
    <div className="ListaLivrosView">
      <div className="d-flex justify-content-center m-3">
        <ButtonListar setLivros={setLivros} />
      </div>

      <div className="d-flex justify-content-center m-3">
        <div class="search">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Digite o título do livro..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>
      </div>
      {livrosFiltrados.length > 0 ? (
        <div className="row g-3">
          {livrosFiltrados.map((l, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <CardLivro title={l.title} authors={l.authors} shelf={l.shelf} />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center m-3">
          <p className="text-muted">Nenhum livro encontrado com esse título.</p>
        </div>
      )}
    </div>
  );
}
