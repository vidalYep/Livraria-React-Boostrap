import { findAll } from "../livraria/LivrosApi";

export function ButtonListar({ setLivros }) {
  return (
    <div className="ButtonListar">
      <button
        className="btn btn-primary"
        onClick={async () => {
          const livros = await findAll();
          const livrosComShelfZerado = livros.map((livro) => ({
            ...livro,
            thumbnail: livro.imageLinks?.thumbnail,
            shelf: "None", // Resetando a estante
          }));
          setLivros(livrosComShelfZerado);
        }}
      >
        Consultar Livros
      </button>
    </div>
  );
}
