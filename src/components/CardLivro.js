import React from "react";

export function CardLivro({
  id,
  title,
  authors,
  shelf, // O valor de shelf do livro
  thumbnail = "https://via.placeholder.com/150",
  language = "Idioma não especificado",
  categories = "Categoria não definida",
  averageRating = "Média não disponível",
  atualizarShelf,
  mostrarBotoes,
}) {
  // Função para determinar a classe de estilo do botão com base no shelf
  const getButtonClass = (targetShelf) => {
    if (shelf === targetShelf) {
      return "btn btn-success flex-grow-1 mx-2"; // Cor para o botão ativo
    }
    return "btn btn-primary flex-grow-1 mx-2"; // Cor para os botões não ativos
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

          {mostrarBotoes && (
            <div>
              <h6 className="text-center m-4">
                Clique para alterar o livro de estante:
              </h6>

              <div className="d-flex justify-content-between">
                <button
                  className={getButtonClass("Quero ler")}
                  onClick={() => atualizarShelf(id, "Quero ler")}
                >
                  Quero ler
                </button>
                <button
                  className={getButtonClass("Estou lendo")}
                  onClick={() => atualizarShelf(id, "Estou lendo")}
                >
                  Estou lendo
                </button>
                <button
                  className={getButtonClass("Já lido")}
                  onClick={() => atualizarShelf(id, "Já lido")}
                >
                  Já lido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
