import { CardLivro } from "../components/CardLivro";
import { useState } from "react";
import { ButtonListar } from "../components/ButtonListar";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");

  // Atualiza a estante (shelf) de um livro específico
  const atualizarShelf = (id, newShelf) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, shelf: newShelf } : livro
      )
    );
    localStorage.setItem(`shelf-${id}`, newShelf); // Também salva no localStorage
  };

  // Atualizar os livros com os valores de shelf do localStorage
  const livrosComShelf = livros.map((livro) => {
    const localShelf = localStorage.getItem(`shelf-${livro.id}`);
    return {
      ...livro,
      shelf: localShelf || livro.shelf || "none",
    };
  });

  // Filtrar livros apenas por título
  const livrosFiltrados = livrosComShelf.filter((livro) =>
    livro.title.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="ListaLivrosView">
      <div className="d-flex justify-content-center m-3">
        <ButtonListar setLivros={setLivros} />
      </div>

      {/* Input de busca por título */}
      <div className="d-flex justify-content-center m-3">
        <div className="search col-lg-6">
          <input
            type="text"
            className="form-control form-control-lg w-100 search-input"
            placeholder="Digite o título do livro..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>
      </div>

      {/* Exibição de livros filtrados */}
      {livrosFiltrados.length > 0 ? (
        <div className="row g-3">
          {livrosFiltrados.map((l) => (
            <div key={l.id} className="col-sm-12 col-md-6 col-lg-4">
              <CardLivro
                id={l.id}
                thumbnail={l.thumbnail}
                title={l.title}
                authors={l.authors}
                shelf={l.shelf} // Passa o valor atual de shelf
                language={l.language}
                categories={l.categories}
                averageRating={l.averageRating}
                atualizarShelf={atualizarShelf} // Função para atualizar a shelf
                mostrarBotoes={true} // Exibe os botões
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center m-3">
          <p className="text-muted">Nenhum livro encontrado.</p>
        </div>
      )}
    </div>
  );
}
