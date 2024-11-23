export function CardLivro({
  title,
  authors,
  shelf,
  thumbnail = "https://via.placeholder.com/150",
  language = "Idioma não especificado",
  categories = "Categorias não definidas",
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
          <p className="card-text">Categorias: {categories}</p>
          <p className="card-text">Média de avaliação: {averageRating}</p>

          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}
