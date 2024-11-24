import React from "react";
import { CardLivro } from "./CardLivro";

export function Estantes({ IcoEstante, TitleEstante, livros, shelf }) {
  const livrosFiltrados = livros
    .map((livro) => {
      const localShelf = localStorage.getItem(`shelf-${livro.id}`);
      return { ...livro, shelf: localShelf || livro.shelf || "none" };
    })
    .filter((livro) => livro.shelf === shelf);

  return (
    <div className="Estantes border border-black mb-4">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={IcoEstante}
              alt="Ícone da estante"
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <h3 className="mb-0">{TitleEstante}</h3>
          </div>
        </div>
      </nav>

      <div className="row g-3 p-3">
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((livro) => (
            <div key={livro.id} className="col-sm-12 col-md-6 col-lg-4">
              <CardLivro
                id={livro.id}
                thumbnail={livro.thumbnail}
                title={livro.title}
                authors={livro.authors}
                shelf={livro.shelf}
                language={livro.language}
                categories={livro.categories}
                averageRating={livro.averageRating}
              />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center text-muted">
            <p>Nenhum livro nesta estante.</p>
          </div>
        )}
      </div>
    </div>
  );
}
