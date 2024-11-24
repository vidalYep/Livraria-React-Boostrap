import { useState } from "react";
export function CardLivro({
  id,
  title,
  authors,
  shelf: initialShelf = "none",
  thumbnail = "https://via.placeholder.com/150",
  language = "Idioma não especificado",
  categories = "Categoria não definida",
  averageRating = "Média não disponível",
  atualizarShelf, // Função passada pelo componente pai
}) {
  const [shelf, setShelf] = useState(() => {
    const savedShelf = localStorage.getItem(`shelf-${id}`);
    return savedShelf ? savedShelf : initialShelf;
  });

  const handleShelfChange = (newShelf) => {
    setShelf(newShelf); // Atualiza o estado local do componente
    atualizarShelf(id, newShelf); // Notifica o pai sobre a mudança
  };

  return (
    <div className="CardLivro d-flex justify-content-center">
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img
              src={thumbnail}
              alt="Thumbnail do livro"
              style={{
                width: "128px",
                height: "200px",
                objectFit: "fill",
              }}
            />
          </div>
          <h4 className="card-title text-center m-3">{title}</h4>
          <p className="card-text">
            <b>Autor(es): </b>
            {authors}
          </p>
          <p className="card-text">
            <b>Linguagem: </b>
            {language}
          </p>
          <p className="card-text">
            <b>Categoria(s): </b>
            {categories}
          </p>
          <p className="card-text">
            <b>Média de avaliação: </b>
            {averageRating}
          </p>
          <p className="card-text">
            <b>Estante atual: </b>
            {shelf}
          </p>

          <h6 className="text-center m-4">
            Clique para alterar o livro de estante:
          </h6>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary flex-grow-1 mx-2"
              onClick={() => handleShelfChange("Quero ler")}
            >
              Quero ler
            </button>
            <button
              className="btn btn-primary flex-grow-1 mx-2"
              onClick={() => handleShelfChange("Estou lendo")}
            >
              Estou lendo
            </button>
            <button
              className="btn btn-primary flex-grow-1 mx-2"
              onClick={() => handleShelfChange("Já lido")}
            >
              Já lido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
