import { CardLivro } from "../components/CardLivro";
import { findAll } from "./LivrosApi";
import { useState, useRef } from "react";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);
  return (
    <div className="ListaLivrosView">
      <button
        onClick={async () => {
          const livros = await findAll();
          setLivros(livros);
        }}
      >
        Listar
      </button>
      <div className="row g-3">
        {livros.map((l, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <CardLivro title={l.title} authors={l.authors} />
          </div>
        ))}
      </div>
    </div>
  );
}
