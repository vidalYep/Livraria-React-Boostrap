import { findAll } from "../livraria/LivrosApi";
import { useState } from "react";

export function ButtonListar({ setLivros }) {
  return (
    <div className="ButtonListar">
      <button
        className="btn btn-primary"
        onClick={async () => {
          const livros = await findAll();
          const livrosComShelfZerado = livros.map((livro) => ({
            ...livro,
            thumbnail:
              livro.imageLinks?.thumbnail || "/path/to/default-image.jpg",
            shelf: "none", // Resetando a estante
          }));
          setLivros(livrosComShelfZerado);
        }}
      >
        Consultar Livros
      </button>
    </div>
  );
}
