import { CardLivro } from "../components/CardLivro";
import { useState } from "react";
import { ButtonListar } from "../components/ButtonListar";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);
  return (
    <div className="ListaLivrosView">
      <div className="d-flex justify-content-center m-3">
        <ButtonListar setLivros={setLivros} />
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
