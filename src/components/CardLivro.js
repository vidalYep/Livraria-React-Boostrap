export function CardLivro({
  title,
  authors,
  shelf,
  thumbnail = "https://via.placeholder.com/150",
  language = "Idioma não especificado",
  categories = "Categoria não definida",
  averageRating = "Média não disponível",
}) {
  return (
    <div className="CardLivro d-flex justify-content-center">
      <img src={thumbnail} />
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5
            className="card-title text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
            }}
          >
            {title}
          </h5>
          <p className="card-text">Autor(es): {authors}</p>
          <p className="card-text">Linguagem: {language}</p>
          <p className="card-text">Categoria(s): {categories}</p>
          <p className="card-text">Média de avaliação: {averageRating}</p>
          <p className="card-text">{shelf}</p>
          <h6 className="text-center">
            Clique para alterar o livro de estante
          </h6>
          <div className="d-flex justify-content-around">
            <a href="#" className="btn btn-primary">
              Quero ler
            </a>
            <a href="#" className="btn btn-primary">
              Estou Lendo
            </a>
            <a href="#" className="btn btn-primary">
              Já lido
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
