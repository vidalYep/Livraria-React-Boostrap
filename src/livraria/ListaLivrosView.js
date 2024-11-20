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
      {livros.map((l) => (
        <CardLivro title={l.title} authors={l.authors} />
      ))}
    </div>
  );
}
