import { CardLivro } from "../components/CardLivro";
import { findAll } from "./LivrosApi";
import { useState, useRef } from "react";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);
  return (
    <div className="ListaLivrosView">
      <div className="d-flex justify-content-center m-3">
        <button
          className="btn btn-primary"
          onClick={async () => {
            const livros = await findAll();
            setLivros(livros);
            //Maneira para zerar o shelf antes de ser listado
            const livrosComShelfZerado = livros.map((livro) => ({
              ...livro,
              shelf: "none",
            }));
            setLivros(livrosComShelfZerado);
          }}
        >
          Consultar Livros
        </button>
      </div>
      <div className="row g-3">
        {livros.map((l, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <CardLivro title={l.title} authors={l.authors} shelf={l.shelf} />
          </div>
        ))}
      </div>
    </div>
  );
}
