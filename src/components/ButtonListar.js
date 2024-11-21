import { findAll } from "../livraria/LivrosApi";

export function ButtonListar({ setLivros }) {
  return (
    <div className="ButtonListar">
      <button
        className="btn btn-primary"
        onClick={async () => {
          const livros = await findAll();
          // Zera o campo shelf antes de listar
          const livrosComShelfZerado = livros.map((livro) => ({
            ...livro,
            shelf: "None",
          }));
          setLivros(livrosComShelfZerado);
        }}
      >
        Consultar Livros
      </button>
    </div>
  );
}
