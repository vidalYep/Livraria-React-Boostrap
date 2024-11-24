import React, { useState, useEffect } from "react";

export function CardLivro({
  id,
  title,
  authors,
  shelf: initialShelf = "none", // O valor original vindo da API
  thumbnail = "https://via.placeholder.com/150",
  language = "Idioma não especificado",
  categories = "Categoria não definida",
  averageRating = "Média não disponível",
  comments,
}) {
  const [shelf, setShelf] = useState(() => {
    // Tenta buscar o valor de shelf do localStorage, se não existir, usa o valor default
    const savedShelf = localStorage.getItem(`shelf-${id}`);
    return savedShelf ? savedShelf : initialShelf; // Retorna o valor salvo ou o valor da API
  });

  // Função para atualizar o estado e salvar a alteração no localStorage
  const handleShelfChange = (newShelf) => {
    setShelf(newShelf);
    // Salva o novo valor de shelf no localStorage com a chave específica do livro (id)
    localStorage.setItem(`shelf-${id}`, newShelf);
  };

  useEffect(() => {
    // Garantir que o shelf seja sincronizado com o localStorage ao carregar o componente
    localStorage.setItem(`shelf-${id}`, shelf);
  }, [id, shelf]);

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
          <h4
            className="card-title text-center m-3"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {title}
          </h4>
          <p className="card-text">
            <span
              className="text-highlight"
              style={{
                fontWeight: "bold",
              }}
            >
              Autor(es):{" "}
            </span>
            {authors}
          </p>
          <p className="card-text">
            <span
              className="text-highlight"
              style={{
                fontWeight: "bold",
              }}
            >
              Linguagem:{" "}
            </span>
            {language}
          </p>
          <p className="card-text">
            <span
              className="text-highlight"
              style={{
                fontWeight: "bold",
              }}
            >
              Categoria(s):{" "}
            </span>
            {categories}
          </p>
          <p className="card-text">
            <span
              className="text-highlight"
              style={{
                fontWeight: "bold",
              }}
            >
              Média de avaliação:{" "}
            </span>
            {averageRating}
          </p>
          <p className="card-text">
            <span
              className="text-highlight"
              style={{
                fontWeight: "bold",
              }}
            >
              Estante atual:{" "}
            </span>
            {shelf}
          </p>
          <p className="card-text">{id}</p>
          <p className="card-text">{comments}</p>

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
              Estou Lendo
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
